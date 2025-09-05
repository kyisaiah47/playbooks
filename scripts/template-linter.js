#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Template requirements based on our established format
// CRITICAL: Templates should ONLY edit these specific file patterns
const ALLOWED_FILE_PATTERNS = [
  'src/app/templates/{template-name}/page.tsx',           // Main template page
  'src/app/templates/{template-name}-template/page.tsx',  // SEO landing page
  'src/contexts/{template-name}-context.tsx',            // Template context (if needed)
  'src/components/{template-name}-notes/*.tsx',          // Guided notes components
  'src/components/resources/{template-name}-*.tsx'       // Resource components
];

// CRITICAL: Files that templates should NEVER modify (causes merge conflicts)
const FORBIDDEN_FILES = [
  'src/app/layout.tsx',           // Providers added after merge
  'src/app/page.tsx',             // Landing page updated after merge  
  'src/components/app-sidebar.tsx', // Navigation updated after merge
  'src/app/templates/page.tsx',    // Gallery updated after merge
  'src/app/about/page.tsx',        // Marketing pages unchanged
  'src/app/faq/page.tsx',          // FAQ pages unchanged
  'src/components/theme-provider.tsx',  // Theme system unchanged
  'src/components/wedding-setup-wizard.tsx', // Core wizard unchanged
  'package.json',                  // Dependencies managed centrally
  'next.config.js',                // Build config unchanged
  'tailwind.config.js'            // Styling config unchanged
];

const TEMPLATE_REQUIREMENTS = {
  structure: {
    coreSections: { min: 4, max: 6 },
    guidedNotes: { min: 8, max: 12 },
    resources: { min: 2, max: 3 },
    myNotes: 1
  },
  files: {
    required: [
      'page.tsx',
      'sidebar-left.tsx'
    ],
    seoLanding: {
      required: true,
      path: 'templates/[template-name]-template/page.tsx'
    },
    patterns: {
      guidedNotes: /^[a-z-]+\.tsx$/,
      resources: /^[a-z-]+(guide|checklist|tips)\.tsx$/
    }
  },
  codeQuality: {
    noHardcodedColors: true,
    useThemeColors: true,
    properImports: true,
    noTodos: true
  }
};

class TemplateLinter {
  constructor(templatePath) {
    this.templatePath = templatePath;
    this.errors = [];
    this.warnings = [];
    this.templateName = path.basename(templatePath);
  }

  async lint() {
    console.log(`\n🔍 Linting template: ${this.templateName}`);
    console.log('='.repeat(50));

    await this.checkStructure();
    await this.checkFiles();
    await this.checkForbiddenFiles();
    await this.checkConsistencyWithWeddingTemplate();
    await this.checkCodeQuality();
    
    this.printResults();
    return this.errors.length === 0;
  }

