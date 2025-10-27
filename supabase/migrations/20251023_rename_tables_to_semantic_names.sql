-- Rename tables to more semantic names
-- templates -> guides
-- prompts -> questions
-- articles -> readings

-- Rename tables
ALTER TABLE IF EXISTS templates RENAME TO guides;
ALTER TABLE IF EXISTS prompts RENAME TO questions;
ALTER TABLE IF EXISTS articles RENAME TO readings;
