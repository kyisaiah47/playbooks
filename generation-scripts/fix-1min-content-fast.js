#!/usr/bin/env node
/**
 * OPTIMIZED: Fix articles by pre-indexing all article files first
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
  const contentMatch = content.match(/^CONTENT:\s*([\s\S]+)(?=\n\nARTICLE GENERATION COMPLETE|$)/m);
  const titleMatch = content.match(/^TITLE:\s*(.+)$/m);

  if (!contentMatch || !titleMatch) {
    return null;
  }

  return {
    title: titleMatch[1].trim(),
    content: contentMatch[1].trim()
  };
}

async function fixArticles() {
  console.log('🔄 Building index of all article files...\n');

  // Build index of all article files by title
  const titleToFile = new Map();
  const worktreeDirs = glob.sync('../../templata-*/', { cwd: __dirname });

  let totalFiles = 0;
  for (const dir of worktreeDirs) {
    const fullDir = path.join(__dirname, dir);
    const template = path.basename(fullDir).replace('templata-', '');
    const articleFiles = glob.sync(`${fullDir}/${template}-article-*.txt`);

    for (const file of articleFiles) {
      const parsed = parseArticleFile(file);
      if (parsed) {
        titleToFile.set(parsed.title, { path: file, content: parsed.content });
        totalFiles++;
      }
    }
  }

  console.log(`📚 Indexed ${totalFiles} article files\n`);
  console.log('🔄 Fetching articles with incorrect read times (< 6 min read)...\n');

  // Get count of articles needing fixes
  const { count, error: countError } = await supabase
    .from('templata_articles')
    .select('*', { count: 'exact', head: true })
    .in('read_time', ['1 min read', '2 min read', '3 min read', '4 min read', '5 min read']);

  if (countError) {
    console.error('Error counting articles:', countError);
    return;
  }

  console.log(`Found ${count} articles needing updates\n`);

  // Fetch all problematic articles in batches
  const BATCH_SIZE = 1000;
  let allArticles = [];

  for (let offset = 0; offset < count; offset += BATCH_SIZE) {
    const { data: batch, error } = await supabase
      .from('templata_articles')
      .select('id, title, template, read_time')
      .in('read_time', ['1 min read', '2 min read', '3 min read', '4 min read', '5 min read'])
      .range(offset, offset + BATCH_SIZE - 1);

    if (error) {
      console.error('Error fetching batch:', error);
      continue;
    }

    allArticles = allArticles.concat(batch);
    console.log(`Fetched ${allArticles.length}/${count} articles...`);
  }

  console.log(`\n🔄 Processing ${allArticles.length} articles...\n`);

  let updated = 0;
  let failed = 0;
  let notFound = 0;
  const startTime = Date.now();

  // Process in batches for database efficiency
  const UPDATE_BATCH_SIZE = 50;

  for (let i = 0; i < allArticles.length; i++) {
    const article = allArticles[i];

    // Look up file from index
    const fileData = titleToFile.get(article.title);

    if (!fileData) {
      console.log(`❌ No matching file found for: ${article.title}`);
      notFound++;
      continue;
    }

    const fullContent = fileData.content;
    const wordCount = fullContent.split(/\s+/).length;
    const readTime = Math.max(3, Math.ceil(wordCount / 200)) + ' min read';

    // Update article
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
      updated++;

      // Progress update every 100 articles
      if (updated % 100 === 0) {
        const elapsed = (Date.now() - startTime) / 1000;
        const rate = updated / elapsed;
        const remaining = allArticles.length - i - 1;
        const eta = remaining / rate;
        console.log(`✅ Progress: ${updated}/${allArticles.length} (${rate.toFixed(1)} articles/sec, ETA: ${(eta / 60).toFixed(1)} min)`);
      }
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log(`Summary:`);
  console.log(`  ✅ Updated: ${updated}`);
  console.log(`  ❌ Failed: ${failed}`);
  console.log(`  ⚠️  Not found: ${notFound}`);
  console.log(`  ⏱️  Total time: ${((Date.now() - startTime) / 1000 / 60).toFixed(1)} minutes`);
  console.log('='.repeat(60));
}

fixArticles().catch(console.error);
