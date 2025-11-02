# MVP v3 Strategy: The Comprehensive Guide for Life's Biggest Moments

## Executive Summary

**The Problem:** When people face major life events (wedding, home buying, career change), they spend months researching, still worried they missed something critical. Traditional tools give them blank pages. Competitors give them generic advice.

**Our Solution:** Comprehensive questions (90%+ coverage guarantee) + expert readings + integrated planning. Wikipedia × Notion for life events.

**v3 Goal:** Combine the best of v0.5 (landing pages/positioning), v1 (clean UX/3-panel interface), and v2 (productivity features) into a focused, differentiated product.

---

## Strategic Positioning

### What We Are
**"Your expert guide through life's biggest moments"**

We are THE comprehensive guide + planning tool for major life events. Not another productivity app. Not another note-taking tool. We're the solution when you need to make sure you haven't missed anything important.

### What Makes Us Unique

1. **Comprehensiveness Guarantee**: "90%+ of everything you need" - our AI-refined questions have been tested for months to ensure nothing important is missed
2. **Structured Knowledge**: Not just articles, but QUESTIONS that guide your thinking systematically
3. **Per-Guide Organization**: Calendar/todos tied to specific life events (not just a generic task manager)
4. **Curated Quality**: Months of prompt refinement, not on-the-fly AI generation

### The Winning Pitch (2 sentences)

"Planning a wedding, buying a home, or changing careers? Templata gives you comprehensive questions covering 90%+ of what you need to consider, expert readings to guide your decisions, and integrated planning tools to execute—all in one place."

Or simpler:
**"The comprehensive guide + planning tool for life's biggest moments."**

---

## What to Keep from Each Version

### From v0.5: Landing Pages & Positioning ✅
**KEEP ALL OF THESE:**
- `/about` - Mission and team (builds trust)
- `/manifesto` - Your north star (shows conviction)
- `/faq` - Answer objections upfront
- `/partners` - Social proof (if applicable)
- `/axiom-engine` - Explain your AI methodology (builds credibility)
- `/preview` - Show the product before signup

**Why:** These pages establish you as serious, thoughtful, and differentiated. They explain WHY your AI-generated content is trustworthy (months of refinement via Axiom Engine).

### From v1: Core UX & Visual Style ✅
**KEEP THIS UX PHILOSOPHY:**
- Clean, professional aesthetic (NOT cutesy v2 style)
- 3-panel split screen for guide view (PERFECT for question → answer → reading flow)
- Header-based navigation (NOT icon sidebar)
- Simple color palette and Geist fonts
- Clear information hierarchy

**Why:** This UX screams "professional tool for serious decisions" not "fun productivity toy." The 3-panel layout is PERFECT for your core loop.

### From v2: Productivity Features ✅
**KEEP THESE FEATURES:**
- Workspace system (multiple guides at once)
- Per-guide calendar integration
- Per-guide task management
- Analytics/progress tracking
- Archive for completed guides
- Blank notes (freeform planning space)
- Discovery/library browsing

**CUT THESE:**
- Knowledge graph (too abstract, not core value)
- Timeline view (redundant with calendar)
- Community features (not core, defer to later)
- Journal system (not differentiated)
- Icon sidebar navigation
- Tab bar
- Excessive view transitions

**Why:** Calendar/tasks integrated PER GUIDE is brilliant differentiation. Analytics shows progress on multi-month projects. But graph/timeline/community dilute focus.

---

## Terminology & Naming

Based on your manifesto and positioning:

### Final Terminology
- **Guides** (not templates) - You're being GUIDED through a life event
- **Questions** (not prompts) - More human, less AI-y, clearer purpose
- **Readings** (not articles) - Feels educational and curated
- **App name: Templata** - Keep it, it's your brand

### Why This Works
- "Template" implies fill-in-the-blank → passive
- "Guide" implies expert leading you → active, supportive
- "Questions" are what you need to think about (comprehensive)
- "Readings" are how you learn to answer them (expert knowledge)

---

## The Core Loop (Must Be Crystal Clear)

```
1. Choose a life event → Wedding Planning, Home Buying, Career Change
2. Answer comprehensive questions → Know what to think about
3. Read expert guidance → Know how to decide
4. Plan with integrated calendar/tasks → Execute on it
5. Track progress → Stay on course
```

This loop should be obvious within 30 seconds of using the app.

---

## Feature Prioritization for v3

