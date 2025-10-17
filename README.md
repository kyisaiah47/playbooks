# Templata

> **The encyclopedia for living**
>
> Systematically organized templates, prompts, and articles for life's biggest decisions—built with abundance over curation.

## Overview

**Templata** is a comprehensive life guidance platform that provides structured templates, tactical prompts, and curated articles for every major life situation. From wedding planning to career transitions, home buying to business launches—we've systematically created guidance for life's biggest moments.

### What Makes Us Different

- **📚 Systematic Coverage** - 1,298 templates covering every conceivable life situation
- **🎯 Actionable Guidance** - 15,000+ tactical prompts to guide your thinking
- **📰 Deep Insights** - Curated articles for each template
- **🔍 Built for Abundance** - Wikipedia philosophy: if it exists, we've covered it

## Core Features

### 📚 **1,298 Life Templates**
Systematically organized templates covering every life situation:
- **Personal Milestones** - Weddings, parenthood, retirement
- **Career & Business** - Job search, career pivots, entrepreneurship
- **Home & Finance** - Home buying, financial planning, major purchases
- **Health & Wellness** - Fitness, medical decisions, mental health
- **Relationships** - Dating, marriage, family dynamics
- **Education** - College planning, skill development, certifications
- **Creative Projects** - Learning instruments, artistic pursuits, hobbies
- And many more...

### 🎯 **Tactical Prompts**
Each template includes carefully curated prompts to guide your thinking:
- Tactical action items
- Contextual considerations
- Reflection questions
- Decision frameworks
- Research areas
- Planning guides

### 📰 **Curated Articles**
20+ articles per template providing:
- Expert insights and guidance
- Step-by-step how-tos
- Research-backed strategies
- Real-world examples
- Best practices

### 🎨 **Core Features**
- **Full Workspace System** - Create workspaces from any template
- **Multiple View Modes** - Chat, Board, Checklist, Split, Table, Text Editor, Timeline
- **Auto-save** - Your work is automatically saved to localStorage
- **Browse 1,298+ Templates** - Searchable directory organized by category
- **Curated Articles** - Comprehensive article library with 20+ articles per template
- **User Authentication** - Secure Supabase auth with password reset
- **Dark/Light Mode** - Beautiful theme system
- **Responsive Design** - Works on all devices
- **Clean, Modern UI** - Built with shadcn/ui and Tailwind CSS

## Tech Stack

### Core
- **Next.js 15.5** - React framework with App Router and Turbopack
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling

### UI & Design
- **shadcn/ui** - Component design system
- **Radix UI** - Accessible primitives
- **Framer Motion** - Smooth animations
- **Lucide Icons** - Beautiful icon library

### Backend & Data
- **Supabase** - PostgreSQL database and authentication
- **Server Actions** - Next.js server-side operations
- **API Routes** - RESTful endpoints

### Deployment
- **Vercel** - Hosting and continuous deployment
- **GitHub** - Version control

## Project Structure

```
templata/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── (marketing)/
│   │   ├── [slug]/            # Dynamic template routes
│   │   ├── api/               # API routes (auth, templates)
│   │   ├── articles/          # Article pages
│   │   ├── axiom-engine/      # AI feature page
│   │   ├── life-os/           # Dashboard
│   │   ├── templates/         # Template directory
│   │   └── workspace/         # Unified workspace with 10 view modes
│   ├── components/            # React components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── landing/          # Landing page sections
│   │   ├── layout/           # Layout components
│   │   ├── template/         # Template-specific components
│   │   ├── workspace-views/  # 10 view mode implementations
│   │   └── tiptap-templates/ # Editor implementations
│   ├── contexts/             # React contexts (auth, UI)
│   ├── data/                 # Static data
│   │   ├── templates/        # 1,300+ template definitions
│   │   ├── prompts/          # 104,000+ prompt files
│   │   └── articles/         # Article content
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utilities and configs
│   │   ├── auth.ts          # NextAuth configuration
│   │   ├── supabase.ts      # Supabase client
│   │   ├── knowledge-graph.ts # AI intelligence
│   │   └── themes.ts        # Theme system
│   ├── registry/             # Content registries
│   │   ├── templates.ts     # Template registry
│   │   ├── prompts.ts       # Prompts registry
│   │   ├── articles.ts      # Articles registry
│   │   └── marketing.ts     # Marketing content
│   └── types/               # TypeScript definitions
└── public/                  # Static assets
    └── brand/              # Branding assets
```

## Getting Started

### Prerequisites
- Node.js 20+
- npm or yarn
- PostgreSQL database (or Supabase account)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/templata.git
cd templata
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` with your configuration:
```env
# Database (Supabase)
NEXT_PUBLIC_SUPABASE_URL="your-supabase-url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

