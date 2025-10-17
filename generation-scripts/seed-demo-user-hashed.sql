-- Create demo user
-- Password: demo123 (hashed with bcrypt)
INSERT INTO users (id, email, password_hash, name, created_at)
VALUES (
  '11111111-1111-1111-1111-111111111111',
  'demo@templata.com',
  '$2b$10$/JuB1NI6g0L7ecj7dh0/ZuSkMrkvoLYir.xptPJTWEm3WivCmoZWS', -- We'll update this with actual hash
  'Demo User',
  NOW() - INTERVAL '30 days'
) ON CONFLICT (email) DO UPDATE SET name = EXCLUDED.name;

-- Insert mock workspace responses for wedding-planning template
INSERT INTO workspace_responses (user_id, template_id, prompt_id, response, created_at, updated_at)
VALUES
  ('11111111-1111-1111-1111-111111111111', 'wedding-planning', 'budget-range', 'Our budget is between $25,000 - $35,000. We want to prioritize venue, photography, and catering.', NOW() - INTERVAL '25 days', NOW() - INTERVAL '25 days'),
  ('11111111-1111-1111-1111-111111111111', 'wedding-planning', 'guest-count', 'Planning for approximately 120-150 guests. Close family and friends.', NOW() - INTERVAL '24 days', NOW() - INTERVAL '20 days'),
  ('11111111-1111-1111-1111-111111111111', 'wedding-planning', 'venue-preferences', 'Looking for outdoor garden venue with indoor backup. Prefer locations within 30 miles of the city.', NOW() - INTERVAL '23 days', NOW() - INTERVAL '23 days'),
  ('11111111-1111-1111-1111-111111111111', 'wedding-planning', 'date-flexibility', 'Target date: September 15, 2025. Flexible by +/- 2 weeks if needed for venue availability.', NOW() - INTERVAL '22 days', NOW() - INTERVAL '22 days'),
  ('11111111-1111-1111-1111-111111111111', 'wedding-planning', 'vendors-priority', '1. Photographer (critical) 2. Venue 3. Catering 4. DJ/Band 5. Florist', NOW() - INTERVAL '20 days', NOW() - INTERVAL '15 days')
ON CONFLICT (user_id, template_id, prompt_id) DO UPDATE
SET response = EXCLUDED.response, updated_at = EXCLUDED.updated_at;

-- Insert more for career-change template
INSERT INTO workspace_responses (user_id, template_id, prompt_id, response, created_at, updated_at)
VALUES
  ('11111111-1111-1111-1111-111111111111', 'career-change-roadmap', 'current-situation', 'Currently working as a marketing manager for 5 years. Feeling burned out and want to transition into UX design.', NOW() - INTERVAL '18 days', NOW() - INTERVAL '18 days'),
  ('11111111-1111-1111-1111-111111111111', 'career-change-roadmap', 'target-role', 'UX Designer at a tech company. Interested in product design and user research.', NOW() - INTERVAL '17 days', NOW() - INTERVAL '17 days'),
  ('11111111-1111-1111-1111-111111111111', 'career-change-roadmap', 'skills-gap', 'Need to learn: Figma, user research methodologies, prototyping. Have: Strong communication, project management, understanding of user psychology.', NOW() - INTERVAL '15 days', NOW() - INTERVAL '10 days')
ON CONFLICT (user_id, template_id, prompt_id) DO UPDATE
SET response = EXCLUDED.response, updated_at = EXCLUDED.updated_at;

