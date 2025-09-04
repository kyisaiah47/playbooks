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

# Files that should NOT be merged (will cause conflicts) - matches linter FORBIDDEN_FILES
SHARED_FILES=(
    "src/app/layout.tsx"
    "src/app/page.tsx"
    "src/components/app-sidebar.tsx"
    "src/app/templates/page.tsx"
    "src/app/about/page.tsx"
    "src/app/faq/page.tsx"
    "src/components/sidebar-left.tsx"
    "src/components/theme-provider.tsx"
    "src/components/wedding-setup-wizard.tsx"
    "package.json"
    "next.config.js"
    "tailwind.config.js"
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
    
    # 1. Add provider to layout.tsx
    integrate_provider_to_layout "$template_id"
    
    # 2. Add navigation entry to app-sidebar.tsx
    integrate_sidebar_navigation "$template_id" 
    
    # 3. Add template to templates gallery page
    integrate_template_gallery "$template_id"
    
    # 4. Update main landing page if needed
    integrate_landing_page "$template_id"
    
    echo "      ✅ Post-merge integration completed for $template_id"
}

# Add provider to layout.tsx
integrate_provider_to_layout() {
    local template_id="$1"
    local provider_name=$(echo "$template_id" | sed 's/-\([a-z]\)/\U\1/g' | sed 's/^./\U&/')
    local context_file="src/contexts/${template_id}-context.tsx"
    
    if [[ -f "$context_file" ]]; then
        # Add import
        if ! grep -q "import.*${provider_name}Provider" src/app/layout.tsx; then
            # Find the last context import and add after it
            sed -i '' "/import.*contexts.*context/a\\
import { ${provider_name}Provider } from \"@/contexts/${template_id}-context\"" src/app/layout.tsx
        fi
        
        # Add provider wrapper in the provider tree
        if ! grep -q "${provider_name}Provider>" src/app/layout.tsx; then
            # Add as outermost provider for now (can be refined)
            sed -i '' "s|        <ThemeProvider|        <${provider_name}Provider>\\
          <ThemeProvider|" src/app/layout.tsx
            
            # Find the closing and add the closing tag
            sed -i '' "s|        </body>|          </${provider_name}Provider>\\
        </body>|" src/app/layout.tsx
        fi
        
        echo "      ✅ Added ${provider_name}Provider to layout.tsx"
    else
        echo "      ⚠️  No context file found: $context_file"
    fi
}

# Add navigation entry to app-sidebar.tsx
integrate_sidebar_navigation() {
    local template_id="$1"
    local template_display_name=$(echo "$template_id" | sed 's/-/ /g' | sed 's/\b\w/\U&/g')
    
    if [[ -f "src/components/app-sidebar.tsx" ]]; then
        # Check if template already exists in sidebar
        if ! grep -q "$template_id" src/components/app-sidebar.tsx; then
            echo "      📝 Add $template_display_name to sidebar navigation (manual step)"
            echo "         Template ID: $template_id"
            echo "         Display Name: $template_display_name"
        else
            echo "      ✅ Template already in sidebar navigation"
        fi
    fi
}

# Add template to templates gallery page
integrate_template_gallery() {
    local template_id="$1"
    local template_display_name=$(echo "$template_id" | sed 's/-/ /g' | sed 's/\b\w/\U&/g')
    
    if [[ -f "src/app/templates/page.tsx" ]]; then
        if ! grep -q "$template_id" src/app/templates/page.tsx; then
            echo "      📝 Add $template_display_name to template gallery (manual step)"
            echo "         Template route: /$template_id"
            echo "         Display name: $template_display_name"
        else
            echo "      ✅ Template already in gallery"
        fi
    fi
}

# Update main landing page if needed
integrate_landing_page() {
    local template_id="$1"
    
    if [[ -f "src/app/page.tsx" ]]; then
        if ! grep -q "$template_id" src/app/page.tsx; then
            echo "      📝 Consider adding $template_id to landing page features (optional)"
        else
            echo "      ✅ Template referenced in landing page"
        fi
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
    echo "2. Manual shared file integration (marked with 📝 above):"
    echo "   - Update app-sidebar.tsx with navigation entries"
    echo "   - Update templates gallery page with new templates"
    echo "   - Add landing page features (optional)"
    echo "   - Review and test provider integrations in layout.tsx"
    echo "3. Test build: npm run build"
    echo "4. Test each template individually:"
    for template_id in "${successful_merges[@]}"; do
        echo "   - Test /$template_id route and setup wizard"
    done
    echo "5. Commit shared file changes:"
    echo "   git add -A && git commit -m \"feat: integrate ${#successful_merges[@]} templates into shared files\""
    echo "6. Push to remote when ready: git push origin main"
    echo ""
    echo "💡 Tip: Use 'npm run dev' to test templates interactively"
fi