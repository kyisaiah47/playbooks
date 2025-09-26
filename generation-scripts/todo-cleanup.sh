#!/bin/bash

# TODO and placeholder cleanup script
set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log_colored() {
    local color=$1
    local message=$2
    echo -e "${color}$message${NC}"
}

# Find all files with TODO/FIXME/HACK/XXX comments
TODO_FILES=($(find ./src -name "*.tsx" -o -name "*.ts" | xargs grep -l "TODO\|FIXME\|HACK\|XXX" | grep -v node_modules | grep -v .d.ts | grep -v generated))
TOTAL_FILES=${#TODO_FILES[@]}

log_colored "$BLUE" "🔍 TODO Cleanup - Found $TOTAL_FILES files with placeholder comments"
log_colored "$BLUE" "================================================================"

if [ $TOTAL_FILES -eq 0 ]; then
    log_colored "$GREEN" "✅ No TODO comments found!"
    exit 0
fi

# Backup directory
BACKUP_DIR="./backup-todos-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$BACKUP_DIR"
log_colored "$YELLOW" "Created backup directory: $BACKUP_DIR"
echo ""

CLEANED_COUNT=0
KEPT_COUNT=0

# Process each file
for file in "${TODO_FILES[@]}"; do
    filename=$(basename "$file")
    relative_path=$(echo "$file" | sed 's|./src/||')

    # Create backup
    cp "$file" "$BACKUP_DIR/"

    # Count TODO comments
    todo_count=$(grep -c "TODO\|FIXME\|HACK\|XXX" "$file")

    log_colored "$YELLOW" "🔧 $relative_path - Found $todo_count placeholder comments"

    # Show the actual TODOs for context
    grep -n "TODO\|FIXME\|HACK\|XXX" "$file" | head -3

    # For simple TODOs like "TODO: implement X", remove the line
    # Keep complex TODOs that provide valuable context
    if grep -q "TODO: Save\|TODO: implement\|TODO: add\|FIXME:\|HACK:" "$file"; then
        # Remove simple placeholder TODOs
        sed -i.bak '/\/\/ TODO: Save\|\/\/ TODO: implement\|\/\/ TODO: add\|\/\/ FIXME:\|\/\/ HACK:/d' "$file"
        sed -i.bak '/\/\* TODO: Save\|\/\* TODO: implement\|\/\* TODO: add\|\/\* FIXME:\|\/\* HACK:/d' "$file"

        # Remove backup file created by sed
        rm "${file}.bak" 2>/dev/null || true

        ((CLEANED_COUNT++))
    else
        log_colored "$GREEN" "✅ $relative_path - Keeping complex TODOs (provide context)"
        ((KEPT_COUNT++))
    fi

    echo ""
done

echo ""
log_colored "$BLUE" "📊 TODO Cleanup Summary"
log_colored "$BLUE" "======================="
log_colored "$YELLOW" "🔧 Files cleaned: $CLEANED_COUNT"
log_colored "$GREEN" "✅ Files with contextual TODOs kept: $KEPT_COUNT"
log_colored "$BLUE" "📄 Total files processed: $TOTAL_FILES"

echo ""
log_colored "$BLUE" "💡 Recommendations:"
echo "• Review remaining TODOs to see if they can be implemented"
echo "• Convert complex TODOs to GitHub issues for tracking"
echo "• Use TODO comments sparingly in production code"

log_colored "$GREEN" "🎉 TODO cleanup complete!"

if [ $CLEANED_COUNT -gt 0 ]; then
    log_colored "$YELLOW" "⚠️  Backup created at: $BACKUP_DIR"
fi