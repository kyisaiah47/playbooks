#!/usr/bin/env python3

import re
import sys
import json
from datetime import datetime

def create_slug(title):
    """Create URL slug from title"""
    slug = re.sub(r'[^\w\s-]', '', title.lower())
    slug = re.sub(r'[-\s]+', '-', slug)
    return slug.strip('-')

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

def parse_article_text(text_file):
    """Parse the text file and extract article data"""
    with open(text_file, 'r', encoding='utf-8') as f:
        content = f.read().strip()

    # Split articles by separator (assuming --- separates articles)
    articles = re.split(r'\n---+\n', content)

    blog_posts = []

    for i, article_text in enumerate(articles, 1):
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

        blog_post = {
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

        blog_posts.append(blog_post)

    return blog_posts

def generate_typescript_output(blog_posts):
    """Generate TypeScript export format"""
    output = """export interface BlogPost {
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

// Blog registry for template-specific articles
export const manualBlogPosts: BlogPost[] = [\n"""

    for i, post in enumerate(blog_posts):
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

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python3 convert-articles.py <text_file>")
        print("Example: python3 convert-articles.py home-buying-articles.txt")
        sys.exit(1)

    text_file = sys.argv[1]

    try:
        blog_posts = parse_article_text(text_file)
        typescript_output = generate_typescript_output(blog_posts)
        print(typescript_output)
    except FileNotFoundError:
        print(f"Error: File '{text_file}' not found")
        sys.exit(1)
    except Exception as e:
        print(f"Error processing file: {e}")
        sys.exit(1)