# COMPREHENSIVE FILE STRUCTURE AUDIT - MVP v3

**Date:** 2025-11-02
**Branch:** mvp-v3
**Purpose:** Complete file system audit for terminology migration

---

## DELETED FILES (Completed)

✅ Removed all migration scripts
✅ Removed `/marketing` directory (13 pages deleted)
✅ Removed `/api/migrate-localStorage` endpoint

---

## COMPLETE FILE STRUCTURE

### ROOT DIRECTORIES
```
templata/
├── src/                    ⚠️  Main source (NEEDS AUDIT)
├── public/                 ✅ Static assets (likely OK)
├── generation-scripts/     ⚠️  Scripts (check for old terminology)
├── supabase/              ✅ Empty now (migrations deleted)
├── v3-planning/           ✅ Planning docs (keep)
├── knowledge-graph/       ⚠️  Review purpose
└── claude-instructions/   ✅ Keep
```

---

## 1. APP ROUTES (`src/app/`)

### ❌ NEEDS RENAMING - ARTICLES → READINGS

```
src/app/articles/                           ❌ RENAME TO: src/app/readings/
├── page.tsx                                ❌ /articles page
├── layout.tsx                              ❌ articles layout
├── articles-hero.tsx                       ❌ rename: readings-hero.tsx
├── articles-list.tsx                       ❌ rename: readings-list.tsx
├── articles-features.tsx                   ❌ rename: readings-features.tsx
└── [slug]/                                 ❌ /articles/[slug]
    ├── page.tsx                           ❌ individual article page
    ├── layout.tsx                         ❌ article layout
    ├── article-client.tsx                 ❌ rename: reading-client.tsx
    ├── article-content.tsx                ❌ rename: reading-content.tsx
    └── table-of-contents.tsx              ✅ OK
```

**Action:** Rename entire directory + all files, update all internal references

---

### ⚠️  NEEDS REVIEW - TEMPLATES

```
src/app/templates/                          ⚠️  What is this vs /guides?
├── page.tsx                                ⚠️  Public template browser
├── layout.tsx
├── [slug]/
│   ├── page.tsx                           ⚠️  Template detail page
│   ├── template-client.tsx                ❌ rename: guide-client.tsx
│   ├── template-browse.tsx                ❌ rename: guide-browse.tsx
│   └── marketing/
│       ├── page.tsx                       ❌ SEO marketing page
│       └── marketing-client.tsx           ✅ OK (generic)
└── categories/
    └── [category]/
        ├── page.tsx
        └── layout.tsx
```

**Questions:**
- Is `/templates` different from `/guides`?
- Do we need both or consolidate?
- Marketing pages still needed?

---

### ✅ ALREADY CORRECT - GUIDES

```
src/app/guides/                             ✅ Correct route
├── page.tsx                                ✅ Guides browser
└── layout.tsx                              ✅ OK
```

---

### ⚠️  NEEDS REVIEW - LIBRARY

```
src/app/library/                            ⚠️  What does this show?
├── page.tsx                                ⚠️  Browse what? Readings? Guides?
└── layout.tsx
```

**Question:** Is this for browsing all readings? Consolidate with /readings?

---

### ✅ KEEP AS-IS - OTHER PAGES

```
src/app/about/                              ✅ Keep
src/app/axiom-engine/                       ✅ Keep (v0.5 page)
src/app/changelog/                          ✅ Keep
src/app/docs/                               ✅ Keep
src/app/faq/                                ✅ Keep (v0.5 page)
src/app/how-it-works/                       ✅ Keep
src/app/manifesto/                          ✅ Keep (v0.5 page)
src/app/partners/                           ✅ Keep (v0.5 page)
src/app/preview/                            ✅ Keep (v0.5 page)
src/app/privacy/                            ✅ Keep
src/app/terms/                              ✅ Keep
```

---

### ✅ AUTH PAGES - KEEP

```
src/app/login/                              ✅ Keep
src/app/signup/                             ✅ Keep
src/app/forgot-password/                    ✅ Keep
src/app/reset-password/                     ✅ Keep
```

---

### ✅ APP VIEW - ALREADY CORRECT

```
src/app/app/                                ✅ Main app
├── page.tsx                                ✅ App entry
├── layout.tsx                              ✅ App layout
├── settings/                               ✅ Settings
│   ├── page.tsx
│   └── layout.tsx
└── views/                                  ✅ All views correctly named
    ├── GuidesView.tsx                     ✅ Correct
    ├── GuidesViewWrapper.tsx              ✅ Correct
    ├── NotesView.tsx                      ✅ Correct
    ├── NotesViewWrapper.tsx               ✅ Correct
    ├── CalendarView.tsx                   ✅ Correct
    ├── TasksView.tsx                      ✅ Correct
    ├── AnalyticsView.tsx                  ✅ Correct
    ├── ArchiveView.tsx                    ✅ Correct
    ├── OverviewView.tsx                   ✅ Correct
    └── TracksView.tsx                     ✅ Correct
```

