-- Supabase Schema for Templata Content
-- All tables prefixed with templata_ for shared database

-- Articles table
CREATE TABLE IF NOT EXISTS templata_articles (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  author TEXT NOT NULL,
  published_at TEXT NOT NULL,
  updated_at TEXT,
  read_time TEXT NOT NULL,
  tags TEXT[] NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  type TEXT NOT NULL CHECK (type IN ('guide', 'article', 'checklist', 'tool')),
  difficulty TEXT NOT NULL CHECK (difficulty IN ('beginner', 'intermediate', 'expert')),
  meta_title TEXT,
  meta_description TEXT,
  template TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Prompts table
CREATE TABLE IF NOT EXISTS templata_prompts (
  id TEXT PRIMARY KEY,
  prompt TEXT NOT NULL,
  category TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('research', 'action', 'decision', 'planning')),
  template_id TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Marketing pages table
CREATE TABLE IF NOT EXISTS templata_marketing_pages (
  id SERIAL PRIMARY KEY,
  template_id TEXT NOT NULL UNIQUE,
  hero_title TEXT NOT NULL,
  hero_subtitle TEXT NOT NULL,
  hero_description TEXT NOT NULL,
  features JSONB NOT NULL,
  steps JSONB NOT NULL,
  prompts JSONB NOT NULL,
  articles JSONB NOT NULL,
  cta_title TEXT NOT NULL,
  cta_description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Templates table
CREATE TABLE IF NOT EXISTS templata_templates (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  sections JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_templata_articles_slug ON templata_articles(slug);
CREATE INDEX IF NOT EXISTS idx_articles_template ON templata_articles(template);
CREATE INDEX IF NOT EXISTS idx_templata_prompts_template ON templata_prompts(template_id);
CREATE INDEX IF NOT EXISTS idx_templata_marketing_template ON templata_marketing_pages(template_id);

-- Enable Row Level Security (RLS)
ALTER TABLE templata_articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE templata_prompts ENABLE ROW LEVEL SECURITY;
ALTER TABLE templata_marketing_pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE templata_templates ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access to templata articles" ON templata_articles FOR SELECT USING (true);
CREATE POLICY "Allow public read access to templata prompts" ON templata_prompts FOR SELECT USING (true);
CREATE POLICY "Allow public read access to templata marketing" ON templata_marketing_pages FOR SELECT USING (true);
CREATE POLICY "Allow public read access to templata templates" ON templata_templates FOR SELECT USING (true);
