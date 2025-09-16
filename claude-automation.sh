#!/bin/bash

# Automated Article Generation for Templata
# This script fully automates the Claude interaction process

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ARTICLE_WORKTREE="../templata-article-generation"
CLAUDE_CMD="claude"

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

print_step() { echo -e "${BLUE}=== $1 ===${NC}"; }
print_success() { echo -e "${GREEN}✓ $1${NC}"; }
print_warning() { echo -e "${YELLOW}⚠ $1${NC}"; }
print_error() { echo -e "${RED}✗ $1${NC}"; }

# Get next topic
get_next_topic() {
    local progress_file="$SCRIPT_DIR/.article-progress"
    local current_index=0

    if [[ -f "$progress_file" ]]; then
        current_index=$(cat "$progress_file")
    fi

    if [[ $current_index -ge ${#TOPICS[@]} ]]; then
        echo ""
        return 1
    fi

    echo "${TOPICS[$current_index]}"
    echo $((current_index + 1)) > "$progress_file"
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
- No first person language
- Flowing paragraphs with bold numbers
- Author: "Templata"
- Category: "Real Estate & Home Buying"
- Add to src/registry/blogs.ts manualBlogPosts array

When complete, respond exactly: "ARTICLE GENERATION COMPLETE - $topic_readable"
EOF
}

# Create review prompt
create_review_prompt() {
    cat << EOF
Review the article you just created against master prompt standards:
- 1,200-1,600 words
- No first person
- Objective voice
- Flowing paragraphs with strategic bold numbers
- Added to src/registry/blogs.ts

If it meets standards, respond exactly: "ARTICLE REVIEW COMPLETE - READY FOR NEXT"
If not, fix it first.
EOF
}

# Send prompt to Claude and wait for specific response
send_prompt_and_wait() {
    local prompt="$1"
    local expected_response_pattern="$2"
    local timeout_seconds="${3:-300}"  # 5 minute default timeout

    print_step "Sending prompt to Claude..."

    # Create temp files for communication
    local prompt_file=$(mktemp)
    local response_file=$(mktemp)

    echo "$prompt" > "$prompt_file"

    # Send prompt to Claude (this depends on how Claude CLI works)
    # We'll use expect or similar to automate the interaction
    expect << EOF
set timeout $timeout_seconds
spawn $CLAUDE_CMD
expect ">" { send_user "Claude started\n" }
send [read [open "$prompt_file" r]]
send "\n"

expect {
    "$expected_response_pattern" {
        send_user "✓ Received expected response\n"
        exit 0
    }
    timeout {
        send_user "✗ Timeout waiting for response\n"
        exit 1
    }
}
EOF

    local exit_code=$?
    rm -f "$prompt_file" "$response_file"
    return $exit_code
}

# Main automation loop
main() {
    print_step "Starting Automated Article Generation"

    # Check dependencies
    if ! command -v expect &> /dev/null; then
        print_error "expect command required for automation. Install with: brew install expect"
        exit 1
    fi

    if ! command -v "$CLAUDE_CMD" &> /dev/null; then
        print_error "Claude CLI not found. Make sure it's installed and in PATH"
        exit 1
    fi

    # Switch to worktree
    if [[ -d "$ARTICLE_WORKTREE" ]]; then
        cd "$ARTICLE_WORKTREE"
        print_success "Switched to article generation worktree"
    else
        print_error "Article worktree not found at $ARTICLE_WORKTREE"
        exit 1
    fi

    # Process all articles
    while true; do
        topic=$(get_next_topic)
        if [[ $? -ne 0 ]]; then
            print_success "All articles completed!"
            break
        fi

        topic_readable=$(echo "$topic" | sed 's/-/ /g' | sed 's/\b\w/\U&/g')
        print_step "Processing: $topic_readable"

        # Generate article
        generation_prompt=$(create_generation_prompt "$topic")
        print_step "Generating article..."

        if send_prompt_and_wait "$generation_prompt" "ARTICLE GENERATION COMPLETE - $topic_readable" 600; then
            print_success "Article generated successfully"
        else
            print_error "Article generation failed or timed out"
            exit 1
        fi

        # Review article
        review_prompt=$(create_review_prompt)
        print_step "Reviewing article quality..."

        if send_prompt_and_wait "$review_prompt" "ARTICLE REVIEW COMPLETE - READY FOR NEXT" 300; then
            print_success "Article review completed"
        else
            print_error "Article review failed or timed out"
            exit 1
        fi

        print_success "Completed: $topic_readable"
        echo ""
    done

    print_success "All articles generated successfully!"
}

# Handle arguments
case "${1:-}" in
    "status")
        progress_file="$SCRIPT_DIR/.article-progress"
        if [[ -f "$progress_file" ]]; then
            current_index=$(cat "$progress_file")
            print_step "Progress: $current_index/${#TOPICS[@]} articles completed"
        else
            print_step "Progress: 0/${#TOPICS[@]} articles completed"
        fi
        ;;
    "reset")
        rm -f "$SCRIPT_DIR/.article-progress"
        print_success "Progress reset"
        ;;
    *)
        main
        ;;
esac