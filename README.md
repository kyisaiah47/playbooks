# Templata

**Templata** is a free life planning platform that gives you expert-crafted planning guides for life's biggest moments — weddings, career changes, home buying, starting a business, and 70+ other major life events. Instead of starting from a blank page, you get structured question frameworks, curated expert readings, and a full workspace to track your progress.

Live at **[templata.org](https://templata.org)**

---

## What It Does

The core loop inside the app:

1. **Pick a Track** — choose a guide (e.g. wedding planning) and create a personal Track instance for it
2. **Work through Guides** — answer AI-refined questions organized by category; mark readings as read
3. **Capture Notes** — write rich-text notes tied to your active tracks
4. **Schedule with Tasks & Calendar** — create prioritized tasks with due dates linked to your tracks
5. **Review in Overview** — see progress charts across all your tracks (line, radial, and radar charts)

The workspace lives at `/app` and is protected by Supabase auth. Everything else — the guide library, collections, tags, glossary, and marketing pages — is publicly accessible.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) + React 19 |
| Language | TypeScript |
| Auth & Database | Supabase (with `@supabase/ssr` for server-side auth) |
| Styling | Tailwind CSS v4, shadcn/ui, Radix UI |
| Rich Text Editor | Tiptap v3 |
| Animations | Framer Motion, Motion |
| Charts | Recharts |
| Forms | React Hook Form + Zod v4 |
| Global State | Zustand |
| Server State | TanStack Query |
| Drag & Drop | @dnd-kit |
| 3D / WebGL | Three.js + @react-three/fiber, OGL |
| Rate Limiting | Upstash Redis (production) / in-memory (dev) |
| Analytics | Vercel Analytics + Speed Insights |
| Deployment | Vercel |

---

## Project Structure

```
templata/
├── src/
│   ├── app/                        # Next.js App Router pages
│   │   ├── page.tsx                # Landing page
│   │   ├── app/                    # Protected planning workspace (/app)
│   │   │   ├── page.tsx            # Main app shell (Guides / Notes / Overview views)
│   │   │   ├── settings/           # User settings
│   │   │   └── views/
│   │   │       ├── GuidesView.tsx  # Guide Q&A + readings
│   │   │       ├── NotesView.tsx   # Rich text notes
│   │   │       └── OverviewView.tsx# Progress dashboard
│   │   ├── api/                    # API route handlers
│   │   │   ├── auth/               # Login, signup, /me, logout
│   │   │   ├── answers/            # Guide question answers
│   │   │   ├── guides/             # Guide metadata
│   │   │   ├── items/              # Guide items
│   │   │   ├── library/            # Library resources
│   │   │   ├── notes/              # User notes (CRUD)
│   │   │   ├── og/                 # OG image generation
│   │   │   ├── readings/           # Curated expert readings
│   │   │   ├── tracks/             # User track instances (CRUD)
│   │   │   ├── feedback/           # User feedback
│   │   │   └── user/               # User profile
│   │   ├── library/                # Public resource library
│   │   ├── collections/            # Curated guide collections
│   │   ├── guides/                 # Browse all guides
│   │   ├── tags/                   # Browse guides by tag
│   │   ├── glossary/               # Planning glossary
│   │   ├── how-to-use/             # Getting started guide
│   │   ├── features/               # Features overview
│   │   ├── use-cases/              # Use case examples
│   │   ├── vs/                     # Comparison pages (Notion, Google Docs, etc.)
│   │   ├── pricing/                # Pricing page
│   │   ├── about/                  # About page
│   │   ├── faq/                    # FAQ
│   │   ├── changelog/              # Changelog
│   │   ├── privacy/                # Privacy policy
│   │   └── terms/                  # Terms of service
│   ├── components/                 # React components
│   │   ├── ui/                     # shadcn/ui base components
│   │   ├── app/                    # App-specific components
│   │   ├── aceternity/             # Aceternity UI components
│   │   ├── magicui/                # Magic UI components
│   │   ├── layout/                 # Page layout wrappers
│   │   ├── floating-dock-nav.tsx   # Bottom nav dock in the app
│   │   ├── landing-*.tsx           # Landing page sections
│   │   └── ...
│   ├── contexts/
│   │   ├── DataCacheContext.tsx    # Client-side cache for tracks, questions, readings
│   │   └── auth-context.tsx        # Auth state
│   ├── hooks/                      # Custom React hooks
│   ├── lib/
│   │   ├── supabase.ts             # Supabase client
│   │   ├── supabase/               # Server-side Supabase helpers
│   │   ├── rate-limit.ts           # In-memory rate limiter
│   │   ├── auth-utils.ts           # Auth helpers
│   │   ├── seo.ts                  # SEO metadata constants
│   │   ├── validation-utils.ts     # Input validation helpers
│   │   ├── validations/            # Zod schemas
│   │   ├── error-logger.ts         # Client error logging
│   │   └── utils.ts                # Shared utilities
│   ├── registry/
│   │   └── guides.ts               # Guide registry (id, name, category, icon, url, color)
│   ├── types/
│   │   ├── guide.ts                # Guide type
│   │   ├── task.ts                 # Task type (todo / in_progress / done)
│   │   └── calendar.ts             # Calendar event type
│   ├── styles/                     # Global styles
│   └── middleware.ts               # Supabase SSR auth middleware (protects /app/*)
├── supabase/
│   └── migrations/                 # SQL migration files
├── scripts/                        # Build/lint scripts
├── generation-scripts/             # Template generation scripts
├── public/                         # Static assets
├── next.config.ts                  # Next.js config (bundle analyzer, security headers, image optimization)
├── components.json                 # shadcn/ui config
└── .mcp.json                       # MCP server config
```

