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

## Phase 3: Port v2 Productivity Features as View Components

### Goal
Port calendar, tasks, analytics, and archive from v2 as new view components (like TemplatesView/OverviewView pattern).

### Architecture (SIMPLE - Keep v1's Pattern)
**v1 uses component-based views that switch:**
```tsx
// Current v1 pattern
{currentView === 'templates' && <TemplatesView />}
{currentView === 'overview' && <OverviewView />}
{currentView === 'reflection' && <ReflectionView />}
```

**v3 extends this with more views:**
```tsx
{currentView === 'guides' && <GuidesView />}      // renamed from TemplatesView
{currentView === 'overview' && <OverviewView />}  // keep as-is
{currentView === 'calendar' && <CalendarView />}  // NEW from v2
{currentView === 'tasks' && <TasksView />}        // NEW from v2
{currentView === 'analytics' && <AnalyticsView />} // NEW from v2
{currentView === 'archive' && <ArchiveView />}    // NEW from v2
// Delete ReflectionView completely
```

**NO routing changes. NO workspace ID paths. Just add more view components.**

### Tasks

#### 3.1 Rename TemplatesView → GuidesView
**Files to update:**
```
src/app/app/views/TemplatesView.tsx → GuidesView.tsx
```

**Implementation:**
1. Rename file
2. Keep EXACT same 3-panel layout
3. Update internal variable names (templates → guides, prompts → questions, articles → readings)
4. No structural changes

**Verification:**
- [ ] GuidesView renders with 3-panel layout
- [ ] Can select guides
- [ ] Can answer questions
- [ ] Can read readings
- [ ] All functionality preserved

#### 3.2 Create CalendarView Component
**Port from v2, adapt as view component:**

**Create new file:** `src/app/app/views/CalendarView.tsx`

**Port these components from v2:**
```
src/components/app/calendar/MonthView.tsx
src/components/app/calendar/WeekView.tsx
src/components/app/calendar/EventList.tsx
src/components/app/calendar/EventCreateForm.tsx
```

**Implementation:**
1. Create CalendarView.tsx as main container (like TemplatesView pattern)
2. Port v2's calendar components
3. Update styling to match v1 aesthetic (clean, professional, remove cutesy elements)
4. Add per-guide filtering dropdown
5. Integrate with guide system (events tagged to guides)

**Features:**
- View events across all guides
- Filter by specific guide
- Create/edit/delete events
- Month/Week toggle
- Clean v1 styling

**Verification:**
- [ ] CalendarView renders
- [ ] Can create/edit/delete events
- [ ] Per-guide filtering works
- [ ] Styling matches v1
- [ ] Mobile responsive

#### 3.3 Create TasksView Component
**Port from v2, adapt as view component:**

**Create new file:** `src/app/app/views/TasksView.tsx`

**Port these components from v2:**
```
src/components/app/tasks/KanbanBoard.tsx
src/components/app/tasks/TaskCard.tsx
src/components/app/tasks/TaskCreateForm.tsx
```

**Implementation:**
1. Create TasksView.tsx as main container
2. Port v2's task components
3. Update styling to match v1
4. Add per-guide filtering
5. Remove excessive animations

**Features:**
- View tasks across all guides
- Filter by guide
- Create/edit/delete tasks
- Kanban or list view
- Due dates

**Verification:**
- [ ] TasksView renders
- [ ] Can create/edit/delete tasks
- [ ] Per-guide filtering works
- [ ] Styling matches v1

#### 3.4 Create AnalyticsView Component (Simplified)
**Port from v2, simplify:**

**Create new file:** `src/app/app/views/AnalyticsView.tsx`

**Port these components from v2:**
```
src/components/app/analytics/StatsCards.tsx
src/components/app/analytics/GuideProgressList.tsx
```

**Implementation:**
1. Create AnalyticsView.tsx
2. Port simple stats cards (remove complex charts)
3. Focus on: % complete, questions answered, readings read
4. Per-guide progress list

**Features:**
- Per-guide progress stats
- Overall completion metrics
- Simple, clean dashboard

**Verification:**
- [ ] AnalyticsView renders
- [ ] Metrics calculate correctly
- [ ] Styling matches v1

#### 3.5 Create ArchiveView Component
**Port from v2:**

**Create new file:** `src/app/app/views/ArchiveView.tsx`

**Port from v2:**
```
src/components/app/archive/ArchivedGuideList.tsx
```

**Implementation:**
1. Create ArchiveView.tsx
2. Port archived guide list component
3. Add archive/unarchive functionality
4. Match v1 styling

**Verification:**
- [ ] ArchiveView renders
- [ ] Can archive/unarchive guides
- [ ] Styling matches v1

#### 3.6 Test & Commit
- [ ] Test all new views (calendar, tasks, analytics, archive)
- [ ] Verify per-guide functionality works
- [ ] Commit: "Phase 3: Port productivity features from v2"

---

## Phase 4: Update Navigation (Header Links)

### Goal
Update header to add links for new views. Keep v1's simple view-switching pattern.

### Tasks

#### 4.1 Update App Main Page to Handle View Switching
**File:** `src/app/app/page.tsx`

**Current v1 pattern (approximately):**
```tsx
const [currentView, setCurrentView] = useState('templates');

{currentView === 'templates' && <TemplatesView />}
{currentView === 'overview' && <OverviewView />}
{currentView === 'reflection' && <ReflectionView />}
```

