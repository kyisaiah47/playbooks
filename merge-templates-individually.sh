#!/bin/bash

# =============================================================================
# Merge Templates Individually - Handle conflicts by merging one at a time
# =============================================================================

set -e

echo "🔀 Individual Template Merger"
echo "============================="

MAIN_REPO="/Users/ikim1/Downloads/templata"
WORKTREES_DIR="/Users/ikim1/Downloads/templata-worktrees"

cd "$MAIN_REPO"

# Our 7 completed linted templates (prioritize these)
LINTED_TEMPLATES=(
    "baby-planning"
    "car-buying" 
    "coaching-business"
    "college-planning"
    "consulting-business"
    "content-creation"
    "crypto-portfolio"
)

# Additional completed templates found by merge script
ADDITIONAL_COMPLETED=(
    "debt-payoff"
    "divorce-coordination"
    "dropshipping"
    "e-commerce-store"
    "elder-care"
    "fitness-journey"
    "home-buying"
)

# Files that should NOT be merged (will cause conflicts)
SHARED_FILES=(
    "src/app/layout.tsx"
    "src/app/page.tsx"
    "src/components/app-sidebar.tsx"
    "src/app/templates/page.tsx"
    "src/app/about/page.tsx"
    "src/app/faq/page.tsx"
)

# Function to merge a single template with conflict resolution
merge_template_individual() {
    local template_id="$1"
    local branch_name="feature/template-$template_id"
    
    echo ""
    echo "🎯 Merging template: $template_id"
    echo "   Branch: $branch_name"
    
    # Ensure we're on main
    git checkout main
    git pull origin main || true
    
    # Check if branch exists
    if ! git show-ref --verify --quiet refs/heads/$branch_name; then
        echo "   ❌ Branch not found: $branch_name"
        return 1
    fi
    
    # Create a temporary branch for this merge
    local temp_branch="temp-merge-$template_id"
    git checkout -b "$temp_branch" "$branch_name"
    
    echo "   🚫 Removing shared files from merge..."
    # Remove shared files that will conflict
    for shared_file in "${SHARED_FILES[@]}"; do
        if git ls-tree HEAD --name-only | grep -q "^$shared_file$"; then
            echo "      - Removing $shared_file"
            git reset HEAD~1 -- "$shared_file" 2>/dev/null || true
            git checkout HEAD~1 -- "$shared_file" 2>/dev/null || true
        fi
    done
    
    # Commit the cleaned version
    if ! git diff --quiet; then
        git add -A
        git commit -m "Clean shared files for conflict-free merge"
    fi
    
    # Switch back to main and merge the cleaned branch
    git checkout main
    
    echo "   🔀 Performing clean merge..."
    if git merge "$temp_branch" --no-ff -m "feat: add $template_id template (template-only files)

Template-specific components and functionality:
- Context provider and state management
- Setup wizard and configuration
- Template-specific components
- Routing and navigation

Shared file integration to be done separately.

🤖 Generated with individual template merger"; then
        echo "   ✅ Merge successful!"
        
        # Clean up temp branch
        git branch -D "$temp_branch"
        
        return 0
    else
        echo "   ❌ Merge failed even with cleaned files"
        git reset --hard HEAD
        git branch -D "$temp_branch" 2>/dev/null || true
        return 1
    fi
}

# Function to integrate template into shared files
integrate_template_shared_files() {
    local template_id="$1"
    
    echo "   🔗 Integrating $template_id into shared files..."
    
    # Add provider to layout.tsx
    local provider_name=$(echo "$template_id" | sed 's/-\([a-z]\)/\U\1/g' | sed 's/^./\U&/')
    local context_file="src/contexts/${template_id}-context.tsx"
    
    if [[ -f "$context_file" ]]; then
        # Add import
        if ! grep -q "import.*${provider_name}Provider" src/app/layout.tsx; then
            sed -i '' "/import.*contexts.*context/a\\
import { ${provider_name}Provider } from \"@/contexts/${template_id}-context\"" src/app/layout.tsx
        fi
        
        # Add provider wrapper (find a good spot in the provider tree)
        if ! grep -q "${provider_name}Provider>" src/app/layout.tsx; then
            # Add before the closing of another provider
            sed -i '' "s|                    <HomeBuyingProvider>|                    <${provider_name}Provider>\\
                      <HomeBuyingProvider>|" src/app/layout.tsx
            sed -i '' "s|                    </HomeBuyingProvider>|                    </HomeBuyingProvider>\\
                    </${provider_name}Provider>|" src/app/layout.tsx
        fi
        
        echo "      ✅ Added provider to layout.tsx"
    fi
    
    # Add to template gallery (basic entry)
    local templates_page="src/app/templates/page.tsx"
    if [[ -f "$templates_page" ]] && ! grep -q "$template_id" "$templates_page"; then
        # Add template entry to the templates array (this is a simplified approach)
        echo "      📝 Template should be added to gallery (manual step)"
    fi
}

