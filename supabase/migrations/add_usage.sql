CREATE TABLE IF NOT EXISTS usage (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id         UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  month           TEXT NOT NULL, -- e.g. '2026-06'
  playbooks_used  INTEGER DEFAULT 0,
  feedback_used   INTEGER DEFAULT 0,
  UNIQUE(user_id, month)
);

CREATE INDEX IF NOT EXISTS idx_usage_user_month ON usage(user_id, month);

CREATE OR REPLACE FUNCTION increment_usage(p_user_id UUID, p_month TEXT, p_field TEXT)
RETURNS VOID AS $$
BEGIN
  INSERT INTO usage (user_id, month, playbooks_used, feedback_used)
    VALUES (p_user_id, p_month, 0, 0)
    ON CONFLICT (user_id, month) DO NOTHING;

  IF p_field = 'playbooks_used' THEN
    UPDATE usage SET playbooks_used = playbooks_used + 1
      WHERE user_id = p_user_id AND month = p_month;
  ELSIF p_field = 'feedback_used' THEN
    UPDATE usage SET feedback_used = feedback_used + 1
      WHERE user_id = p_user_id AND month = p_month;
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

ALTER TABLE usage ENABLE ROW LEVEL SECURITY;
CREATE POLICY "usage_select" ON usage FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "usage_insert" ON usage FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "usage_update" ON usage FOR UPDATE USING (auth.uid() = user_id);
