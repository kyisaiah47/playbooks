#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Template requirements based on our established format
// CRITICAL: Templates should ONLY edit these specific file patterns
const ALLOWED_FILE_PATTERNS = [
  'src/app/{template-name}/page.tsx',                         // SEO landing page
  'src/app/{template-name}/app/page.tsx',                     // Main template app page
  'src/contexts/{template-name}-context.tsx',                // Template context
  'src/components/templates/{template-name}/*.tsx',          // Template components
  'src/components/guided-notes/{template-name}/*.tsx',       // Guided notes components
  'src/components/resources/{template-name}/*.tsx'           // Resource components
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
  'src/components/templates/wedding/wedding-setup-wizard.tsx', // Core wizard unchanged
  'package.json',                  // Dependencies managed centrally
  'next.config.js',                // Build config unchanged
  'tailwind.config.js'            // Styling config unchanged
];

const TEMPLATE_REQUIREMENTS = {
  structure: {
    coreSections: { min: 4, max: 6 },
    guidedNotes: { min: 8, max: 12 },
    resources: { min: 2, max: 4 },
    myNotes: 1
  },
  files: {
    required: [
      'page.tsx',                    // SEO landing page
      'app/page.tsx',                // Main app page
      'app/layout.tsx'               // App layout with providers
    ],
    seoLanding: {
      required: true,
      path: '[template-name]/page.tsx'
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
  },
  colorStrategy: {
    // Approved theme color mappings
    destructive: ['text-destructive', 'bg-destructive/5', 'border-destructive/20'], // Red → warnings/errors
    primary: ['text-primary', 'bg-primary/5', 'border-primary/20'],                 // Green → success/positive  
    secondary: ['text-secondary-foreground', 'bg-secondary/10', 'bg-secondary/5'],  // Blue/Yellow → info/cautions
    accent: ['text-primary', 'bg-accent', 'bg-muted'],                             // Other UI elements
    forbidden: [
      /bg-(red|green|blue|yellow|purple|pink|indigo|gray|slate|zinc|neutral|stone)-\d+/g,
      /text-(red|green|blue|yellow|purple|pink|indigo|gray|slate|zinc|neutral|stone)-\d+/g,
      /border-(red|green|blue|yellow|purple|pink|indigo|gray|slate|zinc|neutral|stone)-\d+/g
    ]
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
    const templateSlug = this.templateName;
    const sidebarPath = path.resolve(this.templatePath, '..', '..', '..', 'components', 'templates', templateSlug, `${templateSlug}-sidebar-left.tsx`);
    if (!fs.existsSync(sidebarPath)) {
      this.errors.push(`Missing template-specific sidebar: components/templates/${templateSlug}/${templateSlug}-sidebar-left.tsx`);
      return;
    }

    try {
      const sidebarContent = fs.readFileSync(sidebarPath, 'utf8');
      
      // Count guided notes by looking for Link components with guided note paths
      const guidedNotesPattern = /href="\/[^"]*\/app\/[^"]*"/g;
      const guidedNotesLinks = sidebarContent.match(guidedNotesPattern) || [];
      // Filter for actual guided note links (not core sections)
      const guidedNotesCount = guidedNotesLinks.filter(link => 
        !link.includes('/app"') && // Not main app page
        !link.includes('overview') &&
        !link.includes('resources')
      ).length;
      
      if (guidedNotesCount < TEMPLATE_REQUIREMENTS.structure.guidedNotes.min) {
        this.errors.push(`Too few guided notes: ${guidedNotesCount} (min: ${TEMPLATE_REQUIREMENTS.structure.guidedNotes.min})`);
      } else if (guidedNotesCount > TEMPLATE_REQUIREMENTS.structure.guidedNotes.max) {
        this.warnings.push(`Many guided notes: ${guidedNotesCount} (max recommended: ${TEMPLATE_REQUIREMENTS.structure.guidedNotes.max})`);
      } else {
        console.log(`✅ Guided notes count: ${guidedNotesCount}`);
      }

      // Count resources by looking for resource link patterns
      const resourcesPattern = /href="\/[^"]*\/resources\/[^"]*"/g;
      const resourcesLinks = sidebarContent.match(resourcesPattern) || [];
      const resourcesCount = resourcesLinks.length;
      
      if (resourcesCount < TEMPLATE_REQUIREMENTS.structure.resources.min) {
        this.errors.push(`Too few resources: ${resourcesCount} (min: ${TEMPLATE_REQUIREMENTS.structure.resources.min})`);
      } else if (resourcesCount > TEMPLATE_REQUIREMENTS.structure.resources.max) {
        this.warnings.push(`Many resources: ${resourcesCount} (max recommended: ${TEMPLATE_REQUIREMENTS.structure.resources.max})`);
      } else {
        console.log(`✅ Resources count: ${resourcesCount}`);
      }

      // Check for My Notes section
      if (!sidebarContent.includes('My Notes')) {
        this.errors.push('No "My Notes" section found in sidebar');
      } else {
        console.log(`✅ My Notes section found`);
      }

    } catch (error) {
      this.errors.push(`Error reading sidebar file: ${error.message}`);
    }
  }

  async checkFiles() {
    console.log('\n📄 Checking required files...');
    
    // Check SEO landing page
    const seoPagePath = path.join(this.templatePath, 'page.tsx');
    if (!fs.existsSync(seoPagePath)) {
      this.errors.push('Missing SEO landing page: page.tsx');
    } else {
      console.log('✅ SEO landing page found');
    }

    // Check main app page
    const appPagePath = path.join(this.templatePath, 'app/page.tsx');
    if (!fs.existsSync(appPagePath)) {
      this.errors.push('Missing main app page: app/page.tsx');
    } else {
      console.log('✅ Main app page found');
      await this.checkPageFile(appPagePath);
    }

    // Check app layout
    const appLayoutPath = path.join(this.templatePath, 'app/layout.tsx');
    if (!fs.existsSync(appLayoutPath)) {
      this.errors.push('Missing app layout: app/layout.tsx');
    } else {
      console.log('✅ App layout found');
    }

    // Check SEO landing page content
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
    
    // Check for SEO landing page at template root (not templates subdirectory)
    const seoPagePath = path.join(this.templatePath, 'page.tsx');
    
    if (!fs.existsSync(seoPagePath)) {
      this.errors.push(`Missing SEO landing page at: ${this.templateName}/page.tsx`);
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
      
      // Dynamically detect template context hook
      const templateSlug = this.templateName.replace(/-/g, '');
      const expectedHook = `use${templateSlug.charAt(0).toUpperCase() + templateSlug.slice(1)}`;
      const contextHookPatterns = [
        new RegExp(`use${this.templateName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}`, 'i'),
        /use[A-Z][a-zA-Z]+Context?/g
      ];
      
      let hasContextHook = false;
      for (const pattern of contextHookPatterns) {
        if (pageContent.match(pattern)) {
          hasContextHook = true;
          break;
        }
      }
      
      if (!hasContextHook) {
        this.warnings.push('No template-specific context hook found');
      } else {
        console.log('✅ Template context hook found');
      }

      // Check for setup wizard integration
      if (!pageContent.includes('SetupWizard') && !pageContent.includes('setupWizard')) {
        this.warnings.push('No setup wizard integration found in main page');
      } else {
        console.log('✅ Setup wizard integration found');
      }

    } catch (error) {
      this.errors.push(`Error reading page file: ${error.message}`);
    }
  }

  async checkComponentFiles(componentsPath) {
    console.log('\n🧩 Checking component files...');
    
    // Check guided notes components
    const expectedGuidedNotesPath = path.join(componentsPath, 'guided-notes', this.templateName);
    
    if (fs.existsSync(expectedGuidedNotesPath)) {
      const guidedNotesFiles = fs.readdirSync(expectedGuidedNotesPath).filter(f => f.endsWith('.tsx'));
      console.log(`✅ Found ${guidedNotesFiles.length} guided notes components in guided-notes/${this.templateName}`);
      
      // Check each guided note component
      for (const file of guidedNotesFiles) {
        await this.checkGuidedNoteFile(path.join(expectedGuidedNotesPath, file), file);
      }
    } else {
      this.errors.push(`Missing guided notes directory: components/guided-notes/${this.templateName}`);
    }

    // Check for resources components
    const resourcesPath = path.join(componentsPath, 'resources', this.templateName);
    if (fs.existsSync(resourcesPath)) {
      const resourceFiles = fs.readdirSync(resourcesPath).filter(f => f.endsWith('.tsx'));
      
      if (resourceFiles.length > 0) {
        console.log(`✅ Found ${resourceFiles.length} resource components in resources/${this.templateName}`);
        
        // Check each resource component
        for (const file of resourceFiles) {
          await this.checkResourceFile(path.join(resourcesPath, file), file);
        }
      } else {
        this.warnings.push(`No resource files found in resources/${this.templateName}`);
      }
    } else {
      this.errors.push(`Missing resources directory: components/resources/${this.templateName}`);
    }

    // Check template components
    const templateComponentsPath = path.join(componentsPath, 'templates', this.templateName);
    if (fs.existsSync(templateComponentsPath)) {
      const templateFiles = fs.readdirSync(templateComponentsPath).filter(f => f.endsWith('.tsx'));
      console.log(`✅ Found ${templateFiles.length} template components in templates/${this.templateName}`);
      
      // Check for required files
      const requiredTemplateFiles = [`${this.templateName}-sidebar-left.tsx`, `${this.templateName}-overview.tsx`, `${this.templateName}-setup-wizard.tsx`];
      for (const required of requiredTemplateFiles) {
        if (!templateFiles.includes(required)) {
          this.errors.push(`Missing required template component: ${required}`);
        } else {
          console.log(`✅ Required component found: ${required}`);
        }
      }
    } else {
      this.errors.push(`Missing template components directory: components/templates/${this.templateName}`);
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
    const weddingGuidedNotesPath = path.join(this.templatePath, '../../../components/guided-notes/wedding');
    if (!fs.existsSync(weddingGuidedNotesPath)) {
      this.warnings.push('Cannot verify consistency - wedding guided notes not found for reference');
      return;
    }

    // Get wedding guided notes structure as reference
    const weddingFiles = fs.readdirSync(weddingGuidedNotesPath).filter(f => f.endsWith('.tsx'));
    if (weddingFiles.length === 0) {
      this.warnings.push('No wedding guided notes files found for reference');
      return;
    }
    
    const referenceFile = path.join(weddingGuidedNotesPath, weddingFiles[0]);
    
    try {
      const referenceContent = fs.readFileSync(referenceFile, 'utf8');
      
      // Check if current template follows same guided notes pattern
      const currentGuidedNotesPath = path.join(this.templatePath, '../../../components/guided-notes', this.templateName);
      if (!fs.existsSync(currentGuidedNotesPath)) {
        this.warnings.push('No guided notes directory found to check consistency');
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
    const weddingResourcesPath = path.join(this.templatePath, '../../../components/resources/wedding');
    if (!fs.existsSync(weddingResourcesPath)) {
      this.warnings.push('Cannot verify consistency - wedding resources not found for reference');
      return;
    }

    const weddingResourceFiles = fs.readdirSync(weddingResourcesPath)
      .filter(f => f.endsWith('.tsx'));

    if (weddingResourceFiles.length === 0) {
      this.warnings.push('No wedding resource files found for reference');
      return;
    }

    try {
      const referenceFile = path.join(weddingResourcesPath, weddingResourceFiles[0]);
      const referenceContent = fs.readFileSync(referenceFile, 'utf8');

      // Check current template resources for consistency
      const currentResourcesPath = path.join(this.templatePath, '../../../components/resources', this.templateName);
      if (!fs.existsSync(currentResourcesPath)) {
        this.warnings.push('No resources directory found to check consistency');
        return;
      }

      const currentResourceFiles = fs.readdirSync(currentResourcesPath).filter(f => f.endsWith('.tsx'));
      if (currentResourceFiles.length > 0) {
        const currentFile = path.join(currentResourcesPath, currentResourceFiles[0]);
        const currentContent = fs.readFileSync(currentFile, 'utf8');

        // Check for theme colors consistency
        const referenceUsesThemeColors = referenceContent.includes('bg-muted') || 
                                        referenceContent.includes('text-muted-foreground');
        const currentUsesThemeColors = currentContent.includes('bg-muted') || 
                                     currentContent.includes('text-muted-foreground');
        
        if (referenceUsesThemeColors && currentUsesThemeColors) {
          console.log('✅ Resources use theme colors consistently with wedding template');
        } else if (referenceUsesThemeColors && !currentUsesThemeColors) {
          this.warnings.push('Resources should use theme colors like wedding template');
        }

        // Check for ScrollArea usage (common pattern)
        const referenceUsesScrollArea = referenceContent.includes('ScrollArea');
        const currentUsesScrollArea = currentContent.includes('ScrollArea');
        
        if (referenceUsesScrollArea && currentUsesScrollArea) {
          console.log('✅ Resources use ScrollArea consistently with wedding template');
        }
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
    const guidedNotesPath = path.join(this.templatePath, '../../../components/guided-notes', this.templateName);
    return fs.existsSync(guidedNotesPath) ? guidedNotesPath : null;
  }

  async checkCodeQuality() {
    console.log('\n🎨 Checking code quality...');
    
    const allFiles = this.getAllTsxFiles(this.templatePath);
    
    for (const file of allFiles) {
      await this.checkFileQuality(file);
    }
  }

  async checkResourceFile(filePath, fileName) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check for proper resource structure
      if (!content.includes('export default function') && !content.includes('export function')) {
        this.warnings.push(`${fileName}: No exported function found`);
      }

      // Check for ScrollArea usage (common in resources)
      if (content.includes('ScrollArea')) {
        console.log(`✅ ${fileName}: Uses ScrollArea for content`);
      }

      console.log(`✅ ${fileName}: Valid resource component`);

    } catch (error) {
      this.errors.push(`Error reading ${fileName}: ${error.message}`);
    }
  }

  async checkFileQuality(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const fileName = path.basename(filePath);
      
      // Check for forbidden hardcoded colors using the new strategy
      let hasHardcodedColors = false;
      for (const pattern of TEMPLATE_REQUIREMENTS.colorStrategy.forbidden) {
        const matches = content.match(pattern);
        if (matches) {
          hasHardcodedColors = true;
          this.errors.push(`${fileName}: Forbidden hardcoded colors found: ${matches.join(', ')}`);
          this.errors.push(`${fileName}: Use theme colors instead - Red→destructive, Green→primary, Blue/Yellow→secondary, Other→accent/muted`);
        }
      }
      
      if (!hasHardcodedColors) {
        console.log(`✅ ${fileName}: No forbidden hardcoded colors`);
      }

      // Check for proper theme color usage with new strategy
      const approvedColors = [
        'text-destructive', 'bg-destructive/5', 'border-destructive/20',
        'text-primary', 'bg-primary/5', 'border-primary/20', 
        'text-secondary-foreground', 'bg-secondary/10', 'bg-secondary/5',
        'bg-accent', 'bg-muted', 'text-muted-foreground'
      ];
      
      let hasApprovedColors = false;
      for (const color of approvedColors) {
        if (content.includes(color)) {
          hasApprovedColors = true;
          break;
        }
      }
      
      if (hasApprovedColors) {
        console.log(`✅ ${fileName}: Uses approved theme colors`);
      }

      // Check for TODO comments
      const todoMatches = content.match(/\/\*[\s\S]*?TODO[\s\S]*?\*\/|\/\/.*TODO/gi);
      if (todoMatches) {
        this.warnings.push(`${fileName}: TODO comments found: ${todoMatches.length}`);
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
      console.log('\n🎨 Color Theme Strategy:');
      console.log('   • Red colors → text-destructive, bg-destructive/5, border-destructive/20 (warnings/errors)');
      console.log('   • Green colors → text-primary, bg-primary/5, border-primary/20 (success/positive)');
      console.log('   • Blue colors → text-secondary-foreground, bg-secondary/10 (informational)');
      console.log('   • Yellow colors → text-secondary-foreground, bg-secondary/5 (cautions/notes)');
      console.log('   • Other colors → text-primary, bg-accent, bg-muted (UI elements)');
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
    if (cwd.includes('/src/app/') && fs.existsSync(path.join(cwd, 'app/page.tsx'))) {
      templatePath = cwd;
    }
    // Check if we're in a worktree - detect branch name and infer template
    else if (fs.existsSync(path.join(cwd, '.git')) || fs.existsSync(path.join(cwd, 'src/app'))) {
      try {
        // Try to get current branch name
        const { execSync } = require('child_process');
        const branchName = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
        
        if (branchName.startsWith('feature/template-')) {
          const templateName = branchName.replace('feature/template-', '');
          const templatesDir = path.join(cwd, 'src/app');
          const potentialTemplatePath = path.join(templatesDir, templateName);
          
          if (fs.existsSync(potentialTemplatePath)) {
            templatePath = potentialTemplatePath;
            console.log(`🌿 Auto-detected from branch: ${branchName} -> ${templateName}`);
          }
        }
        
        // Fallback: check if only one template exists  
        if (!templatePath && fs.existsSync(path.join(cwd, 'src/app'))) {
          const templatesDir = path.join(cwd, 'src/app');
          const templates = fs.readdirSync(templatesDir).filter(t => {
            const fullPath = path.join(templatesDir, t);
            return fs.statSync(fullPath).isDirectory() && 
                   !t.startsWith('.') && 
                   t !== 'globals.css' &&
                   t !== 'favicon.ico' &&
                   t !== '(dashboard)' &&
                   fs.existsSync(path.join(fullPath, 'app', 'page.tsx')); // Must have app/page.tsx
          });
          
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