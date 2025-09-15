# AI Template Creation Guide for Templata

This guide explains how to create complete templates for the Templata system, including all necessary registry entries and files.

## Overview

The Templata system consists of 3 main registries that must be updated for each new template:

1. **Templates Registry** (`/src/registry/templates.ts`) - Template data and structure
2. **Landing Pages Registry** (`/src/registry/landing-pages.ts`) - Marketing content and SEO
3. **Blogs Registry** (`/src/registry/blogs.ts`) - Educational blog posts

## Template Creation Checklist

### 1. Template Registry Entry (`/src/registry/templates.ts`)

Add a new template object with this structure:

```typescript
{
  id: 'template-slug',
  title: 'Template Name',
  description: 'Brief template description',
  category: 'Personal' | 'Professional' | 'Business' | 'Educational',
  icon: LucideIconName, // Import from lucide-react
  sections: [
    {
      id: 'section-1',
      title: 'Section Name',
      description: 'Section description',
      prompts: [
        {
          id: 'prompt-1',
          title: 'Prompt Title',
          description: 'What this prompt helps with',
          placeholder: 'Example: What is your main goal?',
          type: 'text' | 'textarea' | 'select' | 'multiselect' | 'number' | 'date',
          required: true | false,
          options: ['Option 1', 'Option 2'] // Only for select/multiselect
        }
      ]
    }
  ]
}
```

**Key Guidelines:**
- Use descriptive, actionable prompt titles
- Include helpful placeholders and descriptions
- Organize prompts into logical sections (6-8 sections typical)
- Aim for 4-6 prompts per section
- Use appropriate input types for data collection

### 2. Landing Page Registry Entry (`/src/registry/landing-pages.ts`)

Add comprehensive marketing content:

```typescript
{
  templateId: 'template-slug',
  // SEO & Metadata
  badgeIcon: LucideIcon,
  badgeText: 'Category Badge',
  heroTitle: 'Main Headline',
  heroHighlight: 'Highlighted Text',
  heroDescription: 'Value proposition description',
  ctaText: 'Get Started Free',
  appPath: '/app/template-slug',
  
  // Hero Cards (3 key benefits)
  heroCards: [
    {
      icon: LucideIcon,
      title: 'Benefit 1',
      description: 'Brief explanation'
    }
  ],
  
  // Hero Benefits (4-5 bullet points)
  heroBenefits: [
    'Save X+ hours of work',
    'Include specific outcomes'
  ],
  
  // Process Steps (3-4 steps)
  processTitle: 'How It Works',
  processDescription: 'Brief process overview',
  processSteps: [
    {
      icon: LucideIcon,
      title: 'Step Name',
      description: 'What happens in this step'
    }
  ],
  
  // Benefits Section (3-6 benefits)
  benefitsTitle: 'Why Choose This Template',
  benefitsDescription: 'Benefits section overview',
  benefits: [
    {
      icon: LucideIcon,
      title: 'Benefit Title',
      description: 'Detailed benefit explanation'
    }
  ],
  
  // Features Section
  featuresIcon: LucideIcon,
  featuresTitle: 'What\'s Included',
  featuresDescription: 'Features overview',
  features: [
    'Feature 1: Specific capability',
    'Feature 2: Another capability'
  ],
  
  // How It Works (detailed steps)
  howItWorks: [
    {
      step: 1,
      title: 'Step Title',
      description: 'Detailed step description'
    }
  ],
  
  // Guided Notes (tips and advice)
  guidedNotes: [
    {
      icon: LucideIcon,
      title: 'Pro Tip',
      description: 'Helpful advice or insight'
    }
  ],
  
  // Testimonials (social proof)
  testimonials: [
    {
      name: 'Customer Name',
      role: 'Job Title',
      content: 'Testimonial quote',
      image: '/testimonial-image.jpg'
    }
  ],
  
  // FAQs (5-8 common questions)
  faqs: [
    {
      question: 'Common question?',
      answer: 'Helpful detailed answer'
    }
  ],
  
  // Final CTA
  ctaTitle: 'Ready to Get Started?',
  ctaDescription: 'Final call to action message',
  finalCtaText: 'Start Planning Free'
}
```

