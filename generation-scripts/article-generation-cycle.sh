#!/bin/bash

# Fast batch article generation - audit first, then process only incomplete ones
set -e

# Check for status command
if [ "$1" = "status" ]; then
    PROGRESS_FILE=".article-generation-progress"
    if [ -f "$PROGRESS_FILE" ]; then
        echo "📊 Article Generation Progress Status:"
        cat "$PROGRESS_FILE"
        echo ""
        echo "📋 To resume from where you left off:"
        if grep -q "NEXT_START_INDEX" "$PROGRESS_FILE"; then
            NEXT_START=$(grep "NEXT_START_INDEX" "$PROGRESS_FILE" | cut -d'=' -f2)
            echo "   $0 $NEXT_START"
        else
            echo "   $0 0"
        fi
    else
        echo "❌ No progress file found. Start with: $0 0"
    fi
    exit 0
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

log_colored "$BLUE" "🔍 AUDIT PHASE: Checking ${#WORKTREES[@]} worktrees for completion status..."

# Phase 1: Fast audit - identify incomplete worktrees
INCOMPLETE_WORKTREES=()
COMPLETE_COUNT=0
INCOMPLETE_COUNT=0

for worktree in "${WORKTREES[@]}"; do
    if [ ! -d "$worktree" ]; then
        continue
    fi

    template=$(basename "$worktree" | sed 's/templata-//')

    # Check if all 20 article files exist with enough content (1,250 words each)
    complete_articles=0
    for i in {1..20}; do
        if [ -f "$worktree/${template}-article-${i}.txt" ]; then
            word_count=$(wc -w < "$worktree/${template}-article-${i}.txt" 2>/dev/null || echo "0")
            if [ "$word_count" -gt 1250 ]; then
                ((complete_articles++))
            fi
        fi
    done

    if [ "$complete_articles" -eq 20 ]; then
        ((COMPLETE_COUNT++))
        continue
    fi

    # This worktree needs work
    INCOMPLETE_WORKTREES+=("$worktree")
    ((INCOMPLETE_COUNT++))
done

log_colored "$GREEN" "📊 AUDIT RESULTS:"
log_colored "$GREEN" "  ✅ Complete: $COMPLETE_COUNT templates"
log_colored "$YELLOW" "  ❌ Incomplete: $INCOMPLETE_COUNT templates"

if [ ${#INCOMPLETE_WORKTREES[@]} -eq 0 ]; then
    log_colored "$GREEN" "🎉 All article files already complete!"
    exit 0
fi

log_colored "$BLUE" "🚀 GENERATION PHASE: Processing ${#INCOMPLETE_WORKTREES[@]} incomplete templates..."

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

    log_colored "$BLUE" "Starting batch $BATCH_COUNT: templates $((i+1))-$((BATCH_END+1)) of $TOTAL incomplete"

    # Start batch of parallel jobs
    for ((j=i; j<=BATCH_END; j++)); do
        worktree="${INCOMPLETE_WORKTREES[j]}"
        template=$(basename "$worktree" | sed 's/templata-//')
        template_readable=$(echo "$template" | sed 's/-/ /g' | sed 's/\b\w/\U&/g')
        category=$(get_category_for_template "$template")

        log_colored "$YELLOW" "Generating articles for: $template"

        cd "$worktree"

        (
            # Generate articles 1-20, only create missing ones
            for article_num in {1..20}; do
                article_file="${template}-article-${article_num}.txt"

                # Skip if this article already exists with enough content
                if [ -f "$article_file" ]; then
                    word_count=$(wc -w < "$article_file" 2>/dev/null || echo "0")
                    if [ "$word_count" -gt 1250 ]; then
                        echo "✅ $template: Article $article_num already complete ($word_count words)"
                        continue
                    fi
                fi

                # Collect existing article titles to avoid duplicates
                existing_titles=""
                for i in {1..20}; do
                    if [ -f "${template}-article-${i}.txt" ] && [ "$i" -ne "$article_num" ]; then
                        title=$(grep "^TITLE:" "${template}-article-${i}.txt" 2>/dev/null | head -1)
                        if [ -n "$title" ]; then
                            existing_titles="$existing_titles\n$title"
                        fi
                    fi
                done

                log_colored "$YELLOW" "Generating article $article_num for: $template"

                claude --print --dangerously-skip-permissions --add-dir . -p "Generate ONE comprehensive article for the $template_readable template in simple text format.

ARTICLE #$article_num for $template_readable

EXISTING ARTICLE TITLES TO AVOID DUPLICATING:
$existing_titles

REQUIREMENTS:
- 1,200-1,600 words (8-12 minute read)
- Follow sophisticated, caring voice and readability guidelines
- Focus on $template_readable context and needs
- Pick a unique topic that would help people with $template_readable
- Choose appropriate type (guide/article/checklist/tool) and difficulty (beginner/intermediate/expert)

OUTPUT FORMAT:
TITLE: [Your compelling article title - make sure it's different from existing titles above]
CATEGORY: $category
TYPE: [guide/article/checklist/tool]
DIFFICULTY: [beginner/intermediate/expert]
CONTENT: [Your 1,200-1,600 word article content here...]

When complete, respond exactly: 'ARTICLE GENERATION COMPLETE - Article #$article_num'" > "$article_file" 2>&1

                if [ $? -eq 0 ]; then
                    word_count=$(wc -w < "$article_file" 2>/dev/null || echo "0")
                    echo "✅ $template: Article $article_num success ($word_count words)"
                else
                    echo "❌ $template: Article $article_num failed"
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

    # Check if all 20 article files are complete
    complete_articles=0
    for i in {1..20}; do
        if [ -f "$worktree/${template}-article-${i}.txt" ]; then
            word_count=$(wc -w < "$worktree/${template}-article-${i}.txt" 2>/dev/null || echo "0")
            if [ "$word_count" -gt 1250 ]; then
                ((complete_articles++))
            fi
        fi
    done

    if [ "$complete_articles" -eq 20 ]; then
        continue
    else
        echo "❌ $template (missing article files: $complete_articles/20 complete)"
        ((incomplete_count++))
    fi
done

if [ "$incomplete_count" -gt 0 ]; then
    log_colored "$YELLOW" "⚠️  Found $incomplete_count incomplete files. Waiting 60 seconds before retrying..."
    sleep 60
    log_colored "$BLUE" "🔄 Retrying generation for remaining incomplete files..."
    exec "$0" "$@"
else
    log_colored "$GREEN" "🎉 All article files complete!"
fi