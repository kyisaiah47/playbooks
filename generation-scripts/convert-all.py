#!/usr/bin/env python3

import re
import sys
import os
import glob
import json
from datetime import datetime

# ==================== SHARED UTILITIES ====================

def create_slug(title):
    """Create URL slug from title"""
    slug = re.sub(r'[^\w\s-]', '', title.lower())
    slug = re.sub(r'[-\s]+', '-', slug)
    return slug.strip('-')

# ==================== ARTICLES CONVERSION ====================

def estimate_read_time(content):
    """Estimate read time based on word count (250 words per minute)"""
    word_count = len(content.split())
    minutes = max(1, round(word_count / 250))
    return f"{minutes} min read"

def extract_tags(title, content, category):
    """Extract relevant tags from title and content"""
    tags = []

    # Add category-based tags
    if "Real Estate" in category or "Home" in category:
        tags.extend(["home buying", "real estate"])
    elif "Wedding" in category:
        tags.extend(["wedding", "planning"])
    elif "Career" in category or "Business" in category:
        tags.extend(["career", "business"])
    elif "Finance" in category:
        tags.extend(["finance", "money"])
    elif "Health" in category or "Wellness" in category:
        tags.extend(["health", "wellness"])
    elif "Family" in category or "Parenting" in category:
        tags.extend(["family", "parenting"])

    # Extract key terms from title and content
    combined_text = (title + " " + content).lower()

    # Common actionable terms
    key_terms = {
        "budget": "budgeting", "plan": "planning", "guide": "guide",
        "tips": "tips", "checklist": "checklist", "step": "step-by-step",
        "mortgage": "mortgage", "inspection": "inspection", "contract": "contracts",
        "vendor": "vendors", "venue": "venues", "timeline": "timeline"
    }

    for term, tag in key_terms.items():
        if term in combined_text and tag not in tags:
            tags.append(tag)

    return tags[:5]  # Limit to 5 tags

def determine_type(title, content):
    """Determine article type based on title and content"""
    title_lower = title.lower()
    content_lower = content.lower()

    if any(word in title_lower for word in ['checklist', 'steps', 'guide to']):
        return 'checklist' if 'checklist' in title_lower else 'guide'
    elif any(word in title_lower for word in ['tool', 'calculator', 'template']):
        return 'tool'
    else:
        return 'article'

def determine_difficulty(content):
    """Determine difficulty based on content complexity"""
    content_lower = content.lower()

    # Advanced indicators
    advanced_terms = ['advanced', 'expert', 'complex', 'sophisticated', 'comprehensive analysis']
    if any(term in content_lower for term in advanced_terms):
        return 'expert'

    # Intermediate indicators
    intermediate_terms = ['detailed', 'thorough', 'in-depth', 'considerations', 'factors']
    if any(term in content_lower for term in intermediate_terms):
        return 'intermediate'

    return 'beginner'

def parse_single_article_file(text_file):
    """Parse a single article file (new format)"""
    with open(text_file, 'r', encoding='utf-8') as f:
        content = f.read().strip()

    # Extract metadata and content from single article file
    lines = content.strip().split('\n')

    title = ""
    category = "Personal Life"
    article_type = "article"
    difficulty = "beginner"
    article_content = ""

    # Parse the article format
    content_started = False
    content_lines = []

    for line in lines:
        if line.startswith('TITLE: '):
            title = line[7:].strip()
        elif line.startswith('CATEGORY: '):
            category = line[10:].strip()
        elif line.startswith('TYPE: '):
            article_type = line[6:].strip()
        elif line.startswith('DIFFICULTY: '):
            difficulty = line[12:].strip()
        elif line.startswith('CONTENT: '):
            article_content = line[9:].strip()
            content_started = True
        elif content_started or (not any(line.startswith(prefix) for prefix in ['TITLE:', 'CATEGORY:', 'TYPE:', 'DIFFICULTY:'])):
            content_lines.append(line)

    # If no explicit content marker, treat everything after metadata as content
    if not article_content and content_lines:
        article_content = '\n'.join(content_lines).strip()

    # Fallback if still no title
    if not title:
        title = f"Article"

    # Auto-determine type and difficulty if not specified
    if article_type == "article":
        article_type = determine_type(title, article_content)
    if difficulty == "beginner":
        difficulty = determine_difficulty(article_content)

    # Create excerpt (first 160 characters)
    excerpt = article_content[:160].strip()
    if len(article_content) > 160:
        excerpt += "..."

    # Generate metadata
    slug = create_slug(title)
    read_time = estimate_read_time(article_content)
    tags = extract_tags(title, article_content, category)
    current_date = datetime.now().strftime('%Y-%m-%d')

    article = {
        "id": f"article-{slug}",
        "title": title,
        "excerpt": excerpt,
        "content": article_content,
        "author": "Templata",
        "publishedAt": current_date,
        "readTime": read_time,
        "category": category,
        "featured": False,
        "tags": tags,
        "slug": slug,
        "type": article_type,
        "difficulty": difficulty,
        "seo": {
            "metaTitle": title if len(title) <= 60 else title[:57] + "...",
            "metaDescription": excerpt,
            "ogImage": f"/images/blog/{slug}-og.jpg"
        }
    }

    return [article]

