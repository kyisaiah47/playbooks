#!/usr/bin/env node
/**
 * Migration: Extract template IDs from worktree article files and update DB
 */

const { supabase } = require('./supabase-helper');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 100);
}

function parseArticleFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const titleMatch = content.match(/^TITLE:\s*(.+)$/m);

  if (!titleMatch) return null;

  const title = titleMatch[1].trim();
  const filename = path.basename(filePath, '.txt');
  const parts = filename.split('-article-');
  const templateId = parts[0];

  const slug = createSlug(title);
  const articleId = `article-${slug}`;

  return { articleId, templateId, title, slug };
}

async function migrateArticles() {
  console.log('Starting migration from worktree files...\n');

  // Find all article files in worktrees
  const worktreePattern = '/Users/ikim1/Documents/GitHub/templata-*/*-article-*.txt';
  const articleFiles = glob.sync(worktreePattern);

  console.log(`Found ${articleFiles.length} article files in worktrees\n`);

  let updated = 0;
  let notFound = 0;
  let errors = 0;

  for (const filePath of articleFiles) {
    const parsed = parseArticleFile(filePath);

    if (!parsed) {
      console.log(`Could not parse: ${path.basename(filePath)}`);
      errors++;
      continue;
    }

    const { articleId, templateId, title } = parsed;

    // Update the article in DB
    const { data, error } = await supabase
      .from('templata_articles')
      .update({ template: templateId })
      .eq('id', articleId)
      .select();

    if (error) {
      console.log(`ERROR ${articleId}: ${error.message}`);
      errors++;
    } else if (!data || data.length === 0) {
      notFound++;
    } else {
      updated++;
      process.stdout.write(`✓ ${templateId}: ${title.substring(0, 50)}...\r`);

      if (updated % 50 === 0) {
        console.log(`\n--- Updated ${updated} articles ---`);
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
