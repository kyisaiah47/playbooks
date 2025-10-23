# Oct 23 TODO - Calendar/Timeline Feature

## Core Concept
**Passive date extraction + confirmation flow** for building timelines from guide answers.

## How It Works

1. **User answers questions naturally:**
   - "My wedding is June 15, 2025. I need to book the venue by March 1st."
   - "I want to transition careers in the next 6 months, aiming to start new role by May 2025."

2. **System detects dates in answers:**
   - Simple regex/parsing when user saves answer
   - Stores as "suggested dates" on the page instance
   - No interruption to their reflection flow

3. **Calendar tab shows suggestions:**
   ```
   📅 Dates found in your answers:

   ✓ June 15, 2025 - Wedding day (from Question 1)
   ? March 1, 2025 - Book venue (from Question 3)
   ? April 10, 2025 - Send invitations (from Question 7)

   [Add to Calendar] [Dismiss]
   ```

4. **User confirms dates:**
   - One-click to promote suggestion → confirmed date
   - Can edit/add context
   - Can manually add dates too

5. **Calendar view aggregates across guides:**
   - Shows all confirmed dates from all page instances
   - "Wedding Planning: Venue deposit - March 1"
   - "Career Transition: Start new role - May 15"
   - "Home Buying: Closing date - April 12"

## Why This Works

- **Not invasive** - doesn't interrupt reflection with "enter your wedding date" forms
- **Emergent** - timeline builds naturally from their thoughtful answers
- **User control** - they confirm what goes on calendar
- **Works universally** - same logic works for ALL guides automatically
- **Differentiator** - turns reflection into actionable planning

## Implementation Notes

### Data Structure
```typescript
interface PageInstance {
  id: string;
  guideName: string;
  answers: Answer[];
  suggestedDates: SuggestedDate[];
  confirmedDates: ConfirmedDate[];
}

interface SuggestedDate {
  date: Date;
  context: string; // "Wedding day", "Book venue"
  sourceAnswerId: string; // which answer it came from
  sourceQuestion: string; // question text
}

interface ConfirmedDate {
  date: Date;
  label: string; // user can edit
  notes?: string;
  sourceAnswerId?: string; // optional - if it came from suggestion
}
```

### Date Detection
- Parse on answer save/update
- Regex patterns for common formats:
  - "June 15, 2025"
  - "March 1st"
  - "by May"
  - "in 6 months"
- Use library like `chrono-node` for natural language date parsing

### Calendar Tab UI
1. **Pending Suggestions Section** (if any exist)
   - Show unconfirmed dates extracted from answers
   - [Add to Calendar] button for each
   - Shows source question

2. **Timeline Section**
   - Confirmed dates in chronological order
   - Can edit/delete
   - Can manually add new dates

3. **Calendar View** (optional)
   - Month view showing all dates
   - Click date to see details

### Cross-Guide Calendar
- Aggregate view showing dates from ALL page instances
- Filter by guide type
- Click date to jump to that page instance

## Phase 1 (MVP)
- [ ] Date detection in answers
- [ ] Store as suggested dates
- [ ] Calendar tab showing suggestions + confirmed
- [ ] One-click confirm flow

## Phase 2
- [ ] Cross-guide calendar aggregate view
- [ ] Manual date entry
- [ ] Edit/delete dates
- [ ] Recurring dates (weekly check-ins, etc.)

## Phase 3
- [ ] Reminders/notifications for upcoming dates
- [ ] iCal export
- [ ] Smart suggestions based on guide type ("6 months before wedding: book venue")

---

# UPDATED ARCHITECTURE: Guides vs. Views

## Core Principle
**Guides = pure reflection. Views = aggregate project management.**

### Guide Pages (Individual)
- **Questions tab only** - clean, focused reflection
- **Readings tab** - curated articles for that guide
- **No tasks/calendar clutter** - stays in the flow
- User answers questions naturally, system extracts dates/tasks behind the scenes

### Aggregate Views (Separate pages)
Located in sidebar under "Views" section, separate from "My Pages"

