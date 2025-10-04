# Templata Brand Guidelines

**Version 1.0** | Last Updated: January 2025

## Overview

Templata is a comprehensive life planning platform that helps users navigate major life transitions through guided templates, reflection prompts, and curated resources. Our brand embodies clarity, empowerment, and thoughtful design.

---

## Brand Identity

### Mission Statement
To empower individuals through major life transitions by providing structured guidance, thoughtful reflection, and comprehensive resources—all in one beautifully designed platform.

### Core Values
- **Clarity**: Clear, actionable guidance without overwhelming complexity
- **Empowerment**: Tools that help users take control of their journey
- **Thoughtfulness**: Carefully curated content and intuitive user experience
- **Accessibility**: Making life planning tools available to everyone
- **Growth**: Supporting continuous learning and personal development

### Brand Personality
- **Professional yet approachable**: Expert guidance without being intimidating
- **Calm and organized**: Reducing stress through structure
- **Modern and innovative**: Cutting-edge UX while maintaining familiarity
- **Supportive**: A trusted companion through life's transitions

---

## Visual Identity

### Logo

**Primary Logo**: `templata-logo.svg`
- **Location**: `/public/brand/templata-logo.svg`
- **Usage**: Primary brand identifier across all platforms
- **Clear Space**: Maintain minimum padding equal to the height of the "T" letterform
- **Minimum Size**: 24px height (digital), 0.5 inch (print)

**Logo Variations**:
- **Light Backgrounds**: Use default black/dark logo
- **Dark Backgrounds**: Use white/light logo variant
- **Favicon**: `/public/brand/favicon-white.svg` and `/public/brand/favicon-black.svg`

**Logo Don'ts**:
- ❌ Don't stretch or distort the logo
- ❌ Don't rotate the logo
- ❌ Don't add effects (shadows, glows, etc.)
- ❌ Don't place on busy backgrounds without proper contrast

### Color Palette

#### Primary Theme (Default)
```css
--background: 0 0% 3.9%
--foreground: 0 0% 98%
--primary: 0 0% 98%
--primary-foreground: 0 0% 9%
```

#### Available Themes
1. **Default (Black)**: Clean, professional, high-contrast
2. **Rose**: Warm, inviting, creative
3. **Neutral**: Balanced, versatile, approachable
4. **Emerald**: Fresh, growth-oriented, energetic
5. **Violet**: Sophisticated, creative, premium
6. **Midnight**: Deep, focused, immersive

**Theme Usage Guidelines**:
- Default theme for marketing pages and first-time visitors
- User-selectable themes for personalized workspace experience
- Maintain consistent theme throughout user session
- Always ensure WCAG AA contrast ratios (4.5:1 minimum)

### Typography

#### Primary Font Stack
```css
font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont,
             "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
```

#### Type Scale
- **Hero Text**: 3.5rem (56px) - Bold - Line Height: 1.1
- **H1**: 2.5rem (40px) - Bold - Line Height: 1.2
- **H2**: 2rem (32px) - Semibold - Line Height: 1.3
- **H3**: 1.5rem (24px) - Semibold - Line Height: 1.4
- **H4**: 1.25rem (20px) - Medium - Line Height: 1.5
- **Body**: 1rem (16px) - Regular - Line Height: 1.6
- **Small**: 0.875rem (14px) - Regular - Line Height: 1.5
- **Tiny**: 0.75rem (12px) - Regular - Line Height: 1.4

#### Font Weights
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

### Iconography

**Icon Library**: Lucide React
- **Size Standards**: 16px (sm), 20px (md), 24px (lg), 32px (xl)
- **Stroke Width**: 2px (default)
- **Style**: Line-based, minimal, consistent stroke width
- **Usage**: Support text, never replace it in critical actions

**Template Category Icons**:
- Wedding Planning: `Heart`
- Home Buying: `Home`
- Baby Planning: `Baby`
- Job Search: `Briefcase`
- Business Launch: `Rocket`
- Retirement: `Sunset`
- Fitness: `Dumbbell`

---

## Voice & Tone

### Writing Guidelines

#### Voice Characteristics
- **Clear and direct**: No jargon, no fluff
- **Encouraging**: "You've got this" not "This is hard"
- **Action-oriented**: Verbs over nouns
- **Inclusive**: Gender-neutral, culturally aware

#### Tone Variations

**Homepage/Marketing**:
- Confident and inspiring
- "Transform major life transitions into guided journeys"

**Template Descriptions**:
- Practical and helpful
- "Get organized with a comprehensive wedding planning checklist"

**Error Messages**:
- Friendly and solution-focused
- "Couldn't save your work. Check your connection and try again."

**Success Messages**:
- Celebratory but not over-the-top
- "Your workspace has been saved! ✓"

#### Word Choice

**Use** → **Avoid**
- Templates → Forms
- Guidance → Instructions
- Workspace → Project
- Reflection prompts → Questions
- Resources → Links
- Journey → Process

---

## Content Standards

### Template Statistics
- **Templates**: 1,298 (not "150+" or "hundreds of")
- **Articles**: 26,000+ (not "3,000+" or "thousands of")
- **Users**: Use actual numbers when available
- **Updates**: "Updated weekly" or specific dates

### Call-to-Action Standards

**Primary CTAs** (High-Intent Actions):
- "Start [Template Name]" (e.g., "Start Wedding Planning")
- "Create Workspace"
- "Export to PDF"

