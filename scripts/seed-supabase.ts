#!/usr/bin/env tsx
/**
 * Seed Supabase database with all Templata content
 * Run with: npx tsx scripts/seed-supabase.ts
 */

import { createClient } from '@supabase/supabase-js';
import { readdir } from 'fs/promises';
import { join } from 'path';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function seedArticles() {
  console.log('Seeding readings...');

  const manifestPath = join(process.cwd(), 'src/data/readings/manifest.json');
  const manifest = await import(manifestPath);

  let count = 0;
  let batch: any[] = [];
  const BATCH_SIZE = 100;

  for (const item of manifest.default) {
    try {
      const modulePath = `../src/data/readings/${item.filename}`;
      const module = await import(modulePath);

      if (module.readings && module.readings.length > 0) {
        for (const reading of module.readings) {
          batch.push({
            id: reading.id,
            title: reading.title,
            excerpt: reading.excerpt,
            content: reading.content,
            author: reading.author,
            published_at: reading.publishedAt,
            updated_at: reading.updatedAt,
            read_time: reading.readTime,
            category: reading.category,
            featured: reading.featured || false,
            tags: reading.tags,
            slug: reading.slug,
            type: reading.type,
            difficulty: reading.difficulty,
            meta_title: reading.seo?.metaTitle,
            meta_description: reading.seo?.metaDescription,
            og_image: reading.seo?.ogImage,
            related_templates: reading.relatedGuides || [],
            related_posts: reading.relatedPosts || []
          });

          count++;

          if (batch.length >= BATCH_SIZE) {
            const { error } = await supabase
              .from('templata_articles')
              .upsert(batch);

            if (error) {
              console.error('Error inserting batch:', error);
            } else {
              console.log(`  Inserted ${count} readings...`);
            }

            batch = [];
          }
        }
      }
    } catch (error) {
      console.error(`Error processing ${item.filename}:`, error);
    }
  }

  // Insert remaining batch
  if (batch.length > 0) {
    const { error } = await supabase
      .from('templata_articles')
      .upsert(batch);

    if (error) {
      console.error('Error inserting final batch:', error);
    }
  }

  console.log(`✓ Seeded ${count} readings`);
  return count;
}

async function seedPrompts() {
  console.log('Seeding questions...');

  const manifestPath = join(process.cwd(), 'src/data/questions/manifest.json');
  const manifest = await import(manifestPath);

  let count = 0;
  let batch: any[] = [];
  const BATCH_SIZE = 500;

  for (const item of manifest.default) {
    try {
      const modulePath = `../src/data/questions/${item.filename}`;
      const module = await import(modulePath);

      if (module.questions && module.questions.length > 0) {
        for (const question of module.questions) {
          batch.push({
            id: question.id,
            question: question.question,
            category: question.category,
            type: question.type,
            template_id: item.guide
          });

          count++;

          if (batch.length >= BATCH_SIZE) {
            const { error } = await supabase
              .from('templata_prompts')
              .upsert(batch);

            if (error) {
              console.error('Error inserting batch:', error);
            } else {
              console.log(`  Inserted ${count} questions...`);
            }

            batch = [];
          }
        }
      }
    } catch (error) {
      console.error(`Error processing ${item.filename}:`, error);
    }
  }

  // Insert remaining batch
  if (batch.length > 0) {
    const { error} = await supabase
      .from('templata_prompts')
      .upsert(batch);

    if (error) {
      console.error('Error inserting final batch:', error);
    }
  }

  console.log(`✓ Seeded ${count} questions`);
  return count;
}

async function main() {
  console.log('='.repeat(60));
  console.log('Templata Supabase Seeder');
  console.log('='.repeat(60));
  console.log('');

  // Test connection
  try {
    const { data, error } = await supabase
      .from('templata_articles')
      .select('count')
      .limit(1);

    if (error) throw error;
    console.log('✓ Connected to Supabase successfully');
    console.log('');
  } catch (error) {
    console.error('✗ Failed to connect to Supabase:', error);
    console.log('  Make sure you have run the schema.sql file first!');
    process.exit(1);
  }

  const readings = await seedArticles();
  const questions = await seedPrompts();

  console.log('');
  console.log('='.repeat(60));
  console.log(`Summary: ${readings + questions} total items seeded`);
  console.log('='.repeat(60));
}

main().catch(console.error);
