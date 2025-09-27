#!/bin/bash

# Fast batch template generation - audit first, then process only incomplete ones
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

log_colored "$BLUE" "🔍 AUDIT PHASE: Checking ${#WORKTREES[@]} worktrees for template completion status..."

# Phase 1: Fast audit - identify incomplete worktrees
INCOMPLETE_WORKTREES=()
COMPLETE_COUNT=0
INCOMPLETE_COUNT=0

for worktree in "${WORKTREES[@]}"; do
    if [ ! -d "$worktree" ]; then
        continue
    fi

    template=$(basename "$worktree" | sed 's/templata-//')

    # Check if template file exists in worktree with new naming convention
    if [ -f "$worktree/src/data/templates/${template}-template.ts" ]; then
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
    log_colored "$GREEN" "🎉 All template files already complete!"
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

        log_colored "$YELLOW" "Generating template for: $template"

        cd "$worktree"

        (
            claude --print --dangerously-skip-permissions --add-dir . -p "Generate ONE comprehensive template structure for ${template_readable}.

TEMPLATE for $template_readable

REQUIREMENTS:
- Create structured template data as plain text in the exact format below
- Use proper title case for the title
- Choose appropriate category and Lucide icon
- Generate 15-25 comprehensive, relevant tags

OUTPUT FORMAT (save to ${template}-template.txt):
TITLE: [Template Title in Title Case]
DESCRIPTION: [Brief description of what this template helps with]
CATEGORY: [Category like 'Life Planning', 'Career & Finance', 'Health & Wellness', etc.]
ICON: [Lucide icon name like 'home', 'calendar', 'heart', 'briefcase', etc.]
DIFFICULTY: [beginner, intermediate, or advanced]
ESTIMATEDTIME: [Time estimate like '30-60 minutes', '1-2 hours', '2-4 weeks', etc.]
TAGS: [comma-separated list of 15-25 relevant tags]

TEMPLATE STRUCTURE:
\`\`\`typescript
import { GuidanceTemplate } from '@/types/template';

export const [camelCaseName]Template: GuidanceTemplate = {
  id: '${template}',
  title: '[Your title here]',
  description: '[Your description here]',
  category: '[Your category here]',
  icon: '[Your icon here]',
  difficulty: '[Your difficulty here]',
  estimatedTime: '[Your time estimate here]',
  tags: [/* Your tags here */],
  sections: [],
  expertTips: [],
  lastUpdated: new Date().toISOString(),
  version: '1.0.0'
};
\`\`\`

When complete, respond exactly: 'TEMPLATE GENERATION COMPLETE - ${template}'" > ${template}-template.txt 2>&1

            if [ $? -eq 0 ] && [ -f "${template}-template.txt" ]; then
                echo "✅ $template: Template success"
            else
                echo "❌ $template: Template failed"
            fi

            echo "✅ $template: Template completed"
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

    has_template=false
    if [ -f "$worktree/${template}-template.txt" ]; then
        word_count=$(wc -w < "$worktree/${template}-template.txt" 2>/dev/null || echo "0")
        if [ "$word_count" -gt 150 ]; then
            has_template=true
        else
            echo "❌ $template (template file too small: $word_count words)"
            ((incomplete_count++))
        fi
    elif [ -f "$worktree/src/data/template-${template}.ts" ]; then
        has_template=true
    else
        echo "❌ $template (missing template file)"
        ((incomplete_count++))
    fi
done

if [ "$incomplete_count" -gt 0 ]; then
    log_colored "$YELLOW" "⚠️  Found $incomplete_count incomplete files. Restarting..."
    sleep 5
    exec "$0" "$@"
else
    log_colored "$GREEN" "🎉 All template files complete!"
fi