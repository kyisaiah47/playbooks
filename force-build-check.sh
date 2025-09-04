#!/bin/bash

# =============================================================================
# Force Build Check - Make all Claude instances run build and fix errors
# =============================================================================

set -e  # Exit on any error

echo "🔨 Force Build Check - All Claude Instances"
echo "============================================="

# Show usage if help requested
if [[ "$1" == "-h" ]] || [[ "$1" == "--help" ]]; then
    echo ""
    echo "Usage: $0 [template_filter]"
    echo ""
    echo "Arguments:"
    echo "  template_filter  - Optional: Only check specific templates (e.g., 'baby' for baby-planning)"
    echo ""
    echo "Examples:"
    echo "  $0              # Check builds in all template worktrees"
    echo "  $0 baby         # Only check templates containing 'baby'"
    echo "  $0 college      # Only check templates containing 'college'"
    echo ""
    echo "This script will:"
    echo "1. Find all active template worktrees"
    echo "2. Open terminal in each VS Code window"
    echo "3. Force Claude to run 'npm run build'"
    echo "4. Instruct Claude to fix any build errors"
    echo ""
    exit 0
fi

MAIN_REPO="/Users/ikim1/Downloads/templata"
WORKTREES_DIR="/Users/ikim1/Downloads/templata-worktrees"
TEMPLATE_FILTER="${1:-}"

# Check if worktrees directory exists
if [[ ! -d "$WORKTREES_DIR" ]]; then
    echo "❌ Worktrees directory not found: $WORKTREES_DIR"
    echo "   No parallel development sessions to check"
    exit 1
fi

# Get list of available template worktrees
available_templates=()
for dir in "$WORKTREES_DIR"/*; do
    if [[ -d "$dir" ]]; then
        template_name=$(basename "$dir")
        # Apply filter if provided
        if [[ -z "$TEMPLATE_FILTER" ]] || [[ "$template_name" == *"$TEMPLATE_FILTER"* ]]; then
            available_templates+=("$template_name")
        fi
    fi
done

if [[ ${#available_templates[@]} -eq 0 ]]; then
    if [[ -n "$TEMPLATE_FILTER" ]]; then
        echo "❌ No template worktrees found matching filter: $TEMPLATE_FILTER"
    else
        echo "❌ No template worktrees found in $WORKTREES_DIR"
    fi
    exit 1
fi

echo "🎯 Found ${#available_templates[@]} template worktree(s) to check:"
for template in "${available_templates[@]}"; do
    echo "   - $template"
done

# Function to send build check command to a VS Code window
force_build_check() {
    local template_id="$1"
    local worktree_path="$WORKTREES_DIR/$template_id"
    
    if [[ ! -d "$worktree_path" ]]; then
        echo "⚠️  Worktree not found for template: $template_id"
        return 1
    fi
    
    echo ""
    echo "🔨 Forcing build check for: $template_id"
    echo "   Path: $worktree_path"
    
    # The build check command for Claude
    local build_command="Run 'npm run build' and fix any build errors. If there are missing components, create placeholder components with proper TypeScript types. If there are TypeScript errors, fix them. Commit your fixes when done."
    
    # Send command to Claude via AppleScript
    osascript << EOF
-- Find VS Code windows with this worktree path
tell application "System Events"
    set vscodeWindows to every window of application process "Visual Studio Code"
    repeat with vsWindow in vscodeWindows
        set windowTitle to title of vsWindow
        if windowTitle contains "$template_id" then
            -- Found the right window, activate it
            tell application "Visual Studio Code" to activate
            delay 1
            
            -- Bring this specific window to front
            set frontmost of vsWindow to true
            delay 1
            
            -- Open terminal (Ctrl + \`)
            keystroke "\`" using {control down}
            delay 3
            
            -- Clear terminal and start fresh Claude session
            keystroke "c" using {control down}
            delay 1
            keystroke "clear && claude"
            delay 1
            keystroke return
            delay 8
            
            -- Send the build check command
            keystroke "$build_command"
            delay 1
            keystroke return
            
            exit repeat
        end if
    end repeat
end tell
EOF
    
    local exit_code=$?
    if [[ $exit_code -eq 0 ]]; then
        echo "   ✅ Build check command sent to $template_id"
    else
        echo "   ⚠️  Failed to send command to $template_id (window may not be open)"
    fi
    
    return $exit_code
}

echo ""
echo "🚀 Sending build check commands to all template windows..."

successful_commands=0
failed_commands=0

for template_id in "${available_templates[@]}"; do
    if force_build_check "$template_id"; then
        ((successful_commands++))
    else
        ((failed_commands++))
    fi
    
    # Small delay between commands to avoid overwhelming the system
    sleep 2
done

echo ""
echo "📊 Build Check Summary:"
echo "   ✅ Successful: $successful_commands templates"
echo "   ⚠️  Failed: $failed_commands templates"
echo ""

if [[ $successful_commands -gt 0 ]]; then
    echo "🎯 Next Steps:"
    echo "1. Monitor each VS Code window as Claude runs builds"
    echo "2. Claude will automatically fix build errors and missing components"
    echo "3. Each Claude will commit fixes when complete"
    echo "4. Use merge-completed-templates.sh when all builds pass"
    echo ""
    echo "⏰ Estimated time: 3-5 minutes per template"
    echo "   You can continue working while Claude instances fix builds in parallel"
else
    echo "❌ No commands were sent successfully"
    echo "   Make sure VS Code windows are open for the templates you want to check"
fi

echo ""
echo "💡 Pro Tips:"
echo "   - Each Claude will create placeholder components for missing imports"
echo "   - TypeScript errors will be automatically resolved"  
echo "   - All fixes will be committed with descriptive messages"
echo "   - Run this script anytime during parallel development"