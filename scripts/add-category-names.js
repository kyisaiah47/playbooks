const fs = require('fs');
const path = require('path');
const glob = require('glob');

const promptsDir = path.join(__dirname, '../src/data/prompts');

function inferCategoryName(content, filename) {
  const sampleText = content.toLowerCase();

  // Extract prompts to analyze
  const promptsMatch = content.match(/export const prompts = \[([\s\S]+?)\];/);
  if (!promptsMatch) return 'General Prompts';

  const promptsText = promptsMatch[1].toLowerCase();

  // Keyword-based inference with more comprehensive patterns
  const patterns = [
    { keywords: ['household', 'chores', 'cleaning', 'organizing', 'tasks', 'home management'], name: 'Household Management' },
    { keywords: ['financial', 'money', 'budget', 'expense', 'cost', 'saving', 'spending'], name: 'Financial Planning' },
    { keywords: ['health', 'medical', 'doctor', 'medication', 'healthcare', 'hospital', 'treatment'], name: 'Healthcare Management' },
    { keywords: ['emotional', 'stress', 'feeling', 'burnout', 'mental health', 'overwhelm', 'anxiety'], name: 'Emotional Well-being' },
    { keywords: ['communication', 'conversation', 'relationship', 'talking', 'discuss', 'family dynamics'], name: 'Family Communication' },
    { keywords: ['legal', 'document', 'paperwork', 'estate', 'will', 'power of attorney', 'guardianship'], name: 'Legal & Planning' },
    { keywords: ['time', 'schedule', 'routine', 'calendar', 'planning', 'organization'], name: 'Time Management' },
    { keywords: ['support', 'help', 'resource', 'community', 'service', 'assistance', 'network'], name: 'Support & Resources' },
    { keywords: ['career', 'work', 'job', 'professional', 'employment', 'workplace'], name: 'Career & Work Balance' },
    { keywords: ['technology', 'device', 'app', 'digital', 'phone', 'computer', 'internet'], name: 'Technology & Communication' },
    { keywords: ['social', 'friend', 'connection', 'activity', 'engagement', 'isolation'], name: 'Social Connections' },
    { keywords: ['self-care', 'personal', 'wellness', 'rest', 'boundary', 'self'], name: 'Self-Care & Boundaries' },
  ];

  // Count matches for each pattern
  let bestMatch = { name: 'General Prompts', score: 0 };

  for (const pattern of patterns) {
    let score = 0;
    for (const keyword of pattern.keywords) {
      const regex = new RegExp(keyword.replace(/\s+/g, '\\s+'), 'gi');
      const matches = promptsText.match(regex);
      if (matches) score += matches.length;
    }

    if (score > bestMatch.score) {
      bestMatch = { name: pattern.name, score };
    }
  }

  // If no good match, try to extract from filename
  if (bestMatch.score === 0) {
    const filenameParts = filename
      .replace(/-prompts-\d+\.ts$/, '')
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    return filenameParts + ' Prompts';
  }

  return bestMatch.name;
}

async function addCategoryNames() {
  console.log('🔍 Finding prompt files...');

  const files = glob.sync('**/*-prompts-[1-8].ts', { cwd: promptsDir });

  console.log(`Found ${files.length} prompt files\n`);

  let processed = 0;
  let skipped = 0;

  for (const file of files) {
    const filePath = path.join(promptsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');

    // Check if already has categoryName export
    if (content.includes('export const categoryName')) {
      skipped++;
      continue;
    }

    // Infer category name
    const categoryName = inferCategoryName(content, file);

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
  console.log(`   Total: ${files.length}`);
}

addCategoryNames().catch(console.error);
