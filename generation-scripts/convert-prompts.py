#!/usr/bin/env python3

import re
import sys
import os
import glob

def categorize_prompt(prompt_text):
    """Determine category based on prompt content"""
    prompt_lower = prompt_text.lower()

    if any(word in prompt_lower for word in ['reflect', 'think about', 'consider', 'analyze your', 'examine your', 'what did you', 'how did you', 'personal experience', 'lessons learned']):
        return 'reflection'
    elif any(word in prompt_lower for word in ['research', 'learn', 'understand', 'study', 'download', 'install']):
        return 'research'
    elif any(word in prompt_lower for word in ['create', 'design', 'build', 'make', 'develop', 'model']):
        return 'action'
    elif any(word in prompt_lower for word in ['choose', 'select', 'decide', 'compare', 'evaluate']):
        return 'decision'
    else:
        return 'planning'

def convert_text_to_json(text_file, start_id=1):
    """Convert text format to JSON objects"""
    with open(text_file, 'r') as f:
        content = f.read()

    json_objects = []
    current_id = start_id

    # Check if it's new format (single category per file) or old format (multiple categories)
    if content.startswith('CATEGORY:'):
        # New format: single category file
        lines = content.strip().split('\n')
        category_name = ""
        prompts = []

        for line in lines:
            if line.startswith('CATEGORY: '):
                category_name = line[10:].strip()
            elif re.match(r'^\d+\. ', line):
                prompt_text = re.sub(r'^\d+\. ', '', line).strip()
                prompts.append(prompt_text)

        # Convert prompts to JSON objects
        for prompt_text in prompts:
            category = categorize_prompt(prompt_text)
            escaped_prompt = prompt_text.replace("'", "\\'").replace('"', '\\"')
            json_obj = f"""  {{
    id: 'prompt-{current_id}',
    prompt: '{escaped_prompt}',
    category: '{category}'
  }}"""
            json_objects.append(json_obj)
            current_id += 1

    else:
        # Old format: multiple categories in one file
        categories = re.findall(r'CATEGORY \d+: (.+?)\n((?:\d+\. .+?\n)+)', content)

        for category_name, prompts_text in categories:
            prompts = re.findall(r'\d+\. (.+)', prompts_text)

            for prompt_text in prompts:
                category = categorize_prompt(prompt_text)
                escaped_prompt = prompt_text.replace("'", "\\'").replace('"', '\\"')
                json_obj = f"""  {{
    id: 'prompt-{current_id}',
    prompt: '{escaped_prompt}',
    category: '{category}'
  }}"""
                json_objects.append(json_obj)
                current_id += 1

    return ',\n'.join(json_objects), current_id

if __name__ == "__main__":
    # Check if we're doing batch processing (no arguments) or single file
    if len(sys.argv) == 1:
        # Batch processing mode
        print("🚀 Batch converting all template prompt files...")

        # Find all templata-* directories with their prompt files
        worktree_dirs = glob.glob('../../templata-*')
        converted = 0

        for worktree_dir in sorted(worktree_dirs):
            if not os.path.isdir(worktree_dir):
                continue

            template_name = os.path.basename(worktree_dir).replace('templata-', '')

            # Check for separate prompt category files (new format)
            prompt_files = []
            for i in range(1, 6):  # Categories 1-5
                prompt_file = f"{worktree_dir}/{template_name}-prompt-category-{i}.txt"
                if os.path.isfile(prompt_file):
                    prompt_files.append(prompt_file)

            # Fallback to old single file format
            if not prompt_files:
                old_prompt_file = f"{worktree_dir}/{template_name}-prompts.txt"
                if os.path.isfile(old_prompt_file):
                    prompt_files = [old_prompt_file]

            output_file = f"../src/data/prompts/{template_name}-prompts.ts"

            if prompt_files:
                try:
                    # Combine all prompt files with sequential IDs
                    all_prompts = []
                    current_id = 1

                    for prompt_file in prompt_files:
                        prompts_text, next_id = convert_text_to_json(prompt_file, current_id)
                        if prompts_text:
                            all_prompts.append(prompts_text)
                            current_id = next_id

                    json_output = ',\n'.join(all_prompts)

                    with open(output_file, 'w') as f:
                        f.write("export const prompts = [\n")
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
        json_output, _ = convert_text_to_json(text_file)

        print("export const prompts = [")
        print(json_output)
        print("];")

    else:
        print("Usage: python3 convert-prompts.py [text_file]")
        print("  - No arguments: Batch convert all template prompts")
        print("  - One argument: Convert single file to stdout")
        sys.exit(1)