#!/bin/bash

# Generate comprehensive template registry from all template files
# This creates src/registry/templates.ts with all imports and exports

set -e

# Configuration
REGISTRY_FILE="src/registry/templates.ts"
DATA_DIR="src/data"

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

log_colored() {
    local color=$1
    local message=$2
    echo -e "${color}$message${NC}"
}

# Helper function to convert kebab-case to camelCase
kebab_to_camel() {
    echo "$1" | sed 's/-\([a-z0-9]\)/\U\1/g' | sed 's/^3d/threeDimensional/'
}

# Helper function to convert kebab-case to Title Case
kebab_to_title() {
    echo "$1" | sed 's/-/ /g' | sed 's/\b\w/\U&/g'
}

# Helper function to get category based on template name patterns
get_category() {
    local template="$1"

    case "$template" in
        *finance* | *money* | *budget* | *debt* | *investment* | *mortgage* | *financial* | *insurance* | *stock* | *crypto* | *real-estate* | *rental*)
            echo "Finance & Money"
            ;;
        *business* | *startup* | *entrepreneur* | *freelance* | *saas* | *restaurant* | *consulting* | *coaching* | *photography-business* | *content-creation-business* | *online-business* | *small-business* | *nonprofit* | *dropshipping* | *e-commerce* | *affiliate-marketing*)
            echo "Business & Career"
            ;;
        *health* | *fitness* | *medical* | *mental* | *stress* | *meditation* | *mindfulness* | *weight-loss* | *marathon* | *yoga* | *chronic-illness* | *addiction*)
            echo "Health & Wellness"
            ;;
        *family* | *parent* | *baby* | *marriage* | *relationship* | *divorce* | *dating* | *wedding* | *elder-care* | *grandparent* | *teenage* | *first-time-parent*)
            echo "Family & Relationships"
            ;;
        *career* | *job* | *professional* | *networking* | *public-speaking* | *skill-development* | *first-job* | *management-role* | *internship* | *veteran-transition* | *workforce*)
            echo "Career Development"
            ;;
        *college* | *education* | *learning* | *study* | *academic* | *graduate-school* | *fraternity* | *student-loan*)
            echo "Education & Learning"
            ;;
        *home* | *house* | *moving* | *relocation* | *renovation* | *automation* | *garden* | *urban-gardening* | *smart-garden*)
            echo "Home & Living"
            ;;
        *retirement* | *midlife* | *empty-nest* | *estate-planning* | *end-of-life* | *aging* | *death* | *grief*)
            echo "Life Transitions"
            ;;
        *creative* | *art* | *music* | *writing* | *photography* | *podcast* | *youtube* | *content-creation* | *fashion* | *book*)
            echo "Creative & Arts"
            ;;
        *hobby* | *collection* | *reading* | *sports* | *dance* | *astronomy* | *birdwatching* | *camping* | *wine* | *antique*)
            echo "Hobbies & Interests"
            ;;
        *tech* | *app* | *programming* | *arduino* | *3d-printing* | *mobile-app* | *technology*)
            echo "Technology & Development"
            ;;
        *crisis* | *disaster* | *legal* | *identity-theft* | *disability* | *immigration* | *quarter-life*)
            echo "Crisis & Support"
            ;;
        *spiritual* | *mindfulness* | *meditation* | *coming-out* | *personal-growth*)
            echo "Personal Growth"
            ;;
        *travel* | *digital-nomad* | *transportation* | *car* | *boat*)
            echo "Travel & Transportation"
            ;;
        *)
            echo "Personal Life"
            ;;
    esac
}

