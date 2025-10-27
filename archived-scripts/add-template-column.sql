-- Add template column to templata_articles table
-- This replaces the related_templates array with a single template string

ALTER TABLE templata_articles
ADD COLUMN IF NOT EXISTS template TEXT;

-- Create index for performance
CREATE INDEX IF NOT EXISTS idx_articles_template ON templata_articles(template);

-- Add comment
COMMENT ON COLUMN templata_articles.template IS 'The template ID this article belongs to (replaces related_templates array)';
