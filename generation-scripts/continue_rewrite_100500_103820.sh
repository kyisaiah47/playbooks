#!/bin/bash

# Continue rewriting questions from offset 100500 to 103820
# This processes the remaining 66 batches

PROJECT_ID="uvcstcajctqbxddosdbf"
CURRENT_OFFSET=100500
END_OFFSET=103820
BATCH_SIZE=50

echo "Starting batch processing from offset $CURRENT_OFFSET to $END_OFFSET"
echo "Project ID: $PROJECT_ID"
echo ""

# Calculate total batches
TOTAL_QUESTIONS=$((END_OFFSET - CURRENT_OFFSET))
TOTAL_BATCHES=$((TOTAL_QUESTIONS / BATCH_SIZE))

echo "Total questions to process: $TOTAL_QUESTIONS"
echo "Total batches: $TOTAL_BATCHES"
echo ""
echo "NOTE: This script outputs the commands to run."
echo "Execute each batch via Claude Code's Supabase MCP integration."
echo ""
echo "=================================================="

batch_num=11
while [ $CURRENT_OFFSET -le $END_OFFSET ]; do
    echo ""
    echo "BATCH #$batch_num - OFFSET $CURRENT_OFFSET"
    echo "--------------------------------------------------"
    echo "1. Fetch: SELECT id, prompt, template_id FROM questions ORDER BY id LIMIT $BATCH_SIZE OFFSET $CURRENT_OFFSET"
    echo "2. Transform prompts (Document→Write down, Research→Look into, etc.)"
    echo "3. Execute UPDATE with CASE statement"
    echo ""

    CURRENT_OFFSET=$((CURRENT_OFFSET + BATCH_SIZE))
    batch_num=$((batch_num + 1))

    # Process in chunks to avoid overwhelming
    if [ $((batch_num % 10)) -eq 0 ]; then
        echo "=================================================="
        echo "Processed $(((batch_num - 11) * BATCH_SIZE)) questions so far..."
        echo "=================================================="
    fi
done

echo ""
echo "All batches listed. Process each one sequentially via Claude Code."
