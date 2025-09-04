#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Template requirements based on our established format
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
    await this.checkCodeQuality();
    
    this.printResults();
    return this.errors.length === 0;
  }

  async checkStructure() {
    console.log('\n📁 Checking template structure...');
    
    const sidebarPath = path.join(this.templatePath, '../../../components/sidebar-left.tsx');
    if (!fs.existsSync(sidebarPath)) {
      this.errors.push('Missing sidebar-left.tsx file');
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

    // Check component files
    const componentsPath = path.join(this.templatePath, '../../../components');
    if (fs.existsSync(componentsPath)) {
      await this.checkComponentFiles(componentsPath);
    }
  }

  async checkPageFile(pagePath) {
    try {
      const pageContent = fs.readFileSync(pagePath, 'utf8');
      
      // Check for proper imports
      if (!pageContent.includes('useWedding') && !pageContent.includes('useHomeBuying') && !pageContent.includes('useBabyPlanning')) {
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
    
    // Check for guided notes components - handle different naming patterns
    const possibleGuidedNotesPaths = [
      path.join(componentsPath, `${this.templateName}-notes`),
      path.join(componentsPath, `${this.templateName.replace('-planning', '')}-notes`),
      path.join(componentsPath, 'wedding-notes'),
      path.join(componentsPath, 'baby-notes'),
      path.join(componentsPath, 'home-buying-notes')
    ];
    
    let guidedNotesPath = null;
    for (const possiblePath of possibleGuidedNotesPaths) {
      if (fs.existsSync(possiblePath)) {
        guidedNotesPath = possiblePath;
        break;
      }
    }
    
    if (guidedNotesPath) {
      const guidedNotesFiles = fs.readdirSync(guidedNotesPath).filter(f => f.endsWith('.tsx'));
      console.log(`✅ Found ${guidedNotesFiles.length} guided notes components in ${path.basename(guidedNotesPath)}`);
      
      // Check each guided note component
      for (const file of guidedNotesFiles) {
        await this.checkGuidedNoteFile(path.join(guidedNotesPath, file), file);
      }
    } else {
      this.warnings.push(`No guided notes directory found for ${this.templateName}`);
    }

    // Check for resources components
    const resourcesPath = path.join(componentsPath, 'resources');
    if (fs.existsSync(resourcesPath)) {
      const resourceFiles = fs.readdirSync(resourcesPath)
        .filter(f => f.endsWith('.tsx') && f.includes(this.templateName.replace('-planning', '')));
      
      if (resourceFiles.length > 0) {
        console.log(`✅ Found ${resourceFiles.length} resource components`);
      } else {
        this.warnings.push(`No template-specific resource files found`);
      }
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
  }
}

// CLI usage
if (require.main === module) {
  const templatePath = process.argv[2];
  
  if (!templatePath) {
    console.error('Usage: node template-linter.js <template-path>');
    process.exit(1);
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