**Update to v3 pattern:**
```tsx
const [currentView, setCurrentView] = useState('guides');

{currentView === 'guides' && <GuidesView />}
{currentView === 'overview' && <OverviewView />}
{currentView === 'calendar' && <CalendarView />}
{currentView === 'tasks' && <TasksView />}
{currentView === 'analytics' && <AnalyticsView />}
{currentView === 'archive' && <ArchiveView />}
// Delete ReflectionView
```

**Verification:**
- [ ] View switching works
- [ ] All views render correctly

#### 4.2 Update Header Navigation
**File:** `src/components/layout/header.tsx`

**Add navigation links for new views:**
```tsx
// When in app (/app route)
[My Guides ▾] | Overview | Calendar | Tasks | Analytics | Archive | [Settings]
```

**Implementation:**
1. Add links that call `setCurrentView('calendar')`, etc.
2. Add "My Guides" dropdown (lists user's guides, click to switch)
3. Keep clean, horizontal layout
4. Highlight active view

**Verification:**
- [ ] Header shows correct links when in app
- [ ] Clicking links switches views
- [ ] Active view is highlighted
- [ ] My Guides dropdown works
- [ ] Mobile responsive

#### 4.3 Delete ReflectionView
**File to delete:** `src/app/app/views/ReflectionView.tsx`

**Update:** Remove all references to ReflectionView

**Verification:**
- [ ] ReflectionView deleted
- [ ] No broken references
- [ ] App still works

#### 4.4 Test & Commit
- [ ] Test view switching
- [ ] Test all navigation links
- [ ] Commit: "Phase 4: Update navigation for new views"

---

## Phase 5: Polish & Per-Guide Features

### Goal
Add per-guide filtering to CalendarView and TasksView so users can see all events/tasks or filter by specific guide.

### Tasks

#### 5.1 Add Guide Filtering to CalendarView
**File:** `src/app/app/views/CalendarView.tsx`

**Implementation:**
1. Add dropdown: "All Guides" or select specific guide
2. Filter events based on selection
3. Clean UI that matches v1 styling

**Verification:**
- [ ] Can view all events across guides
- [ ] Can filter to specific guide
- [ ] Filtering works correctly

#### 5.2 Add Guide Filtering to TasksView
**File:** `src/app/app/views/TasksView.tsx`

**Implementation:**
1. Add dropdown: "All Guides" or select specific guide
2. Filter tasks based on selection
3. Clean UI that matches v1 styling

**Verification:**
- [ ] Can view all tasks across guides
- [ ] Can filter to specific guide
- [ ] Filtering works correctly

#### 5.3 Ensure GuidesView 3-Panel Layout is Perfect
**File:** `src/app/app/views/GuidesView.tsx`

**Verify:**
- [ ] 3-panel layout (guide picker | questions/answers | readings) works perfectly
- [ ] Responsive on mobile (panels stack)
- [ ] Styling matches v1 aesthetic
- [ ] All functionality preserved from TemplatesView

#### 5.4 Test & Commit
- [ ] Test guide filtering in calendar
- [ ] Test guide filtering in tasks
- [ ] Test GuidesView 3-panel
- [ ] Commit: "Phase 5: Add per-guide filtering and polish"

---

## Phase 6: Public Browse Pages (Optional - Can Defer)

### Goal
Add public guide and reading browsers (if not already exist in v1).

### Tasks

#### 6.1 Public Guides Page
**File:** `src/app/guides/page.tsx`

**Features:**
- Browse all available guides
- Category filtering
- Search functionality
- CTA to sign up
- Clean card layout matching v1 style

**Verification:**
- [ ] Guides page works
- [ ] Filtering works
- [ ] CTA buttons work

#### 6.2 Public Library/Readings Page
**File:** `src/app/library/page.tsx`

**Features:**
- Browse all available readings
- Category filtering
- Search functionality
- Can preview reading
- CTA to sign up

**Verification:**
- [ ] Library page works
- [ ] Filtering works
- [ ] Preview works

**Note:** This phase can be deferred if these pages already exist in v1 or aren't needed yet.

#### 6.3 Test & Commit (If Implemented)
- [ ] Test public browse pages
- [ ] Verify SEO/meta tags
- [ ] Commit: "Phase 6: Add public browse pages"

---

## Phase 7: Settings & User Management

### Goal
Comprehensive settings page for user preferences and account management.

### Tasks

#### 7.1 Settings View
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

#### 7.2 Test & Commit
- [ ] Test all settings
- [ ] Commit: "Phase 7: Add settings and user management"

---

## Phase 8: Polish & Refinement

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

#### 8.7 Test & Commit
- [ ] Full app test
- [ ] Mobile test
- [ ] Commit: "Phase 8: Polish and refinement"

---

## Phase 9: Testing & Launch Prep

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

#### 9.8 Final Commit
- [ ] Commit: "Phase 9: Launch prep and final testing"

---

## Phase 10: Deployment

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
| 3. Port Productivity Features | Rename TemplatesView, create CalendarView, TasksView, AnalyticsView, ArchiveView | 4-6 days |
| 4. Navigation | Update header links, wire view switching, delete ReflectionView | 1-2 days |
| 5. Per-Guide Features | Add guide filtering to calendar/tasks | 1-2 days |
| 6. Public Browse Pages | Public guides/library pages (optional, can defer) | 1-2 days |
| 7. Settings | Settings view (if not already exists) | 1 day |
| 8. Polish | Visual consistency, responsive, a11y | 2-3 days |
| 9. Testing | User flows, cross-browser, security | 2-3 days |
| 10. Deployment | Staging, production deploy | 1-2 days |

**Total Estimate: 17-27 days (3.5-5.5 weeks)**

Note: This assumes one developer working full-time. Significantly simpler than original plan since we're keeping v1's architecture and just adding view components.

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
