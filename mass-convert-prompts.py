#!/usr/bin/env python3

import re
import os
import sys
import glob

def categorize_prompt(prompt_text):
    """Determine category based on prompt content"""
    prompt_lower = prompt_text.lower()

    if any(word in prompt_lower for word in ['research', 'learn', 'understand', 'study', 'download', 'install']):
        return 'research'
    elif any(word in prompt_lower for word in ['create', 'design', 'build', 'make', 'develop', 'model']):
        return 'action'
    elif any(word in prompt_lower for word in ['choose', 'select', 'decide', 'compare', 'evaluate']):
        return 'decision'
    else:
        return 'planning'

def convert_text_to_json(text_file):
    """Convert text format to JSON objects"""
    try:
        with open(text_file, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading {text_file}: {e}")
        return None

    # Parse categories and prompts
    categories = re.findall(r'CATEGORY \d+: (.+?)\n((?:\d+\. .+?\n)+)', content)

    if not categories:
        print(f"No categories found in {text_file}")
        return None

    prompt_id = 1
    json_objects = []

    for category_name, prompts_text in categories:
        # Extract individual prompts
        prompts = re.findall(r'\d+\. (.+)', prompts_text)

        for prompt_text in prompts:
            # Escape single quotes in prompt text and category name
            escaped_prompt = prompt_text.replace("'", "\\'")
            escaped_category = category_name.replace("'", "\\'")
            prompt_type = categorize_prompt(prompt_text)
            json_obj = f"""  {{
    id: 'prompt-{prompt_id}',
    prompt: '{escaped_prompt}',
    category: '{escaped_category}',
    type: '{prompt_type}'
  }}"""
            json_objects.append(json_obj)
            prompt_id += 1

    return ',\n'.join(json_objects)

def mass_convert():
    """Convert all *-prompts.txt files in all templata-* directories"""
    # Find all templata-* directories
    worktree_pattern = "../templata-*"
    worktrees = glob.glob(worktree_pattern)

    if not worktrees:
        print("No templata-* directories found")
        return

    print(f"Found {len(worktrees)} worktrees")

    converted_count = 0
    failed_count = 0

    for worktree in sorted(worktrees):
        if not os.path.isdir(worktree):
            continue

        template_name = os.path.basename(worktree).replace('templata-', '')
        prompts_file = os.path.join(worktree, f"{template_name}-prompts.txt")
        output_file = os.path.join(worktree, f"{template_name}-prompts.ts")

        if not os.path.exists(prompts_file):
            print(f"❌ No prompts file: {prompts_file}")
            failed_count += 1
            continue

        print(f"Converting {template_name}...")

        json_output = convert_text_to_json(prompts_file)
        if json_output is None:
            print(f"❌ Failed to convert {template_name}")
            failed_count += 1
            continue

        # Write TypeScript file
        try:
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write("export const actionPrompts = [\n")
                f.write(json_output)
                f.write("\n];\n")

            print(f"✅ {template_name} -> {template_name}-prompts.ts")
            converted_count += 1

        except Exception as e:
            print(f"❌ Error writing {output_file}: {e}")
            failed_count += 1

    print(f"\nConversion complete: {converted_count} success, {failed_count} failed")

if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "mass":
        mass_convert()
    elif len(sys.argv) == 2:
        # Single file conversion
        text_file = sys.argv[1]
        json_output = convert_text_to_json(text_file)
        if json_output:
            print("export const actionPrompts = [")
            print(json_output)
            print("];")
    else:
        print("Usage:")
        print("  python3 mass-convert-prompts.py mass           # Convert all prompts files")
        print("  python3 mass-convert-prompts.py <text_file>    # Convert single file")