-- Update templata_templates table to match GuidanceTemplate interface
ALTER TABLE templata_templates
  ADD COLUMN IF NOT EXISTS title TEXT,
  ADD COLUMN IF NOT EXISTS icon TEXT,
  ADD COLUMN IF NOT EXISTS difficulty TEXT,
  ADD COLUMN IF NOT EXISTS estimated_time TEXT,
  ADD COLUMN IF NOT EXISTS tags TEXT[],
  ADD COLUMN IF NOT EXISTS last_updated TEXT,
  ADD COLUMN IF NOT EXISTS version TEXT;

-- Update name column to NOT NULL if it isn't already
ALTER TABLE templata_templates
  ALTER COLUMN name SET NOT NULL;

-- Add prompt_group_category to prompts table (for grouping prompts by their category section)
ALTER TABLE templata_prompts
  ADD COLUMN IF NOT EXISTS prompt_group_category TEXT;

-- Add prompt_number to track the order of prompts
ALTER TABLE templata_prompts
  ADD COLUMN IF NOT EXISTS prompt_number INTEGER;

-- Drop the old type constraint and create a new one with our actual categories
ALTER TABLE templata_prompts
  DROP CONSTRAINT IF EXISTS templata_prompts_type_check;

ALTER TABLE templata_prompts
  ADD CONSTRAINT templata_prompts_type_check
  CHECK (type IN ('research', 'planning', 'reflection', 'action', 'decision'));

-- Create index on tags for faster searching
CREATE INDEX IF NOT EXISTS idx_templata_templates_tags ON templata_templates USING GIN(tags);

-- Create index on difficulty for filtering
CREATE INDEX IF NOT EXISTS idx_templata_templates_difficulty ON templata_templates(difficulty);

-- Create index on category for filtering
CREATE INDEX IF NOT EXISTS idx_templata_templates_category ON templata_templates(category);
