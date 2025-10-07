# Life OS Workspace Design

## Brand Vision
- Templata = "Life OS" platform (operating system for life)
- Wikipedia-style: search-first, distraction-free, minimal UI
- NOT Notion templates, NOT Masterclass
- Templates are content libraries, NOT destinations

## Freemium Model

### Free Tier
- User gets 3 template unlocks
- Templates auto-unlock when user inserts first prompt from that template
- Once 3 templates unlocked → locked out of other templates
- Can only access prompts + articles from unlocked 3 templates

### Pro Tier
- Unlimited template access
- All 1300+ templates available
- No unlock tracking needed

## Workspace Layout

### Structure
```
┌─────────────────────────────────────────────────────────┐
│ Top Bar: "Life OS" | 🔍 Search | "3/3 unlocked" | User  │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  ┌──────────────────────┐  ┌────────────────────────┐   │
│  │                      │  │                        │   │
│  │   TipTap Editor      │  │  Article Panel         │   │
│  │   (Full width or     │  │  (Opens when clicked)  │   │
│  │    50% when article  │  │                        │   │
│  │    is open)          │  │                        │   │
│  │                      │  │                        │   │
│  └──────────────────────┘  └────────────────────────┘   │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

### NO SIDEBAR
- Removed for Wikipedia-style simplicity
- All navigation via cmd+K
- Clean, distraction-free workspace

### Top Bar (Minimal)
- "Life OS" branding
- Search icon (triggers cmd+K)
- Unlock status: "3/3 unlocked" or "Unlimited ∞" (pro)
- User menu

### Center: TipTap Editor
- Full width when no article open
- 50% width when article panel is open
- Clean, distraction-free
- Auto-saves to localStorage
- Transparent background styling

### Right: Article Panel
- Slides in from right when article clicked from cmd+K
- Shows full article content
- Close button (X) returns to full-width editor
- Can reference article while working in editor
- Same styling as current ResourceViewer

## cmd+K Interface

### Two Tabs

**Tab 1: "Search"** (Default)
- Searches prompts and articles
- Filtered by selected/unlocked templates
- Shows results grouped by Prompts / Articles

**Tab 2: "Templates"**
- Browse all 1300+ templates
- Grouped by category (collapsed by default)
- Click template → shows preview modal with:
  - Description
  - Sample prompts (top 5)
  - Sample articles (top 3)
  - "View full template" button → /templates/[id]
  - "Select template" button (inline)

### Pro Users: Search Filter Toggle
- When searching (Tab 1), pro users see toggle:
  - "Search selected templates only" (default)
  - "Search all templates"
- Free users: always searches only unlocked templates

## cmd+K Search Results

### Free Tier (Before 3 unlocks used)
```
cmd+K Tab 1 (Search): "divorce"

Results (searching ALL templates):
Prompts:
→ [Divorce Recovery] Document your feelings... [Insert] ← auto-unlocks template
→ [Relationship End] Process the grief... [Insert] ← auto-unlocks template

Articles:
→ [Divorce Recovery] Processing grief stages [Read]
→ [Relationship End] Moving forward guide [Read]
```

### Free Tier (After 3 unlocks used)
```
cmd+K Tab 1 (Search): "divorce"

Results (only unlocked templates):
✓ Unlocked Templates (3/3):
Prompts:
→ [Divorce Recovery ✓] Document your feelings... [Insert]

Articles:
→ [Divorce Recovery ✓] Processing grief stages [Read]

🔒 Locked Templates:
→ [Relationship End 🔒] Process the grief... [Upgrade to Pro]
→ [Relationship End 🔒] Moving forward guide [Upgrade to Pro]
```

### Pro Tier
```
cmd+K Tab 1 (Search): "divorce"

Toggle: [○ Selected only] [● All templates]

Results (ALL templates, or filtered by selected):
Prompts:
→ [Divorce Recovery] Document your feelings... [Insert]
→ [Relationship End] Process the grief... [Insert]
→ [Life Transitions] Handle major changes... [Insert]

