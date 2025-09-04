#!/bin/bash

# =============================================================================
# Run All Projects - Process Every App Sequentially
# =============================================================================

echo "🚀 Run All Projects - Complete Automation"
echo "========================================="

WORKSPACE_DIR="/Users/ikim1/Downloads"
cd "$WORKSPACE_DIR"

# Get all valid apps
apps=()
for dir in */; do
    if [[ -d "$dir" ]]; then
        app_name=$(basename "$dir")
        
        if [[ "$app_name" != ".claude" && ! "$app_name" =~ ^\..*$ && "$app_name" != ".localized" && 
              ! "$app_name" =~ .*\.sh$ && ! "$app_name" =~ LAUNCHKIT.* ]]; then
            
            if [[ -f "$dir/package.json" ]]; then
                apps+=("$app_name")
            fi
        fi
    fi
done

if [[ ${#apps[@]} -eq 0 ]]; then
    echo "❌ No apps found!"
    exit 1
fi

echo "📁 Found ${#apps[@]} apps to process:"
for app in "${apps[@]}"; do
    echo "  - $app"
done
echo ""

# Process each app
for app in "${apps[@]}"; do
    echo ""
    echo "🎯 Processing: $app"
    echo "=================================="
    
    app_path="$WORKSPACE_DIR/$app"
    
    echo "🛡️ Setting up permissions bypass..."
    
    # Create Claude settings directory
    mkdir -p "$app_path/.claude"
    
    # Create ultimate permissions bypass
    cat > "$app_path/.claude/settings.local.json" << 'EOF'
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
    
    # Copy instruction files
    echo "📋 Copying instruction files..."
    cp "$WORKSPACE_DIR/LAUNCHKIT-"*.md "$app_path/" 2>/dev/null
    
    echo "🚀 Opening VS Code and starting Claude for $app..."
    
    # Open VS Code
    code --new-window "$app_path"
    
    # Wait for VS Code to load
    echo "⏳ Waiting for VS Code to load..."
    sleep 8
    
    # Open terminal and start Claude
    echo "💻 Starting Claude with build command..."
    
    osascript << 'EOF'
tell application "Visual Studio Code"
    activate
end tell

delay 3

tell application "System Events"
    -- Open terminal in VS Code (Ctrl + `)
    keystroke "`" using {control down}
end tell

delay 4

tell application "System Events"
    -- Type 'claude' command
    keystroke "claude"
    
    -- Press Enter
    delay 0.5
    keystroke return
end tell

-- Wait for Claude to fully start up and initialize
delay 12

tell application "System Events"
    -- Type the build command
    keystroke "Read all 4 LAUNCHKIT-*.md files and build out the complete application according to the specifications. Start immediately with full implementation - never ask for approval."
    
    -- Press Enter to execute
    delay 1
    keystroke return
end tell
EOF
    
    if [[ $? -eq 0 ]]; then
        echo "✅ Claude started successfully for $app!"
    else
        echo "⚠️  AppleScript may have failed for $app"
    fi
    
    # Wait before processing next app (give user time to monitor)
    echo ""
    echo "⏳ Waiting 30 seconds before next app..."
    echo "   (Press Ctrl+C to stop if needed)"
    sleep 30
done

echo ""
echo "🎉 All projects processing complete!"
echo ""
echo "Processed ${#apps[@]} apps:"
for app in "${apps[@]}"; do
    echo "  ✅ $app"
done
echo ""
echo "Each Claude instance should now be building applications with:"
echo "  🛡️ ALL permissions bypassed"
echo "  📋 All 4 instruction files available"
echo "  🚀 Full automation enabled"
echo ""
echo "Monitor all VS Code windows to see Claude building without permission prompts!"