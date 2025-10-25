import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://uvcstcajctqbxddosdbf.supabase.co',
  process.env.SUPABASE_SERVICE_KEY!
);

const START_OFFSET = 26470; // Continue from where we left off
const END_OFFSET = 30920;
const BATCH_SIZE = 50;

// Rewrite function to convert Wikipedia style to Notion style
function rewriteToNotionStyle(question: string): string {
  let rewritten = question;

  // Main transformations
  rewritten = rewritten.replace(/^Document /, 'Write down ');
  rewritten = rewritten.replace(/^Research /, 'Look into ');
  rewritten = rewritten.replace(/^Reflect on /, 'Think about ');
  rewritten = rewritten.replace(/^Note /, 'Notice ');
  rewritten = rewritten.replace(/^Investigate /, 'Check out ');
  rewritten = rewritten.replace(/^Explore /, 'Check out ');
  rewritten = rewritten.replace(/^Track /, 'Keep track of ');
  rewritten = rewritten.replace(/^Compile /, 'List out ');
  rewritten = rewritten.replace(/^Create notes on /, 'Write down ');
  rewritten = rewritten.replace(/^List /, 'What are ');
  rewritten = rewritten.replace(/^Catalog /, 'Write down ');
  rewritten = rewritten.replace(/^Analyze /, 'Check out ');
  rewritten = rewritten.replace(/^Study /, 'Check out ');
  rewritten = rewritten.replace(/^Collect /, 'Write down ');
  rewritten = rewritten.replace(/^Gather /, 'Write down ');

  // Add contractions
  rewritten = rewritten.replace(/ you have /g, ' you\'ve ');
  rewritten = rewritten.replace(/ what is /g, ' what\'s ');
  rewritten = rewritten.replace(/ how would /g, ' how\'d ');
  rewritten = rewritten.replace(/ that is /g, ' that\'s ');

  // Split long sentences with questions
  rewritten = rewritten.replace(/ and note /g, '. What ');
  rewritten = rewritten.replace(/ and identify /g, '. What ');
  rewritten = rewritten.replace(/ and analyze /g, '. How ');

  return rewritten;
}

async function processBatch(offset: number) {
  console.log(`Processing batch at offset ${offset}...`);

  // Fetch questions
  const { data: questions, error: fetchError } = await supabase
    .from('questions')
    .select('id, question')
    .order('id')
    .range(offset, offset + BATCH_SIZE - 1);

  if (fetchError) {
    console.error(`Error fetching batch at offset ${offset}:`, fetchError);
    return;
  }

  if (!questions || questions.length === 0) {
    console.log(`No questions found at offset ${offset}`);
    return;
  }

  // Build CASE statement for batch update
  const cases = questions.map(q => {
    const rewritten = rewriteToNotionStyle(q.question);
    const escaped = rewritten.replace(/'/g, "''");
    return `WHEN '${q.id}' THEN '${escaped}'`;
  }).join('\n  ');

  const ids = questions.map(q => `'${q.id}'`).join(', ');

  const updateSQL = `UPDATE questions SET question = CASE id
  ${cases}
END
WHERE id IN (${ids})`;

  // Execute update
  const { error: updateError } = await supabase.rpc('exec_sql', { sql: updateSQL });

  if (updateError) {
    console.error(`Error updating batch at offset ${offset}:`, updateError);
    return;
  }

  console.log(`✓ Completed batch at offset ${offset} (${questions.length} questions)`);
}

async function main() {
  console.log(`Starting question rewrites from offset ${START_OFFSET} to ${END_OFFSET}`);

  let processedCount = 0;
  for (let offset = START_OFFSET; offset < END_OFFSET; offset += BATCH_SIZE) {
    await processBatch(offset);
    processedCount += BATCH_SIZE;

    // Progress update every 10 batches
    if ((offset - START_OFFSET) % (BATCH_SIZE * 10) === 0) {
      console.log(`\nProgress: ${processedCount} / ${END_OFFSET - START_OFFSET} questions processed\n`);
    }

    // Brief delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  console.log('\n✓ REWRITE COMPLETE - Processed offset 25920 to 30920');
}

main().catch(console.error);
