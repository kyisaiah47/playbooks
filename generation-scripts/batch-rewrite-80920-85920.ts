import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uvcstcajctqbxddosdbf.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

const START_OFFSET = 81420; // Starting from where I left off (batch 10)
const END_OFFSET = 85920;
const BATCH_SIZE = 50;

// Transformation function: Wikipedia-style to Notion-style
function transformPrompt(question: string): string {
  let transformed = question;

  // Document → Write down
  transformed = transformed.replace(/^Document /i, 'Write down ');
  transformed = transformed.replace(/^Document the /i, 'Write down the ');
  transformed = transformed.replace(/^Document your /i, 'Write down your ');
  transformed = transformed.replace(/^Document all /i, 'Write down all ');
  transformed = transformed.replace(/^Document any /i, 'Write down any ');
  transformed = transformed.replace(/^Document specific /i, 'Write down specific ');
  transformed = transformed.replace(/^Document each /i, 'Write down each ');
  transformed = transformed.replace(/^Document potential /i, 'Write down potential ');

  // Research → Look into/Check out
  transformed = transformed.replace(/^Research /i, 'Look into ');
  transformed = transformed.replace(/^Research and /i, 'Look into ');
  transformed = transformed.replace(/^Investigate /i, 'Look into ');
  transformed = transformed.replace(/^Investigate /i, 'Check out ');
  transformed = transformed.replace(/^Explore /i, 'Check out ');

  // Reflect on → Think about
  transformed = transformed.replace(/^Reflect on /i, 'Think about ');

  // Note → Notice/Keep track of/Write down
  transformed = transformed.replace(/^Note /i, 'Keep track of ');
  transformed = transformed.replace(/^Note down /i, 'Write down ');
  transformed = transformed.replace(/^Note the /i, 'Keep track of the ');
  transformed = transformed.replace(/^Record /i, 'Keep track of ');
  transformed = transformed.replace(/^Track /i, 'Keep track of ');
  transformed = transformed.replace(/^Create a list/i, 'Make a list');
  transformed = transformed.replace(/^Create a /i, 'Create a ');
  transformed = transformed.replace(/^Create notes /i, 'Keep track of ');
  transformed = transformed.replace(/^Compile /i, 'Check out ');
  transformed = transformed.replace(/^List /i, 'List ');
  transformed = transformed.replace(/^Analyze /i, 'Think about ');
  transformed = transformed.replace(/^Gather /i, 'Look into ');
  transformed = transformed.replace(/^Calculate /i, 'Calculate ');
  transformed = transformed.replace(/^Keep a /i, 'Keep a ');
  transformed = transformed.replace(/^Write about /i, 'Write about ');

  // Convert patterns like "and note how/what/which" to questions
  transformed = transformed.replace(/ and document (how|what|which|where|when|why) (.*?)\.$/gi, (_, qword, rest) => {
    return `. ${qword.charAt(0).toUpperCase() + qword.slice(1)} ${rest}?`;
  });

  transformed = transformed.replace(/ and note (how|what|which|where|when|why) (.*?)\.$/gi, (_, qword, rest) => {
    return `. ${qword.charAt(0).toUpperCase() + qword.slice(1)} ${rest}?`;
  });

  transformed = transformed.replace(/ and identify (.*?)\.$/gi, (_, rest) => {
    return `. What ${rest}?`;
  });

  transformed = transformed.replace(/ to (identify|determine|understand) (.*?)\.$/gi, (_, verb, rest) => {
    // Keep questions natural
    return `. What ${rest}?`;
  });

  transformed = transformed.replace(/ noting (what|how|which|where|when|why) (.*?)\.$/gi, (_, qword, rest) => {
    return `. ${qword.charAt(0).toUpperCase() + qword.slice(1)} ${rest}?`;
  });

  // Add contractions for friendlier tone
  transformed = transformed.replace(/you have/gi, "you've");
  transformed = transformed.replace(/you are/gi, "you're");
  transformed = transformed.replace(/what is/gi, "what's");
  transformed = transformed.replace(/how did/gi, "how'd");
  transformed = transformed.replace(/that is/gi, "that's");
  transformed = transformed.replace(/it is/gi, "it's");
  transformed = transformed.replace(/they are/gi, "they're");
  transformed = transformed.replace(/could have/gi, "could've");
  transformed = transformed.replace(/would have/gi, "would've");

  return transformed;
}

async function processBatch(offset: number): Promise<boolean> {
  console.log(`Processing batch at offset ${offset}...`);

  // Fetch questions
  const { data: questions, error: fetchError } = await supabase
    .from('questions')
    .select('id, question, template_id')
    .order('id')
    .range(offset, offset + BATCH_SIZE - 1);

  if (fetchError) {
    console.error(`Error fetching batch at offset ${offset}:`, fetchError);
    return false;
  }

  if (!questions || questions.length === 0) {
    console.log(`No questions found at offset ${offset}`);
    return true;
  }

  // Transform questions
  const updates = questions.map(q => ({
    id: q.id,
    originalPrompt: q.question,
    question: transformPrompt(q.question)
  }));

  // Build SQL CASE statement
  const caseStatements = updates.map(u =>
    `WHEN '${u.id}' THEN '${u.question.replace(/'/g, "''")}'`
  ).join('\n  ');

  const ids = updates.map(u => `'${u.id}'`).join(', ');

  const sql = `UPDATE questions SET question = CASE id
  ${caseStatements}
END
WHERE id IN (${ids})`;

  // Execute update using execute_sql tool
  const { error: updateError } = await supabase.rpc('execute_sql', {
    query: sql
  });

  if (updateError) {
    console.error(`Error updating batch at offset ${offset}:`, updateError);
    console.error('First question transformation example:');
    console.error('Original:', updates[0]?.originalPrompt);
    console.error('Transformed:', updates[0]?.question);
    return false;
  } else {
    console.log(`✓ Successfully updated ${questions.length} questions at offset ${offset}`);
    return true;
  }
}

async function main() {
  console.log(`Starting batch rewrite from offset ${START_OFFSET} to ${END_OFFSET}`);
  const totalBatches = Math.ceil((END_OFFSET - START_OFFSET) / BATCH_SIZE);
  console.log(`Total batches: ${totalBatches}`);

  let successCount = 0;
  let failCount = 0;

  for (let offset = START_OFFSET; offset < END_OFFSET; offset += BATCH_SIZE) {
    const success = await processBatch(offset);
    if (success) {
      successCount++;
    } else {
      failCount++;
    }
    // Small delay to avoid overwhelming the database
    await new Promise(resolve => setTimeout(resolve, 200));
  }

  console.log('\n=== PROCESSING COMPLETE ===');
  console.log(`Successful batches: ${successCount}`);
  console.log(`Failed batches: ${failCount}`);
  console.log(`Total questions processed: ${successCount * BATCH_SIZE}`);
}

main().catch(console.error);
