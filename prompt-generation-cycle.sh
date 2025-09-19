#!/bin/bash

# Template Prompt Generation Cycle Script
# Generates complete GuidanceTemplate with sections, reflection prompts, and expert tips

set -e

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Get template name from command line argument
TEMPLATE_NAME="$1"

if [ -z "$TEMPLATE_NAME" ]; then
    echo -e "${RED}Usage: $0 <template-name>${NC}"
    echo "Example: $0 career-change"
    exit 1
fi

# Log function with timestamp
log() {
    echo -e "${BLUE}$(date '+%Y-%m-%d %H:%M:%S') - $1${NC}"
}

success() {
    echo -e "${GREEN}$(date '+%Y-%m-%d %H:%M:%S') - $1${NC}"
}

warning() {
    echo -e "${YELLOW}$(date '+%Y-%m-%d %H:%M:%S') - $1${NC}"
}

error() {
    echo -e "${RED}$(date '+%Y-%m-%d %H:%M:%S') - $1${NC}"
}

# Check if template worktree exists
WORKTREE_PATH="../templata-${TEMPLATE_NAME}"
if [ ! -d "$WORKTREE_PATH" ]; then
    error "Worktree not found: $WORKTREE_PATH"
    exit 1
fi

log "Starting Template Prompt Generation Cycle for template: $TEMPLATE_NAME"

# Check if worktree exists and has src/data directory
if [ ! -d "$WORKTREE_PATH/src/data" ]; then
    log "Creating src/data directory structure in worktree"
    mkdir -p "$WORKTREE_PATH/src/data"
fi

# Generate the template with prompts using Claude
log "Generating complete template structure..."

# Create a comprehensive prompt for template generation
GENERATION_PROMPT="Generate a complete GuidanceTemplate TypeScript file for the life moment: $TEMPLATE_NAME

Requirements:
1. Follow the exact structure of the wedding planning template
2. Generate exactly 6 sections relevant to this life moment
3. Each section should have exactly 17 reflection prompts (100+ total prompts)
4. Include 5-7 expert tips relevant to this life moment
5. Use appropriate emoji icon for this template
6. Set category as 'life-events'
7. Prompts should use categories: 'consideration', 'planning', 'decision', 'research'
8. Include helpful helpText for each prompt (2-3 sentences minimum)
9. Make prompts specific, actionable, and deeply thoughtful for this life moment
10. Export as: ${TEMPLATE_NAME}Template

Target: 100+ expert-level reflection prompts total (6 sections × 17 prompts each)
Quality: Each prompt should be sophisticated and provide genuine guidance value
Template should be comprehensive and exceed the depth of existing templates.
File should be importable TypeScript that exports the template object.

DO NOT include resources field - it's optional and not used.

Template structure:
- id: '${TEMPLATE_NAME}'
- title: Human readable title
- description: Brief description
- category: 'life-events'
- icon: appropriate emoji
- sections: Array of exactly 6 sections with 17 reflectionPrompts each
- expertTips: Array of 5-7 expert tips"

# Call Claude to generate the template
log "Running template generation..."
claude_response=$(claude_code "$GENERATION_PROMPT")

# Save the generated template to the worktree
TEMPLATE_FILE="$WORKTREE_PATH/src/data/templates.ts"
echo "import { GuidanceTemplate } from '@/types/template';" > "$TEMPLATE_FILE"
echo "" >> "$TEMPLATE_FILE"
echo "$claude_response" >> "$TEMPLATE_FILE"

success "Template file generated: $TEMPLATE_FILE"

# Verify the generated file is valid TypeScript
log "Validating generated template..."
if cd "$WORKTREE_PATH" && npx tsc --noEmit --skipLibCheck "$TEMPLATE_FILE" 2>/dev/null; then
    success "Template validation passed"
else
    warning "Template validation failed - manual review may be needed"
fi

log "Template generation complete for: $TEMPLATE_NAME"
log "Generated file: $TEMPLATE_FILE"

success "TEMPLATE GENERATION COMPLETE"