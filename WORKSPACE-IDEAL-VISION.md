# Templata Workspace: The Ideal Vision
## Production-Ready, Memorable, Life-Changing Experience

**Version:** 2.0
**Last Updated:** October 8, 2025
**Status:** Vision Document for Production Implementation

---

## 🎯 Core Vision

**"Wikipedia meets Notion for Life's Biggest Moments"**

Templata is not just another productivity app. It's a **novel experience** that guides users through life's most important decisions with **AI-curated content at massive scale** (1,300+ templates × 80 prompts × 20 articles = 2+ million pieces of guidance), delivered through a **flexible, beautiful interface** that adapts to how they think and work.

### The User's First Impression

*"Wow. Everything is just here for me to use. It really seems like a lot of thought was put into this. It's very streamlined and it's all free—that's awesome. I will definitely come back when I have another thing in life I need guidance on."*

---

## 🌟 What Makes This Special

### 1. **Unprecedented Content Scale**
- **1,300 templates** covering every life moment from wedding planning to career transitions
- **80 prompts per template** = 104,000 thought-provoking questions
- **20 articles per template** = 26,000 educational resources
- **ALL AI-curated** - not random content, but intelligently organized knowledge
- **ALL free** - democratizing life guidance

### 2. **Flexible Workflow**
- **10 view modes** that match different thinking styles
- **Chat mode** for conversational flow
- **Board mode** when you want kanban organization after weeks of planning
- **Text editor** for free-form writing
- **Table, Timeline, Checklist** for structured thinkers
- **Switch anytime** - your work adapts to the view

### 3. **Everything Accessible**
- **Dock system** keeps templates, prompts, and articles one click away
- **Browse mode** lets you explore via tables
- **Search everywhere** - never lose anything
- **Contextual loading** - see what's relevant when you need it

---

## 📐 Information Architecture

```
Templata Workspace
│
├─ Browse Content (Discovery & Management)
│  ├─ Dashboard       → Overview, stats, quick access
│  ├─ Templates       → 1,300 template library
│  ├─ Prompts         → 104,000 prompt database
│  ├─ Articles        → 26,000 learning resources
│  └─ Workspaces      → Your saved work sessions
│
└─ Create Content (Working Interface)
   ├─ Chat View       → Conversational prompt flow
   ├─ Split View      → Prompts + editor side-by-side
   ├─ Board View      → Kanban organization
   ├─ Checklist View  → Simple task completion
   ├─ Text Editor     → Free-form rich text (Novel)
   ├─ Timeline View   → Gantt-style scheduling
   ├─ Table View      → Spreadsheet organization
   ├─ Cards View      → Visual cards layout
   ├─ Outline View    → Hierarchical structure
   └─ Tabs View       → Tab-based organization
```

---

## 🎨 Visual Design Language

### Design Principles

1. **Calm & Spacious** - Life decisions deserve breathing room
2. **Professional but Friendly** - Serious work, enjoyable experience
3. **Progressive Disclosure** - Simple by default, powerful when needed
4. **Consistent but Adaptive** - Patterns that work across all views

### Color Psychology

- **Primary** - Action, confidence, forward momentum
- **Muted backgrounds** - Reduce cognitive load
- **Smart contrast** - Guides attention without overwhelming
- **Dark mode ready** - Respects user preference and context

### Typography

- **Clear hierarchy** - h1 for page titles, smaller for metadata
- **Readable body text** - Optimized for long-form reading (prompts & articles)
- **Monospace for data** - Tables, stats, counts
- **Sans-serif everywhere** - Modern, clean, accessible

---

## 🏗️ Component-by-Component Breakdown

### 1. Sidebar Navigation

```
┌─────────────────────────────┐
│ [Templata Logo]             │
│                             │
│ 🟢 Quick Create             │ ← Primary CTA
│                             │
│ BROWSE                      │ ← Section label
│ 🏠 Dashboard                │
│ 📄 Templates                │
│ 🤖 Prompts                  │
│ 📊 Articles                 │
│ 📁 Workspaces               │
│                             │
│ WORK                        │ ← Section label
│ 💬 Chat View                │
│ ⬛ Split View               │
│ 📋 Board View               │
│ ✅ Checklist View           │
│ 📝 Text Editor              │
│ ⏱️  Timeline View           │
│ 📊 Table View               │
│ 🎴 Cards View               │
│ 📑 Outline View             │
│ 📑 Tabs View                │
│                             │
│ ⚙️  Settings                │ ← Bottom section
│ ❓ Get Help                 │
│ 🔍 Search                   │
│                             │
│ [User Profile]              │ ← Footer
└─────────────────────────────┘
```

**Interaction Details:**
- **Collapsible** - Icons only when collapsed, full labels expanded
- **Active state** - Clear visual indicator for current view
- **Tooltips** - Always show on hover, even when expanded
- **Keyboard nav** - Up/down arrows, Enter to select
- **Shortcuts** - Cmd+1-9 for quick switching

**UX Enhancements:**
- Section labels ("BROWSE" / "WORK") create clear mental models
- Work section only shows when user is ready (not overwhelming initially)
- Quick Create always visible for fast workspace creation
- Settings/Help always accessible but not prominent

---

### 2. Dashboard View

```
┌─────────────────────────────────────────────────────────┐
│ Dashboard                                               │
├─────────────────────────────────────────────────────────┤
│ ┌──────────┬──────────┬──────────┬──────────┐         │
│ │1,300     │12        │15,430    │89        │         │
│ │Templates │Workspaces│Words This│Templates │         │
│ │All free  │Active    │Month ↑22%│Used      │         │
│ └──────────┴──────────┴──────────┴──────────┘         │
│                                                         │
│ [Interactive Area Chart - Template Usage Over Time]    │
│                                                         │
│ Continue Your Work                                      │
│ ┌─────────────────────────────────────────────────┐   │
│ │ [Workspace Card] [Workspace Card] [Workspace Card]│  │
│ │ Wedding Planning  Career Change    Home Buying   │   │
│ │ 78% complete      32% complete     91% complete  │   │
│ │ ████████░░        ███░░░░░░░       █████████░    │   │
│ │ [Resume →]        [Resume →]       [Resume →]    │   │
│ └─────────────────────────────────────────────────┘   │
│                                                         │
│ Explore Templates                                       │
│ [Cards showing popular/featured templates]             │
│                                                         │
│ Quick Actions                                           │
│ [+ New Workspace] [Browse Templates] [View Stats]      │
└─────────────────────────────────────────────────────────┘
```

**Key Features:**
- **Stats at a glance** - Four key metrics with trend indicators
- **Visual progress** - See workspace completion at a glance
- **Quick resume** - One click back to where you left off
- **Recommendations** - "Based on your recent work, try these templates"
- **Achievement system** - Subtle badges for milestones

**Data Visualization:**
- Area chart shows usage patterns
- Helps user see their productivity rhythms
- Can filter by template category
- Responds to time range (7d, 30d, 90d)

**Personalization:**
- "Good morning, [Name]" with contextual greeting
- "You're on a 7-day streak!" for engagement
- "Complete 3 more prompts to finish [Workspace]" for motivation

---

### 3. Templates View

```
┌─────────────────────────────────────────────────────────┐
│ Templates                              [View: Grid ▾]   │
│ 1,300 templates available                              │
│                                                         │
│ [🔍 Search templates...]                    [A-Z ▾]    │
│                                                         │
│ Categories                                              │
│ [All] [Career] [Life Events] [Health] [Finance] ...    │
│                                                         │
│ ┌──────────┬──────────┬──────────┬──────────┐         │
│ │[Preview] │[Preview] │[Preview] │[Preview] │         │
│ │Wedding   │Career    │Home      │Baby      │         │
│ │Planning  │Change    │Buying    │Planning  │         │
│ │          │          │          │          │         │
│ │⭐ 4.9    │⭐ 4.8    │⭐ 4.9    │⭐ 4.7    │         │
│ │80 prompts│80 prompts│80 prompts│80 prompts│         │
│ │20 articles│20 articles│20 articles│20 articles│       │
│ │[Use →]   │[Use →]   │[Use →]   │[Use →]   │         │
│ └──────────┴──────────┴──────────┴──────────┘         │
│                                                         │
│ [Load More]                    Showing 1-20 of 1,300   │
└─────────────────────────────────────────────────────────┘
```

**View Modes:**
- **Grid** (default) - Visual cards with previews
- **List** - Compact rows for faster scanning
- **Table** - Full details in columns

**Each Template Card Shows:**
- **Visual preview** - Screenshot or icon representing template
- **Title & subtitle** - "Wedding Planning: Complete Guide"
- **Rating** - Community ratings (future feature placeholder)
- **Content count** - "80 prompts, 20 articles"
- **Category badge** - Quick visual categorization
- **Primary action** - "Use Template" button

**Filters & Search:**
- **Search** - Live filtering as you type
- **A-Z letter filter** - Jump to templates starting with letter
- **Category chips** - Quick filtering by life area
- **Sort options** - Popular, Recent, A-Z, Rating
- **Duration filter** - Quick (< 1hr), Medium (1-3hrs), Deep (3+ hrs)

**Hover Interactions:**
- Card lifts slightly (elevation change)
- Shows "Preview" option
- Quick actions appear (Favorite, Share)

---

### 4. Prompts View

```
┌─────────────────────────────────────────────────────────┐
│ Prompts                                                 │
│ 104,000 prompts across all templates                   │
│                                                         │
│ [Template: All ▾] [Category: All ▾] [Type: All ▾]      │
│ [🔍 Search prompts...]                                  │
│                                                         │
│ ┌─────────────────────────────────────────────────┐   │
│ │ What are your core values when making this      │   │
│ │ decision?                                        │   │
│ │ Category: Self-Reflection | Type: Foundation    │   │
│ │ Used in: 23 templates                           │   │
│ │ [Copy] [Add to Workspace] [View Similar]        │   │
│ └─────────────────────────────────────────────────┘   │
│                                                         │
│ │ How does this align with your 5-year vision?    │   │
│ │ Category: Planning | Type: Strategic            │   │
│ │ Used in: 45 templates                           │   │
│ │ [Copy] [Add to Workspace] [View Similar]        │   │
│ └─────────────────────────────────────────────────┘   │
│                                                         │
│ [Show More]                    Showing 1-20 of 104,000 │
└─────────────────────────────────────────────────────────┘
```

**Key Features:**
- **Cross-template discovery** - Find prompts across all content
- **Smart filtering** - By template, category, type
- **Usage context** - See which templates use this prompt
- **Action buttons** - Copy, add to workspace, find similar
- **Favorites system** - Build your personal prompt library

**Prompt Types:**
- **Foundation** - Core value questions
- **Strategic** - Long-term thinking
- **Tactical** - Actionable planning
- **Reflective** - Emotional processing
- **Creative** - Brainstorming & ideation

---

### 5. Articles View

```
┌─────────────────────────────────────────────────────────┐
│ Articles                                                │
│ 26,000 curated learning resources                      │
│                                                         │
│ [Template: All ▾] [Type: All ▾] [Read Time: All ▾]     │
│ [🔍 Search articles...]                                 │
│                                                         │
│ ┌─────────────────────────────────────────────────┐   │
│ │ The Complete Guide to Wedding Budget Planning   │   │
│ │ Learn how to allocate your wedding budget...    │   │
│ │ 📖 Guide | ⏱️  8 min read | Wedding Planning     │   │
│ │ [Read] [Save] [Cite in Workspace]               │   │
│ └─────────────────────────────────────────────────┘   │
│                                                         │
│ │ 10 Questions to Ask Before Choosing a Venue     │   │
│ │ Critical factors that couples often overlook...  │   │
│ │ 📋 Checklist | ⏱️  3 min read | Wedding Planning │   │
│ │ [Read] [Save] [Cite in Workspace]               │   │
│ └─────────────────────────────────────────────────┘   │
│                                                         │
│ [Load More]                     Showing 1-20 of 26,000 │
└─────────────────────────────────────────────────────────┘
```

**Article Types:**
- **📖 Guide** - Comprehensive how-tos
- **📋 Checklist** - Actionable steps
- **📊 Analysis** - Research & insights
- **💡 Tips** - Quick wins
- **📖 Case Study** - Real examples
- **🎓 Tutorial** - Step-by-step learning

**Reading Experience:**
- **Estimated read time** - Plan your reading
- **Save for later** - Build reading list
- **Cite in workspace** - Reference in your work
- **Related articles** - Discover more
- **Progress tracking** - See what you've read

---

### 6. Workspaces View (Table)

```
┌─────────────────────────────────────────────────────────┐
│ Workspaces                            [+ New Workspace] │
│ 12 workspaces                                           │
│                                                         │
│ [🔍 Search workspaces...]                               │
│                                                         │
│ ┌─────────────────────────────────────────────────┐   │
│ │Name          │Template    │Updated │Progress   │    │
│ ├─────────────────────────────────────────────────┤   │
│ │Wedding Plan  │Wedding     │2h ago  │████████░░│78%│  │
│ │  Sarah's     │Planning    │        │2,340 words│[Open]│
│ ├─────────────────────────────────────────────────┤   │
│ │Career Change │Career      │1d ago  │███░░░░░░░│32%│  │
│ │  Tech to..   │Transition  │        │890 words  │[Open]│
│ ├─────────────────────────────────────────────────┤   │
│ │Home Search   │Home Buying │3d ago  │█████████░│91%│  │
│ │  SF Bay Area │            │        │4,120 words│[Open]│
│ └─────────────────────────────────────────────────┘   │
│                                                         │
│ [Previous] Page 1 of 2 [Next]                          │
└─────────────────────────────────────────────────────────┘
```

**Workspace Metadata:**
- **Custom name** - User-defined, editable
- **Template basis** - Which template it's based on
- **Last edited** - Recency indicator
- **Progress** - Visual progress bar + percentage
- **Word count** - Shows effort invested
- **Status** - Draft, In Progress, Complete, Archived

**Actions Per Row:**
- **Open** - Resume working (remembers last view mode)
- **Duplicate** - Clone for variations
- **Export** - PDF, Word, Markdown
- **Share** - Get shareable link (future)
- **Archive** - Hide from main list
- **Delete** - Permanent removal (with confirmation)

**Bulk Actions:**
- Select multiple workspaces
- Export all as ZIP
- Move to folder (future organization feature)
- Change status for all

---

### 7. Working Views - Universal Elements

**Every working view (Chat, Split, Board, etc.) shares:**

#### Header Bar
```
┌─────────────────────────────────────────────────────────┐
│ Wedding Planning: Sarah's Wedding 2024                 │
│ Template: Wedding Planning | 78% Complete | 2,340 words│
│ [💾 Saved 2 min ago]  [Export ▾]  [⋮ More]             │
└─────────────────────────────────────────────────────────┘
```

- **Workspace name** - Editable inline
- **Template indicator** - Shows which template
- **Progress indicator** - Completion percentage
- **Word count** - Shows content created
- **Auto-save status** - "Saved just now" gives confidence
- **Export dropdown** - PDF, Word, Markdown, Email
- **More menu** - Settings, Share, Archive, Delete

#### Floating Dock (Bottom Center)
```
         ┌──────────────────────────────┐
         │ 📄        📝        📖       │
         │Templates  Prompts  Articles  │
         └──────────────────────────────┘
```

**Always visible, always accessible:**
- **Templates** - Switch to different template
- **Prompts** - Browse and insert prompts
- **Articles** - Reference learning resources

**Dock Drawer Interactions:**
- **Click** - Opens bottom drawer (40vh height)
- **Drag handle** - Resize drawer height
- **Swipe down** - Close drawer
- **Stays open** - Until user dismisses (no auto-close frustration)
- **Keyboard** - Cmd+T, Cmd+P, Cmd+A shortcuts

---

### 8. Chat View (Detailed)

```
┌─────────────────────────────────────────────────────────┐
│ Wedding Planning: Sarah's Wedding 2024           [Header]│
├─────────────────────────────────────────────────────────┤
│                                                         │
│ 🤖 What are your main goals for this wedding?          │
│    [Getting Started | Question 1 of 12]                │
│                                                         │
│         We want an intimate, meaningful ceremony   👤  │
│         that reflects our love for nature and...       │
│                                                         │
│ 🤖 Beautiful! What's your realistic budget range?      │
│    [Budget Planning | Question 2 of 12]                │
│                                                         │
│         We're thinking $25,000-$30,000 total      👤  │
│                                                         │
│ 🤖 That's a solid budget. Let's break it down...       │
│    [💡 Related Article: Budget Allocation Guide]       │
│    [Question 3 of 12]                                  │
│                                                         │
├─────────────────────────────────────────────────────────┤
│ [Type your answer...]                      [Send ➜]    │
│ Shift+Enter for new line                               │
└─────────────────────────────────────────────────────────┘
```

**UX Details:**
- **Conversational flow** - Feels like talking to a knowledgeable friend
- **Context retention** - Bot references your previous answers
- **Progress indicator** - Always know where you are
- **Article suggestions** - Relevant resources appear contextually
- **Auto-scroll** - Keeps latest prompt in view
- **Edit previous** - Click any answer to revise
- **Export conversation** - Save the whole Q&A as document

**Prompt Delivery:**
- **Sequential** - One at a time, not overwhelming
- **Smart ordering** - Foundation questions first, details later
- **Optional skips** - "Skip for now" option on every prompt
- **Branching logic** - Follow-up questions based on answers (future)

---

### 9. Split View (Detailed)

```
┌────────────┬────────────────────────────────────┐
│ Prompts    │ Wedding Planning                   │
│            │                                    │
│ ▸ Getting  │ Selected: What's your budget?     │
│   Started  │ [Budget Planning]                  │
│ • Budget ✓ │ ─────────────────────────────────  │
│ • Guest    │                                    │
│   count    │ [Rich text editor]                 │
│            │ We're allocating $25,000-$30,000   │
│ ▸ Planning │ total, with priorities being...    │
│ • Venue    │                                    │
│ • Vendors  │                                    │
│            │                                    │
│ ▸ Day-of   │                                    │
│            │                                    │
│            │ 450 words | ✓ Saved                │
├────────────┴────────────────────────────────────┤
│ [Dock: Templates | Prompts | Articles]         │
└─────────────────────────────────────────────────┘
```

**Left Panel (Prompts Navigator):**
- **Collapsible categories** - Organize prompts by section
- **Progress indicators** - ✓ for completed, bullet for pending
- **Click to navigate** - Jump to any prompt instantly
- **Search within** - Find specific prompts quickly
- **Drag to reorder** - Customize prompt sequence (future)

**Right Panel (Response Editor):**
- **Rich text editing** - Bold, italic, lists, headings
- **Prompt at top** - Always see what you're answering
- **Auto-resize** - Editor grows with content
- **Word count** - Live feedback on length
- **Save indicator** - Visual confirmation of auto-save
- **Format toolbar** - Appears on text selection

**Split Behavior:**
- **Resizable** - Drag divider to adjust panel sizes
- **Collapsed mode** - Hide prompts for focus writing
- **Keyboard nav** - Cmd+[ and Cmd+] to switch panes

---

### 10. Board View (Detailed)

```
┌──────────────┬──────────────┬──────────────┐
│ To Do (8)    │ Thinking (2) │ Done (5)     │
├──────────────┼──────────────┼──────────────┤
│ ┌──────────┐ │ ┌──────────┐ │ ┌──────────┐ │
│ │ Budget   │ │ │ Venue    │ │ │ Values   │ │
│ │ planning │ │ │ selection│ │ │ alignment│ │
│ │          │ │ │          │ │ │ ✓        │ │
│ │[Planning]│ │ │📝 Notes: │ │ └──────────┘ │
│ └──────────┘ │ │ 3 places │ │              │
│              │ └──────────┘ │              │
│ ┌──────────┐ │              │              │
│ │ Guest    │ │              │              │
│ │ list     │ │              │              │
│ └──────────┘ │              │              │
└──────────────┴──────────────┴──────────────┘
```

**Kanban Features:**
- **Drag & drop** - Move cards between columns
- **Column customization** - Rename, add, remove columns
- **Card details** - Click to see full prompt & add notes
- **Color coding** - By category or priority
- **Filters** - Show only specific categories
- **Swim lanes** - Group by category (future)

**Card Interactions:**
- **Hover** - Slight lift, shows quick actions
- **Click** - Opens detail modal
- **Double-click** - Quick edit mode
- **Right-click** - Context menu (Move, Copy, Delete)
- **Keyboard** - Arrow keys to navigate, Enter to open

**Detail Modal:**
```
┌─────────────────────────────────────────┐
│ What's your realistic budget range?     │
│ [Budget Planning]                       │
├─────────────────────────────────────────┤
│ Notes:                                  │
│ [Rich text editor]                      │
│ • $25k-30k total                        │
│ • Priority: venue & catering            │
│                                         │
│ Response:                               │
│ [Full response text here...]            │
│                                         │
│ Related Articles:                       │
│ • Budget Breakdown Guide                │
│ • Cost-Saving Strategies                │
│                                         │
│ Status: ⚪ To Do ⚫ Thinking ⚫ Done     │
│ [Save] [Close]                          │
└─────────────────────────────────────────┘
```

---

### 11. Text Editor View (Detailed)

```
┌─────────────────────────────────────────────────────────┐
│ Wedding Planning: Sarah's Wedding 2024           [Header]│
├─────────────────────────────────────────────────────────┤
│                                                         │
│ # Wedding Planning Document                            │
│                                                         │
│ ## Our Vision                                          │
│ _Prompt: What are your main goals?_                   │
│                                                         │
│ We envision an intimate outdoor ceremony that...      │
│                                                         │
│ ## Budget Breakdown                                    │
│ _Prompt: What's your realistic budget?_               │
│                                                         │
│ | Category    | Allocated | Actual | Notes |          │
│ |-------------|-----------|--------|-------|          │
│ | Venue       | $8,000    | -      | TBD   |          │
│ | Catering    | $10,000   | -      | TBD   |          │
│                                                         │
│ / for commands ← [Formatting toolbar appears]          │
│                                                         │
├─────────────────────────────────────────────────────────┤
│ [Dock: Templates | Prompts | Articles]                 │
└─────────────────────────────────────────────────────────┘
```

**Novel Editor Features:**
- **Slash commands** (/) - Quick formatting & blocks
- **Rich formatting** - H1-H6, bold, italic, underline, code
- **Tables** - For structured data
- **Lists** - Bullets, numbered, checklists
- **Quotes** - Block quotes for emphasis
- **Images** - Upload and embed (future)
- **Linking** - Internal links between sections

**Template Integration:**
- **Pre-loaded structure** - Template sections become headings
- **Prompt blocks** - Prompts shown as italic prompts
- **Auto-organization** - Maintains template structure
- **Expandable sections** - Collapse sections for focus

**Slash Commands:**
- `/heading` - Add heading
- `/table` - Insert table
- `/prompt` - Insert prompt from library
- `/article` - Reference article
- `/divider` - Add horizontal rule
- `/image` - Upload image

---

### 12. Dock System (Deep Dive)

**The dock is the secret sauce** - always there, never intrusive, infinitely useful.

#### Templates Drawer

```
┌─────────────────────────────────────────────────────────┐
│ Select Template                              [×]        │
├─────────────────────────────────────────────────────────┤
│ [🔍 Search templates...]                                │
│ [All] [A][B][C][D][E][F][G][H][I][J][K][L][M]...       │
│                                                         │
│ 1,300 templates found                                   │
│ ┌──────────┬──────────┬──────────┬──────────┐         │
│ │[Preview] │[Preview] │[Preview] │[Preview] │         │
│ │Wedding   │Career    │Home      │Baby      │         │
│ │⭐ 4.9    │⭐ 4.8    │⭐ 4.9    │⭐ 4.7    │         │
│ │[Use]     │[Use]     │[Use]     │[Use]     │         │
│ └──────────┴──────────┴──────────┴──────────┘         │
│ [Show More]                                             │
└─────────────────────────────────────────────────────────┘
```

**Interaction:**
- Click template → Switches active template → Drawer stays open
- Filter by letter → Instant results
- Search → Live filtering
- Infinite scroll → Smooth loading

#### Prompts Drawer

```
┌─────────────────────────────────────────────────────────┐
│ Browse Prompts                               [×]        │
│ Prompts for Wedding Planning Template                  │
├─────────────────────────────────────────────────────────┤
│ [🔍 Search prompts...]                                  │
│ [All Categories ▾] [All Types ▾]                        │
│                                                         │
│ 80 prompts found                                        │
│                                                         │
│ ┌─────────────────────────────────────────────────┐   │
│ │ What are your core values for this wedding?     │   │
│ │ [Foundation | Getting Started]                  │   │
│ │ [Copy] [Insert ➜] [Mark Complete] [✓ Completed] │   │
│ └─────────────────────────────────────────────────┘   │
│                                                         │
│ │ What's your realistic budget range?              │   │
│ │ [Tactical | Budget Planning]                     │   │
│ │ [Copy] [Insert ➜] [Mark Complete] [✓ Completed] │   │
│ └─────────────────────────────────────────────────┘   │
│                                                         │
│ [Show More]                                             │
└─────────────────────────────────────────────────────────┘
```

**Action Buttons:**
- **Copy** - Copies prompt text to clipboard
- **Insert ➜** - Adds prompt to current view (context-aware)
  - Chat: Adds to conversation flow
  - Split: Adds to prompts list
  - Board: Creates new card
  - Text: Inserts as formatted block
- **Mark Complete** - Tracks progress
- **✓ Completed** - Shows completion status

**Smart Features:**
- Completed prompts move to bottom
- Progress bar shows "45 of 80 complete"
- Filter by completion status
- "Unanswered prompts" quick filter

#### Articles Drawer

```
┌─────────────────────────────────────────────────────────┐
│ Browse Articles                              [×]        │
│ Articles for Wedding Planning Template                 │
├─────────────────────────────────────────────────────────┤
│ [🔍 Search articles...]                                 │
│ [All Types ▾] [Read Time ▾]                            │
│                                                         │
│ 20 articles found                                       │
│                                                         │
│ ┌─────────────────────────────────────────────────┐   │
│ │ The Complete Wedding Budget Guide               │   │
│ │ Learn how to allocate your budget effectively   │   │
│ │ 📖 Guide | ⏱️  8 min | Wedding Planning          │   │
│ │ [Read ➜] [Save for Later] [Add Reference]      │   │
│ └─────────────────────────────────────────────────┘   │
│                                                         │
│ │ 10 Questions Before Choosing a Venue            │   │
│ │ Critical factors couples often overlook...      │   │
│ │ 📋 Checklist | ⏱️  3 min | Venue Selection       │   │
│ │ [Read ➜] [Save for Later] [Add Reference]      │   │
│ └─────────────────────────────────────────────────┘   │
│                                                         │
│ [Show More]                                             │
└─────────────────────────────────────────────────────────┘
```

**Action Buttons:**
- **Read ➜** - Opens article in:
  - New tab (default)
  - Side panel (future)
  - Fullscreen reader mode (future)
- **Save for Later** - Adds to reading list
- **Add Reference** - Creates citation in workspace

**Reading List Feature:**
- Saved articles accessible from sidebar
- Progress tracking (started, completed)
- Time estimates for planning
- Export reading list

---

## 🎯 User Flows

### Flow 1: Brand New User

**Goal:** Create first workspace and feel successful

```
1. Lands on /workspace → Dashboard view
   ✨ Sees clean interface, clear value prop
   ✨ "Quick Create" button is inviting

2. Clicks "Quick Create"
   → Modal: "What are you working on?"
   → Shows template categories with icons
   → User clicks "Life Events" → "Wedding Planning"

3. Modal: "Name your workspace"
   → Pre-filled: "Wedding Planning Workspace"
   → User edits: "Sarah & John's Wedding 2024"
   → "Choose starting view" - thumbnails of view modes
   → User clicks "Chat View" (recommended for first-timers)

4. Workspace created!
   → Navigates to Chat View
   → First prompt appears immediately
   → Dock is visible at bottom
   → Gentle tooltip: "Browse templates, prompts, and articles anytime"

5. User answers first prompt
   → Types response, hits Send
   → Next prompt appears naturally
   → Feels like progress

6. User curious about articles
   → Clicks Articles in dock
   → Drawer opens with relevant articles
   → Clicks "Budget Planning Guide"
   → Opens in new tab, reads, comes back

7. User wants different view
   → Clicks "Board View" in sidebar
   → Smooth transition
   → Same prompts, different layout
   → Realizes flexibility

8. User takes break
   → Closes browser
   → Returns later
   → Dashboard shows "Continue: Sarah & John's Wedding"
   → One click back to exactly where they were

🎉 Success: User has created workspace, answered prompts, explored articles, tried multiple views, and experienced persistence
```

### Flow 2: Returning Power User

**Goal:** Quickly resume work and leverage advanced features

```
1. Lands on Dashboard
   ✨ Sees "Welcome back! You're on a 5-day streak"
   ✨ 3 active workspaces shown with progress bars
   ✨ "Sarah & John's Wedding - 78% complete"

2. Clicks "Resume" on wedding workspace
   → Opens directly in last-used view (Split View)
   → Scroll position preserved
   → Next unanswered prompt is highlighted

3. Uses keyboard shortcut Cmd+P
   → Prompts drawer opens instantly
   → Types search: "flower"
   → Finds "What's your flower budget?"
   → Clicks "Insert"
   → Prompt adds to left panel

4. Answers prompt in right panel
   → Uses rich text formatting
   → Bold for key points
   → Creates numbered list

5. References article
   → Cmd+A opens Articles drawer
   → Searches "seasonal flowers"
   → Clicks "Add Reference"
   → Citation appears in editor: "[1] Seasonal Flower Guide"

6. Switches to Board View
   → Cmd+3 keyboard shortcut
   → Instant transition
   → Moves 3 prompts from "Thinking" to "Done"
   → Progress bar jumps to 85%

7. Ready to export
   → Clicks Export button
   → Choose "PDF with images"
   → Downloads "Sarah-John-Wedding-Plan.pdf"
   → Beautiful formatted document

🎉 Success: Power user leveraged shortcuts, cross-referenced articles, used multiple views, tracked progress, and exported final product
```

### Flow 3: Explorer/Researcher

**Goal:** Browse templates and prompts without committing

```
1. Curious about what Templata offers
   → Lands on Dashboard
   → Clicks "Templates" in sidebar

2. Templates view loads
   → 1,300 templates in grid
   → Filters by category: "Career"
   → Sees "Career Change", "Interview Prep", "Salary Negotiation"

3. Hovers on "Career Change"
   → Preview appears
   → "80 prompts, 20 articles"
   → "View Preview" option

4. Clicks "Preview"
   → Modal shows:
     - Template description
     - Sample prompts (first 5)
     - Article titles
     - Example workflows
   → Doesn't commit yet

5. Closes preview, switches to Prompts view
   → Filters to "Career" templates
   → Searches "values"
   → Finds deep self-reflection prompts
   → Copies a few to personal notes

6. Explores Articles view
   → Reads 3 articles without creating workspace
   → Saves 5 articles to reading list

7. Ready to commit
   → Goes back to Templates
   → Clicks "Use Template" on Career Change
   → Creates workspace
   → Now has context and confidence

🎉 Success: User explored without friction, gained confidence through browsing, then committed when ready
```

---

## 🎨 Polish & Delight

### Microinteractions

**Loading States:**
- **Skeleton screens** instead of spinners
- **Progressive loading** - Show structure first, content fills in
- **Optimistic updates** - UI responds immediately, syncs in background

**Transitions:**
- **View mode switches** - Fade out → content change → fade in (300ms)
- **Drawer opening** - Slide up with bounce easing
- **Card hover** - Lift 4px with soft shadow
- **Button press** - Scale down 98% then bounce back

**Feedback:**
- **Copy success** - Tooltip "Copied!" appears for 2s
- **Save confirmation** - "Saved just now" updates in real-time
- **Progress milestones** - Confetti animation at 25%, 50%, 75%, 100%
- **Streak celebration** - Badge animation for daily usage

### Empty States

**No workspaces yet:**
```
┌─────────────────────────────────────┐
│     [Illustration of workspace]     │
│                                     │
│     No workspaces yet              │
│     Create your first workspace     │
│     to get started!                 │
│                                     │
│     [+ Create Workspace]            │
│                                     │
│     Or explore:                     │
│     [Browse Templates]              │
│     [View Sample Workspace]         │
└─────────────────────────────────────┘
```

**No prompts completed:**
```
┌─────────────────────────────────────┐
│     [Illustration of checklist]     │
│                                     │
│     No prompts completed yet        │
│     Answer your first prompt to     │
│     start making progress!          │
│                                     │
│     [View Prompts]                  │
└─────────────────────────────────────┘
```

### Keyboard Shortcuts

**Global:**
- `Cmd+K` - Quick search (everywhere)
- `Cmd+N` - New workspace
- `Cmd+/` - Show all shortcuts
- `Esc` - Close modals/drawers
- `Cmd+S` - Manual save (though auto-save is constant)

**Navigation:**
- `Cmd+1-5` - Switch browse views (Dashboard, Templates, etc.)
- `Cmd+Shift+1-9` - Switch work views (Chat, Split, etc.)
- `Cmd+T` - Open Templates drawer
- `Cmd+P` - Open Prompts drawer
- `Cmd+A` - Open Articles drawer

**Editing:**
- `Cmd+B` - Bold
- `Cmd+I` - Italic
- `Cmd+L` - Insert link
- `Cmd+Z/Cmd+Shift+Z` - Undo/Redo
- `Tab` - Indent
- `Shift+Tab` - Outdent

### Accessibility

**Screen Readers:**
- Semantic HTML throughout
- ARIA labels on all interactive elements
- Skip links for keyboard navigation
- Focus indicators on all focusable elements

**Keyboard Navigation:**
- All features accessible without mouse
- Tab order follows visual hierarchy
- Shortcuts don't conflict with browser/OS

**Visual:**
- WCAG AA contrast ratios minimum
- Colorblind-safe palette
- Text scalable to 200%
- No information conveyed by color alone

**Motor:**
- Large click targets (44px minimum)
- Forgiving hover states
- No timing-dependent interactions
- Drag-and-drop alternatives (keyboard)

---

## 📱 Responsive Behavior

### Desktop (1920px+)
- Full sidebar + main content + dock
- Multi-column layouts
- Hover interactions rich
- Keyboard shortcuts prominent

### Laptop (1280-1920px)
- Collapsible sidebar (icons only mode)
- Adjusted column counts (3 instead of 4)
- Maintains all functionality

### Tablet (768-1280px)
- Sidebar becomes off-canvas drawer
- Hamburger menu
- Dock remains fixed at bottom
- Touch-optimized targets (48px)
- Swipe gestures work

### Mobile (< 768px)
- Full-screen views
- Bottom navigation instead of sidebar
- Dock collapses to FAB (Floating Action Button)
- Swipe between views
- Simplified tables (card layout)

---

## 🔮 Future Enhancements

### Phase 2 Features

**AI Assistance:**
- Smart prompt suggestions based on previous answers
- Writing assistance in text editor
- Auto-summarization of responses
- Conversational follow-ups in Chat view

**Collaboration:**
- Share workspaces with others (read-only or edit)
- Comments on prompts
- Real-time collaboration (Google Docs style)
- Version history

**Advanced Organization:**
- Folders for workspaces
- Tags system
- Custom categories
- Smart collections (dynamic filtering)

**Personalization:**
- Custom view mode layouts
- Saved filters
- Theme customization
- Widget dashboard

**Analytics:**
- Time tracking per workspace
- Productivity insights
- Completion patterns
- Usage statistics

### Phase 3 Features

**Mobile Apps:**
- Native iOS app
- Native Android app
- Offline mode with sync
- Push notifications for reminders

**Integrations:**
- Export to Notion
- Export to Google Docs
- Calendar integration
- Email integration

**Community:**
- Template marketplace (user-created)
- Share workspaces publicly
- Upvote/review templates
- Featured workspaces gallery

**Premium Features:**
- Unlimited workspaces (free: 10)
- Priority support
- Advanced analytics
- Custom branding
- API access

---

## 🎯 Success Metrics

### User Engagement
- **Activation:** 70%+ create first workspace
- **Retention:** 40%+ return within 7 days
- **Completion:** 60%+ complete at least one workspace
- **Multi-view:** 50%+ try 3+ different view modes

### Content Interaction
- **Templates:** Average 3 templates explored per user
- **Prompts:** Average 25 prompts answered per workspace
- **Articles:** Average 5 articles read per workspace
- **Export:** 30%+ export final document

### Satisfaction
- **NPS:** 50+ (excellent for free product)
- **Session time:** 20+ minutes average
- **Return rate:** 3+ visits per week for active users
- **Referral rate:** 20%+ recommend to others

---

## 💡 Design Philosophy

**1. Progressive Complexity**
Start simple, reveal power gradually:
- First visit: See clean dashboard, obvious "Create" button
- First workspace: Chat view (simplest)
- After completion: Suggest trying different view modes
- Power user: Discover shortcuts, advanced features

**2. Respect User's Time**
Every interaction should feel fast:
- < 100ms UI response time
- < 1s page load time
- Instant view mode switching
- Optimistic updates everywhere

**3. Never Lose Work**
User's trust is everything:
- Auto-save every 5 seconds
- Local storage backup
- Recovery after crashes
- Export at any time

**4. Beauty in Function**
Design serves purpose:
- Visual hierarchy guides attention
- Animations provide feedback
- White space reduces cognitive load
- Colors have meaning

**5. Accessible to All**
Inclusive by design:
- Keyboard navigation complete
- Screen reader compatible
- Colorblind safe
- Works on all devices

---

## 🚀 Implementation Priorities

### Must-Have for Launch
1. ✅ All browse views (Dashboard, Templates, Prompts, Articles, Workspaces)
2. ✅ Core work views (Chat, Split, Board, Text Editor)
3. ✅ Dock system with drawers
4. ✅ Template selection and switching
5. ⚠️ Auto-save (localStorage first, then backend)
6. ⚠️ Export to PDF/Markdown
7. ⚠️ Keyboard shortcuts
8. ⚠️ Responsive design (mobile-friendly)

### Nice-to-Have for Launch
9. Timeline, Table, Checklist views
10. Progress tracking
11. Reading list feature
12. Workspace search
13. Dark mode
14. Onboarding tour

### Post-Launch
15. Cards, Outline, Tabs views
16. AI writing assistance
17. Collaboration features
18. Advanced analytics
19. Mobile apps
20. Community features

---

## 📝 Content Guidelines

### Prompts Should Be:
- **Specific** - Not "What do you think?" but "What are your top 3 priorities?"
- **Actionable** - Lead to concrete answers
- **Progressive** - Build on previous answers
- **Varied** - Mix of reflection, planning, tactical
- **Open-ended** - Allow for depth

### Articles Should Be:
- **Practical** - Actionable advice, not theory
- **Concise** - Respect reader's time
- **Well-structured** - Headings, lists, clear hierarchy
- **Cited** - Reference sources
- **Relevant** - Directly related to template

### Templates Should Be:
- **Complete** - Cover the topic thoroughly
- **Organized** - Logical flow of prompts
- **Balanced** - Mix of prompt types
- **Achievable** - Completable in reasonable time
- **Flexible** - Work in all view modes

---

## 🎨 Brand Voice

**Templata speaks with:**
- **Confidence** - We know our stuff
- **Warmth** - We're on your side
- **Clarity** - We explain clearly
- **Respect** - We honor your time
- **Encouragement** - We celebrate progress

**We avoid:**
- Corporate jargon
- Condescension
- Overwhelming complexity
- False urgency
- Guilt or shame

**Examples:**
- ✅ "You're doing great! 78% complete."
- ❌ "Only 22% left! Hurry up!"
- ✅ "Let's break this down together."
- ❌ "This is a complex decision-making framework."
- ✅ "Take your time. Save and come back anytime."
- ❌ "Finish this now before you forget!"

---

## 🎯 Conclusion

**Templata Workspace is not just another productivity tool.**

It's a **life guidance system** that combines:
- 🎓 **Education** (26,000 articles)
- 🤔 **Reflection** (104,000 prompts)
- 📝 **Documentation** (10 flexible view modes)
- 🎨 **Beautiful UX** (polished, memorable, delightful)

**It meets users where they are:**
- Beginners get simple, guided experiences
- Power users get shortcuts and flexibility
- Everyone gets a system that adapts to them

**It respects users:**
- Free forever (core features)
- No dark patterns
- Privacy-first
- Export anytime

**It's built to last:**
- Scalable architecture
- Maintainable codebase
- Extensible design
- Community-ready

---

**This is the Templata we're building.**
**This is the experience users deserve.**
**This is what makes it memorable.**

Let's ship it. 🚀
