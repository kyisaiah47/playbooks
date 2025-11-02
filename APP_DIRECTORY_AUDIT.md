# APP DIRECTORY AUDIT - MVP v3
**Date:** 2025-11-02
**Branch:** mvp-v3

---

## API ROUTES (src/app/api/)

### ✅ CORRECT - Using new terminology
```
/api/guides/
├── route.ts                                  ✅ GET guides/categories
├── [guideId]/questions/route.ts             ✅ GET guide questions
└── [guideId]/readings/route.ts              ✅ GET guide readings

/api/library/
└── route.ts                                  ✅ GET guides with readings

/api/readings/
└── [id]/route.ts                             ✅ GET specific reading

/api/notes/
└── route.ts                                  ✅ Notes CRUD

/api/items/
├── route.ts                                  ✅ Items CRUD (tasks/events)
└── [id]/route.ts

/api/tracks/
├── route.ts                                  ✅ Tracks CRUD
└── [id]/route.ts

/api/answers/
└── route.ts                                  ✅ Question answers

/api/reflections/
└── route.ts                                  ✅ User reflections

/api/auth/
├── [...nextauth]/route.ts                   ✅ NextAuth
├── login/route.ts
├── signup/route.ts
├── logout/route.ts
├── me/route.ts
├── forgot-password/route.ts
└── reset-password/route.ts
```

---

## USER-FACING ROUTES (src/app/)

### ✅ CORRECT - New terminology
```
/guides/                                      ✅ Main guides browser
├── page.tsx
├── layout.tsx
├── [slug]/                                   ⚠️  Guide detail pages
│   ├── page.tsx
│   ├── template-browse.tsx                  ❌ RENAME: guide-browse.tsx
│   ├── template-client.tsx                  ❌ RENAME: guide-client.tsx
│   └── marketing/
│       ├── page.tsx
│       └── marketing-client.tsx
└── categories/[category]/
    ├── page.tsx
    └── layout.tsx

/library/                                     ✅ Readings browser
├── page.tsx
├── layout.tsx
├── readings-hero.tsx                         ✅ Correct
├── readings-features.tsx                     ✅ Correct
├── readings-list.tsx                         ✅ Correct
└── [slug]/                                   ⚠️  Reading detail pages
    ├── page.tsx
    ├── layout.tsx
    ├── article-client.tsx                    ❌ RENAME: reading-client.tsx
    ├── article-content.tsx                   ❌ RENAME: reading-content.tsx
    └── table-of-contents.tsx                 ✅ OK (generic)
```

### ✅ APP VIEW - Authenticated app
```
/app/                                         ✅ Main app
├── page.tsx                                  ✅ App entry
├── layout.tsx
├── settings/
│   ├── page.tsx
│   └── layout.tsx
└── views/                                    ✅ All views look good
    ├── GuidesView.tsx                       ✅ Correct
    ├── GuidesViewWrapper.tsx                ✅ Correct
    ├── NotesView.tsx                        ✅ Correct
    ├── NotesViewWrapper.tsx                 ✅ Correct
    ├── CalendarView.tsx                     ✅ Correct
    ├── TasksView.tsx                        ✅ Correct
    ├── AnalyticsView.tsx                    ✅ Correct
    ├── ArchiveView.tsx                      ✅ Correct
    ├── OverviewView.tsx                     ✅ Correct
    └── TracksView.tsx                       ✅ Correct
```

### ✅ PUBLIC PAGES - Keep as-is
```
/                                             ✅ Landing page
/about/                                       ✅ Keep
/axiom-engine/                                ✅ Keep
/changelog/                                   ✅ Keep
/docs/                                        ✅ Keep
/faq/                                         ✅ Keep
/how-it-works/                                ✅ Keep
/manifesto/                                   ✅ Keep
/partners/                                    ✅ Keep
/preview/                                     ✅ Keep
/privacy/                                     ✅ Keep
/terms/                                       ✅ Keep
```

### ✅ AUTH PAGES - Keep
```
/login/                                       ✅ Keep
├── page.tsx
└── verify/page.tsx
/signup/                                      ✅ Keep
/forgot-password/                             ✅ Keep
/reset-password/                              ✅ Keep
```

---

## FILES THAT NEED RENAMING

### Priority: CRITICAL - User-facing routes

#### /guides/[slug]/ files:
```
src/app/guides/[slug]/template-browse.tsx    ❌ → guide-browse.tsx
src/app/guides/[slug]/template-client.tsx    ❌ → guide-client.tsx
```

#### /library/[slug]/ files:
```
src/app/library/[slug]/article-client.tsx    ❌ → reading-client.tsx
src/app/library/[slug]/article-content.tsx   ❌ → reading-content.tsx
```

---

## SUMMARY

**API Routes:** ✅ All correct - using guides, readings, questions
**App Views:** ✅ All correct - GuidesView, NotesView, etc.
**Public Pages:** ✅ All correct - no changes needed

**NEED WORK:**
- [ ] Rename 2 files in /guides/[slug]/
- [ ] Rename 2 files in /library/[slug]/
- [ ] Check for any internal references to old names

Total files needing rename: **4 files**

---

**END OF APP AUDIT**
