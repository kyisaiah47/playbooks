import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uvcstcajctqbxddosdbf.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

const START_OFFSET = 86470;
const END_OFFSET = 90920;
const BATCH_SIZE = 50;

// Transformation function: Wikipedia-style to Notion-style
function transformPrompt(question: string): string {
  let transformed = question;

  // Document → Write down
  transformed = transformed.replace(/^Document /i, 'Write down ');

  // Research → Look into/Check out
  transformed = transformed.replace(/^Research /i, 'Look into ');
  transformed = transformed.replace(/^Investigate /i, 'Check out ');
  transformed = transformed.replace(/^Explore /i, 'Check out ');

  // Reflect on → Think about
  transformed = transformed.replace(/^Reflect on /i, 'Think about ');

  // Note → Notice/Keep track of/Write down
  transformed = transformed.replace(/^Note /i, 'Notice ');
  transformed = transformed.replace(/^Record /i, 'Keep track of ');
  transformed = transformed.replace(/^Track /i, 'Keep track of ');
  transformed = transformed.replace(/^Create a /i, 'Create a ');
  transformed = transformed.replace(/^Create notes /i, 'Write notes ');
  transformed = transformed.replace(/^Compile /i, 'Write down ');
  transformed = transformed.replace(/^List /i, 'List ');
  transformed = transformed.replace(/^Analyze /i, 'Check out ');
  transformed = transformed.replace(/^Gather /i, 'Check out ');
  transformed = transformed.replace(/^Collect /i, 'Write down ');
  transformed = transformed.replace(/^Map out /i, 'Map out ');
  transformed = transformed.replace(/^Identify /i, 'Notice ');
  transformed = transformed.replace(/^Study /i, 'Look into ');
  transformed = transformed.replace(/^Keep a log /i, 'Keep a log ');

  // Convert patterns like "and note" or "and identify" to questions
  transformed = transformed.replace(/ and note (how|what|which|where|when|why) (.*?)\.$/gi, (_, qword, rest) => {
    return `. ${qword.charAt(0).toUpperCase() + qword.slice(1)} ${rest}?`;
  });

  transformed = transformed.replace(/ and identify (.*?)\.$/gi, (_, rest) => {
    return `. What ${rest}?`;
  });

  transformed = transformed.replace(/ and analyze (.*?)\.$/gi, (_, rest) => {
    return `. How do ${rest}?`;
  });

  transformed = transformed.replace(/ and summarize (.*?)\.$/gi, (_, rest) => {
    return `. What are ${rest}?`;
  });

  transformed = transformed.replace(/ to (identify|understand) (.*?)\.$/gi, (_, verb, rest) => {
    return `. What ${rest}?`;
  });

  // Make it friendlier by adding contractions
  transformed = transformed.replace(/you have/gi, "you've");
  transformed = transformed.replace(/you are/gi, "you're");
  transformed = transformed.replace(/what is/gi, "what's");
  transformed = transformed.replace(/how did/gi, "how'd");
  transformed = transformed.replace(/that is/gi, "that's");
  transformed = transformed.replace(/it is/gi, "it's");
  transformed = transformed.replace(/who is/gi, "who's");
  transformed = transformed.replace(/where is/gi, "where's");
  transformed = transformed.replace(/does not/gi, "doesn't");
  transformed = transformed.replace(/do not/gi, "don't");
  transformed = transformed.replace(/did not/gi, "didn't");
  transformed = transformed.replace(/would not/gi, "wouldn't");
  transformed = transformed.replace(/could not/gi, "couldn't");

  return transformed;
}

async function processBatch(offset: number): Promise<void> {
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

  // Transform and update each question
  for (const question of questions) {
    const newPrompt = transformPrompt(question.question);

    const { error: updateError } = await supabase
      .from('questions')
      .update({ question: newPrompt })
      .eq('id', question.id);

    if (updateError) {
      console.error(`Error updating question ${question.id}:`, updateError);
    }
  }

  console.log(`✓ Successfully updated ${questions.length} questions at offset ${offset}`);
}

async function main() {
  console.log(`Starting batch rewrite from offset ${START_OFFSET} to ${END_OFFSET}`);
  console.log(`Total batches: ${Math.ceil((END_OFFSET - START_OFFSET) / BATCH_SIZE)}`);

  for (let offset = START_OFFSET; offset < END_OFFSET; offset += BATCH_SIZE) {
    await processBatch(offset);
    // Small delay to avoid overwhelming the database
    await new Promise(resolve => setTimeout(resolve, 200));
  }

  console.log('All batches processed!');
  console.log(`REWRITE COMPLETE - Processed offset ${START_OFFSET} to ${END_OFFSET}`);
}

main().catch(console.error);
