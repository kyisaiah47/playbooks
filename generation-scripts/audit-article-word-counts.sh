#!/bin/bash

# Audit all article files in worktrees for word count

echo "🔍 Auditing article word counts in worktrees..."
echo ""

TEMPLATE_DIRS=($(ls -d ../../templata-* 2>/dev/null | sort))

TOTAL_ARTICLES=0
COMPLETE_ARTICLES=0
SHORT_ARTICLES=0
MISSING_ARTICLES=0

for template_dir in "${TEMPLATE_DIRS[@]}"; do
    if [ ! -d "$template_dir" ]; then
        continue
    fi

    template=$(basename "$template_dir" | sed 's/templata-//')

    for i in {1..20}; do
        article_file="$template_dir/${template}-article-${i}.txt"
        ((TOTAL_ARTICLES++))

        if [ -f "$article_file" ]; then
            word_count=$(wc -w < "$article_file" 2>/dev/null || echo "0")

            if [ "$word_count" -gt 1100 ]; then
                ((COMPLETE_ARTICLES++))
            else
                ((SHORT_ARTICLES++))
                echo "⚠️  SHORT: $template article $i - only $word_count words"
            fi
        else
            ((MISSING_ARTICLES++))
            echo "❌ MISSING: $template article $i"
        fi
    done
done

echo ""
echo "📊 AUDIT SUMMARY:"
echo "  Total expected: $TOTAL_ARTICLES"
echo "  ✅ Complete (>1100 words): $COMPLETE_ARTICLES"
echo "  ⚠️  Short (<1100 words): $SHORT_ARTICLES"
echo "  ❌ Missing files: $MISSING_ARTICLES"
echo ""

if [ "$SHORT_ARTICLES" -gt 0 ] || [ "$MISSING_ARTICLES" -gt 0 ]; then
    echo "⚠️  Found issues with $(($SHORT_ARTICLES + $MISSING_ARTICLES)) articles"
else
    echo "🎉 All articles are complete!"
fi
