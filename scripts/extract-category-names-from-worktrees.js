const fs = require('fs');
const path = require('path');
const glob = require('glob');

const promptsDir = path.join(__dirname, '../src/data/prompts');

function extractCategoryName(worktreeFile) {
  try {
    const content = fs.readFileSync(worktreeFile, 'utf8');
    const match = content.match(/^CATEGORY:\s*(.+)$/m);
    if (match) {
      return match[1].trim();
    }
  } catch (err) {
    // File doesn't exist
  }
  return null;
}

async function addCategoryNames() {
  console.log('🔍 Finding prompt TypeScript files...');

  const tsFiles = glob.sync('**/*-prompts-[1-8].ts', { cwd: promptsDir });

  console.log(`Found ${tsFiles.length} TypeScript files\n`);

  let processed = 0;
  let skipped = 0;
  let notFound = 0;

  for (const file of tsFiles) {
    const filePath = path.join(promptsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');

    // Check if already has categoryName export
    if (content.includes('export const categoryName')) {
      skipped++;
      continue;
    }

    // Extract template ID and category number from filename
    // e.g., "sandwich-generation-prompts-1.ts" -> template: "sandwich-generation", category: 1
    const match = file.match(/^(.+)-prompts-(\d+)\.ts$/);
    if (!match) {
      console.log(`⚠️  Skipping ${file} - doesn't match pattern`);
      continue;
    }

    const templateId = match[1];
    const categoryNumber = match[2];

    // Look for the corresponding worktree file
    const worktreeFile = path.join(__dirname, `../../templata-${templateId}/${templateId}-prompt-category-${categoryNumber}.txt`);

    const categoryName = extractCategoryName(worktreeFile);

    if (!categoryName) {
      notFound++;
      if (notFound <= 10) {
        console.log(`⚠️  No category found for ${file} (worktree: ${worktreeFile})`);
      }
      continue;
    }

    // Add export at the top
    const newContent = `export const categoryName = "${categoryName}";\n\n${content}`;

    fs.writeFileSync(filePath, newContent, 'utf8');

    processed++;

    if (processed % 100 === 0) {
      console.log(`Processed ${processed} files...`);
    }
  }

  console.log(`\n✅ Complete!`);
  console.log(`   Processed: ${processed}`);
  console.log(`   Skipped (already had categoryName): ${skipped}`);
  console.log(`   Not found in worktrees: ${notFound}`);
  console.log(`   Total: ${tsFiles.length}`);
}

addCategoryNames().catch(console.error);
