#!/bin/bash
# Generate prompts one template at a time - simple and safe
set -e

echo "Simple Prompt Generation - One template at a time"

# Get all template names
TEMPLATES=()
for dir in ../templata-*/; do
    if [ -d "$dir" ]; then
        template_name=$(basename "$dir" | sed 's/templata-//')
        TEMPLATES+=("$template_name")
    fi
done

echo "Found ${#TEMPLATES[@]} templates"

count=0
for template in "${TEMPLATES[@]}"; do
    count=$((count + 1))
    echo "[$count/${#TEMPLATES[@]}] Processing: $template"

    # Create prompt for Claude
    template_readable=$(echo "$template" | sed 's/-/ /g' | sed 's/\b\w/\U&/g')
    prompt="Generate 50 practical action prompts for $template_readable organized into 5 categories (10 prompts each).

CATEGORY 1: Foundation and Understanding (10 prompts)
CATEGORY 2: Planning and Preparation (10 prompts)
CATEGORY 3: Research and Decision Making (10 prompts)
CATEGORY 4: Implementation and Action (10 prompts)
CATEGORY 5: Optimization and Growth (10 prompts)

REQUIREMENTS:
- Each prompt should be concrete, actionable task
- Focus on practical steps someone can complete
- No reflection questions, only tasks to check off
- Format exactly as shown below

OUTPUT FORMAT:
CATEGORY 1: Foundation and Understanding
1. [actionable task]
2. [actionable task]
...
10. [actionable task]

CATEGORY 2: Planning and Preparation
11. [actionable task]
12. [actionable task]
...
20. [actionable task]

Continue this pattern for all 5 categories, ending with prompt 50.

Template: $template_readable"

    # Generate prompts for this one template
    echo "Generating 50 prompts..."
    if claude <<< "$prompt" > "prompts-$template.txt" 2>&1; then
        echo "✅ Completed: $template"
    else
        echo "❌ Failed: $template"
    fi

    # Small delay
    sleep 1
done

# No cleanup needed since we're using heredoc

echo "All templates processed!"