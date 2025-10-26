#!/usr/bin/env node
/**
 * Migration script: Convert articles from related_templates array to template string
 * This script updates all existing articles in the database to use the new schema
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

async function migrateArticles() {
  console.log('Starting migration: related_templates → template');

  // Fetch all articles
  const { data: articles, error } = await supabase
    .from('templata_articles')
    .select('id, related_templates, template');

  if (error) {
    console.error('Error fetching articles:', error);
    process.exit(1);
  }

  console.log(`Found ${articles.length} articles to process`);

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

    console.log(`Article ${article.id}: Migrating to template=${templateId}`);

    // Update the article
    const { error: updateError } = await supabase
      .from('templata_articles')
      .update({
        template: templateId,
        related_templates: null // Clear the old field
      })
      .eq('id', article.id);

    if (updateError) {
      console.error(`Error updating article ${article.id}:`, updateError);
      errors++;
    } else {
      updated++;
    }
  }

  console.log('\nMigration complete!');
  console.log(`Updated: ${updated}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`Errors: ${errors}`);
}

migrateArticles().catch(console.error);
