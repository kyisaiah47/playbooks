import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const BATCH_SIZE = 1000;

async function removeAllDuplicateArticles() {
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
      .filter(([_, articles]) => articles.length > 1);

    console.log(`Found ${duplicateTitles.length} duplicate title groups\n`);

    const idsToDelete: string[] = [];

    duplicateTitles.forEach(([title, dupes]) => {
      // Sort by slug length (descending) - keep the longest one
      dupes.sort((a, b) => b.slug.length - a.slug.length);

      // Mark the rest for deletion (all except the first/longest)
      for (let i = 1; i < dupes.length; i++) {
        idsToDelete.push(dupes[i].id);
      }
    });

    console.log(`\n=== SUMMARY ===`);
    console.log(`Total articles to delete: ${idsToDelete.length}`);

    if (idsToDelete.length === 0) {
      console.log('No duplicates to remove!');
      return;
    }

    console.log('\nDeleting duplicate articles in batches...');

    // Delete in batches of 100 to avoid query size limits
    const DELETE_BATCH_SIZE = 100;
    let deletedCount = 0;

    for (let i = 0; i < idsToDelete.length; i += DELETE_BATCH_SIZE) {
      const batch = idsToDelete.slice(i, i + DELETE_BATCH_SIZE);

      const { error: deleteError } = await supabase
        .from('templata_articles')
        .delete()
        .in('id', batch);

      if (deleteError) {
        console.error(`Error deleting batch ${i / DELETE_BATCH_SIZE + 1}:`, deleteError);
        continue;
      }

      deletedCount += batch.length;
      console.log(`Deleted ${deletedCount}/${idsToDelete.length} articles...`);
    }

    console.log(`\n✓ Successfully deleted ${deletedCount} duplicate articles!`);
    console.log(`Articles remaining: ${allArticles.length - deletedCount}`);

  } catch (error) {
    console.error('Fatal error:', error);
  }
}

removeAllDuplicateArticles();
