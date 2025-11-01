# v3 File Structure Mapping

This document maps out key files across v0.5, v1, and v2 that we need for v3 integration.

---

## v0.5: Landing Pages to Port

### Landing Pages (All Present ✅)
```
src/app/about/page.tsx
src/app/axiom-engine/page.tsx
src/app/faq/page.tsx
src/app/manifesto/page.tsx
src/app/partners/page.tsx
src/app/preview/page.tsx
```

**Action:** Port all 6 pages to v3, update imports and styling to match v1.

---

## v1: Base Structure (Our Starting Point)

### App Structure
```
src/app/app/
├── layout.tsx                      # Main app layout
├── page.tsx                        # Main app entry
├── settings/
│   ├── layout.tsx
│   └── page.tsx
└── views/
    ├── OverviewView.tsx           # Main overview/dashboard
    ├── ReflectionView.tsx         # Reflection/question flow
    └── TemplatesView.tsx          # Template browsing (rename to GuidesView)
```

**Key Characteristics:**
- Simple, clean structure
- View-based architecture (not route-based like v2)
- 3-panel layout likely in OverviewView or ReflectionView
- Header-based navigation (not sidebar)

**Action:** Keep this structure as base, extend it with v2 features.

---

## v2 (main): Productivity Features to Port

### Workspace Pages (Route-based)
```
src/app/app/[workspaceId]/
├── page.tsx                       # Workspace home
├── analytics/page.tsx             ✅ PORT
├── archive/page.tsx               ✅ PORT
├── calendar/page.tsx              ✅ PORT
├── community/page.tsx             ❌ CUT
├── discover/page.tsx              ✅ PORT
├── docs/page.tsx                  ❌ CUT (or simplify)
├── graph/page.tsx                 ❌ CUT
├── library/page.tsx               ✅ PORT
├── note/page.tsx                  ✅ PORT
├── settings/page.tsx              ✅ PORT
├── tasks/page.tsx                 ✅ PORT
└── timeline/page.tsx              ❌ CUT
```

**To Port:** analytics, archive, calendar, discover, library, note, settings, tasks
**To Cut:** community, docs, graph, timeline

---

### Calendar Components (Port All)
```
src/components/app/calendar/
├── DayView.tsx                    ✅ PORT (optional - consider cutting)
├── EventCreateForm.tsx            ✅ PORT
├── EventList.tsx                  ✅ PORT
├── MonthGrid.tsx                  ✅ PORT
├── MonthView.tsx                  ✅ PORT
└── WeekView.tsx                   ✅ PORT
```

**Action:** Port all, adapt styling to v1 aesthetic, add per-guide filtering.

---

### Tasks Components (Port All)
```
src/components/app/tasks/
├── KanbanBoard.tsx                ✅ PORT
├── KanbanColumn.tsx               ✅ PORT
├── TaskCard.tsx                   ✅ PORT
├── TaskCreateForm.tsx             ✅ PORT
├── TaskDeleteDialog.tsx           ✅ PORT
└── TaskEditDialog.tsx             ✅ PORT
```

**Action:** Port all, adapt styling, add per-guide filtering.

---

### Analytics Components (Port, Simplify)
```
src/components/app/analytics/
├── ActivityChart.tsx              ⚠️ PORT (simplify)
├── GuideProgressList.tsx          ✅ PORT
└── StatsCards.tsx                 ✅ PORT
```

**Action:** Port but simplify. Focus on: % complete, questions answered, readings read.

---

### Archive Components (Port)
```
src/components/app/archive/
└── ArchivedGuideList.tsx          ✅ PORT
```

**Action:** Port and adapt styling.

---

### Navigation Components (DO NOT PORT)
```
src/components/app/layout/
├── IconBar.tsx                    ❌ CUT
├── Sidebar.tsx                    ❌ CUT
├── TabBar.tsx                     ❌ CUT
├── AnalyticsSidebarContent.tsx   ❌ CUT
├── ArchiveSidebarContent.tsx     ❌ CUT
├── CalendarSidebarContent.tsx    ❌ CUT
├── CommunitySidebarContent.tsx   ❌ CUT
├── DailySidebarContent.tsx       ❌ CUT
├── DocsSidebarContent.tsx        ❌ CUT
├── GraphSidebarContent.tsx       ❌ CUT
├── JournalSidebarContent.tsx     ❌ CUT
├── LibrarySidebarContent.tsx     ❌ CUT
├── NotesSidebarContent.tsx       ❌ CUT
├── OverviewSidebarContent.tsx    ❌ CUT
├── SettingsSidebarContent.tsx    ❌ CUT
└── TasksSidebarContent.tsx       ❌ CUT
```

**Why Cut:** We're using header-based navigation from v1, not sidebar navigation.

---

## Phase 1 Checklist: Port v0.5 Landing Pages

