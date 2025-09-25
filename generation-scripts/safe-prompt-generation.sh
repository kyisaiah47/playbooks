#!/bin/bash
# Safe sequential prompt text generation - one at a time
set -e

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}Safe Sequential Prompt Generation${NC}"
echo "Processing templates one at a time to avoid system overload..."

# Get list of all template worktrees
TEMPLATES=()
for dir in ../templata-*/; do
    if [ -d "$dir" ]; then
        template_name=$(basename "$dir" | sed 's/templata-//')
        TEMPLATES+=("$template_name")
    fi
done

echo "Found ${#TEMPLATES[@]} templates to process"

# Process each template sequentially
count=0
for template in "${TEMPLATES[@]}"; do
    count=$((count + 1))
    echo -e "\n${YELLOW}[$count/${#TEMPLATES[@]}] Processing: $template${NC}"

    cd "../templata-$template" || continue

    # Check if prompts already exist
    if [ -f "src/data/prompts.ts" ] && [ -s "src/data/prompts.ts" ]; then
        echo -e "${GREEN}✅ Prompts already exist for $template${NC}"
        cd - > /dev/null
        continue
    fi

    # Generate prompts for this template
    echo "Generating prompts..."
    if cd ../templata && ./prompt-generation-cycle.sh "$template" 2>&1 | tee "../templata-$template/prompt-generation-$template.log"; then
        echo -e "${GREEN}✅ Completed: $template${NC}"
    else
        echo -e "${RED}❌ Failed: $template${NC}"
    fi

    cd - > /dev/null

    # Small delay to avoid overwhelming system
    sleep 2
done

echo -e "\n${GREEN}Sequential prompt generation complete!${NC}"