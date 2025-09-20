#!/bin/bash

# Template Prompt Generation Cycle Script
# Generates reflection prompts individually with progress tracking (similar to article generation)

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TEMPLATE_NAME="${1:-grandparent-role}"
WORKTREE_DIR="../templata-${TEMPLATE_NAME}"
LOGFILE="$SCRIPT_DIR/prompt-generation-${TEMPLATE_NAME}.log"
PROGRESS_FILE="$SCRIPT_DIR/.prompt-progress-${TEMPLATE_NAME}"

# Generate 102 prompts (6 sections × 17 prompts each)
PROMPTS=(1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100 101 102)

# Section mapping (1-17 = section 1, 18-34 = section 2, etc.)
get_section_for_prompt() {
    local prompt_num=$1
    echo $(((prompt_num - 1) / 17 + 1))
}

get_prompt_in_section() {
    local prompt_num=$1
    echo $(((prompt_num - 1) % 17 + 1))
}

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" | tee -a "$LOGFILE"
}

log_colored() {
    local color=$1
    local message=$2
    echo -e "${color}$(date '+%Y-%m-%d %H:%M:%S') - $message${NC}" | tee -a "$LOGFILE"
}

# Get current progress
get_current_index() {
    if [[ -f "$PROGRESS_FILE" ]]; then
        cat "$PROGRESS_FILE"
    else
        echo "0"
    fi
}

# Update progress
update_progress() {
    local index=$1
    echo "$index" > "$PROGRESS_FILE"
}

