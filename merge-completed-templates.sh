#!/bin/bash

# =============================================================================
# Merge Completed Templates - Merge finished template branches back to main
# =============================================================================

set -e  # Exit on any error

echo "🔄 Merge Completed Templates"
echo "============================"

MAIN_REPO="/Users/ikim1/Downloads/templata"
WORKTREES_DIR="/Users/ikim1/Downloads/templata-worktrees"

cd "$MAIN_REPO"

# Function to check if a template is complete
check_template_complete() {
    local template_id="$1"
    local worktree_path="$WORKTREES_DIR/$template_id"
    
    if [[ ! -d "$worktree_path" ]]; then
        echo "❌ Worktree not found: $template_id"
        return 1
    fi
    
    echo "🔍 Checking completion for: $template_id"
    
    # Check for required files
    local required_files=(
        "src/contexts/${template_id}-context.tsx"
        "src/components/${template_id}-setup-wizard.tsx"
        "src/components/${template_id}-sidebar-left.tsx"
        "src/app/templates/${template_id}/page.tsx"
        "src/components/${template_id}-overview.tsx"
    )
    
    local missing_files=()
    local found_files=()
    
    for file in "${required_files[@]}"; do
        if [[ -f "$worktree_path/$file" ]]; then
            found_files+=("$file")
        else
            missing_files+=("$file")
        fi
    done
    
    echo "   ✅ Found files: ${#found_files[@]}"
    echo "   ❌ Missing files: ${#missing_files[@]}"
    
    if [[ ${#missing_files[@]} -eq 0 ]]; then
        echo "   🎉 Template appears complete!"
        return 0
    else
        echo "   ⚠️  Template incomplete. Missing:"
        for file in "${missing_files[@]}"; do
            echo "      - $file"
        done
        return 1
    fi
}

# Function to merge a template branch
merge_template() {
    local template_id="$1"
    local branch_name="feature/template-$template_id"
    
    echo ""
    echo "🔀 Merging template: $template_id"
    echo "   Branch: $branch_name"
    
    # Switch to main branch
    echo "   📝 Switching to main branch..."
    git checkout main
    
    # Pull latest changes
    echo "   ⬇️  Pulling latest changes..."
    git pull origin main || echo "   ⚠️  Pull failed (continuing anyway)"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet refs/heads/$branch_name; then
        echo "   ❌ Branch not found: $branch_name"
        return 1
    fi
    
    # Check for conflicts by doing a test merge
    echo "   🧪 Testing merge (no commit)..."
    if git merge --no-commit --no-ff "$branch_name" 2>/dev/null; then
        # Reset the test merge
        git reset --hard HEAD
        echo "   ✅ No conflicts detected"
        
        # Do the actual merge
        echo "   🔀 Performing merge..."
        git merge "$branch_name" --no-ff -m "feat: add $template_id template

Complete implementation including:
- Context provider with data management
- Multi-step setup wizard
- Navigation sidebar with organized sections  
- Main template page with routing
- Overview dashboard component
- Multiple functional components
- Integration with main app

🤖 Generated with parallel template development"
        
        echo "   ✅ Merge completed successfully!"
        
        # Ask if user wants to delete the feature branch
        read -p "   🗑️  Delete feature branch '$branch_name'? (y/N): " delete_branch
        if [[ "$delete_branch" =~ ^[Yy]$ ]]; then
            git branch -d "$branch_name"
            echo "   🗑️  Branch deleted"
        else
            echo "   📝 Branch preserved"
        fi
        
        return 0
    else
        # Reset any partial merge
        git reset --hard HEAD
        git clean -fd
        echo "   ⚠️  Merge conflicts detected! Manual intervention required."
        echo "      Run: git merge $branch_name"
        echo "      Resolve conflicts, then commit"
        return 1
    fi
}

# Function to cleanup worktree after successful merge
cleanup_worktree() {
    local template_id="$1"
    local worktree_path="$WORKTREES_DIR/$template_id"
    
    if [[ -d "$worktree_path" ]]; then
        echo "   🧹 Cleaning up worktree..."
        git worktree remove "$worktree_path" --force
        echo "   ✅ Worktree removed"
    fi
}

# Get list of available templates
available_templates=()
if [[ -d "$WORKTREES_DIR" ]]; then
    for dir in "$WORKTREES_DIR"/*; do
        if [[ -d "$dir" ]]; then
            template_name=$(basename "$dir")
            available_templates+=("$template_name")
        fi
    done
fi

if [[ ${#available_templates[@]} -eq 0 ]]; then
    echo "❌ No template worktrees found"
    exit 1
fi

echo "📊 Found ${#available_templates[@]} template worktrees"

# Check completion status of all templates
echo ""
echo "🔍 Checking completion status..."
completed_templates=()
incomplete_templates=()

for template_id in "${available_templates[@]}"; do
    if check_template_complete "$template_id"; then
        completed_templates+=("$template_id")
    else
        incomplete_templates+=("$template_id")
    fi
done

echo ""
echo "📊 Status Summary:"
echo "   ✅ Completed: ${#completed_templates[@]} templates"
echo "   ⚠️  Incomplete: ${#incomplete_templates[@]} templates"

if [[ ${#completed_templates[@]} -eq 0 ]]; then
    echo ""
    echo "❌ No completed templates found to merge"
    exit 1
fi

# Show completed templates
echo ""
echo "✅ Completed templates ready for merge:"
for template_id in "${completed_templates[@]}"; do
    echo "   - $template_id"
done

if [[ ${#incomplete_templates[@]} -gt 0 ]]; then
    echo ""
    echo "⚠️  Incomplete templates (will be skipped):"
    for template_id in "${incomplete_templates[@]}"; do
        echo "   - $template_id"
    done
fi

# Ask what to merge
echo ""
echo "Options:"
echo "1. Merge ALL completed templates (${#completed_templates[@]} templates)"
echo "2. Merge specific completed templates"
echo "3. Show detailed status and exit"

read -p "Choose option (1-3): " choice

case $choice in
    1)
        echo ""
        echo "🚀 Merging ALL completed templates..."
        
        successful_merges=()
        failed_merges=()
        
        for template_id in "${completed_templates[@]}"; do
            if merge_template "$template_id"; then
                successful_merges+=("$template_id")
                
                # Ask about cleanup
                read -p "   🧹 Remove worktree for $template_id? (y/N): " cleanup_choice
                if [[ "$cleanup_choice" =~ ^[Yy]$ ]]; then
                    cleanup_worktree "$template_id"
                fi
            else
                failed_merges+=("$template_id")
            fi
        done
        
        echo ""
        echo "🎉 Merge operation complete!"
        echo "   ✅ Successful: ${#successful_merges[@]} templates"
        echo "   ❌ Failed: ${#failed_merges[@]} templates"
        ;;
    2)
        echo ""
        echo "📝 Completed templates:"
        for i in "${!completed_templates[@]}"; do
            printf "%3d: %s\n" $((i+1)) "${completed_templates[$i]}"
        done
        echo ""
        read -p "Enter template IDs to merge (space-separated): " -a selected_templates
        
        successful_merges=()
        failed_merges=()
        
        for template_id in "${selected_templates[@]}"; do
            if [[ " ${completed_templates[@]} " =~ " ${template_id} " ]]; then
                if merge_template "$template_id"; then
                    successful_merges+=("$template_id")
                    
                    # Ask about cleanup
                    read -p "   🧹 Remove worktree for $template_id? (y/N): " cleanup_choice
                    if [[ "$cleanup_choice" =~ ^[Yy]$ ]]; then
                        cleanup_worktree "$template_id"
                    fi
                else
                    failed_merges+=("$template_id")
                fi
            else
                echo "⚠️  Template not completed or not found: $template_id"
            fi
        done
        
        echo ""
        echo "🎉 Merge operation complete!"
        echo "   ✅ Successful: ${#successful_merges[@]} templates"
        echo "   ❌ Failed: ${#failed_merges[@]} templates"
        ;;
    3)
        echo ""
        echo "📋 Detailed Status Report:"
        echo ""
        for template_id in "${available_templates[@]}"; do
            check_template_complete "$template_id"
        done
        echo ""
        echo "Use options 1 or 2 to merge completed templates"
        exit 0
        ;;
    *)
        echo "❌ Invalid choice"
        exit 1
        ;;
esac

echo ""
echo "🚀 Next steps:"
echo "1. Running build check to verify everything works..."

# Auto-run build check
echo "   🔨 Checking build..."
if npm run build > /dev/null 2>&1; then
    echo "   ✅ Build passed successfully!"
else
    echo "   ❌ Build failed - running auto-fix..."
    if ./check-all-builds.sh --fix; then
        echo "   ✅ Build errors fixed automatically!"
    else
        echo "   ⚠️  Some build errors need manual attention"
        echo "   Run './check-all-builds.sh --verbose' for details"
    fi
fi

echo ""
echo "2. Test the new templates in the app"
echo "3. Commit and push to remote if everything looks good"
echo "4. Continue with remaining incomplete templates"

echo ""
echo "🔧 Available build tools:"
echo "   ./force-build-check.sh     - Force all Claude instances to check builds"
echo "   ./check-all-builds.sh      - Check build status of all templates"
echo "   ./check-all-builds.sh --fix - Auto-fix missing components"