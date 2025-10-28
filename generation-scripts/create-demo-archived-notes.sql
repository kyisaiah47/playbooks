-- Create some archived notes for demo user
-- Demo user ID: demo-user-id-123

-- First, let's create some user_guides (notes) for the demo user with different guides
INSERT INTO notes (id, user_id, workspace_id, guide_id, progress, archived, archived_at, created_at, updated_at)
VALUES 
  -- Archived guided notes
  (gen_random_uuid(), 'demo-user-id-123', 'demo-workspace-id-456', 
   (SELECT id FROM guides WHERE name = 'Managing Anxiety' LIMIT 1), 
   45, true, NOW() - INTERVAL '5 days', NOW() - INTERVAL '30 days', NOW() - INTERVAL '5 days'),
  
  (gen_random_uuid(), 'demo-user-id-123', 'demo-workspace-id-456', 
   (SELECT id FROM guides WHERE name = 'Building a Fitness Habit' LIMIT 1), 
   80, true, NOW() - INTERVAL '10 days', NOW() - INTERVAL '60 days', NOW() - INTERVAL '10 days'),
  
  (gen_random_uuid(), 'demo-user-id-123', 'demo-workspace-id-456', 
   (SELECT id FROM guides WHERE name = 'Starting a Side Income' LIMIT 1), 
   25, true, NOW() - INTERVAL '2 days', NOW() - INTERVAL '15 days', NOW() - INTERVAL '2 days'),
  
  -- Archived blank notes
  (gen_random_uuid(), 'demo-user-id-123', 'demo-workspace-id-456', 
   NULL, 
   0, true, NOW() - INTERVAL '7 days', NOW() - INTERVAL '20 days', NOW() - INTERVAL '7 days')
ON CONFLICT DO NOTHING;

-- Update the blank note with custom name and content
UPDATE notes 
SET custom_name = 'Old Ideas Archive',
    content = '{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"These were some old project ideas I had but decided not to pursue:"}]},{"type":"paragraph","content":[{"type":"text","text":""}]},{"type":"bulletList","content":[{"type":"listItem","content":[{"type":"paragraph","content":[{"type":"text","text":"Mobile app for tracking water intake"}]}]},{"type":"listItem","content":[{"type":"paragraph","content":[{"type":"text","text":"Blog about minimalist living"}]}]},{"type":"listItem","content":[{"type":"paragraph","content":[{"type":"text","text":"YouTube channel on productivity tips"}]}]}]}]}'
WHERE user_id = 'demo-user-id-123' 
  AND workspace_id = 'demo-workspace-id-456' 
  AND guide_id IS NULL 
  AND archived = true 
  AND custom_name IS NULL
LIMIT 1;