---

## Core Data Model

| Entity | Description |
|---|---|
| **Guide** | A planning guide (e.g. `wedding-planning`). Has an id, name, category, difficulty, tags, and estimated time. |
| **Track** | A user's personal instance of a guide. Stores progress (0–100) and can be archived. |
| **Question** | An AI-refined question within a guide, grouped by category. |
| **Answer** | A user's saved answer to a question, tied to a track. |
| **Reading** | A curated expert article linked to a guide. Has title, excerpt, read time, and full content. |
| **Note** | A rich-text note (Tiptap) tied to a user's track. |
| **Task** | A todo item with status (`todo` / `in_progress` / `done`), priority, due date, and optional track link. |
| **Collection** | A curated grouping of guides (stored in Supabase). |

---

## Authentication & Authorization

- Auth is handled entirely through **Supabase** (email/password, with SSR cookie-based sessions via `@supabase/ssr`)
- `src/middleware.ts` protects all `/app/*` routes — unauthenticated users are redirected to `/`
- All public pages (guides, library, marketing) are accessible without an account
- Anonymous users can use the app in a limited mode; full data persistence requires sign-in

---

## Security

The following security measures are in place:

- **HTTP security headers** on all routes: HSTS, `X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, `X-XSS-Protection`, `Referrer-Policy`, `Permissions-Policy`
- **Rate limiting** on sensitive endpoints:
  - Auth routes: 5 requests / minute
  - Signup: 2 requests / minute
  - General API: 100 requests / minute
- **Input validation** with Zod schemas at API boundaries
- **DOMPurify** (`isomorphic-dompurify`) for sanitizing user-generated rich text
- Upstash Redis available for distributed rate limiting across multiple Vercel instances

---

## Getting Started Locally

### Prerequisites

- Node.js 18–20 (see `engines` in `package.json`)
- npm 9+
- A [Supabase](https://supabase.com) project

### 1. Clone the repo

```bash
git clone https://github.com/kyisaiah47/templata.git
cd templata
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

For production rate limiting with Upstash Redis (optional):

```env
UPSTASH_REDIS_REST_URL=your_upstash_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_token
```

### 4. Run database migrations

Apply the SQL migrations in `supabase/migrations/` to your Supabase project via the Supabase dashboard or CLI.

### 5. Start the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build (Turbopack) |
| `npm run start` | Start production server |
| `npm run lint` | Lint all TS/TSX files |
| `npm run lint:fix` | Auto-fix lint errors |
| `npm run lint:template` | Lint a specific guide template |
| `npm run lint:all-templates` | Lint all guide templates |
| `npm run analyze` | Build with bundle analyzer (`ANALYZE=true`) |
| `npm run type-check` | Run TypeScript type checking |

---

## Deployment

Templata is deployed on **Vercel**. The `main` branch deploys to production at [templata.org](https://templata.org).

The build uses Turbopack (`next build --turbopack`) and has the following production optimizations enabled:
- WebP/AVIF image optimization
- Compressed responses
- Source maps disabled in production
- Package import optimization for `lucide-react` and `@radix-ui/react-icons`

---

## Branches

| Branch | Purpose |
|---|---|
| `main` | Production |
| `mvp-v0.5` / `mvp-v1` / `mvp-v2` / `mvp-v3` | MVP iteration snapshots |
| `shadcnblocks-integration` | shadcn blocks integration work |

---

## License

Private repository. All rights reserved.
