#!/bin/bash

# =============================================================================
# Setup Template Worktrees - Create separate worktrees for parallel development
# =============================================================================

set -e  # Exit on any error

echo "🌳 Template Worktree Setup"
echo "=========================="

# Show usage if help requested
if [[ "$1" == "-h" ]] || [[ "$1" == "--help" ]]; then
    echo ""
    echo "Usage: $0 [start_index] [max_count]"
    echo ""
    echo "Arguments:"
    echo "  start_index  - Index to start from (0-based, default: 0)"
    echo "  max_count    - Maximum templates to process (default: all)"
    echo ""
    echo "Examples:"
    echo "  $0           # Process all templates"
    echo "  $0 0 10      # Process first 10 templates (0-9)"  
    echo "  $0 10 5      # Process templates 10-14"
    echo "  $0 20        # Process templates starting from index 20"
    echo ""
    exit 0
fi

MAIN_REPO="/Users/ikim1/Downloads/templata"
WORKTREES_DIR="/Users/ikim1/Downloads/templata-worktrees"
TEMPLATES_FILE="$MAIN_REPO/templates-list.json"

# Ensure we're in the main repo
cd "$MAIN_REPO"

# Check if templates-list.json exists
if [[ ! -f "$TEMPLATES_FILE" ]]; then
    echo "❌ templates-list.json not found in $MAIN_REPO"
    exit 1
fi

# Create worktrees directory
mkdir -p "$WORKTREES_DIR"

# Parse template IDs from JSON
echo "📋 Reading template list..."
template_ids=($(cat "$TEMPLATES_FILE" | grep -o '"id": "[^"]*"' | sed 's/"id": "//g' | sed 's/"//g'))

echo "📊 Found ${#template_ids[@]} templates to create worktrees for"

# Handle command line arguments
START_INDEX=0
MAX_COUNT=${#template_ids[@]}

if [[ $# -gt 0 ]]; then
    if [[ "$1" =~ ^[0-9]+$ ]]; then
        START_INDEX=$1
        echo "🎯 Starting from template index: $START_INDEX"
    fi
fi

if [[ $# -gt 1 ]]; then
    if [[ "$2" =~ ^[0-9]+$ ]]; then
        MAX_COUNT=$2
        echo "📊 Maximum templates to process: $MAX_COUNT"
    fi
fi

# Adjust template list based on parameters
if [[ $START_INDEX -gt 0 ]] || [[ $MAX_COUNT -lt ${#template_ids[@]} ]]; then
    end_index=$((START_INDEX + MAX_COUNT))
    if [[ $end_index -gt ${#template_ids[@]} ]]; then
        end_index=${#template_ids[@]}
    fi
    
    echo "📋 Processing templates $START_INDEX to $((end_index-1))"
    template_ids=("${template_ids[@]:$START_INDEX:$MAX_COUNT}")
    echo "📊 Filtered to ${#template_ids[@]} templates"
fi

# Function to create worktree for a template
create_template_worktree() {
    local template_id="$1"
    local branch_name="feature/template-$template_id"
    local worktree_path="$WORKTREES_DIR/$template_id"
    
    echo ""
    echo "🌿 Creating worktree for: $template_id"
    echo "   Branch: $branch_name"
    echo "   Path: $worktree_path"
    
    # Create branch from main if it doesn't exist
    if ! git show-ref --verify --quiet refs/heads/$branch_name; then
        echo "   📝 Creating new branch: $branch_name"
        git branch "$branch_name" main
    else
        echo "   ♻️  Branch already exists: $branch_name"
    fi
    
    # Remove existing worktree if it exists
    if [[ -d "$worktree_path" ]]; then
        echo "   🧹 Removing existing worktree..."
        git worktree remove "$worktree_path" --force 2>/dev/null || rm -rf "$worktree_path"
    fi
    
    # Create worktree
    echo "   🌱 Creating worktree..."
    git worktree add "$worktree_path" "$branch_name"
    
    # Setup Claude permissions in the worktree
    echo "   🛡️ Setting up Claude permissions..."
    mkdir -p "$worktree_path/.claude"
    
    cat > "$worktree_path/.claude/settings.local.json" << 'EOF'
{
  "permissions": {
    "allow": [
      "*"
    ],
    "deny": [],
    "ask": [],
    "defaultMode": "bypassPermissions"
  }
}
EOF
    
    echo "   ✅ Worktree created successfully!"
}

# Ask user how many to create (auto-run if command line args provided)
if [[ $# -gt 0 ]]; then
    echo ""
    echo "🚀 Auto-creating worktrees for ${#template_ids[@]} templates..."
    choice=1
else
    echo ""
    echo "Options:"
    echo "1. Create worktrees for ALL templates (${#template_ids[@]} templates)"
    echo "2. Create worktrees for first N templates"
    echo "3. Create specific template worktrees"

    read -p "Choose option (1-3): " choice
fi

case $choice in
    1)
        echo "🚀 Creating worktrees for ALL ${#template_ids[@]} templates..."
        for template_id in "${template_ids[@]}"; do
            create_template_worktree "$template_id"
        done
        ;;
    2)
        read -p "How many templates to create worktrees for? " num_templates
        if [[ $num_templates -gt ${#template_ids[@]} ]]; then
            num_templates=${#template_ids[@]}
        fi
        echo "🚀 Creating worktrees for first $num_templates templates..."
        for ((i=0; i<$num_templates; i++)); do
            create_template_worktree "${template_ids[$i]}"
        done
        ;;
    3)
        echo "📝 Available templates:"
        for i in "${!template_ids[@]}"; do
            printf "%3d: %s\n" $((i+1)) "${template_ids[$i]}"
        done
        echo ""
        read -p "Enter template IDs (space-separated): " -a selected_templates
        echo "🚀 Creating worktrees for selected templates..."
        for template_id in "${selected_templates[@]}"; do
            if [[ " ${template_ids[@]} " =~ " ${template_id} " ]]; then
                create_template_worktree "$template_id"
            else
                echo "⚠️  Template not found: $template_id"
            fi
        done
        ;;
    *)
        echo "❌ Invalid choice"
        exit 1
        ;;
esac

echo ""
echo "🎉 Worktree setup complete!"
echo ""
echo "📁 Worktrees created in: $WORKTREES_DIR"
echo "🌿 Each worktree has its own branch: feature/template-[name]"
echo "🛡️ Claude permissions configured for each worktree"
echo ""
echo "Next steps:"
echo "1. Run template-automation.sh to open VS Code windows for each template"
echo "2. Each Claude instance will work on its own template in isolation"
echo "3. Merge completed templates back to main when ready"
echo ""

# Show summary
echo "📊 Summary:"
echo "   Main repo: $MAIN_REPO"
echo "   Worktrees: $WORKTREES_DIR"
echo "   Templates: $(ls -1 "$WORKTREES_DIR" 2>/dev/null | wc -l) worktrees created"
echo ""

# List created worktrees
if [[ -d "$WORKTREES_DIR" ]] && [[ $(ls -A "$WORKTREES_DIR" 2>/dev/null) ]]; then
    echo "🌳 Created worktrees:"
    for dir in "$WORKTREES_DIR"/*; do
        if [[ -d "$dir" ]]; then
            template_name=$(basename "$dir")
            echo "   ✅ $template_name"
        fi
    done
else
    echo "⚠️  No worktrees found in $WORKTREES_DIR"
fi