# Show options
echo ""
echo "📋 Available merge strategies:"
echo "1. Merge our 7 linted templates (recommended)"
echo "2. Merge all 14 completed templates" 
echo "3. Merge specific templates"
echo "4. Show template status"

read -p "Choose option (1-4): " choice

successful_merges=()
failed_merges=()

case $choice in
    1)
        echo "🚀 Merging 7 linted templates..."
        for template_id in "${LINTED_TEMPLATES[@]}"; do
            if merge_template_individual "$template_id"; then
                successful_merges+=("$template_id")
                integrate_template_shared_files "$template_id"
            else
                failed_merges+=("$template_id")
            fi
        done
        ;;
    2)
        echo "🚀 Merging all 14 completed templates..."
        all_templates=("${LINTED_TEMPLATES[@]}" "${ADDITIONAL_COMPLETED[@]}")
        for template_id in "${all_templates[@]}"; do
            if merge_template_individual "$template_id"; then
                successful_merges+=("$template_id")
                integrate_template_shared_files "$template_id"
            else
                failed_merges+=("$template_id")
            fi
        done
        ;;
    3)
        echo "📝 Available templates:"
        all_templates=("${LINTED_TEMPLATES[@]}" "${ADDITIONAL_COMPLETED[@]}")
        for i in "${!all_templates[@]}"; do
            printf "%3d: %s\n" $((i+1)) "${all_templates[$i]}"
        done
        echo ""
        read -p "Enter template IDs (space-separated): " -a selected_templates
        
        for template_id in "${selected_templates[@]}"; do
            if merge_template_individual "$template_id"; then
                successful_merges+=("$template_id")
                integrate_template_shared_files "$template_id"
            else
                failed_merges+=("$template_id")
            fi
        done
        ;;
    4)
        echo "📊 Template Status:"
        echo ""
        echo "✅ Linted templates (90%+ scores):"
        for template_id in "${LINTED_TEMPLATES[@]}"; do
            echo "   - $template_id"
        done
        echo ""
        echo "✅ Additional completed templates:"
        for template_id in "${ADDITIONAL_COMPLETED[@]}"; do
            echo "   - $template_id"
        done
        exit 0
        ;;
    *)
        echo "❌ Invalid choice"
        exit 1
        ;;
esac

# Summary
echo ""
echo "🎉 Individual merge operation complete!"
echo "   ✅ Successful: ${#successful_merges[@]} templates"
echo "   ❌ Failed: ${#failed_merges[@]} templates"

if [[ ${#successful_merges[@]} -gt 0 ]]; then
    echo ""
    echo "✅ Successfully merged:"
    for template_id in "${successful_merges[@]}"; do
        echo "   - $template_id"
    done
fi

if [[ ${#failed_merges[@]} -gt 0 ]]; then
    echo ""
    echo "❌ Failed to merge:"
    for template_id in "${failed_merges[@]}"; do
        echo "   - $template_id"
    done
fi

# Final steps
if [[ ${#successful_merges[@]} -gt 0 ]]; then
    echo ""
    echo "🔄 Next steps:"
    echo "1. Review changes: git log --oneline -${#successful_merges[@]}"
    echo "2. Test build: npm run build"
    echo "3. Manual integration:"
    echo "   - Update template gallery with new templates"
    echo "   - Update sidebar entries if needed"
    echo "   - Test each template individually"
    echo "4. Commit shared file changes"
    echo "5. Push to remote when ready"
fi