#!/usr/bin/env python3

import os
import glob

# Change to articles directory
articles_dir = "/Users/ikim1/Documents/GitHub/templata/src/data/articles"
os.chdir(articles_dir)

# Get all articles-*.ts files
article_files = glob.glob("articles-*.ts")

print(f"Found {len(article_files)} article files to rename...")

for old_file in article_files:
    # Remove "articles-" prefix and add "-article" suffix
    template_name = old_file.replace("articles-", "").replace(".ts", "")
    new_file = f"{template_name}-article.ts"

    print(f"Renaming: {old_file} -> {new_file}")
    os.rename(old_file, new_file)

print("✅ All articles renamed successfully!")