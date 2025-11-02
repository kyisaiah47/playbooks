# File Structure Audit - MVP v3 Terminology Migration

**Date:** 2025-11-02
**Branch:** mvp-v3
**Status:** Audit Complete - Migration Needed

## Summary

This audit identifies all files, directories, and code references that need to be updated to reflect the new MVP v3 terminology:
- **templates** → **guides**
- **prompts** → **questions**
- **articles** → **readings**

---

## 1. Directory Structure Changes Needed

### Current Structure
```
src/
├── app/
│   ├── articles/              ❌ RENAME → readings/
│   ├── templates/             ❌ RENAME → guides/
│   ├── guides/                ✅ Already exists (keep)
│   ├── library/               ⚠️  REVIEW (what does this show?)
│   └── api/
│       ├── articles/          ❌ DELETE (deprecated)
│       ├── templates/         ❌ DELETE (deprecated)
│       ├── guides/            ✅ Keep
│       └── readings/          ❌ CREATE if needed
├── components/
│   ├── template/              ❌ RENAME → guide/
│   └── ...
├── types/
│   └── template.ts            ❌ RENAME → guide.ts
├── registry/
│   ├── templates.ts           ❌ RENAME → guides.ts
│   └── articles.ts            ❌ RENAME → readings.ts
└── hooks/
    └── use-template-image.ts  ❌ RENAME → use-guide-image.ts
```

---

## 2. Files Requiring Renaming

### Type Definitions
- [ ] `src/types/template.ts` → `src/types/guide.ts`

### Registry Files
- [ ] `src/registry/templates.ts` → `src/registry/guides.ts`
- [ ] `src/registry/articles.ts` → `src/registry/readings.ts`

### Hook Files
- [ ] `src/hooks/use-template-image.ts` → `src/hooks/use-guide-image.ts`

### Lib Files
- [ ] `src/lib/template-of-week.ts` → `src/lib/guide-of-week.ts`
- [ ] `src/lib/related-templates.ts` → `src/lib/related-guides.ts`

### Component Directories
- [ ] `src/components/template/` → `src/components/guide/`
- [ ] `src/components/template-of-week/` → `src/components/guide-of-week/`

---

## 3. Page Routes Requiring Changes

### Top-Level Routes

#### Articles → Readings
- [ ] `src/app/articles/` → `src/app/readings/`
  - [ ] `src/app/articles/page.tsx`
  - [ ] `src/app/articles/layout.tsx`
  - [ ] `src/app/articles/articles-hero.tsx`
  - [ ] `src/app/articles/articles-list.tsx`
  - [ ] `src/app/articles/articles-features.tsx`
  - [ ] `src/app/articles/[slug]/page.tsx`
  - [ ] `src/app/articles/[slug]/layout.tsx`
  - [ ] `src/app/articles/[slug]/article-client.tsx`
  - [ ] `src/app/articles/[slug]/article-content.tsx`
  - [ ] `src/app/articles/[slug]/table-of-contents.tsx`

#### Templates → Guides (Public Browse)
- [ ] `src/app/templates/` → Evaluate if needed (already have /guides)
  - Current: `/templates` - public template browser
  - Current: `/guides` - already exists
  - **Decision needed:** Keep both or consolidate?

### API Routes

#### Deprecated Routes (Should be removed)
- [ ] `src/app/api/articles/` - ❌ DELETE (not in use based on v3)
- [ ] `src/app/api/templates/` - ❌ DELETE (replaced by /guides)

#### Current Routes (Keep)
- [x] `src/app/api/guides/` - ✅ Already correct
- [x] `src/app/api/guides/[guideId]/questions/route.ts` - ✅ Already correct
- [x] `src/app/api/guides/[guideId]/readings/route.ts` - ✅ Already correct
- [x] `src/app/api/readings/[id]/route.ts` - ✅ Already correct

---

## 4. Marketing Pages

### Articles Marketing (need update)
- [ ] `src/app/marketing/articles-ad/page.tsx` → `readings-ad/page.tsx`
- [ ] `src/app/marketing/prompts-ad/page.tsx` → `questions-ad/page.tsx`
- [ ] `src/app/marketing/template-variety-ad/page.tsx` → `guide-variety-ad/page.tsx`
- [ ] `src/app/marketing/feature-prompts/page.tsx` → `feature-questions/page.tsx`

---

## 5. Component Files with Old Terminology

### In src/components/
```
src/components/template/         ❌ Directory needs renaming
src/components/template-of-week/ ❌ Directory needs renaming
```

