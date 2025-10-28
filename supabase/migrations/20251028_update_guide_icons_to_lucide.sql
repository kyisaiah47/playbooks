-- Update guide icon fields to use Lucide icon names instead of emojis
-- Add comments to clarify the fields store lucide icon names

COMMENT ON COLUMN guides.icon IS 'Lucide icon name (e.g., "Heart", "Briefcase", "BookOpen")';
COMMENT ON COLUMN notes.custom_icon IS 'Lucide icon name (e.g., "Heart", "Briefcase", "BookOpen") - custom icon for user note';

-- Update existing guide icons from emojis to lucide names
UPDATE guides
SET icon = CASE
  WHEN icon = '💼' THEN 'Briefcase'
  WHEN icon = '💻' THEN 'Laptop'
  WHEN icon = '🎯' THEN 'Target'
  WHEN icon = '❤️' THEN 'Heart'
  WHEN icon = '💕' THEN 'Heart'
  WHEN icon = '👥' THEN 'Users'
  WHEN icon = '🏥' THEN 'Activity'
  WHEN icon = '💪' THEN 'Activity'
  WHEN icon = '🏃' THEN 'Activity'
  WHEN icon = '🌱' THEN 'Sprout'
  WHEN icon = '🎓' THEN 'GraduationCap'
  WHEN icon = '📚' THEN 'BookOpen'
  WHEN icon = '💡' THEN 'Lightbulb'
  WHEN icon = '✨' THEN 'Sparkles'
  WHEN icon = '💰' THEN 'DollarSign'
  WHEN icon = '💵' THEN 'DollarSign'
  WHEN icon = '💳' THEN 'CreditCard'
  WHEN icon = '🏦' THEN 'Building'
  WHEN icon = '🏠' THEN 'Home'
  WHEN icon = '🎉' THEN 'PartyPopper'
  WHEN icon = '📝' THEN 'FileText'
  WHEN icon = '📄' THEN 'File'
  WHEN icon = '📁' THEN 'Folder'
  WHEN icon = '🚀' THEN 'Rocket'
  WHEN icon = '⭐' THEN 'Star'
  WHEN icon = '🔧' THEN 'Wrench'
  WHEN icon = '📊' THEN 'BarChart'
  WHEN icon = '🎨' THEN 'Palette'
  ELSE 'BookOpen'
END
WHERE icon IS NOT NULL AND icon ~ '[^\x00-\x7F]';

-- Update notes custom icons similarly
UPDATE notes
SET custom_icon = CASE
  WHEN custom_icon = '💼' THEN 'Briefcase'
  WHEN custom_icon = '❤️' THEN 'Heart'
  WHEN custom_icon = '🏥' THEN 'Activity'
  WHEN custom_icon = '🌱' THEN 'Sprout'
  WHEN custom_icon = '💰' THEN 'DollarSign'
  WHEN custom_icon = '🏠' THEN 'Home'
  WHEN custom_icon = '📚' THEN 'BookOpen'
  WHEN custom_icon = '💡' THEN 'Lightbulb'
  WHEN custom_icon = '🎯' THEN 'Target'
  WHEN custom_icon = '🚀' THEN 'Rocket'
  WHEN custom_icon = '⭐' THEN 'Star'
  WHEN custom_icon = '📝' THEN 'FileText'
  ELSE 'BookOpen'
END
WHERE custom_icon IS NOT NULL AND custom_icon ~ '[^\x00-\x7F]';
