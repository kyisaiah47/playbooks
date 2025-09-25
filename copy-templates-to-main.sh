#!/bin/bash

# Copy all generated template files from worktrees to main repo
# This consolidates all template-*.ts files into the main src/data directory

set -e

# Configuration
MAIN_DATA_DIR="src/data"
MAIN_REGISTRY_DIR="src/registry"
LOG_FILE="template-copy.log"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" | tee -a "$LOG_FILE"
}

log_colored() {
    local color=$1
    local message=$2
    echo -e "${color}$(date '+%Y-%m-%d %H:%M:%S') - $message${NC}" | tee -a "$LOG_FILE"
}

# Create directories if they don't exist
mkdir -p "$MAIN_DATA_DIR"
mkdir -p "$MAIN_REGISTRY_DIR"

log_colored "$BLUE" "Starting template file consolidation"

# Get all worktree paths
WORKTREES=$(git worktree list | grep 'templata-' | grep -v '^/Users/.*templata[[:space:]]' | awk '{print $1}')

COPIED_COUNT=0
MISSING_COUNT=0
TOTAL_COUNT=0

log_colored "$BLUE" "Found $(echo "$WORKTREES" | wc -l) worktrees to process"

# Copy template files from each worktree
while IFS= read -r worktree_path; do
    if [[ -z "$worktree_path" ]]; then
        continue
    fi

    TOTAL_COUNT=$((TOTAL_COUNT + 1))
    template_name=$(basename "$worktree_path" | sed 's/^templata-//')
    source_file="$worktree_path/src/data/template-$template_name.ts"
    dest_file="$MAIN_DATA_DIR/template-$template_name.ts"

    if [[ -f "$source_file" ]]; then
        cp "$source_file" "$dest_file"
        log_colored "$GREEN" "Copied: template-$template_name.ts"
        COPIED_COUNT=$((COPIED_COUNT + 1))
    else
        log_colored "$YELLOW" "Missing: template-$template_name.ts (in $worktree_path)"
        MISSING_COUNT=$((MISSING_COUNT + 1))
    fi
done <<< "$WORKTREES"

log_colored "$GREEN" "Template file copy complete!"
log_colored "$GREEN" "Total worktrees: $TOTAL_COUNT"
log_colored "$GREEN" "Files copied: $COPIED_COUNT"
log_colored "$YELLOW" "Files missing: $MISSING_COUNT"

# List all template files now in main
log_colored "$BLUE" "Template files now in main repo:"
ls -1 "$MAIN_DATA_DIR"/template-*.ts | wc -l | xargs echo "Count:"
ls -1 "$MAIN_DATA_DIR"/template-*.ts | head -10
if [[ $(ls -1 "$MAIN_DATA_DIR"/template-*.ts | wc -l) -gt 10 ]]; then
    echo "... and $(($(ls -1 "$MAIN_DATA_DIR"/template-*.ts | wc -l) - 10)) more"
fi

log_colored "$GREEN" "Template consolidation complete!"