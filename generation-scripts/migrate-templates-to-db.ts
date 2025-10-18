import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

interface GuidanceTemplate {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  difficulty: string;
  estimatedTime: string;
  tags: string[];
  lastUpdated: string;
  version?: string;
}

interface Prompt {
  id: string;
  prompt: string;
  category: string;
}

interface PromptFile {
  categoryName: string;
  prompts: Prompt[];
}

async function migrateTemplates() {
  console.log('🚀 Starting migration of templates to database...\n');

  const templatesDir = path.join(process.cwd(), 'src', 'data', 'templates');
  const promptsDir = path.join(process.cwd(), 'src', 'data', 'prompts');

  // Get all template files
  const templateFiles = fs.readdirSync(templatesDir).filter(f => f.endsWith('.ts'));

  console.log(`📦 Found ${templateFiles.length} template files\n`);

  let templatesCreated = 0;
  let promptsCreated = 0;
  let errors = 0;

  for (const templateFile of templateFiles) {
    try {
      const templatePath = path.join(templatesDir, templateFile);
      const templateModule = require(templatePath);
      const template: GuidanceTemplate = templateModule.template;

      if (!template || !template.id) {
        console.log(`⚠️  Skipping ${templateFile} - no template export`);
        continue;
      }

      // Insert template
      const { error: templateError } = await supabase
        .from('templata_templates')
        .upsert({
          id: template.id,
          name: template.title || template.id,
          title: template.title,
          description: template.description,
          category: template.category,
          icon: template.icon,
          difficulty: template.difficulty,
          estimated_time: template.estimatedTime,
          tags: template.tags,
          last_updated: template.lastUpdated,
          version: template.version,
          sections: {}, // placeholder for now
        });

      if (templateError) {
        console.error(`❌ Error inserting template ${template.id}:`, templateError);
        errors++;
        continue;
      }

      templatesCreated++;
      console.log(`✅ Created template: ${template.id}`);

      // Now load the prompts for this template
      // Prompts are in files like: {template-id}-prompts-1.ts through {template-id}-prompts-8.ts
      for (let i = 1; i <= 8; i++) {
        const promptFile = `${template.id}-prompts-${i}.ts`;
        const promptPath = path.join(promptsDir, promptFile);

        if (!fs.existsSync(promptPath)) {
          console.log(`   ⚠️  Prompt file not found: ${promptFile}`);
          continue;
        }

        try {
          const promptModule = require(promptPath);
          const categoryName: string = promptModule.categoryName;
          const prompts: Prompt[] = promptModule.prompts;

          if (!prompts || prompts.length === 0) {
            console.log(`   ⚠️  No prompts in ${promptFile}`);
            continue;
          }

          // Insert each prompt
          for (let promptIndex = 0; promptIndex < prompts.length; promptIndex++) {
            const prompt = prompts[promptIndex];

            const { error: promptError } = await supabase
              .from('templata_prompts')
              .upsert({
                id: `${template.id}-${i}-${promptIndex + 1}`,
                prompt: prompt.prompt,
                category: prompt.category,
                type: prompt.category, // using category as type for now
                template_id: template.id,
                prompt_group_category: categoryName,
                prompt_number: (i - 1) * 10 + (promptIndex + 1), // global ordering
              });

            if (promptError) {
              console.error(`   ❌ Error inserting prompt for ${template.id}:`, promptError);
              errors++;
            } else {
              promptsCreated++;
            }
          }

          console.log(`   ✅ Added ${prompts.length} prompts from ${promptFile} (${categoryName})`);
        } catch (e) {
          console.error(`   ❌ Error loading prompts from ${promptFile}:`, e);
          errors++;
        }
      }

      console.log(''); // blank line between templates
    } catch (e) {
      console.error(`❌ Error processing ${templateFile}:`, e);
      errors++;
    }
  }

  console.log('\n📊 Migration Summary:');
  console.log(`   Templates created: ${templatesCreated}`);
  console.log(`   Prompts created: ${promptsCreated}`);
  console.log(`   Errors: ${errors}`);

  if (errors === 0) {
    console.log('\n✨ Migration completed successfully!');
  } else {
    console.log('\n⚠️  Migration completed with errors');
  }
}

migrateTemplates().catch(console.error);
