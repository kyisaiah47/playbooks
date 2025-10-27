-- Add custom name and icon fields to user_guides table
-- This allows users to customize their guide instances

ALTER TABLE user_guides
ADD COLUMN IF NOT EXISTS custom_name TEXT,
ADD COLUMN IF NOT EXISTS custom_icon TEXT;

-- Add comment to explain these fields
COMMENT ON COLUMN user_guides.custom_name IS 'User-customized name for this guide instance (overrides guide.name)';
COMMENT ON COLUMN user_guides.custom_icon IS 'User-customized icon for this guide instance (overrides guide.icon)';
