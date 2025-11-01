# MVP v3 Implementation Plan

## Overview

This document outlines the step-by-step process to build v3 by combining:
- **v0.5**: Landing pages and positioning
- **v1**: Clean UX, 3-panel interface, visual style
- **v2**: Productivity features (calendar, tasks, analytics)

**Starting Point:** mvp-v3 branch (currently based on mvp-v1)

---

## Phase 1: Foundation Setup

### Goal
Set up the v3 branch with v1 as base and port all v0.5 landing pages.

### Tasks

#### 1.1 Verify Base Setup
- [x] Confirm mvp-v3 branch exists and is based on mvp-v1
- [x] Confirm v1 app structure is intact
- [x] Confirm v1 visual style (Geist fonts, clean aesthetic) is present

#### 1.2 Port v0.5 Landing Pages
**Files to restore from mvp-v0.5:**

```bash
# Restore deleted pages
src/app/about/page.tsx
src/app/axiom-engine/page.tsx
src/app/faq/page.tsx
src/app/manifesto/page.tsx
src/app/partners/page.tsx
src/app/preview/page.tsx
```

**Implementation:**
1. Check out each file from mvp-v0.5
2. Update any broken imports/dependencies
3. Ensure they work with v1's layout system
4. Update styling to match v1's clean aesthetic (if needed)

**Verification:**
- [ ] All 6 landing pages render without errors
- [ ] Pages use v1's header/footer
- [ ] Pages match v1's visual style
- [ ] Links in header navigate correctly

#### 1.3 Update Header Navigation
**File:** `src/components/layout/header.tsx`

Add back navigation structure from v0.5:
```tsx
Company ▾          Product ▾        Browse ▾         [Get Started]
- Manifesto        - How It Works   - Guides
- About            - Preview        - Readings
- FAQ
- Partners
- Axiom Engine
```

**Implementation:**
1. Review v0.5's header structure
2. Port over dropdown menus
3. Keep v1's visual styling
4. Update links to match new page structure

**Verification:**
- [ ] All dropdown menus work
- [ ] Navigation is intuitive
- [ ] Visual style matches v1
- [ ] Mobile responsive

#### 1.4 Test & Commit
- [ ] Test all landing pages
- [ ] Fix any styling inconsistencies
- [ ] Commit: "Phase 1: Port v0.5 landing pages to v3"

---

## Phase 2: Database & Terminology Migration

### Goal
Rename database schema and update all references from templates/prompts/articles to guides/questions/readings.

### Tasks

#### 2.1 Database Schema Migration
**Create migration file:** `supabase/migrations/YYYYMMDD_v3_terminology_migration.sql`

```sql
-- Rename tables
ALTER TABLE templates RENAME TO guides;
ALTER TABLE template_prompts RENAME TO guide_questions;
ALTER TABLE articles RENAME TO readings;
ALTER TABLE user_templates RENAME TO user_guides;
ALTER TABLE template_responses RENAME TO question_responses;

-- Rename columns
ALTER TABLE guides RENAME COLUMN template_id TO guide_id;
ALTER TABLE guide_questions RENAME COLUMN prompt_id TO question_id;
ALTER TABLE guide_questions RENAME COLUMN template_id TO guide_id;
ALTER TABLE readings RENAME COLUMN article_id TO reading_id;
ALTER TABLE user_guides RENAME COLUMN template_id TO guide_id;
ALTER TABLE question_responses RENAME COLUMN prompt_id TO question_id;
ALTER TABLE question_responses RENAME COLUMN template_id TO guide_id;

-- Update indexes and constraints (generate based on existing schema)
```

**Verification:**
- [ ] Migration runs without errors on local Supabase
- [ ] All data preserved
- [ ] Queries work with new names

#### 2.2 Update TypeScript Types
**Files to update:**
```
src/types/template.ts → src/types/guide.ts
src/types/article.ts → src/types/reading.ts
```

**Changes:**
```typescript
// OLD (v1/v2)
interface Template { template_id, prompts, ... }
interface Prompt { prompt_id, ... }
interface Article { article_id, ... }

// NEW (v3)
interface Guide { guide_id, questions, ... }
interface Question { question_id, ... }
interface Reading { reading_id, ... }
```

