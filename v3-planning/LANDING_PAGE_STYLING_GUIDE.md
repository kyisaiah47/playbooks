# LANDING PAGE STYLING GUIDE
*Templata Design System - November 2025*

---

## 🎨 CORE DESIGN PATTERNS

### Layout Structure
All pages use:
```tsx
<PageLayout>
  {/* Content sections */}
</PageLayout>
```

### Container Pattern
```tsx
<div className="container mx-auto max-w-7xl px-4">
  {/* Content */}
</div>
```

Variations:
- `max-w-4xl` - For narrow content (manifesto, forms)
- `max-w-7xl` - For wide content (most pages)
- `max-w-2xl` - For centered text-heavy content

---

## 📐 SECTION LAYOUTS

### Hero Section (Used on ALL pages)
```tsx
<section className="py-24 md:py-32">
  <div className="container mx-auto max-w-7xl px-4">
    <div className="text-center space-y-8 max-w-4xl mx-auto">
      <Badge variant="outline" className="px-4 py-2">
        <Icon className="mr-2 h-4 w-4" />
        Badge Text
      </Badge>

      <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
        Main Headline
        <br />
        <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Gradient Text
        </span>
      </h1>

      <p className="text-xl text-muted-foreground">
        Subheading text
      </p>
    </div>
  </div>
</section>
```

### Content Sections
**With Border:**
```tsx
<section className="py-24 border-t">
```

**With Background:**
```tsx
<section className="py-24 bg-muted/10">
```

**With Both:**
```tsx
<section className="py-24 bg-muted/30 border-y">
```

---

## 🎯 BADGES

### Outline Badge (Primary Pattern)
```tsx
<Badge variant="outline" className="px-4 py-2">
  <IconComponent className="mr-2 h-4 w-4" />
  Label Text
</Badge>
```

**Common Icons Used:**
- `Lightbulb` - Philosophy, ideas
- `HelpCircle` - FAQ, questions
- `BookOpen` - Guides, docs
- `Clock` - Coming soon, timing
- `Sparkles` - Features, highlights
- `Target` - Problems, goals

---

## 📝 TYPOGRAPHY

### Headings

**H1 (Hero):**
```tsx
<h1 className="text-4xl md:text-6xl font-bold tracking-tight">
```

**H2 (Section Titles):**
```tsx
<h2 className="text-3xl md:text-4xl font-bold">
```

**H3 (Subsections):**
```tsx
<h3 className="text-xl md:text-2xl font-semibold">
```

### Body Text

**Large Intro Text:**
```tsx
<p className="text-xl text-muted-foreground">
```

**Standard Body:**
```tsx
<p className="text-lg text-muted-foreground">
```

**Card Descriptions:**
```tsx
<p className="text-base text-muted-foreground">
```

### Gradient Text Pattern
```tsx
<span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
  Gradient Text
</span>
```

---

## 🃏 CARDS

### Feature Card (Most Common)
```tsx
<Card className="border-0 shadow-none bg-background/50 text-center">
  <CardHeader>
    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
      <Icon className="h-8 w-8 text-primary" />
    </div>
    <CardTitle className="text-xl">Card Title</CardTitle>
    <CardDescription className="text-base">
      Card description text
    </CardDescription>
  </CardHeader>
</Card>
```

### Stat Card
```tsx
<Card className="border-0 shadow-none bg-background/50 text-center">
  <CardHeader>
    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
      <Icon className="h-8 w-8 text-primary" />
    </div>
    <CardTitle className="text-3xl font-bold">1,298</CardTitle>
    <CardDescription className="text-base">
      Stat description
    </CardDescription>
  </CardHeader>
</Card>
```

### Problem Card (Dashed Border)
```tsx
<Card className="p-6 border-dashed">
  <div className="space-y-3">
    <Icon className="h-8 w-8 text-muted-foreground" />
    <div className="font-semibold text-muted-foreground">
      Problem Title
    </div>
    <div className="text-sm text-muted-foreground">
      Problem description
    </div>
  </div>
</Card>
```

### Highlight Card (Primary Border)
```tsx
<Card className="border-2 border-primary/20 bg-primary/5 p-8 text-center">
  {/* Content */}
</Card>
```

### Shadow Card
```tsx
<Card className="border-0 shadow-lg">
```

---

## 🔘 BUTTONS

### Primary Button
```tsx
<Button size="lg" className="h-12 px-8 text-base">
  Button Text
  <ArrowRight className="ml-2 h-5 w-5" />
</Button>
```

### Outline Button
```tsx
<Button variant="outline" size="lg" className="h-12 px-8 text-base">
  Button Text
</Button>
```

### Ghost Button
```tsx
<Button variant="ghost" size="lg" className="h-12 px-8 text-base">
  Button Text
</Button>
```

---

## 📊 GRIDS

### 2 Column Grid
```tsx
<div className="grid md:grid-cols-2 gap-16 items-center">
```

### 3 Column Grid (Features)
```tsx
<div className="grid md:grid-cols-3 gap-8">
```

### 4 Column Grid (Stats)
```tsx
<div className="grid md:grid-cols-4 gap-8">
```

### 2x2 Grid (Problems)
```tsx
<div className="grid grid-cols-2 gap-4">
```

---

## 🎬 ANIMATIONS (Framer Motion)

### Section Fade In
```tsx
<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8 }}
>
```

### Card Stagger
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
>
```

### Hero Animation
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
```

---

## 🎨 COLOR PATTERNS

### Icon Container Backgrounds
```tsx
className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center"
className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4"
```

### Section Backgrounds
- `bg-muted/10` - Light background
- `bg-muted/30` - Medium background
- `bg-background/50` - Translucent
- `bg-primary/5` - Primary tint

