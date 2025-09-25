#!/bin/bash
# Just loop the working prompt generation script for all templates
set -e

echo "Batch Prompt Generation - Using working script for each template"

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

    # Just run the working script for this template
    if ./prompt-generation-cycle.sh "$template" 2>&1 | tee "batch-prompt-$template.log"; then
        echo "✅ Completed: $template"
    else
        echo "❌ Failed: $template"
    fi

    sleep 2
done

echo "All templates processed!"