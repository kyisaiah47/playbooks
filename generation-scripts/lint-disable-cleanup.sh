#!/bin/bash

# Clean up eslint-disable and @ts-ignore comments
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

# Find files with eslint-disable or @ts-ignore comments
LINT_FILES=($(find ./src -name "*.tsx" -o -name "*.ts" | xargs grep -l "eslint-disable\|@ts-ignore" | grep -v node_modules | grep -v .d.ts | grep -v generated))
TOTAL_FILES=${#LINT_FILES[@]}

log_colored "$BLUE" "🔍 Lint Disable Cleanup - Found $TOTAL_FILES files with lint disables"
log_colored "$BLUE" "==================================================================="

if [ $TOTAL_FILES -eq 0 ]; then
    log_colored "$GREEN" "✅ No lint disable comments found!"
    exit 0
fi

# Backup directory
BACKUP_DIR="./backup-lint-disables-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$BACKUP_DIR"
log_colored "$YELLOW" "Created backup directory: $BACKUP_DIR"
echo ""

CLEANED_COUNT=0
KEPT_COUNT=0
REVIEW_COUNT=0

# Process each file
for file in "${LINT_FILES[@]}"; do
    filename=$(basename "$file")
    relative_path=$(echo "$file" | sed 's|./src/||')

    # Create backup
    cp "$file" "$BACKUP_DIR/"

    # Count lint disables
    disable_count=$(grep -c "eslint-disable\|@ts-ignore" "$file" 2>/dev/null || echo "0")

    if [ "$disable_count" -gt 0 ]; then
        log_colored "$YELLOW" "🔧 $relative_path - Found $disable_count lint disables"

        # Show the actual disables for context
        grep -n "eslint-disable\|@ts-ignore" "$file" | head -3

        # Check if disables are for legitimate reasons
        has_legitimate_disables=false

        # Keep disables for known legitimate cases
        if grep -q "eslint-disable-next-line.*no-explicit-any\|eslint-disable.*@typescript-eslint/no-explicit-any\|@ts-ignore.*external library\|@ts-ignore.*third-party" "$file"; then
            has_legitimate_disables=true
        fi

        # Keep disables in generated or external files
        if [[ "$file" =~ (generated/|external/|vendor/) ]]; then
            has_legitimate_disables=true
        fi

        if [ "$has_legitimate_disables" = true ]; then
            log_colored "$GREEN" "  ✅ Keeping legitimate lint disables"
            ((KEPT_COUNT++))
        else
            # Remove common unnecessary disables
            original_content=$(cat "$file")

            # Remove generic @ts-ignore without good reason
            sed -i.bak '/\/\/ @ts-ignore$/d' "$file"
            sed -i.bak '/\/\* @ts-ignore \*\/$/d' "$file"

            # Remove generic eslint-disable-next-line
            sed -i.bak '/\/\/ eslint-disable-next-line$/d' "$file"

            # Remove some common unnecessary disables
            sed -i.bak '/\/\/ eslint-disable-next-line.*prefer-const$/d' "$file"
            sed -i.bak '/\/\/ eslint-disable-next-line.*no-console$/d' "$file"

            # Remove backup file created by sed
            rm "${file}.bak" 2>/dev/null || true

            # Check if we actually made changes
            new_content=$(cat "$file")
            if [ "$original_content" != "$new_content" ]; then
                new_count=$(grep -c "eslint-disable\|@ts-ignore" "$file" 2>/dev/null || echo "0")
                log_colored "$GREEN" "  ✅ Removed $((disable_count - new_count)) unnecessary disables"
                ((CLEANED_COUNT++))
            else
                log_colored "$YELLOW" "  ⚠️  Complex disables need manual review"
                ((REVIEW_COUNT++))
            fi
        fi
    fi

    echo ""
done

echo ""
log_colored "$BLUE" "📊 Lint Disable Cleanup Summary"
log_colored "$BLUE" "==============================="
log_colored "$YELLOW" "🔧 Files with removed disables: $CLEANED_COUNT"
log_colored "$GREEN" "✅ Files with legitimate disables: $KEPT_COUNT"
log_colored "$BLUE" "⚠️  Files needing manual review: $REVIEW_COUNT"
log_colored "$BLUE" "📄 Total files processed: $TOTAL_FILES"

echo ""
log_colored "$BLUE" "💡 Recommendations:"
echo "• Review remaining lint disables to see if they're still needed"
echo "• Fix underlying issues instead of disabling rules when possible"
echo "• Use specific eslint-disable comments with rule names"
echo "• Add comments explaining why disables are necessary"

log_colored "$GREEN" "🎉 Lint disable cleanup complete!"

if [ $CLEANED_COUNT -gt 0 ]; then
    log_colored "$YELLOW" "⚠️  Backup created at: $BACKUP_DIR"
fi