-- Create collections table
CREATE TABLE IF NOT EXISTS collections (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  icon TEXT,
  guide_ids TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert initial collections
INSERT INTO collections (id, name, description, guide_ids) VALUES
  ('new-parent-essentials', 'New Parent Essentials', 'Everything you need to prepare for parenthood - from pregnancy planning to baby''s first year', ARRAY[]::TEXT[]),
  ('career-changer-pack', 'Career Changer''s Pack', 'Complete resources for successfully transitioning to a new career path', ARRAY[]::TEXT[]),
  ('financial-fresh-start', 'Financial Fresh Start', 'Build a solid financial foundation with budgeting, saving, and debt management', ARRAY[]::TEXT[]),
  ('wedding-planning-complete', 'Complete Wedding Planning', 'Everything you need for your perfect wedding day', ARRAY[]::TEXT[]),
  ('home-buyer-bundle', 'Home Buyer''s Bundle', 'Navigate the home buying process from search to closing', ARRAY[]::TEXT[]),
  ('entrepreneur-starter', 'Entrepreneur Starter Kit', 'Launch and grow your business with confidence', ARRAY[]::TEXT[])
ON CONFLICT (id) DO NOTHING;
