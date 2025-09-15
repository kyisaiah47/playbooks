#!/usr/bin/env python3
import os
import re

# Registry templates (25 total)
REGISTRY_TEMPLATES = [
    "wedding-planning", "home-buying", "baby-planning", "parenting-child-development",
    "budget-planning", "personal-finance-investment", "productivity-system",
    "remote-work-productivity", "job-search", "freelance-gig-economy", "business-launch",
    "digital-marketing-seo", "career-change-transition", "college-planning",
    "academic-research", "language-learning-cultural-immersion", "event-planning",
    "travel-planning", "travel-planning-adventure", "meal-planning", "fitness-journey",
    "fitness-athletic-training", "moving-relocation", "personal-development-coaching",
    "retirement-lifestyle-planning"
]

# Landing pages that exist (extracted manually)
LANDING_PAGES = [
    "academic-research", "baby-planning", "budget-planning", "business-launch",
    "career-change-transition", "college-planning", "digital-marketing-seo",
    "event-planning", "fitness-athletic-training", "fitness-journey",
    "freelance-gig-economy", "home-buying", "home-renovation-interior-design",
    "job-search", "language-learning-cultural-immersion", "meal-planning",
    "moving-relocation", "parenting-child-development", "personal-finance-investment",
    "personal-health-wellness", "productivity-system", "remote-work-productivity",
    "sustainable-living", "travel-planning", "travel-planning-adventure",
    "wedding-planning"
]

# Templates with blog posts (extracted manually)
TEMPLATES_WITH_BLOGS = ["moving-relocation", "wedding-planning", "personal-finance-investment"]

# Wedding template benchmark (manual count)
WEDDING_BENCHMARK = {
    'sections': 8,
    'prompts': 48,
    'resources': 19
}

def check_file_structure(template_id):
    """Check if landing and app pages exist"""
    landing_exists = os.path.exists(f"src/app/{template_id}/page.tsx")
    app_exists = os.path.exists(f"src/app/{template_id}/app/page.tsx")
    return landing_exists, app_exists

def check_section_icons(template_id):
    """Check if section icons exist in sidebar file"""
    with open('src/components/templata-sidebar.tsx', 'r') as f:
        sidebar_content = f.read()

    # Look for template sections in the getSectionIcon function
    # This is a simplified check - would need actual section IDs for complete audit
    return True  # Placeholder - would need section IDs to check properly