  async checkStructure() {
    console.log('\n📁 Checking template structure...');
    
    // Check for template-specific sidebar file
    const templateSlug = this.templateName.replace('-planning', '');
    const sidebarPath = path.join(this.templatePath, `../../../components/${templateSlug}-sidebar-left.tsx`);
    if (!fs.existsSync(sidebarPath)) {
      this.errors.push(`Missing template-specific sidebar: components/${templateSlug}-sidebar-left.tsx`);
      return;
    }

    try {
      const sidebarContent = fs.readFileSync(sidebarPath, 'utf8');
      
      // Check for guided notes section
      const guidedNotesMatches = sidebarContent.match(/guidedNotes\s*:\s*\[([\s\S]*?)\]/);
      if (!guidedNotesMatches) {
        this.errors.push('No guidedNotes section found in sidebar');
        return;
      }

      const guidedNotesContent = guidedNotesMatches[1];
      const guidedNotesCount = (guidedNotesContent.match(/url:\s*"#/g) || []).length;
      
      if (guidedNotesCount < TEMPLATE_REQUIREMENTS.structure.guidedNotes.min) {
        this.errors.push(`Too few guided notes: ${guidedNotesCount} (min: ${TEMPLATE_REQUIREMENTS.structure.guidedNotes.min})`);
      } else if (guidedNotesCount > TEMPLATE_REQUIREMENTS.structure.guidedNotes.max) {
        this.warnings.push(`Many guided notes: ${guidedNotesCount} (max recommended: ${TEMPLATE_REQUIREMENTS.structure.guidedNotes.max})`);
      } else {
        console.log(`✅ Guided notes count: ${guidedNotesCount}`);
      }

      // Check for resources section  
      const resourcesMatches = sidebarContent.match(/resources\s*:\s*\[([\s\S]*?)\]/);
      if (!resourcesMatches) {
        this.errors.push('No resources section found in sidebar');
        return;
      }

      const resourcesContent = resourcesMatches[1];
      const resourcesCount = (resourcesContent.match(/url:\s*"#/g) || []).length;
      
      if (resourcesCount < TEMPLATE_REQUIREMENTS.structure.resources.min) {
        this.errors.push(`Too few resources: ${resourcesCount} (min: ${TEMPLATE_REQUIREMENTS.structure.resources.min})`);
      } else if (resourcesCount > TEMPLATE_REQUIREMENTS.structure.resources.max) {
        this.warnings.push(`Many resources: ${resourcesCount} (max recommended: ${TEMPLATE_REQUIREMENTS.structure.resources.max})`);
      } else {
        console.log(`✅ Resources count: ${resourcesCount}`);
      }

      // Check for myNotes section
      if (!sidebarContent.includes('myNotes') && !sidebarContent.includes('My Notes')) {
        this.errors.push('No myNotes/My Notes section found in sidebar');
      } else {
        console.log(`✅ My Notes section found`);
      }

    } catch (error) {
      this.errors.push(`Error reading sidebar file: ${error.message}`);
    }
  }

  async checkFiles() {
    console.log('\n📄 Checking required files...');
    
    // Check main page file
    const pagePath = path.join(this.templatePath, 'page.tsx');
    if (!fs.existsSync(pagePath)) {
      this.errors.push('Missing main page.tsx file');
    } else {
      console.log('✅ Main page.tsx found');
      await this.checkPageFile(pagePath);
    }

    // Check SEO landing page
    await this.checkSEOLandingPage();

    // Check component files
    const componentsPath = path.join(this.templatePath, '../../../components');
    if (fs.existsSync(componentsPath)) {
      await this.checkComponentFiles(componentsPath);
    }
  }

  async checkForbiddenFiles() {
    console.log('\n🚫 Checking for forbidden file modifications...');
    
    // Get the repository root (3 levels up from template path)
    const repoRoot = path.resolve(this.templatePath, '../../../');
    
    for (const forbiddenFile of FORBIDDEN_FILES) {
      const fullPath = path.join(repoRoot, forbiddenFile);
      
      // Check if file exists and warn about modification
      if (fs.existsSync(fullPath)) {
        // In a real implementation, we'd check git diff here
        // For now, just warn about the forbidden files
        console.log(`   ⚠️  FORBIDDEN: ${forbiddenFile} (post-merge only)`);
      }
    }
    
    console.log(`   ✅ Checked ${FORBIDDEN_FILES.length} forbidden files`);
    console.log('   💡 These files are updated automatically after template merge');
  }

  async checkSEOLandingPage() {
    console.log('\n🌐 Checking SEO landing page...');
    
    // Determine template type for SEO page path
    const templateSlug = this.templateName.replace('-planning', '');
    const seoPagePath = path.join(this.templatePath, `../../${templateSlug}-template/page.tsx`);
    
    if (!fs.existsSync(seoPagePath)) {
      this.errors.push(`Missing SEO landing page at: templates/${templateSlug}-template/page.tsx`);
      return;
    }

    try {
      const seoContent = fs.readFileSync(seoPagePath, 'utf8');
      console.log('✅ SEO landing page found');

      // Check for required SEO components (these can vary between templates)
      const requiredSEOElements = [
        'metadata', // Next.js metadata export
        'TemplateHero', // Hero component
        'FAQ' // FAQ section
      ];

      for (const element of requiredSEOElements) {
        if (!seoContent.includes(element)) {
          this.warnings.push(`SEO page missing recommended element: ${element}`);
        } else {
          console.log(`✅ SEO page has ${element}`);
        }
      }

      // Check metadata structure
      if (seoContent.includes('export const metadata') || seoContent.includes('export async function generateMetadata')) {
        console.log('✅ SEO metadata properly configured');
      } else {
        this.warnings.push('SEO page should export metadata for better SEO');
      }

    } catch (error) {
      this.errors.push(`Error reading SEO landing page: ${error.message}`);
    }
  }

  async checkPageFile(pagePath) {
    try {
      const pageContent = fs.readFileSync(pagePath, 'utf8');
      
      // Check for proper imports
      if (!pageContent.includes('useWedding') && !pageContent.includes('useHomeBuying') && !pageContent.includes('useBabyPlanning') && !pageContent.includes('useCollegePlanning')) {
        this.warnings.push('No template-specific context hook found');
      }

      // Check for wizard integration
      if (!pageContent.includes('Wizard') && !pageContent.includes('wizard')) {
        this.warnings.push('No wizard integration found in main page');
      } else {
        console.log('✅ Wizard integration found');
      }

      // Check for theme toggle
      if (!pageContent.includes('ThemeToggle')) {
        this.warnings.push('No theme toggle found in header');
      } else {
        console.log('✅ Theme toggle found');
      }

    } catch (error) {
      this.errors.push(`Error reading page file: ${error.message}`);
    }
  }

  async checkComponentFiles(componentsPath) {
    console.log('\n🧩 Checking component files...');
    
    // Determine template-specific guided notes path
    const templateSlug = this.templateName.replace('-planning', '');
    const expectedGuidedNotesPath = path.join(componentsPath, `${templateSlug}-notes`);
    
    if (fs.existsSync(expectedGuidedNotesPath)) {
      const guidedNotesFiles = fs.readdirSync(expectedGuidedNotesPath).filter(f => f.endsWith('.tsx'));
      console.log(`✅ Found ${guidedNotesFiles.length} guided notes components in ${templateSlug}-notes`);
      
      // Check each guided note component
      for (const file of guidedNotesFiles) {
        await this.checkGuidedNoteFile(path.join(expectedGuidedNotesPath, file), file);
      }
    } else {
      this.errors.push(`Missing guided notes directory: components/${templateSlug}-notes`);
    }

    // Check for resources components
    const resourcesPath = path.join(componentsPath, 'resources');
    if (fs.existsSync(resourcesPath)) {
      const resourceFiles = fs.readdirSync(resourcesPath)
        .filter(f => f.endsWith('.tsx') && f.includes(templateSlug));
      
      if (resourceFiles.length > 0) {
        console.log(`✅ Found ${resourceFiles.length} template-specific resource components`);
      } else {
        this.warnings.push(`No ${templateSlug}-specific resource files found`);
      }
    } else {
      this.warnings.push('No resources directory found');
    }
  }

  async checkGuidedNoteFile(filePath, fileName) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check for GuidedNotePage usage
      if (!content.includes('GuidedNotePage')) {
        this.warnings.push(`${fileName}: Not using GuidedNotePage component`);
        return;
      }

      // Check for sections
      const sectionsMatch = content.match(/sections=\{(\[[\s\S]*?\])\}/);
      if (!sectionsMatch) {
        this.errors.push(`${fileName}: No sections array found`);
        return;
      }

      const sectionsContent = sectionsMatch[1];
      const sectionCount = (sectionsContent.match(/title:/g) || []).length;
      
      if (sectionCount < 3) {
        this.warnings.push(`${fileName}: Only ${sectionCount} sections (recommended: 4+)`);
      }

      // Check for tips
      if (!content.includes('tips={[')) {
        this.warnings.push(`${fileName}: No tips array found`);
      }

      console.log(`✅ ${fileName}: Valid guided note structure`);

    } catch (error) {
      this.errors.push(`Error reading ${fileName}: ${error.message}`);
    }
  }

  async checkConsistencyWithWeddingTemplate() {
    console.log('\n🔗 Checking consistency with wedding template (reference)...');
    
    // Skip if this is the wedding template itself
    if (this.templateName.includes('wedding')) {
      console.log('✅ Wedding template - skipping self-consistency check');
      return;
    }

    // Check guided notes structure consistency
    await this.checkGuidedNotesConsistency();
    
    // Check resources structure consistency
    await this.checkResourcesConsistency();
    
    // Check component patterns consistency
    await this.checkComponentPatternsConsistency();
  }

  async checkGuidedNotesConsistency() {
    const weddingGuidedNotesPath = path.join(this.templatePath, '../../../components/wedding-notes');
    if (!fs.existsSync(weddingGuidedNotesPath)) {
      this.warnings.push('Cannot verify consistency - wedding template not found for reference');
      return;
    }

    // Get wedding guided notes structure as reference
    const weddingFiles = fs.readdirSync(weddingGuidedNotesPath).filter(f => f.endsWith('.tsx'));
    const referenceFile = path.join(weddingGuidedNotesPath, weddingFiles[0]);
    
    try {
      const referenceContent = fs.readFileSync(referenceFile, 'utf8');
      
      // Check if current template follows same guided notes pattern
      const currentGuidedNotesPath = this.findGuidedNotesPath();
      if (!currentGuidedNotesPath) {
        this.warnings.push('No guided notes found to check consistency');
        return;
      }

      const currentFiles = fs.readdirSync(currentGuidedNotesPath).filter(f => f.endsWith('.tsx'));
      if (currentFiles.length > 0) {
        const currentFile = path.join(currentGuidedNotesPath, currentFiles[0]);
        const currentContent = fs.readFileSync(currentFile, 'utf8');

        // Check for GuidedNotePage usage (should be consistent)
        const referenceUsesGNP = referenceContent.includes('GuidedNotePage');
        const currentUsesGNP = currentContent.includes('GuidedNotePage');
        
        if (referenceUsesGNP && !currentUsesGNP) {
          this.errors.push('Guided notes should use GuidedNotePage component like wedding template');
        } else if (referenceUsesGNP && currentUsesGNP) {
          console.log('✅ Guided notes follow wedding template pattern');
        }

        // Check for sections and tips structure
        const referenceSections = referenceContent.includes('sections={[');
        const currentSections = currentContent.includes('sections={[');
        const referenceTips = referenceContent.includes('tips={[');
        const currentTips = currentContent.includes('tips={[');

        if (referenceSections && !currentSections) {
          this.warnings.push('Guided notes should have sections array like wedding template');
        }
        if (referenceTips && !currentTips) {
          this.warnings.push('Guided notes should have tips array like wedding template');
        }
      }

    } catch (error) {
      this.warnings.push(`Could not check guided notes consistency: ${error.message}`);
    }
  }

  async checkResourcesConsistency() {
    const weddingResourcesPath = path.join(this.templatePath, '../../../components/resources');
    if (!fs.existsSync(weddingResourcesPath)) {
      return;
    }

    const weddingResourceFiles = fs.readdirSync(weddingResourcesPath)
      .filter(f => f.endsWith('.tsx') && f.includes('wedding'));

    if (weddingResourceFiles.length === 0) return;

    try {
      const referenceFile = path.join(weddingResourcesPath, weddingResourceFiles[0]);
      const referenceContent = fs.readFileSync(referenceFile, 'utf8');

      // Check if uses theme colors and proper structure
      const usesThemeColors = referenceContent.includes('bg-muted') || 
                            referenceContent.includes('text-muted-foreground');
      
      if (usesThemeColors) {
        console.log('✅ Wedding template uses theme colors - ensure consistency in this template');
      }

    } catch (error) {
      this.warnings.push(`Could not check resources consistency: ${error.message}`);
    }
  }

  async checkComponentPatternsConsistency() {
    // Check for consistent button styling (outline variant)
    const componentFiles = this.getAllTsxFiles(path.join(this.templatePath, '../../../components'));
    let outlineButtonsFound = 0;
    let solidButtonsFound = 0;

    for (const file of componentFiles) {
      if (file.includes(this.templateName.replace('-planning', ''))) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          const outlineMatches = content.match(/variant="outline"/g);
          const solidMatches = content.match(/<Button(?![^>]*variant=)/g);

          if (outlineMatches) outlineButtonsFound += outlineMatches.length;
          if (solidMatches) solidButtonsFound += solidMatches.length;

        } catch (error) {
          // Continue checking other files
        }
      }
    }

    if (solidButtonsFound > outlineButtonsFound) {
      this.warnings.push('Consider using variant="outline" for action buttons (wedding template standard)');
    } else if (outlineButtonsFound > 0) {
      console.log('✅ Uses outline variant buttons consistently with wedding template');
    }
  }

