<div align="center">

<!-- BANNER_PLACEHOLDER -->

# 📋 Templata

**AI-powered playbooks for life's biggest moments — describe your situation, Claude builds the plan.**

[![Next.js](https://img.shields.io/badge/Next.js_15-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

**Live at [templata.org](https://templata.org)**

</div>

<br/>

Notion is a blank canvas — powerful but overwhelming. Generic templates are too rigid. ChatGPT gives you a wall of text with no structure. Templata sits in the middle: describe your specific situation in plain language and Claude generates a personalized, structured Playbook tailored to *you* — not a copy-paste guide. Work through it with AI as a thinking partner at every step.

> Notion is for organizing your life. Templata is for executing the big moments in it.

## ✨ Features

- **AI Playbook Generation** — Describe your situation once; Claude returns a full structured plan (tasks, questions, resources) in a single shot
- **Three Item Types** — Tasks you can check off, Questions that trigger real-time AI feedback on your answers, and Resources for upfront context
- **Inline AI Feedback** — Answer any question and Claude responds with contextual, situation-specific guidance saved permanently inline
- **Community & Forking** — Browse public playbooks, fork one, and Claude re-tailors it to your specific context
- **Usage Tiers** — Free plan (1 playbook / 5 AI insights per month) and Pro plan ($9/month for 10 playbooks / 50 AI insights)
- **Magic Link Auth** — Passwordless login via Resend; no friction to get started

## 🎥 Demo

[![Watch Demo](https://img.shields.io/badge/YouTube-Watch%20Demo-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/watch?v=6dtePu7HaWI)

## 🛠️ Tech Stack

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

## 🚀 Getting Started

### Prerequisites
- Node.js 18+, Supabase project, Anthropic API key, Resend account, Stripe account

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
