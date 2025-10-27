-- Wipe all user data except demo account
-- Demo user ID: 11111111-1111-1111-1111-111111111111
-- Demo workspace ID: 95bdebcb-b20e-4d85-948d-fa511cf7e244

-- Delete all notes (user_guides) from non-demo workspaces
DELETE FROM notes
WHERE workspace_id != '95bdebcb-b20e-4d85-948d-fa511cf7e244';

-- Delete all tasks from non-demo workspaces
DELETE FROM tasks
WHERE workspace_id != '95bdebcb-b20e-4d85-948d-fa511cf7e244';

-- Delete all calendar events from non-demo workspaces
DELETE FROM calendar_events
WHERE workspace_id != '95bdebcb-b20e-4d85-948d-fa511cf7e244';

-- Delete all daily notes from non-demo workspaces
DELETE FROM daily_notes
WHERE workspace_id != '95bdebcb-b20e-4d85-948d-fa511cf7e244';

-- Delete all journal entries from non-demo users
DELETE FROM journal_entries
WHERE user_id != '11111111-1111-1111-1111-111111111111';

-- Delete all pages from non-demo workspaces
DELETE FROM pages
WHERE workspace_id != '95bdebcb-b20e-4d85-948d-fa511cf7e244';

-- Delete all workspaces except demo workspace
DELETE FROM workspaces
WHERE id != '95bdebcb-b20e-4d85-948d-fa511cf7e244';

-- Check demo account notes and their guide references
SELECT
  n.id,
  n.guide_id,
  g.name as guide_name,
  CASE
    WHEN g.id IS NULL THEN 'ORPHANED - guide does not exist'
    ELSE 'OK'
  END as status
FROM notes n
LEFT JOIN guides g ON n.guide_id = g.id
WHERE n.workspace_id = '95bdebcb-b20e-4d85-948d-fa511cf7e244';

-- Delete orphaned notes in demo workspace (notes referencing non-existent guides)
DELETE FROM notes
WHERE workspace_id = '95bdebcb-b20e-4d85-948d-fa511cf7e244'
  AND guide_id NOT IN (SELECT id FROM guides);

-- Show remaining demo notes
SELECT
  n.id,
  g.name as guide_name,
  n.progress,
  n.created_at
FROM notes n
LEFT JOIN guides g ON n.guide_id = g.id
WHERE n.workspace_id = '95bdebcb-b20e-4d85-948d-fa511cf7e244'
ORDER BY n.created_at DESC;
