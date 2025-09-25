#!/usr/bin/env python3

import re
import sys

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
            json_obj = f"""  {{
    id: 'prompt-{prompt_id}',
    prompt: '{prompt_text}',
    category: '{category}'
  }}"""
            json_objects.append(json_obj)
            prompt_id += 1

    return ',\n'.join(json_objects)

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python3 convert-prompts.py <text_file>")
        sys.exit(1)

    text_file = sys.argv[1]
    json_output = convert_text_to_json(text_file)

    print("export const actionPrompts = [")
    print(json_output)
    print("];")