#!/usr/bin/env node
/**
 * Migration: Match articles by title and update template field
 */

const { supabase } = require('./supabase-helper');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

function extractTitle(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const titleMatch = content.match(/^TITLE:\s*(.+)$/m);
  return titleMatch ? titleMatch[1].trim() : null;
}

function getTemplateIdFromPath(filePath) {
  const dirname = path.dirname(filePath);
  const basename = path.basename(dirname);
  return basename.replace('templata-', '');
}

async function migrateArticles() {
  console.log('Starting migration by title match...\n');

  const worktreePattern = '/Users/ikim1/Documents/GitHub/templata-*/*-article-*.txt';
  const articleFiles = glob.sync(worktreePattern);

  console.log(`Found ${articleFiles.length} article files in worktrees\n`);

  let updated = 0;
  let notFound = 0;
  let errors = 0;

  for (const filePath of articleFiles) {
    const title = extractTitle(filePath);

    if (!title) {
      console.log(`Could not extract title: ${path.basename(filePath)}`);
      errors++;
      continue;
    }

    const templateId = getTemplateIdFromPath(filePath);

    // Update by matching title
    const { data, error } = await supabase
      .from('templata_articles')
      .update({ template: templateId })
      .eq('title', title)
      .select();

    if (error) {
      console.log(`ERROR: ${error.message}`);
      errors++;
    } else if (!data || data.length === 0) {
      notFound++;
    } else {
      updated++;
      if (updated % 100 === 0) {
        process.stdout.write(`\r✓ Updated ${updated} articles...`);
      }
    }
  }

  console.log('\n\n========================================');
  console.log('Migration complete!');
  console.log(`Updated: ${updated}`);
  console.log(`Not found in DB: ${notFound}`);
  console.log(`Errors: ${errors}`);
  console.log('========================================');
}

migrateArticles().catch(console.error);