---

## 2. API ROUTES (`src/app/api/`)

### ✅ CORRECT ROUTES

```
src/app/api/guides/                         ✅ Correct
├── route.ts                                ✅ GET all guides
└── [guideId]/
    ├── questions/
    │   └── route.ts                       ✅ GET guide questions
    └── readings/
        └── route.ts                       ✅ GET guide readings

src/app/api/readings/                       ✅ Correct
└── [id]/
    └── route.ts                           ✅ GET specific reading

src/app/api/notes/                          ✅ Correct
src/app/api/items/                          ✅ Correct (tasks/events)
src/app/api/tracks/                         ✅ Correct
src/app/api/library/                        ✅ Correct
src/app/api/answers/                        ✅ Correct (question responses)
src/app/api/reflections/                    ✅ Correct
```

### ⚠️  DEPRECATED - OLD ROUTES

```
src/app/api/workspace/                      ⚠️  Empty directory? Delete?
```

---

## 3. COMPONENTS (`src/components/`)

### ❌ NEEDS RENAMING - TEMPLATE COMPONENTS

```
src/components/template/                    ❌ RENAME TO: src/components/guide/
├── TemplateView.tsx                        ❌ rename: GuideView.tsx
├── TemplateWorkspaceEditor.tsx             ❌ rename: GuideWorkspaceEditor.tsx
├── ReflectionView.tsx                      ❌ DELETE (not in v3)
└── related-templates.tsx                   ❌ rename: related-guides.tsx

src/components/template-of-week/            ❌ RENAME TO: src/components/guide-of-week/
└── showcase.tsx                            ⚠️  Update imports
```

---

### ❌ NEEDS UPDATING - LANDING COMPONENTS

```
src/components/landing/
└── TemplateLanding.tsx                     ❌ rename: GuideLanding.tsx
```

---

### ❌ NEEDS UPDATING - NAV COMPONENTS

```
src/components/nav-template-selector.tsx    ❌ rename: nav-guide-selector.tsx
src/components/nav-articles-list.tsx        ❌ rename: nav-readings-list.tsx
src/components/nav-prompts-list.tsx         ❌ rename: nav-questions-list.tsx
```

---

### ⚠️  NEEDS REVIEW - READINGS COMPONENTS

```
src/components/readings/                    ✅ Already correct naming!
├── ReadingContent.tsx                      ✅ OK
└── TableOfContents.tsx                     ✅ OK
```

---

### ⚠️  NEEDS REVIEW - PROMPTS COMPONENTS

```
src/components/prompts/                     ❌ RENAME TO: src/components/questions/
└── EmbeddedPrompts.tsx                     ❌ rename: EmbeddedQuestions.tsx
```

---

### ⚠️  TIPTAP PROMPT NODE

```
src/components/tiptap-node/prompt-node/     ❌ RENAME TO: question-node/
├── prompt-node-extension.ts               ❌ rename: question-node-extension.ts
├── prompt-node.scss                        ❌ rename: question-node.scss
└── prompt-node.tsx                         ❌ rename: question-node.tsx
```

---

### ✅ APP COMPONENTS - MOSTLY CORRECT

```
src/components/app/
├── guides/                                 ✅ Correct
│   └── GuideHeader.tsx                    ✅ OK
├── library/                                ✅ Correct
│   ├── ReadingCard.tsx                    ✅ OK
│   └── ReadingList.tsx                    ✅ OK
├── calendar/                               ✅ Correct
├── tasks/                                  ✅ Correct
├── analytics/                              ✅ Correct
│   ├── StatsCards.tsx                     ✅ OK
│   └── GuideProgressList.tsx              ✅ OK (already using "guide")
├── archive/                                ✅ Correct
│   └── ArchivedGuideList.tsx              ✅ OK
├── notes/                                  ✅ Correct
├── daily/                                  ✅ Correct
├── journal/                                ⚠️  Is this being used?
├── graph/                                  ⚠️  Is this being used?
│   └── GuideGraph.tsx                     ✅ Correct naming
└── timeline/                               ⚠️  Is this being used?
```

---

### ⚠️  SEO COMPONENTS

```
src/components/seo/
├── template-cta.tsx                        ❌ rename: guide-cta.tsx
├── template-faq.tsx                        ❌ rename: guide-faq.tsx
├── template-features.tsx                   ❌ rename: guide-features.tsx
├── template-hero.tsx                       ❌ rename: guide-hero.tsx
└── template-preview.tsx                    ❌ rename: guide-preview.tsx
```

---

### ⚠️  PREVIEW COMPONENTS

```
src/components/preview/
└── FullTemplatePreview.tsx                 ❌ rename: FullGuidePreview.tsx
```

---

### ⚠️  UI COMPONENTS

```
src/components/ui/
├── template-image.tsx                      ❌ rename: guide-image.tsx
└── template-sidebar.tsx                    ❌ rename: guide-sidebar.tsx
```

---

### ⚠️  OTHER COMPONENTS

