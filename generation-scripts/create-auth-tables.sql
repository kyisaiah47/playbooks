-- Create users table (custom auth, not Supabase Auth)
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create workspace_responses table for template prompt answers
CREATE TABLE IF NOT EXISTS workspace_responses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  template_id TEXT NOT NULL,
  prompt_id TEXT NOT NULL,
  response TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, template_id, prompt_id)
);

-- Create reflections table for daily reflections
CREATE TABLE IF NOT EXISTS reflections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  prompt TEXT,
  content TEXT,
  mood TEXT,
  tags TEXT[], -- Array of tags
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, date)
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_workspace_responses_user_id ON workspace_responses(user_id);
CREATE INDEX IF NOT EXISTS idx_workspace_responses_template_id ON workspace_responses(template_id);
CREATE INDEX IF NOT EXISTS idx_reflections_user_id ON reflections(user_id);
CREATE INDEX IF NOT EXISTS idx_reflections_date ON reflections(date);

-- Enable Row Level Security (RLS)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE workspace_responses ENABLE ROW LEVEL SECURITY;
ALTER TABLE reflections ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
-- Users can only see their own data
CREATE POLICY users_select_own ON users FOR SELECT USING (true); -- Allow reading for auth
CREATE POLICY users_update_own ON users FOR UPDATE USING (id = current_setting('app.current_user_id')::uuid);

-- Workspace responses policies
CREATE POLICY workspace_responses_select_own ON workspace_responses FOR SELECT USING (user_id = current_setting('app.current_user_id')::uuid);
CREATE POLICY workspace_responses_insert_own ON workspace_responses FOR INSERT WITH CHECK (user_id = current_setting('app.current_user_id')::uuid);
CREATE POLICY workspace_responses_update_own ON workspace_responses FOR UPDATE USING (user_id = current_setting('app.current_user_id')::uuid);
CREATE POLICY workspace_responses_delete_own ON workspace_responses FOR DELETE USING (user_id = current_setting('app.current_user_id')::uuid);

-- Reflections policies
CREATE POLICY reflections_select_own ON reflections FOR SELECT USING (user_id = current_setting('app.current_user_id')::uuid);
CREATE POLICY reflections_insert_own ON reflections FOR INSERT WITH CHECK (user_id = current_setting('app.current_user_id')::uuid);
CREATE POLICY reflections_update_own ON reflections FOR UPDATE USING (user_id = current_setting('app.current_user_id')::uuid);
CREATE POLICY reflections_delete_own ON reflections FOR DELETE USING (user_id = current_setting('app.current_user_id')::uuid);
