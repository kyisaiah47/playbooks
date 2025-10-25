import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

async function removeDuplicateArticles() {
  try {
    console.log('Fetching all readings...');

    const { data: readings, error } = await supabase
      .from('templata_articles')
      .select('id, title, slug, guide')
      .order('title')
      .limit(100000); // Fetch up to 100k readings

    if (error) {
      console.error('Error fetching readings:', error);
      return;
    }

    console.log(`Total readings fetched: ${readings.length}\n`);

    // Find duplicates by title
    const titleMap = new Map<string, any[]>();
    readings.forEach(reading => {
      const existing = titleMap.get(reading.title) || [];
      existing.push(reading);
      titleMap.set(reading.title, existing);
    });

    const duplicateTitles = Array.from(titleMap.entries())
      .filter(([_, readings]) => readings.length > 1);

    console.log(`Found ${duplicateTitles.length} duplicate title groups\n`);

    const idsToDelete: string[] = [];

    duplicateTitles.forEach(([title, dupes]) => {
      console.log(`\nProcessing: "${title}"`);
      console.log(`Found ${dupes.length} duplicates`);

      // Sort by slug length (descending) - keep the longest one
      dupes.sort((a, b) => b.slug.length - a.slug.length);

      console.log(`  KEEPING: ID=${dupes[0].id}, Slug=${dupes[0].slug} (length: ${dupes[0].slug.length})`);

      // Mark the rest for deletion
      for (let i = 1; i < dupes.length; i++) {
        console.log(`  DELETING: ID=${dupes[i].id}, Slug=${dupes[i].slug} (length: ${dupes[i].slug.length})`);
        idsToDelete.push(dupes[i].id);
      }
    });

    console.log(`\n\n=== SUMMARY ===`);
    console.log(`Total readings to delete: ${idsToDelete.length}`);

    if (idsToDelete.length === 0) {
      console.log('No duplicates to remove!');
      return;
    }

    console.log('\nDeleting duplicate readings...');

    const { error: deleteError } = await supabase
      .from('templata_articles')
      .delete()
      .in('id', idsToDelete);

    if (deleteError) {
      console.error('Error deleting readings:', deleteError);
      return;
    }

    console.log(`✓ Successfully deleted ${idsToDelete.length} duplicate readings!`);
    console.log(`\nArticles deleted:`);
    idsToDelete.forEach(id => console.log(`  - ${id}`));

  } catch (error) {
    console.error('Fatal error:', error);
  }
}

removeDuplicateArticles();
