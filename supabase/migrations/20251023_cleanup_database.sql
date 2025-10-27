-- ================================================
-- TEMPLATA DATABASE CLEANUP
-- Drop all non-Templata tables and remove templata_ prefix
-- ================================================

-- Step 1: Drop all non-Templata tables
-- ================================================

-- Drop ownbase tables
DROP TABLE IF EXISTS ownbase_activities CASCADE;
DROP TABLE IF EXISTS ownbase_api_keys CASCADE;
DROP TABLE IF EXISTS ownbase_contacts CASCADE;
DROP TABLE IF EXISTS ownbase_data_access_requests CASCADE;
DROP TABLE IF EXISTS ownbase_data_vault CASCADE;
DROP TABLE IF EXISTS ownbase_deals CASCADE;
DROP TABLE IF EXISTS ownbase_earnings CASCADE;
DROP TABLE IF EXISTS ownbase_tasks CASCADE;
DROP TABLE IF EXISTS ownbase_user_profiles CASCADE;
DROP TABLE IF EXISTS ownbase_users CASCADE;

-- Drop portable tables
DROP TABLE IF EXISTS portable_parsed_income CASCADE;
DROP TABLE IF EXISTS portable_plaid_items CASCADE;
DROP TABLE IF EXISTS portable_referrals CASCADE;
DROP TABLE IF EXISTS portable_transactions CASCADE;
DROP TABLE IF EXISTS portable_users CASCADE;

-- Drop turntables tables
DROP TABLE IF EXISTS turntables_ai_predictions CASCADE;
DROP TABLE IF EXISTS turntables_reservations CASCADE;
DROP TABLE IF EXISTS turntables_restaurant_tables CASCADE;
DROP TABLE IF EXISTS turntables_restaurants CASCADE;
DROP TABLE IF EXISTS turntables_table_assignments CASCADE;
DROP TABLE IF EXISTS turntables_table_metrics CASCADE;
DROP TABLE IF EXISTS turntables_users CASCADE;
DROP TABLE IF EXISTS turntables_walkin_queue CASCADE;

-- Step 2: Rename templata_* tables to remove prefix
-- ================================================

ALTER TABLE IF EXISTS templata_templates RENAME TO templates;
ALTER TABLE IF EXISTS templata_prompts RENAME TO prompts;
ALTER TABLE IF EXISTS templata_articles RENAME TO articles;
ALTER TABLE IF EXISTS templata_marketing_pages RENAME TO marketing_pages;

-- Step 3: Update any foreign key references
-- ================================================

-- Update workspace_responses to reference templates without prefix
ALTER TABLE IF EXISTS workspace_responses
  DROP CONSTRAINT IF EXISTS workspace_responses_template_id_fkey;

ALTER TABLE IF EXISTS workspace_responses
  ADD CONSTRAINT workspace_responses_template_id_fkey
  FOREIGN KEY (template_id) REFERENCES templates(id) ON DELETE CASCADE;

-- Update prompts foreign key if it exists
ALTER TABLE IF EXISTS prompts
  DROP CONSTRAINT IF EXISTS templata_prompts_template_id_fkey;

ALTER TABLE IF EXISTS prompts
  ADD CONSTRAINT prompts_template_id_fkey
  FOREIGN KEY (template_id) REFERENCES templates(id) ON DELETE CASCADE;

-- Update articles foreign key if it exists
ALTER TABLE IF EXISTS articles
  DROP CONSTRAINT IF EXISTS templata_articles_template_id_fkey;

ALTER TABLE IF EXISTS articles
  ADD CONSTRAINT articles_template_id_fkey
  FOREIGN KEY (template_id) REFERENCES templates(id) ON DELETE CASCADE;

-- Update workspaces foreign key if it exists
ALTER TABLE IF EXISTS workspaces
  DROP CONSTRAINT IF EXISTS workspaces_template_id_fkey;

ALTER TABLE IF EXISTS workspaces
  ADD CONSTRAINT workspaces_template_id_fkey
  FOREIGN KEY (template_id) REFERENCES templates(id) ON DELETE CASCADE;
