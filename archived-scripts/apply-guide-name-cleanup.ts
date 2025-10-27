import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

const supabaseUrl = 'https://uvcstcajctqbxddosdbf.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

async function applyGuideNameCleanup() {
  console.log('Reading guide name files...');

  const originalNames = fs.readFileSync(
    path.join(__dirname, 'guide-names-original.txt'),
    'utf-8'
  ).split('\n').filter(line => line.trim());

  const cleanedNames = fs.readFileSync(
    path.join(__dirname, 'guide-names-cleaned.txt'),
    'utf-8'
  ).split('\n').filter(line => line.trim());

  if (originalNames.length !== cleanedNames.length) {
    console.error(`Mismatch: ${originalNames.length} original vs ${cleanedNames.length} cleaned`);
    return;
  }

  console.log(`Loaded ${originalNames.length} guide name mappings`);
  console.log('Starting database updates...\n');

  let totalUpdated = 0;
  let totalUnchanged = 0;
  let totalErrors = 0;

  for (let i = 0; i < originalNames.length; i++) {
    const originalName = originalNames[i];
    const cleanedName = cleanedNames[i];

    // Skip if names are the same
    if (originalName === cleanedName) {
      totalUnchanged++;
      continue;
    }

    console.log(`[${i + 1}/${originalNames.length}] "${originalName}" → "${cleanedName}"`);

    // Update the guide name and title
    const { error } = await supabase
      .from('guides')
      .update({
        name: cleanedName,
        title: cleanedName
      })
      .eq('name', originalName);

    if (error) {
      console.error(`  ✗ Error:`, error.message);
      totalErrors++;
    } else {
      totalUpdated++;
    }

    // Small delay to avoid rate limits
    if (i % 50 === 0 && i > 0) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }

  console.log(`\n✓ Completed!`);
  console.log(`  Updated: ${totalUpdated}`);
  console.log(`  Unchanged: ${totalUnchanged}`);
  console.log(`  Errors: ${totalErrors}`);
}

applyGuideNameCleanup();
