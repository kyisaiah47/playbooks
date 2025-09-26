#!/usr/bin/env python3

import re
import sys
import os
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
    with open(text_file, 'r') as f:
        content = f.read()

    # Parse categories and prompts
    categories = re.findall(r'CATEGORY \d+: (.+?)\n((?:\d+\. .+?\n)+)', content)

    prompt_id = 1
    json_objects = []

    for category_name, prompts_text in categories:
        # Extract individual prompts
        prompts = re.findall(r'\d+\. (.+)', prompts_text)

        for prompt_text in prompts:
            category = categorize_prompt(prompt_text)
            # Escape single quotes in the prompt text
            escaped_prompt = prompt_text.replace("'", "\\'")
            json_obj = f"""  {{
    id: 'prompt-{prompt_id}',
    prompt: '{escaped_prompt}',
    category: '{category}'
  }}"""
            json_objects.append(json_obj)
            prompt_id += 1

    return ',\n'.join(json_objects)

if __name__ == "__main__":
    # Check if we're doing batch processing (no arguments) or single file
    if len(sys.argv) == 1:
        # Batch processing mode
        print("🚀 Batch converting all template prompt files...")

        # Find all templata-* directories with their prompt files
        worktree_dirs = glob.glob('../templata-*')
        converted = 0

        for worktree_dir in sorted(worktree_dirs):
            if not os.path.isdir(worktree_dir):
                continue

            template_name = os.path.basename(worktree_dir).replace('templata-', '')
            prompt_file = f"{worktree_dir}/{template_name}-prompts.txt"
            output_file = f"../src/data/prompts/{template_name}-prompts.ts"

            if os.path.isfile(prompt_file):
                try:
                    json_output = convert_text_to_json(prompt_file)

                    with open(output_file, 'w') as f:
                        f.write("export const actionPrompts = [\n")
                        f.write(json_output)
                        f.write("\n];\n")

                    print(f"✅ {template_name}")
                    converted += 1

                except Exception as e:
                    print(f"❌ {template_name}: {e}")
            else:
                print(f"⚠️  {template_name}: No prompt file found")

        print(f"\n🎉 Converted {converted} prompt files to TypeScript!")

    elif len(sys.argv) == 2:
        # Single file mode (original behavior)
        text_file = sys.argv[1]
        json_output = convert_text_to_json(text_file)

        print("export const actionPrompts = [")
        print(json_output)
        print("];")

    else:
        print("Usage: python3 convert-prompts.py [text_file]")
        print("  - No arguments: Batch convert all template prompts")
        print("  - One argument: Convert single file to stdout")
        sys.exit(1)