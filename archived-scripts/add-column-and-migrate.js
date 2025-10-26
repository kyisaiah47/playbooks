#!/usr/bin/env node
/**
 * Complete migration: Add column + migrate data
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

async function runMigration() {
  console.log('Starting complete migration...\n');

  // Step 1: Try to check if column exists by querying
  console.log('Step 1: Checking if template column exists...');
  const { data: testData, error: testError } = await supabase
    .from('templata_articles')
    .select('id, template')
    .limit(1);

  if (testError && testError.code === '42703') {
    console.log('Column does not exist. You need to add it via Supabase Dashboard.');
    console.log('\nPlease run this SQL in Supabase Dashboard → SQL Editor:\n');
    console.log('ALTER TABLE templata_articles ADD COLUMN IF NOT EXISTS template TEXT;');
    console.log('CREATE INDEX IF NOT EXISTS idx_articles_template ON templata_articles(template);\n');
    console.log('After running the SQL, run this script again.');
    process.exit(1);
  }

  console.log('✓ Column exists\n');

  // Step 2: Migrate data
  console.log('Step 2: Fetching all articles...');
  const { data: articles, error } = await supabase
    .from('templata_articles')
    .select('id, related_templates, template');

  if (error) {
    console.error('Error fetching articles:', error);
    process.exit(1);
  }

  console.log(`Found ${articles.length} articles\n`);

  let updated = 0;
  let skipped = 0;
  let errors = 0;

  for (const article of articles) {
    // Skip if template field already has a value
    if (article.template) {
      skipped++;
      continue;
    }

    // Skip if related_templates is null or empty
    if (!article.related_templates || article.related_templates.length === 0) {
      console.log(`Article ${article.id}: No related_templates found, skipping`);
      skipped++;
      continue;
    }

    // Extract the first (and should be only) template ID
    const templateId = article.related_templates[0];

    process.stdout.write(`Article ${article.id}: ${templateId}...`);

    // Update the article
    const { error: updateError } = await supabase
      .from('templata_articles')
      .update({ template: templateId })
      .eq('id', article.id);

    if (updateError) {
      console.log(` ERROR: ${updateError.message}`);
      errors++;
    } else {
      console.log(' ✓');
      updated++;
    }
  }

  console.log('\n========================================');
  console.log('Migration complete!');
  console.log(`Updated: ${updated}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`Errors: ${errors}`);
  console.log('========================================\n');
}

runMigration().catch(console.error);
