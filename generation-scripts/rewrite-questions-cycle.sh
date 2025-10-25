#!/bin/bash

# Parallel question rewriting using multiple Claude Code instances
set -e

# Configuration
TOTAL_QUESTIONS=103820
QUESTIONS_PER_INSTANCE=5000
START_OFFSET=${1:-0}  # Start from beginning
CONCURRENT_INSTANCES=${2:-10}  # Run 10 Claude instances at once

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

log_colored "$BLUE" "🚀 Starting parallel question rewrite..."
log_colored "$BLUE" "   Total questions: $TOTAL_QUESTIONS"
log_colored "$BLUE" "   Starting at offset: $START_OFFSET"
log_colored "$BLUE" "   Questions per instance: $QUESTIONS_PER_INSTANCE"
log_colored "$BLUE" "   Concurrent instances: $CONCURRENT_INSTANCES"

# Calculate ranges
RANGES=()
for ((offset=$START_OFFSET; offset<$TOTAL_QUESTIONS; offset+=$QUESTIONS_PER_INSTANCE)); do
    end_offset=$((offset + QUESTIONS_PER_INSTANCE))
    if [ $end_offset -gt $TOTAL_QUESTIONS ]; then
        end_offset=$TOTAL_QUESTIONS
    fi
    RANGES+=("$offset:$end_offset")
done

TOTAL_RANGES=${#RANGES[@]}
log_colored "$GREEN" "📊 Created $TOTAL_RANGES ranges to process"

# Process ranges in batches
BATCH_COUNT=0
for ((i=0; i<$TOTAL_RANGES; i+=$CONCURRENT_INSTANCES)); do
    ((BATCH_COUNT++))
    BATCH_END=$((i + CONCURRENT_INSTANCES - 1))
    if [ $BATCH_END -gt $((TOTAL_RANGES - 1)) ]; then
        BATCH_END=$((TOTAL_RANGES - 1))
    fi

    log_colored "$BLUE" "Starting batch $BATCH_COUNT: ranges $((i+1))-$((BATCH_END+1)) of $TOTAL_RANGES"

    # Start batch of parallel Claude instances
    for ((j=i; j<=BATCH_END; j++)); do
        range="${RANGES[j]}"
        IFS=':' read -r start_offset end_offset <<< "$range"

        log_colored "$YELLOW" "Spawning Claude instance for offset $start_offset-$end_offset"

        (
            claude --print --dangerously-skip-permissions -p "You are tasked with rewriting questions in the database from Wikipedia-style tone to Notion-style tone.

**YOUR ASSIGNED RANGE**: Questions from offset $start_offset to $end_offset

**TONE TRANSFORMATION GUIDELINES**:
- Less like Wikipedia (dry, too professional and perfect)
- More like Notion (friendly assistant)
- Not trying to be too deep
- Maintain the complexity of the actual content/questions, but with a friendlier tone/vibe

**TRANSFORMATION EXAMPLES**:
- \"Document\" → \"What...\" / \"Write down...\"
- \"Research\" → \"Look into...\" / \"Check out...\"
- \"Reflect on\" → \"Think about...\" / \"Notice...\"
- \"Note\" → \"Notice...\" / \"Keep track of...\"
- Add contractions: \"you've\", \"what's\", \"how'd\"
- Split long sentences into multiple shorter ones with questions

**YOUR TASK**:
1. Use mcp__supabase__execute_sql to fetch questions in your range:
   \`SELECT id, prompt, template_id FROM questions ORDER BY id LIMIT 50 OFFSET $start_offset\`

2. Rewrite each prompt to Notion-style tone following the guidelines above

3. Update the database using mcp__supabase__execute_sql with a SQL CASE statement:
   \`UPDATE questions SET
     prompt = CASE id
       WHEN 'id1' THEN 'rewritten prompt 1'
       WHEN 'id2' THEN 'rewritten prompt 2'
       ...
     END,
     updated_at = NOW()
   WHERE id IN ('id1', 'id2', ...)\`

4. Process in batches of 50 questions at a time

5. Continue until you've processed all questions from offset $start_offset to $end_offset

6. When complete, output: REWRITE COMPLETE - Processed offset $start_offset to $end_offset

**IMPORTANT**:
- Use double single quotes ('') to escape apostrophes in SQL strings
- Project ID: uvcstcajctqbxddosdbf
- Process systematically through your assigned range
- Do NOT use the Anthropic API - you ARE Claude Code" > /tmp/claude-rewrite-$start_offset.log 2>&1

            if [ $? -eq 0 ]; then
                echo "✅ Range $start_offset-$end_offset: Success"
            else
                echo "❌ Range $start_offset-$end_offset: Failed"
            fi
        ) &
    done

    # Wait for this batch to complete
    wait

    log_colored "$GREEN" "Batch $BATCH_COUNT complete!"

    # Show progress
    questions_processed=$((BATCH_COUNT * CONCURRENT_INSTANCES * QUESTIONS_PER_INSTANCE))
    if [ $questions_processed -gt $TOTAL_QUESTIONS ]; then
        questions_processed=$TOTAL_QUESTIONS
    fi
    percentage=$(echo "scale=1; ($questions_processed / $TOTAL_QUESTIONS) * 100" | bc)
    log_colored "$GREEN" "Progress: ~$questions_processed/$TOTAL_QUESTIONS questions (~${percentage}%)"
done

log_colored "$GREEN" "🎉 All batches complete!"
log_colored "$BLUE" "Check logs in /tmp/claude-rewrite-*.log for details"
