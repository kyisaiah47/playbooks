#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const templatesDir = path.join(__dirname, '../src/data/templates');
const files = fs.readdirSync(templatesDir)
  .filter(f => f.endsWith('-template.ts') && f !== 'index.ts')
  .sort();

console.log(`Found ${files.length} template files`);

// Generate index with unique export names
const exportLines = files.map((file, i) => {
  const baseName = file.replace('-template.ts', '');
  let varName = baseName.replace(/-/g, '_');
  // Prefix with underscore if starts with a number
  if (/^\d/.test(varName)) {
    varName = '_' + varName;
  }
  return `export { template as ${varName} } from './${baseName}-template';`;
}).join('\n');

const indexContent = `// Templates - unique exports
${exportLines}
`;

fs.writeFileSync(path.join(templatesDir, 'index.ts'), indexContent);
console.log('✓ Generated new index.ts with unique exports');
