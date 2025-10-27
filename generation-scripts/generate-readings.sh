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

**"3-5 books + consulting an expert" means:**
- Synthesizes insights from multiple authoritative sources (not just one perspective)
- Includes frameworks/mental models experts use (not just facts)
- Addresses nuance and edge cases (not just happy path)
- Gives specific numbers, timelines, costs where relevant (what consultants charge for)

**"Wikipedia-depth in 400 words" means:**
- Cover 3-5 key concepts/frameworks (not just one tip)
- Include cause-and-effect relationships (why things work, not just what to do)
- Address common misconceptions or mistakes
- Provide decision-making frameworks, not just information

**Enforcement:**
- If content goes over 400 words, CUT IT. No exceptions.
- If you can't fit comprehensive coverage in 400 words, your title is too broad.

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

**TITLE EXAMPLES - What NOT to Create vs What TO Create:**

❌ BAD (Blog post): "5 Tips for Career Change"
❌ TRYING but fails (Too comprehensive): "Everything You Need to Know About Changing Careers: A Complete Guide"
✅ GOOD (Category-defining): "Skills Transfer Framework: What Actually Carries Over vs What You Need to Build"

❌ BAD (Generic): "How to Research a New Industry"
❌ TRYING but fails (Vague promise): "The Ultimate Guide to Industry Research"
✅ GOOD (Category-defining): "Exploring New Fields: The 3-Interview Method Recruiters Use"

❌ BAD (Surface-level): "Budgeting for Your Career Change"
❌ TRYING but fails (Too narrow): "How Much Money You Need Saved"
✅ GOOD (Category-defining): "The Hidden Costs of Career Change: A 24-Month Financial Model"

**WHY THE GOOD EXAMPLES WORK:**
- Specific framework/method (not generic advice)
- Promises depth in narrow scope (not surface-level coverage of everything)
- Implies expertise (what recruiters use, a financial model)
- Gives you decision-making tools, not just information

**STEP 3: GENERATE CONTENT FOR EACH TITLE**

For each title, create 300-400 word content following these requirements:

**HOW TO ACHIEVE CATEGORY-DEFINING DEPTH:**

1. **Synthesize multiple perspectives**: Don't just cite one source - combine insights from 3-5 books/experts
2. **Include frameworks**: Give people mental models (e.g., "The 3-Layer Skill Stack", "The Credibility Timeline")
3. **Specific numbers**: Not "save money" but "$8,000 for 3 months + $2,000 buffer"
4. **Address edge cases**: "If you're over 40..." "In tech vs healthcare..." "Remote vs in-person..."
5. **Call out bad advice**: "Most articles say X, but that fails because..."
6. **Give decision frameworks**: Not just info, but "Here's how to decide if..."

**CRITICAL REQUIREMENTS**:

1. **EXCERPT** (1-2 sentences):
   The hook that makes someone want to read. Must be SPECIFIC and promise depth.

   ❌ BAD: "Learn how to research a new career effectively."
   ❌ TRYING but fails: "This guide will teach you everything you need to know about researching careers."
   ✅ GOOD: "Most people research careers by Googling job titles. Here's the 3-interview method recruiters use to evaluate transferable skills."

   Why it works: Calls out what doesn't work + promises specific expert framework

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

   **Source Verification Process**:
   a) Select sources that would be credible (well-known books, established websites, experts)
   b) Verify they actually exist - if uncertain, choose a different source
   c) Prefer well-known sources you're confident exist (e.g., "Never Split the Difference by Chris Voss" vs obscure blog)

   **Good source examples**:
   ✅ "Salary Negotiation by Patrick McKenzie (kalzumeus.com)"
   ✅ "Never Split the Difference by Chris Voss"
   ✅ "Harvard Business Review - The Science of Salary Negotiation"

   **Store format**: ARRAY['Source 1', 'Source 2', 'Source 3']