Articles:
→ [Divorce Recovery] Processing grief stages [Read]
→ [Relationship End] Moving forward guide [Read]
```

## Template Unlock Flow

### Auto-Unlock on First Prompt Insert
1. New user opens Life OS
2. cmd+K → searches ALL templates
3. User inserts prompt from "Divorce Recovery" template
4. **Template auto-unlocks** (1/3 used)
5. Top bar updates: "1/3 unlocked"
6. User can now access ALL prompts + articles from "Divorce Recovery"

### After 3 Unlocks
7. User inserts from "Career Change" (2/3)
8. User inserts from "Home Buying" (3/3)
9. Top bar: "3/3 unlocked"
10. cmd+K now ONLY searches those 3 templates
11. Other templates show 🔒 with "Upgrade to Pro" button

## User Actions

### Inserting a Prompt
1. cmd+K → search
2. Click prompt result
3. If template not unlocked AND user has unlocks remaining:
   - Auto-unlock template
   - Insert prompt into editor
   - Update unlock count
4. If no unlocks remaining:
   - Show paywall modal
   - "Upgrade to Pro for unlimited templates"

### Reading an Article
1. cmd+K → search
2. Click article result
3. If from unlocked template:
   - Article opens in right panel
   - Editor resizes to 50% width
4. If from locked template:
   - Show paywall modal
   - Can't access article content

### Clicking Locked Content
- Shows modal: "Upgrade to Pro"
- "$X/month for unlimited access to 1300+ templates"
- Stripe checkout flow

## Database Schema

### templata_users
```sql
- id (auth user id)
- email
- subscription_tier ('free' | 'pro')
- stripe_customer_id
- stripe_subscription_id
```

### templata_user_template_unlocks
```sql
- id
- user_id
- template_id
- unlocked_at
```

### Rules
- Free tier: Max 3 unlocks (enforced by trigger)
- Pro tier: No tracking needed (unlimited access)

## Implementation TODOs

### Done
- [x] Database schema designed
- [x] API routes created (`/api/user/unlocks`)
- [x] React hook created (`useTemplateUnlocks`)

### Next
- [ ] Update cmd+K to filter by unlocked templates
- [ ] Add auto-unlock on prompt insert
- [ ] Build paywall modal
- [ ] Create Life OS workspace component (remove sidebar)
- [ ] Update article viewer to use right panel
- [ ] Add unlock status to top bar
- [ ] Implement Stripe integration

## Template Pages (/templates/[id])

Individual template pages for browsing and selecting templates.

### Design (Wikipedia-style, matches /templates and /articles pages)

**Section 1: Marketing Hero** (keep existing)
- Existing hero section with title, description, CTA

**Section 2: Prompts Library**
- Heading: "Prompts"
- Simple divided list (like articles page)
- Each row:
  ```
  [Prompt text...] | [Category badge] [Insert button]
  ```
- Clean, scannable format
- On click "Insert" → auto-unlock template + insert into workspace

**Section 3: Articles Library**
- Heading: "Articles"
- Simple divided list (like articles page)
- Each row:
  ```
  [Article title] | [Excerpt preview] | [Read time] [Read button]
  ```
- On click "Read" → opens article in workspace right panel

**Section 4: Select Button** (Sticky at bottom)
- Free users (unlocks remaining): "Select this template (2/3 remaining)"
- Free users (no unlocks): "Unlock Pro to select" (shows paywall)
- Free users (already selected): "Selected ✓"
- Pro users: "Selected ✓" or "Select this template"
- Floating sticky bar at bottom for easy access while scrolling

### Style Notes
- Match existing /templates and /articles pages
- Clean, minimal, Wikipedia-inspired
- No cards, no bento grids
- Just clean divided lists with hover states
- Easy to scan hundreds of prompts/articles

## Key Differences from Current Setup

### Before (Template-Centric)
- Each template has its own workspace
- Left sidebar shows template-specific content
- Navigate between template workspaces
- No paywall or limits

### After (Life OS)
- ONE unified workspace
- No sidebar (cmd+K only)
- Multi-template content in one place
- Freemium with 3-unlock limit
- Auto-unlock on prompt insert
- Template pages for browsing/selection
- cmd+K Templates tab for quick browsing
