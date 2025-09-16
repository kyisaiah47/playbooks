#!/bin/bash

# Article Generation Automation for Templata
# Automatically runs Claude to generate articles one by one

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKTREE_DIR="../templata-article-generation"
LOGFILE="$SCRIPT_DIR/article-generation.log"
PROGRESS_FILE="$SCRIPT_DIR/.article-progress"

# Article topics queue
TOPICS=(
    "homeowners-insurance-comprehensive-guide"
    "property-tax-assessment-appeals-guide"
    "home-warranty-coverage-analysis"
    "closing-day-preparation-procedures"
    "real-estate-agent-selection-management"
    "escrow-title-insurance-protection"
    "new-construction-vs-resale-comparison"
    "condo-townhome-hoa-buying-guide"
    "investment-property-analysis-strategy"
    "luxury-home-market-considerations"
    "rural-property-land-purchasing"
    "foreclosure-distressed-property-guide"
    "senior-retirement-home-buying"
    "energy-efficiency-green-homes"
    "home-buying-scams-protection"
    "corporate-relocation-assistance"
    "international-buyer-us-real-estate"
    "home-buying-technology-tools"
    "multi-family-property-investment"
    "home-buying-divorce-separation"
)

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" | tee -a "$LOGFILE"
}

log_colored() {
    local color=$1
    local message=$2
    echo -e "${color}$(date '+%Y-%m-%d %H:%M:%S') - $message${NC}" | tee -a "$LOGFILE"
}

# Get current progress
get_current_index() {
    if [[ -f "$PROGRESS_FILE" ]]; then
        cat "$PROGRESS_FILE"
    else
        echo "0"
    fi
}

# Update progress
update_progress() {
    local index=$1
    echo "$index" > "$PROGRESS_FILE"
}

# Get next topic
get_next_topic() {
    local current_index=$(get_current_index)

    if [[ $current_index -ge ${#TOPICS[@]} ]]; then
        echo ""
        return 1
    fi

    echo "${TOPICS[$current_index]}"
    return 0
}

# Create generation prompt
create_generation_prompt() {
    local topic="$1"
    local topic_readable=$(echo "$topic" | sed 's/-/ /g' | sed 's/\b\w/\U&/g')

    cat << EOF
Read the master prompt at claude-resource-generation-master-prompt.md then generate ONE comprehensive article for: $topic_readable

REQUIREMENTS:
- 1,200-1,600 words (8-12 minute read)
- No first person language ("I", "my", "we")
- Objective, authoritative voice
- Flowing paragraphs with strategically placed bold numbers
- Author: "Templata"
- Category: "Real Estate & Home Buying"
- Add to src/registry/blogs.ts in manualBlogPosts array
- Include proper SEO metadata
- Choose appropriate type (guide/article/checklist/tool)
- Choose appropriate difficulty (beginner/intermediate/expert)

Follow all master prompt guidelines for quality and readability.

When complete, respond exactly: "ARTICLE GENERATION COMPLETE - $topic_readable"
EOF
}

# Create review prompt
create_review_prompt() {
    local topic="$1"
    local topic_readable=$(echo "$topic" | sed 's/-/ /g' | sed 's/\b\w/\U&/g')

    cat << EOF
Review the article you just created for: $topic_readable

Check against master prompt standards:
- 1,200-1,600 words (8-12 minute read)
- No first person language
- Objective, authoritative voice
- Flowing paragraphs with strategic bold numbers
- Specific, actionable information
- Proper SEO metadata
- Added to src/registry/blogs.ts correctly

If it meets all standards, respond exactly: "ARTICLE REVIEW COMPLETE - $topic_readable"
If it needs improvements, fix them first before responding.
EOF
}

# Run single article generation
run_article_generation() {
    local topic="$1"
    local topic_readable=$(echo "$topic" | sed 's/-/ /g' | sed 's/\b\w/\U&/g')

    log_colored "$BLUE" "Starting generation for: $topic_readable"

    # Switch to worktree
    cd "$WORKTREE_DIR"

    # Generate article
    local generation_prompt=$(create_generation_prompt "$topic")
    log_colored "$YELLOW" "Running article generation..."

    echo "$generation_prompt" | claude --print --dangerously-skip-permissions --add-dir "$(pwd)" | tee -a "$LOGFILE"

    # Brief pause
    sleep 3

    # Review article
    local review_prompt=$(create_review_prompt "$topic")
    log_colored "$YELLOW" "Running article review..."

    echo "$review_prompt" | claude --print --dangerously-skip-permissions --add-dir "$(pwd)" | tee -a "$LOGFILE"

    log_colored "$GREEN" "Completed: $topic_readable"
}

# Main function
main() {
    log_colored "$BLUE" "Starting Article Generation Cycle"

    # Setup log
    mkdir -p "$(dirname "$LOGFILE")"

    # Check worktree exists
    if [[ ! -d "$WORKTREE_DIR" ]]; then
        log_colored "$RED" "ERROR: Worktree not found at $WORKTREE_DIR"
        exit 1
    fi

    # Process all remaining articles
    while true; do
        topic=$(get_next_topic)
        if [[ $? -ne 0 ]]; then
            log_colored "$GREEN" "All articles completed!"
            break
        fi

        run_article_generation "$topic"

        # Update progress
        current_index=$(get_current_index)
        update_progress $((current_index + 1))

        # Brief pause between articles
        sleep 5
    done

    log_colored "$GREEN" "Article generation cycle complete!"
}

# Handle arguments
case "${1:-}" in
    "status")
        current_index=$(get_current_index)
        echo "Progress: $current_index/${#TOPICS[@]} articles completed"
        if [[ $current_index -lt ${#TOPICS[@]} ]]; then
            next_topic=$(get_next_topic)
            echo "Next topic: $(echo "$next_topic" | sed 's/-/ /g' | sed 's/\b\w/\U&/g')"
        fi
        ;;
    "reset")
        rm -f "$PROGRESS_FILE"
        echo "Progress reset to 0"
        ;;
    "single")
        topic=$(get_next_topic)
        if [[ $? -eq 0 ]]; then
            run_article_generation "$topic"
            current_index=$(get_current_index)
            update_progress $((current_index + 1))
        else
            echo "All articles completed"
        fi
        ;;
    *)
        main
        ;;
esac