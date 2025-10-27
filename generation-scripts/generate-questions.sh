#!/bin/bash

# Generate high-quality Notion-style questions for a guide using Claude
set -e

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log_colored() {
    local color=$1
    local message=$2
    echo -e "${color}$message${NC}"
}

# Guide to generate for (pass as argument)
GUIDE_ID=${1:-""}

if [ -z "$GUIDE_ID" ]; then
    echo "Usage: $0 <guide-id>"
    echo "Example: $0 asking-for-raise"
    exit 1
fi

log_colored "$BLUE" "🚀 Generating questions for guide: $GUIDE_ID"

# Create the prompt with heredoc
read -r -d '' PROMPT <<'HEREDOC' || true
Generate comprehensive, high-quality questions for the GUIDE_ID_PLACEHOLDER guide.

**CONTEXT: Templata = Notion-style Planning App + Wikipedia-depth Content**
- Templata is a note-taking/planning workspace (like Notion)
- Users work through structured questions to plan major life situations
- Questions help users think systematically through their specific situation
- Readings provide comprehensive background knowledge

**YOUR TASK**: Create questions that comprehensively cover this guide topic

**STEP 0: CHECK FOR EXISTING QUESTIONS**

First, check if questions already exist for this guide:
SELECT id, question FROM questions WHERE template_id = 'GUIDE_ID_PLACEHOLDER'

If questions exist:
- DELETE FROM questions WHERE template_id = 'GUIDE_ID_PLACEHOLDER'
- Then proceed with generation

**STEP 1: GET GUIDE CONTEXT**

Query the database to understand the guide:
SELECT id, title, description, category FROM guides WHERE id = 'GUIDE_ID_PLACEHOLDER'

Use this context to inform your question generation.

**STEP 2: GENERATE QUESTIONS**

Generate questions that comprehensively cover the topic:
- Generate as many questions as needed for COMPLETE coverage
- Cover ALL major aspects someone needs to work through
- Have ZERO overlap between questions
- Each question should serve a distinct purpose
- Someone who answers all questions should be fully prepared for their situation

Quality over quantity - don't create filler questions.

**Question requirements:**
- Action-oriented (start with verbs like 'Write down', 'Document', 'Create notes on', 'Research', 'Reflect on')
- Specific to that guide's topic
- Practical and useful for someone working through that situation
- Mix of types: planning, reflection, research, action

**EXAMPLES OF GOOD NOTION-STYLE QUESTIONS:**
- 'Write down the key security frameworks and compliance standards that apply to your current environment.'
- 'Document feedback you've received from supervisors and identify recurring themes.'
- 'Create a list of continuing education courses that align with your career goals and their associated costs.'
- 'Research salary ranges for different positions in your region and note factors that influence compensation.'
- 'Reflect on your communication style with different types of people and identify techniques that have been most effective.'

**Example question counts by complexity:**
- Simple guide (e.g., 'create-budget'): ~15-20 questions
- Medium guide (e.g., 'asking-for-raise'): ~30-40 questions
- Complex guide (e.g., 'getting-divorced'): ~50-70 questions

**STEP 3: INSERT TO DATABASE**

Insert the questions directly into the questions table using mcp__supabase__execute_sql:

INSERT INTO questions (id, question, category, type, template_id, question_number)
VALUES (
  '{guide-id}-{number}',
  '{question text}',
  '{planning|reflection|research|action}',
  '{same as category}',
  'GUIDE_ID_PLACEHOLDER',
  {sequential number}
);

When done, OUTPUT A SUMMARY:
- Total number of questions created
- Breakdown by type (planning, reflection, research, action)
- Confirmation that there is ZERO overlap between questions

Respond with: GENERATION COMPLETE and show the summary
HEREDOC

# Replace placeholder with actual guide ID
PROMPT="${PROMPT//GUIDE_ID_PLACEHOLDER/$GUIDE_ID}"

# Run claude with the prompt
claude --dangerously-skip-permissions -p "$PROMPT"

log_colored "$GREEN" "✅ Generation complete for $GUIDE_ID"
