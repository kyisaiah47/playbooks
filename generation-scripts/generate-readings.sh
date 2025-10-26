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

log_colored "$BLUE" "🚀 Generating 5-7 readings for guide: $GUIDE_ID"

# Create the prompt with heredoc
read -r -d '' PROMPT <<'HEREDOC' || true
Generate 1 TEST reading for the GUIDE_ID_PLACEHOLDER guide to verify quality.

**CONTEXT: Wikipedia × Notion for Life Planning**
Templata curates and synthesizes expert knowledge into actionable guides. Readings save users from reading 5 books - we apply expert knowledge to their specific situation.

**YOUR TASK**: Create 1 test reading to verify quality before generating more

**CRITICAL REQUIREMENTS**:

1. **LENGTH**: 300-400 words MAX - KEEP IT SHORT
   - NOT 600-800 words
   - Think Twitter thread length, not blog post

2. **Tone & Style**:
   - Warm, friendly, conversational (like Notion docs)
   - NOT corporate or stiff
   - Clear and helpful without being chatty
   - Practical and actionable
   - Use occasional emojis naturally (not forced)

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
   - Brief intro paragraph (1-2 sentences) setting context
   - 2-3 main sections with clear headers
   - Mix of paragraphs, lists, and tables as appropriate
   - Quote blocks to cite sources and add credibility
   - End with actionable takeaway or key insight

**IMPORTANT**:
- 300-400 words MAX
- Include quote blocks from your sources (use > for blockquotes)
- Tables when comparing data/options makes sense
- Notion-style tone: warm, helpful, not corporate
- Use proper SQL escaping ('') for apostrophes
- Project ID: uvcstcajctqbxddosdbf

**AVOID**:
- ❌ Being too sparse or lazy (put in effort!)
- ❌ Corporate jargon or stiff language
- ❌ Going over 400 words
- ❌ Overly casual or chatty tone

**DO**:
- ✅ Provide real substance and insights
- ✅ Use credible sources and cite them
- ✅ Make it practical and actionable
- ✅ Keep it concise but valuable

**YOUR PROCESS**:
1. Find 2-3 real credible sources
2. Generate SHORT content (300-400 words) with quote blocks
3. Insert to database using mcp__supabase__execute_sql:

INSERT INTO readings (id, title, excerpt, content, author, read_time, type, difficulty, guide, slug, tags, published_at, sources)
VALUES (
  'reading-{guide-id}-{unique-slug}',
  '{title}',
  '{excerpt}',
  '{content}',
  'Templata',
  '{X} min read',
  '{type}',
  '{difficulty}',
  'GUIDE_ID_PLACEHOLDER',
  '{slug}',
  ARRAY['{tag1}', '{tag2}', '{tag3}'],
  '2025-01-15',
  ARRAY['{Source 1}', '{Source 2}', '{Source 3}']
);

When done, OUTPUT THE FULL CONTENT so I can verify:
- Word count
- Tone (casual vs corporate)
- Quote blocks visible
- Length appropriate

Respond with: TEST COMPLETE and show the full content
HEREDOC

# Replace placeholder with actual guide ID
PROMPT="${PROMPT//GUIDE_ID_PLACEHOLDER/$GUIDE_ID}"

# Run claude with the prompt
claude --dangerously-skip-permissions -p "$PROMPT"

log_colored "$GREEN" "✅ Generation complete for $GUIDE_ID"
