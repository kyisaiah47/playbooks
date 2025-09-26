#!/bin/bash

# React import cleanup for Next.js 13+ - remove unnecessary React imports
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

# Find files with React imports that might be unnecessary in Next.js 13+
REACT_FILES=($(find ./src -name "*.tsx" -o -name "*.ts" | xargs grep -l "^import React" | grep -v node_modules | grep -v .d.ts | grep -v generated))
TOTAL_FILES=${#REACT_FILES[@]}

log_colored "$BLUE" "🔍 React Import Cleanup - Found $TOTAL_FILES files with React imports"
log_colored "$BLUE" "======================================================================"

if [ $TOTAL_FILES -eq 0 ]; then
    log_colored "$GREEN" "✅ No React imports found!"
    exit 0
fi

# Backup directory
BACKUP_DIR="./backup-react-imports-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$BACKUP_DIR"
log_colored "$YELLOW" "Created backup directory: $BACKUP_DIR"
echo ""

CLEANED_COUNT=0
KEPT_COUNT=0

# Process each file
for file in "${REACT_FILES[@]}"; do
    filename=$(basename "$file")
    relative_path=$(echo "$file" | sed 's|./src/||')

    # Create backup
    cp "$file" "$BACKUP_DIR/"

    # Check if React is actually used beyond JSX
    needs_react=false

    # Check for React-specific usage
    if grep -q "React\.\|useEffect\|useState\|useRef\|useCallback\|useMemo\|createContext\|forwardRef\|memo\|Component\|PureComponent" "$file"; then
        needs_react=true
    fi

    # Check for class components
    if grep -q "extends React\.\|extends Component\|extends PureComponent" "$file"; then
        needs_react=true
    fi

    # Check for React types
    if grep -q "React\.FC\|React\.Component\|React\.ReactNode\|React\.MouseEvent\|React\.ChangeEvent" "$file"; then
        needs_react=true
    fi

    if [ "$needs_react" = true ]; then
        log_colored "$GREEN" "✅ $relative_path - Keeping React import (needed for hooks/types/components)"
        ((KEPT_COUNT++))
    else
        log_colored "$YELLOW" "🔧 $relative_path - Removing unnecessary React import"

        # Remove generic React import for JSX-only files
        sed -i.bak '/^import React from ['\''"]react['\''"];*$/d' "$file"
        sed -i.bak '/^import React, { } from ['\''"]react['\''"];*$/d' "$file"

        # Remove backup file created by sed
        rm "${file}.bak" 2>/dev/null || true

        ((CLEANED_COUNT++))
    fi
done

echo ""
log_colored "$BLUE" "📊 React Import Cleanup Summary"
log_colored "$BLUE" "==============================="
log_colored "$YELLOW" "🔧 Unnecessary imports removed: $CLEANED_COUNT"
log_colored "$GREEN" "✅ Necessary imports kept: $KEPT_COUNT"
log_colored "$BLUE" "📄 Total files processed: $TOTAL_FILES"

echo ""
log_colored "$BLUE" "💡 Benefits:"
echo "• Reduced bundle size by removing unused React imports"
echo "• Cleaner code following Next.js 13+ conventions"
echo "• Faster TypeScript compilation"

log_colored "$GREEN" "🎉 React import cleanup complete!"

if [ $CLEANED_COUNT -gt 0 ]; then
    log_colored "$YELLOW" "⚠️  Backup created at: $BACKUP_DIR"
fi