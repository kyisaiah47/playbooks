import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

async function removeDuplicateArticles() {
  try {
    console.log('Fetching all articles...');

    const { data: articles, error } = await supabase
      .from('templata_articles')
      .select('id, title, slug, template')
      .order('title')
      .limit(100000); // Fetch up to 100k articles

    if (error) {
      console.error('Error fetching articles:', error);
      return;
    }

    console.log(`Total articles fetched: ${articles.length}\n`);

    // Find duplicates by title
    const titleMap = new Map<string, any[]>();
    articles.forEach(article => {
      const existing = titleMap.get(article.title) || [];
      existing.push(article);
      titleMap.set(article.title, existing);
    });

    const duplicateTitles = Array.from(titleMap.entries())
      .filter(([_, articles]) => articles.length > 1);

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
    console.log(`Total articles to delete: ${idsToDelete.length}`);

    if (idsToDelete.length === 0) {
      console.log('No duplicates to remove!');
      return;
    }

    console.log('\nDeleting duplicate articles...');

    const { error: deleteError } = await supabase
      .from('templata_articles')
      .delete()
      .in('id', idsToDelete);

    if (deleteError) {
      console.error('Error deleting articles:', deleteError);
      return;
    }

    console.log(`✓ Successfully deleted ${idsToDelete.length} duplicate articles!`);
    console.log(`\nArticles deleted:`);
    idsToDelete.forEach(id => console.log(`  - ${id}`));

  } catch (error) {
    console.error('Fatal error:', error);
  }
}

removeDuplicateArticles();
