# Templata

> AI-powered life planning templates and workspaces for organizing life's biggest moments.

## Overview

**Templata** is a comprehensive life planning platform that provides structured guidance for every major life situation through AI-powered templates, intelligent prompts, and expert articles. Skip the blank page and get organized in minutes with proven frameworks for life's biggest moments.

## What We Offer

### 📚 **1,300+ Life Templates**
Complete coverage of every conceivable life situation:
- **Life Planning** - Weddings, home buying, major life transitions
- **Career & Finance** - Job search, career changes, business launches
- **Health & Wellness** - Fitness journeys, medical planning, mental health
- **Relationships & Family** - Parenting, relationship milestones, family planning
- **Creative & Hobbies** - Learning new skills, creative projects, artistic pursuits
- **Business & Entrepreneurship** - Startups, business strategy, product launches
- **Education & Learning** - Academic planning, skill development, certifications
- **Technology & Digital** - Tech projects, digital transformation, software planning
- **Personal Development** - Self-improvement, goal setting, habit formation
- **Home & Living** - Home organization, lifestyle design, space planning

### 🎯 **15,000+ Action Prompts**
Each template includes 8 categories of guided prompts:
- **Tactical Prompts** - Specific action items and next steps
- **Contextual Prompts** - Situational guidance and considerations
- **Reflection Prompts** - Deep thinking and planning questions
- **Decision Prompts** - Framework for making key decisions
- **Research Prompts** - Areas to investigate and explore
- **Planning Prompts** - Strategic planning and roadmapping
- **Consideration Prompts** - Important factors to evaluate
- **Expert Prompts** - Professional insights and best practices

### 📰 **26,000+ Expert Articles**
Deep-dive content covering:
- Expert insights and professional guidance
- Step-by-step how-to guides
- Research-backed strategies
- Real-world case studies
- Industry best practices

### 🤖 **AI-Powered Features**
- **Axiom Engine** - Specialized AI system for intelligent guidance
- **Multi-Template Intelligence** - Cross-template insights and connections
- **AI Autofill** - Populate templates from documents
- **Smart Recommendations** - Context-aware suggestions
- **Knowledge Graph** - Interconnected template relationships

### 💼 **Three Workspace Modes**
1. **Guided Workspace** - Structured prompts with AI assistance
2. **Hybrid Workspace** - Mix of guidance and freeform notes
3. **Autonomous Workspace** - Full control with optional AI support

### 🎨 **Advanced Features**
- **Rich Text Editor** - TipTap-powered with drag-and-drop
- **Dark/Light Mode** - Customizable themes
- **Template Favorites** - Bookmark and organize templates
- **Recent Templates** - Quick access to your work
- **Export Options** - PDF and other formats
- **Collaboration** - Team features (Pro plan)
- **Life OS Dashboard** - Holistic view of all active templates

## Tech Stack

### Core
- **Next.js 15.5** - React framework with App Router
- **React 19** - UI library
- **TypeScript 5.9** - Type safety
- **Tailwind CSS 4** - Styling

### UI Components
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Animations
- **Lucide Icons** - Icon library
- **shadcn/ui** - Component design system

### Editor
- **TipTap** - Rich text editing
- **ProseMirror** - Editor framework
- **Drag & Drop** - Interactive content management

### Data & Auth
- **Supabase** - Database and authentication
- **NextAuth.js** - Authentication framework
- **PostgreSQL** - Database (via Supabase)

### State & Forms
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **Local Storage** - Client-side state persistence

### Additional Tools
- **date-fns** - Date utilities
- **jsPDF** - PDF generation
- **Unsplash API** - Image integration
- **Three.js & OGL** - 3D graphics (branding)

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
│   │   └── workspaces/        # Workspace modes
│   ├── components/            # React components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── landing/          # Landing page sections
│   │   ├── layout/           # Layout components
│   │   ├── template/         # Template-specific components
│   │   └── tiptap-templates/ # Editor implementations
│   ├── contexts/             # React contexts (auth, UI)
│   ├── data/                 # Static data
│   │   ├── templates/        # 1,300+ template definitions
│   │   ├── prompts/          # 15,000+ prompt files
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
- **8 prompt categories** per template (15,000+ total prompts)
- **Expert-verified** content and frameworks
- **Dynamic routing** - Each template at `/[slug]/template`
- **Marketing pages** - SEO-optimized at `/[slug]/marketing`

### AI Intelligence (Axiom Engine)
- **Multi-template analysis** - Find connections across templates
- **Context-aware suggestions** - Smart recommendations
- **Document parsing** - AI autofill from uploads
- **Knowledge graph** - Interconnected template relationships
- **Conflict detection** - Identify competing priorities

### Workspaces
- **Guided Mode** - Structured prompts with AI assistance
- **Hybrid Mode** - Mix guided and freeform
- **Autonomous Mode** - Full creative freedom
- **Rich text editing** - TipTap with drag-and-drop
- **Auto-save** - Local storage persistence
- **Export** - PDF and other formats

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

## Pricing Plans

### Free Plan
- 1-2 starter templates
- Basic features
- Limited prompts

### Plus Plan ($9/month)
- Full access to 1,300+ templates
- 15,000+ prompts
- 26,000+ articles
- Advanced workspace features

### Pro Plan ($15/month)
- Everything in Plus
- AI-powered Axiom Engine
- Team collaboration
- Priority support

## Roadmap

- [ ] Real-time collaboration
- [ ] Mobile apps (iOS/Android)
- [ ] Template marketplace
- [ ] Advanced AI features
- [ ] Analytics dashboard
- [ ] Custom template builder
- [ ] API access
- [ ] Integrations (Notion, Google Docs, etc.)

## License

Proprietary - All rights reserved

## Support

- **Documentation**: [docs.templata.com](https://docs.templata.com)
- **Email**: support@templata.com
- **Twitter**: [@templata](https://twitter.com/templata)

---

*Skip the blank page. Organize life's biggest moments with AI-powered templates.*
