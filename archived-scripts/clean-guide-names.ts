import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uvcstcajctqbxddosdbf.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

// Words to remove from guide names
const redundantWords = [
  'Complete',
  'Comprehensive',
  'Guide',
  'System',
  'Blueprint',
  'Roadmap',
  'Planning',
  'Development',
  'Journey',
  'Program',
  'Plan',
  'Guide',
  'Learning',
  'Mastery',
  'Strategy',
  'Navigation'
];

function cleanGuideName(name: string): string {
  let cleaned = name;

  // Remove redundant words
  redundantWords.forEach(word => {
    // Remove word followed by space or at end
    const regex1 = new RegExp(`\\b${word}\\s+`, 'gi');
    const regex2 = new RegExp(`\\s+${word}\\b`, 'gi');
    cleaned = cleaned.replace(regex1, '');
    cleaned = cleaned.replace(regex2, '');
  });

  // Clean up extra spaces
  cleaned = cleaned.replace(/\s+/g, ' ').trim();

  // If the name becomes too short or empty, keep original
  if (cleaned.length < 3) {
    return name;
  }

  return cleaned;
}

async function cleanGuideNames() {
  console.log('Starting to clean guide names...');

  const batchSize = 100;
  let offset = 0;
  let totalCleaned = 0;
  let totalProcessed = 0;

  while (true) {
    const { data: guides, error } = await supabase
      .from('guides')
      .select('id, name, title')
      .range(offset, offset + batchSize - 1);

    if (error) {
      console.error('Error fetching guides:', error);
      break;
    }

    if (!guides || guides.length === 0) {
      console.log('No more guides to process');
      break;
    }

    console.log(`Processing batch: ${offset + 1} to ${offset + guides.length}`);

    for (const guide of guides) {
      totalProcessed++;
      const cleanedName = cleanGuideName(guide.name);
      const cleanedTitle = cleanGuideName(guide.title);

      if (cleanedName !== guide.name || cleanedTitle !== guide.title) {
        console.log(`  "${guide.name}" → "${cleanedName}"`);

        const { error: updateError } = await supabase
          .from('guides')
          .update({
            name: cleanedName,
            title: cleanedTitle
          })
          .eq('id', guide.id);

        if (updateError) {
          console.error(`Error updating guide ${guide.id}:`, updateError);
        } else {
          totalCleaned++;
        }
      }
    }

    offset += batchSize;
    await new Promise(resolve => setTimeout(resolve, 50));
  }

  console.log(`\nCompleted! Processed ${totalProcessed} guides, cleaned ${totalCleaned} guide names.`);
}

cleanGuideNames();