# Helper function to get icon based on template name
get_icon() {
    local template="$1"

    case "$template" in
        *finance* | *money* | *budget* | *debt* | *investment*) echo "DollarSign" ;;
        *business* | *startup* | *entrepreneur*) echo "Briefcase" ;;
        *health* | *medical*) echo "Heart" ;;
        *fitness* | *marathon* | *yoga*) echo "Activity" ;;
        *family* | *parent* | *baby*) echo "Users" ;;
        *home* | *house*) echo "Home" ;;
        *career* | *job*) echo "Target" ;;
        *education* | *learning* | *college*) echo "GraduationCap" ;;
        *creative* | *art*) echo "Palette" ;;
        *music*) echo "Music" ;;
        *technology* | *tech* | *app*) echo "Code" ;;
        *garden* | *plant*) echo "Leaf" ;;
        *car* | *transportation*) echo "Car" ;;
        *travel*) echo "MapPin" ;;
        *book* | *reading*) echo "BookOpen" ;;
        *3d-printing*) echo "Box" ;;
        *photography*) echo "Camera" ;;
        *podcast*) echo "Mic" ;;
        *youtube*) echo "Play" ;;
        *spiritual* | *meditation*) echo "Sun" ;;
        *crisis* | *disaster*) echo "Shield" ;;
        *retirement*) echo "Clock" ;;
        *legal*) echo "Scale" ;;
        *sports*) echo "Trophy" ;;
        *cooking* | *meal*) echo "ChefHat" ;;
        *pet*) echo "PawPrint" ;;
        *nonprofit*) echo "Heart" ;;
        *wedding*) echo "Heart" ;;
        *divorce*) echo "UserX" ;;
        *moving*) echo "Truck" ;;
        *habit*) echo "CheckCircle" ;;
        *goal*) echo "Target" ;;
        *stress*) echo "Brain" ;;
        *addiction*) echo "Shield" ;;
        *grief*) echo "Heart" ;;
        *identity*) echo "Shield" ;;
        *immigration*) echo "Globe" ;;
        *military*) echo "Shield" ;;
        *disability*) echo "Accessibility" ;;
        *climate*) echo "Leaf" ;;
        *sustainable*) echo "Recycle" ;;
        *digital-detox*) echo "Smartphone" ;;
        *social-media*) echo "Share2" ;;
        *wine*) echo "Wine" ;;
        *antique*) echo "Clock" ;;
        *astronomy*) echo "Star" ;;
        *birdwatching*) echo "Eye" ;;
        *camping*) echo "Tent" ;;
        *boat*) echo "Anchor" ;;
        *fashion*) echo "Shirt" ;;
        *interior*) echo "PaintBucket" ;;
        *real-estate*) echo "Building" ;;
        *restaurant*) echo "UtensilsCrossed" ;;
        *stock*) echo "TrendingUp" ;;
        *crypto*) echo "Coins" ;;
        *insurance*) echo "Shield" ;;
        *mortgage*) echo "Key" ;;
        *rental*) echo "KeyRound" ;;
        *saas*) echo "Cloud" ;;
        *mobile-app*) echo "Smartphone" ;;
        *e-commerce*) echo "ShoppingCart" ;;
        *dropshipping*) echo "Package" ;;
        *affiliate*) echo "Link" ;;
        *consulting*) echo "MessageSquare" ;;
        *coaching*) echo "Users" ;;
        *freelance*) echo "Laptop" ;;
        *side-hustle*) echo "Zap" ;;
        *skill*) echo "Award" ;;
        *public-speaking*) echo "Mic" ;;
        *networking*) echo "Users" ;;
        *language*) echo "Languages" ;;
        *quarter-life*) echo "Compass" ;;
        *midlife*) echo "Clock" ;;
        *empty-nest*) echo "Home" ;;
        *sandwich*) echo "Users" ;;
        *first-time*) echo "Baby" ;;
        *teenage*) echo "User" ;;
        *elder*) echo "UserCheck" ;;
        *academic*) echo "BookOpen" ;;
        *fraternity*) echo "Users" ;;
        *internship*) echo "Briefcase" ;;
        *student-loan*) echo "GraduationCap" ;;
        *study-abroad*) echo "Globe" ;;
        *graduate*) echo "GraduationCap" ;;
        *executive*) echo "Crown" ;;
        *peak-earning*) echo "TrendingUp" ;;
        *fixed-income*) echo "DollarSign" ;;
        *bankruptcy*) echo "AlertTriangle" ;;
        *test*) echo "TestTube" ;;
        *) echo "Circle" ;;
    esac
}

# Helper function to get color scheme based on category
get_colors() {
    local category="$1"

    case "$category" in
        "Finance & Money") echo "emerald-50|emerald-600" ;;
        "Business & Career") echo "blue-50|blue-600" ;;
        "Health & Wellness") echo "red-50|red-600" ;;
        "Family & Relationships") echo "pink-50|pink-600" ;;
        "Career Development") echo "indigo-50|indigo-600" ;;
        "Education & Learning") echo "purple-50|purple-600" ;;
        "Home & Living") echo "orange-50|orange-600" ;;
        "Life Transitions") echo "gray-50|gray-600" ;;
        "Creative & Arts") echo "violet-50|violet-600" ;;
        "Hobbies & Interests") echo "yellow-50|yellow-600" ;;
        "Technology & Development") echo "cyan-50|cyan-600" ;;
        "Crisis & Support") echo "red-50|red-600" ;;
        "Personal Growth") echo "green-50|green-600" ;;
        "Travel & Transportation") echo "teal-50|teal-600" ;;
        *) echo "slate-50|slate-600" ;;
    esac
}