**Secondary CTAs** (Exploratory Actions):
- "Browse Templates"
- "Read More"
- "View Details"

**Tertiary CTAs** (Account/Settings):
- "Sign In"
- "My Workspaces"
- "Settings"

**CTA Formatting**:
- Title case for primary actions
- Sentence case for secondary actions
- Always include clear action verb
- Keep to 2-4 words when possible

### Template-Specific CTAs
Each template should have a customized CTA that reflects its specific purpose:
- Wedding Planning: "Start Planning Your Wedding"
- Home Buying: "Find Your Dream Home"
- Job Search: "Launch Your Job Search"
- Baby Planning: "Prepare for Your Baby"

---

## Component Patterns

### Cards
- **Border Radius**: 0.75rem (12px)
- **Padding**: 1.5rem (24px)
- **Shadow**: Subtle, elevation-based
- **Hover State**: Slight elevation increase, border color change

### Buttons
- **Border Radius**: 0.5rem (8px)
- **Height**: 2.5rem (40px) default, 2rem (32px) small
- **Padding**: 1rem horizontal (16px)
- **Hover**: Slight opacity change (0.9)
- **Active**: Scale down (0.95)

### Inputs
- **Border Radius**: 0.5rem (8px)
- **Height**: 2.5rem (40px)
- **Padding**: 0.75rem (12px)
- **Focus State**: Ring effect, primary color

### Modals/Dialogs
- **Max Width**: 90vw mobile, 600px desktop
- **Backdrop**: Semi-transparent overlay (0.8 opacity)
- **Animation**: Fade in + scale up
- **Padding**: 2rem (32px)

---

## User Experience Patterns

### Command Palette (⌘K)
- **Trigger**: Cmd/Ctrl + K
- **Behavior**: Fuzzy search across templates, articles, prompts
- **Visual**: Full-screen overlay with glassmorphism effect
- **Keyboard Nav**: Arrow keys + Enter

### Navigation
- **Primary**: Command palette-first (search-driven)
- **Secondary**: Sidebar with template categories
- **Breadcrumbs**: Show current location, clickable navigation

### Progress Indicators
- **Workspace Progress**: Percentage-based (e.g., "67% complete")
- **Loading States**: Skeleton screens + spinner for delayed actions
- **Auto-save**: Silent save every 30 seconds with timestamp

### Error Handling
- **Inline Validation**: Real-time feedback on forms
- **Toast Notifications**: Non-blocking success/error messages
- **Error States**: Clear explanation + suggested action

---

## Marketing & Communication

### Social Proof Elements
- User testimonials (when available)
- Template usage statistics (e.g., "Used by 10,000+ people")
- Expert badges (domain specialists who contributed)
- Template of the Week showcase

### SEO Guidelines
- **Page Titles**: `[Page Name] | Templata - Life Planning Templates`
- **Meta Descriptions**: 155-160 characters, include key benefits
- **Open Graph Images**: 1200x630px, include Templata logo
- **Structured Data**: Organization, WebSite, BreadcrumbList schemas

### Email Communication
- **Subject Lines**: Clear, benefit-focused, under 50 characters
- **Preheader**: Complements subject line, 85-100 characters
- **Sender Name**: "Templata" or "Templata Team"
- **Footer**: Unsubscribe + contact info required

---

## Platform-Specific Guidelines

### Web Application
- **Responsive Breakpoints**:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px
- **Theme Persistence**: Store user theme preference in localStorage
- **Auto-save**: Every 30 seconds + on major actions
- **Keyboard Shortcuts**: Cmd+K (search), Cmd+S (save), Esc (close modals)

### Export Formats
- **PDF**: Professional formatting, include Templata branding in footer
- **CSV**: Clean data export, include column headers
- **Print**: Optimized layouts, hide navigation elements

---

## File Organization

### Brand Assets Location
```
/public/brand/
├── templata-logo.svg          # Primary logo
├── favicon-white.svg          # Dark mode favicon
├── favicon-black.svg          # Light mode favicon
└── [future brand assets]
```

### Asset Naming Conventions
- Lowercase with hyphens: `template-icon-wedding.svg`
- Descriptive names: `hero-background-gradient.png`
- Include size in name if multiple versions: `logo-small.svg`, `logo-large.svg`

---

## Accessibility

### WCAG 2.1 AA Compliance
- **Color Contrast**: Minimum 4.5:1 for text, 3:1 for large text
- **Focus Indicators**: Visible focus states on all interactive elements
- **Alt Text**: Descriptive alt text for all images
- **Keyboard Navigation**: Full site navigable without mouse
- **Screen Readers**: Semantic HTML + ARIA labels where needed

### Inclusive Design
- **Forms**: Clear labels, error messages, help text
- **Language**: Gender-neutral, culturally sensitive
- **Media**: Captions for videos, transcripts for audio
- **Color**: Don't rely solely on color to convey information

---

## Version History

**v1.0** (January 2025)
- Initial brand guidelines document
- Established core visual identity
- Defined voice and tone standards
- Documented component patterns
- Set accessibility standards

---

## Contact & Questions

For questions about these brand guidelines or to request brand assets:
- **GitHub**: [templata/issues](https://github.com/anthropics/templata/issues)
- **Documentation**: See `/docs` folder for additional guides

---

**Note**: These guidelines are living documents. As Templata evolves, so will our brand standards. Check the version number and last updated date to ensure you're referencing the most current guidelines.