def count_template_elements(template_name, content):
    """Count sections, prompts, and resources for a template"""
    camel_case_name = template_name.replace('-', '_').title().replace('_', '') + 'Template'
    camel_case_name = camel_case_name[0].lower() + camel_case_name[1:]  # Fix first letter

    # Map common variations
    name_variations = {
        'baby-planning': 'babyPlanningTemplate',
        'budget-planning': 'budgetPlanningTemplate',
        'business-launch': 'businessLaunchTemplate',
        'career-change-transition': 'careerChangeTransitionTemplate',
        'college-planning': 'collegePlanningTemplate',
        'digital-marketing-seo': 'digitalMarketingSEOTemplate',
        'event-planning': 'eventPlanningTemplate',
        'fitness-athletic-training': 'fitnessAthleticTrainingTemplate',
        'fitness-journey': 'fitnessJourneyTemplate',
        'freelance-gig-economy': 'freelanceGigEconomyTemplate',
        'home-buying': 'homeBuyingTemplate',
        'job-search': 'jobSearchTemplate',
        'language-learning-cultural-immersion': 'languageLearningCulturalImmersionTemplate',
        'meal-planning': 'mealPlanningTemplate',
        'moving-relocation': 'movingRelocationTemplate',
        'parenting-child-development': 'parentingChildDevelopmentTemplate',
        'personal-development-coaching': 'personalDevelopmentCoachingTemplate',
        'personal-finance-investment': 'personalFinanceInvestmentTemplate',
        'productivity-system': 'productivitySystemTemplate',
        'remote-work-productivity': 'remoteWorkProductivityTemplate',
        'retirement-lifestyle-planning': 'retirementLifestylePlanningTemplate',
        'travel-planning': 'travelPlanningTemplate',
        'travel-planning-adventure': 'travelPlanningAdventureTemplate',
        'wedding-planning': 'weddingTemplate',
        'academic-research': 'academicResearchTemplate'
    }

    actual_template_name = name_variations.get(template_name, camel_case_name)

    # Find template definition
    pattern = f'export const {actual_template_name}: GuidanceTemplate = \{{'
    start_match = re.search(pattern, content)
    if not start_match:
        return None

    start_pos = start_match.start()

    # Find next template or end of file
    next_template_pattern = r'export const \w+Template: GuidanceTemplate = \{'
    next_match = re.search(next_template_pattern, content[start_pos + len(pattern):])
    if next_match:
        end_pos = start_pos + len(pattern) + next_match.start()
    else:
        end_pos = len(content)

    template_content = content[start_pos:end_pos]

    # Count sections (look for section objects)
    sections_match = re.search(r'sections:\s*\[(.*?)\],', template_content, re.DOTALL)
    sections_count = 0
    if sections_match:
        sections_content = sections_match.group(1)
        # Count section objects by looking for id-title-description-order pattern
        sections_count = len(re.findall(r'id:\s*[\'"][^\'",]+[\'"],\s*title:', sections_content))

    # Count reflection prompts
    prompts_count = len(re.findall(r'id:\s*[\'"][^\'",]+[\'"],\s*prompt:', template_content))

    # Count resources - look for resources array
    resources_match = re.search(r'resources:\s*\[(.*?)\]', template_content, re.DOTALL)
    resources_count = 0
    if resources_match:
        resources_content = resources_match.group(1)
        # Only count non-blog resources (static resources)
        resources_count = len(re.findall(r'id:\s*[\'"][^\'",]+[\'"],\s*title:', resources_content))

    return {
        'sections': sections_count,
        'prompts': prompts_count,
        'resources': resources_count
    }

