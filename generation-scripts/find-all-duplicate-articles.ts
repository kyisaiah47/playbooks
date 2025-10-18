import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const BATCH_SIZE = 1000;

async function findAllDuplicateArticles() {
  try {
    console.log('Fetching all articles in batches...\n');

    let allArticles: any[] = [];
    let offset = 0;
    let hasMore = true;

    while (hasMore) {
      const { data, error } = await supabase
        .from('templata_articles')
        .select('id, title, slug, template')
        .order('title')
        .range(offset, offset + BATCH_SIZE - 1);

      if (error) {
        console.error('Error fetching batch:', error);
        break;
      }

      if (!data || data.length === 0) {
        hasMore = false;
        break;
      }

      allArticles = allArticles.concat(data);
      console.log(`Fetched ${allArticles.length} articles so far...`);

      if (data.length < BATCH_SIZE) {
        hasMore = false;
      } else {
        offset += BATCH_SIZE;
      }
    }

    console.log(`\nTotal articles fetched: ${allArticles.length}\n`);

    // Find duplicates by title
    const titleMap = new Map<string, any[]>();
    allArticles.forEach(article => {
      const existing = titleMap.get(article.title) || [];
      existing.push(article);
      titleMap.set(article.title, existing);
    });

    const duplicateTitles = Array.from(titleMap.entries())
      .filter(([_, articles]) => articles.length > 1)
      .sort((a, b) => b[1].length - a[1].length);

    console.log(`\n=== DUPLICATE ARTICLES BY TITLE ===`);
    console.log(`Found ${duplicateTitles.length} duplicate title groups\n`);

    // Only show first 50 duplicate groups to avoid overwhelming output
    const displayLimit = 50;
    duplicateTitles.slice(0, displayLimit).forEach(([title, dupes]) => {
      console.log(`Title: "${title}"`);
      console.log(`Count: ${dupes.length} duplicates`);
      dupes.forEach(article => {
        console.log(`  - ID: ${article.id.slice(0, 60)}..., Slug: ${article.slug.slice(0, 60)}..., Template: ${article.template || 'N/A'}`);
      });
      console.log('');
    });

    if (duplicateTitles.length > displayLimit) {
      console.log(`... and ${duplicateTitles.length - displayLimit} more duplicate groups (not shown)\n`);
    }

    // Summary
    const totalDuplicatesByTitle = duplicateTitles.reduce((sum, [_, dupes]) => sum + (dupes.length - 1), 0);

    console.log(`\n=== SUMMARY ===`);
    console.log(`Total articles: ${allArticles.length}`);
    console.log(`Duplicate title groups: ${duplicateTitles.length}`);
    console.log(`Extra articles (duplicates to remove): ${totalDuplicatesByTitle}`);
    console.log(`Unique articles (after cleanup): ${allArticles.length - totalDuplicatesByTitle}`);

  } catch (error) {
    console.error('Fatal error:', error);
  }
}

findAllDuplicateArticles();
