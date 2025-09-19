#!/bin/bash

# Audit script to check article counts per template
echo "=== ARTICLE COUNT AUDIT ==="
echo

total_articles=0
templates_with_correct_count=0
templates_with_wrong_count=0

for template in book-writing budget-planning car-buying career-change college-planning divorce-coordination education-learning elder-care event-planning freelance-business garden-planning health-wellness hobby-project home-improvement investment-portfolio language-learning life-transitions meal-planning medical-treatment music-production nonprofit-management personal-branding personal-growth photography-business podcast-creation relationship-dating retirement-planning skill-development small-business-launch social-media-management travel-planning wedding-planning; do
    file="src/registry/blogs-$template.ts"
    if [ -f "$file" ]; then
        count=$(grep -c 'id: "' "$file" 2>/dev/null)
        if [ -z "$count" ]; then
            count=0
        fi
        total_articles=$((total_articles + count))

        if [ "$count" -eq 20 ]; then
            echo "✅ $template: $count articles (CORRECT)"
            templates_with_correct_count=$((templates_with_correct_count + 1))
        elif [ "$count" -gt 20 ]; then
            echo "❌ $template: $count articles (TOO MANY - should be 20)"
            templates_with_wrong_count=$((templates_with_wrong_count + 1))
        else
            echo "⚠️  $template: $count articles (TOO FEW - should be 20)"
            templates_with_wrong_count=$((templates_with_wrong_count + 1))
        fi
    else
        echo "❌ $template: FILE MISSING"
        templates_with_wrong_count=$((templates_with_wrong_count + 1))
    fi
done

echo
echo "=== SUMMARY ==="
echo "Total articles found: $total_articles"
echo "Templates with correct count (20): $templates_with_correct_count"
echo "Templates with wrong count: $templates_with_wrong_count"
echo "Expected total (31 templates × 20): 620"
echo

if [ "$total_articles" -ne 620 ]; then
    echo "🚨 AUDIT FAILED: Should have exactly 620 articles total"
    exit 1
else
    echo "✅ AUDIT PASSED: Correct total article count"
fi