**Landing Page Guidelines:**
- Write compelling, benefit-focused copy
- Include specific time savings and outcomes
- Use social proof and testimonials
- Address common objections in FAQs
- Maintain consistent tone and messaging

### 3. Blog Registry Entry (`/src/registry/blogs.ts`)

Add 3-4 related blog posts:

```typescript
{
  templateId: 'template-slug',
  posts: [
    {
      slug: 'blog-post-slug',
      title: 'SEO-Optimized Blog Title',
      excerpt: 'Compelling blog excerpt that encourages clicks',
      content: 'Full blog post content with helpful tips and insights',
      readTime: 5, // minutes
      tags: ['relevant', 'keywords', 'for-seo'],
      publishedAt: '2024-01-15',
      featured: true | false
    }
  ]
}
```

**Blog Guidelines:**
- Write SEO-optimized titles with target keywords
- Create valuable, educational content
- Include actionable tips and insights
- Use relevant tags for discoverability
- Aim for 5-10 minute read times

### 4. Page Component (`/src/app/template-slug/page.tsx`)

Create a Next.js page component:

```typescript
import type { Metadata } from 'next';
import { TemplateLanding } from '@/components/landing/TemplateLanding';
import { getLandingPageData } from '@/registry/landing-pages';

export const metadata: Metadata = {
  title: 'Template Name | Value Proposition | Save X+ Hours | Templata',
  description: 'Complete template description with benefits and usage stats. Used by X+ users.',
  keywords: 'primary keyword, secondary keyword, related terms',
  openGraph: {
    title: 'Template Name - Value Proposition',
    description: 'Benefit-focused description for social sharing',
    type: 'website',
    images: ['/template-preview.jpg'],
  },
  alternates: {
    canonical: 'https://templata.com/template-slug',
  },
}

export default function TemplatePage() {
  const landingData = getLandingPageData('template-slug');
  
  if (!landingData) {
    return <div>Landing page data not found</div>;
  }

  // Create FAQ JSON-LD for better SEO
  const faqJsonLd = landingData.faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": landingData.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "@type": "Answer",
      "text": faq.answer
    }))
  } : undefined;
  
  return <TemplateLanding {...landingData} faqJsonLd={faqJsonLd} />;
}
```

**Page Component Guidelines:**
- Include comprehensive SEO metadata
- Use template-specific keywords
- Add structured data for FAQs
- Follow exact pattern for consistency

### 5. App Route (`/src/app/app/template-slug/page.tsx`)

The actual template application interface - this is automatically handled by the existing template system when you add the template to the registry.

## Content Writing Guidelines

### Headlines and Copy
- Lead with benefits, not features
- Use specific numbers (Save 50+ hours, Used by 10,000+ people)
- Address pain points directly
- Include urgency and social proof

### SEO Optimization
- Research target keywords for each template
- Include keywords naturally in titles and descriptions
- Write meta descriptions that encourage clicks
- Use structured data for better search results

### Template Design Principles
- Group related prompts into logical sections
- Use clear, actionable section titles
- Provide helpful placeholder text
- Balance comprehensiveness with usability
- Consider the user's mental model and workflow

## Icons and Visual Assets

- Use Lucide React icons consistently
- Choose icons that clearly represent the concept
- Maintain visual consistency across templates
- Create preview images for social sharing (optional)

## Testing Checklist

Before publishing:
- [ ] Template renders correctly in app
- [ ] Landing page displays properly
- [ ] All links work correctly
- [ ] SEO metadata is complete
- [ ] Blog posts are educational and valuable
- [ ] FAQs address common concerns
- [ ] Mobile responsiveness is good

## Template Categories

Choose the most appropriate category:
- **Personal**: Life events, personal planning, health
- **Professional**: Career, skills, workplace tools
- **Business**: Entrepreneurship, operations, marketing
- **Educational**: Learning, courses, academic planning

## Success Metrics

Good templates typically have:
- 30-50 total prompts across 6-8 sections
- 3-4 related blog posts
- 5-8 FAQs
- 3-5 testimonials
- Specific time savings claims
- Clear value proposition

This system allows for rapid template creation while maintaining quality and consistency across the entire platform.