const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://ziqjrhrzqccaqnqlmivv.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppcWpyaHJ6cWNjYXFucWxtaXZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc5MDA0MTYsImV4cCI6MjA0MzQ3NjQxNn0.tXNW5hDBWjxJCgHtZbQEz9Y4VtHQkLDkqgTCTdqO-ww'
);

(async () => {
  const { data, error } = await supabase
    .from('templata_articles')
    .select('id, title, content, read_time')
    .limit(5);

  if (error) {
    console.error('Error:', error);
    return;
  }

  console.log('Sample articles from Supabase:\n');

  data.forEach(article => {
    const wordCount = article.content.split(/\s+/).length;
    console.log(`Title: ${article.title}`);
    console.log(`  Read time: ${article.read_time}`);
    console.log(`  Actual word count: ${wordCount}`);
    console.log(`  Content preview: ${article.content.substring(0, 200)}...`);
    console.log('');
  });
})();
