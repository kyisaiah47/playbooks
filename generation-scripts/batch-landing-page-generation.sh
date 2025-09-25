#!/bin/bash

# Batch landing page text generation for all templates
# Based on batch-prompt-text-generation.sh pattern
set -e

# Starting index (0-based)
START_INDEX=${1:-0}
# Number of batches to process (optional)
NUM_BATCHES=${2:-999}

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

log_colored() {
    local color=$1
    local message=$2
    echo -e "${color}$message${NC}"
}

# Get all worktrees
WORKTREES=($(ls -d ../templata-* | sort))

log_colored "$BLUE" "Found ${#WORKTREES[@]} worktrees, starting at index $START_INDEX, processing $NUM_BATCHES batches"

# Process in batches of 20
BATCH_SIZE=20
TOTAL=${#WORKTREES[@]}

BATCH_COUNT=0
for ((i=$START_INDEX; i<$TOTAL && BATCH_COUNT<$NUM_BATCHES; i+=BATCH_SIZE)); do
    ((BATCH_COUNT++))
    BATCH_END=$((i + BATCH_SIZE - 1))
    if [ $BATCH_END -gt $((TOTAL - 1)) ]; then
        BATCH_END=$((TOTAL - 1))
    fi

    log_colored "$BLUE" "Starting batch $((i/BATCH_SIZE + 1)): templates $((i+1))-$((BATCH_END+1)) of $TOTAL"

    # Start batch of parallel jobs
    for ((j=i; j<=BATCH_END; j++)); do
        worktree="${WORKTREES[j]}"

        if [ ! -d "$worktree" ]; then
            continue
        fi

        template=$(basename "$worktree" | sed 's/templata-//')

        # Skip if file exists and has content (>300 words for landing page)
        if [ -f "$worktree/${template}-landing-page.txt" ]; then
            word_count=$(wc -w < "$worktree/${template}-landing-page.txt")
            if [ "$word_count" -gt 300 ]; then
                echo "✅ Skipping $template (already has $word_count words)"
                continue
            fi
        fi

        template_readable=$(echo "$template" | sed 's/-/ /g' | sed 's/\b\w/\U&/g')

        log_colored "$YELLOW" "Generating landing page content for: $template"

        cd "$worktree"

        (
            result=$(claude --print --dangerously-skip-permissions --add-dir . -p "Create landing page content for a ${template_readable} template following this structure:

HERO SECTION:
- Headline: Organize your ${template_readable}
- Subheadline: [Create compelling subheadline about transforming planning]
- Description: [2-3 sentences about getting expert guidance and resources]

WHAT YOU GET (4 features):
1. Step-by-step guidance: [How this template provides structure]
2. Expert insights & tips: [What professional advice is included]
3. Actionable prompts: [Types of practical tasks included]
4. Comprehensive resources: [What additional materials are provided]

HOW IT WORKS (3 steps):
1. Start with structure: [How they begin with the template]
2. Follow the prompts: [How they use the actionable tasks]
3. Track your progress: [How they see their journey unfold]

EXAMPLE PROMPTS (6 items):
[List 6 specific, actionable prompts someone would get in this ${template_readable} template]

EXAMPLE ARTICLES (3 items):
[List 3 article titles with brief descriptions that would be relevant to ${template_readable}]

FINAL CTA:
- Section Title: Ready to organize your ${template_readable}?
- Section Subtitle: [Compelling reason to get started]
- Guarantee: [3 benefit points with checkmarks]

Make everything specific to ${template_readable} - avoid generic language. Focus on the real challenges, benefits, and outcomes for this life moment." 2>&1)
            if [ $? -eq 0 ] && [ -n "$result" ]; then
                echo "$result" > ${template}-landing-page.txt
                echo "✅ $template: Landing page content generated"
            else
                echo "❌ $template: Failed - $result"
            fi
        ) &

        cd - > /dev/null
    done

    # Wait for this batch to complete
    wait

    log_colored "$GREEN" "Batch $((i/BATCH_SIZE + 1)) complete!"
done

log_colored "$GREEN" "Batch cycle complete!"

# Check for incomplete files and retry if needed
incomplete_count=0
for worktree in "${WORKTREES[@]}"; do
    if [ ! -d "$worktree" ]; then
        continue
    fi

    template=$(basename "$worktree" | sed 's/templata-//')

    if [ -f "$worktree/${template}-landing-page.txt" ]; then
        word_count=$(wc -w < "$worktree/${template}-landing-page.txt")
        if [ "$word_count" -gt 300 ]; then
            echo "✅ $template ($word_count words)"
        else
            echo "❌ $template (only $word_count words)"
            ((incomplete_count++))
        fi
    else
        echo "❌ $template (missing file)"
        ((incomplete_count++))
    fi
done

if [ "$incomplete_count" -gt 0 ]; then
    log_colored "$YELLOW" "Found $incomplete_count incomplete files. Restarting..."
    sleep 5
    exec "$0" "$@"
else
    log_colored "$GREEN" "All landing page files complete! 🎉"
fi