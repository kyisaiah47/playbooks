#!/usr/bin/env python3
"""
Seed Supabase database with all Templata content from TypeScript files.
"""

import os
import json
import re
from supabase import create_client, Client

# Supabase configuration
SUPABASE_URL = "https://uvcstcajctqbxddosdbf.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2Y3N0Y2FqY3RxYnhkZG9zZGJmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1Nzk3OTcwNywiZXhwIjoyMDczNTU1NzA3fQ.PjcGj6uFV1M5yFju1YYvbxG3ld55llauMUPlrjow6I4"

# Initialize Supabase client
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

def parse_ts_file_to_dict(filepath):
    """Parse TypeScript file and extract data as dictionary"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the exported array/object
    # This is a simplified parser - assumes specific format
    data_match = re.search(r'export const \w+ = ({.*?});', content, re.DOTALL)
    if not data_match:
        data_match = re.search(r'export const \w+: \w+\[\] = (\[.*?\]);', content, re.DOTALL)

    if data_match:
        # This is hacky but works for our specific format
        # In production, you'd use a proper TS parser
        data_str = data_match.group(1)
        # Convert TS to JSON-like format (this is simplified)
        # For now, we'll use exec to evaluate it
        return None  # We'll handle this differently

    return None

def seed_articles():
    """Seed articles from manifest"""
    print("Seeding articles...")

    with open('../src/data/articles/manifest.json', 'r') as f:
        manifest = json.load(f)

    batch = []
    count = 0

    for item in manifest:
        filepath = f"../src/data/articles/{item['filename']}.ts"

        # Read the file and extract article data
        # For now, we'll skip parsing and just track progress
        # In next iteration, we'll properly parse the TS files

        count += 1
        if count % 1000 == 0:
            print(f"  Processed {count}/{len(manifest)} articles...")

    print(f"✓ Would seed {count} articles (parser implementation pending)")
    return count

def seed_prompts():
    """Seed prompts from manifest"""
    print("Seeding prompts...")

    with open('../src/data/prompts/manifest.json', 'r') as f:
        manifest = json.load(f)

    print(f"✓ Would seed {len(manifest)} prompts (parser implementation pending)")
    return len(manifest)

def seed_marketing():
    """Seed marketing pages from manifest"""
    print("Seeding marketing pages...")

    with open('../src/data/marketing/manifest.json', 'r') as f:
        manifest = json.load(f)

    print(f"✓ Would seed {len(manifest)} marketing pages (parser implementation pending)")
    return len(manifest)

def seed_templates():
    """Seed templates from manifest"""
    print("Seeding templates...")

    with open('../src/data/templates/manifest.json', 'r') as f:
        manifest = json.load(f)

    print(f"✓ Would seed {len(manifest)} templates (parser implementation pending)")
    return len(manifest)

if __name__ == '__main__':
    print("=" * 60)
    print("Templata Supabase Seeder")
    print("=" * 60)
    print()

    # Test connection
    try:
        result = supabase.table('templata_articles').select('count').execute()
        print("✓ Connected to Supabase successfully")
        print()
    except Exception as e:
        print(f"✗ Failed to connect to Supabase: {e}")
        print("  Make sure you've run the schema.sql file first!")
        exit(1)

    articles = seed_articles()
    prompts = seed_prompts()
    marketing = seed_marketing()
    templates = seed_templates()

    print()
    print("=" * 60)
    print(f"Summary: {articles + prompts + marketing + templates} total items")
    print("=" * 60)
    print()
    print("NOTE: This is a dry-run. Actual TS parser implementation needed.")
    print("Next step: Install supabase-py and implement proper TS parsing.")
