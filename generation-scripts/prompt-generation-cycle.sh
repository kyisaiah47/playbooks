#!/bin/bash

# Fast batch prompt generation - audit first, then process only incomplete ones
set -e

# Check for --force flag
FORCE_MODE=false
if [[ "$1" == "--force" ]]; then
    FORCE_MODE=true
    shift
fi

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

# Get all template directories
TEMPLATE_DIRS=($(ls -d ../../templata-* | sort))

if [ "$FORCE_MODE" = true ]; then
    log_colored "$YELLOW" "🔄 FORCE MODE: Will regenerate all prompt files regardless of existing content"
fi

log_colored "$BLUE" "🔍 AUDIT PHASE: Checking ${#TEMPLATE_DIRS[@]} templates for prompt completion status..."

# Phase 1: Fast audit - identify incomplete templates
INCOMPLETE_WORKTREES=()
COMPLETE_COUNT=0
INCOMPLETE_COUNT=0

for worktree in "${TEMPLATE_DIRS[@]}"; do
    if [ ! -d "$worktree" ]; then
        continue
    fi

    template=$(basename "$worktree" | sed 's/templata-//')

    # Check if all 8 prompt category files exist with enough content (100 words each)
    complete_categories=0
    if [ "$FORCE_MODE" = false ]; then
        for i in {1..8}; do
            if [ -f "$worktree/${template}-prompt-category-${i}.txt" ]; then
                word_count=$(wc -w < "$worktree/${template}-prompt-category-${i}.txt" 2>/dev/null || echo "0")
                if [ "$word_count" -gt 100 ]; then
                    ((complete_categories++))
                fi
            fi
        done

        if [ "$complete_categories" -eq 8 ]; then
            ((COMPLETE_COUNT++))
            continue
        fi
    fi

    # This worktree needs work (or force mode is on)
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
            # Generate categories 1-8, only create missing ones
            for category_num in {1..8}; do
                category_file="${template}-prompt-category-${category_num}.txt"

                # Skip if this category already exists with enough content (unless force mode)
                if [ "$FORCE_MODE" = false ] && [ -f "$category_file" ]; then
                    word_count=$(wc -w < "$category_file" 2>/dev/null || echo "0")
                    if [ "$word_count" -gt 100 ]; then
                        echo "✅ $template: Category $category_num already complete ($word_count words)"
                        continue
                    fi
                fi

                # Collect existing category names to avoid duplicates
                existing_categories=""
                for i in {1..8}; do
                    if [ -f "${template}-prompt-category-${i}.txt" ] && [ "$i" -ne "$category_num" ]; then
                        category_name=$(grep "^CATEGORY:" "${template}-prompt-category-${i}.txt" 2>/dev/null | head -1)
                        if [ -n "$category_name" ]; then
                            existing_categories="$existing_categories\n$category_name"
                        fi
                    fi
                done

                log_colored "$YELLOW" "Generating category $category_num for: $template"

                claude --print --dangerously-skip-permissions --add-dir . -p "Create ONE logical category for a ${template_readable} knowledge base with 10 simple one-sentence prompts that mix note-taking, research, and reflection.

CATEGORY #$category_num for $template_readable

EXISTING CATEGORY NAMES TO AVOID DUPLICATING:
$existing_categories

REQUIREMENTS:
- Create a unique category name different from existing ones above
- Write exactly 10 prompts for this category (mix of note-taking, research, and reflection)
- Each prompt should help someone organize information, research topics, or reflect on their experiences
- Include both knowledge collection prompts and personal reflection prompts
- Prompts should be for collecting knowledge and insights, not taking action

OUTPUT FORMAT:
CATEGORY: [Your unique category name - make sure it's different from existing categories above]
1. [one sentence note-taking/research/reflection prompt]
2. [one sentence note-taking/research/reflection prompt]
3. [one sentence note-taking/research/reflection prompt]
4. [one sentence note-taking/research/reflection prompt]
5. [one sentence note-taking/research/reflection prompt]
6. [one sentence note-taking/research/reflection prompt]
7. [one sentence note-taking/research/reflection prompt]
8. [one sentence note-taking/research/reflection prompt]
9. [one sentence note-taking/research/reflection prompt]
10. [one sentence note-taking/research/reflection prompt]

When complete, respond exactly: 'PROMPT GENERATION COMPLETE - Category #$category_num'" > "$category_file" 2>&1

                if [ $? -eq 0 ]; then
                    word_count=$(wc -w < "$category_file" 2>/dev/null || echo "0")
                    echo "✅ $template: Category $category_num success ($word_count words)"
                else
                    echo "❌ $template: Category $category_num failed"
                fi

                # Brief pause between categories
                sleep 2
            done

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
for worktree in "${TEMPLATE_DIRS[@]}"; do
    if [ ! -d "$worktree" ]; then
        continue
    fi

    template=$(basename "$worktree" | sed 's/templata-//')

    # Check if all 8 prompt category files exist with enough content (100 words each)
    complete_categories=0
    for i in {1..8}; do
        if [ -f "$worktree/${template}-prompt-category-${i}.txt" ]; then
            word_count=$(wc -w < "$worktree/${template}-prompt-category-${i}.txt" 2>/dev/null || echo "0")
            if [ "$word_count" -gt 100 ]; then
                ((complete_categories++))
            fi
        fi
    done

    if [ "$complete_categories" -eq 8 ]; then
        continue
    else
        echo "❌ $template (missing prompt categories: $complete_categories/8 complete)"
        ((incomplete_count++))
    fi
done

if [ "$incomplete_count" -gt 0 ]; then
    log_colored "$YELLOW" "⚠️  Found $incomplete_count incomplete files. Retrying generation for remaining incomplete files..."; exec "$0" "$@"
else
    log_colored "$GREEN" "🎉 All prompt files complete!"
fi