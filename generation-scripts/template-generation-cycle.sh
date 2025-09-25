#!/bin/bash

# Template Generation Cycle Script
# Generates individual template-*.ts files and template registry automatically

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CURRENT_DIR="$(pwd)"
DATA_DIR="$CURRENT_DIR/src/data"
REGISTRY_DIR="$CURRENT_DIR/src/registry"

# Auto-detect template name from current directory
TEMPLATE_NAME=""
if [[ "$CURRENT_DIR" =~ templata-(.+)$ ]]; then
    TEMPLATE_NAME="${BASH_REMATCH[1]}"
elif [[ "$1" ]]; then
    TEMPLATE_NAME="$1"
else
    echo "Error: Could not detect template name from current directory."
    echo "Make sure you're in a templata-{template-name} worktree or pass template name as argument."
    exit 1
fi

LOGFILE="$CURRENT_DIR/template-generation-${TEMPLATE_NAME}.log"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" | tee -a "$LOGFILE"
}

log_colored() {
    local color=$1
    local message=$2
    echo -e "${color}$(date '+%Y-%m-%d %H:%M:%S') - $message${NC}" | tee -a "$LOGFILE"
}





# Create generation prompt for template
create_template_generation_prompt() {
    local template="$1"
    local template_name="$2"

    cat << EOF
Generate a comprehensive template file for ${template_name}.

TEMPLATE: ${template}
NAME: ${template_name}

REQUIREMENTS:
- Create a TypeScript template file at src/data/template-${template}.ts
- Choose appropriate camelCase export name (e.g., homeBuyingTemplate, threeDPrintingTemplate)
- Use proper title case for title field (e.g., "3D Printing", "Home Buying")
- Determine best category for this template
- Choose most appropriate Lucide icon name
- Generate 15-25 comprehensive, relevant tags
- Tags should cover all aspects: tools, techniques, concepts, related topics, common terms
- Make tags specific and useful for search/filtering
- Keep sections, resources, expertTips, reflectionPrompts arrays empty (they'll be populated later)

You decide:
- Category (e.g., "Personal Life", "Business & Career", "Health & Wellness", etc.)
- Icon (Lucide icon name like "Home", "Rocket", "Heart", "Code", etc.)
- Description (compelling and helpful)
- Difficulty level (beginner/intermediate/advanced)
- Estimated time
- Comprehensive tags

TEMPLATE STRUCTURE:
\`\`\`typescript
import { GuidanceTemplate } from '@/types/template';

export const [camelCaseName]Template: GuidanceTemplate = {
  id: "${template}",
  title: "${template_name}",
  description: "[Write compelling description]",
  category: "[Choose appropriate category]",
  icon: "[Choose Lucide icon name]",
  difficulty: "[beginner/intermediate/advanced]",
  estimatedTime: "[realistic timeframe]",
  tags: [/* Generate 15-25 comprehensive tags here */],
  sections: [],
  expertTips: [],
  lastUpdated: new Date().toISOString(),
  version: "1.0.0"
};
\`\`\`

Generate the complete file with all fields populated appropriately for ${template_name}.

When complete, respond exactly: "TEMPLATE GENERATION COMPLETE - ${template}"
EOF
}

# Create individual template-*.ts file
create_template_file() {
    local template="$1"
    local template_name=$(echo "$template" | sed 's/-/ /g' | sed 's/\b\w/\U&/g')

    log_colored "$YELLOW" "Generating template file with Claude: template-${template}.ts"

    # Generate template with Claude
    local generation_prompt=$(create_template_generation_prompt "$template" "$template_name")

    cd "$CURRENT_DIR" && claude --print --dangerously-skip-permissions --add-dir "$CURRENT_DIR" -p "$generation_prompt" | tee -a "$LOGFILE"

    # Brief pause
    sleep 3

    log_colored "$GREEN" "Completed template generation for: $template"
}

# Generate template registry
generate_template_registry() {
    local registry_file="$REGISTRY_DIR/templates.ts"

    log_colored "$YELLOW" "Generating template registry..."

    # Start the registry file
    cat > "$registry_file" << 'EOF'
import { GuidanceTemplate } from '@/types/template';
import { getTemplateExperts } from '@/lib/expert-badges';

EOF

    # Add imports for all templates
    while IFS= read -r template; do
        [[ "$template" =~ ^#.*$ ]] && continue
        [[ -z "$template" ]] && continue

        local camelCase=$(echo "$template" | sed 's/-\([a-z]\)/\U\1/g')
        echo "import { ${camelCase}Template } from '@/data/template-${template}';" >> "$registry_file"
    done < "$TEMPLATE_LIST_FILE"

    # Add interface and helper function
    cat >> "$registry_file" << 'EOF'

export interface TemplateRegistryEntry {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  url: string;
  popular?: boolean;
  featured?: boolean;
  expertVerified?: boolean;
  color: string;
  iconColor: string;
  template: GuidanceTemplate;
}

export function getTemplate(baseTemplate: GuidanceTemplate): GuidanceTemplate {
  return baseTemplate;
}

export const templateRegistry: TemplateRegistryEntry[] = [
EOF

    # Add all template entries
    while IFS= read -r template; do
        [[ "$template" =~ ^#.*$ ]] && continue
        [[ -z "$template" ]] && continue

        local template_name=$(echo "$template" | sed 's/-/ /g' | sed 's/\b\w/\U&/g')
        local category=$(get_template_category "$template")
        local icon=$(get_template_icon "$template")
        local colors=$(get_template_color "$template")
        local color_bg=$(echo "$colors" | cut -d'|' -f1)
        local color_icon=$(echo "$colors" | cut -d'|' -f2)
        local camelCase=$(echo "$template" | sed 's/-\([a-z]\)/\U\1/g')

        # Set popular flag for first 10 templates
        local popular="false"
        local featured="false"
        local expert_verified="false"

        cat >> "$registry_file" << EOF
  {
    id: "${template}",
    name: "${template_name}",
    description: "Comprehensive guidance and tools for ${template_name,,}.",
    category: "${category}",
    icon: "${icon}",
    url: "/${template}/app",
    popular: ${popular},
    featured: ${featured},
    expertVerified: ${expert_verified},
    color: "${color_bg}",
    iconColor: "${color_icon}",
    template: getTemplate(${camelCase}Template)
  },
EOF
    done < "$TEMPLATE_LIST_FILE"

    # Close the array and add helper functions
    cat >> "$registry_file" << 'EOF'
];

// Helper functions
export const getTemplateById = (id: string): TemplateRegistryEntry | undefined => {
  return templateRegistry.find(template => template.id === id);
};

export const getTemplatesByCategory = (category: string): TemplateRegistryEntry[] => {
  return templateRegistry.filter(template => template.category === category);
};

export const getFeaturedTemplates = (): TemplateRegistryEntry[] => {
  return templateRegistry.filter(template => template.featured);
};

export const getPopularTemplates = (): TemplateRegistryEntry[] => {
  return templateRegistry.filter(template => template.popular);
};
EOF

    log_colored "$GREEN" "Generated template registry: $registry_file"
}

# Main function
main() {
    log_colored "$BLUE" "Starting Template Generation for: $TEMPLATE_NAME"

    # Setup directories
    mkdir -p "$DATA_DIR"
    mkdir -p "$(dirname "$LOGFILE")"

    # Generate template file for current template
    create_template_file "$TEMPLATE_NAME"

    log_colored "$GREEN" "Template generation complete!"
    log_colored "$GREEN" "Generated template file: template-$TEMPLATE_NAME.ts"
}

# Show usage
show_usage() {
    echo "Usage: $0 [TEMPLATE_NAME] [COMMAND]"
    echo ""
    echo "TEMPLATE_NAME (optional):"
    echo "  If not provided, auto-detects from current templata-{name} worktree"
    echo ""
    echo "COMMANDS:"
    echo "  (no command)    - Generate template file for current template"
    echo "  status         - Show current status"
    echo "  help           - Show this help"
    echo ""
    echo "Examples:"
    echo "  $0              # Generate template file for current worktree"
    echo "  $0 home-buying  # Generate template file for home-buying"
    echo "  $0 status       # Check current status"
}

# Handle arguments
COMMAND="${1:-main}"

case "$COMMAND" in
    "status")
        echo "Template: $TEMPLATE_NAME"
        echo "Template file: $([ -f "$DATA_DIR/template-$TEMPLATE_NAME.ts" ] && echo "exists" || echo "missing")"
        echo "Current directory: $CURRENT_DIR"
        ;;
    "help")
        show_usage
        ;;
    *)
        main
        ;;
esac