#### 1. Calendar View
- Shows dates from ALL guides (with toggle controls)
- **Toggle controls**: `[✓ Wedding Planning] [✓ Career Transition] [ ] Home Buying`
- Displays: "Mar 1: Venue deposit (Wedding)" + "May 15: Start new role (Career)"
- Month/week/day views
- Click date → jump to source guide page

#### 2. Tasks View
- Kanban board: **To Do | In Progress | Done**
- Shows tasks from toggled guides
- "Book photographer" (Wedding) + "Update resume" (Career)
- Drag and drop between columns
- Click task → jump to source guide page

#### 3. Timeline View
- Gantt-style roadmap across all active projects
- See how Wedding Planning overlaps with Career Transition
- Visual timeline showing milestones and dependencies
- Filter by toggled guides

#### 4. Overview View
- Dashboard of all active guides
- Progress bars (questions answered)
- Upcoming deadlines
- Recent activity
- Quick stats

## Updated Sidebar Structure: Obsidian-Style Icon Bar

**Leftmost Icon Bar** (40-50px wide):
```
📝 Guides (default)
📅 Calendar
✓ Tasks
📊 Timeline
🏠 Overview
```

**Main Sidebar** (changes based on icon selection):

When 📝 Guides is active:
```
My Pages
  Wedding Planning
  Career Transition
  Setting Boundaries
  Personal Growth
  Home Buying

[+ New Page]
```

When 📅 Calendar is active:
```
Active Guides
  [✓] Wedding Planning
  [✓] Career Transition
  [ ] Home Buying

[Calendar view takes full width]
```

When ✓ Tasks is active:
```
Active Guides
  [✓] Wedding Planning
  [✓] Career Transition
  [ ] Home Buying

[Kanban board takes full width]
```

**Why This Works:**
- Views get equal visual weight as Guides
- Mode switching instead of nesting
- Obsidian-style familiarity
- Makes Views feel "supreme" and prominent
- Icon bar is persistent across all modes

## User Flow

### Working on a guide:
1. Click "Wedding Planning" in sidebar
2. See Questions + Readings only
3. Answer questions thoughtfully
4. System extracts dates/tasks in background

### Managing projects:
1. Click "Calendar" in Views section
2. Toggle on relevant guides
3. See all dates aggregated
4. Add/edit dates manually if needed

### Checking progress:
1. Click "Overview" in Views
2. See all active guides at a glance
3. Quick links to continue where you left off

## Why This Works

### For Guides:
- **Stays focused** - no distraction from reflection
- **Clean interface** - just questions and readings
- **Natural flow** - answer questions, system handles the rest

### For Views:
- **Opt-in complexity** - only see project management when you want it
- **Cross-guide insights** - see how life projects relate
- **Notion-style flexibility** - multiple views of same data
- **User control** - toggle what's relevant right now

## Data Extraction from Answers

### Dates
- "My wedding is June 15, 2025" → extract date
- "I need to finish this by March" → extract relative date
- Store as suggestions, user confirms in Calendar view

### Tasks
- "I need to book a photographer" → extract task
- "Must update my resume" → extract task
- Store as suggestions, user confirms in Tasks view

### Budget/Numbers (future)
- "Budget is $30,000" → extract budget
- "Salary target: $120k" → extract number
- Could power Overview dashboard widgets

## Updated Data Structure

```typescript
interface PageInstance {
  id: string;
  guideName: string;
  answers: Answer[];

  // Extracted but unconfirmed
  suggestedDates: SuggestedDate[];
  suggestedTasks: SuggestedTask[];

  // User-confirmed
  confirmedDates: ConfirmedDate[];
  confirmedTasks: ConfirmedTask[];
}

interface SuggestedTask {
  text: string;
  sourceAnswerId: string;
  sourceQuestion: string;
}

interface ConfirmedTask {
  id: string;
  text: string;
  status: 'todo' | 'in_progress' | 'done';
  sourceAnswerId?: string;
  dueDate?: Date;
}

interface ViewPreferences {
  userId: string;
  calendar: {
    activeGuides: string[]; // guide IDs
  };
  tasks: {
    activeGuides: string[];
  };
  timeline: {
    activeGuides: string[];
  };
}
```

## Implementation Status

