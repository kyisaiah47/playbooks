#!/usr/bin/env python3

import re
import sys
import os
import glob
import json

def parse_landing_page_text(text_file):
    """Parse landing page text format to structured data"""
    with open(text_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract template name from filename
    template_name = os.path.basename(text_file).replace('-landing-page.txt', '')
    template_readable = template_name.replace('-', ' ').title()

    # Extract main sections using regex
    hero_match = re.search(r'# (.+?)\n\n## (.+?)\n\n(.+?)\n\n## What You Get', content, re.DOTALL)

    # Extract What You Get features
    what_you_get_section = re.search(r'## What You Get\n\n(.*?)\n\n## How It Works', content, re.DOTALL)
    features = []
    if what_you_get_section:
        feature_matches = re.findall(r'### (\d+)\. (.+?)\n(.+?)(?=\n\n###|\n\n##|$)', what_you_get_section.group(1), re.DOTALL)
        for _, title, description in feature_matches:
            icon_map = {
                'step-by-step guidance': 'CheckCircle2',
                'expert insights': 'Lightbulb',
                'actionable prompts': 'Target',
                'comprehensive resources': 'FileText'
            }
            icon = icon_map.get(title.lower(), 'CheckCircle2')
            features.append({
                "icon": icon,
                "title": title,
                "description": description.strip()
            })

    # Extract How It Works steps
    how_it_works_section = re.search(r'## How It Works\n\n(.*?)\n\n## Example Prompts', content, re.DOTALL)
    steps = []
    if how_it_works_section:
        step_matches = re.findall(r'### (\d+)\. (.+?)\n(.+?)(?=\n\n###|\n\n##|$)', how_it_works_section.group(1), re.DOTALL)
        for num, title, description in step_matches:
            steps.append({
                "number": f"{int(num):02d}",
                "title": title,
                "description": description.strip()
            })

    # Extract Example Prompts
    prompts_section = re.search(r'## Example Prompts\n\n(.*?)\n\n## Example Articles', content, re.DOTALL)
    prompts = []
    if prompts_section:
        prompt_matches = re.findall(r'- (.+)', prompts_section.group(1))
        prompts = [prompt.strip() for prompt in prompt_matches]

    # Extract Example Articles
    articles_section = re.search(r'## Example Articles\n\n(.*?)\n\n## Ready to organize', content, re.DOTALL)
    articles = []
    if articles_section:
        article_matches = re.findall(r'### (.+?)\n(.+?)(?=\n\n###|\n\n##|$)', articles_section.group(1), re.DOTALL)
        for title, description in article_matches:
            # Estimate read time and difficulty
            word_count = len(description.split())
            read_time = f"{max(8, min(15, word_count // 20))} min read"
            difficulty = "beginner" if "basic" in description.lower() or "beginner" in description.lower() else "intermediate"

            articles.append({
                "title": title.strip(),
                "description": description.strip()[:100] + "..." if len(description.strip()) > 100 else description.strip(),
                "readTime": read_time,
                "difficulty": difficulty
            })

    # Extract final CTA
    cta_section = re.search(r'## Ready to organize your (.+?)\?\n\n### (.+?)\n\n(.+)', content, re.DOTALL)

    # Build the structured data
    if hero_match:
        headline = hero_match.group(1).strip()
        subheadline = hero_match.group(2).strip()
        description = hero_match.group(3).strip()
    else:
        headline = f"Organize your {template_readable}"
        subheadline = f"Transform your {template_readable.lower()} planning"
        description = f"Get expert guidance and resources for {template_readable.lower()}."

    # Generate keywords
    keywords = [
        template_name.replace('-', ' '),
        f"{template_name.replace('-', ' ')} planning",
        f"{template_name.replace('-', ' ')} template",
        f"{template_name.replace('-', ' ')} guide",
        "life planning",
        "organization template"
    ]

    landing_page_data = {
        "templateLanding": {
            "seo": {
                "title": f"{template_readable} Template - {headline} | Templata",
                "description": f"Transform your {template_name.replace('-', ' ')} planning with our comprehensive template. Get expert guidance, actionable prompts, and step-by-step organization.",
                "keywords": keywords,
                "ogTitle": f"{template_readable} Template - Expert Guidance & Organization",
                "ogDescription": f"Comprehensive {template_name.replace('-', ' ')} template with expert insights, actionable prompts, and structured guidance."
            },
            "hero": {
                "announcement": {
                    "tag": "Template",
                    "title": "Now available in Templata"
                },
                "headline": headline,
                "subheadline": subheadline
            },
            "whatYouGet": {
                "sectionTitle": f"Everything you need for {template_name.replace('-', ' ')}",
                "sectionSubtitle": "Comprehensive guidance in one organized template",
                "features": features[:4]  # Ensure exactly 4 features
            },
            "howItWorks": {
                "sectionTitle": f"Your {template_name.replace('-', ' ')} journey, organized",
                "sectionSubtitle": "From overwhelming to organized in minutes",
                "steps": steps[:3]  # Ensure exactly 3 steps
            },
            "exampleContent": {
                "sectionTitle": "See what's inside",
                "sectionSubtitle": "Real prompts and articles from this template",
                "prompts": {
                    "title": "Example Action Prompts",
                    "subtitle": f"Practical tasks to move your {template_name.replace('-', ' ')} forward",
                    "items": prompts[:6]  # Ensure exactly 6 prompts
                },
                "articles": {
                    "title": "Expert Articles & Guides",
                    "subtitle": "Curated insights from industry professionals",
                    "items": articles[:3]  # Ensure exactly 3 articles
                }
            },
            "finalCta": {
                "sectionTitle": f"Ready to organize your {template_name.replace('-', ' ')}?",
                "sectionSubtitle": "Join thousands who have transformed their planning with Templata",
                "primaryCta": {
                    "text": "Start Your Template",
                    "subtext": "Free to start • No credit card required"
                },
                "secondaryCta": {
                    "text": "Browse All Templates",
                    "subtext": ""
                },
                "guarantee": "✓ Free to start ✓ Expert-designed ✓ Comprehensive guidance"
            }
        }
    }

    return landing_page_data

def generate_typescript_output(landing_page_data):
    """Generate TypeScript export format"""
    return f"export const marketing = {json.dumps(landing_page_data, indent=2)};\n"

if __name__ == "__main__":
    # Check if we're doing batch processing (no arguments) or single file
    if len(sys.argv) == 1:
        # Batch processing mode
        print("🚀 Batch converting all template landing page files...")

        # Find all templata-* directories with their landing page files
        worktree_dirs = glob.glob('../../templata-*')
        converted = 0

        for worktree_dir in sorted(worktree_dirs):
            if not os.path.isdir(worktree_dir):
                continue

            template_name = os.path.basename(worktree_dir).replace('templata-', '')
            landing_page_file = f"{worktree_dir}/{template_name}-landing-page.txt"
            output_file = f"../src/data/marketing/{template_name}-marketing.ts"

            if os.path.isfile(landing_page_file):
                try:
                    landing_page_data = parse_landing_page_text(landing_page_file)
                    typescript_output = generate_typescript_output(landing_page_data)

                    with open(output_file, 'w') as f:
                        f.write(typescript_output)

                    print(f"✅ {template_name}")
                    converted += 1

                except Exception as e:
                    print(f"❌ {template_name}: {e}")
            else:
                print(f"⚠️  {template_name}: No landing page file found")

        print(f"\n🎉 Converted {converted} landing page files to TypeScript!")

    elif len(sys.argv) == 2:
        # Single file mode (original behavior)
        text_file = sys.argv[1]

        try:
            landing_page_data = parse_landing_page_text(text_file)
            typescript_output = generate_typescript_output(landing_page_data)
            print(typescript_output)
        except FileNotFoundError:
            print(f"Error: File '{text_file}' not found")
            sys.exit(1)
        except Exception as e:
            print(f"Error processing file: {e}")
            sys.exit(1)

    else:
        print("Usage: python3 convert-landing-pages.py [text_file]")
        print("  - No arguments: Batch convert all template landing pages")
        print("  - One argument: Convert single file to stdout")
        sys.exit(1)