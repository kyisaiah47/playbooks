-- Remove all tables from other projects (Turntables, Portable, Ownbase)
-- Rename templata_ tables to remove prefix
-- Keep only core tables (users, reflections, workspace_responses, workspaces)

-- Drop Turntables tables (must drop in correct order due to foreign keys)
DROP TABLE IF EXISTS turntables_table_assignments CASCADE;
DROP TABLE IF EXISTS turntables_table_metrics CASCADE;
DROP TABLE IF EXISTS turntables_ai_predictions CASCADE;
DROP TABLE IF EXISTS turntables_walkin_queue CASCADE;
DROP TABLE IF EXISTS turntables_reservations CASCADE;
DROP TABLE IF EXISTS turntables_restaurant_tables CASCADE;
DROP TABLE IF EXISTS turntables_restaurants CASCADE;
DROP TABLE IF EXISTS turntables_users CASCADE;

-- Drop Portable tables (must drop in correct order due to foreign keys)
DROP TABLE IF EXISTS portable_transactions CASCADE;
DROP TABLE IF EXISTS portable_referrals CASCADE;
DROP TABLE IF EXISTS portable_parsed_income CASCADE;
DROP TABLE IF EXISTS portable_plaid_items CASCADE;
DROP TABLE IF EXISTS portable_users CASCADE;

-- Drop Ownbase tables (must drop in correct order due to foreign keys)
DROP TABLE IF EXISTS ownbase_activities CASCADE;
DROP TABLE IF EXISTS ownbase_tasks CASCADE;
DROP TABLE IF EXISTS ownbase_deals CASCADE;
DROP TABLE IF EXISTS ownbase_contacts CASCADE;
DROP TABLE IF EXISTS ownbase_earnings CASCADE;
DROP TABLE IF EXISTS ownbase_data_access_requests CASCADE;
DROP TABLE IF EXISTS ownbase_data_vault CASCADE;
DROP TABLE IF EXISTS ownbase_api_keys CASCADE;
DROP TABLE IF EXISTS ownbase_user_profiles CASCADE;
DROP TABLE IF EXISTS ownbase_users CASCADE;

-- Rename templata_ tables to remove prefix
ALTER TABLE IF EXISTS templata_templates RENAME TO templates;
ALTER TABLE IF EXISTS templata_articles RENAME TO articles;
ALTER TABLE IF EXISTS templata_prompts RENAME TO prompts;
ALTER TABLE IF EXISTS templata_marketing_pages RENAME TO marketing_pages;