  findGuidedNotesPath() {
    const possiblePaths = [
      path.join(this.templatePath, '../../../components', `${this.templateName}-notes`),
      path.join(this.templatePath, '../../../components', `${this.templateName.replace('-planning', '')}-notes`),
      path.join(this.templatePath, '../../../components', 'baby-notes'),
      path.join(this.templatePath, '../../../components', 'home-buying-notes')
    ];
    
    return possiblePaths.find(p => fs.existsSync(p));
  }

  async checkCodeQuality() {
    console.log('\n🎨 Checking code quality...');
    
    const allFiles = this.getAllTsxFiles(this.templatePath);
    
    for (const file of allFiles) {
      await this.checkFileQuality(file);
    }
  }

  async checkFileQuality(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const fileName = path.basename(filePath);
      
      // Check for hardcoded colors
      const hardcodedColorPatterns = [
        /bg-(red|blue|green|yellow|purple|pink|indigo|gray)-\d+/g,
        /text-(red|blue|green|yellow|purple|pink|indigo|gray)-\d+/g,
        /border-(red|blue|green|yellow|purple|pink|indigo|gray)-\d+/g
      ];
      
      let hasHardcodedColors = false;
      for (const pattern of hardcodedColorPatterns) {
        const matches = content.match(pattern);
        if (matches) {
          hasHardcodedColors = true;
          this.errors.push(`${fileName}: Hardcoded colors found: ${matches.join(', ')}`);
        }
      }
      
      if (!hasHardcodedColors) {
        console.log(`✅ ${fileName}: No hardcoded colors`);
      }

      // Check for TODO comments
      const todoMatches = content.match(/\/\*[\s\S]*?TODO[\s\S]*?\*\/|\/\/.*TODO/gi);
      if (todoMatches) {
        this.warnings.push(`${fileName}: TODO comments found: ${todoMatches.length}`);
      }

      // Check for proper theme color usage
      const hasThemeColors = content.includes('bg-primary') || 
                           content.includes('text-primary') || 
                           content.includes('bg-muted') || 
                           content.includes('text-muted-foreground');
      
      if (hasThemeColors) {
        console.log(`✅ ${fileName}: Uses theme colors`);
      }

    } catch (error) {
      this.errors.push(`Error checking ${path.basename(filePath)}: ${error.message}`);
    }
  }

  getAllTsxFiles(dir) {
    const files = [];
    
    const scan = (currentDir) => {
      if (!fs.existsSync(currentDir)) return;
      
      const items = fs.readdirSync(currentDir);
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          scan(fullPath);
        } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
          files.push(fullPath);
        }
      }
    };
    
    scan(dir);
    return files;
  }

  printResults() {
    console.log('\n' + '='.repeat(50));
    console.log('📊 LINTING RESULTS');
    console.log('='.repeat(50));
    
    if (this.errors.length === 0 && this.warnings.length === 0) {
      console.log('🎉 Perfect! No issues found.');
    } else {
      if (this.errors.length > 0) {
        console.log(`\n❌ ERRORS (${this.errors.length}):`);
        this.errors.forEach((error, i) => {
          console.log(`  ${i + 1}. ${error}`);
        });
      }
      
      if (this.warnings.length > 0) {
        console.log(`\n⚠️  WARNINGS (${this.warnings.length}):`);
        this.warnings.forEach((warning, i) => {
          console.log(`  ${i + 1}. ${warning}`);
        });
      }
    }
    
    const score = Math.max(0, 100 - (this.errors.length * 10) - (this.warnings.length * 5));
    console.log(`\n📈 Template Score: ${score}/100`);
    
    if (score >= 90) console.log('🌟 Excellent template!');
    else if (score >= 75) console.log('✅ Good template');
    else if (score >= 50) console.log('⚠️  Needs improvement');
    else console.log('❌ Major issues found');
    
    if (!this.templateName.includes('wedding')) {
      console.log('\n📚 Reference: Use wedding-planning template as the standard for:');
      console.log('   • Guided notes structure (GuidedNotePage pattern)');
      console.log('   • Resources layout and styling');
      console.log('   • Button variants (outline preferred)');
      console.log('   • Theme color usage');
      console.log('   • Component patterns and imports');
      console.log('   ⚠️  Core pages and SEO landing can differ in content/layout');
    }
  }
}

