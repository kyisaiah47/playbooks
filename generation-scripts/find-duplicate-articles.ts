import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

async function findDuplicateArticles() {
  try {
    console.log('Fetching all readings...');

    // Fetch all readings - use limit to bypass default 1000 row limit
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
      .filter(([_, readings]) => readings.length > 1)
      .sort((a, b) => b[1].length - a[1].length);

    console.log(`\n=== DUPLICATE ARTICLES BY TITLE ===`);
    console.log(`Found ${duplicateTitles.length} duplicate title groups\n`);

    duplicateTitles.forEach(([title, dupes]) => {
      console.log(`Title: "${title}"`);
      console.log(`Count: ${dupes.length} duplicates`);
      dupes.forEach(reading => {
        console.log(`  - ID: ${reading.id}, Slug: ${reading.slug}, Guide: ${reading.guide || 'N/A'}`);
      });
      console.log('');
    });

    // Find duplicates by slug
    const slugMap = new Map<string, any[]>();
    readings.forEach(reading => {
      const existing = slugMap.get(reading.slug) || [];
      existing.push(reading);
      slugMap.set(reading.slug, existing);
    });

    const duplicateSlugs = Array.from(slugMap.entries())
      .filter(([_, readings]) => readings.length > 1)
      .sort((a, b) => b[1].length - a[1].length);

    console.log(`\n=== DUPLICATE ARTICLES BY SLUG ===`);
    console.log(`Found ${duplicateSlugs.length} duplicate slug groups\n`);

    duplicateSlugs.forEach(([slug, dupes]) => {
      console.log(`Slug: "${slug}"`);
      console.log(`Count: ${dupes.length} duplicates`);
      dupes.forEach(reading => {
        console.log(`  - ID: ${reading.id}, Title: ${reading.title}, Guide: ${reading.guide || 'N/A'}`);
      });
      console.log('');
    });

    // Summary
    const totalDuplicatesByTitle = duplicateTitles.reduce((sum, [_, dupes]) => sum + (dupes.length - 1), 0);
    const totalDuplicatesBySslug = duplicateSlugs.reduce((sum, [_, dupes]) => sum + (dupes.length - 1), 0);

    console.log(`\n=== SUMMARY ===`);
    console.log(`Total readings: ${readings.length}`);
    console.log(`Duplicate title groups: ${duplicateTitles.length}`);
    console.log(`Extra readings (by title): ${totalDuplicatesByTitle}`);
    console.log(`Duplicate slug groups: ${duplicateSlugs.length}`);
    console.log(`Extra readings (by slug): ${totalDuplicatesBySslug}`);

  } catch (error) {
    console.error('Fatal error:', error);
  }
}

findDuplicateArticles();
