#!/bin/bash

# Generate comprehensive readings for a guide with real sources
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

**CONTEXT: Creating a New Category - Guided Productivity**

Just like Uber created "ride-sharing" and Airbnb created "home-sharing," we're defining a new category: **Guided Productivity**.

Most products make people choose: either get information (Wikipedia, articles, books) OR get structure (templates, worksheets). But when facing major life decisions, people need BOTH simultaneously.

Guided Productivity = Expert guidance (Wikipedia-depth knowledge) + Productivity workspace (Notion-style planning)

This is a new category where:
- Questions force systematic thinking about YOUR specific situation (not generic advice)
- Readings provide comprehensive, well-researched knowledge (not shallow templates)
- Together = informed decisions about YOUR life with expert-level backing

Your job: Create readings that DEFINE this new category. Give Wikipedia-depth knowledge in a warm, conversational tone. Someone working through this guide should feel like they have an expert friend who did all the research for them.

**THE QUALITY BAR - What Makes Content Category-Defining:**

This is NOT just good content. This defines a new category. Every reading must be:
- Gives knowledge you'd get from reading 3-5 books + consulting an expert
- Comprehensive yet actionable (not just "here's what X is" but "here's how to use X")
- You can't find this synthesized anywhere else in one place
- Saves hours of research while giving deeper insight than blog posts

**HOW THIS IS DIFFERENT:**

vs Wikipedia: Not just information, but HOW to apply it to YOUR situation
vs Blog Posts: Not 5 tips, but comprehensive frameworks with depth and nuance
vs Books: Not 200 pages, but distilled expert knowledge in 400 words
vs Consultants: Not expensive personalized advice, but systematized expert knowledge anyone can use

Someone reading this should think: "I could read 5 books and still not have this clarity"

**YOUR TASK**: Create readings that comprehensively cover this guide topic

**STEP 0: CHECK FOR EXISTING CONTENT**

First, check if readings already exist for this guide:
SELECT id, title FROM readings WHERE guide = 'GUIDE_ID_PLACEHOLDER'

If readings exist:
- DELETE FROM readings WHERE guide = 'GUIDE_ID_PLACEHOLDER'
- Then proceed with generation

**STEP 1: GET GUIDE CONTEXT**

Query the database to understand the guide:
SELECT id, title, description, category FROM guides WHERE id = 'GUIDE_ID_PLACEHOLDER'

Use this context to inform your reading generation.

**STEP 2: GENERATE TITLES**

Create reading titles that comprehensively cover this guide.

Your titles must:
- Cover ALL major aspects of this guide comprehensively
- Have ZERO overlap between readings
- Each reading should serve a distinct purpose
- Ensure someone who reads all of them has complete knowledge of the topic

Quality over quantity - don't create filler content. Generate as many or as few as needed for complete coverage.

Examples of good title sets:

For "asking-for-raise":
1. "Understanding Your Market Value" (research foundation)
2. "Building Your Case: What Actually Matters" (evidence building)
3. "The Conversation: What to Say and When" (execution)
4. "Handling Common Objections" (problem-solving)
5. "After the Ask: Next Steps for Yes, No, or Maybe" (follow-through)

For "buying-first-home":
1. "Financial Readiness: Beyond the Down Payment" (financial planning)
2. "Understanding Mortgages and What Lenders Look For" (financing knowledge)
3. "The Search Process: From Neighborhoods to Inspections" (practical steps)
4. "Making an Offer in Different Market Conditions" (strategy)
5. "From Offer to Closing: What Happens and When" (process navigation)

For "career-change":
1. "Self-Assessment: Skills, Values, and What Transfers" (foundation)
2. "Exploring New Fields: Research That Actually Helps" (exploration)
3. "Building Credibility in a New Industry" (transition tactics)
4. "The Financial Reality of Career Change" (practical planning)

**WHAT NOT TO CREATE:**

❌ BAD (Blog post): "5 Tips for Career Change" (surface-level list)
✅ GOOD (Category-defining): "Skills Transfer Framework: What Actually Carries Over vs What You Need to Build"

❌ BAD (Wikipedia): "Career change is when you switch careers..." (just definition)
✅ GOOD (Category-defining): "The Hidden Costs of Career Change: A Financial Model for Decision-Making"

❌ BAD (Generic advice): "Research your target industry" (tells you what, not how)
✅ GOOD (Category-defining): "Exploring New Fields: Research That Actually Helps" (gives you the framework)

**STEP 3: GENERATE CONTENT FOR EACH TITLE**

For each title, create 300-400 word content following these requirements:

**CRITICAL REQUIREMENTS**:

1. **EXCERPT** (1-2 sentences):
   The hook that makes someone want to read. Should convey:
   - What specific problem this solves
   - Why it's different from generic advice
   - Example: "Most people research careers by Googling job titles. Here's the framework recruiters actually use to evaluate transferable skills."

2. **LENGTH**: 300-400 words MAX - KEEP IT SHORT
   - NOT 600-800 words
   - Think Twitter thread length, not blog post

3. **Tone & Style**:
   - Warm, friendly, conversational (like Notion docs)
   - NOT corporate or stiff
   - Be OPINIONATED - have a clear POV, call out bad advice
   - Use SPECIFIC examples with real numbers/names (you can make them up but make them realistic)
   - Practical and immediately actionable
   - Memorable and quotable

4. **Formatting**:
   - Use headers to break up sections
   - Tables when comparing options/data
   - Bulleted lists for steps or key points
   - Quote blocks to highlight important insights from sources
   - Mix of prose and structured content (not just bullets)

5. **Real Sources**: 2-3 credible sources THAT ACTUALLY EXIST
   - Books, articles, podcasts, videos
   - IMPORTANT: After selecting sources, verify they exist. If you cannot verify a source is real, find a different one.
   - Example: "Patrick McKenzie - Salary Negotiation (kalzumeus.com)" - verify this article exists before citing
   - Store in sources array: ARRAY['Source 1', 'Source 2']

6. **Type** (pick ONE based on content - do not invent new types):
   - 'guide' - Educational overview/framework (use for: explaining concepts, providing mental models)
   - 'article' - Insight/analysis piece (use for: thought-provoking perspectives, research-backed insights)
   - 'checklist' - Step-by-step list (use for: actionable processes, verification steps)
   - 'tool' - Template/worksheet/framework to use (use for: copy-paste scripts, calculators, templates)

7. **Slug**: URL-friendly version of title
   - Format: lowercase-with-hyphens
   - Example: "The 5-Minute Conversation Worth $1.5M" → slug: "the-5-minute-conversation-worth-1-5m"
   - Remove special characters, use hyphens for spaces

8. **Structure** (300-400 words):
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
2. Generate titles that cover all major aspects with zero overlap (as many or few as needed)
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