### TIER 1: Core Loop (Non-negotiable)
- ✅ Guide browser/discovery (from v1/v2)
- ✅ Questions panel with persistent answers (v1's 3-panel, keep it)
- ✅ Readings panel (v1's 3-panel, keep it)
- ✅ Per-guide todos (v2's killer feature)
- ✅ Per-guide calendar (v2's killer feature)
- ✅ Blank notes (for freeform planning)
- ✅ Guide progress tracking (simplified from v2 analytics)

### TIER 2: Essential Productivity (Keep but Simplify)
- ✅ Calendar view - Cross-guide view with per-guide filtering
- ✅ Tasks view - Simple kanban or list view, filterable by guide
- ✅ Analytics - Show: % complete, questions answered, readings read (simple dashboard)
- ✅ Archive - For completed guides (clear workspace)
- ✅ Settings - User preferences, account management

### TIER 3: Nice to Have (Defer/Cut for Now)
- ❌ Knowledge graph - Too abstract, not aligned with "expert guide" positioning
- ❌ Timeline view - Redundant with calendar
- ❌ Community features - Not core differentiation, can add later if traction
- ❌ Journal system - Not unique, Notion has this
- ❌ Multiple workspaces - Keep single workspace for now, add if users request

---

## Navigation Architecture

### Public Site (Header)
```
[LOGO] Templata

Company ▾          Product ▾        Browse ▾         [Get Started]
- Manifesto        - How It Works   - Guides
- About            - Preview        - Readings
- FAQ
- Partners
- Axiom Engine
```

### In-App (Header-based, NOT sidebar)
```
[LOGO] Templata

[My Guides ▾]     |  Discover  |  Library  |     Notes  Calendar  Tasks  Analytics     |  [Settings ⚙]
  Wedding
  Home Buying
  Career Change
  + New Guide
```

**Key Navigation Principles:**
1. **My Guides dropdown** - Quick switch between active guides
2. **4 main views** - Notes (default), Calendar, Tasks, Analytics
3. **Discover/Library** - Browse available guides and readings
4. **Context matters** - When in a guide, you see 3-panel layout. When in Calendar/Tasks, you see cross-guide view with filtering.

### The 3-Panel Guide View (Core Experience)
```
┌──────────────────────────────────────────────────────────────┐
│ [Wedding Planning ▾]  Notes  Calendar  Tasks  Analytics      │
├───────────┬────────────────────┬───────────────────────────────┤
│           │                    │                               │
│ Questions │   Answers          │   Readings                    │
│           │                    │                               │
│ □ Budget  │   [Text editor]    │   "Setting a Realistic        │
│ □ Venue   │                    │    Wedding Budget"            │
│ ✓ Guest   │   We want max      │                               │
│   List    │   150 guests...    │   [Reading content...]        │
│ □ Catering│                    │                               │
│ ...       │                    │                               │
│           │   [Save button]    │   [Related readings list]     │
└───────────┴────────────────────┴───────────────────────────────┘
```

When user clicks "Calendar" or "Tasks":
- View switches to calendar/task view
- Can filter: "All guides" or specific guide
- Can add todos/events and tag them to guides

---

## UX/Visual Design Principles

### Keep from v1 ✅
- Clean, professional aesthetic (think Stripe, Linear, Superhuman)
- Generous whitespace
- 3-panel split screen for guide view
- Header navigation (no icon sidebar)
- Simple color palette (1-2 accent colors max)
- Geist fonts (modern, readable)
- Sharp, intentional UI (not playful)

### Avoid from v2 ❌
- Icon sidebar (makes you look generic)
- Excessive rounded corners (too playful)
- Cutesy/Notion-like design language
- Too many view transitions/animations
- Tab bar navigation
- Overly colorful/expressive icons

### The "Feel" We're Going For
- **Should feel like:** A professional consultant/guide you hired
- **Should NOT feel like:** A fun productivity toy
- **Reference:** Superhuman (email), Linear (project management), Stripe (payments) - serious tools for serious work

### Color & Branding
- **Primary:** Professional blue or neutral (trust, expertise)
- **Accent:** Subtle, purposeful
- **Avoid:** Pastels, playful colors, too much color variety
- **Typography:** Geist Sans (body), Geist Mono (code/data)

---

## Page Structure for v3

### Landing Pages (from v0.5)
- `/` - Home/hero
- `/manifesto` - Your north star philosophy
- `/about` - Mission, team, story
- `/faq` - Common questions
- `/partners` - Partner integrations/collaborations (if any)
- `/axiom-engine` - Explain your AI methodology
- `/how-it-works` - Product walkthrough (from v1)
- `/preview` - Interactive demo/preview
- `/privacy` - Privacy policy (from v1)
- `/terms` - Terms of service (from v1)

### Browse Pages
- `/guides` - Browse all available guides
- `/library` - Browse all available readings

### App Pages
- `/app` - Main app dashboard, redirects to active guide or discovery
- `/app/[workspaceId]/guide/[guideId]` - Individual guide (3-panel view)
- `/app/[workspaceId]/discover` - Discover new guides
- `/app/[workspaceId]/library` - Browse readings library
- `/app/[workspaceId]/calendar` - Calendar view (cross-guide)
- `/app/[workspaceId]/tasks` - Tasks view (cross-guide)
- `/app/[workspaceId]/analytics` - Progress analytics
- `/app/[workspaceId]/archive` - Archived guides
- `/app/[workspaceId]/settings` - Settings
- `/app/[workspaceId]/note/[noteId]` - Blank note view

---

## Integration Strategy: How to Build v3

### Phase 1: Foundation (v1 base + v0.5 pages)
**Goal:** Get v1 UX working with all v0.5 landing pages

**Steps:**
1. Start with v1 codebase (mvp-v1 branch)
2. Port over all landing pages from v0.5:
   - `/about`, `/manifesto`, `/faq`, `/partners`, `/axiom-engine`, `/preview`
3. Keep v1's header navigation
4. Keep v1's 3-panel guide view
5. Keep v1's visual style (Geist fonts, clean aesthetic)

**Output:** v1 app experience with complete landing page set

### Phase 2: Integrate v2 Productivity Features
**Goal:** Add calendar/tasks/analytics without destroying v1 UX

**Steps:**
1. Keep workspace system from v2 (but simplify)
2. Add Calendar, Tasks, Analytics as header nav items (NOT sidebar)
3. Port per-guide calendar/task functionality
4. Add simple progress analytics (%, questions answered, readings read)
5. Add archive functionality
6. Ensure all productivity views can filter by guide

**Output:** v1 UX + v2 productivity features

### Phase 3: Polish & Terminology
**Goal:** Consistent naming and refined experience

**Steps:**
1. Database migration: templates → guides, prompts → questions
2. Update all UI copy to reflect new terminology
3. Refine guide discovery/browse experience
4. Polish 3-panel layout (responsive, smooth)
5. Add blank notes functionality
6. Optimize onboarding flow

**Output:** Polished v3 ready for users

---

## Why This Wins

### 1. Clear Positioning
You're not "another productivity app" competing with Notion/Obsidian. You're THE solution for major life events. Specific, defensible positioning.

### 2. Focused UX
Core loop is obvious within 30 seconds:
- Pick guide → Answer questions → Read expert content → Plan with calendar/tasks

Everything else supports this loop.

### 3. True Differentiation
**Nobody else has:**
- Comprehensive questions (90%+ guarantee)
- AI-refined over months (not generic GPT output)
- Per-guide calendar/task integration
- Questions + Readings in one seamless experience

### 4. Built-in Trust
Landing pages (especially Manifesto + Axiom Engine) explain your methodology and build credibility. Users understand WHY your AI content is trustworthy.

### 5. Scalable Model
Works for ANY major life event:
- Personal: Wedding, home buying, parenting, divorce, career change
- Professional: Starting business, launching product, fundraising
- Health: Chronic illness management, surgery recovery
- Financial: Retirement planning, investing, debt payoff

Huge TAM, clear path to 1000+ guides.

### 6. Premium Feel
Professional aesthetic + comprehensive content = premium positioning. You can charge more because you're saving people months of research and anxiety.

---

## Critical Success Factors

### 1. Guide Quality (Your Moat)
The questions MUST be comprehensive. If users find major gaps, your core value prop collapses. Invest heavily in question quality and refinement.

### 2. Reading Quality
Must feel like expert advice, not generic AI content. Curate heavily. Better to have 10 amazing readings than 100 mediocre ones.

### 3. Simple Onboarding
New user should:
- Pick a guide (30 seconds)
- See comprehensive questions (immediate value)
- Understand the system (30 seconds)

Total time to "aha moment": 60 seconds.

### 4. Per-Guide Organization
This is your key differentiator from Notion. When I'm planning a wedding, I want to see ONLY wedding tasks/events. When I switch to home buying, different set. Don't mess this up.

### 5. Professional Aesthetic
Can't look like a consumer app. These are serious life decisions (buying a home = $500k+, wedding = $30k+). Premium look = premium trust.

---

## Competitive Positioning

### vs. Notion
- **Notion:** Blank pages, you figure it out
- **Templata:** Comprehensive questions, expert readings, nothing missed

### vs. Google/Research
- **Google:** Scattered info, you synthesize
- **Templata:** Pre-synthesized expert knowledge, organized by what you need to decide

### vs. Hiring a Consultant
- **Consultant:** $150-500/hr, limited availability
- **Templata:** $9-15/month, always available, 90%+ comprehensive

### vs. Wedding Planner Apps / Event-specific Tools
- **Specific tools:** One-off, disconnected, limited scope
- **Templata:** Unified system for ALL life events, integrated planning

You're "Superhuman for life's biggest moments" - premium, focused, exceptional at one thing.

---

## The One-Sentence Vision

**"Templata ensures you never have to worry about missing something important during life's biggest moments."**

That's the north star. Every feature, every design decision, every piece of copy should reinforce this promise.

---

## Next Steps

1. **Review this strategy doc** - Does it align with your vision? Any adjustments needed?
2. **Finalize terminology** - Confirm: guides, questions, readings
3. **Create v3 implementation plan** - Specific file-by-file migration strategy
4. **Design key screens** - Landing page, guide view (3-panel), calendar view, tasks view
5. **Database migration plan** - Rename schema from templates/prompts to guides/questions
6. **Content audit** - Ensure guide quality matches "90%+ comprehensive" promise

Once we have your signoff on this strategy, we can create the detailed implementation plan.
