#!/bin/bash

# =============================================================================
# Single App Test - Just One Folder
# =============================================================================

echo "🎯 Single App Test - One Folder Only"
echo "===================================="

WORKSPACE_DIR="/Users/ikim1/Downloads"
cd "$WORKSPACE_DIR"

# Check if app name provided as argument
if [[ -n "$1" ]]; then
    target_app="$1"
    echo "🎯 Target app specified: $target_app"
    
    # Check if the specified app exists and has package.json
    if [[ -d "$target_app" && -f "$target_app/package.json" ]]; then
        app="$target_app"
    else
        echo "❌ App '$target_app' not found or missing package.json!"
        exit 1
    fi
else
    # Get just the FIRST app (original behavior)
    app=""
    for dir in */; do
        if [[ -d "$dir" ]]; then
            app_name=$(basename "$dir")
            
            if [[ "$app_name" != ".claude" && ! "$app_name" =~ ^\..*$ && "$app_name" != ".localized" && 
                  ! "$app_name" =~ .*\.sh$ && ! "$app_name" =~ LAUNCHKIT.* ]]; then
                
                if [[ -f "$dir/package.json" ]]; then
                    app="$app_name"
                    break
                fi
            fi
        fi
    done
fi

if [[ -z "$app" ]]; then
    echo "❌ No app found!"
    exit 1
fi

echo "📁 Testing with single app: $app"

app_path="$WORKSPACE_DIR/$app"

echo ""
echo "🛡️ Setting up ultimate permissions bypass..."

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

echo ""
echo "🚀 Opening VS Code and starting Claude..."

# Open VS Code
code --new-window "$app_path"

# Wait for VS Code to load
echo "⏳ Waiting for VS Code to load..."
sleep 6

# Open terminal and start Claude
echo "💻 Starting Claude with build command..."

osascript << 'EOF'
tell application "Visual Studio Code"
    activate
end tell

delay 2

tell application "System Events"
    -- Open terminal in VS Code (Ctrl + `)
    keystroke "`" using {control down}
end tell

delay 3

tell application "System Events"
    -- Type 'claude' command
    keystroke "claude"
    
    -- Press Enter
    delay 0.5
    keystroke return
end tell

-- Wait for Claude to fully start up and initialize
delay 10

tell application "System Events"
    -- Type the build command
    keystroke "Read all 4 LAUNCHKIT-*.md files and build out the complete application according to the specifications. Start immediately with full implementation - never ask for approval."
    
    -- Press Enter to execute
    delay 1
    keystroke return
end tell
EOF

if [[ $? -eq 0 ]]; then
    echo "✅ Claude started successfully!"
else
    echo "⚠️  AppleScript may have failed"
fi

echo ""
echo "🎉 Single app test complete!"
echo ""
echo "App: $app"
echo "Path: $app_path"
echo ""
echo "Claude should now be building the complete application with:"
echo "  🛡️ ALL permissions bypassed"
echo "  📋 All 4 instruction files available"
echo "  🚀 Full automation enabled"
echo ""
echo "Monitor the VS Code window to see Claude building without any permission prompts!"