### Need to search for internal references:
- [ ] Components importing from `@/types/template`
- [ ] Components referencing "template" in props/state
- [ ] Components referencing "prompt" terminology
- [ ] Components referencing "article" terminology

---

## 6. App Views (Already Good!)

These are already correctly named:
- [x] `src/app/app/views/GuidesView.tsx` ✅
- [x] `src/app/app/views/GuidesViewWrapper.tsx` ✅
- [x] `src/app/app/views/NotesView.tsx` ✅
- [x] `src/app/app/views/CalendarView.tsx` ✅
- [x] `src/app/app/views/TasksView.tsx` ✅
- [x] `src/app/app/views/AnalyticsView.tsx` ✅
- [x] `src/app/app/views/ArchiveView.tsx` ✅
- [x] `src/app/app/views/OverviewView.tsx` ✅
- [x] `src/app/app/views/TracksView.tsx` ✅

---

## 7. Database Schema (Not in Files, but Important)

Based on MVP v3 strategy, database tables need renaming:
- [ ] `templates` → `guides`
- [ ] `template_prompts` → `guide_questions`
- [ ] `articles` → `readings`
- [ ] `user_templates` → `user_guides`
- [ ] `template_responses` → `question_responses`

**Note:** This requires a database migration script.

---

## 8. Code Search Required

Need to do global find/replace for these terms in code:
- [ ] `template` → `guide` (selective, case-sensitive)
- [ ] `Template` → `Guide`
- [ ] `TEMPLATE` → `GUIDE`
- [ ] `prompt` → `question` (selective)
- [ ] `Prompt` → `Question`
- [ ] `article` → `reading` (selective)
- [ ] `Article` → `Reading`

**Files to scan:**
- All `.tsx` and `.ts` files
- API route handlers
- Type definitions
- Component props
- State variable names
- Function names
- Comments

---

## 9. Priority Order for Migration

### Phase 1: Type System (Foundation)
1. Rename `src/types/template.ts` → `src/types/guide.ts`
2. Update all type definitions inside
3. Update imports across codebase

### Phase 2: Registry & Core Libs
1. Rename `src/registry/templates.ts` → `src/registry/guides.ts`
2. Rename `src/registry/articles.ts` → `src/registry/readings.ts`
3. Update `src/lib/related-templates.ts` → `src/lib/related-guides.ts`
4. Update hooks

### Phase 3: Routes & Pages
1. Rename `/app/articles/` → `/app/readings/`
2. Evaluate `/app/templates/` vs `/app/guides/` consolidation
3. Update marketing pages
4. Delete deprecated API routes

### Phase 4: Components
1. Rename component directories
2. Update component file contents
3. Update imports

### Phase 5: Database Migration
1. Create migration script
2. Test on local/staging
3. Deploy to production

### Phase 6: Global Code Cleanup
1. Find/replace remaining references
2. Update comments
3. Update documentation

---

## 10. Risks & Considerations

### Breaking Changes
- **URL Changes:** `/articles/*` → `/readings/*` will break existing links
  - **Mitigation:** Add redirects in `next.config.js`
- **API Endpoints:** Changing endpoints will break any external integrations
  - **Mitigation:** Keep old endpoints as deprecated with warnings

### Database Migration Risks
- Renaming tables on production database needs careful planning
- Downtime considerations
- Rollback strategy

### Import Path Updates
- Many files import from `@/types/template`
- Need to update all imports simultaneously or use temporary aliases

---

## 11. Files Already Correct ✅

These files already use new terminology:
- `src/app/api/guides/` ✅
- `src/app/api/guides/[guideId]/questions/` ✅
- `src/app/api/guides/[guideId]/readings/` ✅
- `src/app/api/readings/` ✅
- `src/app/guides/` ✅
- `src/app/app/views/GuidesView.tsx` ✅
- Landing page (`src/app/page.tsx`) ✅ (just updated)

---

## 12. Questions for Decision

1. **What should `/library` show?**
   - Currently exists at `src/app/library/`
   - Is this for browsing all readings? Or something else?

2. **Keep both `/templates` and `/guides`?**
   - `/templates` - public browse (deprecated?)
   - `/guides` - public browse (new)
   - Or consolidate into one?

3. **Marketing pages - keep or delete?**
   - Many marketing pages reference old terminology
   - Are these still in use?

4. **Old API routes - delete immediately or deprecate?**
   - `/api/articles/`
   - `/api/templates/`

---

## Next Steps

1. Review this audit with team
2. Make decisions on open questions
3. Create detailed migration plan
4. Execute phase by phase
5. Test thoroughly at each phase

---

**End of Audit**
