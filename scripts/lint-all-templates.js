#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const TemplateLinter = require('./template-linter.js');

const TEMPLATES_DIR = path.join(__dirname, '../src/app/templates');

async function lintAllTemplates() {
  console.log('🔍 Linting all templates...\n');
  
  if (!fs.existsSync(TEMPLATES_DIR)) {
    console.error('❌ Templates directory not found');
    process.exit(1);
  }
  
  const templates = fs.readdirSync(TEMPLATES_DIR)
    .filter(item => {
      const fullPath = path.join(TEMPLATES_DIR, item);
      return fs.statSync(fullPath).isDirectory();
    });
  
  if (templates.length === 0) {
    console.log('No templates found');
    return;
  }
  
  console.log(`Found ${templates.length} templates: ${templates.join(', ')}\n`);
  
  const results = [];
  
  for (const template of templates) {
    const templatePath = path.join(TEMPLATES_DIR, template);
    const linter = new TemplateLinter(templatePath);
    
    console.log(`\n${'='.repeat(60)}`);
    const success = await linter.lint();
    results.push({ template, success, errors: linter.errors.length, warnings: linter.warnings.length });
  }
  
  // Summary
  console.log(`\n${'='.repeat(60)}`);
  console.log('📊 SUMMARY');
  console.log('='.repeat(60));
  
  const passed = results.filter(r => r.success).length;
  const failed = results.length - passed;
  
  console.log(`✅ Passed: ${passed}/${results.length}`);
  console.log(`❌ Failed: ${failed}/${results.length}\n`);
  
  results.forEach(result => {
    const status = result.success ? '✅' : '❌';
    const issues = result.errors + result.warnings > 0 
      ? ` (${result.errors} errors, ${result.warnings} warnings)` 
      : '';
    console.log(`${status} ${result.template}${issues}`);
  });
  
  if (failed > 0) {
    console.log('\n⚠️  Some templates need attention');
    process.exit(1);
  } else {
    console.log('\n🎉 All templates passed!');
  }
}

if (require.main === module) {
  lintAllTemplates().catch(error => {
    console.error('Error:', error.message);
    process.exit(1);
  });
}

module.exports = lintAllTemplates;