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
claude --dangerously-skip-permissions -p "I need you to generate 5 high-quality, Notion-style questions for each of the 90 guides in the database.

Connect to Supabase via MCP and:

1. Get all 90 guides from the guides table (id, title, category, description)
2. For each guide, generate 5 questions that are:
   - Action-oriented (start with verbs like 'Write down', 'Document', 'Create notes on', 'Research', 'Reflect on')
   - Specific to that guide's topic
   - Practical and useful for someone working through that situation
   - Mix of types: planning, reflection, research, action

3. Insert the questions directly into the questions table using this format:
   - id: '{guide-id}-{number}' (e.g., 'divorce-1', 'divorce-2')
   - question: The actual question text
   - category: one of 'planning', 'reflection', 'research', 'action'
   - type: same as category
   - template_id: the guide id
   - question_group_category: A descriptive category (e.g., 'Financial Planning', 'Emotional Support')
   - question_number: 1-5

EXAMPLES OF GOOD NOTION-STYLE QUESTIONS:
- 'Write down the key security frameworks and compliance standards that apply to your current environment.'
- 'Document feedback you've received from supervisors and identify recurring themes.'
- 'Create a list of continuing education courses that align with your career goals and their associated costs.'
- 'Research salary ranges for different positions in your region and note factors that influence compensation.'
- 'Reflect on your communication style with different types of people and identify techniques that have been most effective.'

Generate all 450 questions (90 guides × 5 questions) and insert them into the database.

Work through the guides in batches and show progress as you go."

echo ""
echo -e "${GREEN}✅ Question generation complete!${NC}"
