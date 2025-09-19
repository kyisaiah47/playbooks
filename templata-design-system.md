# Templata Design System

## Overview
Templata's design system is built for **guidance-focused life planning experiences**. The system emphasizes clarity, accessibility, and sophisticated guidance delivery through a clean, modern interface inspired by premium productivity tools.

## Philosophy
- **Guidance over gamification** - Clean, professional interface that focuses on content
- **Sophisticated but accessible** - Premium feel without complexity
- **Email-style navigation** - Familiar dual-sidebar pattern for browsing and organizing
- **Abundant content display** - Optimized for rich guidance and reflection prompts

## Color System

### OKLCH Color Space
Templata uses the modern OKLCH color space for consistent, perceptually uniform colors across all interfaces.

#### Light Theme
```css
--background: oklch(0.9900 0 0)        /* Pure white background */
--foreground: oklch(0 0 0)             /* Pure black text */
--primary: oklch(0 0 0)                /* Black primary actions */
--primary-foreground: oklch(1 0 0)     /* White on primary */
--secondary: oklch(0.9400 0 0)         /* Light gray secondary */
--muted: oklch(0.9700 0 0)             /* Very light gray muted */
--muted-foreground: oklch(0.4400 0 0)  /* Medium gray muted text */
--accent: oklch(0.9400 0 0)            /* Light gray accent */
--border: oklch(0.9200 0 0)            /* Light border gray */
```

#### Dark Theme
```css
--background: oklch(0 0 0)             /* Pure black background */
--foreground: oklch(1 0 0)             /* Pure white text */
--primary: oklch(1 0 0)                /* White primary actions */
--primary-foreground: oklch(0 0 0)     /* Black on primary */
--secondary: oklch(0.2500 0 0)         /* Dark gray secondary */
--muted: oklch(0.2300 0 0)             /* Dark gray muted */
--muted-foreground: oklch(0.7200 0 0)  /* Light gray muted text */
--accent: oklch(0.3200 0 0)            /* Medium gray accent */
--border: oklch(0.2600 0 0)            /* Dark border gray */
```

#### Sidebar Colors
```css
/* Light Theme */
--sidebar: oklch(0.9900 0 0)           /* Clean white sidebar */
--sidebar-foreground: oklch(0 0 0)     /* Black sidebar text */
--sidebar-accent: oklch(0.9400 0 0)    /* Light hover states */

/* Dark Theme */
--sidebar: oklch(0.1800 0 0)           /* Dark gray sidebar */
--sidebar-foreground: oklch(1 0 0)     /* White sidebar text */
--sidebar-accent: oklch(0.3200 0 0)    /* Medium gray hover */
```

## Typography

### Font Stack
- **Primary**: `Geist Sans` - Modern, readable sans-serif for UI
- **Monospace**: `Geist Mono` - Clean monospace for code/data
- **Serif**: `Georgia` - Classic serif for formal content

### Font Weights & Sizes
- **Body Text**: Regular (400) weight, optimized for reading guidance content
- **Headings**: Medium (500) weight for clear hierarchy
- **UI Elements**: Medium (500) weight for buttons and navigation

### Letter Spacing
```css
--tracking-normal: 0em                 /* Default spacing */
--tracking-tight: -0.025em             /* Tighter for headlines */
--tracking-wide: +0.025em              /* Wider for small text */
```

## Spacing & Layout

### Border Radius
```css
--radius: 0.5rem                       /* Base radius (8px) */
--radius-sm: calc(var(--radius) - 4px) /* Small radius (4px) */
--radius-md: calc(var(--radius) - 2px) /* Medium radius (6px) */
--radius-lg: var(--radius)             /* Large radius (8px) */
--radius-xl: calc(var(--radius) + 4px) /* Extra large (12px) */
```

### Shadows
Subtle, consistent shadows using OKLCH-based shadow system:
```css
--shadow-xs: 0px 1px 2px 0px hsl(0 0% 0% / 0.09)
--shadow-sm: 0px 1px 2px 0px hsl(0 0% 0% / 0.18), 0px 1px 2px -1px hsl(0 0% 0% / 0.18)
--shadow-md: 0px 1px 2px 0px hsl(0 0% 0% / 0.18), 0px 2px 4px -1px hsl(0 0% 0% / 0.18)
--shadow-lg: 0px 1px 2px 0px hsl(0 0% 0% / 0.18), 0px 4px 6px -1px hsl(0 0% 0% / 0.18)
```

## Components

### Buttons
Built with `class-variance-authority` for consistent variants:

**Variants:**
- `default` - Primary black/white actions
- `secondary` - Light gray background
- `outline` - Border with transparent background
- `ghost` - Transparent with hover states
- `destructive` - Error/warning actions

**Sizes:**
- `sm` - Compact 32px height
- `default` - Standard 36px height
- `lg` - Large 40px height
- `icon` - Square 36px for icons

### Cards
Clean, minimal cards with subtle shadows and proper spacing for content organization.

### Navigation
- **Dual Sidebar**: Email-style navigation with sections + content browser
- **Breadcrumbs**: Clear navigation hierarchy
- **Tabs**: Organized content sections

## Scrollbars

### Custom Scrollbar Design
Theme-aware custom scrollbars throughout the interface:
```css
*::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

*::-webkit-scrollbar-thumb {
  background: hsl(var(--muted-foreground) / 0.3);
  border-radius: 4px;
  border: 1px solid transparent;
  background-clip: content-box;
}

*::-webkit-scrollbar-thumb:hover {
  background: hsl(var(--muted-foreground) / 0.5);
}
```

## Animations

### Built-in Animations
- **Marquee**: Horizontal scrolling content
- **Slide Transitions**: Smooth page transitions
- **Hover States**: Subtle interactive feedback

### Performance-Optimized
All animations use `transform` and `opacity` for optimal performance.

## Accessibility

### Focus Management
- **Ring System**: Consistent focus indicators across all interactive elements
- **Color Contrast**: WCAG AA compliant color combinations
- **Keyboard Navigation**: Full keyboard accessibility

### Screen Reader Support
- Semantic HTML structure
- Proper ARIA labels and descriptions
- Logical tab order

## Implementation

### Tech Stack
- **Framework**: Tailwind CSS v4 with CSS Custom Properties
- **Components**: shadcn/ui component library
- **Icons**: Lucide React icon set
- **State**: CSS custom properties for theming

### Usage
```tsx
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

// Primary action button
<Button variant="default" size="lg">
  Continue Planning
</Button>

// Content card
<Card className="p-6">
  <h3 className="font-medium mb-4">Reflection Prompt</h3>
  <p className="text-muted-foreground">...</p>
</Card>
```

## Design Principles

1. **Clarity First** - Every element serves the guidance experience
2. **Consistent Spacing** - Predictable layout patterns
3. **Subtle Interactions** - Smooth, non-distracting animations
4. **Content Focus** - UI never competes with guidance content
5. **Professional Feel** - Premium quality without complexity

## Responsive Design

- **Mobile-first** approach with desktop enhancements
- **Dual sidebar** collapses to single navigation on mobile
- **Touch-friendly** sizing for all interactive elements
- **Optimized reading** experience across all screen sizes

This design system supports Templata's mission of transforming overwhelming life decisions into manageable, guided experiences through thoughtful, professional interface design.