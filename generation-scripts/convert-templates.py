#!/usr/bin/env python3

import re
import sys
import os
import glob
import json

def parse_template_text(text_file):
    """Parse template text format to structured data"""
    with open(text_file, 'r') as f:
        content = f.read()

    # Extract basic info
    title_match = re.search(r'TITLE:\s*(.+)', content)
    description_match = re.search(r'DESCRIPTION:\s*(.+)', content)
    category_match = re.search(r'CATEGORY:\s*(.+)', content)
    icon_match = re.search(r'ICON:\s*(.+)', content)
    difficulty_match = re.search(r'DIFFICULTY:\s*(.+)', content)
    estimated_time_match = re.search(r'ESTIMATEDTIME:\s*(.+)', content)

    # Extract tags
    tags_match = re.search(r'TAGS:\s*(.+)', content)
    tags = []
    if tags_match:
        tags = [tag.strip() for tag in tags_match.group(1).split(',')]

    return {
        'title': title_match.group(1).strip() if title_match else 'Template',
        'description': description_match.group(1).strip() if description_match else 'Template description',
        'category': category_match.group(1).strip() if category_match else 'Life Planning',
        'icon': icon_match.group(1).strip() if icon_match else 'file-text',
        'difficulty': difficulty_match.group(1).strip() if difficulty_match else 'intermediate',
        'estimatedTime': estimated_time_match.group(1).strip() if estimated_time_match else '30-60 minutes',
        'tags': tags
    }

def generate_template_ts(template_data, template_name):
    """Generate TypeScript template file content"""

    # Convert template name to camelCase
    camel_case = re.sub(r'[-_]([a-z])', lambda m: m.group(1).upper(), template_name)
    camel_case = camel_case[0].lower() + camel_case[1:] if camel_case else template_name

    # Generate tags - format each tag as string
    tags_str = ',\n    '.join([f'"{tag}"' for tag in template_data['tags']])

    template_content = f"""import {{ GuidanceTemplate }} from '@/types/template';

export const template: GuidanceTemplate = {{
  id: "{template_name}",
  title: "{template_data['title']}",
  description: "{template_data['description']}",
  category: "{template_data['category']}",
  icon: "{template_data['icon']}",
  difficulty: "{template_data.get('difficulty', 'intermediate')}",
  estimatedTime: "{template_data.get('estimatedTime', '30-60 minutes')}",
  tags: [
    {tags_str}
  ],
  lastUpdated: new Date().toISOString().split('T')[0]
}};
"""

    return template_content

if __name__ == "__main__":
    # Check if we're doing batch processing (no arguments) or single file
    if len(sys.argv) == 1:
        # Batch processing mode
        print("🚀 Batch converting all template text files...")

        # Find all templata-* directories with their template files
        worktree_dirs = glob.glob('../../templata-*')
        converted = 0

        for worktree_dir in sorted(worktree_dirs):
            if not os.path.isdir(worktree_dir):
                continue

            template_name = os.path.basename(worktree_dir).replace('templata-', '')
            template_file = f"{worktree_dir}/{template_name}-template.txt"
            output_file = f"../src/data/templates/{template_name}-template.ts"

            if os.path.isfile(template_file):
                try:
                    template_data = parse_template_text(template_file)
                    template_ts = generate_template_ts(template_data, template_name)

                    with open(output_file, 'w') as f:
                        f.write(template_ts)

                    print(f"✅ {template_name}")
                    converted += 1

                except Exception as e:
                    print(f"❌ {template_name}: {e}")
            else:
                print(f"⚠️  {template_name}: No template file found")

        print(f"\n🎉 Converted {converted} template files to TypeScript!")

    elif len(sys.argv) == 2:
        # Single file mode
        text_file = sys.argv[1]
        template_name = os.path.basename(text_file).replace('-template.txt', '')

        template_data = parse_template_text(text_file)
        template_ts = generate_template_ts(template_data, template_name)

        print(template_ts)

    else:
        print("Usage: python3 convert-templates.py [text_file]")
        print("  - No arguments: Batch convert all template text files")
        print("  - One argument: Convert single file to stdout")
        sys.exit(1)