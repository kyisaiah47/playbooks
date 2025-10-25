#!/bin/bash
# Continue rewriting questions from offset 15600 to 20000
# This script processes the remaining 4400 questions in the assigned range

# COMPLETED SO FAR: Batches 1-12 (offset 15000-15600, 600 questions) ✓
# REMAINING: Batches 13-100 (offset 15600-20000, 4400 questions)

# Project configuration
PROJECT_ID="uvcstcajctqbxddosdbf"
BATCH_SIZE=50
START_OFFSET=15600
END_OFFSET=20000

echo "=================================================="
echo "Question Rewrite Progress Summary"
echo "=================================================="
echo "Total assigned range: offset 15000-20000 (5000 questions)"
echo "Completed: offset 15000-15600 (600 questions, batches 1-12)"
echo "Remaining: offset 15600-20000 (4400 questions, batches 13-100)"
echo ""
echo "Progress: 12% complete (600/5000 questions)"
echo "=================================================="
echo ""
echo "Next steps:"
echo "1. Continue processing batches 13-100 using Supabase MCP tools"
echo "2. Fetch 50-200 questions at a time using SELECT queries"
echo "3. Rewrite each prompt following the Notion-style guidelines"
echo "4. Update using CASE statements in batches"
echo "5. Verify all questions have been updated when complete"
echo ""
echo "Transformation patterns being applied:"
echo "  - 'Document' → 'Write down' / 'What...'"
echo "  - 'Research' → 'Look into' / 'Check out'"
echo "  - 'Reflect on' → 'Think about'"
echo "  - 'Note' → 'Notice' / 'Keep track of'"
echo "  - 'Create' → 'Make' / 'Put together'"
echo "  - Add contractions: you've, what's, how'd"
echo "  - Add questions at end where appropriate"
echo "=================================================="
