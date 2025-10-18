import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey, {
  db: {
    schema: 'public',
  },
});

async function updateSchema() {
  console.log('🔧 Updating database schema...');

  const sqlPath = path.join(__dirname, 'update-templates-schema.sql');
  const sql = fs.readFileSync(sqlPath, 'utf-8');

  try {
    // Use the from().select() API to execute raw SQL via a function
    const { data, error } = await supabase.rpc('exec_sql', { query: sql });

    if (error) {
      console.error('❌ Error executing SQL:', error);

      // Try alternative: use postgres REST API
      console.log('Trying alternative method...');
      const response = await fetch(`${supabaseUrl}/rest/v1/rpc/exec`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
        },
        body: JSON.stringify({ query: sql }),
      });

      if (!response.ok) {
        console.error('❌ Alternative method also failed');
        console.log('\n⚠️  Please run the SQL manually in Supabase Dashboard:');
        console.log('📋 SQL file location: generation-scripts/update-templates-schema.sql\n');
        process.exit(1);
      }
    } else {
      console.log('✅ Schema update complete!');
    }
  } catch (e) {
    console.error('❌ Exception:', e);
    console.log('\n⚠️  Please run the SQL manually in Supabase Dashboard:');
    console.log('📋 SQL file location: generation-scripts/update-templates-schema.sql\n');
    console.log('SQL content:');
    console.log('---');
    console.log(sql);
    console.log('---');
  }
}

updateSchema().catch(console.error);
