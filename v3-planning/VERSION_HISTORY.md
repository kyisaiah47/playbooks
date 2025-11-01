# Templata Version History

## Overview

This document tracks the major changes between different MVP versions of Templata.

### Version Timeline
- **v0.5** (Oct 17): Initial version with all landing pages
- **v1** (Oct 21): Cleaned up version after launch
- **v2** (Current main): Complete workspace architecture overhaul
- **v3** (In development): TBD

---

## v0.5 → v1 (Oct 17 → Oct 21)

### Summary
Massive cleanup and simplification after initial launch.

**Stats:** 13,129 files changed | +21,961 insertions | **-957,319 deletions**

### Deleted Pages
- `/about` - About page
- `/axiom-engine` - AI system page
- `/faq` - FAQ page
- `/manifesto` - Manifesto page
- `/partners` - Partners page
- `/preview` - Preview page
- `/life-os` - Life OS page
- `/workspace` - Workspace page

### New Pages
- `/changelog` - Changelog
- `/forgot-password` - Password reset flow
- `/how-it-works` - How it works explainer
- `/privacy` - Privacy policy
- `/terms` - Terms of service
- `/templates/categories/[category]` - Template category pages

### Key Changes
- **Template Migration**: Removed ~1000+ TypeScript template files, migrated all template data to Supabase database
- **Marketing Cleanup**: Removed most marketing landing pages
- **Auth Flow**: Added complete password reset functionality (forgot-password/reset-password)
- **Database Schema**: Added migrations for template schema updates
- **Code Cleanup**: Massive deletion of duplicate/unused files

### Technical Details
- Migrated from file-based templates to database-driven templates
- Added `generation-scripts/update-schema.ts` and SQL migration files
- Removed hooks: `use-command-palette.ts`, `use-recent-templates.ts`, `use-smart-recommendations.ts`, `use-template-unlocks.ts`
- Updated template type definitions in `src/types/template.ts`

---

## v1 → v2 (Oct 21 → Current Main)

### Summary
Complete architecture overhaul - transformed from a simple template library into a full workspace-based productivity platform.

**Stats:** 514 files changed | +63,797 insertions | -17,974 deletions

### Deleted Pages
**All Template/Article Pages:**
- `/templates/[slug]` - Individual template pages
- `/templates` - Template browser
- `/templates/categories/[category]` - Category pages
- `/articles/[slug]` - Individual article pages
- `/articles` - Article browser
- `/how-it-works` - How it works page

**All Marketing Ad Pages (17 pages):**
- `/marketing/ai-engine-ad`
- `/marketing/ai-integration-ad`
- `/marketing/articles-ad`
- `/marketing/brand-ad`
- `/marketing/collaboration-ad`
- `/marketing/encyclopedia-ad`
- `/marketing/feature-prompts`
- `/marketing/hero-ad`
- `/marketing/partners-ad`
- `/marketing/philosophy-ad`
- `/marketing/prompts-ad`
- `/marketing/split-screen`
- `/marketing/template-variety-ad`

**Old App Structure:**
- `/app/settings` - Old settings page
- `/app/views/OverviewView.tsx` - Old overview
- `/app/views/ReflectionView.tsx` - Old reflection flow
- `/app/views/TemplatesView.tsx` - Renamed to GuidesView

### New Pages - Workspace Architecture

**Workspace-Based Routing:** `/app/[workspaceId]/`
- `/analytics` - Activity tracking, stats, progress charts
- `/archive` - Archived guides and notes
- `/calendar` - Calendar view with day/week/month views
- `/community` - Community features and discussions
- `/discover` - Discover new guides
- `/docs` - Documentation and help
- `/graph` - Knowledge graph visualization
- `/library` - Guide library browser
- `/note` - Note editor interface
- `/settings` - Workspace settings
- `/tasks` - Task management
- `/timeline` - Timeline view of activities

**New Top-Level Pages:**
- `/docs` - Public documentation
- `/guides` - Public guide browser
- `/library` - Public library

### New Components (40+)

**Layout System:**
- `IconBar.tsx` - Icon-based navigation bar
- `Sidebar.tsx` - Main sidebar component
- `TabBar.tsx` - Tab navigation
- `PageTransition.tsx` - Page transition animations
- `ViewTransition.tsx` - View transition effects
- `CreateWorkspaceModal.tsx` - Workspace creation flow

