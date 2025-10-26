#!/usr/bin/env python3
"""
Batch rewrite questions from offset 100000 to 103820
Transforms Wikipedia-style tone to Notion-style tone
"""

import subprocess
import json
import re

PROJECT_ID = "uvcstcajctqbxddosdbf"
START_OFFSET = 100450  # Starting from where we left off
END_OFFSET = 103820
BATCH_SIZE = 50

def transform_prompt(prompt):
    """Transform Wikipedia-style to Notion-style tone"""

    # Replace formal starters with friendlier alternatives
    prompt = re.sub(r'^Document\s+', 'Write down ', prompt)
    prompt = re.sub(r'^Research\s+', 'Look into ', prompt)
    prompt = re.sub(r'^Reflect on\s+', 'Think about ', prompt)
    prompt = re.sub(r'^Note\s+the\s+', 'Notice the ', prompt)
    prompt = re.sub(r'^Note\s+', 'Notice ', prompt)
    prompt = re.sub(r'^Compile\s+', 'Gather ', prompt)
    prompt = re.sub(r'^Create\s+', 'Make ', prompt)
    prompt = re.sub(r'^Investigate\s+', 'Check out ', prompt)
    prompt = re.sub(r'^Study\s+', 'Check out ', prompt)
    prompt = re.sub(r'^Analyze\s+', 'Look at ', prompt)
    prompt = re.sub(r'^Track\s+', 'Keep track of ', prompt)
    prompt = re.sub(r'^Collect\s+', 'Gather ', prompt)
    prompt = re.sub(r'^List\s+', 'Make a list of ', prompt)

    # Mid-sentence replacements
    prompt = re.sub(r'\sdocument\s+', ' write down ', prompt)
    prompt = re.sub(r'\sresearch\s+', ' look into ', prompt)
    prompt = re.sub(r'\snote\s+', ' notice ', prompt)
    prompt = re.sub(r'\scompile\s+', ' gather ', prompt)
    prompt = re.sub(r'\screate\s+', ' make ', prompt)
    prompt = re.sub(r'\sinvestigate\s+', ' check out ', prompt)
    prompt = re.sub(r'\sstudy\s+', ' check out ', prompt)

    # Add contractions and friendlier phrases
    prompt = prompt.replace(' you have ', " you've ")
    prompt = prompt.replace(' what is ', " what's ")
    prompt = prompt.replace(' that is ', " that's ")
    prompt = prompt.replace(' could have ', " could've ")
    prompt = prompt.replace(' would have ', " would've ")

    # Make questions more direct
    prompt = re.sub(r'\s+and identify\s+', '. What ', prompt)
    prompt = re.sub(r'\s+and note\s+', '. What are ', prompt)
    prompt = re.sub(r'\s+and analyze\s+', '. Why do ', prompt)

    return prompt

def fetch_batch(offset):
    """Fetch a batch of questions from the database"""
    query = f"SELECT id, prompt, template_id FROM questions ORDER BY id LIMIT {BATCH_SIZE} OFFSET {offset}"

    cmd = [
        "npx", "-y", "@supabase/supabase-js@2",
        "execute",
        "--project-ref", PROJECT_ID,
        "--query", query
    ]

    # Use mcp__supabase__execute_sql via Claude Code instead
    print(f"Fetching batch at offset {offset}...")
    return None  # Will be called by main script

def update_batch(questions):
    """Update a batch of questions in the database"""
    if not questions:
        return

    case_statements = []
    ids = []

    for q in questions:
        q_id = q['id']
        original = q['prompt']
        transformed = transform_prompt(original)

        # Escape single quotes for SQL
        transformed_escaped = transformed.replace("'", "''")

        case_statements.append(f"    WHEN '{q_id}' THEN '{transformed_escaped}'")
        ids.append(f"'{q_id}'")

    update_query = f"""UPDATE questions SET
  prompt = CASE id
{chr(10).join(case_statements)}
  END,
  updated_at = NOW()
WHERE id IN ({', '.join(ids)})"""

    return update_query

def main():
    """Main processing loop"""
    offset = START_OFFSET
    batch_num = int((START_OFFSET - 100000) / BATCH_SIZE) + 1
    total_batches = int((END_OFFSET - START_OFFSET) / BATCH_SIZE) + 1

    print(f"Starting batch rewrite from offset {START_OFFSET} to {END_OFFSET}")
    print(f"Total batches to process: {total_batches}")
    print(f"Starting at batch #{batch_num}")
    print("")
    print("This script generates SQL queries that need to be executed via Claude Code's Supabase MCP tool")
    print("")

    while offset <= END_OFFSET:
        batch_num = int((offset - 100000) / BATCH_SIZE) + 1
        print(f"\n{'='*60}")
        print(f"Batch #{batch_num} - Offset {offset}")
        print(f"{'='*60}\n")
        print(f"Execute: SELECT id, prompt, template_id FROM questions ORDER BY id LIMIT {BATCH_SIZE} OFFSET {offset}")
        print(f"\nThen run the transformation and UPDATE query...")

        offset += BATCH_SIZE

        if offset > END_OFFSET:
            break

if __name__ == "__main__":
    main()
