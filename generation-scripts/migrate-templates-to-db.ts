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

interface Question {
  id: string;
  question: string;
  category: string;
}

interface QuestionFile {
  categoryName: string;
  questions: Question[];
}

async function migrateTemplates() {
  console.log('🚀 Starting migration of guides to database...\n');

  const templatesDir = path.join(process.cwd(), 'src', 'data', 'guides');
  const promptsDir = path.join(process.cwd(), 'src', 'data', 'questions');

  // Get all guide files
  const templateFiles = fs.readdirSync(templatesDir).filter(f => f.endsWith('.ts'));

  console.log(`📦 Found ${templateFiles.length} guide files\n`);

  let templatesCreated = 0;
  let promptsCreated = 0;
  let errors = 0;

  for (const templateFile of templateFiles) {
    try {
      const templatePath = path.join(templatesDir, templateFile);
      const templateModule = require(templatePath);
      const guide: GuidanceTemplate = templateModule.guide;

      if (!guide || !guide.id) {
        console.log(`⚠️  Skipping ${templateFile} - no guide export`);
        continue;
      }

      // Insert guide
      const { error: templateError } = await supabase
        .from('templata_templates')
        .upsert({
          id: guide.id,
          name: guide.title || guide.id,
          title: guide.title,
          description: guide.description,
          category: guide.category,
          icon: guide.icon,
          difficulty: guide.difficulty,
          estimated_time: guide.estimatedTime,
          tags: guide.tags,
          last_updated: guide.lastUpdated,
          version: guide.version,
          sections: {}, // placeholder for now
        });

      if (templateError) {
        console.error(`❌ Error inserting guide ${guide.id}:`, templateError);
        errors++;
        continue;
      }

      templatesCreated++;
      console.log(`✅ Created guide: ${guide.id}`);

      // Now load the questions for this guide
      // Questions are in files like: {guide-id}-questions-1.ts through {guide-id}-questions-8.ts
      for (let i = 1; i <= 8; i++) {
        const promptFile = `${guide.id}-questions-${i}.ts`;
        const promptPath = path.join(promptsDir, promptFile);

        if (!fs.existsSync(promptPath)) {
          console.log(`   ⚠️  Question file not found: ${promptFile}`);
          continue;
        }

        try {
          const promptModule = require(promptPath);
          const categoryName: string = promptModule.categoryName;
          const questions: Question[] = promptModule.questions;

          if (!questions || questions.length === 0) {
            console.log(`   ⚠️  No questions in ${promptFile}`);
            continue;
          }

          // Insert each question
          for (let promptIndex = 0; promptIndex < questions.length; promptIndex++) {
            const question = questions[promptIndex];

            const { error: promptError } = await supabase
              .from('templata_prompts')
              .upsert({
                id: `${guide.id}-${i}-${promptIndex + 1}`,
                question: question.question,
                category: question.category,
                type: question.category, // using category as type for now
                template_id: guide.id,
                prompt_group_category: categoryName,
                prompt_number: (i - 1) * 10 + (promptIndex + 1), // global ordering
              });

            if (promptError) {
              console.error(`   ❌ Error inserting question for ${guide.id}:`, promptError);
              errors++;
            } else {
              promptsCreated++;
            }
          }

          console.log(`   ✅ Added ${questions.length} questions from ${promptFile} (${categoryName})`);
        } catch (e) {
          console.error(`   ❌ Error loading questions from ${promptFile}:`, e);
          errors++;
        }
      }

      console.log(''); // blank line between guides
    } catch (e) {
      console.error(`❌ Error processing ${templateFile}:`, e);
      errors++;
    }
  }

  console.log('\n📊 Migration Summary:');
  console.log(`   Guides created: ${templatesCreated}`);
  console.log(`   Questions created: ${promptsCreated}`);
  console.log(`   Errors: ${errors}`);

  if (errors === 0) {
    console.log('\n✨ Migration completed successfully!');
  } else {
    console.log('\n⚠️  Migration completed with errors');
  }
}

migrateTemplates().catch(console.error);
