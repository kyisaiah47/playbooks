# Templata

> **The encyclopedia for living**
>
> Systematically organized templates, prompts, and articles for life's biggest decisions—built with abundance over curation.

## Overview

**Templata** is a comprehensive life guidance platform that provides structured templates, tactical prompts, and curated articles for every major life situation. From wedding planning to career transitions, home buying to business launches—we've systematically created guidance for life's biggest moments.

### What Makes Us Different

- **📚 Systematic Coverage** - 1,298 templates covering every conceivable life situation
- **🎯 Actionable Guidance** - 15,000+ tactical prompts to guide your thinking
- **📰 Deep Insights** - 25,936 curated articles for research and learning
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

### 📰 **25,936 Curated Articles**
Comprehensive article library providing:
- Expert insights and guidance
- Step-by-step how-tos
- Research-backed strategies
- Real-world examples
- Best practices

### ⚡ **3-Stage Workflow**
The `/app` experience progresses through three focused stages:

1. **Workspace Stage** - Create and work on your template
   - Select from 1,298 templates
   - Work through tactical prompts
   - Take notes and plan
   - Auto-save to Supabase

2. **Reflection Stage** - Daily journaling and introspection
   - Daily rotating prompts (7 unique prompts)
   - Mood tracking
   - Tag-based organization
   - Past reflections sidebar
   - Auto-save with local/cloud sync

3. **Life OS Stage** - Dashboard to manage everything
   - Overview of active templates
   - Track progress across projects
   - Unified view of your work

### 🔒 **Authentication & Data**
- **Supabase Auth** - Secure email/password authentication
- **Auto-save** - Authenticated users save to cloud, anonymous users use localStorage
- **Privacy** - Your data is private and never sold
- **Password Reset** - Email-based password recovery

### 🎨 **Modern UI/UX**
- **Responsive Design** - Works beautifully on all devices
- **Dark/Light Mode** - System preference + manual toggle
- **Clean Interface** - Built with shadcn/ui components
- **Smooth Animations** - Framer Motion transitions
- **Accessibility** - WCAG compliant with Radix UI

## Pages & Routes

### Main Pages
- `/` - Landing page introducing Templata
- `/templates` - Browse all 1,298 templates by category
- `/templates/[slug]` - Individual template workspace
- `/templates/[slug]/marketing` - SEO-optimized marketing page for each template
- `/articles` - Browse all 25,936 articles
- `/articles/[slug]` - Individual article reader
- `/app` - Main 3-stage app experience
- `/app/settings` - User settings and preferences
- `/privacy` - Privacy policy
- `/terms` - Terms of service

### Auth Pages
- `/login` - Sign in
- `/signup` - Create account
- `/forgot-password` - Request password reset
- `/reset-password` - Reset password with token
- `/login/verify` - Email verification

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
- **API Routes** - RESTful endpoints for templates, articles, reflections
- **Server Components** - Next.js 15 server-side rendering

### Deployment
- **Vercel** - Hosting and continuous deployment
- **GitHub** - Version control

## Project Structure

```
templata/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── app/               # Main 3-stage app
│   │   │   ├── page.tsx      # App entry (redirects based on auth)
│   │   │   ├── settings/     # User settings
│   │   │   └── stages/       # Workspace, Reflection, Life OS stages
│   │   ├── articles/          # Article browsing and reading
│   │   │   ├── page.tsx      # Articles list
│   │   │   └── [slug]/       # Individual article
│   │   ├── templates/         # Template directory
│   │   │   ├── page.tsx      # Templates list
│   │   │   └── [slug]/       # Template workspace & marketing
│   │   ├── login/            # Authentication pages
│   │   ├── signup/
│   │   ├── forgot-password/
│   │   ├── reset-password/
│   │   ├── privacy/          # Privacy policy
│   │   ├── terms/            # Terms of service
│   │   ├── api/              # API routes
│   │   │   ├── auth/         # Auth endpoints
│   │   │   ├── templates/    # Template data
│   │   │   ├── articles/     # Article data
│   │   │   └── reflections/  # Reflection CRUD
│   │   └── page.tsx          # Landing page
│   ├── components/            # React components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── landing/          # Landing page sections
│   │   ├── layout/           # Header, footer, sidebar
│   │   └── template/         # Template-specific components
│   ├── contexts/             # React contexts (auth, UI)
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utilities and configs
│   │   ├── supabase.ts      # Supabase client setup
│   │   └── utils.ts         # Helper functions
│   ├── registry/             # Content registries
│   │   ├── templates.ts     # Template metadata
│   │   └── articles.ts      # Article metadata
│   └── types/               # TypeScript definitions
├── generation-scripts/       # Data generation and migration
└── public/                  # Static assets
    └── brand/              # Logos and branding
```

