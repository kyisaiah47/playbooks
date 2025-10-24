import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uvcstcajctqbxddosdbf.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

async function cleanReadingArtifacts() {
  console.log('Starting to clean reading artifacts...');

  // Process in batches of 500
  const batchSize = 500;
  let offset = 0;
  let totalCleaned = 0;
  let totalProcessed = 0;

  while (true) {
    // Fetch ALL readings (don't filter, that causes timeout)
    const { data: readings, error } = await supabase
      .from('readings')
      .select('id, content')
      .range(offset, offset + batchSize - 1);

    if (error) {
      console.error('Error fetching readings:', error);
      break;
    }

    if (!readings || readings.length === 0) {
      console.log('No more readings to process');
      break;
    }

    console.log(`Processing batch: ${offset + 1} to ${offset + readings.length}`);

    // Clean each reading that has the artifact
    for (const reading of readings) {
      totalProcessed++;

      if (reading.content.includes('ARTICLE GENERATION COMPLETE')) {
        const cleanedContent = reading.content.replace(/\n\nARTICLE GENERATION COMPLETE - Article #\d+$/g, '');

        const { error: updateError } = await supabase
          .from('readings')
          .update({ content: cleanedContent })
          .eq('id', reading.id);

        if (updateError) {
          console.error(`Error updating reading ${reading.id}:`, updateError);
        } else {
          totalCleaned++;
          if (totalCleaned % 100 === 0) {
            console.log(`  → Cleaned ${totalCleaned} readings so far...`);
          }
        }
      }
    }

    console.log(`Batch complete. Total processed: ${totalProcessed}, Total cleaned: ${totalCleaned}`);

    offset += batchSize;

    // Small delay to avoid rate limits
    await new Promise(resolve => setTimeout(resolve, 50));
  }

  console.log(`\nCompleted! Processed ${totalProcessed} readings, cleaned ${totalCleaned} readings total.`);
}

cleanReadingArtifacts();
