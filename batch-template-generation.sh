#!/bin/bash

# Batch Template Generation Script
# Processes all templata worktrees in manageable batches to avoid system overload

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BATCH_SIZE=${BATCH_SIZE:-20}         # Number of templates to process per batch
BATCH_DELAY=${BATCH_DELAY:-60}      # Seconds to wait between batches
TEMPLATE_DELAY=${TEMPLATE_DELAY:-2}  # Seconds to wait between individual templates
PROGRESS_FILE=".batch-generation-progress"
LOG_FILE="batch-generation.log"

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

# Get all templata worktrees
get_worktrees() {
    git worktree list | grep 'templata-' | grep -v '^/Users/.*templata[[:space:]]' | awk '{print $1}' | sort
}

# Get template name from worktree path
get_template_name() {
    local worktree_path="$1"
    basename "$worktree_path" | sed 's/^templata-//'
}

# Check if template has been processed
is_template_processed() {
    local template="$1"
    grep -q "^$template$" "$PROGRESS_FILE" 2>/dev/null || return 1
}

# Mark template as processed
mark_template_processed() {
    local template="$1"
    echo "$template" >> "$PROGRESS_FILE"
}

# Process a single template
process_template() {
    local worktree_path="$1"
    local template=$(get_template_name "$worktree_path")

    if is_template_processed "$template"; then
        log_colored "$YELLOW" "Skipping already processed: $template"
        return 0
    fi

    log_colored "$BLUE" "Processing template: $template"
    log_colored "$BLUE" "Worktree: $worktree_path"

    # Check if worktree directory exists
    if [[ ! -d "$worktree_path" ]]; then
        log_colored "$RED" "Worktree directory not found: $worktree_path"
        return 1
    fi

    # Change to worktree directory and run template generation
    cd "$worktree_path"

    # Check if template file already exists
    if [[ -f "src/data/template-$template.ts" ]]; then
        log_colored "$YELLOW" "Template file already exists: src/data/template-$template.ts"
        mark_template_processed "$template"
        return 0
    fi

    # Run the template generation script using absolute path
    if "$SCRIPT_DIR/template-generation-cycle.sh"; then
        log_colored "$GREEN" "Successfully processed: $template"
        mark_template_processed "$template"
        return 0
    else
        log_colored "$RED" "Failed to process: $template"
        return 1
    fi
}

# Process templates in batches
process_batch() {
    local -a worktrees=("$@")
    local processed_count=0
    if [[ -f "$PROGRESS_FILE" ]]; then
        processed_count=$(wc -l < "$PROGRESS_FILE")
    fi
    local batch_num=$((processed_count / BATCH_SIZE + 1))

    log_colored "$BLUE" "Starting batch $batch_num (${#worktrees[@]} templates)"

    local processed=0
    local failed=0

    for worktree_path in "${worktrees[@]}"; do
        if process_template "$worktree_path"; then
            ((processed++))
        else
            ((failed++))
        fi

        # Delay between templates (except for the last one in batch)
        local last_index=$((${#worktrees[@]} - 1))
        if [[ $worktree_path != "${worktrees[$last_index]}" ]]; then
            log "Waiting ${TEMPLATE_DELAY}s before next template..."
            sleep "$TEMPLATE_DELAY"
        fi
    done

    log_colored "$GREEN" "Batch $batch_num complete: $processed processed, $failed failed"

    return $failed
}

# Show status
show_status() {
    local total_worktrees=$(get_worktrees | wc -l)
    local processed_count=0
    if [[ -f "$PROGRESS_FILE" ]]; then
        processed_count=$(wc -l < "$PROGRESS_FILE")
    fi
    local remaining=$((total_worktrees - processed_count))

    echo "=== Batch Template Generation Status ==="
    echo "Total templates: $total_worktrees"
    echo "Processed: $processed_count"
    echo "Remaining: $remaining"
    echo "Progress: $(( processed_count * 100 / total_worktrees ))%"
    echo ""
    echo "Configuration:"
    echo "  Batch size: $BATCH_SIZE"
    echo "  Batch delay: ${BATCH_DELAY}s"
    echo "  Template delay: ${TEMPLATE_DELAY}s"
    echo ""
    echo "Progress file: $PROGRESS_FILE"
    echo "Log file: $LOG_FILE"
}

# Reset progress
reset_progress() {
    read -p "Are you sure you want to reset all progress? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        rm -f "$PROGRESS_FILE"
        log_colored "$YELLOW" "Progress reset"
    else
        echo "Progress not reset"
    fi
}

# Main processing function
main() {
    log_colored "$BLUE" "Starting batch template generation"
    show_status

    # Get all worktrees that need processing
    local -a all_worktrees=($(get_worktrees))
    local -a pending_worktrees=()

    for worktree_path in "${all_worktrees[@]}"; do
        local template=$(get_template_name "$worktree_path")
        if ! is_template_processed "$template"; then
            pending_worktrees+=("$worktree_path")
        fi
    done

    if [[ ${#pending_worktrees[@]} -eq 0 ]]; then
        log_colored "$GREEN" "All templates have been processed!"
        return 0
    fi

    log_colored "$BLUE" "Found ${#pending_worktrees[@]} templates to process"

    # Process in batches
    local batch_start=0
    local total_failed=0

    while [[ $batch_start -lt ${#pending_worktrees[@]} ]]; do
        local batch_end=$((batch_start + BATCH_SIZE))
        if [[ $batch_end -gt ${#pending_worktrees[@]} ]]; then
            batch_end=${#pending_worktrees[@]}
        fi

        local -a batch_worktrees=("${pending_worktrees[@]:$batch_start:$BATCH_SIZE}")

        if process_batch "${batch_worktrees[@]}"; then
            log_colored "$GREEN" "Batch completed successfully"
        else
            log_colored "$YELLOW" "Batch completed with some failures"
            ((total_failed++))
        fi

        batch_start=$batch_end

        # Delay between batches (except for the last batch)
        if [[ $batch_start -lt ${#pending_worktrees[@]} ]]; then
            log_colored "$BLUE" "Waiting ${BATCH_DELAY}s before next batch..."
            sleep "$BATCH_DELAY"
        fi
    done

    log_colored "$GREEN" "Batch processing complete!"
    show_status

    if [[ $total_failed -gt 0 ]]; then
        log_colored "$YELLOW" "Some batches had failures. Check the log for details."
        return 1
    fi
}

# Show usage
show_usage() {
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "COMMANDS:"
    echo "  start         - Start/resume batch processing (default)"
    echo "  status        - Show current status"
    echo "  reset         - Reset progress (start over)"
    echo "  help          - Show this help"
    echo ""
    echo "ENVIRONMENT VARIABLES:"
    echo "  BATCH_SIZE=$BATCH_SIZE          - Templates per batch"
    echo "  BATCH_DELAY=$BATCH_DELAY      - Seconds between batches"
    echo "  TEMPLATE_DELAY=$TEMPLATE_DELAY - Seconds between templates"
    echo ""
    echo "Examples:"
    echo "  $0                           # Start with default settings"
    echo "  BATCH_SIZE=3 $0              # Use smaller batches"
    echo "  BATCH_DELAY=60 $0            # Longer delay between batches"
    echo "  $0 status                    # Check progress"
}

# Handle arguments
COMMAND="${1:-start}"

case "$COMMAND" in
    "start")
        main
        ;;
    "status")
        show_status
        ;;
    "reset")
        reset_progress
        ;;
    "help")
        show_usage
        ;;
    *)
        echo "Unknown command: $COMMAND"
        show_usage
        exit 1
        ;;
esac