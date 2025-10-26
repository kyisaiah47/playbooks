#!/bin/bash

# Test run: Enhance first 10 readings with real sources
set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log_colored() {
    local color=$1
    local message=$2
    echo -e "${color}$message${NC}"
}

log_colored "$BLUE" "🧪 Starting TEST run: Enhancing first 1 reading with real sources"

# Test with just 1 instance processing 1 reading
claude --print --dangerously-skip-permissions -p "You are tasked with enhancing readings in the database by finding real sources and shortening content.

**YOUR TASK**: Process the first 1 reading from the database

**ENHANCEMENT GUIDELINES**:
1. Use existing AI-generated content as a base (DO NOT delete or start over)
2. Decide if this reading topic would benefit from a REAL external source
3. Search your knowledge for the BEST real source that matches the topic
4. Shorten and revise ALL readings to be more concise (max 800 words)
5. Add proper attribution if using a real source

**SOURCE TYPES**:
- book: Actual published books (e.g., \"Atomic Habits\" by James Clear)
- article: Real publications (Harvard Business Review, NYT, Medium, etc.)
- youtube: Actual creators/channels
- podcast: Real podcast episodes
- publication: Academic journals, white papers
- internal: Keep as Templata guide (for niche topics)

**YOUR PROCESS**:
1. Use mcp__supabase__execute_sql to fetch the first 1 reading:
   \`SELECT id, title, author, excerpt, content, guide FROM readings ORDER BY id LIMIT 1\`

2. For the reading:
   - Analyze if a real source would be valuable
   - For popular topics (career, relationships, finance, health), try to find real sources
   - For niche topics, it's okay to keep as internal guide
   - Shorten the content (max 800 words)
   - Decide on: title, author, excerpt (2-3 sentences), content, source_url, type

3. Update the database using mcp__supabase__execute_sql with individual UPDATE statements:
   \`UPDATE readings SET
     title = 'new title',
     author = 'real author or Templata',
     excerpt = 'concise 2-3 sentence summary',
     content = 'shortened, revised content',
     type = 'book' | 'article' | 'youtube' | 'podcast' | 'publication' | 'internal',
     source_url = 'URL or NULL'
   WHERE id = 'reading_id'\`

4. Output a summary showing:
   - What you did
   - What source you found (or kept as internal)
   - Which GUIDE this reading belongs to (the 'guide' field)

**IMPORTANT**:
- Use double single quotes ('') to escape apostrophes in SQL strings
- Project ID: uvcstcajctqbxddosdbf
- Be honest about what real sources exist vs keeping as internal
- Shorten the reading even if keeping as internal
- DO NOT use the Anthropic API - you ARE Claude Code
- Output which GUIDE the test reading belongs to" > /tmp/claude-enhance-readings-test.log 2>&1

if [ $? -eq 0 ]; then
    log_colored "$GREEN" "✅ Test run complete!"
    log_colored "$BLUE" "Check log: /tmp/claude-enhance-readings-test.log"
else
    log_colored "$RED" "❌ Test run failed!"
    log_colored "$BLUE" "Check log: /tmp/claude-enhance-readings-test.log"
    exit 1
fi

log_colored "$BLUE" "📋 Showing last 100 lines of output:"
tail -n 100 /tmp/claude-enhance-readings-test.log
