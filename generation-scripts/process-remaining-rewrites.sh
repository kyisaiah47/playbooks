#!/bin/bash

# Script to process remaining question rewrites from offset 26420 to 30920
# This processes 4500 questions in batches of 100

PROJECT_ID="uvcstcajctqbxddosdbf"
START_OFFSET=26420
END_OFFSET=30920
BATCH_SIZE=100

for ((offset=$START_OFFSET; offset<$END_OFFSET; offset+=BATCH_SIZE)); do
    echo "Processing batch at offset $offset..."

    # Fetch questions
    psql "postgresql://postgres.uvcstcajctqbxddosdbf:${SUPABASE_DB_PASSWORD}@aws-0-us-west-1.pooler.supabase.com:6543/postgres" << EOF
    \\t
    \\a
    \\o /tmp/batch_${offset}.csv
    SELECT id, prompt FROM questions ORDER BY id LIMIT $BATCH_SIZE OFFSET $offset;
    \\o
EOF

    # Process rewrites in Python
    python3 << PYTHON
import csv
import re

# Read batch
questions = []
with open('/tmp/batch_${offset}.csv', 'r') as f:
    reader = csv.reader(f, delimiter='|')
    for row in reader:
        if len(row) >= 2:
            questions.append({'id': row[0].strip(), 'prompt': row[1].strip()})

# Rewrite function
def rewrite_to_notion_style(prompt):
    # Apply transformations
    prompt = re.sub(r'^Document ', 'Write down ', prompt)
    prompt = re.sub(r'^Research ', 'Look into ', prompt)
    prompt = re.sub(r'^Reflect on ', 'Think about ', prompt)
    prompt = re.sub(r'^Note ', 'Notice ', prompt)
    prompt = re.sub(r'^Investigate ', 'Check out ', prompt)
    prompt = re.sub(r'^Explore ', 'Check out ', prompt)
    prompt = re.sub(r'^Track ', 'Keep track of ', prompt)
    prompt = re.sub(r'^Compile ', 'List out ', prompt)
    prompt = re.sub(r'^Create notes on ', 'Write down ', prompt)
    prompt = re.sub(r'^Create a ', 'What are ', prompt)
    prompt = re.sub(r'^List ', 'What are ', prompt, count=1)
    prompt = re.sub(r'^Catalog ', 'Write down ', prompt)
    prompt = re.sub(r'^Analyze ', 'Check out ', prompt)
    prompt = re.sub(r'^Study ', 'Check out ', prompt)
    prompt = re.sub(r'^Collect ', 'Write down ', prompt)
    prompt = re.sub(r'^Gather ', 'Write down ', prompt)

    # Add contractions
    prompt = re.sub(r' you have ', ' you\'ve ', prompt)
    prompt = re.sub(r' what is ', ' what\'s ', prompt)
    prompt = re.sub(r' how would ', ' how\'d ', prompt)
    prompt = re.sub(r' that is ', ' that\'s ', prompt)

    # Split long sentences with questions
    prompt = re.sub(r' and note ', '. What ', prompt)
    prompt = re.sub(r' and identify ', '. What ', prompt)
    prompt = re.sub(r' and analyze ', '. How ', prompt)

    return prompt

# Generate SQL
sql_cases = []
ids = []
for q in questions:
    rewritten = rewrite_to_notion_style(q['prompt'])
    rewritten = rewritten.replace("'", "''")  # Escape quotes
    sql_cases.append(f"  WHEN '{q['id']}' THEN '{rewritten}'")
    ids.append(f"'{q['id']}'")

sql = f"""UPDATE questions SET prompt = CASE id
{chr(10).join(sql_cases)}
END
WHERE id IN ({', '.join(ids)});"""

with open('/tmp/update_${offset}.sql', 'w') as f:
    f.write(sql)
PYTHON

    # Execute SQL
    psql "postgresql://postgres.uvcstcajctqbxddosdbf:${SUPABASE_DB_PASSWORD}@aws-0-us-west-1.pooler.supabase.com:6543/postgres" -f /tmp/update_${offset}.sql

    echo "Completed batch at offset $offset"
    sleep 1
done

echo "All batches processed!"