### ✅ Phase 1: Foundation (COMPLETED)
- [x] Guide pages with Questions + Readings tabs
- [x] Obsidian-style icon bar for view switching
- [x] Tab system for multiple open guides/views
- [ ] Basic date extraction from answers (PENDING - backend)
- [ ] Basic task extraction from answers (PENDING - backend)
- [ ] Store as suggestions (PENDING - backend)

### ✅ Phase 2: Calendar View (UI COMPLETED)
- [x] Aggregate Calendar view page
- [x] Toggle controls for guides (checkboxes in sidebar)
- [x] Month grid layout
- [x] Upcoming events list
- [ ] Show confirmed dates from selected guides (PENDING - backend)
- [ ] Confirmation flow for suggested dates (PENDING - backend)
- [ ] Manual date entry (PENDING - backend)

### ✅ Phase 3: Tasks View (UI COMPLETED)
- [x] Aggregate Tasks view page
- [x] Kanban board (To Do | In Progress | Done)
- [x] Toggle controls for guides
- [ ] Confirmation flow for suggested tasks (PENDING - backend)
- [ ] Drag and drop status changes (PENDING - interaction)

### ✅ Phase 4: Timeline + Overview (UI COMPLETED)
- [x] Timeline view with Gantt-style visualization
- [x] Overview dashboard
- [x] Progress tracking UI
- [x] Quick stats and insights UI

### ✅ Phase 5: Discovery + Journal (COMPLETED)
- [x] Discover view - browse 1,200+ guides
- [x] Search functionality UI
- [x] Popular guides grid
- [x] Browse by category
- [x] Journal view - free-form writing
- [x] Recent entries list

### ✅ Phase 6: New Page Creation (COMPLETED)
- [x] New Page view as tab
- [x] Guide selection interface
- [x] Quick actions (Blank Page, Journal Entry)
- [x] Search guides
- [x] Category browsing

---

## Next Priority Features

### 🔍 Phase 7: Command Palette (⌘K)
**Priority: HIGH** - Essential for navigation at scale

**What**: Global search and command interface
- Quick navigation across all guides
- Search through answers you've written
- Jump to specific questions
- Find dates, tasks, journal entries
- Quick actions ("Create new page", "Open calendar")

**UI Components**:
- Centered modal overlay (backdrop-blur)
- Fuzzy search input
- Results categorized by type (Guides, Questions, Answers, Tasks, Dates)
- Keyboard shortcuts (⌘K to open, arrows to navigate, Enter to select, Esc to close)
- Recent items section
- Quick actions section

**Implementation**:
```typescript
interface SearchResult {
  type: 'guide' | 'question' | 'answer' | 'task' | 'date' | 'journal' | 'action';
  title: string;
  subtitle?: string;
  icon: LucideIcon;
  action: () => void;
}
```

**Keyboard Shortcut**: ⌘K (Cmd+K) or Ctrl+K

---

### 🕸️ Phase 8: Graph View
**Priority: HIGH** - Unique differentiator

**What**: Visual network showing guide interconnections
- Nodes = your guides (size = activity/completion)
- Edges = connections (shared themes, dates, related resources)
- Interactive force-directed graph
- Click node to jump to guide
- Hover to see details

**Why**: Shows how life decisions interconnect
- "Wedding planning affects finances"
- "Career transition impacts relationships timeline"
- "Home buying conflicts with wedding timeline"

**UI Components**:
- Canvas/SVG visualization
- Node types: Guide (circle), Theme (small dot)
- Edge types: Date dependency, Resource shared, Theme connection
- Controls: Zoom, pan, filter by connection type
- Info panel showing selected node details

**Implementation**:
- Use D3.js or react-force-graph
- Calculate connections based on:
  - Overlapping dates
  - Shared resource articles
  - Extracted themes/tags
  - User-defined connections

---

### 📝 Phase 9: Daily Note
**Priority: MEDIUM** - Quick engagement

**What**: Auto-generated daily scratchpad
- One note per day (auto-created)
- Quick capture without formal structure
- Shows today's tasks + events at top
- Lower friction than full journal entry