log_colored "$BLUE" "Generating comprehensive template registry..."

# Start the registry file
cat > "$REGISTRY_FILE" << 'EOF'
import { GuidanceTemplate } from '@/types/template';

EOF

# Get all template files and add imports
TEMPLATES=($(ls "$DATA_DIR"/template-*.ts | sed 's|.*template-||' | sed 's|\.ts||' | sort))

log_colored "$BLUE" "Adding imports for ${#TEMPLATES[@]} templates..."

for template in "${TEMPLATES[@]}"; do
    camel_case=$(kebab_to_camel "$template")
    echo "import { ${camel_case}Template } from '@/data/template-${template}';" >> "$REGISTRY_FILE"
done

# Add interface and helper function
cat >> "$REGISTRY_FILE" << 'EOF'

export interface TemplateRegistryEntry {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  url: string;
  popular?: boolean;
  featured?: boolean;
  expertVerified?: boolean;
  color: string;
  iconColor: string;
  template: GuidanceTemplate;
}

export function getTemplate(baseTemplate: GuidanceTemplate): GuidanceTemplate {
  return baseTemplate;
}

export const templateRegistry: TemplateRegistryEntry[] = [
EOF

# Add all template entries
log_colored "$BLUE" "Adding registry entries..."

for i in "${!TEMPLATES[@]}"; do
    template="${TEMPLATES[$i]}"
    camel_case=$(kebab_to_camel "$template")
    title_case=$(kebab_to_title "$template")
    category=$(get_category "$template")
    icon=$(get_icon "$template")
    colors=$(get_colors "$category")
    color_bg=$(echo "$colors" | cut -d'|' -f1)
    color_icon=$(echo "$colors" | cut -d'|' -f2)

    # Set some templates as popular/featured
    popular="false"
    featured="false"
    expert_verified="false"

    # Mark first 10 as popular
    if [[ $i -lt 10 ]]; then
        popular="true"
    fi

    # Mark some key life events as featured
    case "$template" in
        "home-buying"|"wedding-planning"|"baby-planning"|"job-search"|"retirement-planning"|"fitness-journey"|"career-change"|"financial-independence")
            featured="true"
            ;;
    esac

    cat >> "$REGISTRY_FILE" << EOF
  {
    id: "${template}",
    name: "${title_case}",
    description: "Comprehensive guidance and tools for $(echo "$title_case" | tr '[:upper:]' '[:lower:]').",
    category: "${category}",
    icon: "${icon}",
    url: "/${template}/app",
    popular: ${popular},
    featured: ${featured},
    expertVerified: ${expert_verified},
    color: "${color_bg}",
    iconColor: "${color_icon}",
    template: getTemplate(${camel_case}Template)
  }$([ $i -lt $((${#TEMPLATES[@]} - 1)) ] && echo "," || echo "")
EOF
done

# Close the array and add helper functions
cat >> "$REGISTRY_FILE" << 'EOF'
];

// Helper functions
export const getTemplateById = (id: string): TemplateRegistryEntry | undefined => {
  return templateRegistry.find(template => template.id === id);
};

export const getTemplatesByCategory = (category: string): TemplateRegistryEntry[] => {
  return templateRegistry.filter(template => template.category === category);
};

export const getFeaturedTemplates = (): TemplateRegistryEntry[] => {
  return templateRegistry.filter(template => template.featured);
};

export const getPopularTemplates = (): TemplateRegistryEntry[] => {
  return templateRegistry.filter(template => template.popular);
};

export const getAllCategories = (): string[] => {
  const categories = Array.from(new Set(templateRegistry.map(template => template.category)));
  return categories.sort();
};

export const getTemplateCount = (): number => {
  return templateRegistry.length;
};

export const searchTemplates = (query: string): TemplateRegistryEntry[] => {
  const lowerQuery = query.toLowerCase();
  return templateRegistry.filter(template =>
    template.name.toLowerCase().includes(lowerQuery) ||
    template.description.toLowerCase().includes(lowerQuery) ||
    template.category.toLowerCase().includes(lowerQuery) ||
    template.template.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
};
EOF

log_colored "$GREEN" "Registry generated successfully!"
log_colored "$GREEN" "File: $REGISTRY_FILE"
log_colored "$GREEN" "Templates: ${#TEMPLATES[@]}"
log_colored "$GREEN" "Categories: $(get_category "test" | wc -l) unique categories"

# Show some stats
echo
echo "Template distribution by category:"
for template in "${TEMPLATES[@]}"; do
    get_category "$template"
done | sort | uniq -c | sort -nr

echo
log_colored "$GREEN" "Template registry generation complete!"