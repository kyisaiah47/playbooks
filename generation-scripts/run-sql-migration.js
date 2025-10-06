#!/usr/bin/env node
/**
 * Run SQL migration script
 */

const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Load environment variables
const envPath = path.join(__dirname, '..', '.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  envContent.split('\n').forEach(line => {
    const [key, value] = line.split('=');
    if (key && value) {
      process.env[key.trim()] = value.trim();
    }
  });
}

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('Error: Missing Supabase credentials in .env.local');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function runMigration(sqlFile) {
  const sqlPath = path.join(__dirname, sqlFile);

  if (!fs.existsSync(sqlPath)) {
    console.error(`SQL file not found: ${sqlPath}`);
    process.exit(1);
  }

  const sql = fs.readFileSync(sqlPath, 'utf-8');

  console.log(`Running migration: ${sqlFile}`);
  console.log('SQL:', sql);

  const { data, error } = await supabase.rpc('exec_sql', { sql_string: sql });

  if (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }

  console.log('Migration completed successfully!');
  return data;
}

// Get SQL file from command line argument
const sqlFile = process.argv[2] || 'add-template-column.sql';
runMigration(sqlFile).catch(console.error);
