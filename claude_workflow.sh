#!/usr/bin/env bash

# Location of your log file
LOGFILE="$HOME/.claude_logs/session.log"
mkdir -p "$(dirname "$LOGFILE")"
: > "$LOGFILE"   # empty the log

# Array of prompts
PROMPTS=(
"PROMPT 1: File Structure Setup

You're creating a template for the Templata platform. First, we need to set up the basic file structure.

Read the detailed specification first: /TEMPLATE_SPECS/1_FILE_STRUCTURE_SPEC.md

Study the wedding template structure in:
- /src/components/templates/wedding/
- /src/app/wedding-planning/
- /src/contexts/wedding-context.tsx

Your task: Create the basic file structure with placeholder content

1. Create /src/contexts/[your-template]-context.tsx - Copy wedding-context pattern but change the interface name and data fields to match your domain
2. Create /src/app/[your-template]/page.tsx - Just a simple placeholder page for now
3. Create /src/app/[your-template]/app/page.tsx - Copy the wedding app page structure but change imports to your template
4. Create /src/components/templates/[your-template]/[your-template]-overview.tsx - Simple placeholder with \"Overview Coming Soon\"
5. Create folder /src/components/guided-notes/[your-template]/ (empty for now)
6. Create folder /src/components/resources/[your-template]/ (empty for now)

Just get the files created with basic content. Don't worry about functionality yet.

Run npm run build to make sure there are no TypeScript errors. Fix any import issues.

When this works, say \"STEP 1 COMPLETE\" and I'll give you the next step."

"PROMPT 2: Sidebar Navigation

Great! Now create the sidebar navigation for initial data collection.

Read the detailed specification first: /TEMPLATE_SPECS/2_SIDEBAR_NAVIGATION_SPEC.md

Your task: Create the sidebar navigation

1. Create /src/components/templates/[your-template]/[your-template]-sidebar-left.tsx
2. Copy the structure from /src/components/templates/wedding/wedding-sidebar-left.tsx
3. Customize for your domain:
   - Change the template display name
   - Create 4-6 core sections relevant to your template (Overview + 3-5 functional areas)
   - Plan 8-12 guided notes items that users will need for your domain
   - Plan 2-4 resource items (educational content)
   - Use appropriate icons for each section

Example for baby planning:
Core sections: Overview, Health Tracking, Preparation, Budget, Timeline, Support
Guided Notes (10): Birth Plan, Hospital Bag, Nursery Setup, Baby Registry, Maternity Leave, Childcare Search, Baby-Proofing, Feeding Plan, Sleep Schedule, Emergency Contacts
Resources (3): Pregnancy Guide, Baby Development Checklist, Newborn Care Guide

Example for home buying:
Core sections: Overview, Property Search, Financing, Inspections, Moving, Legal
Guided Notes (12): House Hunting Criteria, Mortgage Comparison, Down Payment, Home Inspection, Insurance, Closing Process, Moving Timeline, Utility Setup, Neighborhood Research, School Districts, Property Taxes, HOA Research
Resources (4): First-Time Buyer's Guide, Home Buying Checklist, Mortgage Guide, Closing Guide

4. Update your [your-template]-overview.tsx to use the sidebar

Test: You should be able to see the sidebar with all sections (even if they don't link anywhere yet).

When the sidebar navigation shows properly, say \"STEP 2 COMPLETE\" and I'll give you the next step."

"PROMPT 3: Setup Wizard

Great! Now create the setup wizard for initial data collection.

Read the detailed specification first: /TEMPLATE_SPECS/3_SETUP_WIZARD_SPEC.md

Your task: Create the setup wizard

1. Create /src/components/templates/[your-template]/[your-template]-setup-wizard.tsx
2. Copy the structure from /src/components/templates/wedding/wedding-setup-wizard.tsx
3. Customize for your domain:
   - Change the interface from WeddingData to [YourTemplate]Data
   - Create 3-4 steps relevant to your template
   - Make ALL fields optional using z.string().optional() and z.date().optional()
   - Update step titles, descriptions, and form fields

Example for baby planning:
Step 1: Basic Info (due date, names, etc.)
Step 2: Healthcare (doctor, hospital, etc.)
Step 3: Preparation (nursery, budget, etc.)
Step 4: Preferences (birth plan basics, etc.)

Example for home buying:
Step 1: Basic Info (budget, timeline, location)
Step 2: Financing (pre-approval status, loan type)
Step 3: Preferences (house type, must-haves)
Step 4: Team (realtor, lender contacts)

4. Update your context file to handle the new data structure
5. Make sure the wizard integrates with your main app page (copy the wedding pattern)

Test: You should be able to run npm run dev, visit your template, and see the setup wizard popup on first visit.

When the wizard works and saves data, say \"STEP 3 COMPLETE\" and I'll give you the next step."

"PROMPT 4: Core Pages (Unique Functionality)

Excellent! Now create the core functional pages - this is where your template becomes truly unique.

Read the detailed specification first: /TEMPLATE_SPECS/4_CORE_PAGES_SPEC.md

Your task: Create exactly 6 core pages with domain-specific functionality

1. Create your 6 core page components in /src/components/templates/[your-template]/:
   - [your-template]-overview.tsx - Dashboard with key metrics and progress
   - [page-name-1].tsx - Core functionality page 1
   - [page-name-2].tsx - Core functionality page 2
   - [page-name-3].tsx - Core functionality page 3
   - [page-name-4].tsx - Core functionality page 4
   - [page-name-5].tsx - Core functionality page 5

CRITICAL: DO NOT COPY WEDDING CONTENT
Each page must be completely unique to your domain with relevant:
- Data structures
- CRUD operations (add/edit/delete items)
- Progress tracking
- Domain-specific metrics

Examples:

Baby Planning (6 pages required):
- Overview: Weeks pregnant, appointments, budget spent
- Health Tracking: Appointments, tests, symptoms
- Baby Preparation: Nursery items, gear purchased
- Budget Planning: Expenses by category
- Timeline: Key milestones and deadlines
- Postpartum Planning: Recovery, childcare prep

Home Buying (6 pages required):
- Overview: Properties viewed, offers made, timeline
- Property Search: Saved properties, viewing schedule
- Financing: Loan applications, pre-approval status
- Inspections: Scheduled inspections, reports
- Moving Planning: Timeline, moving company, utilities
- Legal/Paperwork: Contracts, documentation tracking

2. Update your main app page to route to these new pages
3. Each page should have real functionality - forms, lists, progress bars, etc.

Test: Navigate between all 6 core pages and verify they show unique, relevant content.

When all 6 core pages work with unique functionality, say \"STEP 4 COMPLETE\" and I'll give you the next step."

"PROMPT 5: Guided Notes

Perfect! Now create the guided note-taking pages using our proven template system.

Read the detailed specification first: /TEMPLATE_SPECS/5_GUIDED_NOTES_SPEC.md

Your task: Create 8-12 guided notes pages using the GuidedNotePage component

1. Study /src/components/guided-notes/wedding/timeline.tsx to understand the pattern
2. Create 8-12 files in /src/components/guided-notes/[your-template]/:
   - Each file should use the GuidedNotePage component
   - DO NOT create custom components - use the existing GuidedNotePage
   - Focus on creating good content: sections, prompts, examples, and tips

Content structure for each guided note:
- Use tabs if you have 3-4 related subtopics
- Each tab contains: title, description, sections (3-4), tips (4-6)
- Each section contains: prompts (4-6) and examples (1:1 with prompts)
- Prompts should be questions ending with \"?\"
- Examples should be specific guidance for each prompt

Example guided notes for baby planning:
- birth-plan.tsx, hospital-bag.tsx, nursery-setup.tsx, baby-registry.tsx, maternity-leave.tsx, childcare-search.tsx, baby-proofing.tsx, feeding-plan.tsx, sleep-schedule.tsx, emergency-contacts.tsx

Example guided notes for home buying:
- house-hunting-criteria.tsx, mortgage-comparison.tsx, down-payment.tsx, home-inspection.tsx, insurance.tsx, closing-process.tsx, moving-timeline.tsx, utility-setup.tsx, neighborhood-research.tsx, school-districts.tsx, property-taxes.tsx, hoa-research.tsx

3. Update your sidebar navigation to link to all guided notes
4. Update your main app routing to handle all the guided note pages

Test: Click through each guided note from the sidebar and verify the content shows properly.

When all guided notes work and show good content, say \"STEP 5 COMPLETE\" and I'll give you the next step."

"PROMPT 6: Resources + My Notes Section

Excellent! Now create the educational resources and integrate the free-form notes section.

Read the detailed specification first: /TEMPLATE_SPECS/6_RESOURCES_NOTES_SPEC.md

Your task: Create 2-4 resource components + integrate My Notes

Part A: Create 2-4 Resource Components
1. Create 2-4 files in /src/components/resources/[your-template]/:
   - These are educational/reference materials (not note-taking)
   - Static informational content with guides, tips, checklists
   - Should complement your guided notes with deeper knowledge

Examples:

Baby Planning resources:
- pregnancy-guide.tsx - Comprehensive pregnancy information by trimester
- baby-gear-checklist.tsx - Essential vs nice-to-have items
- newborn-care-guide.tsx - Basic care instructions and tips
- postpartum-guide.tsx - Recovery and adjustment information

Home Buying resources:
- buyers-guide.tsx - Complete home buying process walkthrough
- mortgage-guide.tsx - Loan types, rates, and qualification info
- inspection-checklist.tsx - What to look for in home inspections
- closing-guide.tsx - Final steps and what to expect

Part B: Integrate My Notes
2. Add \"My Notes\" section to your sidebar navigation
3. When users click \"My Notes\", show the MyNotes component
4. This gives users free-form note-taking capability alongside structured templates

Part C: Update Navigation
5. Make sure your sidebar properly links to all resources
6. Ensure \"My Notes\" section works and shows the note editor

Test:
- Navigate to each resource and see educational content
- Click \"My Notes\" and verify you can create free-form notes
- All navigation should work smoothly

When all resources are created and My Notes integration works, say \"STEP 6 COMPLETE\" and I'll give you the final step."

"PROMPT 7: SEO Landing Page (Final Step)

Perfect! Now create the final piece - the SEO marketing landing page.

Read the detailed specification first: /TEMPLATE_SPECS/7_SEO_LANDING_PAGE_SPEC.md

Your task: Create a comprehensive marketing landing page

1. Replace /src/app/[your-template]/page.tsx with a complete marketing page
2. Study /src/app/wedding-planning/page.tsx for the structure and pattern
3. DO NOT COPY - create unique content for your domain

Required sections:
- Hero section with compelling headline and CTA
- Features section highlighting your 6 core pages
- How It Works section (3-4 steps)
- Benefits section (why use your template)
- FAQ section (8-10 relevant questions)
- Call-to-action section
- Proper metadata and Schema markup for SEO

Key requirements:
- Use only theme colors (no custom colors)
- Mobile responsive design
- Proper Next.js metadata export
- Schema.org markup for SEO
- Internal linking to template features
- Professional copy that sells the value

Example headlines:
- Baby Planning: \"Plan Your Perfect Pregnancy Journey - Save 40+ Hours of Research\"
- Home Buying: \"Navigate Home Buying Like a Pro - Your Complete Purchase Planner\"

Test final integration:
- /[template-name]/ should show marketing landing page
- /[template-name]/app/ should show your template application
- Navigation between them should work
- Everything should be mobile responsive

Final validation:
npm run lint:template
npm run build

Both commands must pass with zero errors.

When your SEO landing page is complete and both validation commands pass, say \"TEMPLATE COMPLETE - ALL STEPS FINISHED\" and provide the URLs to test."
)

# Loop through prompts
for i in "${!PROMPTS[@]}"; do
  STEP=$((i+1))
  PROMPT="${PROMPTS[$i]}"

  echo ">>> Running Step $STEP..."
  claude --print -p "$PROMPT" | tee -a "$LOGFILE"

  # Only wait for a completion marker if there's a next step
  if (( i < ${#PROMPTS[@]} - 1 )); then
    echo ">>> Waiting for STEP $STEP COMPLETE..."
    until grep -q "STEP $STEP COMPLETE" "$LOGFILE"; do
      sleep 5
    done
    echo ">>> Detected STEP $STEP COMPLETE."
  fi
done

echo ">>> All steps finished!"