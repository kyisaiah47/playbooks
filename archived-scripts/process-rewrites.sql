-- This file documents the rewriting pattern for offset 15000-20000
-- Processing questions in batches, transforming from Wikipedia-style to Notion-style tone

-- Pattern transformations:
-- "Document" → "Write down" / "What..."
-- "Research" → "Look into" / "Check out"
-- "Reflect on" → "Think about"
-- "Note" → "Notice" / "Keep track of"
-- "Create notes" → "Write down"
-- "Create a" → "Make a"
-- "Compile" → "Put together" / "Collect"
-- Add contractions: "you've", "what's", "how'd"
-- Add questions at the end where appropriate

-- Batch processing approach:
-- 1. Fetch 50-200 questions at a time
-- 2. Rewrite each prompt following the guidelines
-- 3. Update using CASE statement
-- 4. Repeat until all 5000 questions (offset 15000-20000) are complete

-- Total: 100 batches of 50 questions = 5000 questions
