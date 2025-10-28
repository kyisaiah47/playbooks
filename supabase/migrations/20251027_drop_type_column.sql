-- Drop type column from readings table
ALTER TABLE readings
DROP COLUMN IF EXISTS type;

-- Drop type column from questions table
ALTER TABLE questions
DROP COLUMN IF EXISTS type;
