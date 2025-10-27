-- Drop unnecessary columns from readings and questions tables

-- Drop difficulty and tags from readings
ALTER TABLE readings
DROP COLUMN IF EXISTS difficulty,
DROP COLUMN IF EXISTS tags;

-- Drop question_group_category from questions
ALTER TABLE questions
DROP COLUMN IF EXISTS question_group_category;
