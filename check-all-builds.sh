#!/bin/bash

# =============================================================================
# Check All Builds - Monitor build status across all template worktrees
# =============================================================================

set -e  # Exit on any error

echo "📊 Check All Builds - Template Worktrees Status"
echo "==============================================="

# Show usage if help requested
if [[ "$1" == "-h" ]] || [[ "$1" == "--help" ]]; then
    echo ""
    echo "Usage: $0 [--fix] [--verbose]"
    echo ""
    echo "Options:"
    echo "  --fix       Automatically try to fix build errors"
    echo "  --verbose   Show detailed build output"
    echo ""
    echo "Examples:"
    echo "  $0              # Check build status of all templates"
    echo "  $0 --fix        # Check and automatically fix build errors"
    echo "  $0 --verbose    # Show detailed build output for each template"
    echo ""
    exit 0
fi

MAIN_REPO="/Users/ikim1/Downloads/templata"
WORKTREES_DIR="/Users/ikim1/Downloads/templata-worktrees"
TEMPLATES_FILE="$MAIN_REPO/templates-list.json"

FIX_ERRORS=false
VERBOSE=false

# Parse command line arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        --fix)
            FIX_ERRORS=true
            shift
            ;;
        --verbose)
            VERBOSE=true
            shift
            ;;
        *)
            echo "Unknown option: $1"
            exit 1
            ;;
    esac
done

# Check if worktrees directory exists
if [[ ! -d "$WORKTREES_DIR" ]]; then
    echo "❌ Worktrees directory not found: $WORKTREES_DIR"
    echo "   Run setup-template-worktrees.sh first"
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
    echo "❌ No template worktrees found"
    exit 1
fi

echo "🔍 Checking builds for ${#available_templates[@]} template worktrees..."
echo ""

# Arrays to track results
passing_builds=()
failing_builds=()
error_details=()

# Function to check build in a worktree
check_template_build() {
    local template_id="$1"
    local worktree_path="$WORKTREES_DIR/$template_id"
    
    echo "🔨 Checking: $template_id"
    
    if [[ ! -d "$worktree_path" ]]; then
        echo "   ❌ Worktree directory not found"
        failing_builds+=("$template_id")
        error_details+=("$template_id: Worktree directory not found")
        return 1
    fi
    
    # Change to worktree directory
    cd "$worktree_path"
    
    # Check if package.json exists
    if [[ ! -f "package.json" ]]; then
        echo "   ❌ No package.json found"
        failing_builds+=("$template_id")
        error_details+=("$template_id: No package.json found")
        return 1
    fi
    
    # Run the build
    if [[ "$VERBOSE" == "true" ]]; then
        echo "   🏗️  Running npm run build..."
        if npm run build 2>&1; then
            echo "   ✅ Build passed"
            passing_builds+=("$template_id")
            return 0
        else
            echo "   ❌ Build failed"
            failing_builds+=("$template_id")
            error_details+=("$template_id: Build failed with errors")
            return 1
        fi
    else
        echo "   🏗️  Running npm run build..."
        if npm run build > /dev/null 2>&1; then
            echo "   ✅ Build passed"
            passing_builds+=("$template_id")
            return 0
        else
            echo "   ❌ Build failed"
            # Capture error details
            local build_error=$(npm run build 2>&1 | head -10 | tail -5)
            failing_builds+=("$template_id")
            error_details+=("$template_id: $build_error")
            return 1
        fi
    fi
}

# Function to auto-fix build errors
fix_template_build() {
    local template_id="$1"
    local worktree_path="$WORKTREES_DIR/$template_id"
    
    echo "🔧 Auto-fixing: $template_id"
    cd "$worktree_path"
    
    # Get build errors
    local build_output=$(npm run build 2>&1 || true)
    
    # Check for missing modules
    if echo "$build_output" | grep -q "Module not found"; then
        echo "   🔨 Creating missing components..."
        
        # Extract missing component names
        local missing_components=$(echo "$build_output" | grep "Module not found" | grep -o "@/components/[^']*" | sed 's/@\/components\///g' | sort | uniq)
        
        for component in $missing_components; do
            local component_file="src/components/${component}.tsx"
            if [[ ! -f "$component_file" ]]; then
                echo "   📄 Creating: $component_file"
                
                # Convert kebab-case to PascalCase for component name
                local component_name=$(echo "$component" | sed 's/-\([a-z]\)/\U\1/g' | sed 's/^./\U&/')
                
                cat > "$component_file" << EOF
"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ${component_name}() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>${component_name}</CardTitle>
        <CardDescription>Component functionality coming soon...</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-muted-foreground">${component_name} functionality coming soon...</p>
        </div>
      </CardContent>
    </Card>
  )
}
EOF
            fi
        done
        
        # Try build again
        if npm run build > /dev/null 2>&1; then
            echo "   ✅ Build fixed!"
            git add .
            git commit -m "fix: create missing components for $template_id

Auto-generated placeholder components:
$(echo "$missing_components" | sed 's/^/- /')"
            
            passing_builds+=("$template_id")
            return 0
        fi
    fi
    
    echo "   ⚠️  Could not auto-fix build errors"
    return 1
}

# Check all templates
for template_id in "${available_templates[@]}"; do
    if ! check_template_build "$template_id"; then
        if [[ "$FIX_ERRORS" == "true" ]]; then
            fix_template_build "$template_id"
        fi
    fi
    echo ""
done

# Return to main repo
cd "$MAIN_REPO"

# Display summary
echo "📊 Build Check Summary:"
echo "   ✅ Passing: ${#passing_builds[@]} templates"
echo "   ❌ Failing: ${#failing_builds[@]} templates"
echo ""

if [[ ${#passing_builds[@]} -gt 0 ]]; then
    echo "✅ Passing builds:"
    for template in "${passing_builds[@]}"; do
        echo "   - $template"
    done
    echo ""
fi

if [[ ${#failing_builds[@]} -gt 0 ]]; then
    echo "❌ Failing builds:"
    for i in "${!failing_builds[@]}"; do
        echo "   - ${failing_builds[$i]}"
        if [[ "$VERBOSE" == "true" ]]; then
            echo "     ${error_details[$i]}"
        fi
    done
    echo ""
    
    echo "💡 To fix build errors:"
    echo "   - Run: $0 --fix (auto-fix missing components)"
    echo "   - Run: ./force-build-check.sh (send fix commands to Claude instances)"
    echo "   - Manually check each failing template worktree"
fi

# Exit with appropriate code
if [[ ${#failing_builds[@]} -eq 0 ]]; then
    echo "🎉 All template builds are passing! Ready for merge."
    exit 0
else
    exit 1
fi