def parse_article_text(text_file):
    """Parse the text file and extract article data (old format with multiple articles)"""
    with open(text_file, 'r', encoding='utf-8') as f:
        content = f.read().strip()

    # Split articles by separator (assuming --- separates articles)
    article_texts = re.split(r'\n---+\n', content)

    articles = []

    for i, article_text in enumerate(article_texts, 1):
        if not article_text.strip():
            continue

        # Extract metadata and content
        lines = article_text.strip().split('\n')

        title = ""
        category = "Personal Life"
        article_type = "article"
        difficulty = "beginner"
        article_content = ""

        # Parse the article format
        content_started = False
        content_lines = []

        for line in lines:
            if line.startswith('TITLE: '):
                title = line[7:].strip()
            elif line.startswith('CATEGORY: '):
                category = line[10:].strip()
            elif line.startswith('TYPE: '):
                article_type = line[6:].strip()
            elif line.startswith('DIFFICULTY: '):
                difficulty = line[12:].strip()
            elif line.startswith('CONTENT: '):
                article_content = line[9:].strip()
                content_started = True
            elif content_started or (not any(line.startswith(prefix) for prefix in ['TITLE:', 'CATEGORY:', 'TYPE:', 'DIFFICULTY:'])):
                content_lines.append(line)

        # If no explicit content marker, treat everything after metadata as content
        if not article_content and content_lines:
            article_content = '\n'.join(content_lines).strip()

        # Fallback if still no title
        if not title:
            title = f"Article {i}"

        # Auto-determine type and difficulty if not specified
        if article_type == "article":
            article_type = determine_type(title, article_content)
        if difficulty == "beginner":
            difficulty = determine_difficulty(article_content)

        # Create excerpt (first 160 characters)
        excerpt = article_content[:160].strip()
        if len(article_content) > 160:
            excerpt += "..."

        # Generate metadata
        slug = create_slug(title)
        read_time = estimate_read_time(article_content)
        tags = extract_tags(title, article_content, category)
        current_date = datetime.now().strftime('%Y-%m-%d')

        article = {
            "id": f"article-{i}",
            "title": title,
            "excerpt": excerpt,
            "content": article_content,
            "author": "Templata",
            "publishedAt": current_date,
            "readTime": read_time,
            "category": category,
            "featured": i == 1,  # First article is featured
            "tags": tags,
            "slug": slug,
            "type": article_type,
            "difficulty": difficulty,
            "seo": {
                "metaTitle": title if len(title) <= 60 else title[:57] + "...",
                "metaDescription": excerpt,
                "ogImage": f"/images/blog/{slug}-og.jpg"
            }
        }

        articles.append(article)

    return articles

def generate_articles_typescript_output(articles):
    """Generate TypeScript export format for articles"""
    output = """export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  readTime: string;
  category: string;
  featured?: boolean;
  tags: string[];
  slug: string;
  type: 'guide' | 'article' | 'checklist' | 'tool';
  difficulty: 'beginner' | 'intermediate' | 'expert';
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: string;
  };
  relatedTemplates?: string[];
  relatedPosts?: string[];
}

// Article registry for template-specific articles
export const articles: Article[] = [
"""

    for i, post in enumerate(articles):
        if i > 0:
            output += ",\n"

        output += "  {\n"
        output += f'    id: "{post["id"]}",\n'
        output += f'    title: "{post["title"]}",\n'
        output += f'    excerpt: "{post["excerpt"]}",\n'
        output += f'    content: `{post["content"]}`,\n'
        output += f'    author: "{post["author"]}",\n'
        output += f'    publishedAt: "{post["publishedAt"]}",\n'
        output += f'    readTime: "{post["readTime"]}",\n'
        output += f'    category: "{post["category"]}",\n'
        if post.get("featured"):
            output += f'    featured: {str(post["featured"]).lower()},\n'
        output += f'    tags: {json.dumps(post["tags"])},\n'
        output += f'    slug: "{post["slug"]}",\n'
        output += f'    type: "{post["type"]}",\n'
        output += f'    difficulty: "{post["difficulty"]}",\n'
        output += f'    seo: {{\n'
        output += f'      metaTitle: "{post["seo"]["metaTitle"]}",\n'
        output += f'      metaDescription: "{post["seo"]["metaDescription"]}",\n'
        output += f'      ogImage: "{post["seo"]["ogImage"]}"\n'
        output += f'    }}\n'
        output += "  }"

    output += "\n];\n"
    return output

