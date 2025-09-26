#!/bin/bash

# SEO Audit Script - Verify every page has comprehensive SEO
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

log_colored "$BLUE" "🔍 SEO Audit - Checking all pages for comprehensive SEO"
log_colored "$BLUE" "=================================================="

# Find all page.tsx files
PAGE_FILES=($(find ../src/app -name "page.tsx" | grep -v node_modules | sort))
TOTAL_PAGES=${#PAGE_FILES[@]}
MISSING_SEO=0
PARTIAL_SEO=0
COMPLETE_SEO=0

log_colored "$YELLOW" "Found $TOTAL_PAGES page files to audit"
echo ""

# Check each page file
for page_file in "${PAGE_FILES[@]}"; do
    page_name=$(echo "$page_file" | sed 's|../src/app/||' | sed 's|/page.tsx||' | sed 's|page.tsx|ROOT|')

    # Skip marketing asset pages (for screenshot generation)
    if [[ "$page_name" =~ ^marketing/ ]] || grep -q "MARKETING ASSET PAGE" "$page_file" 2>/dev/null; then
        echo "📸 Skipping $page_name (marketing asset for screenshots)"
        continue
    fi

    # Check for metadata export in page.tsx or layout.tsx
    page_dir=$(dirname "$page_file")
    layout_file="$page_dir/layout.tsx"

    has_metadata=false
    if grep -q "export const metadata" "$page_file" || grep -q "export async function generateMetadata" "$page_file"; then
        has_metadata=true
        metadata_file="$page_file"
    elif [[ -f "$layout_file" ]] && grep -q "export const metadata" "$layout_file"; then
        has_metadata=true
        metadata_file="$layout_file"
    fi

    if [[ "$has_metadata" == "false" ]]; then
        log_colored "$RED" "❌ $page_name - Missing metadata export"
        ((MISSING_SEO++))
        continue
    fi

    # Check for comprehensive SEO elements
    has_title=$(grep -q "title:" "$metadata_file" && echo "yes" || echo "no")
    has_description=$(grep -q "description:" "$metadata_file" && echo "yes" || echo "no")
    has_keywords=$(grep -q "keywords:" "$metadata_file" && echo "yes" || echo "no")
    has_opengraph=$(grep -q "openGraph:" "$metadata_file" && echo "yes" || echo "no")
    has_twitter=$(grep -q "twitter:" "$metadata_file" && echo "yes" || echo "no")
    has_canonical=$(grep -q "canonical:" "$metadata_file" && echo "yes" || echo "no")

    # Count SEO elements present
    seo_count=0
    [[ "$has_title" == "yes" ]] && ((seo_count++))
    [[ "$has_description" == "yes" ]] && ((seo_count++))
    [[ "$has_keywords" == "yes" ]] && ((seo_count++))
    [[ "$has_opengraph" == "yes" ]] && ((seo_count++))
    [[ "$has_twitter" == "yes" ]] && ((seo_count++))
    [[ "$has_canonical" == "yes" ]] && ((seo_count++))

    if [[ $seo_count -ge 5 ]]; then
        log_colored "$GREEN" "✅ $page_name - Complete SEO ($seo_count/6 elements)"
        ((COMPLETE_SEO++))
    elif [[ $seo_count -ge 3 ]]; then
        log_colored "$YELLOW" "⚠️  $page_name - Partial SEO ($seo_count/6 elements)"
        echo "   Missing: $([ "$has_title" != "yes" ] && echo "title ")$([ "$has_description" != "yes" ] && echo "description ")$([ "$has_keywords" != "yes" ] && echo "keywords ")$([ "$has_opengraph" != "yes" ] && echo "openGraph ")$([ "$has_twitter" != "yes" ] && echo "twitter ")$([ "$has_canonical" != "yes" ] && echo "canonical ")"
        ((PARTIAL_SEO++))
    else
        log_colored "$RED" "❌ $page_name - Insufficient SEO ($seo_count/6 elements)"
        echo "   Has: $([ "$has_title" == "yes" ] && echo "title ")$([ "$has_description" == "yes" ] && echo "description ")$([ "$has_keywords" == "yes" ] && echo "keywords ")$([ "$has_opengraph" == "yes" ] && echo "openGraph ")$([ "$has_twitter" == "yes" ] && echo "twitter ")$([ "$has_canonical" == "yes" ] && echo "canonical ")"
        ((MISSING_SEO++))
    fi
done

echo ""
log_colored "$BLUE" "📊 SEO Audit Summary"
log_colored "$BLUE" "===================="
log_colored "$GREEN" "✅ Complete SEO: $COMPLETE_SEO pages"
log_colored "$YELLOW" "⚠️  Partial SEO:  $PARTIAL_SEO pages"
log_colored "$RED" "❌ Missing SEO:  $MISSING_SEO pages"
log_colored "$BLUE" "📄 Total pages:  $TOTAL_PAGES"

echo ""
# Calculate percentage
complete_pct=$(( (COMPLETE_SEO * 100) / TOTAL_PAGES ))
if [[ $complete_pct -ge 90 ]]; then
    log_colored "$GREEN" "🎉 Excellent! $complete_pct% of pages have complete SEO"
elif [[ $complete_pct -ge 70 ]]; then
    log_colored "$YELLOW" "👍 Good! $complete_pct% of pages have complete SEO"
else
    log_colored "$RED" "⚠️  Needs work! Only $complete_pct% of pages have complete SEO"
fi

echo ""
log_colored "$BLUE" "Recommended SEO elements for each page:"
echo "• title: Compelling page title with keywords"
echo "• description: 150-160 character meta description"
echo "• keywords: Relevant keywords for the page"
echo "• openGraph: Social media preview optimization"
echo "• twitter: Twitter card optimization"
echo "• canonical: Canonical URL to prevent duplicate content"

# Exit with error if too many pages missing SEO
if [[ $complete_pct -lt 70 ]]; then
    exit 1
fi