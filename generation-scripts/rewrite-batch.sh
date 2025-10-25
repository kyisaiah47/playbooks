#!/bin/bash

# Batch rewrite script for questions offset 15400 to 20000
# This processes batches 9-100 (starting from where we left off)

PROJECT_ID="uvcstcajctqbxddosdbf"

# Function to rewrite prompts to Notion-style
rewrite_prompt() {
    local prompt="$1"

    # Apply transformations
    prompt=$(echo "$prompt" | sed -E "s/^Document /Write down /g")
    prompt=$(echo "$prompt" | sed -E "s/^Research /Look into /g; s/^Research /Check out /g")
    prompt=$(echo "$prompt" | sed -E "s/^Reflect on /Think about /g")
    prompt=$(echo "$prompt" | sed -E "s/^Note /Notice /g; s/^Note /Keep track of /g")
    prompt=$(echo "$prompt" | sed -E "s/^Create notes /Write down /g")
    prompt=$(echo "$prompt" | sed -E "s/^Create a /Make a /g")
    prompt=$(echo "$prompt" | sed -E "s/^Compile /Put together /g; s/^Compile /Collect /g")
    prompt=$(echo "$prompt" | sed -E "s/ and note / and notice /g")
    prompt=$(echo "$prompt" | sed -E "s/ and document / and write down /g")

    # Add contractions
    prompt=$(echo "$prompt" | sed -E "s/you have/you've/g")
    prompt=$(echo "$prompt" | sed -E "s/what is/what's/g")
    prompt=$(echo "$prompt" | sed -E "s/how would/how'd/g")

    echo "$prompt"
}

echo "Starting batch processing from offset 15400 to 20000"
echo "This will process batches 9-100"

for offset in $(seq 15400 50 19950); do
    batch_num=$(( (offset - 15000) / 50 + 1 ))
    echo "Processing batch $batch_num (offset $offset)..."

    # Note: This is a template script
    # Actual processing would need to be done via the Supabase MCP tools
    # This script serves as documentation of the process
done

echo "Script template created. Execute batches via Supabase MCP tools."
