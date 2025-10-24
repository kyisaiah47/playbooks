# /app Rebuild: HeroWorkspace → Production

## Database Schema

### New Tables to Create

```sql
-- Workspaces
CREATE TABLE workspaces (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  icon TEXT, -- emoji
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Pages (hierarchical structure)
CREATE TABLE pages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  workspace_id UUID REFERENCES workspaces(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  icon TEXT, -- emoji
  parent_page_id UUID REFERENCES pages(id) ON DELETE CASCADE,
  guide_id TEXT REFERENCES guides(id),
  position INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- User Guide Instances (user working through a guide)
CREATE TABLE user_guides (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  workspace_id UUID REFERENCES workspaces(id) ON DELETE CASCADE,
  page_id UUID REFERENCES pages(id) ON DELETE SET NULL,
  guide_id TEXT REFERENCES guides(id) ON DELETE CASCADE,
  progress INTEGER DEFAULT 0, -- percentage
  archived BOOLEAN DEFAULT false,
  archived_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Tasks
CREATE TABLE tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  user_guide_id UUID REFERENCES user_guides(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'todo' CHECK (status IN ('todo', 'in_progress', 'done')),
  due_date DATE,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Calendar Events
CREATE TABLE calendar_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  date DATE NOT NULL,
  user_guide_id UUID REFERENCES user_guides(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Journal Entries
CREATE TABLE journal_entries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  title TEXT,
  content TEXT NOT NULL,
  tags TEXT[],
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Daily Notes
CREATE TABLE daily_notes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  content TEXT,
  agenda JSONB, -- tasks for the day
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id, date)
);

-- Reading Progress
CREATE TABLE user_reading_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  reading_id TEXT REFERENCES readings(id) ON DELETE CASCADE,
  completed BOOLEAN DEFAULT false,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id, reading_id)
);

-- Indexes
CREATE INDEX idx_workspaces_user_id ON workspaces(user_id);
CREATE INDEX idx_pages_workspace_id ON pages(workspace_id);
CREATE INDEX idx_pages_parent_page_id ON pages(parent_page_id);
CREATE INDEX idx_user_guides_user_id ON user_guides(user_id);
CREATE INDEX idx_user_guides_workspace_id ON user_guides(workspace_id);
CREATE INDEX idx_tasks_user_id ON tasks(user_id);
CREATE INDEX idx_tasks_user_guide_id ON tasks(user_guide_id);
CREATE INDEX idx_calendar_events_user_id ON calendar_events(user_id);
CREATE INDEX idx_calendar_events_date ON calendar_events(date);
CREATE INDEX idx_journal_entries_user_id ON journal_entries(user_id);
CREATE INDEX idx_daily_notes_user_id ON daily_notes(user_id);
CREATE INDEX idx_daily_notes_date ON daily_notes(date);
CREATE INDEX idx_user_reading_progress_user_id ON user_reading_progress(user_id);
```

---

## Component Structure

```
src/
├── app/
│   └── app/
│       └── [workspaceId]/
│           ├── layout.tsx              → IconBar + Sidebar + TabBar wrapper
│           ├── page.tsx                → Overview (dashboard)
│           ├── guides/
│           │   └── page.tsx            → Guides view (enhanced TemplatesView)
│           ├── discover/
│           │   └── page.tsx            → Browse library
│           ├── calendar/
│           │   └── page.tsx            → Calendar view
│           ├── tasks/
│           │   └── page.tsx            → Kanban board
│           ├── timeline/
│           │   └── page.tsx            → Gantt timeline
│           ├── daily/
│           │   └── page.tsx            → Daily note
│           ├── journal/
│           │   └── page.tsx            → Journal
│           ├── graph/
│           │   └── page.tsx            → Graph view
│           ├── library/
│           │   └── page.tsx            → Reading library
│           ├── analytics/
│           │   └── page.tsx            → Analytics
│           └── archive/
│               └── page.tsx            → Archive
│
└── components/
    └── app/
        ├── layout/
        │   ├── IconBar.tsx             → Left navigation (13 icons)
        │   ├── Sidebar.tsx             → Workspace pages / active guides
        │   ├── TabBar.tsx              → Multi-tab system
        │   └── WorkspaceSwitcher.tsx   → Dropdown
        │
        ├── guides/
        │   ├── GuideHeader.tsx         → Cover, icon, title, progress
        │   ├── QuestionList.tsx        → Left column (reuse from TemplatesView)
        │   ├── QuestionDetail.tsx      → Center column (reuse from TemplatesView)
        │   └── ReadingPanel.tsx        → Right column (reuse from TemplatesView)
        │
        ├── tasks/
        │   ├── KanbanBoard.tsx
        │   ├── KanbanColumn.tsx
        │   ├── TaskCard.tsx
        │   └── TaskCreateForm.tsx
        │
        ├── calendar/
        │   ├── MonthView.tsx
        │   ├── MonthGrid.tsx
        │   ├── EventList.tsx
        │   └── EventCreateForm.tsx
        │
        ├── timeline/
        │   ├── GanttView.tsx
        │   └── TimelineBar.tsx
        │
        ├── daily/
        │   ├── DailyNote.tsx
        │   └── AgendaList.tsx
        │
        ├── journal/
        │   ├── JournalEntry.tsx
        │   └── EntryList.tsx
        │
        ├── graph/
        │   └── GuideGraph.tsx
        │
        ├── library/
        │   ├── ReadingList.tsx
        │   └── ReadingCard.tsx
        │
        ├── analytics/
        │   ├── StatsCards.tsx
        │   ├── ActivityChart.tsx
        │   └── GuideProgressList.tsx
        │
        ├── archive/
        │   └── ArchivedGuideList.tsx
        │
        └── overview/
            ├── ActiveGuides.tsx        → (enhance from OverviewView)
            ├── RecentActivity.tsx
            └── QuickActions.tsx
```