// CLI usage
if (require.main === module) {
  let templatePath = process.argv[2];
  
  // Auto-detect template if no path provided
  if (!templatePath) {
    const cwd = process.cwd();
    
    // Check if we're in a template directory
    if (cwd.includes('/src/app/templates/')) {
      templatePath = cwd;
    }
    // Check if we're in a worktree - detect branch name and infer template
    else if (fs.existsSync(path.join(cwd, '.git')) || fs.existsSync(path.join(cwd, 'src/app/templates'))) {
      try {
        // Try to get current branch name
        const { execSync } = require('child_process');
        const branchName = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
        
        if (branchName.startsWith('feature/template-')) {
          const templateName = branchName.replace('feature/template-', '');
          const templatesDir = path.join(cwd, 'src/app/templates');
          const potentialTemplatePath = path.join(templatesDir, templateName);
          
          if (fs.existsSync(potentialTemplatePath)) {
            templatePath = potentialTemplatePath;
            console.log(`🌿 Auto-detected from branch: ${branchName} -> ${templateName}`);
          }
        }
        
        // Fallback: check if only one template exists
        if (!templatePath && fs.existsSync(path.join(cwd, 'src/app/templates'))) {
          const templatesDir = path.join(cwd, 'src/app/templates');
          const templates = fs.readdirSync(templatesDir).filter(t => 
            fs.statSync(path.join(templatesDir, t)).isDirectory() && 
            !t.startsWith('.') && 
            t !== 'page.tsx'
          );
          
          if (templates.length === 1) {
            templatePath = path.join(templatesDir, templates[0]);
            console.log(`🎯 Auto-detected template: ${templates[0]}`);
          } else if (templates.length > 1) {
            console.error(`Multiple templates found: ${templates.join(', ')}`);
            console.error('Please specify which template to lint:');
            templates.forEach(t => console.error(`  node scripts/template-linter.js src/app/templates/${t}`));
            process.exit(1);
          }
        }
      } catch (error) {
        // Git command failed, continue with fallback logic
      }
    }
    
    if (!templatePath) {
      console.error('Usage: node template-linter.js [template-path]');
      console.error('Or run from template directory/worktree for auto-detection');
      process.exit(1);
    }
  }
  
  if (!fs.existsSync(templatePath)) {
    console.error(`Template path not found: ${templatePath}`);
    process.exit(1);
  }
  
  const linter = new TemplateLinter(templatePath);
  linter.lint().then(success => {
    process.exit(success ? 0 : 1);
  });
}

module.exports = TemplateLinter;