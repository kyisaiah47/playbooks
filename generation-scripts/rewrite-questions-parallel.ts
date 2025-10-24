import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uvcstcajctqbxddosdbf.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

interface Question {
  id: string;
  prompt: string;
  template_id: string;
}

function rewriteToNotionStyle(prompt: string): string {
  let rewritten = prompt;

  // Replace formal verbs with conversational ones
  rewritten = rewritten.replace(/^Document /i, 'What ');
  rewritten = rewritten.replace(/^Research /i, 'Look into ');
  rewritten = rewritten.replace(/^Reflect on /i, 'Think about ');
  rewritten = rewritten.replace(/^Note /i, 'Notice ');
  rewritten = rewritten.replace(/^Record /i, 'Write down ');
  rewritten = rewritten.replace(/^Investigate /i, 'Check out ');
  rewritten = rewritten.replace(/^Study /i, 'Notice ');
  rewritten = rewritten.replace(/^Analyze /i, 'How does ');
  rewritten = rewritten.replace(/^Explore /i, 'Check out ');
  rewritten = rewritten.replace(/^Track /i, 'Keep track of ');
  rewritten = rewritten.replace(/^Create /i, 'Set up ');

  // Add contractions
  rewritten = rewritten.replace(/you are/gi, 'you\'re');
  rewritten = rewritten.replace(/you have/gi, 'you\'ve');
  rewritten = rewritten.replace(/what is/gi, 'what\'s');
  rewritten = rewritten.replace(/how did/gi, 'how\'d');
  rewritten = rewritten.replace(/that is/gi, 'that\'s');
  rewritten = rewritten.replace(/it is/gi, 'it\'s');

  // Split long sentences and add questions
  if (rewritten.length > 100 && rewritten.includes(' and ')) {
    const parts = rewritten.split(' and ');
    if (parts.length === 2) {
      rewritten = parts[0] + '? ' + parts[1].charAt(0).toUpperCase() + parts[1].slice(1);
    }
  }

  // Add question prompts at the end if it's a statement
  if (!rewritten.includes('?')) {
    if (rewritten.toLowerCase().includes('notice') || rewritten.toLowerCase().includes('observe')) {
      rewritten += ' What do you notice?';
    } else if (rewritten.toLowerCase().includes('track') || rewritten.toLowerCase().includes('keep')) {
      rewritten += ' Keep track.';
    }
  }

  return rewritten;
}

async function processBatch(offset: number, batchSize: number): Promise<number> {
  try {
    // Fetch questions
    const { data: questions, error: fetchError } = await supabase
      .from('questions')
      .select('id, prompt, template_id')
      .range(offset, offset + batchSize - 1)
      .order('id');

    if (fetchError) {
      console.error(`Error fetching batch at offset ${offset}:`, fetchError);
      return 0;
    }

    if (!questions || questions.length === 0) {
      return 0;
    }

    // Rewrite each question
    const updates = questions.map(q => ({
      id: q.id,
      prompt: rewriteToNotionStyle(q.prompt)
    }));

    // Build the SQL update
    const caseStatements = updates
      .map(u => `WHEN '${u.id}' THEN '${u.prompt.replace(/'/g, "''")}'`)
      .join('\n  ');

    const ids = updates.map(u => `'${u.id}'`).join(', ');

    const updateQuery = `
      UPDATE questions SET prompt = CASE id
        ${caseStatements}
      END
      WHERE id IN (${ids})
    `;

    const { error: updateError } = await supabase.rpc('exec_sql', { sql: updateQuery });

    if (updateError) {
      // Try direct update if RPC fails
      const { error: directError } = await supabase
        .from('questions')
        .upsert(updates.map(u => ({ id: u.id, prompt: u.prompt })));

      if (directError) {
        console.error(`Error updating batch at offset ${offset}:`, directError);
        return 0;
      }
    }

    console.log(`✓ Processed batch at offset ${offset} (${questions.length} questions)`);
    return questions.length;

  } catch (error) {
    console.error(`Exception processing batch at offset ${offset}:`, error);
    return 0;
  }
}

async function main() {
  console.log('Starting parallel question rewrite...\n');

  const BATCH_SIZE = 50;
  const CONCURRENT_BATCHES = 20; // Process 20 batches at once = 1000 questions
  const START_OFFSET = 920; // Continue from where we left off

  let currentOffset = START_OFFSET;
  let totalProcessed = START_OFFSET;
  let hasMore = true;

  while (hasMore) {
    // Create array of batch promises
    const batchPromises = [];
    for (let i = 0; i < CONCURRENT_BATCHES; i++) {
      const offset = currentOffset + (i * BATCH_SIZE);
      batchPromises.push(processBatch(offset, BATCH_SIZE));
    }

    // Process all batches concurrently
    const results = await Promise.all(batchPromises);
    const processedCount = results.reduce((sum, count) => sum + count, 0);

    if (processedCount === 0) {
      hasMore = false;
      break;
    }

    totalProcessed += processedCount;
    currentOffset += CONCURRENT_BATCHES * BATCH_SIZE;

    const percentage = ((totalProcessed / 103820) * 100).toFixed(1);
    console.log(`\n Progress: ${totalProcessed}/103,820 (${percentage}%)\n`);

    // Small delay to avoid overwhelming the database
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  console.log(`\n✓ Complete! Rewrote ${totalProcessed} questions to Notion-style tone.`);
}

main();
