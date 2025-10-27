-- Clean up unused tables and rename user_profiles to users
-- Remove daily_notes, journal_entries, reflections, user_reading_progress, portable_users
-- Rename user_profiles to users for clarity

-- Drop unused tables
DROP TABLE IF EXISTS daily_notes CASCADE;
DROP TABLE IF EXISTS journal_entries CASCADE;
DROP TABLE IF EXISTS reflections CASCADE;
DROP TABLE IF EXISTS user_reading_progress CASCADE;
DROP TABLE IF EXISTS portable_users CASCADE;

-- Rename user_profiles to users
ALTER TABLE user_profiles RENAME TO users;

-- Update the foreign key constraint name references to use 'users' instead of 'user_profiles'
-- Note: The actual foreign key relationships will still work, this is just for clarity
