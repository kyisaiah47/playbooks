#!/bin/bash

# =============================================================================
# Template Automation - Open VS Code windows for parallel template development
# =============================================================================

set -e  # Exit on any error

echo "🚀 Template Automation - Parallel Development"
echo "=============================================="

# Show usage if help requested
if [[ "$1" == "-h" ]] || [[ "$1" == "--help" ]]; then
    echo ""
    echo "Usage: $0 [start_index] [max_count] [delay_seconds]"
    echo ""
    echo "Arguments:"
    echo "  start_index   - Index to start from (0-based, default: 0)"
    echo "  max_count     - Maximum templates to process (default: all)"
    echo "  delay_seconds - Delay between windows (default: 30)"
    echo ""
    echo "Examples:"
    echo "  $0              # Process all templates with 30s delay"
    echo "  $0 0 5 15       # Process first 5 templates with 15s delay"  
    echo "  $0 10 3         # Process templates 10-12 with 30s delay"
    echo ""
    exit 0
fi

MAIN_REPO="/Users/ikim1/Downloads/templata"
WORKTREES_DIR="/Users/ikim1/Downloads/templata-worktrees"
TEMPLATES_FILE="$MAIN_REPO/templates-list.json"

# Check if worktrees directory exists
if [[ ! -d "$WORKTREES_DIR" ]]; then
    echo "❌ Worktrees directory not found: $WORKTREES_DIR"
    echo "   Run setup-template-worktrees.sh first!"
    exit 1
fi

# Get list of available template worktrees
available_templates=()
for dir in "$WORKTREES_DIR"/*; do
    if [[ -d "$dir" ]]; then
        template_name=$(basename "$dir")
        available_templates+=("$template_name")
    fi
done

if [[ ${#available_templates[@]} -eq 0 ]]; then
    echo "❌ No template worktrees found in $WORKTREES_DIR"
    echo "   Run setup-template-worktrees.sh first!"
    exit 1
fi

echo "📊 Found ${#available_templates[@]} template worktrees"

# Handle command line arguments
START_INDEX=0
MAX_COUNT=${#available_templates[@]}
DELAY_SECONDS=20

if [[ $# -gt 0 ]]; then
    if [[ "$1" =~ ^[0-9]+$ ]]; then
        START_INDEX=$1
        echo "🎯 Starting from template index: $START_INDEX"
        
        # Auto-select option 1 with command line args
        AUTO_RUN=true
    fi
fi

if [[ $# -gt 1 ]]; then
    if [[ "$2" =~ ^[0-9]+$ ]]; then
        MAX_COUNT=$2
        echo "📊 Maximum templates to process: $MAX_COUNT"
    fi
fi

if [[ $# -gt 2 ]]; then
    if [[ "$3" =~ ^[0-9]+$ ]]; then
        DELAY_SECONDS=$3
        echo "⏱️ Delay between windows: ${DELAY_SECONDS}s"
    fi
fi

# Adjust template list based on parameters
if [[ $START_INDEX -gt 0 ]] || [[ $MAX_COUNT -lt ${#available_templates[@]} ]]; then
    end_index=$((START_INDEX + MAX_COUNT))
    if [[ $end_index -gt ${#available_templates[@]} ]]; then
        end_index=${#available_templates[@]}
    fi
    
    echo "📋 Processing templates $START_INDEX to $((end_index-1))"
    available_templates=("${available_templates[@]:$START_INDEX:$MAX_COUNT}")
    echo "📊 Filtered to ${#available_templates[@]} templates"
fi

# Function to get template info from JSON
get_template_info() {
    local template_id="$1"
    local field="$2"
    
    # Extract template info from JSON (simplified - assumes specific format)
    cat "$TEMPLATES_FILE" | grep -A 10 "\"id\": \"$template_id\"" | grep "\"$field\":" | head -1 | sed 's/.*": "//g' | sed 's/",*//g'
}

