# Workspace Architecture - Correct Understanding

## Current Problem

The `/app/workspace/page.tsx` has the navigation structure **completely wrong**.

### What It Does Now (WRONG):
```
Sidebar Navigation:
├─ Dashboard (view)
├─ Templates (view)
├─ Prompts (view)
├─ Articles (view)
├─ Workspaces (view) ← Shows interactive workspace with dock
└─ View Modes (10 items)
   ├─ Chat View ← Only works when in "Workspaces" view
   ├─ Split View ← Only works when in "Workspaces" view
   └─ ... (8 more) ← Only works when in "Workspaces" view
```

**Problems:**
1. "Workspaces" nav item opens working interface - WRONG
2. View modes only work in one context - WRONG
3. No way to see list of all user workspaces - WRONG

---

## What It Should Be (CORRECT):

### Navigation Structure:

```
Sidebar Navigation:
├─ Dashboard (browse view)
├─ Templates (browse view)
├─ Prompts (browse view)
├─ Articles (browse view)
├─ Workspaces (browse view) ← TABLE of all user's workspaces
│
├─ Chat View (working interface)
├─ Split View (working interface)
├─ Board View (working interface)
├─ Checklist View (working interface)
├─ Text Editor (working interface)
├─ Timeline View (working interface)
├─ Table View (working interface)
├─ Cards View (working interface)
├─ Outline View (working interface)
└─ Tabs View (working interface)
```

---

## View Types Breakdown

### Browse Views (Top Section)
**Purpose:** Browse and manage content

**Dashboard**
- Stats cards
- Activity chart
- Recent workspaces table
- Quick access to templates

**Templates**
- Table of all templates
- Search and filter
- Click to view details or start workspace

**Prompts**
- Table of all prompts (across all templates)
- Or filtered by template selector
- Browse prompt library

**Articles**
- Table of all articles
- Educational content
- Browse and read

**Workspaces**
- **TABLE of all user workspaces**
- Columns: Name | Template | Last Edited | Progress | Actions
- Click "Open" → navigates to that workspace in current view mode
- "New Workspace" button creates new

---

### Working Views (Bottom Section)
**Purpose:** Active workspace interfaces for creating content

Each view mode is a **different interface for working with prompts**.

**When user clicks any view mode:**
1. Opens that working interface
2. Dock is visible at bottom
3. User selects template from dock
4. Works with prompts in that view style
5. Can switch between view modes anytime

**All view modes should:**
- Show template selector (via dock)
- Load prompts from selected template
- Provide different UX for answering prompts
- Show progress
- Auto-save (when backend ready)
- Allow export (when ready)

---

## The Dock System

### When Dock Appears:
**Only when in a WORKING VIEW (view modes)**

Examples:
- User clicks "Chat View" → Dock visible
- User clicks "Board View" → Dock visible
- User clicks "Dashboard" → NO dock
- User clicks "Templates" → NO dock

### What's in the Dock:
```
┌─────────────────────────────────┐
│ [📄 Templates] [📝 Prompts] [📖 Articles] │
└─────────────────────────────────┘
```

**Templates Drawer:**
- Grid of all templates
- Search + A-Z filter
- Select template → loads prompts for that template

**Prompts Drawer:**
- Lists prompts from current template
- Search functionality
- **Action buttons:**
  - [ ] Copy prompt text
  - [ ] Insert into workspace
  - [ ] Mark as complete
  - [ ] Skip

**Articles Drawer:**
- Shows articles for current template
- **Action buttons:**
  - [ ] Read in side panel
  - [ ] Save for later
  - [ ] Insert reference

---

## Workspaces View Detail

### Layout:
```
┌────────────────────────────────────────────┐
│ Workspaces                        [+ New]  │
│ 12 workspaces                              │
│                                            │
│ [🔍 Search workspaces...]                  │
│                                            │
│ ┌────────────────────────────────────────┐│
│ │ Name │ Template │ Updated │ Progress  ││
│ ├────────────────────────────────────────┤│
│ │ Wedding Plan │ Wedding │ 2h ago │ 75% ││
│ │ Career Review │ Career │ 1d ago │ 40% ││
│ │ Home Search │ Buying │ 3d ago │ 90%  ││
│ └────────────────────────────────────────┘│
│                                            │
│ Showing 1-10 of 12   [Prev] [Next]        │
└────────────────────────────────────────────┘
```

### Actions on Each Row:
- **Open** → Opens that workspace in last used view mode (or default to Chat)
- **Duplicate** → Creates copy
- **Export** → Downloads as PDF/Word/Markdown
- **Delete** → Removes workspace

### "New Workspace" Flow:
1. Click "+ New" button
2. Modal opens: "Create New Workspace"
3. Select template
4. Enter workspace name (optional, defaults to template name)
5. Choose starting view mode (Chat, Board, Editor, etc.)
6. Click "Create"
7. Navigates to that view mode with new workspace

---

## View Mode Behaviors

### Chat View
```
┌─────────────────────────────────────────┐
│ Wedding Planning - Chat View            │
├─────────────────────────────────────────┤
│                                         │
│ 🤖 What are your main goals?            │
│                                         │
│     My response here... 👤              │
│                                         │
│ 🤖 What's your budget range?            │
│                                         │
├─────────────────────────────────────────┤
│ [Type your answer...]        [Send ➜]  │
├─────────────────────────────────────────┤
│ [Dock: Templates | Prompts | Articles] │
└─────────────────────────────────────────┘
```

**Key Features:**
- Conversational flow
- One prompt at a time
- Progress indicator: "Question 3 of 15"
- Can go back to previous prompts
- All responses saved

---

### Split View
```
┌────────────┬────────────────────────────┐
│ Prompts    │ Wedding Planning           │
│            │                            │
│ ▸ Getting  │ Selected: What's budget?   │
│   Started  │ ───────────────────────    │
│ • Budget   │ [Large text editor]        │
│ • Guest    │                            │
│   count    │                            │
│            │                            │
│ ▸ Planning │                            │
│ • Venue    │                            │
│            │ 150 words | Auto-saved     │
├────────────┴────────────────────────────┤
│ [Dock: Templates | Prompts | Articles] │
└─────────────────────────────────────────┘
```

**Key Features:**
- All prompts visible on left
- Write responses on right
- Jump between prompts freely
- See all progress at once
- Resizable panes

---

### Board View
```
┌──────────┬──────────┬──────────┬───────┐
│ To Do  8 │Thinking 2│ Done  5  │       │
├──────────┼──────────┼──────────┤       │
│[Prompt 1]│[Prompt 2]│[Prompt 3]│       │
│[Prompt 4]│[Prompt 5]│[Prompt 6]│       │
│          │          │          │       │
│  Drag →  │          │    ✓     │       │
├──────────┴──────────┴──────────┴───────┤
│ [Dock: Templates | Prompts | Articles] │
└─────────────────────────────────────────┘
```

**Key Features:**
- Kanban organization
- Drag prompts between columns
- Click card to add notes/response
- Visual progress
- Status at a glance

---

### Text Editor View
```
┌─────────────────────────────────────────┐
│ Wedding Planning - Text Editor          │
├─────────────────────────────────────────┤
│                                         │
│ # Wedding Planning Document             │
│                                         │
│ ## Budget                               │
│ [Prompt: What's your budget range?]     │
│ My answer here...                       │
│                                         │
│ ## Guest List                           │
│ [Prompt: How many guests?]              │
│ My answer here...                       │
│                                         │
├─────────────────────────────────────────┤
│ [Dock: Templates | Prompts | Articles] │
└─────────────────────────────────────────┘
```

**Key Features:**
- Notion-like editor
- Template structure pre-loaded as headings
- Prompts shown as blocks
- Rich text formatting
- Free-form writing

---

## Navigation Flow Examples

### Example 1: User Creates New Workspace

**Flow:**
```
1. Click "Workspaces" in sidebar
   → Shows table of workspaces

2. Click "+ New Workspace" button
   → Modal opens

3. Select "Wedding Planning" template
   → Template selected

4. Enter name "Sarah's Wedding 2024"
   → Name set

5. Choose "Chat View" as starting mode
   → View mode selected

6. Click "Create"
   → Navigates to Chat View
   → Dock visible at bottom
   → Wedding Planning template already loaded
   → First prompt appears
   → User starts answering
```

### Example 2: User Switches View Modes

**Flow:**
```
1. User working in Chat View
   → Has answered 5 prompts

2. Clicks "Board View" in sidebar
   → Switches to Board View
   → Same workspace, same template
   → Same 5 answered prompts
   → But now shown as cards in "Done" column
   → Remaining prompts in "To Do"
```

### Example 3: User Browses Prompts While Working

**Flow:**
```
1. User in Split View, working on prompt #3

2. Needs to see all available prompts
   → Clicks "Prompts" in dock
   → Drawer opens from bottom
   → Shows all prompts for current template

3. Finds interesting prompt: "What's your backup plan?"
   → Clicks "Insert" button
   → Prompt added to workspace
   → Drawer stays open

4. Finds another: "Consider seasonal factors"
   → Clicks "Insert"
   → Another prompt added

5. Swipes down to close drawer
   → Back to Split View
   → Now sees new prompts in left panel
```

---

## UI/UX Fixes Needed

### 1. Sidebar Organization

**Current (Wrong):**
```
Navigation
├─ Quick Create
├─ Inbox
├─ Dashboard
├─ Templates
├─ Prompts
├─ Articles
├─ Workspaces
│
View Mode (section label)
├─ Chat View
├─ Split View
├─ Board View
└─ ... (7 more)
```

**Should Be:**
```
Browse (section label)
├─ Dashboard
├─ Templates
├─ Prompts
├─ Articles
├─ Workspaces

Work (section label)
├─ Chat View
├─ Split View
├─ Board View
├─ Checklist View
├─ Text Editor
├─ Timeline View
├─ Table View
├─ Cards View
├─ Outline View
└─ Tabs View

[Quick Create button at top]
[Settings/Help at bottom]
```

### 2. Active State Logic

**Current (Wrong):**
```javascript
// View modes only highlighted when:
currentView === 'workspaces' && viewMode === 'chat'
```

**Should Be:**
```javascript
// View modes highlighted when:
currentView === 'chat' // or 'split' or 'board' etc.

// Each view mode IS its own currentView
```

### 3. Hash Routing

**Current (Wrong):**
```
#dashboard → Dashboard view
#templates → Templates view
#workspaces → Working interface (wrong!)
```

**Should Be:**
```
#dashboard → Dashboard view
#templates → Templates view
#workspaces → Workspaces table
#chat → Chat working interface
#split → Split working interface
#board → Board working interface
etc.
```

### 4. Dock Visibility

**Current (Wrong):**
```javascript
// Dock only in #workspaces view
{currentView === 'workspaces' && <Dock />}
```

**Should Be:**
```javascript
// Dock in ANY working view
{isWorkingView(currentView) && <Dock />}

function isWorkingView(view) {
  return ['chat', 'split', 'board', 'checklist',
          'text', 'timeline', 'table', 'cards',
          'outline', 'tabs'].includes(view);
}
```

---

## Drawer UX Improvements

### Problem: Reopening is Annoying

**Current Flow:**
```
1. Open Templates drawer → select template → closes
2. Open Prompts drawer → browse → closes
3. Need another prompt → open drawer again
4. Browse → closes
5. Repeat...
```

**Solutions:**

**Option A: Keep Drawer Open Until User Closes**
```
1. Open Prompts drawer
2. Click prompt → inserts into workspace → drawer STAYS open
3. Click another → inserts → drawer STAYS open
4. User swipes down or clicks X to close
```

**Option B: Minimize Button**
```
┌─────────────────────────────────┐
│ Prompts          [−] [×]        │ ← Minimize to tab
├─────────────────────────────────┤
│ • Prompt 1      [Insert]        │
│ • Prompt 2      [Insert]        │
└─────────────────────────────────┘

When minimized:
         [Prompts ▲]  ← Tab at bottom, click to expand
```

**Option C: Side Panel Option**
```
User preference:
- Bottom drawer (default, better for reading long prompts)
- Right side panel (for quick reference while working)

Toggle in settings
```

### Drawer Action Buttons

**Templates Drawer:**
- ✅ No actions needed (selecting switches template)

**Prompts Drawer:**
```
Each prompt shows:
┌─────────────────────────────────────────┐
│ What's your realistic budget range?     │
│ [Category: Budget Planning]             │
│                                         │
│ [Copy Text] [Insert] [Mark Complete]   │ ← Action buttons
└─────────────────────────────────────────┘
```

**Articles Drawer:**
```
Each article shows:
┌─────────────────────────────────────────┐
│ Budget Breakdown: A Complete Guide      │
│ 5 min read | Guide                      │
│                                         │
│ [Read] [Save for Later] [Add Reference] │ ← Action buttons
└─────────────────────────────────────────┘
```

---

## Key Insights

### 1. Two Distinct Modes

**Browse Mode (Dashboard, Templates, Prompts, Articles, Workspaces):**
- No dock
- No active workspace
- Just browsing/managing content

**Work Mode (All 10 view modes):**
- Dock visible
- Active workspace loaded
- Creating content

### 2. View Modes Are Top-Level Navigation

Not subsections of "Workspaces". Each is its own destination.

User mental model:
- "I want to work in Chat View" → clicks Chat View
- "I want to work in Board View" → clicks Board View
- "I want to see all my workspaces" → clicks Workspaces

### 3. Template Selection Lives in Dock

When in any working view:
- Dock shows Templates button
- Click it → drawer with all templates
- Select template → loads that template's prompts
- Can switch templates anytime without leaving view

### 4. Workspaces Are Persistent

Not temporary. Each workspace:
- Has a name
- Based on a template
- Stores all responses
- Tracks progress
- Can be opened in any view mode
- Can be exported

---

## Implementation Checklist

### Phase 1: Navigation Structure
- [ ] Split sidebar into "Browse" and "Work" sections
- [ ] Make view modes top-level routes (#chat, #split, etc.)
- [ ] Create proper Workspaces table view
- [ ] Remove "Workspaces" as working interface

### Phase 2: Dock Behavior
- [ ] Show dock only in working views
- [ ] Keep drawers open until user closes (or add minimize)
- [ ] Add action buttons to Prompts drawer (Copy, Insert, Complete)
- [ ] Add action buttons to Articles drawer (Read, Save, Reference)

### Phase 3: View Mode Integration
- [ ] Load template prompts in each view mode
- [ ] Maintain workspace state across view mode switches
- [ ] Add progress indicators to all views
- [ ] Template structure should populate Text Editor view

### Phase 4: Workspaces Management
- [ ] "New Workspace" flow
- [ ] Workspace table with proper actions
- [ ] Opening workspace loads it in selected view mode
- [ ] Export workspace functionality

---

## Questions to Resolve

**Q1: Default View Mode**
When user creates new workspace or opens existing, which view mode?
- Option A: Always Chat View (simplest onboarding)
- Option B: User's last used view mode
- Option C: Let user choose in "New Workspace" flow

**Q2: Switching Templates Mid-Workspace**
User is working in "Wedding Planning", switches to "Career Planning":
- Option A: Creates new workspace automatically
- Option B: Warns "This will change your prompts, continue?"
- Option C: Not allowed, must create new workspace

**Q3: View Mode State Sharing**
User answers prompts in Chat View, switches to Board View:
- Should see same progress? ✅ YES
- Should show same responses? ✅ YES
- Just different interface? ✅ YES

**Q4: Dock Drawer Persistence**
When user inserts prompt from drawer:
- Keep drawer open? ← User says yes, reopening is annoying
- Auto-close drawer?
- User preference?

---

End of Architecture Fix Document
