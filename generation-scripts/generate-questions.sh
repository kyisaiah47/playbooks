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
❌ TRYING but fails (Too comprehensive): "Document every skill you have and create a comprehensive transfer matrix with all possible career paths"
✅ GOOD (Category-defining): "Write about 3 times in the past year when you lost track of time at work. What were you doing? Who were you with? What made those moments different from your usual workday?"

❌ BAD (Surface-level): "How much do you spend per month?"
❌ TRYING but fails (Overwhelming): "Create a complete financial audit of every transaction for the past 12 months"
✅ GOOD (Actionable depth): "List your last 10 purchases over $50. For each, note: Was it planned or impulse? Do you still value it? What does this pattern tell you?"

❌ BAD (Yes/no answer): "Do you want to change careers?"
❌ TRYING but fails (Too abstract): "Reflect deeply on your entire life purpose and how your career aligns with your authentic self"
✅ GOOD (Specific excavation): "Think about Sunday nights. What specific thought or feeling comes up about Monday? When did this pattern start?"

**HOW TO CREATE "I'VE NEVER THOUGHT ABOUT IT THIS WAY" QUESTIONS:**

1. **Ask about patterns, not facts**: Not "What do you want?" but "When have you felt it before?"
2. **Require excavation**: Make them DIG into memory/experience, not just answer from surface knowledge
3. **Make answers personal**: Someone else's answer would reveal THEIR life, not generic wisdom
4. **Use specific time frames**: "Past year" not "ever" - forces recent, vivid memory
5. **Ask for micro-moments**: Not "your career" but "3 times you lost track of time"

**QUESTION STRUCTURE & PROGRESSION:**

Generate questions in this order:
1. **Foundation (20-30%)**: Self-discovery questions about patterns, past experiences, values
2. **Research (20-25%)**: Specific data-gathering with clear frameworks
3. **Planning (25-30%)**: Strategic thinking based on foundation + research
4. **Action (20-25%)**: Concrete next steps and decision-making

Ensure BALANCE - don't create 40 reflection questions and 5 action questions.

**COMPLEXITY GUIDELINES:**

- Simple guide (15-20 questions): Single domain, straightforward decision (e.g., budgeting)
- Medium guide (30-40 questions): Multiple domains, moderate stakes (e.g., asking for raise)
- Complex guide (50-70 questions): Life-changing, multiple domains, high stakes (e.g., divorce, career change)

**USER CONTEXT:**

Consider if user is:
- **In crisis**: More action-oriented questions, shorter timeframes, practical focus
- **Planning ahead**: More reflection, longer timeframes, strategic thinking
- Adjust question tone accordingly (crisis = supportive + action-focused, planning = exploratory)

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
