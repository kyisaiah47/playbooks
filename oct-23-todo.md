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

## Implementation Priority

### Phase 1: Foundation
- [ ] Guide pages with Questions + Readings only
- [ ] Basic date extraction from answers
- [ ] Basic task extraction from answers
- [ ] Store as suggestions

### Phase 2: Calendar View
- [ ] Aggregate Calendar view page
- [ ] Toggle controls for guides
- [ ] Show confirmed dates from selected guides
- [ ] Confirmation flow for suggested dates
- [ ] Manual date entry

### Phase 3: Tasks View
- [ ] Aggregate Tasks view page
- [ ] Kanban board (To Do | In Progress | Done)
- [ ] Toggle controls for guides
- [ ] Confirmation flow for suggested tasks
- [ ] Drag and drop status changes

### Phase 4: Timeline + Overview
- [ ] Timeline view with Gantt-style visualization
- [ ] Overview dashboard
- [ ] Progress tracking
- [ ] Quick stats and insights

## Key Differentiator

**Most apps are either:**
- Pure reflection tools (journaling apps)
- Pure project management (Notion, Asana)

**Templata bridges both:**
- Start with thoughtful reflection (guides)
- Naturally extract actionable items
- Aggregate into project views
- **Wikipedia × Notion** actually realized
