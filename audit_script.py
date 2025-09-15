#!/usr/bin/env python3
import re
import json

def extract_template_stats(content, template_name):
    """Extract sections, prompts, and resources count for a template"""

    # Find the template definition
    pattern = f'export const {template_name}: GuidanceTemplate = \{{'
    start_match = re.search(pattern, content)
    if not start_match:
        return None

    start_pos = start_match.start()

    # Find the matching closing brace
    brace_count = 0
    current_pos = start_pos + len(pattern) - 1
    end_pos = None

    for i, char in enumerate(content[current_pos:], current_pos):
        if char == '{':
            brace_count += 1
        elif char == '}':
            brace_count -= 1
            if brace_count == 0:
                end_pos = i
                break

    if end_pos is None:
        return None

    template_content = content[start_pos:end_pos+1]

    # Count sections
    sections_match = re.search(r'sections:\s*\[(.*?)\]', template_content, re.DOTALL)
    sections_count = 0
    if sections_match:
        sections_content = sections_match.group(1)
        # Count section objects
        sections_count = len(re.findall(r'\{\s*id:', sections_content))

    # Count total reflection prompts
    prompts_count = len(re.findall(r'id:\s*[\'"][^\'",]+[\'"],\s*prompt:', template_content))

    # Count resources
    resources_match = re.search(r'resources:\s*\[(.*?)\]', template_content, re.DOTALL)
    resources_count = 0
    if resources_match:
        resources_content = resources_match.group(1)
        resources_count = len(re.findall(r'\{\s*id:', resources_content))

    return {
        'sections': sections_count,
        'prompts': prompts_count,
        'resources': resources_count
    }

# Read the template file
with open('src/data/templates.ts', 'r') as f:
    content = f.read()

# Template names
templates = [
    'weddingTemplate', 'homeBuyingTemplate', 'jobSearchTemplate', 'babyPlanningTemplate',
    'fitnessAthleticTrainingTemplate', 'travelPlanningAdventureTemplate', 'freelanceGigEconomyTemplate',
    'parentingChildDevelopmentTemplate', 'productivitySystemTemplate', 'movingRelocationTemplate',
    'eventPlanningTemplate', 'travelPlanningTemplate', 'mealPlanningTemplate', 'academicResearchTemplate',
    'freelanceBusinessTemplate', 'personalFinanceInvestmentTemplate', 'digitalMarketingSEOTemplate',
    'remoteWorkProductivityTemplate', 'careerChangeTransitionTemplate', 'smallBusinessExitStrategyTemplate',
    'nonProfitLaunchTemplate', 'personalHealthWellnessTemplate', 'sustainableLivingTemplate',
    'creativeProjectTemplate', 'digitalMarketingBrandTemplate', 'remoteWorkDigitalNomadTemplate',
    'investmentWealthBuildingTemplate', 'ecommerceOnlineBusinessTemplate', 'personalDevelopmentLifeCoachingTemplate',
    'retirementPlanningLifeTransitionTemplate', 'homeRenovationInteriorDesignTemplate', 'podcastContentCreationTemplate',
    'languageLearningCulturalImmersionTemplate', 'budgetPlanningTemplate', 'businessLaunchTemplate',
    'collegePlanningTemplate', 'fitnessJourneyTemplate', 'personalDevelopmentCoachingTemplate',
    'retirementLifestylePlanningTemplate'
]

print("Template Comprehensiveness Analysis")
print("=" * 50)
print(f"{'Template':<35} {'Sections':<8} {'Prompts':<8} {'Resources':<10}")
print("-" * 70)

results = {}
for template in templates:
    stats = extract_template_stats(content, template)
    if stats:
        template_id = template.replace('Template', '')
        # Convert camelCase to kebab-case
        template_id = re.sub(r'([A-Z])', r'-\1', template_id).lower().lstrip('-')

        results[template_id] = stats
        print(f"{template_id:<35} {stats['sections']:<8} {stats['prompts']:<8} {stats['resources']:<10}")
    else:
        print(f"{template:<35} ERROR: Could not parse")

# Summary analysis
print("\n" + "=" * 50)
print("BENCHMARK ANALYSIS (Wedding Template Standard)")
print("=" * 50)

wedding_stats = results.get('wedding-planning', {})
print(f"Wedding template: {wedding_stats.get('sections', 0)} sections, {wedding_stats.get('prompts', 0)} prompts, {wedding_stats.get('resources', 0)} resources")

print("\nTemplates NOT meeting minimum standards:")
print("(5+ sections, 20+ prompts, 4+ resources)")
print("-" * 50)

for template_id, stats in results.items():
    if (stats['sections'] < 5 or stats['prompts'] < 20 or stats['resources'] < 4):
        missing = []
        if stats['sections'] < 5:
            missing.append(f"sections ({stats['sections']}/5)")
        if stats['prompts'] < 20:
            missing.append(f"prompts ({stats['prompts']}/20)")
        if stats['resources'] < 4:
            missing.append(f"resources ({stats['resources']}/4)")

        print(f"{template_id:<35} Missing: {', '.join(missing)}")