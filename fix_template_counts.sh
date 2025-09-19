#!/bin/bash

# Templates with too many articles that need to be truncated to 20
BLOATED_TEMPLATES=(
    "book-writing"
    "elder-care"
    "garden-planning"
    "hobby-project"
    "investment-portfolio"
    "music-production"
    "nonprofit-management"
    "personal-branding"
    "small-business-launch"
)

echo "=== FIXING BLOATED TEMPLATE FILES ==="
echo

for template in "${BLOATED_TEMPLATES[@]}"; do
    file="src/registry/blogs-$template.ts"
    backup_file="src/registry/blogs-$template.ts.backup"

    if [ -f "$file" ]; then
        current_count=$(grep -c 'id: "' "$file")
        echo "Processing $template (currently $current_count articles)..."

        # Create backup
        cp "$file" "$backup_file"

        # Extract the interface and template-specific articles only
        # Find the first 20 articles by looking for the pattern and keeping everything up to the 20th closing brace
        awk '
        BEGIN {
            article_count = 0
            in_article = 0
            brace_level = 0
            print_line = 1
        }

        # Print interface definition and array start
        /^export interface BlogPost/ { print_line = 1 }
        /^export const manualBlogPosts: BlogPost\[\] = \[/ {
            print_line = 1
            print $0
            next
        }

        # Track when we enter an article
        /^  \{/ && print_line {
            if (article_count < 20) {
                in_article = 1
                brace_level = 1
                article_count++
                print $0
            } else {
                print_line = 0
            }
            next
        }

        # Handle braces within articles
        in_article && /\{/ { brace_level++ }
        in_article && /\}/ {
            brace_level--
            if (brace_level == 0) {
                in_article = 0
                if (article_count <= 20) {
                    print $0
                    if (article_count == 20) {
                        print "];"
                        exit
                    }
                }
            } else if (article_count <= 20) {
                print $0
            }
            next
        }

        # Print everything else if we are still within the first 20 articles
        print_line && (in_article || article_count == 0) { print $0 }
        ' "$file" > "${file}.new"

        # Replace the original file
        mv "${file}.new" "$file"

        new_count=$(grep -c 'id: "' "$file")
        echo "  ✅ $template: $current_count → $new_count articles"

        # Remove backup if successful
        if [ "$new_count" -eq 20 ] || [ "$new_count" -lt "$current_count" ]; then
            rm "$backup_file"
        else
            echo "  ❌ Error processing $template, restoring backup"
            mv "$backup_file" "$file"
        fi
    else
        echo "  ❌ File not found: $file"
    fi
done

echo
echo "=== RUNNING AUDIT AFTER FIX ==="
./audit_script.sh