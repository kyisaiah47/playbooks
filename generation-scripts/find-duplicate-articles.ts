import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

async function findDuplicateArticles() {
  try {
    console.log('Fetching all articles...');

    // Fetch all articles - use limit to bypass default 1000 row limit
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
      .filter(([_, articles]) => articles.length > 1)
      .sort((a, b) => b[1].length - a[1].length);

    console.log(`\n=== DUPLICATE ARTICLES BY TITLE ===`);
    console.log(`Found ${duplicateTitles.length} duplicate title groups\n`);

    duplicateTitles.forEach(([title, dupes]) => {
      console.log(`Title: "${title}"`);
      console.log(`Count: ${dupes.length} duplicates`);
      dupes.forEach(article => {
        console.log(`  - ID: ${article.id}, Slug: ${article.slug}, Template: ${article.template || 'N/A'}`);
      });
      console.log('');
    });

    // Find duplicates by slug
    const slugMap = new Map<string, any[]>();
    articles.forEach(article => {
      const existing = slugMap.get(article.slug) || [];
      existing.push(article);
      slugMap.set(article.slug, existing);
    });

    const duplicateSlugs = Array.from(slugMap.entries())
      .filter(([_, articles]) => articles.length > 1)
      .sort((a, b) => b[1].length - a[1].length);

    console.log(`\n=== DUPLICATE ARTICLES BY SLUG ===`);
    console.log(`Found ${duplicateSlugs.length} duplicate slug groups\n`);

    duplicateSlugs.forEach(([slug, dupes]) => {
      console.log(`Slug: "${slug}"`);
      console.log(`Count: ${dupes.length} duplicates`);
      dupes.forEach(article => {
        console.log(`  - ID: ${article.id}, Title: ${article.title}, Template: ${article.template || 'N/A'}`);
      });
      console.log('');
    });

    // Summary
    const totalDuplicatesByTitle = duplicateTitles.reduce((sum, [_, dupes]) => sum + (dupes.length - 1), 0);
    const totalDuplicatesBySslug = duplicateSlugs.reduce((sum, [_, dupes]) => sum + (dupes.length - 1), 0);

    console.log(`\n=== SUMMARY ===`);
    console.log(`Total articles: ${articles.length}`);
    console.log(`Duplicate title groups: ${duplicateTitles.length}`);
    console.log(`Extra articles (by title): ${totalDuplicatesByTitle}`);
    console.log(`Duplicate slug groups: ${duplicateSlugs.length}`);
    console.log(`Extra articles (by slug): ${totalDuplicatesBySslug}`);

  } catch (error) {
    console.error('Fatal error:', error);
  }
}

findDuplicateArticles();
