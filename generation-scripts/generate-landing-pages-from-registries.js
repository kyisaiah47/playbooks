#!/usr/bin/env node

// Generate landing page content from existing registries
// Pulls from template registry, prompts, and articles to create landing page data

const fs = require('fs');
const path = require('path');

// Helper function to read and parse TypeScript files
function readRegistryFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return null;
  }

  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return content;
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error.message);
    return null;
  }
}

// Extract prompts from prompt file content
function extractPrompts(promptFileContent) {
  if (!promptFileContent) return [];

  const promptMatches = promptFileContent.match(/prompt:\s*["'`]([^"'`]+)["'`]/g);
  if (!promptMatches) return [];

  return promptMatches
    .map(match => match.replace(/prompt:\s*["'`]([^"'`]+)["'`]/, '$1'))
    .slice(0, 6); // Take first 6 prompts
}

// Extract articles from blog file content
function extractArticles(blogFileContent) {
  if (!blogFileContent) return [];

  const articles = [];
  const titleMatches = blogFileContent.match(/title:\s*["'`]([^"'`]+)["'`]/g) || [];
  const excerptMatches = blogFileContent.match(/excerpt:\s*["'`]([^"'`]+)["'`]/g) || [];
  const readTimeMatches = blogFileContent.match(/readTime:\s*["'`]([^"'`]+)["'`]/g) || [];
  const difficultyMatches = blogFileContent.match(/difficulty:\s*["'`](beginner|intermediate|expert)["'`]/g) || [];

  for (let i = 0; i < Math.min(3, titleMatches.length); i++) {
    const title = titleMatches[i] ? titleMatches[i].replace(/title:\s*["'`]([^"'`]+)["'`]/, '$1') : `Article ${i + 1}`;
    const description = excerptMatches[i] ? excerptMatches[i].replace(/excerpt:\s*["'`]([^"'`]+)["'`]/, '$1') : 'Expert guidance and insights';
    const readTime = readTimeMatches[i] ? readTimeMatches[i].replace(/readTime:\s*["'`]([^"'`]+)["'`]/, '$1') : '5 min read';
    const difficulty = difficultyMatches[i] ? difficultyMatches[i].replace(/difficulty:\s*["'`](beginner|intermediate|expert)["'`]/, '$1') : 'beginner';

    articles.push({
      title,
      description: description.length > 100 ? description.substring(0, 97) + '...' : description,
      readTime,
      difficulty
    });
  }

  return articles;
}

// Get template info from template registry
function getTemplateInfo(templateId) {
  const registryPath = path.join(__dirname, '..', 'src/registry/templates.ts');
  const registryContent = readRegistryFile(registryPath);

  if (!registryContent) {
    return {
      name: templateId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
      description: `Comprehensive guidance for ${templateId.replace(/-/g, ' ')}`,
      category: 'Personal Life'
    };
  }

  // Extract template info - simplified parsing
  const nameMatch = registryContent.match(new RegExp(`id:\\s*["']\${templateId}["'][^}]*name:\\s*["']([^"']+)["']`));
  const descMatch = registryContent.match(new RegExp(`id:\\s*["']\${templateId}["'][^}]*description:\\s*["']([^"']+)["']`));
  const catMatch = registryContent.match(new RegExp(`id:\\s*["']\${templateId}["'][^}]*category:\\s*["']([^"']+)["']`));

  return {
    name: nameMatch ? nameMatch[1] : templateId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    description: descMatch ? descMatch[1] : `Comprehensive guidance for ${templateId.replace(/-/g, ' ')}`,
    category: catMatch ? catMatch[1] : 'Personal Life'
  };
}

// Generate landing page content for a template
function generateLandingPageContent(templateId) {
  console.log(`Processing template: ${templateId}`);

  // Get template info
  const templateInfo = getTemplateInfo(templateId);
  const templateName = templateInfo.name;

  // Read prompts
  const promptsPath = path.join(__dirname, '..', '..', `templata-${templateId}`, 'src', 'data', `prompts-${templateId}.ts`);
  const promptsContent = readRegistryFile(promptsPath);
  const prompts = extractPrompts(promptsContent);

  // Read articles
  const articlesPath = path.join(__dirname, '..', '..', `templata-${templateId}`, 'src', 'registry', `blogs-${templateId}.ts`);
  const articlesContent = readRegistryFile(articlesPath);
  const articles = extractArticles(articlesContent);

  // Read skeleton structure
  const skeletonPath = path.join(__dirname, '..', 'landing-page-structure.json');
  const skeletonContent = readRegistryFile(skeletonPath);
  if (!skeletonContent) {
    throw new Error('Could not read landing page skeleton structure');
  }

  let landingPageData;
  try {
    landingPageData = JSON.parse(skeletonContent);
  } catch (error) {
    throw new Error('Invalid JSON in landing page skeleton');
  }

  // Replace template variables in the structure
  const dataString = JSON.stringify(landingPageData);
  const replacedString = dataString
    .replace(/\[TEMPLATE_NAME\]/g, templateName.toLowerCase())
    .replace(/\${templateName\.toLowerCase\(\)}/g, templateName.toLowerCase())
    .replace(/\${templateName}/g, templateName);

  landingPageData = JSON.parse(replacedString);

  // Update SEO data
  landingPageData.templateLanding.seo = {
    title: `${templateName} Template - Organize Your ${templateName} | Templata`,
    description: `Transform your ${templateName.toLowerCase()} planning with our comprehensive template. Get expert guidance, actionable prompts, and step-by-step organization.`,
    keywords: [
      templateName.toLowerCase(),
      `${templateName.toLowerCase()} planning`,
      `${templateName.toLowerCase()} template`,
      `${templateName.toLowerCase()} guide`,
      "life planning",
      "organization template"
    ],
    ogTitle: `${templateName} Template - Expert Guidance & Organization`,
    ogDescription: `Comprehensive ${templateName.toLowerCase()} template with expert insights, actionable prompts, and structured guidance.`
  };

  // Update prompts count in features
  const promptsFeature = landingPageData.templateLanding.whatYouGet.features.find(f => f.icon === "Target");
  if (promptsFeature) {
    promptsFeature.description = `${prompts.length || 50}+ practical tasks and reflection questions to keep you moving forward`;
  }

  // Update example content with real data
  if (prompts.length > 0) {
    landingPageData.templateLanding.exampleContent.prompts.items = prompts;
  }

  if (articles.length > 0) {
    landingPageData.templateLanding.exampleContent.articles.items = articles;
  }

  return landingPageData;
}

// Get all template directories
function getAllTemplates() {
  // Go up from generation-scripts to parent of templata
  const parentDir = path.join(__dirname, '..', '..');
  if (!fs.existsSync(parentDir)) {
    console.error('Parent directory not found');
    return [];
  }

  const dirs = fs.readdirSync(parentDir, { withFileTypes: true });
  return dirs
    .filter(dir => dir.isDirectory() && dir.name.startsWith('templata-') && dir.name !== 'templata')
    .map(dir => dir.name.replace('templata-', ''))
; // Process all templates
}

// Main execution
function main() {
  console.log('🚀 Generating landing pages from registries...\n');

  const templates = getAllTemplates();
  console.log(`Found ${templates.length} templates\n`);

  let processed = 0;
  let failed = 0;

  for (const templateId of templates) {
    try {
      const landingPageData = generateLandingPageContent(templateId);

      // Write to public directory
      const outputPath = path.join(__dirname, '..', 'public', `${templateId}-landing-page.json`);
      fs.writeFileSync(outputPath, JSON.stringify(landingPageData, null, 2));

      console.log(`✅ ${templateId}: Generated landing page data`);
      processed++;
    } catch (error) {
      console.error(`❌ ${templateId}: Failed - ${error.message}`);
      failed++;
    }
  }

  console.log(`\n🎉 Complete! Processed: ${processed}, Failed: ${failed}`);
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { generateLandingPageContent, getAllTemplates };