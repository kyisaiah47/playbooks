#!/bin/bash

# Script to process remaining questions from offset 21670 to 25920
# This processes questions in batches of 50

PROJECT_ID="uvcstcajctqbxddosdbf"
START_OFFSET=21670
END_OFFSET=25920
BATCH_SIZE=50

# Calculate total batches
TOTAL_QUESTIONS=$((END_OFFSET - START_OFFSET))
TOTAL_BATCHES=$((TOTAL_QUESTIONS / BATCH_SIZE))

echo "Processing $TOTAL_QUESTIONS questions in $TOTAL_BATCHES batches..."
echo "Starting from offset $START_OFFSET to $END_OFFSET"

# Counter for progress tracking
CURRENT_BATCH=0

for ((offset=$START_OFFSET; offset<$END_OFFSET; offset+=$BATCH_SIZE)); do
  CURRENT_BATCH=$((CURRENT_BATCH + 1))
  echo "Processing batch $CURRENT_BATCH of $TOTAL_BATCHES (offset: $offset)..."

  # Fetch questions for this batch
  # Then rewrite and update
  # This would need to be implemented with the actual SQL queries
  # For now, this is a template structure

  sleep 0.1  # Small delay to avoid overwhelming the database
done

echo "All batches processed!"