---

## API Routes to Create

```
/api/workspaces
  GET    - List user's workspaces
  POST   - Create workspace

/api/workspaces/[id]
  GET    - Get workspace details
  PATCH  - Update workspace
  DELETE - Delete workspace

/api/workspaces/[id]/pages
  GET    - List pages in workspace
  POST   - Create page

/api/pages/[id]
  PATCH  - Update page
  DELETE - Delete page

/api/user-guides
  GET    - List user's active guides
  POST   - Create user guide instance

/api/user-guides/[id]
  PATCH  - Update progress/archive

/api/tasks
  GET    - List tasks (filter by status, guide, date)
  POST   - Create task

/api/tasks/[id]
  PATCH  - Update task
  DELETE - Delete task

/api/calendar
  GET    - List events (filter by date range)
  POST   - Create event

/api/calendar/[id]
  PATCH  - Update event
  DELETE - Delete event

/api/journal
  GET    - List entries
  POST   - Create entry

/api/journal/[id]
  GET    - Get entry
  PATCH  - Update entry
  DELETE - Delete entry

/api/daily-notes
  GET    - Get note for date
  POST   - Create/update daily note

/api/reading-progress
  GET    - Get user's reading progress
  POST   - Mark reading as complete
```

---

## State Management

### React Query Keys
```typescript
// Workspaces
['workspaces']
['workspace', workspaceId]
['workspace', workspaceId, 'pages']

// Guides
['user-guides', workspaceId]
['guide', guideId]
['guide', guideId, 'questions']
['guide', guideId, 'readings']

// Tasks
['tasks', { status?, guideId?, date? }]

// Calendar
['calendar-events', { startDate, endDate }]

// Journal
['journal-entries', { limit, offset }]
['journal-entry', entryId]

// Daily
['daily-note', date]

// Library
['reading-progress']
['readings', guideId]

// Analytics
['analytics', workspaceId]
```

### Zustand Store
```typescript
interface AppStore {
  // UI State
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void

  // Active workspace
  currentWorkspaceId: string | null
  setCurrentWorkspace: (id: string) => void

  // Tabs
  openTabs: Tab[]
  activeTabId: string | null
  addTab: (tab: Tab) => void
  removeTab: (id: string) => void
  setActiveTab: (id: string) => void
}
```

---

## URL Structure & Tab System

### URL Format
```
/app/[workspaceId]?tabs=wedding-guide,calendar,tasks&active=wedding-guide
```

### Tab Types
```typescript
type TabType =
  | 'guide'      // Guide page from workspace
  | 'discover'   // Discover view
  | 'calendar'   // Calendar
  | 'tasks'      // Tasks
  | 'timeline'   // Timeline
  | 'daily'      // Daily note
  | 'journal'    // Journal
  | 'graph'      // Graph
  | 'library'    // Library
  | 'analytics'  // Analytics
  | 'archive'    // Archive
  | 'settings'   // Settings

interface Tab {
  id: string
  type: TabType
  label: string
  icon?: string
  pageId?: string  // For guide tabs
}
```

### Tab Management
- Parse tabs from URL searchParams
- Sync state with URL (useRouter + useSearchParams)
- Icon bar click → add/switch to tab → update URL
- Tab close → remove from URL
- Active tab highlighted in both TabBar and IconBar

---

## Implementation Checklist

