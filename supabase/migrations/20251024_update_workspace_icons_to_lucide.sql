-- Update workspace icon field to use Lucide icon names instead of emojis
-- Add comment to clarify the field stores lucide icon names

COMMENT ON COLUMN workspaces.icon IS 'Lucide icon name (e.g., "Briefcase", "Home", "Folder")';
COMMENT ON COLUMN pages.icon IS 'Lucide icon name (e.g., "FileText", "Book", "Calendar")';

-- Update existing workspace icons from emojis to lucide names
-- This is a one-time migration for existing data
UPDATE workspaces
SET icon = CASE
  WHEN icon = '💼' THEN 'Briefcase'
  WHEN icon = '🏠' THEN 'Home'
  WHEN icon = '📁' THEN 'Folder'
  WHEN icon = '🎯' THEN 'Target'
  WHEN icon = '🚀' THEN 'Rocket'
  WHEN icon = '💡' THEN 'Lightbulb'
  WHEN icon = '⭐' THEN 'Star'
  WHEN icon = '🎨' THEN 'Palette'
  WHEN icon = '📚' THEN 'BookOpen'
  WHEN icon = '🔧' THEN 'Wrench'
  WHEN icon = '📊' THEN 'BarChart'
  WHEN icon = '🌟' THEN 'Sparkles'
  WHEN icon = '🎓' THEN 'GraduationCap'
  WHEN icon = '💻' THEN 'Laptop'
  WHEN icon = '📝' THEN 'FileText'
  ELSE 'Folder' -- Default fallback
END
WHERE icon IS NOT NULL;