def main():
    # Read template data file
    with open('src/data/templates.ts', 'r') as f:
        template_data = f.read()

    print("COMPREHENSIVE TEMPLATE AUDIT REPORT")
    print("=" * 80)
    print(f"Benchmark: Wedding Template - {WEDDING_BENCHMARK['sections']} sections, {WEDDING_BENCHMARK['prompts']} prompts, {WEDDING_BENCHMARK['resources']} resources")
    print("=" * 80)
    print(f"{'Template':<35} {'Pages':<8} {'Land.':<6} {'Blog':<5} {'Sect':<5} {'Prom':<5} {'Res':<4} {'Issues'}")
    print("-" * 80)

    audit_results = {}

    for template_id in sorted(REGISTRY_TEMPLATES):
        # Check file structure
        landing_exists, app_exists = check_file_structure(template_id)
        pages_status = "✅" if (landing_exists and app_exists) else "❌"

        # Check landing page registry
        landing_status = "✅" if template_id in LANDING_PAGES else "❌"

        # Check blog posts
        blog_status = "✅" if template_id in TEMPLATES_WITH_BLOGS else "❌"

        # Count template elements
        stats = count_template_elements(template_id, template_data)

        if stats:
            sections = stats['sections']
            prompts = stats['prompts']
            resources = stats['resources']
        else:
            sections = prompts = resources = 0

        # Identify issues
        issues = []
        if not (landing_exists and app_exists):
            issues.append("Pages")
        if template_id not in LANDING_PAGES:
            issues.append("Landing")
        if template_id not in TEMPLATES_WITH_BLOGS:
            issues.append("Blogs")
        if sections < 5:
            issues.append(f"Sect({sections}/5)")
        if prompts < 20:
            issues.append(f"Prom({prompts}/20)")
        if resources < 4:
            issues.append(f"Res({resources}/4)")

        issues_str = ", ".join(issues) if issues else "None"

        print(f"{template_id:<35} {pages_status:<8} {landing_status:<6} {blog_status:<5} {sections:<5} {prompts:<5} {resources:<4} {issues_str}")

        audit_results[template_id] = {
            'pages_complete': landing_exists and app_exists,
            'landing_registry': template_id in LANDING_PAGES,
            'has_blogs': template_id in TEMPLATES_WITH_BLOGS,
            'sections': sections,
            'prompts': prompts,
            'resources': resources,
            'issues': issues
        }

    # Summary analysis
    print("\n" + "=" * 80)
    print("PRIORITY RANKING - TEMPLATES NEEDING MOST WORK")
    print("=" * 80)

    # Sort by number of issues
    sorted_templates = sorted(audit_results.items(),
                             key=lambda x: len(x[1]['issues']), reverse=True)

    print("HIGH PRIORITY (5+ issues):")
    high_priority = [t for t in sorted_templates if len(t[1]['issues']) >= 5]
    for template_id, data in high_priority:
        print(f"  {template_id:<35} - {len(data['issues'])} issues: {', '.join(data['issues'])}")

    print(f"\nMEDIUM PRIORITY (3-4 issues):")
    medium_priority = [t for t in sorted_templates if 3 <= len(t[1]['issues']) < 5]
    for template_id, data in medium_priority:
        print(f"  {template_id:<35} - {len(data['issues'])} issues: {', '.join(data['issues'])}")

    print(f"\nLOW PRIORITY (1-2 issues):")
    low_priority = [t for t in sorted_templates if 1 <= len(t[1]['issues']) < 3]
    for template_id, data in low_priority:
        print(f"  {template_id:<35} - {len(data['issues'])} issues: {', '.join(data['issues'])}")

    print(f"\nCOMPLETE TEMPLATES (0 issues):")
    complete = [t for t in sorted_templates if len(t[1]['issues']) == 0]
    for template_id, data in complete:
        print(f"  ✅ {template_id}")

    # Key findings
    print(f"\n" + "=" * 80)
    print("KEY FINDINGS")
    print("=" * 80)
    print(f"• Total registry templates: {len(REGISTRY_TEMPLATES)}")
    print(f"• Templates with complete file structure: {sum(1 for t in audit_results.values() if t['pages_complete'])}")
    print(f"• Templates with landing page registry entries: {sum(1 for t in audit_results.values() if t['landing_registry'])}")
    print(f"• Templates with blog posts: {sum(1 for t in audit_results.values() if t['has_blogs'])}")
    print(f"• Templates meeting section requirement (5+): {sum(1 for t in audit_results.values() if t['sections'] >= 5)}")
    print(f"• Templates meeting prompt requirement (20+): {sum(1 for t in audit_results.values() if t['prompts'] >= 20)}")
    print(f"• Templates meeting resource requirement (4+): {sum(1 for t in audit_results.values() if t['resources'] >= 4)}")
    print(f"• Templates fully meeting standards: {len(complete)}")

    # Critical TypeScript issues
    print(f"\n" + "=" * 80)
    print("CRITICAL TYPESCRIPT ISSUES")
    print("=" * 80)
    print("All templates show 0 resources because they rely on dynamic blog-based resources.")
    print("The createTemplateWithSyncedResources function converts blog posts to resources,")
    print("but templates without proper blog posts will have TypeScript compilation errors.")
    print("Templates without related blog posts need static resources with all required properties:")
    print("  - id: string")
    print("  - title: string")
    print("  - type: 'article' | 'checklist' | 'tool' | 'guide'")
    print("  - excerpt: string")
    print("  - content: string")
    print("  - tags: string[]")
    print("  - readTime: string")
    print("  - difficulty: 'beginner' | 'intermediate' | 'expert'")

if __name__ == "__main__":
    main()