**Verification:**
- [ ] All types compile without errors
- [ ] No references to old terminology in type files

#### 2.3 Update API Routes
**Files to update:**
```
src/app/api/templates/ → src/app/api/guides/
src/app/api/prompts/ → src/app/api/questions/
src/app/api/articles/ → src/app/api/readings/
```

**Changes:**
- Rename folders/files
- Update endpoint logic to use new table/column names
- Update return types

**Verification:**
- [ ] All API routes respond correctly
- [ ] Data fetching works with new schema
- [ ] No console errors

#### 2.4 Update Registry Files
**Files to update:**
```
src/registry/templates.ts → src/registry/guides.ts
```

**Changes:**
- Update imports
- Rename exported arrays/functions
- Update references throughout codebase

**Verification:**
- [ ] Guide registry loads correctly
- [ ] Guides display in browser
- [ ] No broken references

#### 2.5 Global Find & Replace
**Search and replace throughout codebase:**
```
"template" → "guide" (case-sensitive, selective)
"Template" → "Guide"
"prompt" → "question"
"Prompt" → "Question"
"article" → "reading"
"Article" → "Reading"
```

**Be careful with:**
- CSS class names (keep if stable)
- File paths (already renamed)
- Comments (update for clarity)
- Don't replace "Templata" (app name)

**Files to check:**
- All component files in `src/components/`
- All page files in `src/app/`
- All lib files in `src/lib/`
- All hook files in `src/hooks/`

**Verification:**
- [ ] App compiles without errors
- [ ] No references to old terminology in UI
- [ ] All features still work

#### 2.6 Test & Commit
- [ ] Full app test (guide browsing, question answering, reading viewing)
- [ ] Commit: "Phase 2: Migrate terminology to guides/questions/readings"

---

## Phase 3: Port v2 Productivity Features

### Goal
Integrate calendar, tasks, and analytics from v2 without icon sidebar or cutesy UX.

### Tasks

#### 3.1 Port Workspace System (Simplified)
**From v2:**
```
src/app/app/[workspaceId]/
```

**Keep:**
- Workspace routing structure
- Single workspace per user (for now)
- Workspace context/state management

**Cut:**
- Multiple workspace support (defer)
- Workspace switcher UI
- Workspace icons/customization

**Implementation:**
1. Copy workspace routing structure from v2
2. Simplify to single workspace
3. Auto-create workspace on signup
4. Remove workspace switching UI

**Files to port/adapt:**
```
src/app/app/[workspaceId]/layout.tsx (simplified)
src/contexts/workspace-context.tsx (simplified)
```

**Verification:**
- [ ] Workspace routing works
- [ ] Single workspace per user
- [ ] No workspace switcher in UI

#### 3.2 Port Calendar Feature
**From v2:**
```
src/app/app/[workspaceId]/calendar/page.tsx
src/components/app/calendar/MonthView.tsx
src/components/app/calendar/WeekView.tsx
src/components/app/calendar/DayView.tsx
src/components/app/calendar/EventList.tsx
src/components/app/calendar/EventCreateForm.tsx
```

**Adapt for v3:**
1. Update styling to match v1 aesthetic (clean, professional)
2. Remove cutesy icons/colors
3. Add per-guide filtering dropdown
4. Simplify to Month/Week views (cut Day view if redundant)
5. Integrate with guide system

**New component structure:**
```
src/components/app/calendar/
  ├── CalendarView.tsx (main container)
  ├── MonthView.tsx (adapted from v2)
  ├── WeekView.tsx (adapted from v2)
  ├── EventList.tsx (adapted from v2)
  ├── EventForm.tsx (adapted from v2)
  └── GuideFilter.tsx (NEW - filter by guide)
```

**Features to include:**
- View events across all guides
- Filter by specific guide
- Create events tagged to guides
- Month/Week toggle
- Clean, minimal design

**Verification:**
- [ ] Calendar renders without errors
- [ ] Can create/edit/delete events
- [ ] Per-guide filtering works
- [ ] Styling matches v1 aesthetic
- [ ] Mobile responsive

#### 3.3 Port Tasks Feature
**From v2:**
```
src/app/app/[workspaceId]/tasks/page.tsx
src/components/app/tasks/ (various components)
```

