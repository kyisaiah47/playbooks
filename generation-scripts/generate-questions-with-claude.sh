#!/bin/bash

# Generate high-quality Notion-style questions for MVP guides using Claude
set -e

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}🚀 Generating questions for 90 MVP guides using Claude + Supabase MCP${NC}"
echo ""

# Use Claude Code to generate questions via Supabase MCP
claude --dangerously-skip-permissions -p "Generate comprehensive, high-quality questions for each of the 90 guides in the database.

Connect to Supabase via MCP and:

1. Get all 90 guides from the guides table (id, title, category, description)

2. For each guide, generate questions that comprehensively cover the topic:
   - Generate as many questions as needed for COMPLETE coverage
   - Cover ALL major aspects someone needs to work through
   - Have ZERO overlap between questions
   - Each question should serve a distinct purpose
   - Someone who answers all questions should be fully prepared for their situation

   Quality over quantity - don't create filler questions.

3. Question requirements:
   - Action-oriented (start with verbs like 'Write down', 'Document', 'Create notes on', 'Research', 'Reflect on')
   - Specific to that guide's topic
   - Practical and useful for someone working through that situation
   - Mix of types: planning, reflection, research, action

4. Insert the questions directly into the questions table using this format:
   - id: '{guide-id}-{number}' (e.g., 'divorce-1', 'divorce-2')
   - question: The actual question text
   - category: one of 'planning', 'reflection', 'research', 'action'
   - type: same as category
   - template_id: the guide id
   - question_number: sequential numbering

EXAMPLES OF GOOD NOTION-STYLE QUESTIONS:
- 'Write down the key security frameworks and compliance standards that apply to your current environment.'
- 'Document feedback you've received from supervisors and identify recurring themes.'
- 'Create a list of continuing education courses that align with your career goals and their associated costs.'
- 'Research salary ranges for different positions in your region and note factors that influence compensation.'
- 'Reflect on your communication style with different types of people and identify techniques that have been most effective.'

Example question counts by complexity:
- Simple guide (e.g., 'create-budget'): ~15-20 questions
- Medium guide (e.g., 'asking-for-raise'): ~30-40 questions
- Complex guide (e.g., 'getting-divorced'): ~50-70 questions

Work through the guides in batches and show progress as you go."

echo ""
echo -e "${GREEN}✅ Question generation complete!${NC}"
