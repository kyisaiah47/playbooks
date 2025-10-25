-- Rename template column to guide in readings table
ALTER TABLE readings RENAME COLUMN template TO guide;

-- Update any indexes or constraints that reference the old column name
-- (Add specific index/constraint renames here if needed)