6. **Type** (pick ONE based on content - do not invent new types):

   - **'guide'** - Educational overview/framework
     Example: "Skills Transfer Framework: What Actually Carries Over vs What You Need to Build"
     Contains: Frameworks, mental models, cause-and-effect, decision trees
     NOT: Step-by-step instructions or templates

   - **'article'** - Insight/analysis piece
     Example: "Why Most Career Change Advice Fails: The Credibility Gap Problem"
     Contains: Research-backed insights, controversial takes, data analysis
     NOT: How-to instructions or frameworks

   - **'checklist'** - Step-by-step process
     Example: "The 30-Day Pre-Ask Checklist: What to Do Before Asking for a Raise"
     Contains: Sequential steps, verification points, action items
     NOT: Conceptual explanations

   - **'tool'** - Template/worksheet you can copy
     Example: "Salary Negotiation Email Scripts: Word-for-Word Templates"
     Contains: Copy-paste scripts, fill-in-the-blank templates, calculators
     NOT: Explanations of why or how things work

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

**CONTENT EXAMPLES - What Category-Defining Looks Like:**

❌ BAD (Generic blog advice):
"Research is important when changing careers. You should talk to people in your target industry and learn about different roles. This will help you make an informed decision."

❌ TRYING but fails (Info dump):
"Career research involves informational interviews, industry analysis, skill gap assessment, networking, job shadowing, online courses, certification programs, and market research. Each of these has different benefits and challenges..."

✅ GOOD (Category-defining):
"Most career changers waste months on LinkedIn research and coffee chats that go nowhere. Here's what actually works: The 3-Interview Method.

**The Framework**
Interview three people, in this exact order:
1. **The Escaped** - Someone who LEFT your target industry (finds red flags)
2. **The Lifer** - 10+ years in the role (reveals unwritten rules)
3. **The Recent Switcher** - Changed careers 1-2 years ago (shows the actual path)

**Why This Works**
> "People who stayed in an industry can't see its problems. You need the escaped to see what's broken." - Chris Voss, Never Split the Difference

The Escaped tells you what LinkedIn won't: "Everyone burns out by year 5" or "You need an MBA to get promoted." The Lifer reveals culture codes. The Switcher gives you the playbook they wish they'd had.

**Your Next Step**
List 5 target companies. Find one person in each category on LinkedIn. Send this exact message: "I'm researching [industry] and would value 15 minutes of your perspective on [specific question]."

Why it works: Specific timeframe, specific ask, shows you've done research."

**Why this is category-defining:**
- Gives a specific framework (3-Interview Method) not generic advice
- Calls out what doesn't work ("LinkedIn research and coffee chats that go nowhere")
- Includes expert insight with quote
- Provides copy-paste template
- Explains WHY it works (cause and effect)
- Covers edge cases (what each type reveals)
- Under 400 words but feels comprehensive

**IMPORTANT**:
- 300-400 words MAX
- Include quote blocks from your sources (use > for blockquotes)
- Tables when comparing data/options makes sense
- Notion-style tone: warm, helpful, not corporate
- Use proper SQL escaping ('') for apostrophes
- Project ID: uvcstcajctqbxddosdbf

**AVOID**:
- ❌ Generic advice without frameworks: "be confident", "do your research", "network more"
- ❌ Corporate jargon: "leverage synergies", "touch base", "circle back"
- ❌ Vague examples: "someone I know" instead of "Sarah Chen, $85k → $110k at Microsoft"
- ❌ Going over 400 words - NO EXCEPTIONS. If you can't fit it, your scope is too broad
- ❌ OVERLAPPING with existing readings - check the database first!
- ❌ Surface-level lists: "5 tips for..." "10 ways to..."
- ❌ Just information with no decision framework

**DO**:
- ✅ Give specific frameworks with names: "The 3-Interview Method", "The Credibility Timeline"
- ✅ Make up realistic case studies: "Marcus left consulting for tech - here's his 6-month budget"
- ✅ Provide copy-paste templates: exact email scripts, specific questions to ask
- ✅ Be opinionated: "Most advice says X, but that fails because..."
- ✅ Include specific numbers: "$8,000 not $10,000", "3 interviews not 10", "6 months not 1 year"
- ✅ Address edge cases: "If you're over 40...", "In tech vs healthcare..."
- ✅ Give ONE clear next action at the end
- ✅ Make it quotable: "You need the escaped to see what's broken"
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