**UI Components**:
- Clean note interface with today's date header
- Upcoming tasks/events panel (Today's Agenda)
- Free-form text area
- Quick access from icon bar (could replace/augment Journal?)

**Implementation**:
```typescript
interface DailyNote {
  date: Date;
  content: string;
  tasksForToday: Task[];
  eventsForToday: Event[];
  quickLinks: Guide[];
}
```

---

### ⚙️ Phase 10: Settings
**Priority: MEDIUM** - Basic necessity

**What**: User preferences and account management
- Theme switching (dark/light) - make moon icon functional
- Notification preferences
- Export data (JSON, PDF)
- Account details
- Privacy settings

**UI Components**:
- Settings view (new tab or modal)
- Section navigation: Appearance, Notifications, Data, Account
- Toggle switches, dropdowns, buttons
- Export functionality

---

### 📚 Phase 11: Reading Library
**Priority: MEDIUM** - Knowledge aggregation

**What**: All curated articles in one place
- Every reading from every guide aggregated
- Bookmarked/saved articles
- Reading history (mark as read)
- Filter by topic/guide
- Search within articles

**UI Components**:
- List/grid view toggle
- Filters: By guide, By topic, Read/Unread, Bookmarked
- Search bar
- Article cards with guide badge
- "Add to reading list" from guide view

**Implementation**:
```typescript
interface ReadingLibraryItem {
  id: string;
  title: string;
  guide: string;
  topic: string[];
  isRead: boolean;
  isBookmarked: boolean;
  dateAdded: Date;
  content: string;
}
```

---

### 🏆 Phase 12: Analytics / Insights
**Priority: LOW** - Gamification

**What**: Progress tracking and motivation
- Questions completed this week/month
- Streak tracking (consecutive days)
- Most active guides
- Time invested per guide
- Completion percentage
- Milestones achieved

**UI Components**:
- Analytics dashboard (could be part of Overview?)
- Stats cards with icons
- Line charts for trends
- Heatmap for activity
- Achievement badges

---

### 📦 Phase 13: Archive
**Priority: LOW** - Lifecycle management

**What**: Completed/inactive guides storage
- Move finished guides out of main sidebar
- Still accessible for reference
- Can restore to active
- Sense of closure and accomplishment

**UI Components**:
- Archive view (separate from My Pages)
- Grayed out guide cards
- "Archive" action in guide menu
- "Restore" action in archive view

---

### 🤝 Phase 14: Collaboration (Future)
**Priority: FUTURE** - Social features

**What**: Share guides with others
- Invite partner to wedding planning guide
- Shared answers with comments
- Real-time collaboration
- Permissions (view vs edit)

**Why**: Major life decisions involve multiple people

---

### 🏷️ Phase 15: Tags System (Future)
**Priority: FUTURE** - Power user feature

**What**: Cross-guide organization via tags
- Tag answers with themes ("finances", "family", "values")
- Tag-based filtering and search
- Tag browser view
- Auto-suggested tags from content

---

## Key Differentiator

**Most apps are either:**
- Pure reflection tools (journaling apps)
- Pure project management (Notion, Asana)

**Templata bridges both:**
- Start with thoughtful reflection (guides)
- Naturally extract actionable items
- Aggregate into project views
- **Wikipedia × Notion** actually realized

---

## Current Implementation State (Oct 23, 2024)

### What's Built (UI Complete):
1. ✅ **Guides View** - Questions + Readings tabs, sidebar navigation
2. ✅ **Calendar View** - Month grid, upcoming events, guide toggles
3. ✅ **Tasks View** - Kanban board (To Do, In Progress, Done)
4. ✅ **Timeline View** - Gantt-style project visualization
5. ✅ **Overview View** - Dashboard with progress and activity
6. ✅ **Discover View** - Browse guides, search, categories
7. ✅ **Journal View** - Free-form entries
8. ✅ **New Page View** - Guide selection and creation

### What Needs Backend:
- Date extraction from answers
- Task extraction from answers
- Data persistence for all views
- User authentication
- Guide data structure

### Next to Build (Priority Order):
1. **Command Palette** - Essential navigation (HIGH)
2. **Graph View** - Killer feature (HIGH)
3. **Daily Note** - Quick engagement (MEDIUM)
4. **Settings** - Basic necessity (MEDIUM)
5. **Reading Library** - Knowledge base (MEDIUM)