# OAuth (optional)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Email (optional)
EMAIL_SERVER_HOST="smtp.gmail.com"
EMAIL_SERVER_PORT="587"
EMAIL_SERVER_USER="your-email@gmail.com"
EMAIL_SERVER_PASSWORD="your-password"
EMAIL_FROM="noreply@templata.com"
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev          # Start development server (with Turbopack)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
```

## Key Features in Detail

### Template System
- **1,300+ templates** covering every life situation
- **8 prompt categories** per template (104,000+ total prompts)
- **Expert-verified** content and frameworks
- **Dynamic routing** - Each template at `/[slug]/template`
- **Marketing pages** - SEO-optimized at `/[slug]/marketing`

### AI Intelligence (Axiom Engine)
- **Multi-template analysis** - Find connections across templates
- **Context-aware suggestions** - Smart recommendations
- **Document parsing** - AI autofill from uploads
- **Knowledge graph** - Interconnected template relationships
- **Conflict detection** - Identify competing priorities

### Workspace Experience
Two distinct modes for different workflows:

**Browse Mode** - Explore and discover:
- **Dashboard** - Overview of your workspaces and activity
- **Templates** - Browse 1,300+ templates by category
- **Prompts** - Search across 104,000+ curated prompts
- **Articles** - Access 26,000+ expert articles
- **Workspaces** - Manage all your active projects

**Work Mode** - Create and organize (10 view modes):
- **Floating Dock** - Templates, prompts, articles always one click away
- **10 view modes** - Chat, Split, Board, Checklist, Text Editor, Timeline, Table, Cards, Outline, Tabs
- **Seamless switching** - Change views anytime without losing progress
- **Rich text editing** - TipTap with drag-and-drop
- **Auto-save** - Local storage persistence
- **Export** - PDF and other formats

Each workspace is based on a template and stores all your responses. Switch between any of the 10 view modes to match your workflow—whether you prefer conversational chat, kanban boards, or rich text documents.

### Authentication
- **NextAuth.js** - Secure authentication
- **Google OAuth** - Social login
- **Email login** - Magic link authentication
- **JWT sessions** - Stateless auth with Supabase
- **Protected routes** - Role-based access

### UI/UX
- **Responsive design** - Mobile-first approach
- **Dark/light themes** - System preference + manual toggle
- **Animations** - Framer Motion micro-interactions
- **Accessibility** - WCAG compliant with Radix UI
- **Command palette** - Quick navigation (Cmd+K)
- **Sidebar navigation** - Persistent workspace access

## Data Architecture

### Templates (`GuidanceTemplate`)
```typescript
{
  id: string
  title: string
  description: string
  category: string
  sections: GuidanceSection[]
  expertTips: ExpertTip[]
  resources: Resource[]
  tags: string[]
}
```

### Workspaces
- Client-side state management (localStorage)
- Supabase sync (future enhancement)
- Auto-save with debouncing
- Version history tracking

### Authentication Flow
1. User signs in via Google/Email
2. NextAuth creates JWT session
3. Session stored client-side
4. Protected routes check auth state
5. User data synced with Supabase

## Contributing

We welcome contributions! Please see our contributing guidelines.

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style
- ESLint configuration included
- Prettier for formatting
- TypeScript strict mode
- Component-first architecture

## Roadmap

### Phase 1: Core Product ✅ (Complete)
- [x] Template browsing system (1,298+ templates)
- [x] Article library with curated content
- [x] Full workspace system with text editor
- [x] Multiple view modes (7 different views)
- [x] Auto-save functionality
- [x] User authentication with password reset
- [x] Responsive design
- [x] Dark/light themes
- [x] Life OS Dashboard
- [x] Reflection and workspace stages

### Phase 2: Enhancement (In Progress)
- [ ] Export to PDF
- [ ] Template favorites and organization
- [ ] Supabase sync (currently localStorage only)
- [ ] Collaboration features
- [ ] Mobile-optimized views

### Phase 3: Advanced Features
- [ ] AI-powered guidance (Axiom Engine)
- [ ] Smart recommendations based on usage
- [ ] Cross-template insights
- [ ] Analytics dashboard
- [ ] Custom template builder

### Phase 4: Growth
- [ ] Mobile apps (iOS/Android)
- [ ] Template marketplace
- [ ] API access
- [ ] Third-party integrations (Notion, Google Docs, etc.)
- [ ] Team workspaces

## License

Proprietary - All rights reserved

## Philosophy

**Abundance over curation.** Instead of handpicking 20 "best" templates, we give you access to everything—systematically organized, searchable, and ready when you need it. If a life situation exists, we've covered it.

Like Wikipedia for knowledge, Templata is the comprehensive resource for life guidance.

## Support

- **Website**: [templata.org](https://templata.org)
- **GitHub**: [github.com/kyisaiah47/templata](https://github.com/kyisaiah47/templata)

---

*The encyclopedia for living.*
