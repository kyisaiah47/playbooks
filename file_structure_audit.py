#!/usr/bin/env python3
import os

# Templates in registry
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

app_dir = "src/app"

print("FILE STRUCTURE AUDIT")
print("=" * 50)
print(f"{'Template':<35} {'Landing':<8} {'App':<8} {'Status'}")
print("-" * 60)

landing_missing = []
app_missing = []
both_present = []

for template in sorted(registry_templates):
    landing_path = f"{app_dir}/{template}/page.tsx"
    app_path = f"{app_dir}/{template}/app/page.tsx"

    has_landing = os.path.exists(landing_path)
    has_app = os.path.exists(app_path)

    landing_status = "✅" if has_landing else "❌"
    app_status = "✅" if has_app else "❌"

    if has_landing and has_app:
        status = "✅ Complete"
        both_present.append(template)
    elif has_landing and not has_app:
        status = "⚠️  Missing app"
        app_missing.append(template)
    elif not has_landing and has_app:
        status = "⚠️  Missing landing"
        landing_missing.append(template)
    else:
        status = "❌ Missing both"
        landing_missing.append(template)
        app_missing.append(template)

    print(f"{template:<35} {landing_status:<8} {app_status:<8} {status}")

print(f"\nSUMMARY:")
print(f"Templates with both pages: {len(both_present)}")
print(f"Templates missing landing page: {len(set(landing_missing))}")
print(f"Templates missing app page: {len(set(app_missing))}")

if landing_missing:
    print(f"\nMissing landing pages:")
    for template in sorted(set(landing_missing)):
        print(f"  - {template}")

if app_missing:
    print(f"\nMissing app pages:")
    for template in sorted(set(app_missing)):
        print(f"  - {template}")