## Getting Started

### Prerequisites
- Node.js 20+
- npm or yarn
- Supabase account (for database and auth)

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
cp .env.example .env.local
```

Edit `.env.local` with your configuration:
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL="your-supabase-project-url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

4. Set up Supabase database:

Create the following tables in your Supabase project:

**templata_templates:**
```sql
CREATE TABLE templata_templates (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

**templata_articles:**
```sql
CREATE TABLE templata_articles (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL,
  content TEXT,
  excerpt TEXT,
  author TEXT,
  published_at TIMESTAMP,
  read_time INTEGER,
  type TEXT,
  difficulty TEXT,
  tags TEXT[],
  template TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

**templata_reflections:**
```sql
CREATE TABLE templata_reflections (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  date DATE NOT NULL,
  prompt TEXT,
  content TEXT,
  mood TEXT,
  tags TEXT[],
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, date)
);
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev          # Start development server (with Turbopack)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Data Architecture

### Database Schema

**Templates (templata_templates)**
- 1,298 templates stored in Supabase
- Organized by category
- Each has ID, name, category, description

**Articles (templata_articles)**
- 25,936 articles in database
- Linked to templates
- Includes metadata: author, read time, difficulty, tags
- Full-text content for reading

**Reflections (templata_reflections)**
- User-specific daily reflections
- Stores prompt, content, mood, tags
- One reflection per user per day
- Auto-saves every 2 seconds

### Authentication Flow
1. User signs up with email/password
2. Supabase creates auth user
3. JWT session stored client-side
4. Protected routes check session
5. User data synced to cloud or localStorage

## Key Features in Detail

### Template System
- **1,298 templates** systematically covering all life situations
- **Dynamic routing** - Each template at `/templates/[slug]`
- **Marketing pages** - SEO-optimized landing pages at `/templates/[slug]/marketing`
- **Auto-save** - Work persists to Supabase or localStorage
- **Category browsing** - Organized by life area

### Reflection System
- **Daily prompts** - 7 unique prompts rotating based on day of year
- **Mood tracking** - Emoji-based mood selection
- **Tag system** - Organize reflections with custom tags
- **Past entries** - Sidebar to browse previous reflections
- **Auto-save** - Saves every 2 seconds while typing
- **Date navigation** - View and edit any past date

### Article Library
- **25,936 articles** providing deep insights
- **Search & filter** - Find articles by topic, template, difficulty
- **Rich content** - Full markdown rendering
- **Read time** - Estimated reading duration
- **Author attribution** - Expert-written content

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
- TypeScript strict mode
- Component-first architecture
- Functional components with hooks

## Philosophy

**Abundance over curation.** Instead of handpicking 20 "best" templates, we give you access to everything—systematically organized, searchable, and ready when you need it. If a life situation exists, we've covered it.

Like Wikipedia for knowledge, Templata is the comprehensive resource for life guidance.

## License

Proprietary - All rights reserved

## Support

- **Email**: templata.app@gmail.com
- **GitHub**: [github.com/yourusername/templata](https://github.com/yourusername/templata)

---

*The encyclopedia for living.*
