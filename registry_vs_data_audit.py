#!/usr/bin/env python3
import re

# Templates in registry (from templates.ts)
registry_templates = [
    "wedding-planning", "home-buying", "baby-planning", "parenting-child-development",
    "budget-planning", "personal-finance-investment", "productivity-system",
    "remote-work-productivity", "job-search", "freelance-gig-economy", "business-launch",
    "digital-marketing-seo", "career-change-transition", "college-planning",
    "academic-research", "language-learning-cultural-immersion", "event-planning",
    "travel-planning", "travel-planning-adventure", "meal-planning", "fitness-journey",
    "fitness-athletic-training", "moving-relocation", "personal-development-coaching",
    "retirement-lifestyle-planning"
]

# Templates in data file (converted from camelCase to kebab-case)
data_templates = [
    'wedding-planning', 'home-buying', 'job-search', 'baby-planning',
    'fitness-athletic-training', 'travel-planning-adventure', 'freelance-gig-economy',
    'parenting-child-development', 'productivity-system', 'moving-relocation',
    'event-planning', 'travel-planning', 'meal-planning', 'academic-research',
    'freelance-business', 'personal-finance-investment', 'digital-marketing-seo',
    'remote-work-productivity', 'career-change-transition', 'small-business-exit-strategy',
    'non-profit-launch', 'personal-health-wellness', 'sustainable-living',
    'creative-project', 'digital-marketing-brand', 'remote-work-digital-nomad',
    'investment-wealth-building', 'ecommerce-online-business', 'personal-development-life-coaching',
    'retirement-planning-life-transition', 'home-renovation-interior-design', 'podcast-content-creation',
    'language-learning-cultural-immersion', 'budget-planning', 'business-launch',
    'college-planning', 'fitness-journey', 'personal-development-coaching',
    'retirement-lifestyle-planning'
]

print("REGISTRY vs DATA FILE COMPARISON")
print("=" * 50)

# Templates in registry but not in data file
registry_only = set(registry_templates) - set(data_templates)
print(f"\nTemplates in REGISTRY but NOT in data file ({len(registry_only)}):")
for template in sorted(registry_only):
    print(f"  ❌ {template}")

# Templates in data file but not in registry
data_only = set(data_templates) - set(registry_templates)
print(f"\nTemplates in DATA file but NOT in registry ({len(data_only)}):")
for template in sorted(data_only):
    print(f"  ⚠️  {template}")

# Templates in both
both = set(registry_templates) & set(data_templates)
print(f"\nTemplates in BOTH registry and data file ({len(both)}):")
for template in sorted(both):
    print(f"  ✅ {template}")

print(f"\nSUMMARY:")
print(f"Registry templates: {len(registry_templates)}")
print(f"Data file templates: {len(data_templates)}")
print(f"Templates in both: {len(both)}")
print(f"Registry only: {len(registry_only)}")
print(f"Data only: {len(data_only)}")