#!/bin/bash

# Article Generation Automation for Templata
# Automatically runs Claude to generate articles one by one

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TEMPLATE_NAME="${1:-home-buying}"
WORKTREE_DIR="../templata-${TEMPLATE_NAME}"
LOGFILE="$SCRIPT_DIR/article-generation-${TEMPLATE_NAME}.log"
PROGRESS_FILE="$SCRIPT_DIR/.article-progress-${TEMPLATE_NAME}"

# Generate 20 articles for any template
TOPICS=(1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20)

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

# Create generation prompt
create_generation_prompt() {
    local article_number="$1"
    local category=$(get_category_for_template "$TEMPLATE_NAME")
    local template_readable=$(echo "$TEMPLATE_NAME" | sed 's/-/ /g' | sed 's/\b\w/\U&/g')

    cat << EOF
Read the master prompt at claude-resource-generation-master-prompt.md then generate ONE comprehensive article for the $template_readable template.

ARTICLE #$article_number for $template_readable

REQUIREMENTS:
- 1,200-1,600 words (8-12 minute read)
- Follow the master prompt voice and character guidelines
- Author: "Templata"
- Category: "$category"
- Add to src/registry/blogs.ts in manualBlogPosts array
- Include proper SEO metadata
- Choose appropriate type (guide/article/checklist/tool) and difficulty (beginner/intermediate/expert)
- Focus on $template_readable context and needs
- Pick your own relevant topic that would help people with $template_readable

Follow all master prompt guidelines for sophisticated, caring voice and readability.

When complete, respond exactly: "ARTICLE GENERATION COMPLETE - Article #$article_number"
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

    cd "$WORKTREE_DIR" && claude --print --dangerously-skip-permissions --add-dir "$(pwd)" -p "$generation_prompt" | tee -a "$LOGFILE"

    # Brief pause
    sleep 3

    # Skip review for now - just move to next article
    log_colored "$GREEN" "Skipping review - moving to next article"

    log_colored "$GREEN" "Completed: $topic_readable"
}

# Create worktree if it doesn't exist
ensure_worktree() {
    if [[ ! -d "$WORKTREE_DIR" ]]; then
        log_colored "$YELLOW" "Creating worktree for template: $TEMPLATE_NAME"

        # Create branch if it doesn't exist
        if ! git show-ref --verify --quiet "refs/heads/article-${TEMPLATE_NAME}"; then
            git branch "article-${TEMPLATE_NAME}"
            log_colored "$GREEN" "Created branch: article-${TEMPLATE_NAME}"
        fi

        # Create worktree
        git worktree add "$WORKTREE_DIR" "article-${TEMPLATE_NAME}"
        log_colored "$GREEN" "Created worktree: $WORKTREE_DIR"
    else
        log_colored "$GREEN" "Using existing worktree: $WORKTREE_DIR"
    fi
}

# Main function
main() {
    log_colored "$BLUE" "Starting Article Generation Cycle for template: $TEMPLATE_NAME"

    # Setup log
    mkdir -p "$(dirname "$LOGFILE")"

    # Ensure worktree exists
    ensure_worktree

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

# Show usage if no template specified and asking for help
show_usage() {
    echo "Usage: $0 [TEMPLATE_NAME] [COMMAND]"
    echo ""
    echo "TEMPLATE_NAME (optional, defaults to 'home-buying'):"
    echo "  home-buying     - Real estate and home buying articles"
    echo "  wedding-planning - Wedding and event planning articles"
    echo "  baby-planning   - Baby and parenting articles"
    echo "  job-search      - Career and job search articles"
    echo "  college-planning - Education and college articles"
    echo "  budget-planning - Personal finance articles"
    echo "  fitness-journey - Health and wellness articles"
    echo "  travel-planning - Travel and adventure articles"
    echo "  moving-relocation - Moving and relocation articles"
    echo "  [any-template]  - Generic articles for any template"
    echo ""
    echo "COMMANDS:"
    echo "  (no command)    - Generate all articles for template"
    echo "  single         - Generate just one article"
    echo "  status         - Check progress"
    echo "  reset          - Reset progress"
    echo "  help           - Show this help"
    echo ""
    echo "Examples:"
    echo "  $0 home-buying              # Generate all home buying articles"
    echo "  $0 wedding-planning single  # Generate one wedding article"
    echo "  $0 baby-planning status     # Check baby planning progress"
}

# Handle arguments - need to handle template name as first arg
COMMAND="${2:-main}"
if [[ "$1" == "help" || "$1" == "--help" || "$1" == "-h" ]]; then
    show_usage
    exit 0
fi

# If first arg looks like a command and no template specified, use default template
if [[ "$1" =~ ^(status|reset|single|help)$ ]]; then
    TEMPLATE_NAME="home-buying"
    COMMAND="$1"
    LOGFILE="$SCRIPT_DIR/article-generation-${TEMPLATE_NAME}.log"
    PROGRESS_FILE="$SCRIPT_DIR/.article-progress-${TEMPLATE_NAME}"
    TOPICS_STRING=$(get_topics_for_template "$TEMPLATE_NAME")
    read -ra TOPICS <<< "$TOPICS_STRING"
fi

case "$COMMAND" in
    "status")
        current_index=$(get_current_index)
        echo "Template: $TEMPLATE_NAME"
        echo "Progress: $current_index/${#TOPICS[@]} articles completed"
        if [[ $current_index -lt ${#TOPICS[@]} ]]; then
            next_topic=$(get_next_topic)
            echo "Next topic: $(echo "$next_topic" | sed 's/-/ /g' | sed 's/\b\w/\U&/g')"
        fi
        ;;
    "reset")
        rm -f "$PROGRESS_FILE"
        echo "Progress reset to 0 for template: $TEMPLATE_NAME"
        ;;
    "single")
        # Setup log and ensure worktree for single mode
        mkdir -p "$(dirname "$LOGFILE")"
        ensure_worktree

        topic=$(get_next_topic)
        if [[ $? -eq 0 ]]; then
            run_article_generation "$topic"
            current_index=$(get_current_index)
            update_progress $((current_index + 1))
        else
            echo "All articles completed for template: $TEMPLATE_NAME"
        fi
        ;;
    "help")
        show_usage
        ;;
    *)
        main
        ;;
esac