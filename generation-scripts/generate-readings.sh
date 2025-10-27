#!/bin/bash

# Generate 5-7 readings per guide with real sources
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

log_colored "$BLUE" "🚀 Generating readings for guide: $GUIDE_ID"

# Create the prompt with heredoc
read -r -d '' PROMPT <<'HEREDOC' || true
Generate a comprehensive set of readings for the GUIDE_ID_PLACEHOLDER guide.

**CONTEXT: Wikipedia × Notion for Life Planning**
Templata curates and synthesizes expert knowledge into actionable guides. Readings save users from reading 5 books - we apply expert knowledge to their specific situation.

**YOUR TASK**: Create readings that comprehensively cover this guide topic

**STEP 0: GET GUIDE CONTEXT**

First, query the database to understand the guide:
SELECT id, title, description, category FROM guides WHERE id = 'GUIDE_ID_PLACEHOLDER'

Use this context to inform your reading generation.

**STEP 1: GENERATE TITLES**

Create reading titles that comprehensively cover this guide.

Your titles must:
- Cover ALL major aspects of this guide comprehensively
- Have ZERO overlap between readings
- Each reading should serve a distinct purpose
- Ensure someone who reads all of them has complete knowledge of the topic

Quality over quantity - don't create filler content. Generate as many or as few as needed for complete coverage.

Examples of good title sets:

For "asking-for-raise":
1. "The 5-Minute Conversation Worth $1.5 Million" (psychology/motivation)
2. "Salary Research: Tools That Actually Work" (research tactics)
3. "Building Your Case: The Metrics That Matter" (evidence building)
4. "The Script: Exact Words That Get Results" (conversation templates)
5. "Timing Strategy: When They Say Yes vs No" (timing/strategy)

For "getting-divorced":
1. "The First 30 Days: Legal Steps You Can't Skip"
2. "How to Split Retirement Accounts Without Losing Half"
3. "Co-Parenting Schedules That Actually Work"
4. "Your Financial Reset: Budgeting After Divorce"
5. "Telling Your Kids: What Child Psychologists Recommend"
6. "The Emotional Timeline: What to Expect Month by Month"

**STEP 2: GENERATE CONTENT FOR EACH TITLE**

For each title, create 300-400 word content following these requirements:

**CRITICAL REQUIREMENTS**:

1. **LENGTH**: 300-400 words MAX - KEEP IT SHORT
   - NOT 600-800 words
   - Think Twitter thread length, not blog post

2. **Tone & Style**:
   - Warm, friendly, conversational (like Notion docs)
   - NOT corporate or stiff
   - Be OPINIONATED - have a clear POV, call out bad advice
   - Use SPECIFIC examples with real numbers/names (you can make them up but make them realistic)
   - Practical and immediately actionable
   - Memorable and quotable

3. **Formatting**:
   - Use headers to break up sections
   - Tables when comparing options/data
   - Bulleted lists for steps or key points
   - Quote blocks to highlight important insights from sources
   - Mix of prose and structured content (not just bullets)

4. **Real Sources**: 2-3 credible sources
   - Books, articles, podcasts, videos
   - Store in sources array: ARRAY['Source 1', 'Source 2']

5. **Type** (pick ONE - do not invent new types):
   - 'guide' - Educational overview/framework
   - 'article' - Insight/analysis piece
   - 'checklist' - Step-by-step list
   - 'tool' - Template/worksheet/framework to use

6. **Structure** (300-400 words):
   - Hook with a specific example or controversial statement
   - 2-3 main sections with clear headers
   - Include at least ONE of these:
     * Real case study with specific numbers (e.g. "$85k → $110k in 6 months")
     * Copy-paste template (email/script/checklist)
     * Data table comparing options
     * Step-by-step action plan
   - Quote blocks to cite sources
   - End with ONE clear next action

**IMPORTANT**:
- 300-400 words MAX
- Include quote blocks from your sources (use > for blockquotes)
- Tables when comparing data/options makes sense
- Notion-style tone: warm, helpful, not corporate
- Use proper SQL escaping ('') for apostrophes
- Project ID: uvcstcajctqbxddosdbf

**AVOID**:
- ❌ Generic advice ("be confident", "do your research")
- ❌ Corporate jargon or stiff language
- ❌ Vague examples without specifics
- ❌ Going over 400 words
- ❌ OVERLAPPING with existing readings - check the database first!

**DO**:
- ✅ Make up realistic case studies with specific names, companies, numbers
- ✅ Provide copy-paste templates people can actually use
- ✅ Be opinionated - call out what DOESN'T work
- ✅ Give ONE clear action at the end
- ✅ Make it memorable (people should quote this to friends)
- ✅ Cover a completely different angle than existing readings

**YOUR PROCESS**:
1. Analyze the guide topic to understand what comprehensive coverage looks like
2. Generate 4-8 titles that cover all major aspects with zero overlap
3. For each title:
   - Find 2-3 real credible sources
   - Generate SHORT content (300-400 words) with quote blocks
   - Insert to database using mcp__supabase__execute_sql

INSERT INTO readings (id, title, excerpt, content, author, read_time, type, guide, slug, published_at, sources)
VALUES (
  'reading-{guide-id}-{unique-slug}',
  '{title}',
  '{excerpt}',
  '{content}',
  'Templata',
  '{X} min read',
  '{type}',
  'GUIDE_ID_PLACEHOLDER',
  '{slug}',
  '2025-01-15',
  ARRAY['{Source 1}', '{Source 2}', '{Source 3}']
);

When done, OUTPUT A SUMMARY:
- Total number of readings created
- List of all titles (to verify comprehensive coverage)
- Confirmation that there is ZERO overlap between readings
- Word count for each reading

Respond with: GENERATION COMPLETE and show the summary
HEREDOC

# Replace placeholder with actual guide ID
PROMPT="${PROMPT//GUIDE_ID_PLACEHOLDER/$GUIDE_ID}"

# Run claude with the prompt
claude --dangerously-skip-permissions -p "$PROMPT"

log_colored "$GREEN" "✅ Generation complete for $GUIDE_ID"
