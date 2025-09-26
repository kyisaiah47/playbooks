#!/bin/bash

# Optimize star imports to named imports where beneficial
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

# Find files with star imports that might be optimized
STAR_FILES=($(find ./src -name "*.tsx" -o -name "*.ts" | xargs grep -l "import \* as\|import \*" | grep -v node_modules | grep -v .d.ts | grep -v generated))
TOTAL_FILES=${#STAR_FILES[@]}

log_colored "$BLUE" "🔍 Star Import Optimization - Found $TOTAL_FILES files with star imports"
log_colored "$BLUE" "===================================================================="

if [ $TOTAL_FILES -eq 0 ]; then
    log_colored "$GREEN" "✅ No star imports found!"
    exit 0
fi

# Backup directory
BACKUP_DIR="./backup-star-imports-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$BACKUP_DIR"
log_colored "$YELLOW" "Created backup directory: $BACKUP_DIR"
echo ""

OPTIMIZED_COUNT=0
KEPT_COUNT=0
REVIEW_COUNT=0

# Process each file
for file in "${STAR_FILES[@]}"; do
    filename=$(basename "$file")
    relative_path=$(echo "$file" | sed 's|./src/||')

    # Create backup
    cp "$file" "$BACKUP_DIR/"

    # Count star imports
    star_count=$(grep -c "import \* as\|import \*" "$file" 2>/dev/null || echo "0")

    if [ "$star_count" -gt 0 ]; then
        log_colored "$YELLOW" "🔧 $relative_path - Found $star_count star imports"

        # Show the actual imports for context
        grep -n "import \* as\|import \*" "$file" | head -3

        # Check if star imports should be kept
        should_keep=false

        # Keep star imports for these cases:
        # 1. Large libraries with many exports (React, lodash, etc.)
        # 2. Namespace imports that are used extensively
        # 3. Re-export patterns
        if grep -q "import \* as React\|import \* as _\|import \* as templates\|import \* as prompts\|import \* as articles" "$file"; then
            should_keep=true
        fi

        # Keep for utility libraries
        if grep -q "import \* as utils\|import \* as helpers\|import \* as constants" "$file"; then
            should_keep=true
        fi

        if [ "$should_keep" = true ]; then
            log_colored "$GREEN" "  ✅ Keeping beneficial star imports"
            ((KEPT_COUNT++))
        else
            # Check if the star import is used sparingly (could be optimized)
            original_content=$(cat "$file")

            # Count how many times the namespace is used
            namespace_usage=0

            # Extract namespace name from import
            namespace=$(grep "import \* as" "$file" | head -1 | sed 's/.*import \* as \([a-zA-Z0-9_]*\).*/\1/' || echo "")

            if [ ! -z "$namespace" ]; then
                namespace_usage=$(grep -c "$namespace\." "$file" 2>/dev/null || echo "0")

                if [ "$namespace_usage" -le 3 ]; then
                    log_colored "$BLUE" "  💡 $namespace used $namespace_usage times - could optimize to named imports"
                    ((REVIEW_COUNT++))
                else
                    log_colored "$GREEN" "  ✅ $namespace used $namespace_usage times - star import justified"
                    ((KEPT_COUNT++))
                fi
            else
                log_colored "$YELLOW" "  ⚠️  Complex star import needs manual review"
                ((REVIEW_COUNT++))
            fi
        fi
    fi

    echo ""
done

echo ""
log_colored "$BLUE" "📊 Star Import Optimization Summary"
log_colored "$BLUE" "==================================="
log_colored "$GREEN" "✅ Beneficial star imports kept: $KEPT_COUNT"
log_colored "$BLUE" "💡 Files that could be optimized: $REVIEW_COUNT"
log_colored "$BLUE" "📄 Total files processed: $TOTAL_FILES"

echo ""
log_colored "$BLUE" "💡 Recommendations:"
echo "• Convert star imports to named imports when using ≤3 exports"
echo "• Keep star imports for large utility libraries"
echo "• Consider named imports for better tree-shaking"
echo "• Use star imports for namespace organization"

echo ""
if [ $REVIEW_COUNT -gt 0 ]; then
    log_colored "$YELLOW" "⚠️  Found $REVIEW_COUNT files that could benefit from named imports:"
    echo "   Run: grep -r 'import \\* as' ./src --include='*.ts' --include='*.tsx'"
    echo "   Review each usage and consider converting to named imports"
fi

log_colored "$GREEN" "🎉 Star import analysis complete!"

if [ $REVIEW_COUNT -gt 0 ]; then
    log_colored "$YELLOW" "⚠️  Backup created at: $BACKUP_DIR"
fi