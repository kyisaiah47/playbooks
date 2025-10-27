-- Drop workspaces table (unused)
DROP TABLE IF EXISTS workspaces CASCADE;

-- Rename workspace_responses to responses
ALTER TABLE IF EXISTS workspace_responses RENAME TO responses;
