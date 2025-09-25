#!/bin/bash

# Template Generation Cycle Script
# Generates individual template-*.ts files and template registry automatically

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CURRENT_DIR="$(pwd)"
DATA_DIR="$CURRENT_DIR/src/data"
REGISTRY_DIR="$CURRENT_DIR/src/registry"

# Handle batch mode or single template
BATCH_MODE=false
BATCH_SIZE=5
START_INDEX=0
FORCE_REGENERATE=false
TEMPLATE_LIST_FILE=""

# Parse arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        --batch)
            BATCH_MODE=true
            shift
            ;;
        --batch-size)
            BATCH_SIZE="$2"
            shift 2
            ;;
        --start)
            START_INDEX="$2"
            shift 2
            ;;
        --force)
            FORCE_REGENERATE=true
            shift
            ;;
        --file)
            TEMPLATE_LIST_FILE="$2"
            shift 2
            ;;
        *)
            TEMPLATE_NAME="$1"
            shift
            ;;
    esac
done

# Auto-detect template name from current directory if not provided (only for non-batch mode)
if [[ -z "$TEMPLATE_NAME" && "$BATCH_MODE" == false ]]; then
    if [[ "$CURRENT_DIR" =~ templata-(.+)$ ]]; then
        TEMPLATE_NAME="${BASH_REMATCH[1]}"
    else
        echo "Error: Could not detect template name from current directory."
        echo "Make sure you're in a templata-{template-name} worktree or pass template name as argument."
        echo "Or use --batch mode to process multiple templates."
        exit 1
    fi
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
# Batch processing function
process_batch() {
    local template_list

    if [[ -n "$TEMPLATE_LIST_FILE" ]]; then
        template_list="$TEMPLATE_LIST_FILE"
    else
        template_list="$SCRIPT_DIR/todo/new-templates-list.txt"
    fi

    if [[ ! -f "$template_list" ]]; then
        log_colored "$RED" "Template list not found: $template_list"
        exit 1
    fi

    # Read templates into array
    TEMPLATES=()
    while IFS= read -r template; do
        [[ -n "$template" ]] && TEMPLATES+=("$template")
    done < "$template_list"
    local total_templates=${#TEMPLATES[@]}

    log_colored "$BLUE" "🚀 Batch Template Generation"
    log_colored "$BLUE" "=========================="
    log_colored "$YELLOW" "Total templates: $total_templates"
    log_colored "$YELLOW" "Batch size: $BATCH_SIZE"
    log_colored "$YELLOW" "Starting from index: $START_INDEX"
    echo ""

    # Calculate batch range
    local end_index=$((START_INDEX + BATCH_SIZE - 1))
    if [[ $end_index -ge $total_templates ]]; then
        end_index=$((total_templates - 1))
    fi

    if [[ $START_INDEX -ge $total_templates ]]; then
        log_colored "$GREEN" "✅ All templates processed!"
        exit 0
    fi

    # Process each template in batch
    for ((i=START_INDEX; i<=end_index; i++)); do
        local template="${TEMPLATES[i]}"
        local worktree_dir="../templata-$template"

        log_colored "$BLUE" "[$((i + 1))/$total_templates] Processing: $template"

        # Check if worktree exists
        if [[ ! -d "$worktree_dir" ]]; then
            log_colored "$RED" "  ❌ Worktree not found: $worktree_dir"
            continue
        fi

        # Go to worktree and run template generation
        cd "$worktree_dir"
        mkdir -p "src/data"

        # Check if template file already exists (unless forced)
        local template_file="src/data/template-$template.ts"
        if [[ -f "$template_file" && "$FORCE_REGENERATE" != "true" ]]; then
            log_colored "$YELLOW" "  ⏭️  Template file already exists, skipping: $template_file"
            cd "$SCRIPT_DIR"
            continue
        fi

        log_colored "$YELLOW" "  🔨 Generating template data..."
        create_template_file "$template"

        # Brief pause between templates
        sleep 5

        # Return to scripts dir
        cd "$SCRIPT_DIR"
        echo ""
    done

    # Show next batch info
    local next_start=$((end_index + 1))
    if [[ $next_start -lt $total_templates ]]; then
        local remaining=$((total_templates - next_start))
        log_colored "$YELLOW" "Next batch: $remaining templates remaining"
        log_colored "$YELLOW" "Run: ./template-generation-cycle.sh --batch --start $next_start"
    else
        log_colored "$GREEN" "🎉 ALL TEMPLATES COMPLETE!"
    fi
}

main() {
    if [[ "$BATCH_MODE" == true ]]; then
        process_batch
    else
        log_colored "$BLUE" "Starting Template Generation for: $TEMPLATE_NAME"

        # Setup directories
        mkdir -p "$DATA_DIR"
        mkdir -p "$(dirname "$LOGFILE")"

        # Generate template file for current template
        create_template_file "$TEMPLATE_NAME"

        log_colored "$GREEN" "Template generation complete!"
        log_colored "$GREEN" "Generated template file: template-$TEMPLATE_NAME.ts"
    fi
}

# Show usage
show_usage() {
    echo "Usage: $0 [TEMPLATE_NAME] [OPTIONS] [COMMAND]"
    echo ""
    echo "TEMPLATE_NAME (optional):"
    echo "  If not provided, auto-detects from current templata-{name} worktree"
    echo ""
    echo "OPTIONS:"
    echo "  --batch                 - Enable batch processing mode"
    echo "  --batch-size N          - Process N templates per batch (default: 5)"
    echo "  --start N               - Start from template index N (default: 0)"
    echo "  --force                 - Regenerate even if template file exists"
    echo ""
    echo "COMMANDS:"
    echo "  (no command)    - Generate template file for current template"
    echo "  status         - Show current status"
    echo "  help           - Show this help"
    echo ""
    echo "Examples:"
    echo "  $0                                    # Generate template file for current worktree"
    echo "  $0 home-buying                       # Generate template file for home-buying"
    echo "  $0 --batch                           # Process new templates in batch (skips existing)"
    echo "  $0 --batch --force                   # Process all templates (regenerates existing)"
    echo "  $0 --batch --batch-size 10 --start 5 # Process 10 templates starting from index 5"
    echo "  $0 status                            # Check current status"
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