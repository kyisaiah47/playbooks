#!/usr/bin/env python3
"""
Generate smaller index files grouped by template instead of one massive index.
This prevents Turbopack from loading all 25k+ modules at once.
"""

import os
import json

def generate_article_indexes():
    """Generate per-template index files for articles"""
    with open('../src/data/articles/manifest.json', 'r') as f:
        manifest = json.load(f)

    # Group by template
    by_template = {}
    for item in manifest:
        template = item['template']
        if template not in by_template:
            by_template[template] = []
        by_template[template].append(item)

    # Create index file that exports lazy loaders
    index_content = "// Lazy-loading article registry\n\n"
    index_content += "export const articleLoaders: Record<string, () => Promise<any>> = {\n"

    for template, items in sorted(by_template.items()):
        for item in items:
            filename = item['filename']
            index_content += f"  '{filename}': () => import('./{filename}'),\n"

    index_content += "};\n\n"
    index_content += "// Load all articles (use sparingly)\n"
    index_content += "export async function loadAllArticles() {\n"
    index_content += "  const modules = await Promise.all(Object.values(articleLoaders).map(loader => loader()));\n"
    index_content += "  return modules.flatMap(m => m.articles || []);\n"
    index_content += "}\n"

    with open('../src/data/articles/index.ts', 'w') as f:
        f.write(index_content)

    print(f"Generated article index with {len(manifest)} lazy loaders")
    return len(by_template)

def generate_prompt_indexes():
    """Generate per-template index files for prompts"""
    with open('../src/data/prompts/manifest.json', 'r') as f:
        manifest = json.load(f)

    # Create index file that exports lazy loaders
    index_content = "// Lazy-loading prompt registry\n\n"
    index_content += "export const promptLoaders: Record<string, () => Promise<any>> = {\n"

    for item in sorted(manifest, key=lambda x: x['filename']):
        filename = item['filename']
        index_content += f"  '{filename}': () => import('./{filename}'),\n"

    index_content += "};\n\n"
    index_content += "// Load all prompts (use sparingly)\n"
    index_content += "export async function loadAllPrompts() {\n"
    index_content += "  const modules = await Promise.all(Object.values(promptLoaders).map(loader => loader()));\n"
    index_content += "  return modules.flatMap(m => m.prompts || []);\n"
    index_content += "}\n"

    with open('../src/data/prompts/index.ts', 'w') as f:
        f.write(index_content)

    print(f"Generated prompt index with {len(manifest)} lazy loaders")
    return len(manifest)

def generate_marketing_index():
    """Generate marketing index file"""
    with open('../src/data/marketing/manifest.json', 'r') as f:
        manifest = json.load(f)

    # Create index file with direct imports (marketing is small enough)
    index_content = "// Marketing pages - direct imports\n\n"

    for item in sorted(manifest, key=lambda x: x['filename']):
        filename = item['filename']
        index_content += f"export * from './{filename}';\n"

    with open('../src/data/marketing/index.ts', 'w') as f:
        f.write(index_content)

    print(f"Generated marketing index with {len(manifest)} entries")
    return len(manifest)

def generate_template_index():
    """Generate template index file"""
    with open('../src/data/templates/manifest.json', 'r') as f:
        manifest = json.load(f)

    # Create index file with direct imports (templates are small enough)
    index_content = "// Templates - direct imports\n\n"

    for item in sorted(manifest, key=lambda x: x['filename']):
        filename = item['filename']
        index_content += f"export * from './{filename}';\n"

    with open('../src/data/templates/index.ts', 'w') as f:
        f.write(index_content)

    print(f"Generated template index with {len(manifest)} entries")
    return len(manifest)

if __name__ == '__main__':
    print("Generating optimized index files...")
    print()

    generate_article_indexes()
    generate_prompt_indexes()
    generate_marketing_index()
    generate_template_index()

    print()
    print("Done! Index files use lazy loading for large datasets.")
