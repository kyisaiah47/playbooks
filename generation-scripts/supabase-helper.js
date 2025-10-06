#!/usr/bin/env node
/**
 * Supabase helper for generation scripts
 * Provides functions to insert content directly to Supabase
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

/**
 * Insert or update an article in Supabase
 */
async function upsertArticle(articleData) {
  try {
    const { error } = await supabase
      .from('templata_articles')
      .upsert({
        id: articleData.id,
        title: articleData.title,
        excerpt: articleData.excerpt,
        content: articleData.content,
        author: articleData.author || 'Templata',
        published_at: articleData.publishedAt || new Date().toISOString().split('T')[0],
        updated_at: new Date().toISOString(),
        read_time: articleData.readTime || '5 min read',
        tags: articleData.tags || [],
        slug: articleData.slug,
        type: articleData.type || 'guide',
        difficulty: articleData.difficulty || 'intermediate',
        meta_title: articleData.seo?.metaTitle || articleData.title.substring(0, 60),
        meta_description: articleData.seo?.metaDescription || articleData.excerpt.substring(0, 160),
        template: articleData.template || articleData.templateId
      });

    if (error) {
      console.error(`Error inserting article: ${error.message}`);
      return false;
    }

    return true;
  } catch (err) {
    console.error(`Exception inserting article: ${err.message}`);
    return false;
  }
}

/**
 * Insert or update a prompt in Supabase
 */
async function upsertPrompt(promptData) {
  try {
    const { error } = await supabase
      .from('templata_prompts')
      .upsert({
        id: promptData.id,
        prompt: promptData.prompt,
        category: promptData.category,
        type: promptData.type || 'action',
        template_id: promptData.templateId
      });

    if (error) {
      console.error(`Error inserting prompt: ${error.message}`);
      return false;
    }

    return true;
  } catch (err) {
    console.error(`Exception inserting prompt: ${err.message}`);
    return false;
  }
}

/**
 * Insert or update a marketing page in Supabase
 */
async function upsertMarketing(marketingData) {
  try {
    const { error } = await supabase
      .from('templata_marketing_pages')
      .upsert({
        template_id: marketingData.templateId,
        hero_title: marketingData.hero.title,
        hero_subtitle: marketingData.hero.subtitle,
        hero_description: marketingData.hero.description,
        features: JSON.stringify(marketingData.features),
        steps: JSON.stringify(marketingData.steps),
        prompts: JSON.stringify(marketingData.prompts),
        articles: JSON.stringify(marketingData.articles),
        cta_title: marketingData.cta.title,
        cta_description: marketingData.cta.description
      }, {
        onConflict: 'template_id'
      });

    if (error) {
      console.error(`Error inserting marketing: ${error.message}`);
      return false;
    }

    return true;
  } catch (err) {
    console.error(`Exception inserting marketing: ${err.message}`);
    return false;
  }
}

/**
 * Insert or update a template in Supabase
 */
async function upsertTemplate(templateData) {
  try {
    const { error } = await supabase
      .from('templata_templates')
      .upsert({
        id: templateData.id,
        name: templateData.name,
        description: templateData.description,
        category: templateData.category,
        sections: JSON.stringify(templateData.sections)
      });

    if (error) {
      console.error(`Error inserting template: ${error.message}`);
      return false;
    }

    return true;
  } catch (err) {
    console.error(`Exception inserting template: ${err.message}`);
    return false;
  }
}

/**
 * Check if article exists
 */
async function articleExists(id) {
  const { data, error } = await supabase
    .from('templata_articles')
    .select('id')
    .eq('id', id)
    .single();

  return !error && data;
}

/**
 * Get article count for a template
 */
async function getArticleCount(templateId) {
  const { data, error } = await supabase
    .from('templata_articles')
    .select('id', { count: 'exact' })
    .eq('template', templateId);

  if (error) return 0;
  return data?.length || 0;
}

module.exports = {
  supabase,
  upsertArticle,
  upsertPrompt,
  upsertMarketing,
  upsertTemplate,
  articleExists,
  getArticleCount
};
