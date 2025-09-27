#!/bin/bash

# Fast batch prompt generation - audit first, then process only incomplete ones
set -e

# Starting index (0-based)
START_INDEX=${1:-0}
# Number of batches to process (optional)
NUM_BATCHES=${2:-999}

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

# Get all worktrees
WORKTREES=($(ls -d ../../templata-* | sort))

log_colored "$BLUE" "🔍 AUDIT PHASE: Checking ${#WORKTREES[@]} worktrees for prompt completion status..."

# Phase 1: Fast audit - identify incomplete worktrees
INCOMPLETE_WORKTREES=()
COMPLETE_COUNT=0
INCOMPLETE_COUNT=0

for worktree in "${WORKTREES[@]}"; do
    if [ ! -d "$worktree" ]; then
        continue
    fi

    template=$(basename "$worktree" | sed 's/templata-//')

    # Check if prompts file exists in worktree with new naming convention
    if [ -f "$worktree/src/data/prompts/${template}-prompts.ts" ]; then
        ((COMPLETE_COUNT++))
        continue
    fi

    # This worktree needs work
    INCOMPLETE_WORKTREES+=("$worktree")
    ((INCOMPLETE_COUNT++))
done

log_colored "$GREEN" "📊 AUDIT RESULTS:"
log_colored "$GREEN" "  ✅ Complete: $COMPLETE_COUNT prompts"
log_colored "$YELLOW" "  ❌ Incomplete: $INCOMPLETE_COUNT prompts"

if [ ${#INCOMPLETE_WORKTREES[@]} -eq 0 ]; then
    log_colored "$GREEN" "🎉 All prompt files already complete!"
    exit 0
fi

log_colored "$BLUE" "🚀 GENERATION PHASE: Processing ${#INCOMPLETE_WORKTREES[@]} incomplete prompts..."

# Phase 2: Process only incomplete worktrees in batches
BATCH_SIZE=20
TOTAL=${#INCOMPLETE_WORKTREES[@]}

BATCH_COUNT=0
for ((i=$START_INDEX; i<$TOTAL && BATCH_COUNT<$NUM_BATCHES; i+=BATCH_SIZE)); do
    ((BATCH_COUNT++))
    BATCH_END=$((i + BATCH_SIZE - 1))
    if [ $BATCH_END -gt $((TOTAL - 1)) ]; then
        BATCH_END=$((TOTAL - 1))
    fi

    log_colored "$BLUE" "Starting batch $BATCH_COUNT: prompts $((i+1))-$((BATCH_END+1)) of $TOTAL incomplete"

    # Start batch of parallel jobs
    for ((j=i; j<=BATCH_END; j++)); do
        worktree="${INCOMPLETE_WORKTREES[j]}"
        template=$(basename "$worktree" | sed 's/templata-//')
        template_readable=$(echo "$template" | sed 's/-/ /g' | sed 's/\b\w/\U&/g')

        log_colored "$YELLOW" "Generating prompts for: $template"

        cd "$worktree"

        (
            claude --print --dangerously-skip-permissions --add-dir . -p "Create 5 logical categories for a ${template_readable} journey and write 10 simple one-sentence action prompts for each category (50 total).

Format as plain text:
CATEGORY 1: [name]
1. [one sentence prompt]
2. [one sentence prompt]
...
10. [one sentence prompt]

CATEGORY 2: [name]
1. [one sentence prompt]
...

Make each prompt a concrete actionable task for someone navigating ${template_readable}." > ${template}-prompts.txt 2>&1

            if [ $? -eq 0 ]; then
                echo "✅ $template: Success"
            else
                echo "❌ $template: Failed"
            fi
        ) &

        cd - > /dev/null
    done

    # Wait for this batch to complete
    wait

    log_colored "$GREEN" "Batch $BATCH_COUNT complete!"
done

log_colored "$GREEN" "Generation cycle complete!"

# Final verification
log_colored "$BLUE" "🔍 FINAL VERIFICATION: Checking completion status..."

incomplete_count=0
for worktree in "${WORKTREES[@]}"; do
    if [ ! -d "$worktree" ]; then
        continue
    fi

    template=$(basename "$worktree" | sed 's/templata-//')

    if [ -f "$worktree/${template}-prompts.txt" ]; then
        word_count=$(wc -w < "$worktree/${template}-prompts.txt" 2>/dev/null || echo "0")
        if [ "$word_count" -gt 400 ]; then
            continue
        else
            echo "❌ $template (prompt file too small: $word_count words)"
            ((incomplete_count++))
        fi
    else
        echo "❌ $template (missing prompt file)"
        ((incomplete_count++))
    fi
done

if [ "$incomplete_count" -gt 0 ]; then
    log_colored "$YELLOW" "⚠️  Found $incomplete_count incomplete files. Restarting..."
    sleep 5
    exec "$0" "$@"
else
    log_colored "$GREEN" "🎉 All prompt files complete!"
fi