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

**CONTEXT: Defining a New Category - Guided Productivity**

Templata is defining a new category: **Guided Productivity**.

Just like Notion combined notes + wikis + databases into one workspace and created something fundamentally new, Templata combines systematic questions + expert knowledge + note-taking workspace into one integrated experience.

This isn't incremental improvement (like Linear vs Jira). This is category creation (like Notion revolutionizing workspaces).

**What Guided Productivity means:**
- Most products make you choose: get information (articles, books) OR get structure (templates, worksheets)
- Guided Productivity gives you BOTH in one workspace
- Questions force systematic thinking about YOUR specific situation
- Readings provide comprehensive, expert-level knowledge (not shallow blog posts)
- Together in one workspace = you work through major life decisions with expert backing

**Your job:** Create questions that are category-defining quality. Not just "better reflection prompts" - but questions worthy of defining a new way people work through major life decisions. Think Notion-level polish and thoughtfulness, not incremental improvement.

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
SELECT id, question FROM questions WHERE guide_id = 'GUIDE_ID_PLACEHOLDER'

If questions exist:
- DELETE FROM questions WHERE guide_id = 'GUIDE_ID_PLACEHOLDER'
- Then proceed with generation

**STEP 1: GET GUIDE CONTEXT**

Query the database to understand the guide:
SELECT id, title, description, category FROM guides WHERE id = 'GUIDE_ID_PLACEHOLDER'

Use this context to inform your question generation.

**STEP 2: DEFINE COMPLETE COVERAGE & CALCULATE COUNTS**

Before generating questions, identify what "complete coverage" means for this guide:

**Coverage Framework:**
1. **Identify complexity level:**
   - Simple (straightforward decision, single domain): 15-20 questions total
   - Medium (multiple decisions, 2-3 domains): 30-40 questions total
   - Complex (life-changing, 4+ domains, high stakes): 50-70 questions total

2. **List all areas someone needs to think through:**
   Example (asking-for-raise): Current value, market research, timing, company context, conversation prep, objection handling, next steps
   Example (career-change): Self-assessment, target exploration, skill gaps, financial planning, transition strategy, job search

3. **Determine total question count** based on complexity and areas to cover

4. **Calculate exact breakdown by type:**
   - Foundation (20-30%): Self-discovery, patterns, past experiences, values
   - Research (20-25%): Data-gathering with frameworks
   - Planning (25-30%): Strategic thinking
   - Action (20-25%): Concrete next steps

   Example: If 40 questions total →
   - Foundation: 10 questions (25%)
   - Research: 9 questions (22%)
   - Planning: 11 questions (27%)
   - Action: 10 questions (25%)

**STEP 3: GENERATE QUESTIONS IN ROUNDS**

Use this generation strategy to ensure proper balance:

**GENERATION STRATEGY:**
1. Generate in 4 ROUNDS (not sequentially):
   - Round 1: Generate ALL foundation questions (exact count from above)
   - Round 2: Generate ALL research questions (exact count from above)
   - Round 3: Generate ALL planning questions (exact count from above)
   - Round 4: Generate ALL action questions (exact count from above)

2. After EACH round, verify count matches target

3. Ensure coverage across all areas identified in Step 2

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

**USER CONTEXT:**

Consider if user is:
- **In crisis**: More action-oriented questions, shorter timeframes, practical focus
- **Planning ahead**: More reflection, longer timeframes, strategic thinking
- Adjust question tone accordingly (crisis = supportive + action-focused, planning = exploratory)

**STEP 4: INSERT TO DATABASE**

Insert the questions directly into the questions table using mcp__supabase__execute_sql:

INSERT INTO questions (id, question, category, guide_id, question_number)
VALUES (
  '{guide-id}-{number}',
  '{question text}',
  '{planning|reflection|research|action}',
  'GUIDE_ID_PLACEHOLDER',
  {sequential number}
);

**STEP 5: VERIFY QUALITY BEFORE FINALIZING**

Before considering yourself done, run this self-check rubric:

**Coverage Check:**
□ Did I identify all areas someone needs to think through?
□ Does the total question count match the complexity level?
□ Did I cover ALL identified areas across the questions?
□ If I removed any question, would there be a critical gap?
□ Can someone fully prepare for their situation by answering these questions?

**Progression Check:**
□ Foundation questions: Are they 20-30% of total? (Self-discovery, patterns, past experiences)
□ Research questions: Are they 20-25% of total? (Data-gathering with frameworks)
□ Planning questions: Are they 25-30% of total? (Strategic thinking)
□ Action questions: Are they 20-25% of total? (Concrete next steps)
□ Do the percentages add up properly?

**Quality Check (for EACH question):**
□ Starts with action verb? (Write, Document, Research, Reflect, etc.)
□ Requires excavation of memory/experience? (Not googleable)
□ Would different people have completely different answers?
□ Uses specific time frames? ("past year" not "ever")
□ Asks about patterns/micro-moments? (Not surface-level facts)
□ Makes someone think "I've never thought about it this way"?

**Overlap Check:**
□ Each question explores a DIFFERENT aspect
□ No two questions ask for the same information
□ Someone answering wouldn't feel they're repeating themselves

**If ANY checkbox is unchecked, FIX IT before proceeding.**

**STEP 6: OUTPUT SUMMARY**

After verification, OUTPUT A SUMMARY:
- Total number of questions created
- Breakdown by category with counts and percentages:
  * Foundation: X questions (Y%)
  * Research: X questions (Y%)
  * Planning: X questions (Y%)
  * Action: X questions (Y%)
- List of all areas covered
- Confirmation that ALL quality checks passed
- Confirmation percentages match target ranges

Respond with: GENERATION COMPLETE and show the summary
HEREDOC

# Replace placeholder with actual guide ID
PROMPT="${PROMPT//GUIDE_ID_PLACEHOLDER/$GUIDE_ID}"

# Run claude with the prompt
claude --dangerously-skip-permissions -p "$PROMPT"

log_colored "$GREEN" "✅ Generation complete for $GUIDE_ID"
