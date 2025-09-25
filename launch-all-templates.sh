#!/bin/bash

# Launch template generation for all worktrees in background
echo "Launching template generation for all worktrees..."

# Get list of all worktrees (excluding the ones we already did)
completed="3d-printing academic-struggles addiction-family-support addiction-recovery affiliate-marketing aging-parent-care"

for worktree in ../templata-*; do
    if [ -d "$worktree" ]; then
        template_name=$(basename "$worktree" | sed 's/templata-//')

        # Skip if already completed
        if echo "$completed" | grep -q "$template_name"; then
            echo "Skipping already completed: $template_name"
            continue
        fi

        echo "Starting: $template_name"
        (cd "$worktree" && ../templata/template-generation-cycle.sh > "../templata/template-generation-${template_name}.log" 2>&1) &

        # Add small delay to avoid overwhelming Claude
        sleep 0.5
    fi
done

echo "All remaining template generations started!"
echo "Monitor with: ps aux | grep template-generation-cycle"