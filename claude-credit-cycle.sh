#!/bin/bash

# Claude Credit Cycle Automation
# Runs every 5 hours to maximize template generation with credit resets
# Usage: ./claude-credit-cycle.sh [start|status|stop]

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKTREE_DIR="/Users/ikim1/Downloads/templata-worktrees"
TEMPLATE_LIST_FILE="$SCRIPT_DIR/template-list.txt"
PID_FILE="$SCRIPT_DIR/.claude-cycle.pid"
LOG_FILE="$SCRIPT_DIR/claude-cycle.log"
TEMPLATES_PER_CYCLE=11
CYCLE_HOURS=5

# Safety checks
if [[ ! -f "$TEMPLATE_LIST_FILE" ]]; then
    echo "❌ ERROR: Template list file not found: $TEMPLATE_LIST_FILE"
    exit 1
fi

if [[ ! -d "$SCRIPT_DIR/.git" ]]; then
    echo "❌ ERROR: Script must be run from git repository root"
    exit 1
fi

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

log() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" | tee -a "$LOG_FILE"
}

log_colored() {
    local color=$1
    local message=$2
    echo -e "${color}$(date '+%Y-%m-%d %H:%M:%S') - $message${NC}" | tee -a "$LOG_FILE"
}

# Get next batch of templates to process (checks actual repo files)
get_next_template_batch() {
    local batch=()
    local count=0
    
    # Read template list, skipping comments and empty lines
    while IFS= read -r template || [[ -n "$template" ]]; do
        # Skip comments and empty lines
        if [[ "$template" =~ ^#.*$ ]] || [[ -z "$template" ]]; then
            continue
        fi
        
        # Check if template already exists in repo
        if [[ -d "$SCRIPT_DIR/src/app/$template" ]]; then
            # Template already completed - skip
            continue
        fi
        
        # Add to batch if not completed
        batch+=("$template")
        ((count++))
        
        # Stop when we have enough for this batch
        if [[ $count -eq $TEMPLATES_PER_CYCLE ]]; then
            break
        fi
    done < "$TEMPLATE_LIST_FILE"
    
    printf '%s\n' "${batch[@]}"
}

# Get completion stats by checking repo files
get_completion_stats() {
    local total_count=0
    local completed_count=0
    
    # Count all templates (non-comment lines)
    while IFS= read -r template || [[ -n "$template" ]]; do
        if [[ ! "$template" =~ ^#.*$ ]] && [[ -n "$template" ]]; then
            ((total_count++))
            
            # Check if completed (directory exists)
            if [[ -d "$SCRIPT_DIR/src/app/$template" ]]; then
                ((completed_count++))
            fi
        fi
    done < "$TEMPLATE_LIST_FILE"
    
    echo "completed:$completed_count total:$total_count"
}

# Create worktrees for template batch
create_template_worktrees() {
    local templates=("$@")
    
    log_colored $BLUE "🌳 Creating worktrees for ${#templates[@]} templates..."
    
    # Clean existing worktrees
    if [[ -d "$WORKTREE_DIR" ]]; then
        log_colored $YELLOW "🧹 Cleaning existing worktrees..."
        cd "$SCRIPT_DIR"
        git worktree list | grep "$WORKTREE_DIR" | while read -r path commit branch; do
            if [[ "$path" != "$SCRIPT_DIR" ]]; then
                git worktree remove --force "$path" || true
            fi
        done
        rm -rf "$WORKTREE_DIR"
    fi
    
    # Create fresh worktrees
    mkdir -p "$WORKTREE_DIR"
    
    for template in "${templates[@]}"; do
        local branch_name="feature/template-$template"
        local worktree_path="$WORKTREE_DIR/$template"
        
        log_colored $CYAN "🌿 Creating worktree: $template"
        
        cd "$SCRIPT_DIR"
        # Delete branch if exists
        git branch -D "$branch_name" 2>/dev/null || true
        
        # Create fresh worktree
        git worktree add "$worktree_path" -b "$branch_name"
        
        # Set proper permissions for Claude to write to the worktree
        chmod -R 755 "$worktree_path"
        find "$worktree_path" -type f -exec chmod 644 {} \;
        chmod +x "$worktree_path/claude_workflow_simple.sh" 2>/dev/null || true
        chmod +x "$worktree_path/setup-template-worktrees.sh" 2>/dev/null || true
        
        # Create Claude settings for bypass permissions
        mkdir -p "$worktree_path/.claude"
        cat > "$worktree_path/.claude/settings.local.json" << 'EOF'
{
    "permissions": {
        "allow": [
            "*",
            "Read(/Users/ikim1/Downloads/templata-worktrees/**/*)",
            "Write(/Users/ikim1/Downloads/templata-worktrees/**/*)",
            "Edit(/Users/ikim1/Downloads/templata-worktrees/**/*)",
            "Bash(*)"
        ],
        "deny": [],
        "ask": [],
        "defaultMode": "bypassPermissions"
    }
}
EOF
    done
    
    log_colored $GREEN "✅ Created ${#templates[@]} worktrees successfully!"
}

# Launch Claude automation for all templates (FULLY AUTOMATED)
launch_claude_automation() {
    local templates=("$@")
    
    log_colored $PURPLE "🚀 Launching FULLY AUTOMATED Claude workflows for ${#templates[@]} templates..."
    
    # Launch all templates in background processes
    local pids=()
    for template in "${templates[@]}"; do
        local worktree_path="$WORKTREE_DIR/$template"
        
        log_colored $CYAN "🤖 Auto-launching Claude workflow: $template"
        
        # Launch claude workflow in background and capture PID
        (
            cd "$worktree_path"
            # Copy and execute the working simplified workflow script
            cp "$SCRIPT_DIR/claude_workflow_simple.sh" .
            if [[ -f "./claude_workflow_simple.sh" ]]; then
                nohup bash ./claude_workflow_simple.sh > "claude_workflow_${template}.log" 2>&1 || echo "Error: Claude workflow failed for $template" >> "claude_workflow_${template}.log"
            else
                echo "Error: claude_workflow_simple.sh not found in $worktree_path" >> "claude_workflow_${template}.log"
            fi
        ) &
        
        local workflow_pid=$!
        pids+=($workflow_pid)
        
        log_colored $GREEN "✅ Started $template (PID: $workflow_pid)"
        
        # Store PID for monitoring
        echo "$workflow_pid:$template" >> "$SCRIPT_DIR/.claude_workflow_pids"
        
        # Small delay to prevent overwhelming system
        sleep 2
    done
    
    log_colored $PURPLE "🚀 All ${#templates[@]} Claude workflows launched automatically!"
    log_colored $BLUE "📊 PIDs: ${pids[*]}"
    
    # Log batch start
    log_batch_start "${templates[@]}"
    
    # Return array of PIDs for monitoring
    printf '%s\n' "${pids[@]}"
}

# Merge completed templates
merge_completed_templates() {
    log_colored $BLUE "🔄 Starting merge cycle..."
    
    cd "$SCRIPT_DIR"
    
    # Check each worktree for completion
    local merged_count=0
    if [[ -d "$WORKTREE_DIR" ]]; then
        for worktree_path in "$WORKTREE_DIR"/*; do
            if [[ -d "$worktree_path" ]]; then
                local template_name=$(basename "$worktree_path")
                local branch_name="feature/template-$template_name"
                
                # Check if template appears complete (has template files)
                # Look for either template directory structure or direct template files
                if [[ -f "$worktree_path/src/app/templates/$template_name/page.tsx" ]] || [[ -f "$worktree_path/src/app/$template_name/page.tsx" ]]; then
                    log_colored $GREEN "✅ Merging completed template: $template_name"
                    
                    # Commit changes in the worktree before merging
                    cd "$worktree_path"
                    git add .
                    git commit -m "feat: implement comprehensive $template_name template

🤖 Generated with Claude Code
Co-Authored-By: Claude <noreply@anthropic.com>" || log_colored $YELLOW "⚠️ No changes to commit for $template_name"
                    
                    # Switch to main and merge
                    cd "$SCRIPT_DIR"
                    git checkout main
                    git merge "$branch_name" --no-edit
                    
                    # Clean up branch and worktree
                    git worktree remove --force "$worktree_path"
                    git branch -D "$branch_name"
                    
                    ((merged_count++))
                else
                    log_colored $YELLOW "⏳ Template not complete yet: $template_name"
                fi
            fi
        done
    fi
    
    log_colored $GREEN "🎉 Merged $merged_count templates in this cycle"
    
    # Log completion stats
    log_completion_stats "$merged_count"
    
    return $merged_count
}

# Log template batch start (no status file needed)
log_batch_start() {
    local templates=("$@")
    log_colored $BLUE "📊 Starting batch with ${#templates[@]} templates..."
    
    local stats=$(get_completion_stats)
    local completed=$(echo "$stats" | cut -d: -f2 | cut -d' ' -f1)
    local total=$(echo "$stats" | cut -d: -f3)
    
    log_colored $CYAN "📈 Overall progress: $completed/$total templates completed"
    
    for template in "${templates[@]}"; do
        log_colored $PURPLE "🎯 Batch includes: $template"
    done
}

# Log completion stats (no status file needed)  
log_completion_stats() {
    local merged_count=$1
    log_colored $BLUE "📊 Merge cycle completed: $merged_count templates merged"
    
    local stats=$(get_completion_stats)
    local completed=$(echo "$stats" | cut -d: -f2 | cut -d' ' -f1)
    local total=$(echo "$stats" | cut -d: -f3)
    local percentage=$((completed * 100 / total))
    
    log_colored $GREEN "📈 Updated progress: $completed/$total templates completed ($percentage%)"
}

# Monitor Claude workflows and auto-trigger merge when ready
monitor_and_auto_merge() {
    local templates=("$@")
    log_colored $BLUE "🔍 Starting automatic monitoring of ${#templates[@]} workflows..."
    
    local max_wait_minutes=270  # 4.5 hours
    local check_interval=60     # Check every minute
    local waited_minutes=0
    local completed_count=0
    
    while [[ $waited_minutes -lt $max_wait_minutes ]]; do
        completed_count=0
        
        # Check completion status of each template
        for template in "${templates[@]}"; do
            local worktree_path="$WORKTREE_DIR/$template"
            
            # Check if template files exist (completion indicator)
            # Look for either the template directory or template files
            if [[ -f "$worktree_path/src/app/templates/$template/page.tsx" ]] || [[ -f "$worktree_path/src/app/$template/page.tsx" ]]; then
                ((completed_count++))
            fi
        done
        
        local completion_percentage=$((completed_count * 100 / ${#templates[@]}))
        log_colored $CYAN "📊 Progress: $completed_count/${#templates[@]} completed ($completion_percentage%)"
        
        # Auto-merge when 80% complete or all done
        if [[ $completion_percentage -ge 80 ]] || [[ $completed_count -eq ${#templates[@]} ]]; then
            log_colored $GREEN "✅ Sufficient progress ($completion_percentage%) - triggering auto-merge!"
            merge_completed_templates
            return 0
        fi
        
        # Wait and continue monitoring
        sleep $((check_interval * 60))
        waited_minutes=$((waited_minutes + check_interval))
        
        log_colored $YELLOW "⏳ Waited $waited_minutes minutes, continuing to monitor..."
    done
    
    # Timeout reached - merge whatever is complete
    log_colored $YELLOW "⏰ 4.5 hour timeout reached - merging available templates"
    merge_completed_templates
}

# Check if Claude workflows are still running
check_workflow_status() {
    local running_count=0
    
    if [[ -f "$SCRIPT_DIR/.claude_workflow_pids" ]]; then
        while IFS=':' read -r pid template; do
            if kill -0 "$pid" 2>/dev/null; then
                ((running_count++))
            fi
        done < "$SCRIPT_DIR/.claude_workflow_pids"
    fi
    
    echo $running_count
}

# Main cycle execution (FULLY AUTOMATED)
run_cycle() {
    log_colored $GREEN "🚀 Starting FULLY AUTOMATED Claude Credit Cycle $(date)"
    
    # Get next batch of templates
    local templates=($(get_next_template_batch))
    
    if [[ ${#templates[@]} -eq 0 ]]; then
        log_colored $YELLOW "🎉 All templates completed! No more work to do."
        return 0
    fi
    
    log_colored $BLUE "📋 Processing ${#templates[@]} templates: ${templates[*]}"
    
    # Phase 1: Create worktrees and launch automation
    create_template_worktrees "${templates[@]}"
    
    # Clean previous PID file
    rm -f "$SCRIPT_DIR/.claude_workflow_pids"
    
    # Phase 2: Launch all Claude workflows automatically
    local pids=($(launch_claude_automation "${templates[@]}"))
    log_colored $PURPLE "🤖 All workflows launched! Monitoring for completion..."
    
    # Phase 3: Monitor progress and auto-merge when ready
    monitor_and_auto_merge "${templates[@]}"
    
    # Cleanup PID tracking
    rm -f "$SCRIPT_DIR/.claude_workflow_pids"
    
    return 0
}

# Run merge cycle only
run_merge() {
    log_colored $GREEN "🔄 Starting merge-only cycle $(date)"
    merge_completed_templates
    local merged=$?
    
    if [[ $merged -gt 0 ]]; then
        log_colored $GREEN "✅ Merge cycle completed. $merged templates merged."
        # After merge, start next cycle
        log_colored $BLUE "🔄 Starting next template batch..."
        run_cycle
    else
        log_colored $YELLOW "⚠️ No templates ready for merge yet."
    fi
}

# Wait until next credit reset (3:00 AM)
wait_for_credit_reset() {
    local current_hour=$(date +%H)
    local current_minute=$(date +%M)
    local target_hour=3
    local target_minute=0
    
    # Calculate minutes until 3:00 AM
    local minutes_until_reset=0
    
    if [[ $current_hour -lt $target_hour ]] || [[ $current_hour -eq $target_hour && $current_minute -lt $target_minute ]]; then
        # Same day - calculate minutes until 3:00 AM
        minutes_until_reset=$(( ($target_hour - $current_hour) * 60 + ($target_minute - $current_minute) ))
    else
        # Next day - calculate minutes until tomorrow's 3:00 AM
        minutes_until_reset=$(( (24 - $current_hour + $target_hour) * 60 + ($target_minute - $current_minute) ))
    fi
    
    if [[ $minutes_until_reset -gt 0 ]]; then
        log_colored $YELLOW "⏰ Waiting $minutes_until_reset minutes until credit reset at 3:00 AM..."
        log_colored $BLUE "🕐 Current time: $(date '+%H:%M:%S')"
        log_colored $GREEN "🎯 Start time: 03:00:00"
        
        # Sleep until credit reset
        sleep $((minutes_until_reset * 60))
    fi
    
    log_colored $GREEN "🚀 Credits reset! Starting automation at $(date)"
}

# Continuous execution with 5-hour cycles (FULLY AUTOMATED)
run_continuous() {
    log_colored $GREEN "🔄 Starting FULLY AUTOMATED continuous 5-hour cycle automation"
    
    # Wait for credit reset before starting first cycle
    wait_for_credit_reset
    
    while true; do
        # Check if there are more templates to process
        local templates=($(get_next_template_batch))
        if [[ ${#templates[@]} -eq 0 ]]; then
            log_colored $GREEN "🎉 All templates completed! Stopping automation."
            break
        fi
        
        log_colored $BLUE "🚀 Starting new cycle with ${#templates[@]} templates at $(date)"
        
        # Run fully automated cycle (includes monitoring and auto-merge)
        run_cycle
        
        # Brief pause before starting next cycle
        log_colored $BLUE "⏳ Brief pause before next cycle..."
        sleep 30
        
        log_colored $GREEN "🔄 Cycle completed. Starting next cycle immediately..."
    done
    
    log_colored $GREEN "🏁 All 104 templates completed! Automation finished!"
}

# Status check
show_status() {
    echo -e "${BLUE}📊 Claude Credit Cycle Status${NC}"
    echo "================================"
    
    if [[ -f "$PID_FILE" ]]; then
        local pid=$(cat "$PID_FILE")
        if kill -0 "$pid" 2>/dev/null; then
            echo -e "${GREEN}Status: RUNNING (PID: $pid)${NC}"
        else
            echo -e "${YELLOW}Status: STOPPED (stale PID file)${NC}"
            rm -f "$PID_FILE"
        fi
    else
        echo -e "${RED}Status: STOPPED${NC}"
    fi
    
    if [[ -d "$WORKTREE_DIR" ]]; then
        local worktree_count=$(find "$WORKTREE_DIR" -maxdepth 1 -type d | wc -l)
        echo -e "${BLUE}Active Worktrees: $((worktree_count - 1))${NC}"
    else
        echo -e "${BLUE}Active Worktrees: 0${NC}"
    fi
    
    local templates=($(get_next_template_batch))
    local stats=$(get_completion_stats)
    local completed=$(echo "$stats" | cut -d: -f2 | cut -d' ' -f1)
    local total=$(echo "$stats" | cut -d: -f3)
    local percentage=$((completed * 100 / total))
    
    echo -e "${GREEN}Progress: $completed/$total templates completed ($percentage%)${NC}"
    echo -e "${PURPLE}Next Batch Size: ${#templates[@]}${NC}"
    if [[ ${#templates[@]} -gt 0 ]]; then
        echo -e "${CYAN}Next Templates: ${templates[*]:0:5}...${NC}"
    else
        echo -e "${CYAN}🎉 All templates completed!${NC}"
    fi
    
    if [[ -f "$LOG_FILE" ]]; then
        echo -e "\n${YELLOW}Recent Log Entries:${NC}"
        tail -5 "$LOG_FILE"
    fi
}

# Stop automation
stop_automation() {
    if [[ -f "$PID_FILE" ]]; then
        local pid=$(cat "$PID_FILE")
        if kill -0 "$pid" 2>/dev/null; then
            log_colored $YELLOW "🛑 Stopping automation (PID: $pid)"
            kill "$pid"
            rm -f "$PID_FILE"
            log_colored $GREEN "✅ Automation stopped"
        else
            log_colored $YELLOW "⚠️ No running automation found"
            rm -f "$PID_FILE"
        fi
    else
        log_colored $YELLOW "⚠️ No automation running"
    fi
}

# Main script logic
case "${1:-}" in
    "start")
        if [[ -f "$PID_FILE" ]]; then
            log_colored $YELLOW "⚠️ Automation already running (PID: $(cat "$PID_FILE"))"
            exit 1
        fi
        
        log_colored $GREEN "🚀 Starting Claude Credit Cycle automation..."
        nohup bash "$0" _continuous > /dev/null 2>&1 &
        echo $! > "$PID_FILE"
        log_colored $GREEN "✅ Automation started (PID: $!)"
        ;;
    
    "_continuous")
        # Internal continuous mode (called by nohup)
        run_continuous
        rm -f "$PID_FILE"
        ;;
    
    "cycle")
        run_cycle
        ;;
    
    "once")
        log_colored $GREEN "🚀 Running single cycle (no continuous automation)"
        run_cycle
        log_colored $GREEN "✅ Single cycle completed!"
        ;;
    
    "merge")
        run_merge
        ;;
    
    "status")
        show_status
        ;;
    
    "stop")
        stop_automation
        ;;
    
    "logs")
        if [[ -f "$LOG_FILE" ]]; then
            tail -f "$LOG_FILE"
        else
            echo "No log file found"
        fi
        ;;
    
    *)
        echo -e "${BLUE}Claude Credit Cycle Automation${NC}"
        echo "============================="
        echo ""
        echo "Usage: $0 [command]"
        echo ""
        echo "Commands:"
        echo -e "  ${GREEN}start${NC}      - Start continuous 5-hour automation"
        echo -e "  ${BLUE}cycle${NC}      - Run single cycle (create worktrees + launch)"
        echo -e "  ${CYAN}once${NC}       - Run single cycle only (no continuous automation)"
        echo -e "  ${PURPLE}merge${NC}      - Merge completed templates and start next cycle"
        echo -e "  ${YELLOW}status${NC}     - Show automation status"
        echo -e "  ${RED}stop${NC}       - Stop continuous automation"
        echo -e "  ${CYAN}logs${NC}       - Show live log output"
        echo ""
        echo "Workflow (FULLY AUTOMATED):"
        echo "1. Run './claude-credit-cycle.sh start' to begin automation"
        echo "2. Script runs COMPLETELY HANDS-OFF until all 104 templates done"
        echo "3. Each cycle: Creates worktrees → Launches Claude workflows → Monitors progress → Auto-merges"
        echo "4. Automatically starts next batch when current batch reaches 80% completion"
        echo "5. Runs 24/7 until all templates complete (estimated 48-72 hours total)"
        echo ""
        echo "Features:"
        echo "• ZERO manual steps - completely automated"
        echo "• Automatic Claude workflow execution in background"
        echo "• Smart progress monitoring and auto-merge triggers"
        echo "• Automatic worktree creation and cleanup"
        echo "• Progress tracking and status updates"
        echo "• Fault tolerant - handles failures and continues"
        echo "• Runs until all 104 templates are complete"
        ;;
esac