```
src/components/templates-modal.tsx          ❌ rename: guides-modal.tsx
```

---

## 4. TYPES (`src/types/`)

```
src/types/template.ts                       ❌ RENAME TO: src/types/guide.ts
src/types/workspace.ts                      ✅ Keep (contains items, notes, etc.)
src/types/insight.ts                        ✅ Keep
src/types/next-auth.d.ts                    ✅ Keep
```

**Critical:** This rename will break many imports!

---

## 5. REGISTRY (`src/registry/`)

```
src/registry/templates.ts                   ❌ RENAME TO: src/registry/guides.ts
src/registry/articles.ts                    ❌ RENAME TO: src/registry/readings.ts
src/registry/marketing.ts                   ⚠️  Review if still needed (marketing deleted)
```

---

## 6. HOOKS (`src/hooks/`)

```
src/hooks/use-template-image.ts             ❌ RENAME TO: use-guide-image.ts
src/hooks/use-knowledge-graph.ts            ✅ Keep
src/hooks/use-favorites.ts                  ✅ Keep
src/hooks/useUserData.ts                    ✅ Keep
src/hooks/useSoundCues.ts                   ✅ Keep
src/hooks/use-tiptap-editor.ts              ✅ Keep
... (others)                                ✅ Keep
```

---

## 7. LIB (`src/lib/`)

```
src/lib/template-of-week.ts                 ❌ RENAME TO: guide-of-week.ts
src/lib/related-templates.ts                ❌ RENAME TO: related-guides.ts
src/lib/analytics-engine.ts                 ✅ Keep
src/lib/knowledge-graph.ts                  ✅ Keep
src/lib/collaboration.ts                    ✅ Keep
src/lib/export-utils.ts                     ✅ Keep
... (others)                                ✅ Keep
```

---

## 8. CONTEXTS (`src/contexts/`)

```
src/contexts/auth-context.tsx               ✅ Keep (no changes needed)
```

---

## 9. STORES (`src/stores/`)

```
src/stores/workspace-store.ts               ⚠️  Check for template/prompt references
```

---

## SEARCH PATTERNS FOR GLOBAL REPLACEMENT

Need to search ALL files for these patterns:

### String Patterns (case-sensitive)
```
"template"          → "guide" (selective)
"Template"          → "Guide"
"TEMPLATE"          → "GUIDE"
"templates"         → "guides"
"Templates"         → "Guides"

"prompt"            → "question" (selective)
"Prompt"            → "Question"
"PROMPT"            → "QUESTION"
"prompts"           → "questions"
"Prompts"           → "Questions"

"article"           → "reading" (selective)
"Article"           → "Reading"
"ARTICLE"           → "READING"
"articles"          → "readings"
"Articles"          → "Readings"
```

### Code Patterns
```typescript
// Type imports
import { Template } from '@/types/template'
→ import { Guide } from '@/types/guide'

// Component imports
import TemplateView from '@/components/template/TemplateView'
→ import GuideView from '@/components/guide/GuideView'

// API routes
fetch('/api/templates')
→ fetch('/api/guides')

// Variables
const template = ...
→ const guide = ...

// Props
interface TemplateProps
→ interface GuideProps
```

---

## CRITICAL QUESTIONS TO ANSWER

1. **`/templates` vs `/guides`**
   - Both routes exist
   - What's the difference?
   - Consolidate or keep separate?

2. **`/library`**
   - What does this page show?
   - Is it for browsing readings?
   - Consolidate with `/readings`?

3. **`/articles` → `/readings`**
   - Need redirects in next.config.js
   - Old URLs will break

4. **Journal/Graph/Timeline components**
   - Are these being used in v3?
   - Delete or keep?

5. **Marketing pages**
   - Already deleted
   - Update any internal links?

---

## FILES DEFINITELY NEED WORK

### Priority 1 - Break everything if not done
- [ ] `src/types/template.ts` → `guide.ts`
- [ ] All imports from `@/types/template`

### Priority 2 - User-facing routes
- [ ] `src/app/articles/` → `readings/`
- [ ] `src/app/templates/` → evaluate vs `/guides`
- [ ] Add redirects for old URLs

### Priority 3 - Components
- [ ] `src/components/template/` → `guide/`
- [ ] `src/components/prompts/` → `questions/`
- [ ] All template/prompt/article references in components

### Priority 4 - Registry & Lib
- [ ] `src/registry/templates.ts` → `guides.ts`
- [ ] `src/registry/articles.ts` → `readings.ts`
- [ ] `src/lib/related-templates.ts` → `related-guides.ts`

### Priority 5 - Cleanup
- [ ] Delete empty `/api/workspace/`
- [ ] Delete unused journal/graph/timeline?
- [ ] Global find/replace for remaining references

---

## NEXT STEPS

1. Answer critical questions above
2. Start with Priority 1 (types)
3. Move through priorities systematically
4. Test at each stage
5. Add URL redirects
6. Update any documentation

---

**END OF COMPREHENSIVE AUDIT**
