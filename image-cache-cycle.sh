#!/bin/bash

# Image Cache Cycle Script
# Fetches and permanently caches Unsplash images for all articles

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LOGFILE="$SCRIPT_DIR/image-cache-cycle.log"
PROGRESS_FILE="$SCRIPT_DIR/.image-cache-progress"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" | tee -a "$LOGFILE"
}

log_colored() {
    local color=$1
    local message=$2
    echo -e "${color}$(date '+%Y-%m-%d %H:%M:%S') - $message${NC}" | tee -a "$LOGFILE"
}

# Get current progress
get_current_progress() {
    if [[ -f "$PROGRESS_FILE" ]]; then
        cat "$PROGRESS_FILE"
    else
        echo "0"
    fi
}

# Update progress
update_progress() {
    local count=$1
    echo "$count" > "$PROGRESS_FILE"
}

# Cache image for a specific template blog file
cache_template_images() {
    local template_file="$1"
    local template_name=$(basename "$template_file" | sed 's/blogs-//' | sed 's/.ts$//')

    log_colored "$BLUE" "Processing template: $template_name"

    # Create a Node.js script to cache images for this template
    cat > /tmp/cache_images_${template_name}.js << 'EOF'
const fs = require('fs');
const path = require('path');

async function cacheImagesForTemplate(templateFile, templateName) {
    try {
        // Read the template blog file
        const content = fs.readFileSync(templateFile, 'utf8');

        // Check if any articles already have cached images
        const hasCachedImages = content.includes('heroImage:');

        if (hasCachedImages) {
            console.log(`${templateName}: Already has cached images, skipping`);
            return;
        }

        // Import unsplash functions
        const { searchTemplateImages } = require('./src/lib/unsplash');

        // Get template search query or use template name
        const searchQuery = getSearchQuery(templateName);

        console.log(`${templateName}: Fetching image for query: ${searchQuery}`);

        // Fetch one image for this template
        const images = await searchTemplateImages(templateName, 1);

        if (images.length === 0) {
            console.log(`${templateName}: No images found`);
            return;
        }

        const image = images[0];
        const heroImageData = {
            url: image.urls.regular,
            alt: image.alt_description || `${templateName} guide image`,
            photographer: image.user.name,
            photographerUrl: image.user.links.html,
            unsplashId: image.id,
            cached: true
        };

        console.log(`${templateName}: Found image by ${image.user.name}`);

        // Update the blog file with cached image data
        let updatedContent = content;

        // Find blog posts in the file and add heroImage to each
        const blogPostRegex = /({[\s\S]*?id:\s*"[^"]*"[\s\S]*?}),?\s*(?=\s*{[\s\S]*?id:|$)/g;

        updatedContent = updatedContent.replace(blogPostRegex, (match) => {
            // Don't add heroImage if it already exists
            if (match.includes('heroImage:')) {
                return match;
            }

            // Add heroImage before relatedTemplates or at the end
            if (match.includes('relatedTemplates:')) {
                return match.replace('relatedTemplates:', `heroImage: ${JSON.stringify(heroImageData, null, 4)},\n    relatedTemplates:`);
            } else {
                // Add before the closing brace
                return match.replace(/}$/, `,\n    heroImage: ${JSON.stringify(heroImageData, null, 4)}\n  }`);
            }
        });

        // Write the updated content back
        fs.writeFileSync(templateFile, updatedContent);
        console.log(`${templateName}: Successfully cached image metadata`);

    } catch (error) {
        console.error(`${templateName}: Error caching images:`, error.message);
    }
}

function getSearchQuery(templateName) {
    const queries = {
        'wedding-planning': 'wedding ceremony elegant',
        'baby-planning': 'baby nursery cute',
        'home-buying': 'house keys real estate',
        'meal-planning': 'healthy meal prep',
        'fitness-journey': 'fitness workout gym',
        'small-business-launch': 'startup business entrepreneur',
        'retirement-planning': 'senior couple happy',
        'medical-treatment': 'medical healthcare',
        'car-buying': 'car dealership automotive',
        'divorce-coordination': 'legal documents consultation',
        'event-planning': 'party celebration planning',
        'freelance-business': 'remote work laptop',
        'moving-relocation': 'moving boxes home',
        'personal-branding': 'professional headshot',
        'investment-portfolio': 'financial charts investment',
        'garden-planning': 'beautiful garden landscaping'
    };

    return queries[templateName] || templateName.replace(/-/g, ' ');
}

// Run the function
const templateFile = process.argv[2];
const templateName = process.argv[3];
cacheImagesForTemplate(templateFile, templateName);
EOF

    # Run the Node.js script
    cd "$SCRIPT_DIR"
    node /tmp/cache_images_${template_name}.js "$template_file" "$template_name" 2>&1 | tee -a "$LOGFILE"

    # Clean up temporary script
    rm -f /tmp/cache_images_${template_name}.js

    # Brief pause to respect API limits
    sleep 2
}

# Main function
main() {
    log_colored "$BLUE" "Starting Image Cache Cycle"

    # Setup log
    mkdir -p "$(dirname "$LOGFILE")"

    # Check if Unsplash API key is available
    if [[ -z "$NEXT_PUBLIC_UNSPLASH_ACCESS_KEY" ]]; then
        log_colored "$YELLOW" "Warning: NEXT_PUBLIC_UNSPLASH_ACCESS_KEY not set. Images will not be fetched."
        log_colored "$YELLOW" "Set the environment variable or add it to .env.local"
        exit 1
    fi

    # Get current progress
    local current_progress=$(get_current_progress)
    log_colored "$BLUE" "Starting from progress: $current_progress"

    # Find all blog template files
    local template_files=($(find src/registry -name "blogs-*.ts" | sort))
    local total_files=${#template_files[@]}

    log_colored "$BLUE" "Found $total_files template blog files to process"

    # Process each template file
    local count=0
    for template_file in "${template_files[@]}"; do
        count=$((count + 1))

        # Skip if we've already processed this file
        if [[ $count -le $current_progress ]]; then
            continue
        fi

        log_colored "$YELLOW" "Processing file $count/$total_files: $template_file"

        cache_template_images "$template_file"

        # Update progress
        update_progress "$count"

        log_colored "$GREEN" "Completed file $count/$total_files"
    done

    log_colored "$GREEN" "Image cache cycle complete!"
    log_colored "$GREEN" "Processed $total_files template blog files"
}

# Show usage
show_usage() {
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "COMMANDS:"
    echo "  (no command)    - Cache images for all templates"
    echo "  status         - Show current progress"
    echo "  reset          - Reset progress to start over"
    echo "  help           - Show this help"
    echo ""
    echo "Environment:"
    echo "  NEXT_PUBLIC_UNSPLASH_ACCESS_KEY - Required for fetching images"
    echo ""
    echo "Examples:"
    echo "  $0              # Cache all images"
    echo "  $0 status       # Check progress"
    echo "  $0 reset        # Start over"
}

# Handle arguments
COMMAND="${1:-main}"

case "$COMMAND" in
    "status")
        current_progress=$(get_current_progress)
        total_files=$(find src/registry -name "blogs-*.ts" | wc -l)
        echo "Progress: $current_progress/$total_files template files processed"
        if [[ $current_progress -lt $total_files ]]; then
            echo "Ready to continue caching images"
        else
            echo "All template files have been processed"
        fi
        ;;
    "reset")
        rm -f "$PROGRESS_FILE"
        echo "Progress reset to 0"
        ;;
    "help")
        show_usage
        ;;
    *)
        main
        ;;
esac