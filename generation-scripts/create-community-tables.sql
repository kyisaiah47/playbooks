-- Community Features Schema for Templata
-- Phase 1-3: Comments, Requests, Expert System

-- Guide Comments (threaded discussions on each template)
CREATE TABLE IF NOT EXISTS templata_guide_comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  template_id TEXT NOT NULL REFERENCES templata_templates(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  parent_id UUID REFERENCES templata_guide_comments(id) ON DELETE CASCADE,
  upvotes INT DEFAULT 0,
  is_helpful BOOLEAN DEFAULT false,
  is_expert BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Guide Requests (user-submitted requests for new guides)
CREATE TABLE IF NOT EXISTS templata_guide_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  email TEXT,
  topic TEXT NOT NULL,
  description TEXT,
  category TEXT,
  status TEXT DEFAULT 'queued' CHECK (status IN ('queued', 'processing', 'ready', 'published', 'merged', 'declined')),
  votes INT DEFAULT 1,
  published_template_id TEXT REFERENCES templata_templates(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Request Votes (upvoting guide requests)
CREATE TABLE IF NOT EXISTS templata_request_votes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  request_id UUID NOT NULL REFERENCES templata_guide_requests(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(request_id, user_id)
);

-- Experts (verified contributors - Phase 3)
CREATE TABLE IF NOT EXISTS templata_experts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  name TEXT NOT NULL,
  credentials TEXT,
  bio TEXT,
  specialties TEXT[],
  website_url TEXT,
  linkedin_url TEXT,
  verified_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Comment Votes (upvoting helpful comments)
CREATE TABLE IF NOT EXISTS templata_comment_votes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  comment_id UUID NOT NULL REFERENCES templata_guide_comments(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(comment_id, user_id)
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_guide_comments_template ON templata_guide_comments(template_id);
CREATE INDEX IF NOT EXISTS idx_guide_comments_parent ON templata_guide_comments(parent_id);
CREATE INDEX IF NOT EXISTS idx_guide_comments_user ON templata_guide_comments(user_id);
CREATE INDEX IF NOT EXISTS idx_guide_comments_created ON templata_guide_comments(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_guide_requests_status ON templata_guide_requests(status);
CREATE INDEX IF NOT EXISTS idx_guide_requests_votes ON templata_guide_requests(votes DESC);
CREATE INDEX IF NOT EXISTS idx_guide_requests_created ON templata_guide_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_request_votes_request ON templata_request_votes(request_id);
CREATE INDEX IF NOT EXISTS idx_request_votes_user ON templata_request_votes(user_id);
CREATE INDEX IF NOT EXISTS idx_comment_votes_comment ON templata_comment_votes(comment_id);

-- Enable Row Level Security
ALTER TABLE templata_guide_comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE templata_guide_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE templata_request_votes ENABLE ROW LEVEL SECURITY;
ALTER TABLE templata_experts ENABLE ROW LEVEL SECURITY;
ALTER TABLE templata_comment_votes ENABLE ROW LEVEL SECURITY;

-- RLS Policies for Comments
CREATE POLICY "Anyone can read comments" ON templata_guide_comments FOR SELECT USING (true);
CREATE POLICY "Authenticated users can create comments" ON templata_guide_comments FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own comments" ON templata_guide_comments FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own comments" ON templata_guide_comments FOR DELETE USING (auth.uid() = user_id);

-- RLS Policies for Guide Requests
CREATE POLICY "Anyone can read guide requests" ON templata_guide_requests FOR SELECT USING (true);
CREATE POLICY "Anyone can create guide requests" ON templata_guide_requests FOR INSERT WITH CHECK (true);
CREATE POLICY "Users can update own requests" ON templata_guide_requests FOR UPDATE USING (auth.uid() = user_id OR user_id IS NULL);

-- RLS Policies for Request Votes
CREATE POLICY "Anyone can read request votes" ON templata_request_votes FOR SELECT USING (true);
CREATE POLICY "Authenticated users can vote" ON templata_request_votes FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can remove own votes" ON templata_request_votes FOR DELETE USING (auth.uid() = user_id);

-- RLS Policies for Comment Votes
CREATE POLICY "Anyone can read comment votes" ON templata_comment_votes FOR SELECT USING (true);
CREATE POLICY "Authenticated users can vote on comments" ON templata_comment_votes FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can remove own comment votes" ON templata_comment_votes FOR DELETE USING (auth.uid() = user_id);

-- RLS Policies for Experts
CREATE POLICY "Anyone can read expert profiles" ON templata_experts FOR SELECT USING (true);

-- Function to update vote counts on guide_requests
CREATE OR REPLACE FUNCTION update_request_votes()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE templata_guide_requests
    SET votes = votes + 1
    WHERE id = NEW.request_id;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE templata_guide_requests
    SET votes = votes - 1
    WHERE id = OLD.request_id;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-update vote counts
CREATE TRIGGER request_votes_trigger
AFTER INSERT OR DELETE ON templata_request_votes
FOR EACH ROW EXECUTE FUNCTION update_request_votes();

-- Function to update comment vote counts
CREATE OR REPLACE FUNCTION update_comment_votes()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE templata_guide_comments
    SET upvotes = upvotes + 1
    WHERE id = NEW.comment_id;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE templata_guide_comments
    SET upvotes = upvotes - 1
    WHERE id = OLD.comment_id;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-update comment vote counts
CREATE TRIGGER comment_votes_trigger
AFTER INSERT OR DELETE ON templata_comment_votes
FOR EACH ROW EXECUTE FUNCTION update_comment_votes();

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
CREATE TRIGGER update_guide_comments_updated_at BEFORE UPDATE ON templata_guide_comments
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_guide_requests_updated_at BEFORE UPDATE ON templata_guide_requests
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
