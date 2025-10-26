#!/usr/bin/env node
/**
 * Process generated article text files and insert to Supabase
 * Then optionally delete the source files
 */

const { upsertArticle, getArticleCount } = require('./supabase-helper');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const DELETE_FILES_AFTER = process.argv.includes('--delete');

function parseArticleFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');

  // Extract metadata
  const titleMatch = content.match(/^TITLE:\s*(.+)$/m);
  const categoryMatch = content.match(/^CATEGORY:\s*(.+)$/m);
  const typeMatch = content.match(/^TYPE:\s*(.+)$/m);
  const difficultyMatch = content.match(/^DIFFICULTY:\s*(.+)$/m);
  const contentMatch = content.match(/^CONTENT:\s*([\s\S]+?)(?=\n\nARTICLE GENERATION COMPLETE|$)/m);

  if (!titleMatch || !contentMatch) {
    return null;
  }

  const title = titleMatch[1].trim();
  const category = categoryMatch ? categoryMatch[1].trim() : 'Personal Life';
  const type = typeMatch ? typeMatch[1].trim().toLowerCase() : 'guide';
  const difficulty = difficultyMatch ? difficultyMatch[1].trim().toLowerCase() : 'intermediate';
  const articleContent = contentMatch[1].trim();

  // Extract template ID from filename
  const filename = path.basename(filePath, '.txt');
  const parts = filename.split('-article-');
  const templateId = parts[0];
  const articleNumber = parts[1];

  // Create slug from title
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 100);

  const articleId = `article-${slug}`;

  // Create excerpt
  let excerpt = articleContent
    .replace(/^#.*$/gm, '')
    .replace(/\n\n+/g, '\n')
    .trim()
    .substring(0, 150);

  if (excerpt.length === 150) {
    excerpt += '...';
  }

  return {
    id: articleId,
    title,
    excerpt,
    content: articleContent,
    author: 'Templata',
    publishedAt: new Date().toISOString().split('T')[0],
    readTime: Math.max(3, Math.ceil(articleContent.split(' ').length / 200)) + ' min read',
    category,
    tags: ['guide'],
    slug,
    type: type.includes('guide') || type.includes('article') || type.includes('checklist') || type.includes('tool') ? type : 'guide',
    difficulty: difficulty.includes('beginner') || difficulty.includes('intermediate') || difficulty.includes('expert') ? difficulty : 'intermediate',
    seo: {
      metaTitle: title.substring(0, 60),
      metaDescription: excerpt,
      ogImage: `/images/blog/${slug}-og.jpg`
    },
    template: templateId,
    filePath,
    templateId,
    articleNumber
  };
}

async function processArticles() {
  console.log('🔄 Processing article text files to Supabase...\n');

  // Find all article text files in template directories
  const articleFiles = glob.sync('../../templata-*/*-article-*.txt', { cwd: __dirname });

  if (articleFiles.length === 0) {
    console.log('No article files found.');
    return;
  }

  console.log(`Found ${articleFiles.length} article files to process\n`);

  let processed = 0;
  let errors = 0;
  let deleted = 0;

  for (const file of articleFiles) {
    try {
      const articleData = parseArticleFile(path.join(__dirname, file));

      if (!articleData) {
        console.log(`⚠️  Could not parse: ${file}`);
        errors++;
        continue;
      }

      const success = await upsertArticle(articleData);

      if (success) {
        processed++;
        console.log(`✓ ${articleData.templateId} article ${articleData.articleNumber}: ${articleData.title.substring(0, 60)}...`);

        // Delete file if requested
        if (DELETE_FILES_AFTER) {
          fs.unlinkSync(articleData.filePath);
          deleted++;
        }

        if (processed % 100 === 0) {
          console.log(`\n--- Processed ${processed} articles ---\n`);
        }
      } else {
        errors++;
      }
    } catch (err) {
      console.error(`✗ Error processing ${file}:`, err.message);
      errors++;
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log(`✅ Summary:`);
  console.log(`   Processed: ${processed}`);
  console.log(`   Errors: ${errors}`);
  if (DELETE_FILES_AFTER) {
    console.log(`   Deleted: ${deleted} files`);
  }
  console.log('='.repeat(60));
}

processArticles().catch(console.error);
