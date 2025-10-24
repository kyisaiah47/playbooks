-- Add user_guide_id column to responses table
-- This links responses to specific user guide instances in the workspace system

ALTER TABLE responses
ADD COLUMN IF NOT EXISTS user_guide_id UUID REFERENCES user_guides(id) ON DELETE CASCADE;

-- Create index for performance
CREATE INDEX IF NOT EXISTS idx_responses_user_guide_id ON responses(user_guide_id);

-- Add a new unique constraint that includes user_guide_id
-- Note: We keep the old constraint for backward compatibility with non-workspace responses
-- The application will use one or the other based on context

-- Create a unique constraint for workspace-based responses
-- Format: user_id + user_guide_id + prompt_id (for workspace context)
CREATE UNIQUE INDEX IF NOT EXISTS idx_responses_user_guide_prompt
ON responses(user_id, user_guide_id, prompt_id)
WHERE user_guide_id IS NOT NULL;

-- The existing constraint (user_id, template_id, prompt_id) remains for non-workspace context