# Function to generate Claude prompt for a template
generate_template_prompt() {
    local template_id="$1"
    
    local template_name=$(get_template_info "$template_id" "name")
    
    cat << EOF
Build complete ${template_name} template following job search template pattern. ID: ${template_id}

BUILD TEMPLATE-ONLY COMPONENTS: 1) Context provider src/contexts/${template_id}-context.tsx with 30+ fields, localStorage, wizard state 2) Setup wizard src/components/${template_id}-setup-wizard.tsx multi-step with validation 3) CRITICAL: Sidebar src/components/${template_id}-sidebar-left.tsx with nav/favorites/workspaces AND BUILD ALL INDIVIDUAL SIDEBAR PAGES - examine the sidebar to see what pages it links to, then create every single page component with full functionality 4) Main page src/app/templates/${template_id}/page.tsx with routing 5) Overview dashboard src/components/${template_id}-overview.tsx 6) 4-6 functional CRUD components 7) Run 'npm run build' and fix ALL build errors - create missing components, fix TypeScript errors, use only theme colors (no explicit red/blue/etc) 8) Commit when build passes

⚠️  CRITICAL FORBIDDEN FILES - DO NOT MODIFY (will cause merge conflicts):
1. src/app/layout.tsx (providers added post-merge)
2. src/app/page.tsx (landing page updated post-merge)
3. src/components/app-sidebar.tsx (navigation updated post-merge)
4. src/app/templates/page.tsx (gallery updated post-merge)
5. src/app/about/page.tsx (marketing pages unchanged)
6. src/app/faq/page.tsx (FAQ pages unchanged)
7. src/components/sidebar-left.tsx (use wedding template version)
8. src/components/theme-provider.tsx (theme system unchanged)
9. src/components/wedding-setup-wizard.tsx (core wizard unchanged)
10. package.json (dependencies managed centrally)
11. next.config.js (build config unchanged)
12. tailwind.config.js (styling config unchanged)

✅ BUILD TEMPLATE-SPECIFIC FILES ONLY: contexts/, template routes, setup wizards, dashboards, and components

SIDEBAR PAGES: After creating the sidebar component, examine it carefully to identify ALL navigation pages it references, then build each one as a complete functional component. Do NOT leave sidebar pages as placeholders.

Use job search template as pattern. Only shadcn/ui components. Full functionality not placeholders. Work autonomously until EVERYTHING builds without errors. START BUILDING NOW.
EOF
}

