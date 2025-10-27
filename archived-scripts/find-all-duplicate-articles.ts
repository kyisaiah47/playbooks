import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const BATCH_SIZE = 1000;

async function findAllDuplicateArticles() {
  try {
    console.log('Fetching all readings in batches...\n');

    let allArticles: any[] = [];
    let offset = 0;
    let hasMore = true;

    while (hasMore) {
      const { data, error } = await supabase
        .from('templata_articles')
        .select('id, title, slug, guide')
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
      console.log(`Fetched ${allArticles.length} readings so far...`);

      if (data.length < BATCH_SIZE) {
        hasMore = false;
      } else {
        offset += BATCH_SIZE;
      }
    }

    console.log(`\nTotal readings fetched: ${allArticles.length}\n`);

    // Find duplicates by title
    const titleMap = new Map<string, any[]>();
    allArticles.forEach(reading => {
      const existing = titleMap.get(reading.title) || [];
      existing.push(reading);
      titleMap.set(reading.title, existing);
    });

    const duplicateTitles = Array.from(titleMap.entries())
      .filter(([_, readings]) => readings.length > 1)
      .sort((a, b) => b[1].length - a[1].length);

    console.log(`\n=== DUPLICATE ARTICLES BY TITLE ===`);
    console.log(`Found ${duplicateTitles.length} duplicate title groups\n`);

    // Only show first 50 duplicate groups to avoid overwhelming output
    const displayLimit = 50;
    duplicateTitles.slice(0, displayLimit).forEach(([title, dupes]) => {
      console.log(`Title: "${title}"`);
      console.log(`Count: ${dupes.length} duplicates`);
      dupes.forEach(reading => {
        console.log(`  - ID: ${reading.id.slice(0, 60)}..., Slug: ${reading.slug.slice(0, 60)}..., Guide: ${reading.guide || 'N/A'}`);
      });
      console.log('');
    });

    if (duplicateTitles.length > displayLimit) {
      console.log(`... and ${duplicateTitles.length - displayLimit} more duplicate groups (not shown)\n`);
    }

    // Summary
    const totalDuplicatesByTitle = duplicateTitles.reduce((sum, [_, dupes]) => sum + (dupes.length - 1), 0);

    console.log(`\n=== SUMMARY ===`);
    console.log(`Total readings: ${allArticles.length}`);
    console.log(`Duplicate title groups: ${duplicateTitles.length}`);
    console.log(`Extra readings (duplicates to remove): ${totalDuplicatesByTitle}`);
    console.log(`Unique readings (after cleanup): ${allArticles.length - totalDuplicatesByTitle}`);

  } catch (error) {
    console.error('Fatal error:', error);
  }
}

findAllDuplicateArticles();
