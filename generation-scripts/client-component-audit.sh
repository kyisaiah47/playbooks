#!/bin/bash

# Client Component Audit Script - Remove unnecessary 'use client' directives
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

# Get all files with 'use client'
CLIENT_FILES=($(find ../src -name "*.tsx" -o -name "*.ts" | xargs grep -l "use client"))
TOTAL_FILES=${#CLIENT_FILES[@]}
UNNECESSARY_COUNT=0
NECESSARY_COUNT=0

log_colored "$BLUE" "🔍 Client Component Audit - Analyzing $TOTAL_FILES files"
log_colored "$BLUE" "=================================================="

# Function to check if a file needs 'use client'
check_needs_client() {
    local file="$1"

    # Always need client for these patterns:
    # - React hooks (useState, useEffect, etc.)
    # - Event handlers (onClick, onChange, etc.)
    # - Browser APIs (window, document, localStorage, etc.)
    # - Context providers/consumers
    # - Router hooks (useRouter, useSearchParams, etc.)
    # - Custom hooks
    # - Dynamic imports with lazy loading

    # Check for React hooks
    if grep -q "use[A-Z]" "$file"; then
        return 0  # needs client
    fi

    # Check for event handlers
    if grep -q "on[A-Z][a-zA-Z]*=" "$file"; then
        return 0  # needs client
    fi

    # Check for browser APIs
    if grep -qE "(window\.|document\.|localStorage|sessionStorage|navigator)" "$file"; then
        return 0  # needs client
    fi

    # Check for router hooks
    if grep -qE "(useRouter|useSearchParams|usePathname|useParams)" "$file"; then
        return 0  # needs client
    fi

    # Check for dynamic state management
    if grep -qE "(setState|dispatch|reducer)" "$file"; then
        return 0  # needs client
    fi

    # Check for refs
    if grep -q "useRef\|createRef" "$file"; then
        return 0  # needs client
    fi

    # Check for context usage
    if grep -qE "(useContext|createContext|\.Provider|\.Consumer)" "$file"; then
        return 0  # needs client
    fi

    # Check for dynamic imports or lazy loading
    if grep -qE "(React\.lazy|dynamic\(|import\()" "$file"; then
        return 0  # needs client
    fi

    # Check if it's a custom hook file
    if [[ "$file" =~ hooks/ ]] && [[ "$file" =~ use[A-Z] ]]; then
        return 0  # needs client
    fi

    # Check if it's a context file
    if [[ "$file" =~ context ]]; then
        return 0  # needs client
    fi

    return 1  # doesn't need client
}

# Backup directory
BACKUP_DIR="../backup-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$BACKUP_DIR"

log_colored "$YELLOW" "Created backup directory: $BACKUP_DIR"
echo ""

# Process each file
for file in "${CLIENT_FILES[@]}"; do
    filename=$(basename "$file")
    relative_path=$(echo "$file" | sed 's|../src/||')

    if check_needs_client "$file"; then
        log_colored "$GREEN" "✅ $relative_path - Needs client component"
        ((NECESSARY_COUNT++))
    else
        log_colored "$YELLOW" "🔧 $relative_path - Removing unnecessary 'use client'"

        # Create backup
        cp "$file" "$BACKUP_DIR/"

        # Remove 'use client' directive
        sed -i.bak 's/^"use client";*$//' "$file"
        sed -i.bak 's/^'"'"'use client'"'"';*$//' "$file"
        sed -i.bak '/^$/N;/^\n$/d' "$file"  # Remove empty lines

        # Remove backup file created by sed
        rm "${file}.bak" 2>/dev/null || true

        ((UNNECESSARY_COUNT++))
    fi
done

echo ""
log_colored "$BLUE" "📊 Client Component Audit Summary"
log_colored "$BLUE" "=================================="
log_colored "$GREEN" "✅ Necessary client components: $NECESSARY_COUNT"
log_colored "$YELLOW" "🔧 Removed unnecessary directives: $UNNECESSARY_COUNT"
log_colored "$BLUE" "📄 Total files processed: $TOTAL_FILES"

# Calculate percentage
necessary_pct=$(( (NECESSARY_COUNT * 100) / TOTAL_FILES ))
unnecessary_pct=$(( (UNNECESSARY_COUNT * 100) / TOTAL_FILES ))

echo ""
log_colored "$BLUE" "📈 Results:"
log_colored "$GREEN" "• $necessary_pct% of components correctly need 'use client'"
log_colored "$YELLOW" "• $unnecessary_pct% had unnecessary 'use client' directives"

echo ""
log_colored "$BLUE" "🔧 Performance Impact:"
echo "• Reduced client bundle size by removing unnecessary client components"
echo "• Improved server-side rendering for static components"
echo "• Better hydration performance"

if [[ $UNNECESSARY_COUNT -gt 0 ]]; then
    echo ""
    log_colored "$YELLOW" "⚠️  Remember to:"
    echo "• Test the application thoroughly"
    echo "• Check for any runtime errors"
    echo "• Restore from backup if needed: $BACKUP_DIR"
fi

log_colored "$GREEN" "🎉 Client component optimization complete!"