-- Insert mock reflections for the last 30 days (sparse - not every day)
INSERT INTO reflections (user_id, date, prompt, content, mood, tags, created_at, updated_at)
VALUES
  ('11111111-1111-1111-1111-111111111111', CURRENT_DATE - INTERVAL '1 day', 'What did you let go of today?', 'Let go of the need to have everything perfect for the wedding. Realized it''s more important to enjoy the process.', '😌', ARRAY['acceptance', 'wedding'], NOW() - INTERVAL '1 day', NOW() - INTERVAL '1 day'),
  ('11111111-1111-1111-1111-111111111111', CURRENT_DATE - INTERVAL '2 days', 'What moment made you feel most alive today?', 'Had a breakthrough on my UX portfolio project. Finally understanding how to think like a designer.', '😊', ARRAY['career', 'growth', 'design'], NOW() - INTERVAL '2 days', NOW() - INTERVAL '2 days'),
  ('11111111-1111-1111-1111-111111111111', CURRENT_DATE - INTERVAL '4 days', 'What challenged you today, and what did you learn from it?', 'Struggled with balancing wedding planning and career transition. Learned I need to set clearer boundaries and schedules.', '😤', ARRAY['balance', 'stress'], NOW() - INTERVAL '4 days', NOW() - INTERVAL '4 days'),
  ('11111111-1111-1111-1111-111111111111', CURRENT_DATE - INTERVAL '5 days', 'What are you grateful for right now?', 'Grateful for my partner''s support during this transition. Also grateful for online learning resources that make career change possible.', '😊', ARRAY['gratitude', 'support'], NOW() - INTERVAL '5 days', NOW() - INTERVAL '5 days'),
  ('11111111-1111-1111-1111-111111111111', CURRENT_DATE - INTERVAL '7 days', 'What small win can you celebrate today?', 'Completed my first Figma tutorial and created a working prototype! Small step but feels significant.', '😊', ARRAY['achievement', 'learning'], NOW() - INTERVAL '7 days', NOW() - INTERVAL '7 days'),
  ('11111111-1111-1111-1111-111111111111', CURRENT_DATE - INTERVAL '10 days', 'What truth are you avoiding today?', 'Avoiding the fact that career change will take longer than I hoped. Need to be more patient with myself.', '😔', ARRAY['reality', 'patience'], NOW() - INTERVAL '10 days', NOW() - INTERVAL '10 days'),
  ('11111111-1111-1111-1111-111111111111', CURRENT_DATE - INTERVAL '12 days', 'What moment made you feel most alive today?', 'Visited three potential wedding venues today. The garden venue was absolutely perfect!', '😊', ARRAY['wedding', 'excitement'], NOW() - INTERVAL '12 days', NOW() - INTERVAL '12 days'),
  ('11111111-1111-1111-1111-111111111111', CURRENT_DATE - INTERVAL '15 days', 'What challenged you today, and what did you learn from it?', 'Imposter syndrome hit hard while looking at UX designer job requirements. Reminded myself everyone starts somewhere.', '😐', ARRAY['doubt', 'career'], NOW() - INTERVAL '15 days', NOW() - INTERVAL '15 days'),
  ('11111111-1111-1111-1111-111111111111', CURRENT_DATE - INTERVAL '18 days', 'What are you grateful for right now?', 'Grateful for Templata helping me organize both my wedding and career transition. Would be lost without structure.', '😊', ARRAY['gratitude', 'organization'], NOW() - INTERVAL '18 days', NOW() - INTERVAL '18 days'),
  ('11111111-1111-1111-1111-111111111111', CURRENT_DATE - INTERVAL '20 days', 'What small win can you celebrate today?', 'Started my career transition workspace today. Feels good to have a plan instead of just anxiety.', '😌', ARRAY['planning', 'progress'], NOW() - INTERVAL '20 days', NOW() - INTERVAL '20 days'),
  ('11111111-1111-1111-1111-111111111111', CURRENT_DATE - INTERVAL '22 days', 'What did you let go of today?', 'Let go of comparing my wedding to Instagram-perfect ones. Our wedding will be authentically us.', '😌', ARRAY['authenticity', 'wedding'], NOW() - INTERVAL '22 days', NOW() - INTERVAL '22 days'),
  ('11111111-1111-1111-1111-111111111111', CURRENT_DATE - INTERVAL '25 days', 'What moment made you feel most alive today?', 'Had an honest conversation with my manager about wanting to explore UX design. They were surprisingly supportive!', '😊', ARRAY['courage', 'career', 'support'], NOW() - INTERVAL '25 days', NOW() - INTERVAL '25 days'),
  ('11111111-1111-1111-1111-111111111111', CURRENT_DATE - INTERVAL '28 days', 'What are you grateful for right now?', 'Grateful to have found Templata. Finally have tools to organize the chaos of life transitions.', '😊', ARRAY['gratitude', 'tools'], NOW() - INTERVAL '28 days', NOW() - INTERVAL '28 days')
ON CONFLICT (user_id, date) DO UPDATE
SET content = EXCLUDED.content, mood = EXCLUDED.mood, tags = EXCLUDED.tags, updated_at = EXCLUDED.updated_at;