# ==================== MARKETING CONVERSION ====================

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

def generate_marketing_typescript_output(landing_page_data):
    """Generate TypeScript export format for marketing"""
    return f"export const marketing = {json.dumps(landing_page_data, indent=2)};\n"

# ==================== PROMPTS CONVERSION ====================

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

def convert_prompts_text_to_json(text_file, start_id=1):
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

# ==================== TEMPLATES CONVERSION ====================

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

# ==================== MAIN CONVERSION LOGIC ====================

def convert_all_templates():
    """Batch convert all template files across all content types"""
    print("🚀 Converting ALL template content files...")

    # Find all templata-* directories
    worktree_dirs = glob.glob('../../templata-*')
    total_converted = {
        'templates': 0,
        'articles': 0,
        'marketing': 0,
        'prompts': 0
    }

    for worktree_dir in sorted(worktree_dirs):
        if not os.path.isdir(worktree_dir):
            continue

        template_name = os.path.basename(worktree_dir).replace('templata-', '')
        print(f"\n📁 Processing {template_name}...")

        # 1. Convert Templates
        template_file = f"{worktree_dir}/{template_name}-template.txt"
        template_output = f"../src/data/templates/{template_name}-template.ts"

        if os.path.isfile(template_file):
            try:
                template_data = parse_template_text(template_file)
                template_ts = generate_template_ts(template_data, template_name)

                with open(template_output, 'w') as f:
                    f.write(template_ts)

                print(f"  ✅ Template")
                total_converted['templates'] += 1
            except Exception as e:
                print(f"  ❌ Template: {e}")
        else:
            print(f"  ⚠️  Template: No template file found")

        # 2. Convert Articles (individual files)
        articles_converted = 0
        for i in range(1, 21):  # Articles 1-20
            article_file = f"{worktree_dir}/{template_name}-article-{i}.txt"
            article_output = f"../src/data/articles/{template_name}-article-{i}.ts"

            if os.path.isfile(article_file):
                try:
                    articles = parse_single_article_file(article_file)
                    if articles:
                        typescript_output = generate_articles_typescript_output(articles)

                        with open(article_output, 'w') as f:
                            f.write(typescript_output)

                        articles_converted += 1
                except Exception as e:
                    print(f"  ❌ Article {i}: {e}")

        if articles_converted > 0:
            print(f"  ✅ Articles ({articles_converted} files)")
            total_converted['articles'] += articles_converted
        else:
            print(f"  ⚠️  Articles: No article files found")

        # 3. Convert Marketing
        landing_page_file = f"{worktree_dir}/{template_name}-landing-page.txt"
        marketing_output = f"../src/data/marketing/{template_name}-marketing.ts"

        if os.path.isfile(landing_page_file):
            try:
                landing_page_data = parse_landing_page_text(landing_page_file)
                typescript_output = generate_marketing_typescript_output(landing_page_data)

                with open(marketing_output, 'w') as f:
                    f.write(typescript_output)

                print(f"  ✅ Marketing")
                total_converted['marketing'] += 1

            except Exception as e:
                print(f"  ❌ Marketing: {e}")
        else:
            print(f"  ⚠️  Marketing: No landing page file found")

        # 4. Convert Prompts (individual files)
        prompts_converted = 0
        for i in range(1, 6):  # Categories 1-5
            prompt_file = f"{worktree_dir}/{template_name}-prompt-category-{i}.txt"
            prompts_output = f"../src/data/prompts/{template_name}-prompts-{i}.ts"

            if os.path.isfile(prompt_file):
                try:
                    prompts_text, _ = convert_prompts_text_to_json(prompt_file, 1)
                    if prompts_text:
                        with open(prompts_output, 'w') as f:
                            f.write("export const prompts = [\n")
                            f.write(prompts_text)
                            f.write("\n];\n")

                        prompts_converted += 1
                except Exception as e:
                    print(f"  ❌ Prompts {i}: {e}")

        if prompts_converted > 0:
            print(f"  ✅ Prompts ({prompts_converted} files)")
            total_converted['prompts'] += prompts_converted
        else:
            print(f"  ⚠️  Prompts: No prompt files found")

    # Summary
    total_files = sum(total_converted.values())
    print(f"\n🎉 CONVERSION COMPLETE!")
    print(f"Total files converted: {total_files}")
    print(f"  Templates: {total_converted['templates']}")
    print(f"  Articles: {total_converted['articles']}")
    print(f"  Marketing: {total_converted['marketing']}")
    print(f"  Prompts: {total_converted['prompts']}")

if __name__ == "__main__":
    if len(sys.argv) == 1:
        # Batch processing mode - convert everything
        convert_all_templates()
    else:
        print("Usage: python3 convert-all.py")
        print("Converts all template content files (templates, articles, marketing, prompts) to TypeScript")
        sys.exit(1)