#!/bin/bash

# Batch marketing page text generation for all templates
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

    # Check if marketing file exists in worktree with new naming convention
    if [ -f "$worktree/src/data/marketing/${template}-marketing.ts" ]; then
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
    log_colored "$GREEN" "🎉 All landing page files already complete!"
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

        log_colored "$YELLOW" "Generating landing page content for: $template"

        cd "$worktree"

        (
            result=$(claude --print --dangerously-skip-permissions --add-dir . -p "Generate NEW landing page content for a ${template_readable} template. Ignore any existing content and create fresh content following this structure:

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

Make everything specific to ${template_readable} - avoid generic language. Focus on the real challenges, benefits, and outcomes for this life moment.

OUTPUT ONLY the landing page content structure - do not provide commentary or analysis." 2>&1)
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

log_colored "$GREEN" "Generation cycle complete!"

# Final verification
log_colored "$BLUE" "🔍 FINAL VERIFICATION: Checking completion status..."

incomplete_count=0
for worktree in "${WORKTREES[@]}"; do
    if [ ! -d "$worktree" ]; then
        continue
    fi

    template=$(basename "$worktree" | sed 's/templata-//')

    if [ -f "../src/data/landing-pages/${template}-landing.ts" ] || ([ -f "$worktree/${template}-landing-page.txt" ] && [ $(wc -w < "$worktree/${template}-landing-page.txt" 2>/dev/null || echo "0") -gt 300 ]); then
        continue
    else
        echo "❌ $template (missing landing page file or insufficient content)"
        ((incomplete_count++))
    fi
done

if [ "$incomplete_count" -gt 0 ]; then
    log_colored "$YELLOW" "⚠️  Found $incomplete_count incomplete files. Restarting..."
    sleep 5
    exec "$0" "$@"
else
    log_colored "$GREEN" "🎉 All landing page files complete!"
fi