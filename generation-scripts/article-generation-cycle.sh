#!/bin/bash

# Fast batch article generation for all templates
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

# Get category for template
get_category_for_template() {
    local template="$1"
    case "$template" in
        "home-buying") echo "Real Estate & Home Buying" ;;
        "wedding-planning") echo "Wedding & Events" ;;
        "baby-planning") echo "Family & Parenting" ;;
        "job-search") echo "Career & Business" ;;
        "college-planning") echo "Education" ;;
        "budget-planning") echo "Personal Finance" ;;
        "fitness-journey") echo "Health & Wellness" ;;
        "travel-planning") echo "Travel & Adventure" ;;
        "moving-relocation") echo "Personal Life" ;;
        *) echo "Personal Life" ;;
    esac
}

# Get all worktrees
WORKTREES=($(ls -d ../../templata-* | sort))

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

        # Skip if TypeScript blog file already exists with substantial content
        if [ -f "$worktree/src/registry/blogs-${template}.ts" ]; then
            word_count=$(wc -w < "$worktree/src/registry/blogs-${template}.ts")
            if [ "$word_count" -gt 1000 ]; then
                echo "✅ Skipping $template (already has TS blog file with $word_count words)"
                continue
            fi
        fi

        template_readable=$(echo "$template" | sed 's/-/ /g' | sed 's/\b\w/\U&/g')
        category=$(get_category_for_template "$template")

        log_colored "$YELLOW" "Generating articles for: $template"

        cd "$worktree"

        (
            # Generate 20 articles per template
            for article_num in {1..20}; do
                result=$(claude --print --dangerously-skip-permissions --add-dir . -p "Generate ONE comprehensive article for the $template_readable template in simple text format.

ARTICLE #$article_num for $template_readable

REQUIREMENTS:
- 1,200-1,600 words (8-12 minute read)
- Follow sophisticated, caring voice and readability guidelines
- Focus on $template_readable context and needs
- Pick your own relevant topic that would help people with $template_readable
- Choose appropriate type (guide/article/checklist/tool) and difficulty (beginner/intermediate/expert)

OUTPUT FORMAT (append to ${template}-articles.txt):
TITLE: [Your compelling article title]
CATEGORY: $category
TYPE: [guide/article/checklist/tool]
DIFFICULTY: [beginner/intermediate/expert]
CONTENT: [Your 1,200-1,600 word article content here...]
---

When complete, respond exactly: 'ARTICLE GENERATION COMPLETE - Article #$article_num'" 2>&1)

                if [ $? -eq 0 ] && [ -n "$result" ]; then
                    echo "$result" >> ${template}-articles.txt
                    echo "✅ $template: Article $article_num success"
                else
                    echo "❌ $template: Article $article_num failed - $result"
                fi

                # Brief pause between articles
                sleep 2
            done

            echo "✅ $template: All articles completed"
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

    if [ -f "$worktree/src/registry/blogs-${template}.ts" ]; then
        word_count=$(wc -w < "$worktree/src/registry/blogs-${template}.ts")
        if [ "$word_count" -gt 1000 ]; then
            echo "✅ $template ($word_count words in TS file)"
        else
            echo "❌ $template (TS file too small: $word_count words)"
            ((incomplete_count++))
        fi
    else
        echo "❌ $template (missing TS blog file)"
        ((incomplete_count++))
    fi
done

if [ "$incomplete_count" -gt 0 ]; then
    log_colored "$YELLOW" "Found $incomplete_count incomplete files. Restarting..."
    sleep 5
    exec "$0" "$@"
else
    log_colored "$GREEN" "All article files complete! 🎉"
fi