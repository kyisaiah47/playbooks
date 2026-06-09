# Templata

**Templata** is an AI-powered playbook platform for life's biggest moments. Describe what you're planning in plain language and Claude builds a personalized, structured playbook tailored to your specific situation — not a generic template.

Live at **[templata.org](https://templata.org)**


[![Watch Demo](https://img.shields.io/badge/YouTube-Watch%20Demo-FF0000?style=flat&logo=youtube&logoColor=white)](https://www.youtube.com/watch?v=6dtePu7HaWI)

---

## The Idea

Notion is a blank canvas — powerful but overwhelming. Generic templates are too rigid. ChatGPT gives you a wall of text with no structure.

Templata sits in the middle: **opinionated by default, tailored to you specifically.**

> Notion is for organizing your life. Templata is for executing the big moments in it.

---

## How It Works

1. Describe your situation: *"I'm planning a wedding in NYC next October, $50k budget, 80 guests, intimate but elegant"*
2. Claude generates a personalized Playbook — tasks, questions to think through, and resources relevant to your context
3. Work through it: check off tasks, answer questions, get AI feedback inline on each answer
4. Share your playbook with the community or fork someone else's

---

## Data Model

### Playbook
The core entity. AI-generated for your specific situation.

### Item (3 types)

| Type | Purpose |
|---|---|
| **Task** | Actionable, checkable — "do this" |
| **Question** | Answerable, triggers inline AI feedback — "think about this" |
| **Resource** | Upfront context — venues, books, tools, people |

Items are ordered and grouped into phases by AI (e.g. "Before You Start", "6 Months Out").

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) + React 19 |
| Language | TypeScript |
| AI | Claude API (`claude-sonnet-4-6`) via `@anthropic-ai/sdk` |
| Auth & Database | Supabase (`@supabase/ssr`) |
| Email | Resend (magic link auth) |
| Payments | Stripe (checkout + webhooks) |
| Styling | Tailwind CSS v4, shadcn/ui |
| Animations | Framer Motion |
| Deployment | Vercel |

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx                        # Landing page
│   ├── app/
│   │   ├── page.tsx                    # Playbook dashboard
│   │   └── [playbookId]/page.tsx       # Playbook workspace
│   ├── community/
│   │   ├── page.tsx                    # Community feed
│   │   └── [id]/page.tsx              # Playbook + comments
│   └── api/
│       ├── auth/                       # Magic link auth
│       ├── playbooks/
│       │   ├── route.ts               # List playbooks
│       │   ├── generate/route.ts      # Generate via Claude
│       │   └── [id]/
│       │       ├── route.ts           # Get/delete
│       │       ├── feedback/route.ts  # AI feedback on answers
│       │       ├── items/[itemId]/    # Update items
│       │       ├── comments/route.ts  # Comments
│       │       └── notes/route.ts     # Notes
│       ├── community/route.ts         # Public feed
│       └── stripe/
│           ├── checkout/route.ts      # Create checkout session
│           └── webhook/route.ts       # Handle subscription events
├── components/
│   ├── ui/                            # shadcn/ui components
│   ├── app-nav.tsx                    # Shared nav
│   └── login-dialog.tsx              # Magic link login
├── lib/
│   ├── playbook-prompt.ts             # Claude generation prompt
│   ├── feedback-prompt.ts             # Claude feedback prompt
│   ├── usage.ts                       # Usage limits & tier checking
│   └── auth-utils.ts                  # Auth helpers
└── middleware.ts                      # Protects /app/*
```

---

## Pricing

| Tier | Playbooks | AI Insights | Price |
|---|---|---|---|
| Free | 1/month | 5/month | $0 |
| Pro | 10/month | 50/month | $9/month |

---

## Getting Started Locally

### Prerequisites
- Node.js 18+
- Supabase project
- Anthropic API key
- Resend account (for magic link emails)
- Stripe account (for payments)

### 1. Clone & install

```bash
git clone https://github.com/kyisaiah47/templata.git
cd templata
git checkout playbook-v2
npm install
```

### 2. Environment variables

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_publishable_key
SUPABASE_SERVICE_ROLE_KEY=your_secret_key
ANTHROPIC_API_KEY=your_anthropic_key
STRIPE_SECRET_KEY=sk_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_...
STRIPE_PRO_PRICE_ID=price_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Run migrations in Supabase SQL Editor

- `supabase/migrations/new_playbook_schema.sql`
- `supabase/migrations/add_comments.sql`
- `supabase/migrations/add_usage.sql`
- `supabase/migrations/add_subscriptions.sql`
- `supabase/migrations/add_playbook_notes.sql`

### 4. Start dev server

```bash
npm run dev
```

---

## Roadmap

### Done
- [x] AI playbook generation (Claude one-shot)
- [x] Playbook workspace (tasks, questions, resources)
- [x] Inline AI feedback on answers
- [x] Magic link auth via Resend
- [x] Community page with comments + quote replies
- [x] Fork playbooks from community
- [x] Usage limits (free/pro tiers)
- [x] Stripe checkout + webhook

### Next
- [ ] Stripe keys wired up + tested end to end
- [ ] Upgrade UI visible when limit hit
- [ ] Pre-generated seed playbooks for launch
- [ ] Landing page polish
- [ ] Mobile experience

---

## Branches

| Branch | Purpose |
|---|---|
| `main` | Previous version (static guide library) |
| `playbook-v2` | Current — AI playbook platform (active development) |
