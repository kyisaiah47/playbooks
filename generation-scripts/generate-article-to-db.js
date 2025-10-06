#!/usr/bin/env node
/**
 * Generate a single article and insert directly to Supabase
 * Called by the bash generation script
 */

const { upsertArticle } = require('./supabase-helper');

async function generateArticle(templateId, articleNumber, category, title, content) {
  // Create article ID from title
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 100);

  const articleId = `article-${slug}`;

  // Extract excerpt (first 150 chars, cleaned)
  let excerpt = content
    .replace(/^#.*$/gm, '') // Remove headers
    .replace(/\n\n+/g, '\n')
    .trim()
    .substring(0, 150);

  if (excerpt.length === 150) {
    excerpt += '...';
  }

  const articleData = {
    id: articleId,
    title: title,
    excerpt: excerpt,
    content: content,
    author: 'Templata',
    publishedAt: new Date().toISOString().split('T')[0],
    readTime: Math.max(3, Math.ceil(content.split(' ').length / 200)) + ' min read',
    category: category,
    tags: ['guide'],
    slug: slug,
    type: 'guide',
    difficulty: 'intermediate',
    seo: {
      metaTitle: title.substring(0, 60),
      metaDescription: excerpt,
      ogImage: `/images/blog/${slug}-og.jpg`
    },
    template: templateId
  };

  const success = await upsertArticle(articleData);

  if (success) {
    console.log(`✓ Article ${articleNumber} inserted to Supabase: ${slug}`);
    return true;
  } else {
    console.error(`✗ Failed to insert article ${articleNumber}`);
    return false;
  }
}

// Read from command line arguments
const [,, templateId, articleNumber, category, title, ...contentParts] = process.argv;
const content = contentParts.join(' ');

if (!templateId || !articleNumber || !category || !title || !content) {
  console.error('Usage: node generate-article-to-db.js <templateId> <articleNumber> <category> <title> <content>');
  process.exit(1);
}

generateArticle(templateId, articleNumber, category, title, content)
  .then(success => process.exit(success ? 0 : 1))
  .catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });
