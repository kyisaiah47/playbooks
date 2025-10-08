# Workspace Screen - Granular UI/UX Audit

**Date:** 2025-10-08
**Focus:** User experience, interaction patterns, visual hierarchy, navigation flows

---

## Table of Contents
1. [First Impressions & Entry Points](#1-first-impressions--entry-points)
2. [Navigation Architecture](#2-navigation-architecture)
3. [Dashboard View - Information Hierarchy](#3-dashboard-view---information-hierarchy)
4. [Templates View - Browse Experience](#4-templates-view---browse-experience)
5. [Prompts View - Discovery & Access](#5-prompts-view---discovery--access)
6. [Articles View - Content Consumption](#6-articles-view---content-consumption)
7. [Workspaces View - Creation Interface](#7-workspaces-view---creation-interface)
8. [View Mode Interactions](#8-view-mode-interactions)
9. [Dock System Analysis](#9-dock-system-analysis)
10. [Consistency & Patterns](#10-consistency--patterns)
11. [Usability Issues](#11-usability-issues)
12. [User Journey Maps](#12-user-journey-maps)
13. [Recommendations](#13-recommendations)

---

## 1. First Impressions & Entry Points

### Landing State (Default: Dashboard)

**What User Sees:**
```
┌─────────────────────────────────────────────────────────┐
│  [Sidebar - Collapsed/Expanded]  │  [Main Content Area] │
│  ┌──────────────────────────┐   │                       │
│  │ 🏠 Dashboard (active)    │   │  [4 Stat Cards]       │
│  │ 📄 Templates             │   │                       │
│  │ 🤖 Prompts               │   │  [Activity Chart]     │
│  │ 📊 Articles              │   │                       │
│  │ 📁 Workspaces            │   │  [Tabbed Tables]      │
│  │                          │   │                       │
│  │ [View Modes - 10 items]  │   │                       │
│  └──────────────────────────┘   │                       │
└─────────────────────────────────────────────────────────┘
```

**First Impression Score: 6/10**

**Strengths:**
- Clean, spacious layout
- Clear visual hierarchy in stat cards
- Professional design aesthetic
- Familiar patterns (sidebar nav, cards, charts)

**Problems:**
- **Overwhelming sidebar** - 10 view mode options visible when most don't apply
- **No onboarding** - User has no idea what to do first
- **Unclear purpose** - Is this analytics? Workspace creation? Template browsing?
- **View Modes confusing** - Why are they always visible if they only work in one view?

**Cognitive Load: HIGH**
- 5 navigation items + 10 view modes + 2 action buttons = 17 clickable items in sidebar alone
- 4 tabs in main area + all the table rows = decision fatigue

---

## 2. Navigation Architecture

### Primary Navigation (Sidebar)

**Structure:**
```
┌─────────────────────────┐
│ 🟢 Quick Create         │  ← Primary action (unclear what it creates)
│ ✉️  Inbox (icon only)   │  ← Secondary action (what inbox?)
│                         │
│ 🏠 Dashboard            │  ← View 1
│ 📄 Templates            │  ← View 2
│ 🤖 Prompts              │  ← View 3
│ 📊 Articles             │  ← View 4
│ 📁 Workspaces           │  ← View 5
│                         │
│ VIEW MODE (section)     │
│ 💬 Chat View            │  ← Mode 1
│ ⬛ Split View           │  ← Mode 2
│ 📋 Board View           │  ← Mode 3
│ ✅ Checklist View       │  ← Mode 4
│ 📝 Text Editor          │  ← Mode 5
│ ⏱️  Timeline View       │  ← Mode 6
│ 📊 Table View           │  ← Mode 7
│ 🎴 Cards View           │  ← Mode 8
│ 📑 Outline View         │  ← Mode 9
│ 📑 Tabs View            │  ← Mode 10
│                         │
│ ⚙️  Settings            │
│ ❓ Get Help             │
│ 🔍 Search               │
└─────────────────────────┘
```

### UX Issues with Navigation

#### Issue #1: View Modes Always Visible
**Problem:** View modes are permanently shown regardless of current view

**User Confusion:**
1. User is on Dashboard
2. Sees "Chat View", "Board View", etc.
3. Clicks "Chat View"
4. **Nothing happens** (because they need to be in Workspaces view first)
5. User thinks it's broken

**Expected Behavior:**
- Show view modes ONLY when in Workspaces view
- Or visually disable/hide when not applicable
- Or show tooltip: "Switch to Workspaces to use view modes"

#### Issue #2: Unclear Information Architecture
**Problem:** Mixing views (data browsing) with modes (data manipulation)

**Current Mental Model Confusion:**
```
User thinks:
"Is Dashboard a view or a mode?"
"What's the difference between Templates view and Chat mode?"
"Why are there 5 views AND 10 modes?"
```

**Better Mental Model:**
```
Section 1: Browse Content
├─ Dashboard (overview)
├─ Templates (catalog)
├─ Prompts (content library)
└─ Articles (learning resources)

Section 2: Create/Work
└─ Workspaces
    ├─ Chat Mode
    ├─ Board Mode
    ├─ Editor Mode
    └─ [etc.]
```

#### Issue #3: Quick Create Button - Mystery Meat
**Problem:** Primary action button doesn't explain what it creates

**User Questions:**
- Create what? Template? Workspace? Document?
- Does it open a modal? Navigate to new page?
- What happens when I click it?

**Current State:** Looks clickable but no action implemented
**User Expectation:** Should create new workspace or open creation wizard

#### Issue #4: Inbox Button - Orphaned UI
**Problem:** Email icon in sidebar with no context

**Issues:**
- Icon only (no label when sidebar expanded)
- No badge count
- Unclear purpose (email? notifications? messages?)
- Looks like an afterthought

---

## 3. Dashboard View - Information Hierarchy

### Visual Layout Analysis

```
┌──────────────────────────────────────────────┐
│  [Stat Card 1] [Stat Card 2] [Stat Card 3] [Card 4]  │  ← Row 1
├──────────────────────────────────────────────┤
│                                              │
│         [Large Interactive Chart]            │  ← Row 2
│                                              │
├──────────────────────────────────────────────┤
│  [Tab Navigation]                            │
│  ┌────────────────────────────────────────┐ │
│  │ All │ Recent │ Favorites │ Workspaces │ │  ← Row 3
│  │                                        │ │
│  │  [Table with pagination]               │ │
│  │                                        │ │
│  └────────────────────────────────────────┘ │
└──────────────────────────────────────────────┘
```

### Stat Cards (Row 1)

**Design Pattern:**
- 4 cards in responsive grid (1/2/4 columns based on screen size)
- Each shows: metric name, large number, badge, description

**Card 1: All Templates**
```
┌─────────────────────┐
│ All Templates       │
│ 150                 │ ← Large number (good)
│ 🏷️  Free access     │ ← Badge (good context)
│                     │
│ All templates       │ ← Redundant text
│ available           │
│ Across all          │ ← Not actionable
│ categories          │
└─────────────────────┘
```

**UX Issues:**
- **Not actionable** - Cards look clickable but aren't
- **Redundant text** - "All Templates" title + "All templates available" footer
- **Wasted space** - Could show top categories or quick links
- **No CTAs** - Should link to Templates view

**Card 2: Active Workspaces**
- Shows "3" but user can't see which 3 without scrolling
- Badge says "In progress" but what does that mean?
- Should link to workspaces or show quick access

**Card 3: Words This Month**
- Nice metric with trend badge (+22%)
- But trend comparison to what? Last month? Last year?
- Motivational text "Keep up the momentum" is good touch

**Card 4: Templates Used**
- "8 templates used this month"
- Good metric but needs action: "Explore more templates"

### Chart Section (Row 2)

**UX Analysis:**
```
┌───────────────────────────────────────────┐
│ Activity Overview                         │
│ Template usage over time                  │
│                       [90d][30d][7d] ←───── Good: Time range selector
│                                           │
│  [Area Chart - Desktop/Mobile]            │ ← Confusing: Why desktop/mobile split?
│                                           │
└───────────────────────────────────────────┘
```

**Problems:**
1. **Confusing Data Split:** Why "Desktop" and "Mobile"?
   - This is a template app, not analytics
   - Should show: Words written, Templates used, Sessions, etc.

2. **Mock Data Obvious:** April-June 2024 data in October
   - Breaks user trust
   - Should show real usage or hide until data available

3. **Good Patterns:**
   - Responsive time selector (toggle group on desktop, dropdown on mobile)
   - Container queries for adaptive layout
   - Tooltip shows values on hover

### Tabbed Tables (Row 3)

**Tab Navigation:**
```
┌─────────────────────────────────────────┐
│ [All Templates] [Recent] [Favorites] [Workspaces] │
└─────────────────────────────────────────┘
```

**UX Issue: Tab Confusion**
- Tabs look like page navigation
- But they're filtering the same view
- Users might not realize there are 4 different views here

**All Templates Tab:**
- Table with: Template | Category | Description | Actions
- Pagination: 10 per page
- **Issue:** Description column truncated but no expand option
- **Issue:** No sorting controls (by name, category, popularity)
- **Issue:** No filtering (only on Templates view page)
- **Good:** Clear "Open" button for each row

**Recent Tab:**
- Shows 5 templates with "2 days ago" timestamp
- **Problem:** All have same timestamp (obviously fake)
- **Problem:** No actual recent usage tracking
- **Expected:** Real timestamps, "Resume where you left off" actions

**Favorites Tab:**
- Shows empty state: "Star templates to add them here"
- **Problem:** No way to star templates anywhere in the UI
- **Issue:** Empty state should show example + instructions
- **Should have:** Button to browse templates, or show popular templates to get started

**Workspaces Tab:**
- Shows 3 mock workspaces
- Columns: Workspace | Template | Last Edited | Word Count | Actions
- **Good:** Word count gives progress sense
- **Problem:** Can't create, edit, or delete workspaces
- **Expected:** "New Workspace" button prominently displayed

---

## 4. Templates View - Browse Experience

### Layout & Search

```
┌─────────────────────────────────────────────────────┐
│  Templates                                          │
│  150 templates available                            │
│                                                     │
│  [🔍 Search templates...]                           │ ← Search bar
│                                                     │
│  ┌─────────────────────────────────────────────┐   │
│  │ Template | Category | Description | Actions │   │ ← Table
│  │ ........................................     │   │
│  │ [20 rows per page]                          │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
│  Showing 1-20 of 150    [Prev] [Next]              │ ← Pagination
└─────────────────────────────────────────────────────┘
```

### UX Assessment

**Strengths:**
- Simple, focused interface
- Search works well (filters name, category, description)
- Pagination is clear

**Missing Features:**

1. **No Filter Controls**
   - Can't filter by category
   - Can't filter by difficulty, length, purpose
   - Search is only option

2. **No Sort Controls**
   - Can't sort alphabetically
   - Can't sort by popularity
   - Can't sort by recently added

3. **No View Options**
   - Only table view available
   - Would benefit from:
     - Grid view (cards with previews)
     - List view (compact)
     - Featured templates section at top

4. **No Letter Filter in Main View**
   - Letter filter (A-Z) exists in dock drawer
   - But NOT in main Templates view
   - Inconsistent UX

5. **Truncated Descriptions**
   - Description column shows "..." for long text
   - No hover tooltip or expand option
   - User can't read full description without opening template

6. **No Preview**
   - Can't see what template looks like
   - Have to click "View" to see anything
   - Should have quick preview on hover or expand row

### Search Experience

**Current Behavior:**
1. User types in search box
2. Results filter immediately (good - live search)
3. Page resets to 1 (good)
4. Count updates "X templates available"

**Missing:**
- No "Clear search" X button
- No "No results" empty state with suggestions
- No search history or recent searches
- No autocomplete or suggestions

---

## 5. Prompts View - Discovery & Access

### Critical UX Problem: Hidden Context

**User Flow Issue:**
```
User Journey:
1. User clicks "Prompts" in sidebar
2. Sees table of prompts
3. Searches for prompt they want
4. Finds it...

But wait - Which template are these prompts from?
```

**The Problem:**
- Prompts are loaded based on `selectedTemplateId` state
- But this state is only set from the dock in Workspaces view
- User in Prompts view has **no way to change the template**
- No visible indicator showing which template's prompts are displayed

**Current UI (Broken):**
```
┌─────────────────────────────────────────────┐
│ Prompts                                     │
│ 0 prompts available  ← Shows 0 if no template selected!
│                                             │
│ [🔍 Search prompts...]                      │
│                                             │
│ No prompts found                            │ ← Confusing empty state
└─────────────────────────────────────────────┘
```

**What It Should Show:**
```
┌─────────────────────────────────────────────┐
│ Prompts                                     │
│ [Dropdown: Select Template ▼]  ← Template selector!
│ Currently showing: Wedding Planning Template│
│                                             │
│ [🔍 Search prompts...]                      │
│                                             │
│ [Table with prompts]                        │
└─────────────────────────────────────────────┘
```

### Table Design

**Columns:**
- Prompt (truncated at 500px)
- Template
- Category
- Type
- Actions

**Issues:**

1. **Redundant Template Column**
   - If user selected template from dropdown, why show it in every row?
   - Should show category hierarchy instead

2. **Confusing Type vs Category**
   - Has both "Category" and "Type" columns
   - User doesn't understand difference
   - Example: Category "General" vs Type "planning"
   - Needs better labeling or consolidation

3. **No Interaction**
   - Clicking "View" goes to template page, not the prompt
   - User can't:
     - Copy prompt text
     - Add to workspace
     - Mark as favorite
     - Use prompt immediately

**Better Actions:**
- Copy button (copies prompt text)
- "Use in Workspace" (opens in chat/editor)
- Save to favorites
- View template (current behavior)

---

## 6. Articles View - Content Consumption

### Same Problem as Prompts

**Issue:** Articles loaded by template, but no template selector in view

**Current Flow:**
1. User clicks Articles in sidebar
2. Sees loading... (if no template selected)
3. Then sees "0 articles available"
4. Confused, clicks around
5. Eventually goes to Workspaces → opens dock → selects template
6. Goes back to Articles view
7. Finally sees articles

**Expected Flow:**
1. User clicks Articles
2. Sees all articles OR template selector
3. Filters by template if desired
4. Reads articles

### Table Design

**Columns:**
- Title
- Template
- Excerpt (truncated)
- Read Time
- Type
- Actions

**Good Patterns:**
- Read time helps user decide if they have time
- Type badge (guide, tutorial, etc.) sets expectations
- Excerpt gives preview of content

**Issues:**

1. **Excerpt Truncation**
   - Truncated at 400px with "..."
   - No hover to see full text
   - User has to click "Read" to see if article is relevant

2. **No Reading List**
   - Can't save articles to read later
   - No "mark as read" functionality
   - Can't track progress through content

3. **No Filtering by Type**
   - Shows type (guide, tutorial, etc.) but can't filter by it
   - Should have filter chips or dropdown

4. **No Difficulty Indicator**
   - All articles treated equally
   - Beginners might open advanced content
   - Should have beginner/intermediate/advanced tags

---

## 7. Workspaces View - Creation Interface

### Layout Structure

```
┌─────────────────────────────────────────────────────┐
│ My Workspace                                        │
│ Template: Wedding Planning Template                 │
├─────────────────────────────────────────────────────┤
│                                                     │
│                                                     │
│           [Current View Mode Content]               │
│                                                     │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│         [Floating Dock - Bottom Center]             │
│     [📄 Templates] [📝 Prompts] [📖 Articles]      │
└─────────────────────────────────────────────────────┘
```

### The Dock System - Main Interaction

**Visual Design:**
```
     ┌─────────────────────────────┐
     │  📄      📝      📖         │
     │ Templates Prompts Articles  │
     └─────────────────────────────┘
          ▲ Floating above content
```

**Interaction Flow:**

**Step 1: Click Templates**
- Bottom drawer slides up (60vh height)
- Shows:
  - Search bar
  - A-Z letter filter buttons (26 buttons!)
  - Grid of template cards (2-4 columns)
- User clicks template → drawer closes → template selected

**Step 2: Click Prompts**
- Bottom drawer slides up
- Shows prompts for selected template
- User can search prompts
- **Issue:** Can only browse, can't actually use them

**Step 3: Click Articles**
- Bottom drawer slides up
- Shows articles for selected template
- User can search articles
- **Issue:** Can only browse, can't read them (would need to click out to Articles view)

### UX Problems with Dock

**Problem #1: Discoverable vs Hidden**
- Dock only appears in Workspaces view
- Users in other views don't know it exists
- Creates two parallel navigation systems

**Problem #2: Bottom Drawer Height**
- Takes up 60% of viewport height
- Covers the workspace content user is working on
- Can't reference work while browsing

**Problem #3: No Quick Actions**
- Prompts drawer shows prompts but can't insert them
- Articles drawer shows articles but can't read them
- Templates drawer just switches template (good)

**Better Design:**
```
Drawer Opens:
┌─────────────────────────────────┐
│ [Search]    [Filters]      [×]  │
├─────────────────────────────────┤
│ [Prompt 1]      [Insert ➜]      │ ← Action button
│ [Prompt 2]      [Insert ➜]      │
│ [Prompt 3]      [Insert ➜]      │
└─────────────────────────────────┘
User clicks Insert → prompt added to current view
```

### Header Area

```
┌─────────────────────────────────────┐
│ My Workspace                        │ ← Generic title
│ Template: Wedding Planning Template │ ← Selected template
└─────────────────────────────────────┘
```

**Issues:**

1. **"My Workspace" Not Editable**
   - User should be able to name their workspace
   - "Wedding Planning - Sarah's Version"
   - "Annual Review 2024"
   - Makes it personal and identifiable

2. **No Workspace Metadata**
   - When was it created?
   - When last edited?
   - How complete is it?
   - Progress indicator would be helpful

3. **No Quick Actions**
   - Can't export
   - Can't share
   - Can't duplicate
   - Can't delete
   - Menu/action buttons should be in header

---

## 8. View Mode Interactions

### Chat View

**Interface:**
```
┌─────────────────────────────────────┐
│ [Message history scrolls up]        │
│                                     │
│ 🤖 What are your main goals?        │
│    [Getting Started]                │
│                                     │
│         Your response here 👤       │
│                                     │
│ 🤖 How do you plan to achieve?      │
│                                     │
├─────────────────────────────────────┤
│ [Text area for response]            │
│                                     │
│ [Send ➜]                            │
│ Press Enter to send...              │
└─────────────────────────────────────┘
```

**UX Analysis:**

**Good:**
- Familiar chat interface (like messaging apps)
- Clear visual distinction (prompt vs response)
- Category badges provide context
- Keyboard shortcut (Enter to send)

**Issues:**

1. **Linear, No Branching**
   - User can't skip prompts
   - Can't go back to edit previous responses
   - Locked into sequence

2. **No Progress Indicator**
   - User doesn't know: "Am I at 10% or 90%?"
   - Should show: "Question 3 of 15"

3. **Can't Save Partial Progress**
   - If user leaves, all answers lost
   - No "Save draft" or auto-save indication

4. **No Prompt Library Access**
   - User sees one prompt at a time
   - Can't browse all prompts to see what's coming
   - Should have sidebar with prompt list

### Board View

**Interface:**
```
┌──────────┬──────────┬──────────┐
│ To Do  3 │Thinking 1│ Done  1  │ ← Columns with counts
├──────────┼──────────┼──────────┤
│[Prompt 1]│[Prompt 2]│[Prompt 3]│
│          │          │          │
│          │          │          │
│[Drag →]  │[Notes]   │[✓]       │
└──────────┴──────────┴──────────┘
```

**UX Analysis:**

**Good:**
- Visual progress (To Do → Thinking → Done)
- Drag-and-drop feels satisfying
- Category badges on cards
- Click to open detail dialog

**Issues:**

1. **Dialog Interaction Clunky**
   - Click card → modal opens
   - Change status via buttons (not drag)
   - Inconsistent with board drag interaction

2. **No Bulk Actions**
   - Can't move multiple prompts at once
   - Can't mark several as done

3. **Limited Columns**
   - Fixed 3 columns (To Do, Thinking, Done)
   - User might want custom workflow
   - Example: To Do → Research → Draft → Review → Done

4. **Notes Hidden**
   - User adds notes in dialog
   - But can't see notes overview without clicking each card
   - Should show snippet or indicator "Has notes"

### Split View

**Interface:**
```
┌────────────┬─────────────────────┐
│ [Prompts]  │ [Response Editor]   │
│            │                     │
│ ▸ Getting  │ Selected prompt     │
│   Started  │ shown at top        │
│   • Goal 1 │                     │
│   • Goal 2 │ [Large text area]   │
│            │                     │
│ ▸ Planning │                     │
│   • Step 1 │                     │
│   • Step 2 │ 150 words           │
│            │ Auto-saved          │
└────────────┴─────────────────────┘
```

**UX Analysis:**

**Good:**
- Classic split-pane design
- Can see all prompts while writing
- Collapsible categories
- Word count feedback
- "Auto-saved" gives confidence

**Issues:**

1. **No Actual Auto-Save**
   - Shows "Auto-saved" but it's fake
   - Responses lost on refresh
   - Breaks user trust

2. **Fixed Pane Sizes**
   - Left pane is 350px
   - User can't resize
   - Some need more prompt context, others want more writing space

3. **Search Limited**
   - Search only filters prompt list
   - Can't search across responses
   - Can't find "Where did I mention budget?"

4. **No Rich Text**
   - Plain textarea only
   - User might want:
     - Bullet lists
     - Bold/italic
     - Links
     - Images

### Text Editor View

**Interface:**
```
┌──────────────────────────────────┐
│ Text Editor View                 │
│ Write freely with rich text.    │
│ Use "/" for commands.            │
│                                  │
│ ┌──────────────────────────────┐│
│ │ Start writing...             ││
│ │                              ││
│ │ [Novel editor - rich text]   ││
│ │                              ││
│ │                              ││
│ └──────────────────────────────┘│
└──────────────────────────────────┘
```

**UX Analysis:**

**Good:**
- Notion-like editor (users love this)
- Slash commands (/)
- Rich text formatting
- Clean, focused interface

**Issues:**

1. **No Template Integration**
   - Blank page: "Start writing..."
   - Should pre-populate with template structure
   - Example: Template has 5 sections → 5 headings auto-created

2. **No Prompts Visible**
   - User has to remember prompts
   - Or switch between views
   - Should have prompts in sidebar or as placeholders

3. **No Guidance**
   - Complete blank slate
   - Intimidating for new users
   - Should show template outline or starter content

### Checklist View

**Interface:**
```
┌─────────────────────────────────┐
│ Checklist View                  │
│ Pin important prompts to top.   │
│                                 │
│ Pinned Prompts                  │
│ ☑ Define your wedding vision    │
│ ☑ Set your budget               │
│                                 │
│ All Prompts                     │
│ ☐ Choose your venue             │
│ ☐ Create guest list             │
│ ☐ Select vendors                │
└─────────────────────────────────┘
```

**UX Analysis:**

**Good:**
- Simple checkbox interface (everyone understands)
- Pinning feature for prioritization
- Clear sections (Pinned vs All)

**Issues:**

1. **No Actual Input**
   - Just checks off prompts
   - Doesn't capture responses
   - User still needs to answer somewhere else

2. **Pinning Not Clear**
   - Instructions say "click to toggle pinned"
   - But visually, checkboxes look like task completion
   - Confusion between "pinned" and "completed"

3. **No Progress Indicator**
   - Checkmarks don't show completion %
   - Could show "3 of 5 complete"

### Table View

**Interface:**
```
┌─────────────────────────────────────────┐
│ Prompt          │Type│Status │Response  │
├─────────────────────────────────────────┤
│ Define vision   │ CT │✓Done  │ Rustic...│
│ Set budget      │ TC │⏳     │ $25k...  │
│ Choose venue    │ DC │○      │          │
└─────────────────────────────────────────┘
```

**UX Analysis:**

**Good:**
- Spreadsheet-style = familiar
- Status badges (pending, in progress, completed)
- Sortable columns
- Compact view of all prompts

**Issues:**

1. **Response Column Truncated**
   - Can see brief text but can't read full response
   - No expand or edit inline
   - Have to go somewhere else to write full response

2. **Status Change Unclear**
   - Shows status but clicking cell doesn't change it
   - User has to edit in another view?

3. **Type Column Cryptic**
   - Shows "CT", "TC", "DC" in badges
   - User has no idea what these mean
   - Should spell out or have legend

### Timeline View

**Interface:**
```
┌──────────────────────────────────────────────────┐
│                [Gantt Chart]                     │
│ Define vision  ████████                          │
│ Set budget          ███████                      │
│ Choose venue              ██████████             │
│ Guest list                       ████████        │
│                                                  │
│     ▲ Today                                      │
└──────────────────────────────────────────────────┘
```

**UX Analysis:**

**Good:**
- Visual timeline (project management style)
- Drag to adjust dates
- "Today" marker for context
- Status colors (gray, blue, green)

**Issues:**

1. **Doesn't Fit Template Use Case**
   - Templates are about content creation, not project scheduling
   - When would user need to schedule "Answer prompt 3 next Tuesday"?
   - Feels like wrong tool for the job

2. **No Time Tracking**
   - Shows dates but doesn't track actual time spent
   - Can't see "I spent 2 hours on this prompt"

3. **Confusing Start/End Dates**
   - What does it mean for a prompt to have start/end date?
   - Is it when user plans to work on it?
   - Or when it's due?

---

## 9. Dock System Analysis

### Visual Design

**Appearance:**
```
                Screen bottom center
                      ↓
        ┌─────────────────────────┐
        │  📄      📝      📖     │
        │Templates Prompts Articles│
        └─────────────────────────┘
```

**Design Qualities:**
- Floating above content (good visual hierarchy)
- Centered alignment (balanced)
- Icon + label (clear affordance)
- Rounded corners (friendly)

### Interaction Patterns

#### Pattern 1: Click to Open Drawer

**Templates Drawer:**
1. Click "Templates" in dock
2. Drawer slides up from bottom (smooth animation)
3. Shows:
   - Search input at top
   - A-Z letter filter (27 buttons: All + 26 letters)
   - Template count "X templates found"
   - Grid of template cards (2-4 columns responsive)
4. Click template → drawer closes → template selected
5. Header updates to show new template

**User Experience:**
- ✅ Animation is smooth
- ✅ Can search quickly
- ✅ Letter filter is helpful for long lists
- ❌ A-Z filter takes up lot of space (4 rows on mobile)
- ❌ Can't sort by category, popularity, recent

#### Pattern 2: Context-Dependent Content

**Prompts Drawer:**
1. Click "Prompts" in dock
2. Drawer shows prompts for CURRENTLY SELECTED template
3. If no template selected → empty state

**Problem:**
- User might not realize prompts are template-specific
- Empty state doesn't explain why it's empty
- Should show: "Select a template first" with arrow pointing to Templates dock item

**Articles Drawer:**
- Same pattern as Prompts
- Template-dependent content
- Same confusion for users

### Drawer UX Issues

**Issue #1: Height Overwhelms**
```
Before drawer:
┌─────────────────┐
│                 │ 100vh
│  Working here   │
└─────────────────┘

After drawer opens:
┌─────────────────┐
│ Squeezed :(     │ 40vh
├─────────────────┤
│                 │
│   DRAWER        │ 60vh
│   (covers work) │
└─────────────────┘
```

**User Problem:**
- Can't see workspace while browsing prompts
- Have to close drawer to see work
- Can't reference writing while selecting next prompt

**Better Design Options:**
- Side drawer (doesn't cover work)
- Smaller drawer (30vh instead of 60vh)
- Docked panel that pushes content up
- Popover near dock (not full-width)

**Issue #2: Drawer Sequence is Linear**

**Current Flow:**
1. Select template (Drawer 1)
2. Close drawer
3. Browse prompts (Drawer 2)
4. Close drawer
5. Work in view mode
6. Need to reference article (Drawer 3)
7. Close drawer
8. Back to work

**Friction Points:**
- Too many open/close cycles
- Can't have multiple drawers open
- Can't keep prompts visible while working

**Better Pattern:**
```
┌────────────┬──────────────────┐
│ Templates  │                  │
│ Prompts    │  Workspace       │
│ Articles   │                  │
│            │                  │
│ [Sidebar]  │  [Main Area]     │
└────────────┴──────────────────┘

All resources in persistent sidebar
```

**Issue #3: No Keyboard Navigation**
- Can't tab between dock items
- Can't use arrow keys in drawers
- No keyboard shortcuts (Cmd+T for templates, etc.)
- Accessibility issue

**Issue #4: Search Doesn't Persist**

**Problem:**
1. Open Templates drawer
2. Search "wedding"
3. Select a template → drawer closes
4. Open Prompts drawer
5. Search is cleared → have to search again

**Expected:**
- Search state should persist per drawer
- Or have global search across all content

---

## 10. Consistency & Patterns

### Consistent Patterns (Good)

**1. Empty States**
```
All views with no content show:
┌─────────────────────┐
│  [Icon]             │
│  Title              │
│  Description        │
└─────────────────────┘
```
Examples:
- "No template selected" in view modes
- "No prompts found" in search results
- "No favorite templates yet" in dashboard

**2. Pagination**
```
Showing 1-20 of 150
[← Previous] [Next →]
```
- Consistent across all views
- Clear current range
- Disabled state when at boundaries

**3. Search Bars**
```
[🔍 Search X...]
```
- All search boxes have same style
- Magnifying glass icon on left
- Placeholder text contextual
- Live filtering (no submit button)

**4. Badges**
```
[Category name] - Outline style
[Status]       - Filled style
[Count]        - Secondary style
```
- Consistent color meanings
- Consistent sizing
- Appropriate variants

### Inconsistent Patterns (Bad)

**1. Template Selection**

In Workspaces View (Dock):
- Click Templates → drawer → grid of cards
- Has A-Z letter filter

In Templates View (Main Page):
- Table layout
- No letter filter
- Different search UX

**Why it's confusing:**
- Same content (templates)
- Different interfaces
- Different features
- User expects same experience

**2. Prompt/Article Filtering**

In Workspaces View (Dock):
- Filtered by selected template
- User must select template first

In Prompts/Articles View (Main):
- Also filtered by template (same state)
- But no UI to change template
- Invisible dependency

**Should be:**
- Either both have template selector
- Or both show all content with filters

**3. View Mode Visibility**

Workspace View:
- View modes make sense
- User can switch between Chat, Board, Editor, etc.

Other Views:
- View modes visible in sidebar
- But clicking them does nothing
- Confusing and frustrating

**Should be:**
- Hide view modes when not in Workspace
- Or gray them out with tooltip
- Or make them universal (let user view templates in table/grid/etc.)

**4. Action Buttons**

Templates Table:
- Button says "Open" → goes to template detail

Dashboard Tables:
- Button says "Open" → goes to template detail

Prompts Table:
- Button says "View" → goes to template detail

**Should be:**
- Consistent language ("View" or "Open", pick one)
- Or different actions (prompts should "Use" not "View")

---

## 11. Usability Issues

### Critical Issues (Blockers)

**C1: Can't Create Workspace**
- Interface exists (Workspaces view)
- But can't create, save, or load workspaces
- User can interact but nothing persists
- **Impact:** App is essentially a demo

**C2: Can't Use Prompts**
- Can view prompts in multiple places
- But can't insert them into workspace
- Can't copy them
- Can't interact beyond viewing
- **Impact:** Prompts are useless

**C3: View Modes Don't Use Templates**
- User selects template
- Opens Chat view
- Generic prompts appear (not from template)
- **Impact:** Template selection is meaningless

**C4: No Way to Save Work**
- User writes responses in Split view
- Refreshes page → all gone
- No save button, no auto-save, no export
- **Impact:** Can't trust the app

### High Priority Issues

**H1: Favorites Broken**
- Empty state says "Star templates to add them here"
- No star button anywhere
- User can't complete the action
- **Impact:** Misleading UI, broken promise

**H2: Recent Templates Not Recent**
- Dashboard shows "Recent" tab
- Shows first 5 templates (not actually recent)
- Timestamps all say "2 days ago" (fake)
- **Impact:** Loses user trust

**H3: Stats Are Fake**
- "Active Workspaces: 3" (hardcoded)
- "Words This Month: 12,450" (fake)
- "Templates Used: 8" (made up)
- **Impact:** Users realize it's not real

**H4: Chart Shows Wrong Data**
- "Desktop" and "Mobile" metrics
- Doesn't relate to template usage
- Dates from April-June when it's October
- **Impact:** Confusing and obviously fake

**H5: Search Doesn't Show in Sidebar**
- Sidebar has "Search" button
- Clicking it does... nothing?
- Should open global search
- **Impact:** Dead UI element

### Medium Priority Issues

**M1: No Loading Skeletons**
- Loading states just say "Loading..."
- Should show skeleton placeholders
- Makes app feel slower
- **Impact:** Perceived performance

**M2: Truncated Text Everywhere**
- Descriptions cut off with "..."
- No tooltip on hover
- No expand option
- **Impact:** Can't read full content

**M3: No Keyboard Shortcuts**
- Can't navigate with keyboard
- No shortcuts for common actions
- Accessibility issue
- **Impact:** Power users frustrated

**M4: No Breadcrumbs**
- In Workspaces view, hard to know where you are
- No "Dashboard > Workspaces > Wedding Planning"
- **Impact:** Users get lost

**M5: No Undo/Redo**
- User deletes text → can't undo
- Changes view mode → can't go back
- **Impact:** Anxiety about making mistakes

### Low Priority Issues

**L1: Icon Inconsistency**
- Mix of filled and outline icons
- Different icon libraries?
- **Impact:** Visual polish

**L2: No Dark Mode Toggle**
- App might support dark mode
- But can't find toggle
- **Impact:** User preference

**L3: No Help/Tooltips**
- Complex interface
- No onboarding tour
- No contextual help
- **Impact:** Learning curve

**L4: Mobile Not Optimized**
- Dock might be awkward on mobile
- Tables are scrollable but clunky
- **Impact:** Mobile experience poor

---

## 12. User Journey Maps

### Journey 1: New User Explores App

**Goal:** Understand what the app does and try creating something

**Steps:**
```
1. Lands on Dashboard
   😐 "Lots of numbers, what do they mean?"

2. Sees stat cards
   🤔 "150 templates... for what?"

3. Looks at chart
   😕 "Desktop vs Mobile? This isn't analytics..."

4. Scrolls to tables
   🙂 "Oh, templates! Let me click one"

5. Clicks "Open" on a template
   ✅ Goes to template detail page (different area of app)

6. Returns to /workspace
   😐 "Back to square one"

7. Clicks "Workspaces" in sidebar
   🤔 "My Workspace... what does this do?"

8. Sees blank Chat view
   😕 "Where are the templates?"

9. Notices dock at bottom
   🙂 "Oh! Templates button"

10. Opens Templates drawer
    😃 "There they are! Let me pick one"

11. Selects "Wedding Planning"
    ✅ Drawer closes, template selected

12. Now in Chat view with generic prompts
    😕 "Are these from the wedding template?"

13. Types response and hits Enter
    ✅ Response sent, new prompt appears

14. Continues conversation
    🙂 "This is nice!"

15. Clicks Board view in sidebar
    🤔 "Different prompts now?"

16. Confused about view modes
    😐 "What's the difference?"

17. Refreshes page
    😱 "All my work is gone!"

18. Leaves app disappointed
    ❌ "Cool demo, but can't use it"
```

**Pain Points:**
- No onboarding or explanation
- Template selection not obvious
- Work doesn't persist
- View modes confusing

**Suggestions:**
- Welcome tour for new users
- Clearer call-to-action: "Start with a template"
- Auto-save with visual feedback
- Explain view modes with examples

### Journey 2: Returning User Tries to Resume Work

**Goal:** Continue working on a previous workspace

**Steps:**
```
1. Lands on Dashboard
   🤔 "Where's my wedding planning workspace?"

2. Looks at "Active Workspaces: 3"
   🙂 "Oh, I have 3 workspaces!"

3. Clicks on the stat card
   😐 Nothing happens (not clickable)

4. Scrolls to Workspaces tab
   ✅ Sees table with 3 workspaces

5. Clicks "Open" on "Morning Journal"
   😕 Just loads Workspaces view (generic)

6. Realizes workspaces don't exist
   ❌ "Those are fake examples..."

7. Tries to create new workspace
   😠 "Where's the Create button?"

8. Can't find it
   ❌ Gives up and leaves
```

**Pain Points:**
- Fake data misleads user
- No way to create workspaces
- No way to load saved work
- No clear path forward

**Suggestions:**
- Remove fake data or label as examples
- Prominent "Create Workspace" button
- Recent workspaces on dashboard
- Quick resume feature

### Journey 3: User Wants to Export Work

**Goal:** Save responses as a document to share

**Steps:**
```
1. In Split view, writes responses
   ✅ Completes all prompts

2. Looks for Export button
   😐 "Not in header..."

3. Checks sidebar menu
   😐 "Not there either..."

4. Looks at view mode options
   😕 "Maybe Text Editor has export?"

5. Switches to Text Editor
   😱 "It's blank! Where's my work?"

6. Switches back to Split view
   😰 "At least it's still here"

7. Tries to select all text to copy
   😠 "Each response in separate box"

8. Copies responses one by one
   😤 Pastes into Word document

9. Formats manually
   😩 "This is painful"

10. Vows to never use app again
    ❌ "Waste of time"
```

**Pain Points:**
- No export functionality
- Work siloed in different views
- Can't get work out of app

**Suggestions:**
- Export button in header
- PDF, Word, Markdown options
- "Copy all responses" button
- Email to self option

---

## 13. Recommendations

### Quick Wins (High Impact, Low Effort)

**QW1: Fix View Mode Visibility**
```javascript
// Only show view modes when in Workspaces view
{currentView === 'workspaces' && (
  <NavViewMode ... />
)}
```
**Impact:** Eliminates confusion about when view modes work

**QW2: Add Template Selector to Prompts/Articles Views**
```
┌─────────────────────────────────┐
│ Prompts                         │
│ [Select Template ▼] Currently:  │
│ Wedding Planning Template       │
└─────────────────────────────────┘
```
**Impact:** Makes template context visible and changeable

**QW3: Remove Fake Data**
- Don't show mock workspaces
- Don't show fake stats
- Show empty states instead: "No workspaces yet. Create one!"
**Impact:** Honest UI builds trust

**QW4: Make Stat Cards Clickable**
```
All Templates card → navigates to Templates view
Active Workspaces → opens workspace list
Templates Used → shows usage analytics
```
**Impact:** Obvious affordance pays off

**QW5: Add Letter Filter to Templates View**
- Already exists in drawer
- Copy same UI to main Templates view
**Impact:** Consistency + better UX

### Medium Effort Improvements

**ME1: Persistent Sidebar Instead of Dock**
```
Replace floating dock with sidebar panel:
┌──────────┬─────────────────┐
│Templates │                 │
│Prompts   │  Workspace      │
│Articles  │                 │
│          │                 │
│[Sidebar] │  [View Mode]    │
└──────────┴─────────────────┘
```
**Impact:** Always accessible, doesn't cover work

**ME2: Action Buttons in Drawers/Tables**
```
Prompts:
- [Copy Text] [Use in Workspace] [View Template]

Articles:
- [Read] [Save for Later] [View Template]
```
**Impact:** Makes content actionable

**ME3: Progress Indicators**
```
Chat view: "Question 3 of 12"
Board view: "8 of 15 prompts complete"
Checklist: "60% complete"
```
**Impact:** User knows where they stand

**ME4: Loading Skeletons**
```
Replace "Loading..." text with:
┌─────────────────┐
│ ▂▂▂▂▂▂▂▂▂▂▂▂▂   │
│ ▂▂▂▂▂▂▂▂▂       │
│ ▂▂▂▂▂▂▂▂▂▂▂▂▂▂  │
└─────────────────┘
```
**Impact:** Feels faster, more polished

**ME5: Keyboard Shortcuts**
```
Cmd+K: Global search
Cmd+N: New workspace
Cmd+E: Export
Tab: Navigate between elements
Esc: Close drawers/modals
```
**Impact:** Power users happy, accessibility improved

### Major Enhancements

**MJ1: Onboarding Flow**
```
First visit:
1. "Welcome to Templata!"
2. "Choose a template to get started"
3. "Pick a view mode that fits your style"
4. "Your work auto-saves as you go"
5. "Export anytime as PDF or Word"
```
**Impact:** Reduces confusion, increases completion

**MJ2: Unified View System**
```
Instead of separate views + modes:
┌────────────────────────────────┐
│ [Template Selector ▼]          │
│ Wedding Planning Template      │
│                                │
│ View as: [Grid][List][Kanban]  │
│ [Table][Timeline][Editor]      │
└────────────────────────────────┘
```
**Impact:** Clearer mental model

**MJ3: Smart Templates**
```
When template selected:
- Chat view loads template prompts
- Board view creates columns from template structure
- Text editor pre-populates with template sections
```
**Impact:** Template selection becomes meaningful

**MJ4: Multi-Panel Layout**
```
┌────────┬──────────┬─────────┐
│Template│Workspace │Resources│
│PromptFlow│ Editor   │Articles│
│Section1│[Writing] │Related  │
│Section2│          │Links    │
└────────┴──────────┴─────────┘
```
**Impact:** Everything visible, no drawer juggling

### Interaction Pattern Improvements

**IP1: Hover Previews**
```
Hover over template → card expands to show:
- Full description
- Prompt count
- Estimated completion time
- Preview of first few prompts
```

**IP2: Drag and Drop**
```
Drag prompt from sidebar → drops into editor
Drag article from resources → adds as reference
Drag template → creates new workspace
```

**IP3: Inline Editing**
```
Click any title → edits inline
Click response → edits in place
Click category → changes dropdown
No modal jumps
```

**IP4: Contextual Menus**
```
Right-click on:
- Template → Use, Favorite, Learn More
- Prompt → Copy, Insert, Skip
- Workspace → Rename, Duplicate, Export, Delete
```

### Visual Hierarchy Fixes

**VH1: Dashboard Redesign**
```
Priority order:
1. Hero: "Welcome back! Continue your work"
   [Recent workspace cards with thumbnails]

2. Quick Start: "Start something new"
   [Popular templates as cards]

3. Stats: "Your progress"
   [Compact stat row]

4. Activity: "Recent activity"
   [Timeline of recent actions]
```

**VH2: Template Browse as Cards**
```
Instead of table:
┌──────┬──────┬──────┬──────┐
│[Img] │[Img] │[Img] │[Img] │
│Title │Title │Title │Title │
│Desc  │Desc  │Desc  │Desc  │
│[Use] │[Use] │[Use] │[Use] │
└──────┴──────┴──────┴──────┘
Grid is more engaging than table
```

**VH3: Workspace Header Enhancement**
```
┌─────────────────────────────────────┐
│ [←] Wedding Planning ✏️             │
│ Sarah's Wedding 2024                │
│ ████████░░ 80% complete             │
│ [💾 Saved] [📤 Export] [⋮ Menu]     │
└─────────────────────────────────────┘
```

### Mobile Considerations

**M1: Bottom Sheet Instead of Drawer**
- iOS/Android native pattern
- Easier to dismiss (swipe down)
- Doesn't cover as much content

**M2: Sticky Dock on Mobile**
- Always visible
- Collapses to icons only
- Tap to expand

**M3: Swipe Gestures**
- Swipe left/right to change view modes
- Swipe up on prompt to insert
- Swipe down to dismiss

---

## Summary: Critical UX Gaps

### What's Confusing

1. **View Modes Visible Everywhere But Only Work in One View**
   - User clicks Chat view in Dashboard → nothing happens
   - No feedback, no explanation
   - Feels broken

2. **Template Selection Hidden in Dock**
   - User in Prompts view sees "0 prompts"
   - No way to select template from that view
   - Have to know to go to Workspaces → open dock → select template

3. **No Persistence**
   - User does work → refreshes → work gone
   - "Auto-saved" message lies
   - Can't trust the app

4. **Fake Data Everywhere**
   - Stats are hardcoded
   - Workspaces are examples
   - Chart shows April data in October
   - Undermines credibility

5. **Can't Do Anything with Prompts/Articles**
   - Can view them
   - Can search them
   - But can't use, copy, insert, or interact
   - Dead ends

### What's Missing

1. **No Clear Starting Point**
   - New user doesn't know: "Do I start with template? Workspace? Dashboard?"
   - No "New Workspace" hero button
   - No onboarding

2. **No Way to Save/Load**
   - Can create content
   - But can't save it
   - Can't load previous work
   - Makes app feel like a demo

3. **No Export**
   - User completes template
   - Now what?
   - Can't get it out of app
   - Dead end

4. **No Actionable Elements**
   - Stat cards look clickable but aren't
   - Prompts look usable but aren't
   - Charts don't link anywhere
   - Wasted affordances

5. **No Help System**
   - Complex interface
   - Many views and modes
   - No tooltips, no tour, no help docs
   - Users on their own

### What Would Make It Great

**1. Clear User Flow:**
```
Landing → "Start with template" CTA →
Template picker → Create workspace →
Choose view mode → Work (auto-saves) →
Export/Share → Done!
```

**2. Persistent Context:**
```
Always show:
- Which template am I using?
- Which workspace am I in?
- How complete is it?
- Last saved when?
```

**3. Actionable Everything:**
```
- Templates → Use, Preview, Learn
- Prompts → Insert, Copy, Skip
- Articles → Read, Save, Reference
- Stats → Drill down, See detail
```

**4. Flexible Views:**
```
Let user choose view mode for ANY content:
- Browse templates as grid, list, or table
- View prompts as chat, board, or checklist
- Organize workspaces as cards or table
```

**5. Honest Interface:**
```
- If no data, show empty state
- If feature not ready, hide it
- If action won't work, disable it
- Never show fake data
```

---

**End of UI/UX Audit**

The workspace screen has a **solid design foundation** but suffers from:
- ❌ Confusing navigation (view modes always visible)
- ❌ Broken interactions (prompts/articles not actionable)
- ❌ Misleading UI (fake data, false promises)
- ❌ Missing critical features (save, export, create)

**Fix Priority:**
1. Template selection visibility (quick win)
2. View mode contextual display (quick win)
3. Remove fake data (quick win)
4. Make content actionable (medium)
5. Add persistence indicators (medium)
