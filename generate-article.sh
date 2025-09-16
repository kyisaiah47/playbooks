#!/bin/bash

# Article Generation Script for Templata
# This script guides Claude through generating one high-quality article at a time

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ARTICLE_WORKTREE="../templata-article-generation"

# Article topics queue - add new topics here
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

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_step() {
    echo -e "${BLUE}=== $1 ===${NC}"
}

print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

# Function to get next article topic
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

# Function to create article generation prompt
create_generation_prompt() {
    local topic="$1"
    local topic_readable=$(echo "$topic" | sed 's/-/ /g' | sed 's/\b\w/\U&/g')

    cat << EOF
You are about to generate a single, high-quality article for the Templata home buying blog.

TOPIC: $topic_readable

INSTRUCTIONS:
1. First, read and understand the master prompt at: claude-resource-generation-master-prompt.md
2. Generate ONE comprehensive article following the master prompt guidelines
3. The article should be 1,200-1,600 words (8-12 minute read)
4. Follow the objective voice guidelines (no first person)
5. Include specific numbers, timelines, and actionable information
6. Use natural flowing paragraphs with strategically placed bold numbers
7. Structure with clear headers and highlight-worthy insights

REQUIREMENTS:
- Author: "Templata"
- Category: "Real Estate & Home Buying"
- Type: Choose appropriate type (guide/article/checklist/tool)
- Difficulty: Choose appropriate level (beginner/intermediate/expert)
- Include proper SEO metadata
- Add to src/registry/blogs.ts in the manualBlogPosts array

Focus on creating ONE excellent article rather than rushing through multiple articles.

WHEN COMPLETE:
After you finish generating and adding the article to src/registry/blogs.ts, respond with exactly:

"ARTICLE GENERATION COMPLETE - $topic_readable"

This signals that the article is done and ready for review.

Ready to generate the article for: $topic_readable?
EOF
}

# Function to create review prompt
create_review_prompt() {
    cat << EOF

ARTICLE REVIEW CHECKPOINT:

Before proceeding to the next article, please:

1. Review what you just created
2. Ensure it meets the master prompt standards:
   - No first-person language
   - Objective, authoritative voice
   - 1,200-1,600 words
   - Flowing paragraphs with strategic bold numbers
   - Clear, actionable information
   - Proper SEO and metadata

3. Confirm the article has been added to src/registry/blogs.ts

WHEN REVIEW IS COMPLETE:
If the article meets standards, respond with exactly: "ARTICLE REVIEW COMPLETE - READY FOR NEXT"
If it needs improvements, make them now before proceeding.

Only after confirming quality with the exact response above will we move to the next article.
EOF
}

# Main execution
main() {
    print_step "Templata Article Generation System"

    # Check if we're in the right directory
    if [[ ! -f "claude-resource-generation-master-prompt.md" ]]; then
        print_error "Must run from Templata root directory"
        exit 1
    fi

    # Get next topic
    topic=$(get_next_topic)
    if [[ $? -ne 0 ]]; then
        print_success "All articles completed!"
        exit 0
    fi

    print_step "Next Article Topic: $topic"

    # Switch to article generation worktree
    if [[ -d "$ARTICLE_WORKTREE" ]]; then
        print_step "Switching to article generation worktree"
        cd "$ARTICLE_WORKTREE"
    fi

    print_step "Launching Claude in worktree for article generation"

    # Create the prompt file
    create_generation_prompt "$topic" > /tmp/claude_prompt.txt

    # Switch to worktree and launch Claude
    cd "$ARTICLE_WORKTREE"

    print_success "Opening Claude Code in worktree..."
    print_warning "Prompt has been created. Claude should now generate the article."

    # Open Claude Code in the worktree
    if command -v claude &> /dev/null; then
        claude .
    elif command -v code &> /dev/null; then
        code .
    else
        print_warning "Please open Claude Code manually in: $ARTICLE_WORKTREE"
    fi

    echo ""
    print_step "PROMPT FOR CLAUDE:"
    cat /tmp/claude_prompt.txt
    echo ""
    print_warning "After Claude generates the article, run: bash generate-article.sh review"
}

# Review mode
review_mode() {
    print_step "Article Review Mode"
    create_review_prompt

    echo ""
    print_warning "After Claude confirms 'ARTICLE COMPLETE', run this script again for the next article"
    echo ""
    print_step "Command for next article:"
    echo "bash generate-article.sh"
}

# Handle arguments
case "${1:-}" in
    "review")
        review_mode
        ;;
    "reset")
        rm -f "$SCRIPT_DIR/.article-progress"
        print_success "Progress reset. Starting from first article."
        ;;
    "status")
        progress_file="$SCRIPT_DIR/.article-progress"
        if [[ -f "$progress_file" ]]; then
            current_index=$(cat "$progress_file")
            print_step "Progress: $current_index/${#TOPICS[@]} articles completed"
        else
            print_step "Progress: 0/${#TOPICS[@]} articles completed"
        fi
        ;;
    *)
        main
        ;;
esac