-- Rename columns in questions table (formerly prompts) to use question terminology
-- This aligns database schema with code terminology

-- Rename prompt column to question
ALTER TABLE questions RENAME COLUMN prompt TO question;

-- Rename prompt_number to question_number
ALTER TABLE questions RENAME COLUMN prompt_number TO question_number;

-- Rename prompt_group_category to question_group_category
ALTER TABLE questions RENAME COLUMN prompt_group_category TO question_group_category;

-- Update any indexes that reference the old column names
-- (They will automatically be renamed by PostgreSQL when columns are renamed)

-- Note: Foreign key constraints and indexes are automatically updated by PostgreSQL
-- when columns are renamed, so no additional work needed for those
