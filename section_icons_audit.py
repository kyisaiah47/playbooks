#!/usr/bin/env python3
import re

def extract_section_ids_from_templates():
    """Extract all section IDs from template data"""
    with open('src/data/templates.ts', 'r') as f:
        content = f.read()

    # Find all section IDs in the templates
    section_pattern = r"id:\s*['\"]([^'\"]+)['\"],\s*title:"
    section_ids = re.findall(section_pattern, content)

    # Filter out template IDs and prompt IDs - keep only section IDs
    # Section IDs typically have dashes and describe sections like 'budget-finance'
    filtered_sections = []
    for section_id in section_ids:
        # Skip template root IDs and prompt IDs
        if (section_id not in ['wedding-planning', 'home-buying', 'job-search', 'baby-planning'] and
            '-' in section_id and
            not section_id.startswith('total-') and
            not section_id.startswith('budget-priorities') and
            not section_id.endswith('-budget') and
            not section_id.endswith('-style') and
            len(section_id.split('-')) >= 2):
            filtered_sections.append(section_id)

    return sorted(set(filtered_sections))

def extract_section_icons_from_sidebar():
    """Extract all section IDs that have icons defined in sidebar"""
    with open('src/components/templata-sidebar.tsx', 'r') as f:
        content = f.read()

    # Find all case statements in getSectionIcon function
    case_pattern = r"case\s+['\"]([^'\"]+)['\"]:\s*return"
    case_ids = re.findall(case_pattern, content)

    return sorted(set(case_ids))

def main():
    print("SECTION ICONS AUDIT")
    print("=" * 60)

    # Get section IDs from templates
    template_sections = extract_section_ids_from_templates()

    # Get section IDs from sidebar
    sidebar_sections = extract_section_icons_from_sidebar()

    print(f"Total sections found in templates: {len(template_sections)}")
    print(f"Total section icons in sidebar: {len(sidebar_sections)}")

    # Find sections without icons
    missing_icons = set(template_sections) - set(sidebar_sections)

    # Find icons without corresponding sections
    extra_icons = set(sidebar_sections) - set(template_sections)

    print(f"\nSections WITHOUT icons ({len(missing_icons)}):")
    for section in sorted(missing_icons):
        print(f"  ❌ {section}")

    print(f"\nIcon cases WITHOUT corresponding sections ({len(extra_icons)}):")
    for section in sorted(extra_icons):
        print(f"  ⚠️  {section}")

    print(f"\nSections WITH icons ({len(set(template_sections) & set(sidebar_sections))}):")
    for section in sorted(set(template_sections) & set(sidebar_sections)):
        print(f"  ✅ {section}")

    print(f"\nSample template sections found:")
    for section in sorted(template_sections)[:20]:
        print(f"  - {section}")

if __name__ == "__main__":
    main()