**Sidebar Content (per view):**
- `AnalyticsSidebarContent.tsx`
- `ArchiveSidebarContent.tsx`
- `CalendarSidebarContent.tsx`
- `CommunitySidebarContent.tsx`
- `DailySidebarContent.tsx`
- `DocsSidebarContent.tsx`
- `GraphSidebarContent.tsx`
- `JournalSidebarContent.tsx`
- `LibrarySidebarContent.tsx`
- `NotesSidebarContent.tsx`
- `OverviewSidebarContent.tsx`
- `SettingsSidebarContent.tsx`
- `TasksSidebarContent.tsx`
- `TimelineSidebarContent.tsx`

**Feature Components:**

*Analytics:*
- `ActivityChart.tsx` - Activity visualization
- `GuideProgressList.tsx` - Guide progress tracking
- `StatsCards.tsx` - Statistics cards

*Calendar:*
- `MonthView.tsx` - Month calendar view
- `WeekView.tsx` - Week calendar view
- `DayView.tsx` - Day calendar view
- `MonthGrid.tsx` - Month grid component
- `EventList.tsx` - Event listing
- `EventCreateForm.tsx` - Event creation

*Journal:*
- `JournalEntry.tsx` - Individual journal entry
- `EntryList.tsx` - Journal entry list

*Notes:*
- `NewNoteDialog.tsx` - Create note modal
- `NewNotePopover.tsx` - Quick note creation
- `DailyNote.tsx` - Daily note interface

*Graph:*
- `GuideGraph.tsx` - Knowledge graph visualization

*Archive:*
- `ArchivedGuideList.tsx` - Archived items list

*Guides:*
- `GuideHeader.tsx` - Guide header component

*Daily:*
- `AgendaList.tsx` - Daily agenda

### Database Changes (20+ Migrations)

**Major Schema Changes:**
- **Terminology Shift**:
  - "templates" → "guides"
  - "prompts" → "questions"
  - "responses" → kept but restructured

**New Systems:**
- `20251024_create_workspace_system.sql` - Complete workspace architecture
- `20251024_update_workspace_icons_to_lucide.sql` - Icon system
- `20251026_cleanup_unused_tables.sql` - Database cleanup
- `20251026_consolidate_tasks_and_events.sql` - Task/event consolidation

**Cleanup:**
- `20251023_drop_marketing_pages.sql` - Removed marketing tables
- `20251023_drop_workspaces_rename_responses.sql` - Workspace refactor
- `20251023_remove_other_project_tables.sql` - Cleanup unused tables
- `20251023_consolidate_categories.sql` - Category consolidation

**Renaming Migrations:**
- `20251025110046_rename_template_to_guide.sql` - Template → Guide
- `20251025_rename_prompt_columns_to_question.sql` - Prompt → Question

**Field Updates:**
- `20251023_add_custom_fields_to_user_guides.sql` - Custom field support
- `20251024_add_user_guide_id_to_responses.sql` - Response linking

### Architecture Shift

**v1 Architecture:**
- Simple template/article browsing platform
- Reflection-based workflow
- Linear progression through prompts
- Public-facing template library

**v2 Architecture:**
- Full workspace-based productivity platform
- Multi-view interface (calendar, tasks, analytics, graph, etc.)
- Workspace isolation (multi-tenant)
- Personal productivity focus (like Notion/Obsidian)
- Community features
- Knowledge graph
- Time-based views (timeline, calendar)
- Archive system
- Advanced analytics

### Product Positioning Shift

**v1:** "Template library + guided reflection tool"
- Browse templates
- Answer reflection prompts
- Get guidance for life moments

**v2:** "Complete life organization workspace"
- Workspace-based productivity platform
- Multiple views and perspectives on your data
- Community and collaboration features
- Advanced visualization (graphs, timelines)
- Full task and calendar management
- Analytics and insights

This represents a **massive pivot** from a focused template/reflection tool to a comprehensive productivity platform competing with Notion, Obsidian, and similar workspace tools.

---

## Notes

### Branch Structure
- `mvp-v0.5` - Oct 17 snapshot (with all landing pages)
- `mvp-v1` - Oct 21 snapshot (cleaned up)
- `mvp-v2` - Current main branch (workspace architecture)
- `mvp-v3` - Development branch (based on v1)
- `main` - Production branch

### Key Insights

1. **v0.5 → v1** was about simplification and cleanup after launch
2. **v1 → v2** was a complete product pivot and architecture overhaul
3. The shift from v1 to v2 changed the entire product vision from "guided templates" to "productivity workspace"
4. Database migrations show heavy renaming to support new mental model (templates → guides, prompts → questions)
