#!/bin/bash
# Generate 50 prompts for all templates as simple txt files
set -e

echo "Batch Prompt Text Generation - Simple TXT Output"

# Get all template names
TEMPLATES=()
for dir in ../templata-*/; do
    if [ -d "$dir" ]; then
        template_name=$(basename "$dir" | sed 's/templata-//')
        TEMPLATES+=("$template_name")
    fi
done

echo "Found ${#TEMPLATES[@]} templates"

# Create one big batch request for all templates
cat > batch-prompt-request.txt << 'EOF'
Generate 50 practical action prompts for each of the following life templates. For each template, create exactly 50 short, actionable prompts (1-10 words each) that help people take concrete steps.

Output format for each template:
TEMPLATE: [template-name]
1. [prompt text]
2. [prompt text]
...
50. [prompt text]

Templates to process:
EOF

# Add all template names to the request
for template in "${TEMPLATES[@]}"; do
    echo "- $template" >> batch-prompt-request.txt
done

echo ""
echo "Generating prompts for all ${#TEMPLATES[@]} templates in one call..."

# Generate all prompts in one Claude call
claude batch-prompt-request.txt > all-prompts-output.txt 2>&1

echo "Completed! Output saved to all-prompts-output.txt"