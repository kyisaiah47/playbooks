-- ============================================================
-- Playbook Platform Schema
-- Replaces: guides, tracks, questions, answers, readings, notes
-- ============================================================

-- Core playbook entity
-- Combines the old Guide (template) + Track (user instance) into one.
-- AI generates this for a specific user based on their context description.
CREATE TABLE IF NOT EXISTS playbooks (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id       UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  title         TEXT NOT NULL,
  description   TEXT,
  context       TEXT NOT NULL,          -- user's original natural language prompt
  is_public     BOOLEAN DEFAULT true,   -- visible in community browse
  is_forked     BOOLEAN DEFAULT false,
  forked_from   UUID REFERENCES playbooks(id) ON DELETE SET NULL,
  created_at    TIMESTAMPTZ DEFAULT NOW(),
  updated_at    TIMESTAMPTZ DEFAULT NOW()
);

-- All items inside a playbook — tasks, questions, resources unified
CREATE TABLE IF NOT EXISTS items (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  playbook_id   UUID NOT NULL REFERENCES playbooks(id) ON DELETE CASCADE,
  type          TEXT NOT NULL CHECK (type IN ('task', 'question', 'resource')),
  content       TEXT NOT NULL,          -- task text / question text / resource name
  phase         TEXT,                   -- optional grouping e.g. "Before You Start", "6 Months Out"
  position      INTEGER NOT NULL DEFAULT 0,

  -- task fields
  completed     BOOLEAN DEFAULT false,

  -- question fields
  answer        TEXT,                   -- user's written answer
  ai_feedback   TEXT,                   -- Claude's inline response to the answer

  -- resource fields
  resource_type TEXT,                   -- 'venue', 'book', 'person', 'video', 'tool', 'website'
  url           TEXT,

  created_at    TIMESTAMPTZ DEFAULT NOW(),
  updated_at    TIMESTAMPTZ DEFAULT NOW()
);

-- Community engagement
CREATE TABLE IF NOT EXISTS playbook_likes (
  user_id       UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  playbook_id   UUID REFERENCES playbooks(id) ON DELETE CASCADE,
  created_at    TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY (user_id, playbook_id)
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_playbooks_user_id    ON playbooks(user_id);
CREATE INDEX IF NOT EXISTS idx_playbooks_is_public  ON playbooks(is_public);
CREATE INDEX IF NOT EXISTS idx_items_playbook_id    ON items(playbook_id);
CREATE INDEX IF NOT EXISTS idx_items_type           ON items(type);
CREATE INDEX IF NOT EXISTS idx_playbook_likes_playbook ON playbook_likes(playbook_id);

-- RLS policies
ALTER TABLE playbooks ENABLE ROW LEVEL SECURITY;
ALTER TABLE items ENABLE ROW LEVEL SECURITY;
ALTER TABLE playbook_likes ENABLE ROW LEVEL SECURITY;

-- Playbooks: owner can do anything, everyone can read public ones
CREATE POLICY "playbooks_select" ON playbooks FOR SELECT
  USING (is_public = true OR auth.uid() = user_id);

CREATE POLICY "playbooks_insert" ON playbooks FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "playbooks_update" ON playbooks FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "playbooks_delete" ON playbooks FOR DELETE
  USING (auth.uid() = user_id);

-- Items: accessible if you own the playbook or it's public
CREATE POLICY "items_select" ON items FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM playbooks
      WHERE playbooks.id = items.playbook_id
        AND (playbooks.is_public = true OR playbooks.user_id = auth.uid())
    )
  );

CREATE POLICY "items_insert" ON items FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM playbooks
      WHERE playbooks.id = items.playbook_id
        AND playbooks.user_id = auth.uid()
    )
  );

CREATE POLICY "items_update" ON items FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM playbooks
      WHERE playbooks.id = items.playbook_id
        AND playbooks.user_id = auth.uid()
    )
  );

CREATE POLICY "items_delete" ON items FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM playbooks
      WHERE playbooks.id = items.playbook_id
        AND playbooks.user_id = auth.uid()
    )
  );

-- Likes: users manage their own
CREATE POLICY "likes_select" ON playbook_likes FOR SELECT USING (true);
CREATE POLICY "likes_insert" ON playbook_likes FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "likes_delete" ON playbook_likes FOR DELETE USING (auth.uid() = user_id);
