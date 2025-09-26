#!/bin/bash

# Console.log cleanup script
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

# Find all console.log statements
CONSOLE_FILES=($(find ../src -name "*.tsx" -o -name "*.ts" | xargs grep -l "console\.log" | grep -v node_modules))
TOTAL_FILES=${#CONSOLE_FILES[@]}

if [ $TOTAL_FILES -eq 0 ]; then
    log_colored "$GREEN" "✅ No console.log statements found!"
    exit 0
fi

log_colored "$BLUE" "🔍 Console.log Cleanup - Found $TOTAL_FILES files with console.log"
log_colored "$BLUE" "========================================================"

# Backup directory
BACKUP_DIR="../backup-console-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$BACKUP_DIR"
log_colored "$YELLOW" "Created backup directory: $BACKUP_DIR"
echo ""

REMOVED_COUNT=0
KEPT_COUNT=0

# Process each file
for file in "${CONSOLE_FILES[@]}"; do
    filename=$(basename "$file")
    relative_path=$(echo "$file" | sed 's|../src/||')

    # Create backup
    cp "$file" "$BACKUP_DIR/"

    # Count console.log statements
    console_count=$(grep -c "console\.log" "$file")

    # Check if it's in error handling or development-only code
    if grep -q "useEffect.*error\|catch.*error\|error reporting\|NODE_ENV.*development" "$file"; then
        log_colored "$GREEN" "✅ $relative_path - Keeping $console_count console.log (error handling)"
        ((KEPT_COUNT+=console_count))
    else
        log_colored "$YELLOW" "🔧 $relative_path - Removing $console_count console.log statements"

        # Remove console.log statements but keep error logging
        sed -i.bak '/console\.log/d' "$file"

        # Remove backup file created by sed
        rm "${file}.bak" 2>/dev/null || true

        ((REMOVED_COUNT+=console_count))
    fi
done

echo ""
log_colored "$BLUE" "📊 Console.log Cleanup Summary"
log_colored "$BLUE" "==============================="
log_colored "$YELLOW" "🔧 Removed console.log statements: $REMOVED_COUNT"
log_colored "$GREEN" "✅ Kept error logging statements: $KEPT_COUNT"
log_colored "$BLUE" "📄 Total files processed: $TOTAL_FILES"

echo ""
log_colored "$GREEN" "🎉 Console.log cleanup complete!"

if [ $REMOVED_COUNT -gt 0 ]; then
    log_colored "$YELLOW" "⚠️  Backup created at: $BACKUP_DIR"
fi