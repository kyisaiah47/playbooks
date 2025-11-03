# Templata

> **The luxury guide for life's biggest moments**
>
> Transform life's most overwhelming decisions from chaotic to exhilarating with comprehensive guidance, expert insights, and integrated planning.

## Overview

**Templata** is the comprehensive guide + planning tool for major life events. Think Superhuman (premium email with obsessive attention to detail) meets Co-Star (hyper-personalized insights with sophisticated design) for life's biggest moments.

### The Problem

When planning a wedding, buying a home, or changing careers, people spend months researching on Google, asking around, maybe hiring experts—and they're still worried they missed something critical. They end up with scattered notes, inconsistent information, and no clear path forward.

### The Solution

Templata provides three things in one unified system:

1. **Comprehensive Questions** - AI-refined questions covering 90%+ of everything you need to consider
2. **Expert Readings** - Curated knowledge and advice to help you make informed decisions
3. **Integrated Planning** - Calendar, tasks, notes, and premium analytics organized per-guide

### The Core Experience

```
Pick a Guide (Wedding, Home Buying, Career Change, etc.)
    ↓
Answer Comprehensive Questions (know what to think about)
    ↓
Read Expert Guidance (know how to decide)
    ↓
Plan with Calendar/Tasks (execute on it)
    ↓
Track Progress with Premium Analytics (visualize your journey)
```

## What Makes Us Different

- **🎯 90%+ Coverage** - Our Axiom Engine refines every guide through months of AI testing
- **✨ Luxury Experience** - Premium design with obsessive attention to detail
- **📊 Per-Guide Organization** - Wedding tasks stay separate from home buying—total clarity
- **🔮 Premium Analytics** - Sophisticated progress visualizations across all tracks
- **📚 Expert Curation** - Curated readings to inform every major decision

## Core Features

### 📚 **Comprehensive Guides**
Systematically organized frameworks for life's biggest moments:
- **Personal Milestones** - Weddings, parenthood, retirement
- **Career & Business** - Job search, career pivots, entrepreneurship
- **Home & Finance** - Home buying, financial planning, major purchases
- **Health & Wellness** - Fitness, medical decisions, mental health
- **Relationships** - Dating, marriage, family dynamics
- **Education** - College planning, skill development, certifications
- And many more...

### 🎯 **AI-Refined Questions**
Each guide includes comprehensive questions refined by our Axiom Engine:
- 90%+ coverage guarantee through extensive testing
- Organized by category for clarity
- Tactical prompts to guide your thinking
- Research areas and decision frameworks

### 📰 **Expert Readings**
Curated knowledge library providing:
- Expert insights and guidance
- Step-by-step how-tos
- Research-backed strategies
- Real-world examples
- Best practices

### 📋 **Integrated Planning**
Complete workspace organized per-guide:
- **Calendar** - All events, filterable by track
- **Tasks** - Kanban board with per-guide organization
- **Notes** - Rich text workspace for thoughts and planning
- **Overview** - Premium progress visualizations
- Auto-save to Supabase

### 🔒 **Authentication & Data**
- **Supabase Auth** - Secure email/password authentication
- **Auto-save** - Authenticated users save to cloud
- **Privacy** - Your data is private and never sold
- **Password Reset** - Email-based password recovery

### 🎨 **Modern UI/UX**
- **Responsive Design** - Works beautifully on all devices
- **Dark/Light Mode** - System preference + manual toggle
- **Premium Components** - Built with shadcn/ui
- **Smooth Animations** - Framer Motion transitions
- **Floating Dock Navigation** - Inspired by macOS, refined for Templata

## Pages & Routes

### Main Pages
- `/` - Landing page with luxury hero and feature showcase
- `/guides` - Browse all comprehensive guides
- `/guides/[slug]` - Individual guide detail with questions, readings, and planning
- `/library` - Browse all expert readings
- `/library/[slug]` - Individual article reader
- `/about` - Our story and the Axiom Engine
- `/app` - Main app experience with floating dock navigation

### App Views
- **Guides** - Browse and manage your active tracks
- **Notes** - Freeform workspace for thoughts and planning
- **Overview** - Premium progress visualizations
- **Calendar** - All events across guides, filterable by track
- **Tasks** - Kanban view of todos, filterable by track
- **Analytics** - Premium insights and progress tracking
- **Archive** - Completed guides and historical data

### Auth Pages
- `/login` - Sign in
- `/signup` - Create account
- Email verification flow

## Tech Stack

### Core
- **Next.js 15.5** - React framework with App Router and Turbopack
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling

### UI & Design
- **shadcn/ui** - Premium component design system
- **Radix UI** - Accessible primitives
- **Framer Motion** - Smooth animations
- **Lucide Icons** - Beautiful icon library
- **Magic UI** - Premium components (particles, animated text)

### Backend & Data
- **Supabase** - PostgreSQL database and authentication
- **API Routes** - RESTful endpoints for guides, readings, tracks
- **Server Components** - Next.js 15 server-side rendering

### Deployment
- **Vercel** - Hosting and continuous deployment
- **GitHub** - Version control

## Project Structure

```
templata/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── (marketing)/       # Marketing pages (home, about, etc.)
│   │   ├── guides/            # Guide browsing and detail
│   │   │   ├── page.tsx      # Guides list
│   │   │   └── [slug]/       # Individual guide detail
│   │   ├── library/           # Reading library
│   │   │   ├── page.tsx      # Readings list
│   │   │   └── [slug]/       # Individual reading
│   │   ├── app/               # Main app experience
│   │   │   ├── page.tsx      # App with floating dock
│   │   │   ├── views/        # All app views (Guides, Notes, etc.)
│   │   │   └── settings/     # User settings
│   │   ├── api/              # API routes
│   │   │   ├── guides/       # Guide data
│   │   │   ├── readings/     # Reading data
│   │   │   ├── tracks/       # User tracks
│   │   │   └── auth/         # Auth endpoints
│   │   └── page.tsx          # Landing page
│   ├── components/            # React components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── magicui/          # Magic UI components
│   │   ├── layout/           # Header, footer, sidebar
│   │   ├── hero-animated-text.tsx
│   │   ├── guides-hero.tsx
│   │   ├── library-hero.tsx
│   │   └── floating-dock-nav.tsx
│   ├── contexts/             # React contexts
│   │   ├── auth-context.tsx
│   │   └── DataCacheContext.tsx
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utilities and configs
│   │   ├── supabase.ts      # Supabase client setup
│   │   └── utils.ts         # Helper functions
│   ├── registry/             # Content registries
│   │   ├── guides.ts        # Guide metadata
│   │   └── schema.ts        # TypeScript types
│   └── types/               # TypeScript definitions
├── v3-planning/             # Product planning docs
│   └── MVP_V3_APP.md       # Comprehensive brand guide
├── generation-scripts/      # Data generation and migration
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
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
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
```

## Core Terminology

- **Guides** - Comprehensive frameworks for specific life events (not templates)
- **Questions** - Systematically organized prompts covering 90%+ of what you need to consider
- **Readings** - Curated expert knowledge and advice
- **Notes** - Your workspace for answers and planning
- **Tracks** - Your active guides with progress tracking
- **Axiom Engine** - Our AI refinement system ensuring 90%+ coverage through months of testing

## The Axiom Engine

**What it is:** Our question and reading refinement system powered by months of AI testing and iteration.

**Why it matters:** This isn't generic ChatGPT output. Every guide has been refined through extensive prompting and testing to ensure comprehensive coverage. The Axiom Engine is our methodology for guaranteeing 90%+ of what you need to consider is included.

**Brand message:** "Months of AI refinement, compressed into one comprehensive guide."

## Brand Voice

### Core Positioning
**The Luxury Guide for Life's Big Moments**

Templata sits at the intersection of premium tools and human empowerment. Think Superhuman × Co-Star for life's biggest decisions.

### Voice Pillars

**1. Luxuriously Confident**
Premium by design, not by accident. Every detail matters.

Examples:
- "Your life's biggest moments deserve better than Google and a spreadsheet"
- "Premium insights, sophisticated design, zero overwhelm"
- "Transform overwhelming to exhilarating"

**2. Systematically Comprehensive**
We've thought of everything so you don't have to.

Examples:
- "90%+ of what you need to consider—guaranteed"
- "Months of refinement, one comprehensive guide"
- "The Axiom Engine ensures nothing is missed"

**3. Warmly Empowering**
Life's big moments should feel exciting, not stressful.

Examples:
- "Navigate with confidence"
- "From chaos to clarity"
- "Make decisions you'll feel good about"

## Philosophy

**Premium meets comprehensive.** We believe life's biggest moments deserve the same level of sophisticated design as your favorite apps—combined with truly comprehensive guidance that leaves no stone unturned.

Like Superhuman elevated email and Co-Star brought luxury to astrology, Templata brings premium experiences to life planning.

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

## License

Proprietary - All rights reserved

## Support

- **Email**: templata.app@gmail.com
- **GitHub**: [github.com/yourusername/templata](https://github.com/yourusername/templata)

---

*Transform overwhelming to exhilarating.*
