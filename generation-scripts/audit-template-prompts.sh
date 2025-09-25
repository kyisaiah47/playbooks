#!/bin/bash

# Audit all template prompt counts
echo "🔍 Auditing Template Prompt Counts"
echo "=================================="

total=0
empty=0
low=0
good=0

for dir in ../../templata-*/; do
    if [ -d "$dir" ]; then
        template=$(basename "$dir" | sed 's/templata-//')
        prompt_file="$dir/src/data/prompts-$template.ts"

        if [ -f "$prompt_file" ]; then
            # Count prompt objects
            prompt_count=$(grep -c "prompt:" "$prompt_file")

            printf "%-30s: " "$template"
            if [ "$prompt_count" -eq 0 ]; then
                echo "❌ EMPTY (0 prompts)"
                ((empty++))
            elif [ "$prompt_count" -lt 20 ]; then
                echo "⚠️  LOW ($prompt_count prompts)"
                ((low++))
            else
                echo "✅ OK ($prompt_count prompts)"
                ((good++))
            fi

            ((total++))
        else
            printf "%-30s: " "$template"
            echo "❌ NO PROMPT FILE"
            ((empty++))
            ((total++))
        fi
    fi
done

echo ""
echo "📊 SUMMARY"
echo "=========="
echo "Total templates: $total"
echo "✅ Good (20+ prompts): $good"
echo "⚠️  Low (<20 prompts): $low"
echo "❌ Empty/Missing: $empty"
echo ""

if [ "$low" -gt 0 ] || [ "$empty" -gt 0 ]; then
    echo "🚨 $(($low + $empty)) templates need prompt generation!"
fi