# Function to open VS Code and start Claude for a template
open_template_window() {
    local template_id="$1"
    local worktree_path="$WORKTREES_DIR/$template_id"
    
    if [[ ! -d "$worktree_path" ]]; then
        echo "⚠️  Worktree not found for template: $template_id"
        return 1
    fi
    
    local template_name=$(get_template_info "$template_id" "name")
    
    echo ""
    echo "🎯 Opening VS Code for: $template_name ($template_id)"
    echo "   Path: $worktree_path"
    
    # Open VS Code with new window
    code --new-window "$worktree_path"
    
    # Wait for VS Code to load
    echo "   ⏳ Waiting for VS Code to load..."
    sleep 10
    
    # Generate the prompt for this template
    local claude_prompt=$(generate_template_prompt "$template_id")
    
    # Open terminal and start Claude with template-specific prompt
    echo "   💻 Starting Claude with template-specific prompt..."
    
    osascript << EOF
tell application "Visual Studio Code"
    activate
end tell

delay 3

tell application "System Events"
    -- Open terminal in VS Code (Ctrl + \`)
    keystroke "\`" using {control down}
end tell

delay 5

tell application "System Events"
    -- Type 'claude' command
    keystroke "claude"
    
    -- Press Enter
    delay 0.5
    keystroke return
end tell

-- Wait for Claude to fully start up and initialize
delay 20

tell application "System Events"
    -- Type the template-specific build command
    keystroke "${claude_prompt//\"/\\\"}"
    
    -- Press Enter to execute
    delay 3
    keystroke return
end tell
EOF
    
    if [[ $? -eq 0 ]]; then
        echo "   ✅ Claude started successfully for $template_name!"
    else
        echo "   ⚠️  AppleScript may have failed for $template_name"
    fi
}

# Main menu (skip if auto-run with command line args)
if [[ "${AUTO_RUN:-}" == "true" ]]; then
    echo ""
    echo "🚀 Auto-running with filtered templates (${#available_templates[@]} windows)..."
    choice=1
else
    echo ""
    echo "Options:"
    echo "1. Open ALL template windows (${#available_templates[@]} windows)"
    echo "2. Open first N template windows"
    echo "3. Open specific template windows"
    echo "4. Open single template window"

    read -p "Choose option (1-4): " choice
fi

case $choice in
    1)
        echo "🚀 Opening ALL ${#available_templates[@]} template windows..."
        if [[ "${AUTO_RUN:-}" != "true" ]]; then
            read -p "Delay between windows (seconds, default 30): " delay_time
            delay_time=${delay_time:-30}
        else
            delay_time=$DELAY_SECONDS
        fi
        
        for i in "${!available_templates[@]}"; do
            template_id="${available_templates[$i]}"
            open_template_window "$template_id"
            
            # Don't wait after the last template
            if [[ $i -lt $((${#available_templates[@]}-1)) ]]; then
                echo ""
                echo "⏳ Waiting $delay_time seconds before next window..."
                echo "   (Press Ctrl+C to stop if needed)"
                sleep "$delay_time"
            fi
        done
        ;;
    2)
        read -p "How many template windows to open? " num_templates
        if [[ $num_templates -gt ${#available_templates[@]} ]]; then
            num_templates=${#available_templates[@]}
        fi
        
        read -p "Delay between windows (seconds, default 30): " delay_time
        delay_time=${delay_time:-30}
        
        echo "🚀 Opening first $num_templates template windows..."
        for ((i=0; i<$num_templates; i++)); do
            open_template_window "${available_templates[$i]}"
            
            if [[ $i -lt $((num_templates-1)) ]]; then
                echo ""
                echo "⏳ Waiting $delay_time seconds before next window..."
                echo "   (Press Ctrl+C to stop if needed)"
                sleep "$delay_time"
            fi
        done
        ;;
    3)
        echo "📝 Available templates:"
        for i in "${!available_templates[@]}"; do
            printf "%3d: %s\n" $((i+1)) "${available_templates[$i]}"
        done
        echo ""
        read -p "Enter template IDs (space-separated): " -a selected_templates
        
        read -p "Delay between windows (seconds, default 30): " delay_time
        delay_time=${delay_time:-30}
        
        echo "🚀 Opening selected template windows..."
        for i in "${!selected_templates[@]}"; do
            template_id="${selected_templates[$i]}"
            if [[ " ${available_templates[@]} " =~ " ${template_id} " ]]; then
                open_template_window "$template_id"
                
                if [[ $i -lt $((${#selected_templates[@]}-1)) ]]; then
                    echo ""
                    echo "⏳ Waiting $delay_time seconds before next window..."
                    echo "   (Press Ctrl+C to stop if needed)"
                    sleep "$delay_time"
                fi
            else
                echo "⚠️  Template not found: $template_id"
            fi
        done
        ;;
    4)
        echo "📝 Available templates:"
        for i in "${!available_templates[@]}"; do
            printf "%3d: %s\n" $((i+1)) "${available_templates[$i]}"
        done
        echo ""
        read -p "Enter template ID: " template_id
        
        if [[ " ${available_templates[@]} " =~ " ${template_id} " ]]; then
            echo "🚀 Opening single template window..."
            open_template_window "$template_id"
        else
            echo "⚠️  Template not found: $template_id"
        fi
        ;;
    *)
        echo "❌ Invalid choice"
        exit 1
        ;;
esac

echo ""
echo "🎉 Template automation complete!"
echo ""
echo "📊 Summary:"
echo "   Each VS Code window is working on a separate template"
echo "   Each Claude instance has a template-specific prompt"
echo "   Each worktree is on its own branch"
echo "   All templates will be built in parallel"
echo ""
echo "🔄 Next steps:"
echo "   1. Monitor each VS Code window for Claude progress"
echo "   2. Each Claude will build template-specific files only (12 forbidden files protected)"
echo "   3. When templates achieve 90%+ linter score, merge to main:"
echo "      ./lint-unmerged-templates.sh (check scores)"
echo "      ./merge-templates-individually.sh (handles conflicts + post-merge integration)"
echo "   4. Enhanced tools now prevent merge conflicts through:"
echo "      • Linter warnings about forbidden files"
echo "      • Merge script excludes shared files during merge"
echo "      • Automated post-merge integration for providers/navigation"
echo ""
echo "💡 Result: Parallel development speed + manageable manual merge resolution"