### Files to Checkout from mvp-v0.5
```bash
# Landing pages
git checkout mvp-v0.5 -- src/app/about/page.tsx
git checkout mvp-v0.5 -- src/app/axiom-engine/page.tsx
git checkout mvp-v0.5 -- src/app/faq/page.tsx
git checkout mvp-v0.5 -- src/app/manifesto/page.tsx
git checkout mvp-v0.5 -- src/app/partners/page.tsx
git checkout mvp-v0.5 -- src/app/preview/page.tsx

# May need layout files too
git checkout mvp-v0.5 -- src/app/about/layout.tsx
git checkout mvp-v0.5 -- src/app/axiom-engine/layout.tsx
git checkout mvp-v0.5 -- src/app/faq/layout.tsx
git checkout mvp-v0.5 -- src/app/manifesto/layout.tsx
git checkout mvp-v0.5 -- src/app/partners/layout.tsx
git checkout mvp-v0.5 -- src/app/preview/layout.tsx
```

### After Checkout
- [ ] Fix any broken imports
- [ ] Update components to match v1 styling
- [ ] Test each page renders correctly
- [ ] Update header navigation to include these pages

---

## Phase 3 Checklist: Port v2 Productivity Features

### Calendar
```bash
# Page
git checkout main -- src/app/app/[workspaceId]/calendar/page.tsx

# Components
git checkout main -- src/components/app/calendar/DayView.tsx
git checkout main -- src/components/app/calendar/EventCreateForm.tsx
git checkout main -- src/components/app/calendar/EventList.tsx
git checkout main -- src/components/app/calendar/MonthGrid.tsx
git checkout main -- src/components/app/calendar/MonthView.tsx
git checkout main -- src/components/app/calendar/WeekView.tsx
```

### Tasks
```bash
# Page
git checkout main -- src/app/app/[workspaceId]/tasks/page.tsx

# Components
git checkout main -- src/components/app/tasks/KanbanBoard.tsx
git checkout main -- src/components/app/tasks/KanbanColumn.tsx
git checkout main -- src/components/app/tasks/TaskCard.tsx
git checkout main -- src/components/app/tasks/TaskCreateForm.tsx
git checkout main -- src/components/app/tasks/TaskDeleteDialog.tsx
git checkout main -- src/components/app/tasks/TaskEditDialog.tsx
```

### Analytics
```bash
# Page
git checkout main -- src/app/app/[workspaceId]/analytics/page.tsx

# Components
git checkout main -- src/components/app/analytics/ActivityChart.tsx
git checkout main -- src/components/app/analytics/GuideProgressList.tsx
git checkout main -- src/components/app/analytics/StatsCards.tsx
```

### Archive
```bash
# Page
git checkout main -- src/app/app/[workspaceId]/archive/page.tsx

# Components
git checkout main -- src/components/app/archive/ArchivedGuideList.tsx
```

### After Checkout
- [ ] Update route structure (workspaceId handling)
- [ ] Remove sidebar dependencies
- [ ] Update styling to match v1
- [ ] Add per-guide filtering
- [ ] Test each feature

---

## Key Differences Summary

### Navigation Philosophy
- **v1:** Header-based, simple
- **v2:** Icon sidebar + TabBar, complex
- **v3:** Header-based (v1 style) + productivity features (v2)

### Routing Structure
- **v1:** `/app/` with view components
- **v2:** `/app/[workspaceId]/[feature]` with pages
- **v3:** Hybrid - `/app/[workspaceId]/` routes but header nav

### Design Language
- **v1:** Clean, professional, minimal
- **v2:** Colorful, playful, Notion-like
- **v3:** Clean and professional (v1 style)

---

## What We're Building

### Final v3 Structure
```
src/app/
├── app/
│   └── [workspaceId]/
│       ├── page.tsx (main app, redirect logic)
│       ├── guide/[guideId]/page.tsx (3-panel from v1 + per-guide tabs)
│       ├── discover/page.tsx (from v2)
│       ├── library/page.tsx (from v2)
│       ├── calendar/page.tsx (from v2, adapted)
│       ├── tasks/page.tsx (from v2, adapted)
│       ├── analytics/page.tsx (from v2, simplified)
│       ├── archive/page.tsx (from v2)
│       ├── settings/page.tsx (from v1/v2)
│       └── note/[noteId]/page.tsx (blank notes)
│
├── guides/page.tsx (public guide browser)
├── library/page.tsx (public reading browser)
│
├── about/page.tsx (from v0.5)
├── manifesto/page.tsx (from v0.5)
├── faq/page.tsx (from v0.5)
├── partners/page.tsx (from v0.5)
├── axiom-engine/page.tsx (from v0.5)
├── preview/page.tsx (from v0.5)
│
├── how-it-works/page.tsx (from v1)
├── privacy/page.tsx (from v1)
├── terms/page.tsx (from v1)
│
├── login/page.tsx
├── signup/page.tsx
└── page.tsx (landing page)
```

---

## Next Steps

1. ✅ **Mapped file structures** - You are here
2. **Phase 1:** Port v0.5 landing pages
3. **Phase 2:** Database terminology migration
4. **Phase 3:** Port v2 productivity features
5. Continue through implementation plan...

Ready to start Phase 1!