### Phase 1: Foundation & Database ✅
- [ ] Create migration for all new tables
- [ ] Run migration on Supabase
- [ ] Create TypeScript types for all tables
- [ ] Set up React Query config
- [ ] Set up Zustand store

### Phase 2: Core Layout ✅
- [ ] Create `/app/[workspaceId]/layout.tsx` with IconBar + Sidebar + TabBar
- [ ] Build `IconBar.tsx` component (13 icons)
- [ ] Build `Sidebar.tsx` component (workspace pages OR active guides list)
- [ ] Build `TabBar.tsx` component (URL-based tabs)
- [ ] Build `WorkspaceSwitcher.tsx` dropdown
- [ ] Implement tab URL sync logic

### Phase 3: API Routes ✅
- [ ] `/api/workspaces` - CRUD
- [ ] `/api/workspaces/[id]/pages` - CRUD
- [ ] `/api/user-guides` - CRUD
- [ ] `/api/tasks` - CRUD
- [ ] `/api/calendar` - CRUD
- [ ] `/api/journal` - CRUD
- [ ] `/api/daily-notes` - CRUD
- [ ] `/api/reading-progress` - CRUD

### Phase 4: Views (Reuse + Enhance) ✅

#### Overview (Dashboard)
- [ ] Enhance OverviewView.tsx
- [ ] Active guides cards with progress
- [ ] Recent activity feed
- [ ] Quick actions section

#### Guides View
- [ ] Enhance TemplatesView.tsx
- [ ] Add GuideHeader with cover/icon/title
- [ ] Add progress bar
- [ ] Enhance question navigation
- [ ] Add "Skip" and "Save & Next" buttons
- [ ] Add helper section

#### Discover
- [ ] Create Discover page
- [ ] Search bar
- [ ] Popular guides grid
- [ ] Category browser
- [ ] Quick actions cards

### Phase 5: Planning Tools ✅

#### Tasks (Kanban)
- [ ] Create Tasks page
- [ ] Build KanbanBoard component
- [ ] Build KanbanColumn component (To Do, In Progress, Done)
- [ ] Build TaskCard component
- [ ] Implement drag & drop with dnd-kit
- [ ] Build TaskCreateForm
- [ ] Connect to API

#### Calendar
- [ ] Create Calendar page
- [ ] Build MonthView component
- [ ] Build MonthGrid component (7x5)
- [ ] Build EventList component (upcoming)
- [ ] Build EventCreateForm
- [ ] Connect to API
- [ ] Show task due dates

#### Timeline
- [ ] Create Timeline page
- [ ] Build GanttView component
- [ ] Build TimelineBar component
- [ ] Calculate timeline from user_guides + tasks
- [ ] Show month labels
- [ ] Show progress indicators

### Phase 6: Notes ✅

#### Daily Note
- [ ] Create Daily page
- [ ] Build DailyNote component
- [ ] Build AgendaList (tasks due today)
- [ ] Freeform textarea with auto-save
- [ ] Connect to API

#### Journal
- [ ] Create Journal page
- [ ] Build JournalEntry component
- [ ] Build EntryList component
- [ ] Add search/filter
- [ ] Add tags
- [ ] Connect to API

### Phase 7: Insights ✅

#### Library
- [ ] Create Library page
- [ ] Build ReadingList component
- [ ] Build ReadingCard component
- [ ] Filter by guide
- [ ] Show read status
- [ ] Connect to API

#### Analytics
- [ ] Create Analytics page
- [ ] Build StatsCards component (questions answered, streak, time)
- [ ] Build ActivityChart component (Recharts)
- [ ] Build GuideProgressList component
- [ ] Calculate stats from responses/reflections
- [ ] Connect to API

#### Archive
- [ ] Create Archive page
- [ ] Build ArchivedGuideList component
- [ ] Show completion date
- [ ] Add restore functionality
- [ ] Connect to API

#### Graph
- [ ] Create Graph page
- [ ] Build GuideGraph component (React Flow)
- [ ] Calculate connections (shared tags/readings)
- [ ] Style nodes and edges
- [ ] Add interactivity

### Phase 8: Polish ✅
- [ ] Mobile responsive all views
- [ ] Loading states
- [ ] Error states
- [ ] Empty states
- [ ] Optimistic updates
- [ ] Toast notifications
- [ ] Keyboard shortcuts
- [ ] Accessibility (a11y)

---

## Notes

- Skip Command Palette for now
- Templates = Guides throughout (database already renamed)
- Prompts = Questions throughout (database already renamed)
- Articles = Readings throughout (database already renamed)
- URL-based tabs for deep linking
- Reuse as much as possible from existing TemplatesView, ReflectionView, OverviewView
- Mobile-first responsive design
