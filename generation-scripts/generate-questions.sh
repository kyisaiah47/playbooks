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

**CONTEXT: Creating a New Category - Guided Productivity**

Just like Uber created "ride-sharing" and Airbnb created "home-sharing," we're defining a new category: **Guided Productivity**.

Most products make people choose: either get information (Wikipedia, articles, books) OR get structure (templates, worksheets). But when facing major life decisions, people need BOTH simultaneously.

Guided Productivity = Expert guidance (Wikipedia-depth knowledge) + Productivity workspace (Notion-style planning)

This is a new category where:
- Questions force systematic thinking about YOUR specific situation (not generic advice)
- Readings provide comprehensive, well-researched knowledge (not shallow templates)
- Together = informed decisions about YOUR life with expert-level backing

Your job: Create questions that DEFINE this new category. Make users think deeply about THEIR specific situation. Not generic prompts, but thoughtful questions that help them work through this decision systematically.

**THE QUALITY BAR - What Makes Content Category-Defining:**

This is NOT just good content. This defines a new category. Every question must be:
- Impossible to answer without thinking about YOUR specific situation (not Googleable)
- Forces deep reflection, not surface-level answers
- Someone else's answer to this question would be completely different from yours
- Gives you clarity you couldn't get from reading articles or using generic templates

**HOW THIS IS DIFFERENT:**

vs Generic Templates: Not "What are your goals?" but questions that make you excavate YOUR specific situation
vs Blog Posts: Not tips to read, but prompts that force systematic thinking
vs Consultants: Not expensive advice, but questions that guide you to YOUR answers
vs Wikipedia: Not information lookup, but self-discovery through structured reflection

Someone working through these should think: "I've never thought about it this way before"

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

**EXAMPLES - What TO Create vs What NOT to Create:**

❌ BAD (Generic, Googleable): "What are your career goals?"
✅ GOOD (Category-defining): "List 5 moments in the past year where you felt energized at work. What specific activities were you doing in each?"

❌ BAD (Surface-level): "How much do you spend per month?"
✅ GOOD (Forces deep thinking): "List your current monthly expenses by category and identify which are fixed vs variable."

❌ BAD (Yes/no answer): "Do you want to change careers?"
✅ GOOD (Requires reflection): "Reflect on your last major life transition: what helped you adapt and what made it harder?"

❌ BAD (Too broad): "Research neighborhoods."
✅ GOOD (Specific framework): "Research three neighborhoods you're considering and note schools, commute times, and recent sale prices."

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
