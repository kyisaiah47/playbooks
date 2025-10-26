-- User template unlocks schema for freemium model
-- This schema tracks which templates users have unlocked

-- Users table (tracks subscription tier)
CREATE TABLE IF NOT EXISTS templata_users (
  id TEXT PRIMARY KEY, -- Auth user ID from Supabase Auth
  email TEXT NOT NULL UNIQUE,
  subscription_tier TEXT NOT NULL DEFAULT 'free' CHECK (subscription_tier IN ('free', 'pro')),
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User template unlocks table
CREATE TABLE IF NOT EXISTS templata_user_template_unlocks (
  id SERIAL PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES templata_users(id) ON DELETE CASCADE,
  template_id TEXT NOT NULL,
  unlocked_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, template_id)
);

-- Indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_user_template_unlocks_user_id ON templata_user_template_unlocks(user_id);
CREATE INDEX IF NOT EXISTS idx_user_template_unlocks_template_id ON templata_user_template_unlocks(template_id);
CREATE INDEX IF NOT EXISTS idx_users_subscription_tier ON templata_users(subscription_tier);

-- Enable Row Level Security
ALTER TABLE templata_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE templata_user_template_unlocks ENABLE ROW LEVEL SECURITY;

-- RLS Policies for users table
-- Users can read their own data
CREATE POLICY "Users can read own data" ON templata_users
  FOR SELECT
  USING (auth.uid() = id);

-- Users can update their own data (but not subscription tier - that's controlled by backend)
CREATE POLICY "Users can update own data" ON templata_users
  FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (
    auth.uid() = id AND
    subscription_tier = (SELECT subscription_tier FROM templata_users WHERE id = auth.uid())
  );

-- RLS Policies for template unlocks table
-- Users can read their own unlocked templates
CREATE POLICY "Users can read own unlocks" ON templata_user_template_unlocks
  FOR SELECT
  USING (auth.uid() = user_id);

-- Function to check unlock limit for free tier users
CREATE OR REPLACE FUNCTION check_template_unlock_limit()
RETURNS TRIGGER AS $$
DECLARE
  user_tier TEXT;
  unlock_count INT;
BEGIN
  -- Get user's subscription tier
  SELECT subscription_tier INTO user_tier
  FROM templata_users
  WHERE id = NEW.user_id;

  -- Only check limit for free tier users
  IF user_tier = 'free' THEN
    -- Count existing unlocks
    SELECT COUNT(*) INTO unlock_count
    FROM templata_user_template_unlocks
    WHERE user_id = NEW.user_id;

    -- Prevent more than 3 unlocks for free tier
    IF unlock_count >= 3 THEN
      RAISE EXCEPTION 'Free tier users can only unlock 3 templates. Please upgrade to Pro for unlimited access.';
    END IF;
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to enforce unlock limit
CREATE TRIGGER enforce_template_unlock_limit
  BEFORE INSERT ON templata_user_template_unlocks
  FOR EACH ROW
  EXECUTE FUNCTION check_template_unlock_limit();

-- View to get user's unlocked templates with template details
CREATE OR REPLACE VIEW templata_user_unlocked_templates AS
SELECT
  u.user_id,
  u.template_id,
  u.unlocked_at,
  t.name as template_name,
  t.description as template_description,
  t.category as template_category
FROM templata_user_template_unlocks u
LEFT JOIN templata_templates t ON u.template_id = t.id;

-- Grant access to the view
GRANT SELECT ON templata_user_unlocked_templates TO authenticated;
