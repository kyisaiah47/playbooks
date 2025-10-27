-- ================================================
-- CONSOLIDATE CATEGORIES INTO 6 MAIN CATEGORIES
-- ================================================

-- New categories:
-- 1. Career & Work
-- 2. Relationships
-- 3. Health & Wellness
-- 4. Personal Growth
-- 5. Finance
-- 6. Life Events

-- Update all templates to use the 6 main categories
UPDATE templates
SET category = CASE
  -- Career & Work
  WHEN category IN ('Career & Finance', 'Career Development', 'Professional Development', 'Job Search', 'Work Life Balance')
    THEN 'Career & Work'

  -- Relationships
  WHEN category IN ('Family & Relationships', 'Dating & Romance', 'Marriage', 'Parenting', 'Social Life')
    THEN 'Relationships'

  -- Health & Wellness
  WHEN category IN ('Health & Fitness', 'Mental Health', 'Physical Health', 'Wellness', 'Medical', 'Therapy', 'Recovery', 'Self Care')
    THEN 'Health & Wellness'

  -- Personal Growth
  WHEN category IN (
    'Education & Learning',
    'Music & Arts',
    'Creative Arts & Hobbies',
    'Creative & Performance',
    'Creative Arts & Performance',
    'Technology & Making',
    'Community & Advocacy',
    'Skill Development',
    'Learning',
    'Hobbies',
    'Arts',
    'Music',
    'Creative'
  )
    THEN 'Personal Growth'

  -- Finance (separate from Career)
  WHEN category IN ('Finance', 'Personal Finance', 'Investing', 'Budgeting', 'Money Management')
    THEN 'Finance'

  -- Life Events
  WHEN category IN ('Life Planning', 'Life Transitions', 'Milestones', 'Major Events', 'Emergency Planning', 'Crisis Management')
    THEN 'Life Events'

  -- Default: categorize by best fit
  ELSE 'Personal Growth'
END
WHERE category NOT IN ('Career & Work', 'Relationships', 'Health & Wellness', 'Personal Growth', 'Finance', 'Life Events');

-- Verify the consolidation
-- This will show the count of templates in each new category
-- Comment out in production, just for verification
-- SELECT category, COUNT(*) as count
-- FROM templates
-- GROUP BY category
-- ORDER BY category;
