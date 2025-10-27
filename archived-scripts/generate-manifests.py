#!/usr/bin/env python3
"""
Generate manifest files that list all available content without importing it.
This allows the app to lazy-load content on demand instead of bundling everything.
"""

import os
import glob
import json

def generate_article_manifest():
    """Generate manifest of all article files"""
    article_files = sorted(glob.glob('../src/data/articles/*-article-*.ts'))

    manifest = []
    for filepath in article_files:
        filename = os.path.basename(filepath).replace('.ts', '')
        # Extract template name from filename (everything before "-article-N")
        parts = filename.rsplit('-article-', 1)
        if len(parts) == 2:
            template_id = parts[0]
            article_num = parts[1]
            manifest.append({
                'filename': filename,
                'template': template_id,
                'number': int(article_num)
            })

    output_file = '../src/data/articles/manifest.json'
    with open(output_file, 'w') as f:
        json.dump(manifest, f, indent=2)

    print(f"Generated article manifest with {len(manifest)} entries")
    return len(manifest)

def generate_prompt_manifest():
    """Generate manifest of all prompt files"""
    prompt_files = sorted(glob.glob('../src/data/prompts/*-prompts-*.ts'))

    manifest = []
    for filepath in prompt_files:
        filename = os.path.basename(filepath).replace('.ts', '')
        # Extract template name from filename (everything before "-prompts-N")
        parts = filename.rsplit('-prompts-', 1)
        if len(parts) == 2:
            template_id = parts[0]
            prompt_num = parts[1]
            manifest.append({
                'filename': filename,
                'template': template_id,
                'number': int(prompt_num)
            })

    output_file = '../src/data/prompts/manifest.json'
    with open(output_file, 'w') as f:
        json.dump(manifest, f, indent=2)

    print(f"Generated prompt manifest with {len(manifest)} entries")
    return len(manifest)

def generate_marketing_manifest():
    """Generate manifest of all marketing page files"""
    marketing_files = sorted(glob.glob('../src/data/marketing/*-marketing.ts'))

    manifest = []
    for filepath in marketing_files:
        filename = os.path.basename(filepath).replace('.ts', '')
        # Extract template ID from filename
        template_id = filename.replace('-marketing', '')
        manifest.append({
            'filename': filename,
            'template': template_id
        })

    output_file = '../src/data/marketing/manifest.json'
    with open(output_file, 'w') as f:
        json.dump(manifest, f, indent=2)

    print(f"Generated marketing manifest with {len(manifest)} entries")
    return len(manifest)

def generate_template_manifest():
    """Generate manifest of all template files"""
    template_files = sorted(glob.glob('../src/data/templates/*-template.ts'))

    manifest = []
    for filepath in template_files:
        filename = os.path.basename(filepath).replace('.ts', '')
        # Extract template ID from filename
        template_id = filename.replace('-template', '')
        manifest.append({
            'filename': filename,
            'template': template_id
        })

    output_file = '../src/data/templates/manifest.json'
    with open(output_file, 'w') as f:
        json.dump(manifest, f, indent=2)

    print(f"Generated template manifest with {len(manifest)} entries")
    return len(manifest)

if __name__ == '__main__':
    print("Generating content manifests...")
    print()

    articles = generate_article_manifest()
    prompts = generate_prompt_manifest()
    marketing = generate_marketing_manifest()
    templates = generate_template_manifest()

    print()
    print(f"Total manifest entries: {articles + prompts + marketing + templates}")
