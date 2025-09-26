#!/bin/bash

# Fast batch template generation for all templates
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

        # Skip if template file already exists with substantial content
        if [ -f "$worktree/${template}-template.txt" ]; then
            word_count=$(wc -w < "$worktree/${template}-template.txt")
            if [ "$word_count" -gt 100 ]; then
                echo "✅ Skipping $template (already has template file with $word_count words)"
                continue
            fi
        fi

        # Also skip if .ts template file exists
        if [ -f "$worktree/src/data/template-${template}.ts" ]; then
            echo "✅ Skipping $template (already has .ts template file)"
            continue
        fi

        template_readable=$(echo "$template" | sed 's/-/ /g' | sed 's/\b\w/\U&/g')

        log_colored "$YELLOW" "Generating template for: $template"

        cd "$worktree"

        (
            result=$(claude --print --dangerously-skip-permissions --add-dir . -p "Generate ONE comprehensive template structure for ${template_readable}.

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

When complete, respond exactly: 'TEMPLATE GENERATION COMPLETE - ${template}'" 2>&1)

            if [ $? -eq 0 ] && [ -n "$result" ]; then
                echo "$result" > ${template}-template.txt
                echo "✅ $template: Template success"
            else
                echo "❌ $template: Template failed - $result"
            fi

            echo "✅ $template: Template completed"
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

    if [ -f "$worktree/${template}-template.txt" ]; then
        word_count=$(wc -w < "$worktree/${template}-template.txt")
        if [ "$word_count" -gt 100 ]; then
            echo "✅ $template ($word_count words in template file)"
        else
            echo "❌ $template (template file too small: $word_count words)"
            ((incomplete_count++))
        fi
    else
        echo "❌ $template (missing template file)"
        ((incomplete_count++))
    fi
done

if [ "$incomplete_count" -gt 0 ]; then
    log_colored "$YELLOW" "Found $incomplete_count incomplete files. Restarting..."
    sleep 5
    exec "$0" "$@"
else
    log_colored "$GREEN" "All template files complete! 🎉"
fi