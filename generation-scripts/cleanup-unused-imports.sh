#!/bin/bash

# Unused imports cleanup script
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

# Find files with unused imports (commented out imports)
UNUSED_IMPORT_FILES=($(find ../src -name "*.tsx" -o -name "*.ts" | xargs grep -l "import.*\/\/" | grep -v node_modules | grep -v .d.ts))
TOTAL_FILES=${#UNUSED_IMPORT_FILES[@]}

log_colored "$BLUE" "🔍 Unused Imports Cleanup - Found $TOTAL_FILES files with commented imports"
log_colored "$BLUE" "=================================================================="

if [ $TOTAL_FILES -eq 0 ]; then
    log_colored "$GREEN" "✅ No unused imports found!"

    # Also check for likely unused imports (basic heuristic)
    log_colored "$YELLOW" "🔍 Checking for potentially unused imports..."

    # This is a simple check - in a real project you'd use a tool like ESLint
    POTENTIAL_UNUSED=($(find ../src -name "*.tsx" -o -name "*.ts" | xargs grep -l "^import.*{.*}" | head -10))

    if [ ${#POTENTIAL_UNUSED[@]} -gt 0 ]; then
        log_colored "$YELLOW" "⚠️  Consider running ESLint with unused imports rule for deeper analysis"
        log_colored "$BLUE" "Example: npx eslint --fix --rule '@typescript-eslint/no-unused-vars: error'"
    fi

    exit 0
fi

# Backup directory
BACKUP_DIR="../backup-imports-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$BACKUP_DIR"
log_colored "$YELLOW" "Created backup directory: $BACKUP_DIR"
echo ""

CLEANED_COUNT=0

# Process each file
for file in "${UNUSED_IMPORT_FILES[@]}"; do
    filename=$(basename "$file")
    relative_path=$(echo "$file" | sed 's|../src/||')

    # Create backup
    cp "$file" "$BACKUP_DIR/"

    # Count commented import lines
    commented_imports=$(grep -c "import.*\/\/" "$file" || echo "0")

    if [ $commented_imports -gt 0 ]; then
        log_colored "$YELLOW" "🔧 $relative_path - Removing $commented_imports commented imports"

        # Remove lines with commented imports
        sed -i.bak '/import.*\/\//d' "$file"

        # Remove empty lines that might be left behind
        sed -i.bak '/^$/N;/^\n$/d' "$file"

        # Remove backup file created by sed
        rm "${file}.bak" 2>/dev/null || true

        ((CLEANED_COUNT++))
    fi
done

echo ""
log_colored "$BLUE" "📊 Unused Imports Cleanup Summary"
log_colored "$BLUE" "=================================="
log_colored "$YELLOW" "🔧 Files cleaned: $CLEANED_COUNT"
log_colored "$BLUE" "📄 Total files processed: $TOTAL_FILES"

# Additional recommendations
echo ""
log_colored "$BLUE" "💡 Recommendations:"
echo "• Run 'npm run lint' to catch more unused imports"
echo "• Consider using ESLint rule: '@typescript-eslint/no-unused-vars'"
echo "• Use 'npx eslint --fix' to automatically remove unused imports"

log_colored "$GREEN" "🎉 Import cleanup complete!"

if [ $CLEANED_COUNT -gt 0 ]; then
    log_colored "$YELLOW" "⚠️  Backup created at: $BACKUP_DIR"
fi