### Border Patterns
- `border` - Standard border
- `border-t` - Top border only
- `border-y` - Top and bottom
- `border-dashed` - Dashed style
- `border-2 border-primary/20` - Primary colored

---

## 📋 COMMON COMPONENTS

### FAQ Accordion (used on /faq)
```tsx
<Accordion type="single" collapsible className="space-y-4">
  {faqs.map((faq, index) => (
    <AccordionItem
      key={index}
      value={`item-${index}`}
      className="border rounded-lg px-6"
    >
      <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
        {faq.question}
      </AccordionTrigger>
      <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
        {faq.answer}
      </AccordionContent>
    </AccordionItem>
  ))}
</Accordion>
```

### Steps Cards (used on /how-it-works)
```tsx
<Card className="border-0 shadow-lg h-full">
  <CardHeader>
    <div className="flex items-center gap-3 mb-4">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
        {step.number}
      </div>
      <Icon className="h-6 w-6 text-primary" />
    </div>
    <CardTitle className="text-2xl">{step.title}</CardTitle>
    <CardDescription className="text-base mt-2">
      {step.description}
    </CardDescription>
  </CardHeader>
</Card>
```

### Email Signup (used on /partners)
```tsx
<form onSubmit={handleSubmit} className="flex gap-2">
  <Input
    type="email"
    placeholder="Enter your email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
    className="flex-1"
  />
  <Button type="submit" className="shrink-0">
    <Mail className="w-4 h-4 mr-2" />
    Notify Me
  </Button>
</form>
```

---

## 🎯 CTA SECTIONS

### Standard CTA (Bottom of pages)
```tsx
<section className="py-24 bg-muted/10">
  <div className="container mx-auto max-w-7xl px-4">
    <div className="text-center space-y-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold">
        CTA Headline
      </h2>
      <p className="text-xl text-muted-foreground">
        CTA description
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button size="lg" className="h-12 px-8 text-base">
          Primary Action
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <Button variant="outline" size="lg" className="h-12 px-8 text-base">
          Secondary Action
        </Button>
      </div>
    </div>
  </div>
</section>
```

---

## 📏 SPACING STANDARDS

### Section Padding
- `py-24` - Standard section
- `py-24 md:py-32` - Hero sections
- `py-16` - Smaller sections

### Internal Spacing
- `space-y-8` - Between major elements
- `space-y-6` - Medium spacing
- `space-y-4` - Small spacing
- `gap-8` - Grid gaps (standard)
- `gap-16` - Large grid gaps
- `gap-4` - Small grid gaps

### Text Spacing
- `max-w-4xl mx-auto` - Centered hero content
- `max-w-3xl mx-auto` - Centered body text
- `max-w-2xl mx-auto` - Narrow centered text

---

## 🎨 ICON USAGE

### Icon Sizes
- `h-4 w-4` - Badge icons, small buttons
- `h-5 w-5` - Button icons (with text)
- `h-6 w-6` - Card header icons
- `h-8 w-8` - Feature card icons
- `h-12 w-12` - Large feature icons

### Icon + Text Pattern
```tsx
<div className="flex items-center gap-4">
  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
    <Icon className="h-6 w-6 text-primary" />
  </div>
  <div>
    <h3 className="text-xl font-semibold">Title</h3>
    <p className="text-muted-foreground">Description</p>
  </div>
</div>
```

---

## ✨ SPECIAL PATTERNS

### Manifesto Page (Unique)
- Narrower container: `max-w-2xl`
- Large text: `text-lg leading-relaxed`
- No sections, single card with padding: `p-8 md:p-12`
- Audio component at top of card

### Docs Page (Unique)
- Sidebar navigation with sections
- Collapsible menu items
- Query param routing
- Component-based doc content

### Partners Page (Unique)
- "Coming Soon" badge
- Email capture form
- Success state with green styling
- Minimal single-section layout

---

## 🔄 RESPONSIVE PATTERNS

### Text Responsiveness
- `text-4xl md:text-6xl` - Hero
- `text-3xl md:text-4xl` - Section headers
- Always provide mobile/desktop variants

### Grid Responsiveness
- `grid md:grid-cols-2` - Mobile stack, desktop 2 col
- `grid-cols-2` - Always 2 columns (even mobile)
- `flex flex-col sm:flex-row` - Buttons/CTAs

### Spacing Responsiveness
- `py-24 md:py-32` - Hero sections
- `gap-4 md:gap-8` - Grids

---

## 📦 PAGE-SPECIFIC NOTES

### /about
- 2-column problem/solution layout
- 2x2 grid for problems
- Inspiration section with side-by-side comparisons
- 4-column values grid

### /how-it-works
- Numbered steps with motion animations
- Includes FAQ section
- Uses framer-motion throughout

### /faq
- Accordion component for all FAQs
- Stats section (4-column grid)
- Support cards with hover effects

### /manifesto
- Poetry-style short lines
- Single card layout
- Audio component integration
- No sections, minimal design

### /docs
- Complex sidebar nav
- State management for active doc
- Query param routing
- Multiple doc components

### /partners
- Coming soon state
- Form with success state
- Email validation
- Minimal content

---

## 🎯 KEY DESIGN PRINCIPLES

1. **Consistency**: All pages use same hero pattern
2. **Spacing**: Generous whitespace with py-24 standard
3. **Typography**: Clear hierarchy with 4xl → 3xl → xl
4. **Cards**: border-0 shadow-none bg-background/50 is default
5. **Icons**: Always primary colored in primary/10 containers
6. **Badges**: Always outline variant with icon
7. **CTAs**: Always at bottom with same layout
8. **Gradients**: Only for hero headlines
9. **Animations**: Used on /how-it-works, not elsewhere
10. **Mobile-first**: Always provide responsive variants

---

**END OF STYLING GUIDE**