# Get next prompt
get_next_prompt() {
    local current_index=$(get_current_index)

    if [[ $current_index -ge ${#PROMPTS[@]} ]]; then
        echo ""
        return 1
    fi

    echo "${PROMPTS[$current_index]}"
    return 0
}

# Get section names for template
get_section_names() {
    local template="$1"
    case "$template" in
        "grandparent-role")
            echo "Embracing the Grandparent Identity|Building Meaningful Relationships|Creating Lasting Memories|Supporting Family Dynamics|Health and Lifestyle Adjustments|Legacy and Wisdom Sharing"
            ;;
        *)
            echo "Foundation and Understanding|Planning and Preparation|Implementation and Action|Relationships and Communication|Challenges and Solutions|Growth and Future Vision"
            ;;
    esac
}

# Create generation prompt for a single reflection prompt
create_prompt_generation() {
    local prompt_number="$1"
    local section_number=$(get_section_for_prompt "$prompt_number")
    local prompt_in_section=$(get_prompt_in_section "$prompt_number")
    local template_readable=$(echo "$TEMPLATE_NAME" | sed 's/-/ /g' | sed 's/\b\w/\U&/g')

    # Get section names
    local section_names=$(get_section_names "$TEMPLATE_NAME")
    local section_name=$(echo "$section_names" | cut -d'|' -f"$section_number")

    cat << EOF
Generate ONE expert-level reflection prompt for the $template_readable template.

PROMPT #$prompt_number (Section $section_number: "$section_name", Prompt $prompt_in_section of 17)

REQUIREMENTS:
- Create a sophisticated, thoughtful reflection prompt for someone navigating $template_readable
- Focus on "$section_name" theme
- Include detailed helpText (2-3 sentences minimum explaining why this reflection matters)
- Choose appropriate category: 'consideration', 'planning', 'decision', or 'research'
- Make it specific and actionable for this life moment
- Add to src/data/prompts-${TEMPLATE_NAME}.ts in reflectionPrompts array

FORMAT:
Add this object to the reflectionPrompts array:
{
  id: 'prompt-${prompt_number}',
  prompt: '[Your thoughtful prompt here]',
  category: '[consideration/planning/decision/research]',
  helpText: '[2-3 sentences explaining why this reflection is valuable for someone in this life moment]'
}

Focus on creating a prompt that provides genuine guidance value for someone in the $template_readable journey.

When complete, respond exactly: "PROMPT GENERATION COMPLETE - Prompt #$prompt_number"
EOF
}

# Run single prompt generation
run_prompt_generation() {
    local prompt_num="$1"
    local section_num=$(get_section_for_prompt "$prompt_num")
    local prompt_in_section=$(get_prompt_in_section "$prompt_num")

    log_colored "$BLUE" "Generating prompt #$prompt_num (Section $section_num, Prompt $prompt_in_section/17)"

    # Switch to worktree
    cd "$WORKTREE_DIR"

    # Generate prompt
    local generation_prompt=$(create_prompt_generation "$prompt_num")
    log_colored "$YELLOW" "Running prompt generation..."

    cd "$WORKTREE_DIR" && claude --print --dangerously-skip-permissions --add-dir "$WORKTREE_DIR" -p "$generation_prompt" | tee -a "$LOGFILE"

    # Brief pause
    sleep 3

    log_colored "$GREEN" "Completed prompt #$prompt_num"
}

# Create template-specific prompt file
create_template_prompt_file() {
    local prompt_file="$WORKTREE_DIR/src/data/prompts-${TEMPLATE_NAME}.ts"

    if [[ ! -f "$prompt_file" ]]; then
        log_colored "$YELLOW" "Creating template prompt file: prompts-${TEMPLATE_NAME}.ts"

        cat > "$prompt_file" << 'EOF'
export interface ReflectionPrompt {
  id: string;
  prompt: string;
  category: 'consideration' | 'planning' | 'decision' | 'research';
  helpText: string;
}

// Reflection prompts for template-specific guidance
export const reflectionPrompts: ReflectionPrompt[] = [
  // Prompts will be added here by the generation script
];
EOF

        log_colored "$GREEN" "Created template prompt file: $prompt_file"
    fi
}

# Create worktree if it doesn't exist
ensure_worktree() {
    if [[ ! -d "$WORKTREE_DIR" ]]; then
        log_colored "$YELLOW" "Creating worktree for template: $TEMPLATE_NAME"

        # Create branch if it doesn't exist
        if ! git show-ref --verify --quiet "refs/heads/prompt-${TEMPLATE_NAME}"; then
            git branch "prompt-${TEMPLATE_NAME}"
            log_colored "$GREEN" "Created branch: prompt-${TEMPLATE_NAME}"
        fi

        # Create worktree
        git worktree add "$WORKTREE_DIR" "prompt-${TEMPLATE_NAME}"
        log_colored "$GREEN" "Created worktree: $WORKTREE_DIR"

        # Create template-specific prompt file
        create_template_prompt_file
    else
        log_colored "$GREEN" "Using existing worktree: $WORKTREE_DIR"

        # Ensure template prompt file exists even for existing worktrees
        create_template_prompt_file
    fi
}

# Main function
main() {
    log_colored "$BLUE" "Starting Prompt Generation Cycle for template: $TEMPLATE_NAME"

    # Setup log
    mkdir -p "$(dirname "$LOGFILE")"

    # Ensure worktree exists
    ensure_worktree

    # Process all remaining prompts
    while true; do
        prompt_num=$(get_next_prompt)
        if [[ $? -ne 0 ]]; then
            log_colored "$GREEN" "All prompts completed!"
            break
        fi

        run_prompt_generation "$prompt_num"

        # Update progress
        current_index=$(get_current_index)
        update_progress $((current_index + 1))

        # Brief pause between prompts
        sleep 5
    done

    log_colored "$GREEN" "Prompt generation cycle complete!"
    log_colored "$GREEN" "Generated 102 prompts (6 sections × 17 prompts each)"
}

# Show usage
show_usage() {
    echo "Usage: $0 [TEMPLATE_NAME] [COMMAND]"
    echo ""
    echo "TEMPLATE_NAME (optional, defaults to 'grandparent-role'):"
    echo "  Any template from template-list.txt"
    echo ""
    echo "COMMANDS:"
    echo "  (no command)    - Generate all prompts for template"
    echo "  single         - Generate just one prompt"
    echo "  status         - Check progress"
    echo "  reset          - Reset progress"
    echo "  help           - Show this help"
    echo ""
    echo "Examples:"
    echo "  $0 grandparent-role              # Generate all grandparent-role prompts"
    echo "  $0 career-change single          # Generate one career-change prompt"
    echo "  $0 home-buying status            # Check home-buying progress"
}

# Handle arguments
COMMAND="${2:-main}"
if [[ "$1" == "help" || "$1" == "--help" || "$1" == "-h" ]]; then
    show_usage
    exit 0
fi

# If first arg looks like a command and no template specified, use default template
if [[ "$1" =~ ^(status|reset|single|help)$ ]]; then
    TEMPLATE_NAME="grandparent-role"
    COMMAND="$1"
    LOGFILE="$SCRIPT_DIR/prompt-generation-${TEMPLATE_NAME}.log"
    PROGRESS_FILE="$SCRIPT_DIR/.prompt-progress-${TEMPLATE_NAME}"
fi

case "$COMMAND" in
    "status")
        current_index=$(get_current_index)
        echo "Template: $TEMPLATE_NAME"
        echo "Progress: $current_index/${#PROMPTS[@]} prompts completed"
        if [[ $current_index -lt ${#PROMPTS[@]} ]]; then
            next_prompt=$(get_next_prompt)
            section_num=$(get_section_for_prompt "$next_prompt")
            prompt_in_section=$(get_prompt_in_section "$next_prompt")
            echo "Next prompt: #$next_prompt (Section $section_num, Prompt $prompt_in_section/17)"
        fi
        ;;
    "reset")
        rm -f "$PROGRESS_FILE"
        echo "Progress reset to 0 for template: $TEMPLATE_NAME"
        ;;
    "single")
        # Setup log and ensure worktree for single mode
        mkdir -p "$(dirname "$LOGFILE")"
        ensure_worktree

        prompt_num=$(get_next_prompt)
        if [[ $? -eq 0 ]]; then
            run_prompt_generation "$prompt_num"
            current_index=$(get_current_index)
            update_progress $((current_index + 1))
        else
            echo "All prompts completed for template: $TEMPLATE_NAME"
        fi
        ;;
    "help")
        show_usage
        ;;
    *)
        main
        ;;
esac