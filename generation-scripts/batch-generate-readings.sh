#!/bin/bash

# Batch generate readings for multiple guides
set -e

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log_colored() {
    local color=$1
    local message=$2
    echo -e "${color}$message${NC}"
}

# How many guides to process (default 10, pass as argument)
LIMIT=${1:-10}

log_colored "$BLUE" "🚀 Batch generating readings for up to $LIMIT guides..."

# Get list of guides without readings
GUIDES=$(psql "postgresql://postgres.uvcstcajctqbxddosdbf:$SUPABASE_SERVICE_ROLE_KEY@aws-0-us-west-1.pooler.supabase.com:6543/postgres" -t -c "
SELECT g.id
FROM guides g
LEFT JOIN readings r ON r.guide = g.id
WHERE g.active = true
GROUP BY g.id
HAVING COUNT(r.id) = 0
ORDER BY g.id
LIMIT $LIMIT;
" | tr -d ' ')

COUNT=0
for guide in $GUIDES; do
    if [ -z "$guide" ]; then
        continue
    fi

    COUNT=$((COUNT + 1))
    log_colored "$YELLOW" "[$COUNT/$LIMIT] Generating readings for: $guide"

    ./generate-readings.sh "$guide"

    log_colored "$GREEN" "✅ Completed $guide ($COUNT/$LIMIT)"
    echo ""
done

log_colored "$GREEN" "🎉 Batch generation complete! Processed $COUNT guides."
