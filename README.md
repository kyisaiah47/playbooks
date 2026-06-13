<div align="center">

<img src="assets/banner.png" alt="banner" width="100%" />

# Playbooks

**The social feed for life's biggest moments — describe your situation, Claude builds the plan, the community makes it better.**

[![Next.js](https://img.shields.io/badge/Next.js_16-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![YouTube](https://img.shields.io/badge/Watch-YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtu.be/N4IPwsli9dg)

</div>

<br/>

Notion is a blank canvas. ChatGPT is a wall of text. Playbooks is a feed of real plans: describe what you're planning in one sentence and Claude generates a personalized, structured playbook — phases, checkable tasks, questions with inline AI feedback, and resources. The homepage is the community feed itself: browse what other people are planning, fork any playbook, and Claude re-tailors it to your situation.

## ✨ Features

- **Feed-first homepage** — the community feed *is* the landing page: real playbooks with task previews, category tags, and momentum rankings
- **AI Playbook Generation** — one sentence in, a full structured plan out (tasks, questions, resources) with a staged generating experience
- **Inline AI Feedback** — answer any question and Claude responds with situation-specific guidance, saved permanently inline
- **Fork & re-tailor** — take anyone's playbook and Claude rebuilds it around your context
- **Progress everywhere** — progress-ring avatars, phase completion counts, collapsed-by-default phase cards
- **Usage Tiers** — Free (2 playbooks / 5 AI insights per month) and Pro ($9/month for unlimited playbooks / 100 insights) via Stripe
- **Magic Link Auth** — passwordless login; no friction to get started

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) + React 19 |
| Language | TypeScript |
| AI | Claude API (`claude-sonnet-4-6`) via `@anthropic-ai/sdk` |
| Auth & Database | Supabase (`@supabase/ssr`) |
| Payments | Stripe (checkout + webhooks) |
| Styling | Tailwind CSS v4, shadcn/ui |
| Animations | Framer Motion |
| Deployment | Vercel |

## 🚀 Getting Started

### Prerequisites
- Node.js 20+, Supabase project, Anthropic API key, Stripe account

### 1. Clone & install

```bash
git clone https://github.com/kyisaiah47/playbooks.git playbook
cd playbook
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

### 3. Run Supabase migrations

In your Supabase SQL Editor, run in order:

```
supabase/migrations/new_playbook_schema.sql
supabase/migrations/add_comments.sql
supabase/migrations/add_usage.sql
supabase/migrations/add_subscriptions.sql
supabase/migrations/add_playbook_notes.sql
```

### 4. Start dev server

```bash
npm run dev
```

## 📄 License

MIT
