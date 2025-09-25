#!/bin/bash

# Create worktrees for new templates
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TEMPLATE_LIST="$SCRIPT_DIR/todo/new-templates-list.txt"

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

log_colored() {
    local color=$1
    local message=$2
    echo -e "${color}$message${NC}"
}

if [[ ! -f "$TEMPLATE_LIST" ]]; then
    log_colored "$RED" "Error: Template list file not found at $TEMPLATE_LIST"
    exit 1
fi

log_colored "$BLUE" "🚀 Creating worktrees for new templates..."
echo ""

# Count templates
total_templates=$(wc -l < "$TEMPLATE_LIST")
log_colored "$YELLOW" "Found $total_templates new templates to create"
echo ""

created=0
failed=0

while IFS= read -r template; do
    # Skip empty lines
    if [[ -z "$template" ]]; then
        continue
    fi

    worktree_dir="../templata-$template"
    branch_name="template-$template"

    log_colored "$BLUE" "Creating: $template"

    # Check if worktree already exists
    if [[ -d "$worktree_dir" ]]; then
        log_colored "$YELLOW" "  ⚠️  Worktree already exists: $worktree_dir"
        continue
    fi

    # Create branch if it doesn't exist
    if ! git show-ref --verify --quiet "refs/heads/$branch_name"; then
        git branch "$branch_name" main
        log_colored "$GREEN" "  ✅ Created branch: $branch_name"
    fi

    # Create worktree
    if git worktree add "$worktree_dir" "$branch_name"; then
        log_colored "$GREEN" "  ✅ Created worktree: $worktree_dir"
        ((created++))
    else
        log_colored "$RED" "  ❌ Failed to create worktree: $worktree_dir"
        ((failed++))
    fi

    echo ""

done < "$TEMPLATE_LIST"

echo ""
log_colored "$GREEN" "📊 SUMMARY"
log_colored "$GREEN" "=========="
log_colored "$GREEN" "✅ Created: $created worktrees"
if [[ $failed -gt 0 ]]; then
    log_colored "$RED" "❌ Failed: $failed worktrees"
fi
log_colored "$GREEN" "🎉 Done!"