**Adapt for v3:**
1. Simplify to list or kanban view
2. Add per-guide filtering
3. Update styling to match v1
4. Remove excessive animations/transitions

**New component structure:**
```
src/components/app/tasks/
  ├── TasksView.tsx (main container)
  ├── TaskList.tsx (simple list view)
  ├── TaskCard.tsx (individual task)
  ├── TaskForm.tsx (create/edit form)
  └── GuideFilter.tsx (filter by guide)
```

**Features to include:**
- View tasks across all guides
- Filter by guide
- Create tasks tagged to guides
- Mark complete/incomplete
- Due dates integration with calendar
- Simple, clean interface

**Verification:**
- [ ] Tasks view renders correctly
- [ ] Can create/edit/delete tasks
- [ ] Per-guide filtering works
- [ ] Styling matches v1
- [ ] Mobile responsive

#### 3.4 Port Analytics Feature (Simplified)
**From v2:**
```
src/app/app/[workspaceId]/analytics/page.tsx
src/components/app/analytics/ActivityChart.tsx
src/components/app/analytics/StatsCards.tsx
src/components/app/analytics/GuideProgressList.tsx
```

**Simplify for v3:**
- Keep progress tracking per guide
- Remove complex charts
- Focus on: % complete, questions answered, readings read
- Simple dashboard with key metrics

**New component structure:**
```
src/components/app/analytics/
  ├── AnalyticsView.tsx (main container)
  ├── ProgressCards.tsx (simple stats cards)
  └── GuideProgressList.tsx (adapted from v2)
```

**Metrics to show:**
- Per guide: % complete, questions answered, readings read
- Overall: active guides, total progress, streak (optional)
- Clean, minimal design

**Verification:**
- [ ] Analytics view renders correctly
- [ ] Metrics calculate accurately
- [ ] Per-guide breakdown works
- [ ] Styling matches v1

#### 3.5 Port Archive Feature
**From v2:**
```
src/app/app/[workspaceId]/archive/page.tsx
src/components/app/archive/ArchivedGuideList.tsx
```

**Adapt for v3:**
1. Simple list of archived guides
2. Can unarchive
3. Matches v1 styling

**New component structure:**
```
src/components/app/archive/
  ├── ArchiveView.tsx (main container)
  └── ArchivedGuideList.tsx (adapted from v2)
```

**Verification:**
- [ ] Archive view works
- [ ] Can archive/unarchive guides
- [ ] Styling matches v1

#### 3.6 Test & Commit
- [ ] Test all new views (calendar, tasks, analytics, archive)
- [ ] Verify per-guide functionality works
- [ ] Commit: "Phase 3: Port productivity features from v2"

---

## Phase 4: Navigation & Routing Integration

### Goal
Integrate new views into v1's header-based navigation (no icon sidebar).

### Tasks

#### 4.1 Update Header Navigation
**File:** `src/components/layout/header.tsx`

**Add app navigation items:**
```tsx
// When logged in and in app
[My Guides ▾]  |  Discover  |  Library  |  Notes  Calendar  Tasks  Analytics  |  [Settings]
```

