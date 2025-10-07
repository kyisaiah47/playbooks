#!/usr/bin/env node
/**
 * Run user template unlock schema migration
 */

const { supabase } = require('./supabase-helper');
const fs = require('fs');
const path = require('path');

async function runMigration() {
  console.log('Starting user schema migration...\n');

  const sqlFile = path.join(__dirname, 'create-user-template-unlocks.sql');
  const sqlContent = fs.readFileSync(sqlFile, 'utf-8');

  // Split into individual statements (simple split, assumes statements end with ;)
  const statements = sqlContent
    .split(';')
    .map(s => s.trim())
    .filter(s => s.length > 0 && !s.startsWith('--'));

  console.log(`Found ${statements.length} SQL statements to execute\n`);

  for (let i = 0; i < statements.length; i++) {
    const statement = statements[i];
    const preview = statement.substring(0, 80).replace(/\s+/g, ' ') + '...';

    process.stdout.write(`[${i + 1}/${statements.length}] ${preview}\n`);

    try {
      const { error } = await supabase.rpc('exec_sql', { sql: statement });

      if (error) {
        console.error(`   ✗ Error: ${error.message}\n`);
      } else {
        console.log(`   ✓ Success\n`);
      }
    } catch (err) {
      console.error(`   ✗ Exception: ${err.message}\n`);
    }
  }

  console.log('Migration complete!');
}

runMigration().catch(console.error);
