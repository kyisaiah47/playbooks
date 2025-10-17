const { createClient } = require('@supabase/supabase-js');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');

// Load environment variables
require('dotenv').config({ path: path.join(__dirname, '..', '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function runSQL(sqlFile) {
  const sql = fs.readFileSync(path.join(__dirname, sqlFile), 'utf8');

  // Split by semicolons but be careful with function definitions
  const statements = sql
    .split(';')
    .map(s => s.trim())
    .filter(s => s.length > 0 && !s.startsWith('--'));

  for (const statement of statements) {
    if (statement.trim()) {
      try {
        console.log(`Executing: ${statement.substring(0, 100)}...`);
        const { error } = await supabase.rpc('exec_sql', { sql_query: statement + ';' });

        if (error) {
          // Try direct query as fallback
          const { error: directError } = await supabase.from('_sql').select('*').limit(0);

          // For now, log and continue - we'll use psql instead
          console.log(`Note: ${error.message || error}`);
        } else {
          console.log('✓ Success');
        }
      } catch (err) {
        console.log(`Note: ${err.message}`);
      }
    }
  }
}

async function setupAuthAndDemo() {
  console.log('Setting up auth tables and demo user...\n');

  // We'll use psql directly since Supabase client RLS might block admin operations
  console.log('Please run the following commands manually:\n');
  console.log('1. Run the table creation script:');
  console.log(`   PGPASSWORD=${process.env.SUPABASE_SERVICE_ROLE_KEY} psql "${supabaseUrl.replace('https://', 'postgresql://postgres:')}/postgres" -f generation-scripts/create-auth-tables.sql\n`);

  // Generate bcrypt hash for demo password
  const demoPassword = 'demo123';
  const hashedPassword = await bcrypt.hash(demoPassword, 10);

  console.log('2. Demo user credentials:');
  console.log(`   Email: demo@templata.com`);
  console.log(`   Password: ${demoPassword}`);
  console.log(`   Hashed: ${hashedPassword}\n`);

  // Update the seed file with the real hash
  let seedSQL = fs.readFileSync(path.join(__dirname, 'seed-demo-user.sql'), 'utf8');
  seedSQL = seedSQL.replace('$2a$10$YourHashedPasswordHere', hashedPassword);
  fs.writeFileSync(path.join(__dirname, 'seed-demo-user-hashed.sql'), seedSQL);

  console.log('3. Updated seed file created at: generation-scripts/seed-demo-user-hashed.sql');
  console.log('\nTo run migrations using psql directly:');
  console.log(`   psql "postgresql://postgres.ziqjrhrzqccaqnqlmivv:040796yh@aws-0-us-west-1.pooler.supabase.com:6543/postgres?gssencmode=disable" -f generation-scripts/create-auth-tables.sql`);
  console.log(`   psql "postgresql://postgres.ziqjrhrzqccaqnqlmivv:040796yh@aws-0-us-west-1.pooler.supabase.com:6543/postgres?gssencmode=disable" -f generation-scripts/seed-demo-user-hashed.sql`);
}

setupAuthAndDemo().catch(console.error);
