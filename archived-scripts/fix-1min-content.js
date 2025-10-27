#!/usr/bin/env node
/**
 * Fix articles with "1 min read" by updating their content from worktree files
 */

const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

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

function parseArticleFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  // Changed from +? (non-greedy) to + (greedy) so it captures all content until the marker
  const contentMatch = content.match(/^CONTENT:\s*([\s\S]+)(?=\n\nARTICLE GENERATION COMPLETE|$)/m);

  if (!contentMatch) {
    return null;
  }

  return contentMatch[1].trim();
}

async function fixArticles() {
  console.log('🔄 Counting total articles...\n');

  // Get total count
  const { count, error: countError } = await supabase
    .from('templata_articles')
    .select('*', { count: 'exact', head: true });

  if (countError) {
    console.error('Error counting articles:', countError);
    return;
  }

  console.log(`Found ${count} total articles in database\n`);
  console.log('🔄 Processing articles in batches...\n');

  const BATCH_SIZE = 1000;
  let allArticles = [];

  for (let offset = 0; offset < count; offset += BATCH_SIZE) {
    const { data: batch, error } = await supabase
      .from('templata_articles')
      .select('id, title, template, read_time')
      .range(offset, offset + BATCH_SIZE - 1);

    if (error) {
      console.error('Error fetching batch:', error);
      continue;
    }

    allArticles = allArticles.concat(batch);
    console.log(`Fetched ${allArticles.length}/${count} articles...`);
  }

  const articles = allArticles;
  console.log(`\nReady to process ${articles.length} articles\n`);

  let updated = 0;
  let failed = 0;

  for (const article of articles) {
    // Extract article number from ID (e.g., "article-building-a-meditation-habit" -> look for corresponding file)
    const worktreeDir = `../../templata-${article.template}`;

    // Find all article files for this template
    const articleFiles = glob.sync(`${worktreeDir}/${article.template}-article-*.txt`, { cwd: __dirname });

    // Find the matching file by title
    let matchedFile = null;
    for (const file of articleFiles) {
      const fullPath = path.join(__dirname, file);
      const fileContent = fs.readFileSync(fullPath, 'utf-8');
      const titleMatch = fileContent.match(/^TITLE:\s*(.+)$/m);

      if (titleMatch && titleMatch[1].trim() === article.title) {
        matchedFile = fullPath;
        break;
      }
    }

    if (!matchedFile) {
      console.log(`❌ No matching file found for: ${article.title}`);
      failed++;
      continue;
    }

    // Parse the content
    const fullContent = parseArticleFile(matchedFile);

    if (!fullContent) {
      console.log(`❌ Could not parse content for: ${article.title}`);
      failed++;
      continue;
    }

    // Calculate new read time
    const wordCount = fullContent.split(' ').length;
    const readTime = Math.max(3, Math.ceil(wordCount / 200)) + ' min read';

    // Update only content and read_time fields
    const { error: updateError } = await supabase
      .from('templata_articles')
      .update({
        content: fullContent,
        read_time: readTime,
        updated_at: new Date().toISOString()
      })
      .eq('id', article.id);

    if (updateError) {
      console.log(`❌ Failed to update: ${article.title}`);
      console.error(updateError);
      failed++;
    } else {
      console.log(`✅ Updated: ${article.title} (${wordCount} words → ${readTime})`);
      updated++;
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log(`Summary:`);
  console.log(`  ✅ Updated: ${updated}`);
  console.log(`  ❌ Failed: ${failed}`);
  console.log('='.repeat(60));
}

fixArticles().catch(console.error);
