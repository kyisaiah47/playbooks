#!/bin/bash

# TypeScript type cleanup - reduce any/unknown usage
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

# Find files with 'any' or 'unknown' types (excluding generated and data files)
TYPE_FILES=($(find ./src -name "*.tsx" -o -name "*.ts" | xargs grep -l ": any\|: unknown\|Array<any>\|Array<unknown>" | grep -v generated | grep -v node_modules | grep -v .d.ts))
TOTAL_FILES=${#TYPE_FILES[@]}

log_colored "$BLUE" "🔍 TypeScript Type Cleanup - Found $TOTAL_FILES files with loose types"
log_colored "$BLUE" "===================================================================="

if [ $TOTAL_FILES -eq 0 ]; then
    log_colored "$GREEN" "✅ No loose types found!"
    exit 0
fi

# Backup directory
BACKUP_DIR="./backup-types-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$BACKUP_DIR"
log_colored "$YELLOW" "Created backup directory: $BACKUP_DIR"
echo ""

CLEANED_COUNT=0
SKIPPED_COUNT=0

# Process each file
for file in "${TYPE_FILES[@]}"; do
    filename=$(basename "$file")
    relative_path=$(echo "$file" | sed 's|./src/||')

    # Skip data files and templates (they often have legitimate any usage)
    if [[ "$file" =~ (data/|templates/|articles/|prompts/) ]]; then
        log_colored "$GREEN" "✅ $relative_path - Skipping data file (legitimate any usage)"
        ((SKIPPED_COUNT++))
        continue
    fi

    # Create backup
    cp "$file" "$BACKUP_DIR/"

    # Count loose types
    type_count=$(grep -c ": any\|: unknown\|Array<any>\|Array<unknown>" "$file" 2>/dev/null || echo "0")

    if [ "$type_count" -gt 0 ]; then
        log_colored "$YELLOW" "🔧 $relative_path - Found $type_count loose types"

        # Show the actual types for context
        grep -n ": any\|: unknown\|Array<any>\|Array<unknown>" "$file" | head -3

        # Replace common patterns with better types
        # Replace event handlers
        sed -i.bak 's/: any) => void/: React.MouseEvent) => void/g' "$file"
        sed -i.bak 's/event: any/event: React.ChangeEvent<HTMLInputElement>/g' "$file"

        # Replace common object types
        sed -i.bak 's/: any\[\]/: Record<string, unknown>[]/g' "$file"
        sed -i.bak 's/: any;/: Record<string, unknown>;/g' "$file"

        # Replace function parameters
        sed -i.bak 's/(props: any)/(props: Record<string, unknown>)/g' "$file"

        # Remove backup file created by sed
        rm "${file}.bak" 2>/dev/null || true

        # Check if we actually made changes
        new_count=$(grep -c ": any\|: unknown\|Array<any>\|Array<unknown>" "$file" 2>/dev/null || echo "0")
        if [ "$new_count" -lt "$type_count" ]; then
            log_colored "$GREEN" "  ✅ Improved $((type_count - new_count)) type annotations"
            ((CLEANED_COUNT++))
        else
            log_colored "$YELLOW" "  ⚠️  Complex types need manual review"
        fi
    fi

    echo ""
done

echo ""
log_colored "$BLUE" "📊 TypeScript Type Cleanup Summary"
log_colored "$BLUE" "==================================="
log_colored "$YELLOW" "🔧 Files improved: $CLEANED_COUNT"
log_colored "$GREEN" "✅ Data files skipped: $SKIPPED_COUNT"
log_colored "$BLUE" "📄 Total files processed: $TOTAL_FILES"

echo ""
log_colored "$BLUE" "💡 Recommendations:"
echo "• Review remaining 'any' types for proper typing"
echo "• Use 'unknown' instead of 'any' when possible"
echo "• Create proper interfaces for complex objects"
echo "• Use generic types where appropriate"

log_colored "$GREEN" "🎉 Type cleanup complete!"

if [ $CLEANED_COUNT -gt 0 ]; then
    log_colored "$YELLOW" "⚠️  Backup created at: $BACKUP_DIR"
fi