#!/usr/bin/env python3
"""
Batch rewrite questions from Wikipedia-style to Notion-style tone
Processes questions from offset 15000 to 20000 (5000 total questions)
"""

import re

def rewrite_prompt(prompt):
    """Transform Wikipedia-style prompt to Notion-style tone"""

    # Store original for comparison
    original = prompt

    # Handle "Document" at start
    if prompt.startswith("Document the "):
        prompt = "Write down the " + prompt[13:]
    elif prompt.startswith("Document "):
        prompt = "Write down " + prompt[9:]

    # Handle "Research" at start
    if prompt.startswith("Research and "):
        if "compare" in prompt[:30].lower() or "note" in prompt[:50].lower():
            prompt = "Check out " + prompt[13:]
        else:
            prompt = "Look into " + prompt[13:]
    elif prompt.startswith("Research "):
        prompt = "Look into " + prompt[9:]

    # Handle "Reflect on" at start
    if prompt.startswith("Reflect on "):
        prompt = "Think about " + prompt[11:]

    # Handle "Note" at start
    if prompt.startswith("Note the "):
        prompt = "Notice the " + prompt[9:]
    elif prompt.startswith("Note "):
        prompt = "Keep track of " + prompt[5:]

    # Handle "Create notes" and "Create a"
    prompt = re.sub(r'^Create notes on ', 'Write down ', prompt)
    prompt = re.sub(r'^Create a ', 'Make a ', prompt)

    # Handle "Compile"
    if prompt.startswith("Compile "):
        # Alternate between "Put together" and "Collect"
        if "list" in prompt[:30].lower():
            prompt = "Put together " + prompt[8:]
        else:
            prompt = "Collect " + prompt[8:]

    # Handle "Catalog"
    if prompt.startswith("Catalog "):
        prompt = "Put together " + prompt[8:]

    # Handle "Record"
    if prompt.startswith("Record "):
        prompt = "Keep track of " + prompt[7:]

    # Handle "Track"
    if prompt.startswith("Track "):
        prompt = "Track " + prompt[6:]  # Keep as is, it's already friendly

    # Handle "Investigate"
    if prompt.startswith("Investigate "):
        prompt = "Look into " + prompt[12:]

    # Handle "Analyze"
    if prompt.startswith("Analyze "):
        prompt = "Think about " + prompt[8:]

    # Handle "Explore" and "Study"
    if prompt.startswith("Explore "):
        prompt = "Check out " + prompt[8:]
    if prompt.startswith("Study "):
        prompt = "Look into " + prompt[6:]

    # Handle "Collect" at start (already good but may need slight tweaks)
    # Leave as is - "Collect" is already friendly

    # Add contractions
    prompt = re.sub(r"\byou have\b", "you've", prompt)
    prompt = re.sub(r"\byou are\b", "you're", prompt)
    prompt = re.sub(r"\bwhat is\b", "what's", prompt)
    prompt = re.sub(r"\bHow would\b", "How'd", prompt)
    prompt = re.sub(r"\bhow would\b", "how'd", prompt)
    prompt = re.sub(r"\bdo not\b", "don't", prompt)
    prompt = re.sub(r"\bcannot\b", "can't", prompt)
    prompt = re.sub(r"\bhave not\b", "haven't", prompt)
    prompt = re.sub(r"\bdid not\b", "didn't", prompt)
    prompt = re.sub(r"\bwould not\b", "wouldn't", prompt)
    prompt = re.sub(r"\bcould not\b", "couldn't", prompt)

    # Replace formal phrases with friendlier ones
    prompt = re.sub(r' and note ', ' and notice ', prompt)
    prompt = re.sub(r' and document ', ' and write down ', prompt)
    prompt = re.sub(r' and identify ', ' and notice ', prompt)
    prompt = re.sub(r' and summarize ', ' and sum up ', prompt)

    # Add question marks at the end for certain patterns
    if " and what " in prompt.lower() and not prompt.endswith('?'):
        # Find the "and what/and how/and which" part and make it a question
        prompt = re.sub(r' and (what|how|which|where|why) ([^.]+)\.$', r'. What \2?', prompt)
        prompt = re.sub(r' and (what|how|which|where|why) ([^.]+)\.$', r'. How \2?', prompt)

    # Common transformations in the middle of sentences
    prompt = re.sub(r' to understand ', ' to get ', prompt)

    return prompt

# Example usage
if __name__ == "__main__":
    test_prompts = [
        "Document the key components and scoring procedures for psychological assessment tools you've learned about or used in practice.",
        "Research the latest updates to diagnostic criteria in the DSM-5-TR for disorders you commonly encounter in your work.",
        "Reflect on a challenging diagnostic case and what additional information or assessments might have clarified the diagnosis.",
        "Note the cultural considerations and potential biases present in standardized psychological tests you use.",
        "Create notes on continuing education requirements and track relevant workshops, conferences, or courses you want to pursue.",
        "Compile insights from mentors, colleagues, or supervisors about essential skills for thriving in various ministry settings and seasons."
    ]

    print("Testing rewrite function:")
    for prompt in test_prompts:
        rewritten = rewrite_prompt(prompt)
        print(f"\nOriginal: {prompt}")
        print(f"Rewritten: {rewritten}")