**Implementation:**
1. Add conditional rendering (public vs app header)
2. Add "My Guides" dropdown (lists user's active guides)
3. Add main view links: Notes, Calendar, Tasks, Analytics
4. Keep clean, horizontal layout (no sidebar)
5. Responsive mobile menu

**Verification:**
- [ ] Header adapts based on route (public vs app)
- [ ] My Guides dropdown works
- [ ] All view links navigate correctly
- [ ] Mobile menu works

#### 4.2 Update Routing Structure
**Current v1 structure:**
```
/app/page.tsx (main app view)
/app/settings/page.tsx
```

**New v3 structure:**
```
/app/[workspaceId]/page.tsx (redirects to active guide or discover)
/app/[workspaceId]/guide/[guideId]/page.tsx (3-panel guide view)
/app/[workspaceId]/discover/page.tsx (browse guides)
/app/[workspaceId]/library/page.tsx (browse readings)
/app/[workspaceId]/calendar/page.tsx
/app/[workspaceId]/tasks/page.tsx
/app/[workspaceId]/analytics/page.tsx
/app/[workspaceId]/archive/page.tsx
/app/[workspaceId]/settings/page.tsx
/app/[workspaceId]/note/[noteId]/page.tsx (blank note)
```

**Implementation:**
1. Create new route structure
2. Migrate v1's guide view to new path
3. Add new productivity routes
4. Set up proper redirects

**Verification:**
- [ ] All routes work
- [ ] Redirects function correctly
- [ ] Deep linking works

#### 4.3 "My Guides" Dropdown Logic
**Component:** `src/components/app/layout/MyGuidesDropdown.tsx` (NEW)

**Functionality:**
- Lists user's active guides (max 10, then "View all")
- Quick switch between guides
- "+ New Guide" button at bottom
- Shows guide icon/emoji
- Highlights current guide

**Verification:**
- [ ] Dropdown renders correctly
- [ ] Can switch between guides
- [ ] "+ New Guide" opens creation flow
- [ ] Current guide is highlighted

#### 4.4 Test & Commit
- [ ] Test navigation flow
- [ ] Verify all routes accessible
- [ ] Test My Guides dropdown
- [ ] Commit: "Phase 4: Integrate navigation and routing"

---

## Phase 5: Guide View (3-Panel Core Experience)

### Goal
Preserve v1's 3-panel interface while integrating v2's per-guide calendar/tasks.

### Tasks

#### 5.1 Maintain v1's 3-Panel Layout
**File:** `src/app/app/[workspaceId]/guide/[guideId]/page.tsx`

**Layout structure:**
```
┌────────────────────────────────────────────────────────────────┐
│ Header with: [My Guides ▾] Discover Library  Notes Calendar... │
├───────────┬────────────────────┬─────────────────────────────────┤
│ Questions │   Answers          │   Readings                      │
│ (left)    │   (center)         │   (right)                       │
├───────────┴────────────────────┴─────────────────────────────────┤
│ Per-Guide Tabs: Overview | Calendar | Tasks | Notes             │
└────────────────────────────────────────────────────────────────┘
```

**Key requirements:**
- Keep v1's 3-panel layout for Questions/Answers/Readings
- Add tabbed interface below for per-guide views
- Clean, professional styling
- Responsive (stack panels on mobile)

**Implementation:**
1. Keep v1's guide view component
2. Add tab navigation below main panels
3. Tab options: Overview (3-panel), Calendar, Tasks, Notes
4. Preserve v1's visual style

**Verification:**
- [ ] 3-panel layout works
- [ ] Tabs switch correctly
- [ ] Styling matches v1
- [ ] Responsive on mobile

#### 5.2 Per-Guide Calendar Tab
**Component:** `src/components/app/guide/GuideCalendar.tsx` (NEW)

**Functionality:**
- Shows only events tagged to current guide
- Can create new events for this guide
- Month/Week toggle
- Simpler than global calendar view

**Verification:**
- [ ] Shows only current guide's events
- [ ] Can create/edit events
- [ ] Integrates with global calendar

#### 5.3 Per-Guide Tasks Tab
**Component:** `src/components/app/guide/GuideTasks.tsx` (NEW)

**Functionality:**
- Shows only tasks tagged to current guide
- Can create new tasks for this guide
- Simple list view
- Integrates with global tasks view

**Verification:**
- [ ] Shows only current guide's tasks
- [ ] Can create/edit tasks
- [ ] Integrates with global tasks

#### 5.4 Per-Guide Notes Tab
**Component:** `src/components/app/guide/GuideNotes.tsx` (NEW)

**Functionality:**
- Blank note space for freeform planning
- Per guide (each guide has its own note space)
- Rich text editor (keep v1's editor if it exists)

**Verification:**
- [ ] Note editor works
- [ ] Content saves per guide
- [ ] Formatting works

#### 5.5 Test & Commit
- [ ] Test 3-panel layout
- [ ] Test all tabs within guide view
- [ ] Verify per-guide filtering works
- [ ] Commit: "Phase 5: Enhance guide view with per-guide tabs"

---

## Phase 6: Discovery & Library Views

### Goal
Create browse experiences for guides and readings.

### Tasks

#### 6.1 Discover View (Guide Browser)
**File:** `src/app/app/[workspaceId]/discover/page.tsx`

**Adapt from:**
- v1's template browser (if exists)
- v2's discover view

**Features:**
- Browse all available guides
- Category filtering
- Search functionality
- Add to "My Guides" button
- Clean card layout

**Verification:**
- [ ] All guides display
- [ ] Categories filter correctly
- [ ] Search works
- [ ] Can add guides to workspace

#### 6.2 Library View (Reading Browser)
**File:** `src/app/app/[workspaceId]/library/page.tsx`

**Features:**
- Browse all available readings
- Category/topic filtering
- Search functionality
- Can open reading in panel
- Clean list/card layout

**Verification:**
- [ ] All readings display
- [ ] Filtering works
- [ ] Search works
- [ ] Can open readings

#### 6.3 Public Browse Pages
**Files:**
```
src/app/guides/page.tsx (public guide browser)
src/app/library/page.tsx (public reading browser)
```

**Features:**
- Similar to discover/library but public-facing
- Show preview of content
- CTA to sign up to access full guide

**Verification:**
- [ ] Public pages work
- [ ] Preview content displays
- [ ] CTA buttons work

#### 6.4 Test & Commit
- [ ] Test all browse views
- [ ] Verify search and filtering
- [ ] Commit: "Phase 6: Add discovery and library views"

---

## Phase 7: Blank Notes Feature

### Goal
Add freeform note-taking capability (not tied to guides).

### Tasks

#### 7.1 Blank Note View
**File:** `src/app/app/[workspaceId]/note/[noteId]/page.tsx`

**Features:**
- Rich text editor
- Note title
- Last edited timestamp
- Clean, distraction-free interface
- Matches v1 styling

**Implementation:**
1. Port v2's blank note if exists, or create new
2. Use v1's text editor component
3. Simple layout (just title + editor)

**Verification:**
- [ ] Can create blank notes
- [ ] Can edit and save
- [ ] Notes persist
- [ ] Clean UI

#### 7.2 Note List/Navigation
**Component:** `src/components/app/notes/NotesList.tsx` (NEW)

**Functionality:**
- Shows list of blank notes
- Can create new
- Can delete
- Search/filter notes

**Where to show:**
- In header nav? "Notes" link?
- In My Guides dropdown? Separate section?

**Decision needed:** How to surface blank notes in navigation?

**Verification:**
- [ ] Note list renders
- [ ] Can navigate between notes
- [ ] Can create/delete notes

#### 7.3 Test & Commit
- [ ] Test note creation/editing
- [ ] Test navigation to notes
- [ ] Commit: "Phase 7: Add blank notes feature"

---

## Phase 8: Settings & User Management

### Goal
Comprehensive settings page for user preferences and account management.

### Tasks

#### 8.1 Settings View
**File:** `src/app/app/[workspaceId]/settings/page.tsx`

**Sections:**
- Account (email, password, delete account)
- Preferences (theme, notifications, defaults)
- Billing (if applicable)
- Data export

**Keep v1's settings if they exist, or port from v2**

**Verification:**
- [ ] Settings page works
- [ ] Can update preferences
- [ ] Account management works

#### 8.2 Test & Commit
- [ ] Test all settings
- [ ] Commit: "Phase 8: Add settings and user management"

---

## Phase 9: Polish & Refinement

### Goal
Final polish pass to ensure consistency and quality.

### Tasks

#### 9.1 Visual Consistency Pass
- [ ] All pages use v1's visual style (Geist fonts, colors, spacing)
- [ ] Remove any cutesy elements from ported v2 components
- [ ] Consistent button styles
- [ ] Consistent card styles
- [ ] Consistent typography hierarchy

#### 9.2 Mobile Responsiveness
- [ ] Test all views on mobile
- [ ] 3-panel layout stacks correctly
- [ ] Navigation menu works on mobile
- [ ] Forms are mobile-friendly

#### 9.3 Performance Optimization
- [ ] Check bundle size
- [ ] Optimize images
- [ ] Lazy load components where appropriate
- [ ] Test load times

#### 9.4 Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader friendly
- [ ] Proper ARIA labels
- [ ] Color contrast meets standards

#### 9.5 Error Handling
- [ ] Graceful error states
- [ ] Loading states
- [ ] Empty states
- [ ] 404 page

#### 9.6 Copy & Messaging
- [ ] All UI copy uses new terminology (guides, questions, readings)
- [ ] Consistent tone (professional, helpful)
- [ ] Clear CTAs
- [ ] Helpful empty states

#### 9.7 Test & Commit
- [ ] Full app test
- [ ] Mobile test
- [ ] Commit: "Phase 9: Polish and refinement"

---

## Phase 10: Testing & Launch Prep

### Goal
Comprehensive testing before launch.

### Tasks

#### 10.1 User Flow Testing
Test these key flows:
- [ ] Sign up → onboarding → add first guide
- [ ] Browse guides → add to workspace → answer questions
- [ ] Read readings within guide
- [ ] Create calendar event for guide
- [ ] Create task for guide
- [ ] View cross-guide calendar
- [ ] View cross-guide tasks
- [ ] Check analytics
- [ ] Archive completed guide
- [ ] Create blank note
- [ ] Browse library

#### 10.2 Cross-browser Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers (iOS Safari, Chrome)

#### 10.3 Database Testing
- [ ] All migrations run successfully
- [ ] Data integrity maintained
- [ ] Queries perform well
- [ ] Indexes are optimized

#### 10.4 Security Review
- [ ] Auth flows secure
- [ ] API routes protected
- [ ] User data isolated
- [ ] No exposed secrets

#### 10.5 SEO Optimization
- [ ] Meta tags on all pages
- [ ] Open Graph images
- [ ] Sitemap generated
- [ ] Robots.txt configured
- [ ] Schema markup (landing pages)

#### 10.6 Analytics Setup
- [ ] Analytics tracking (if applicable)
- [ ] Error monitoring (Sentry, etc.)
- [ ] Performance monitoring

#### 10.7 Documentation
- [ ] Update README
- [ ] Create CHANGELOG
- [ ] Document new features
- [ ] Update any API docs

#### 10.8 Final Commit
- [ ] Commit: "Phase 10: Launch prep and final testing"

---

## Phase 11: Deployment

### Goal
Deploy v3 to production.

### Tasks

#### 11.1 Pre-deployment Checklist
- [ ] All tests passing
- [ ] No console errors
- [ ] All features working
- [ ] Database migrations ready
- [ ] Environment variables set

#### 11.2 Database Migration (Production)
- [ ] Backup production database
- [ ] Run terminology migration
- [ ] Verify data integrity
- [ ] Test queries

#### 11.3 Deploy to Staging
- [ ] Deploy to staging environment
- [ ] Full testing on staging
- [ ] Invite team to test
- [ ] Fix any issues

#### 11.4 Deploy to Production
- [ ] Deploy to production (main branch)
- [ ] Monitor for errors
- [ ] Test critical flows
- [ ] Monitor performance

#### 11.5 Post-deployment
- [ ] Announcement (if applicable)
- [ ] Monitor user feedback
- [ ] Track analytics
- [ ] Address any bugs

---

## Success Metrics

### Key Metrics to Track

#### User Engagement
- Guide completion rate
- Questions answered per guide
- Readings read per guide
- Return rate (% users who come back)

#### Feature Usage
- % users who use calendar
- % users who use tasks
- % users who create blank notes
- Average guides per user

#### Conversion
- Signup conversion rate
- Trial to paid conversion (if applicable)
- Feature adoption rates

#### Quality
- User-reported bugs
- Support tickets
- User satisfaction (NPS)

---

## Risk Mitigation

### Potential Risks

#### Risk: Migration Breaks Existing Data
**Mitigation:**
- Test migrations thoroughly on local/staging
- Backup production database before migration
- Have rollback plan ready

#### Risk: Users Confused by New Terminology
**Mitigation:**
- Clear onboarding explaining terminology
- Tooltips on first use
- FAQ addressing terminology

#### Risk: Performance Issues with New Features
**Mitigation:**
- Load testing before launch
- Lazy loading where appropriate
- Optimize queries
- Monitor performance metrics

#### Risk: UI/UX Regression
**Mitigation:**
- Thorough testing of ported features
- Visual regression testing
- Beta testing with select users
- Gradual rollout if possible

---

## Timeline Estimate

### Phase-by-Phase Estimates

| Phase | Tasks | Estimated Time |
|-------|-------|----------------|
| 1. Foundation Setup | Port v0.5 pages, update header | 2-3 days |
| 2. Database Migration | Schema changes, type updates | 2-3 days |
| 3. Port Productivity Features | Calendar, tasks, analytics, archive | 5-7 days |
| 4. Navigation & Routing | Header nav, routing structure | 2-3 days |
| 5. Guide View | 3-panel + per-guide tabs | 3-4 days |
| 6. Discovery & Library | Browse views | 2-3 days |
| 7. Blank Notes | Note editor and navigation | 1-2 days |
| 8. Settings | Settings page | 1-2 days |
| 9. Polish | Visual consistency, responsive, a11y | 3-4 days |
| 10. Testing | User flows, cross-browser, security | 3-4 days |
| 11. Deployment | Staging, production deploy | 1-2 days |

**Total Estimate: 25-35 days (5-7 weeks)**

Note: This assumes one developer working full-time. With multiple developers or part-time work, adjust accordingly.

---

## Next Steps

1. **Review this implementation plan** - Does this approach make sense?
2. **Get alignment on timeline** - Is 5-7 weeks realistic?
3. **Start Phase 1** - Begin with foundation setup
4. **Daily standups** - Track progress, address blockers
5. **Weekly demos** - Show progress, get feedback

---

## Notes & Open Questions

### Open Questions
1. **Workspace naming:** Still call it "workspace" or something else?
2. **Blank notes navigation:** Where should blank notes live in the nav?
3. **Onboarding flow:** Do we need a new onboarding for v3?
4. **Pricing/billing:** Any changes to pricing model with new features?
5. **Beta testing:** Should we do a beta period before full launch?

### Decisions Needed
- [ ] Confirm terminology: Guides, Questions, Readings ✅
- [ ] Confirm navigation structure
- [ ] Confirm which v2 features to cut
- [ ] Confirm timeline expectations
- [ ] Confirm deployment strategy (gradual vs all-at-once)

---

## Appendix: File Structure Comparison

### v1 Structure (Base)
```
src/
├── app/
│   ├── app/
│   │   ├── page.tsx
│   │   └── settings/
│   ├── articles/
│   ├── templates/
│   ├── login/
│   ├── signup/
│   └── page.tsx
├── components/
├── lib/
└── types/
```

### v3 Target Structure
```
src/
├── app/
│   ├── app/
│   │   └── [workspaceId]/
│   │       ├── page.tsx (redirect)
│   │       ├── guide/[guideId]/page.tsx (3-panel)
│   │       ├── discover/page.tsx
│   │       ├── library/page.tsx
│   │       ├── calendar/page.tsx
│   │       ├── tasks/page.tsx
│   │       ├── analytics/page.tsx
│   │       ├── archive/page.tsx
│   │       ├── settings/page.tsx
│   │       └── note/[noteId]/page.tsx
│   ├── guides/page.tsx (public)
│   ├── library/page.tsx (public)
│   ├── about/page.tsx (v0.5)
│   ├── manifesto/page.tsx (v0.5)
│   ├── faq/page.tsx (v0.5)
│   ├── partners/page.tsx (v0.5)
│   ├── axiom-engine/page.tsx (v0.5)
│   ├── preview/page.tsx (v0.5)
│   ├── login/
│   ├── signup/
│   └── page.tsx
├── components/
│   ├── app/
│   │   ├── calendar/ (from v2, adapted)
│   │   ├── tasks/ (from v2, adapted)
│   │   ├── analytics/ (from v2, simplified)
│   │   ├── archive/ (from v2, adapted)
│   │   ├── guide/ (NEW - guide-specific components)
│   │   └── notes/ (NEW - blank notes)
│   └── layout/
│       ├── header.tsx (updated)
│       └── MyGuidesDropdown.tsx (NEW)
├── lib/
├── types/
│   ├── guide.ts (renamed from template.ts)
│   ├── question.ts (renamed from prompt.ts)
│   └── reading.ts (renamed from article.ts)
└── contexts/
    └── workspace-context.tsx
```

---

**End of Implementation Plan**

Ready to start Phase 1?
