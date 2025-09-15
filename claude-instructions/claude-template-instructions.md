# Claude Template Creation Instructions

**FOR NEW CLAUDE SESSIONS:** Read this file first and treat it as your system context for all template-related work. These are mandatory requirements, not suggestions.

**USAGE:** When starting template work, run: `Read claude-template-instructions.md` and internalize these requirements.

## Template Requirements Overview

Every template in the Templata system requires **5 essential components** to function properly:

## 1. Marketing Landing Page (`/template-name`)

**File:** `/src/app/template-name/page.tsx`

```typescript
'use client';

import { TemplateLanding } from '@/components/template/TemplateLanding';
import { getLandingPageById } from '@/registry/landing-pages';

export default function TemplateNameLandingPage() {
  const landingPage = getLandingPageById('template-name');
  
  if (!landingPage) {
    return <div>Landing page not found</div>;
  }
  
  return <TemplateLanding landingPage={landingPage} />;
}
```

## 2. Template Application (`/template-name/app`)

**File:** `/src/app/template-name/app/page.tsx`

```typescript
'use client';

import { TemplateView } from '@/components/template/TemplateView';
import { getTemplateById } from '@/registry/templates';

export default function TemplateNameApp() {
  const template = getTemplateById('template-name');
  
  if (!template?.template) {
    return <div>Template not found</div>;
  }
  
  return <TemplateView template={template.template} />;
}
```

## 3. Comprehensive Template Data

**File:** `/src/data/templates.ts`

Must include:
- Multiple sections (4-8 sections minimum)
- Detailed reflection prompts for each section
- Help text for complex prompts
- Resources and guides
- Proper categorization

```typescript
export const templateNameTemplate: GuidanceTemplate = {
  id: 'template-name',
  title: 'Template Display Name',
  description: 'Comprehensive description of what this template helps with',
  category: 'category-name',
  icon: '📋',
  sections: [
    {
      id: 'section-id',
      title: 'Section Title',
      description: 'What this section helps with',
      order: 1,
      reflectionPrompts: [
        {
          id: 'prompt-id',
          prompt: "Detailed reflection question that helps users think deeply...",
          category: 'category',
          helpText: 'Guidance on how to answer this question effectively'
        }
      ]
    }
    // More sections...
  ],
  resources: [
    {
      id: 'resource-id',
      title: 'Resource Title',
      type: 'guide',
      excerpt: 'Brief description',
      content: 'Full resource content or reference to blog post',
      tags: ['tag1', 'tag2'],
      readTime: 5,
      difficulty: 'beginner'
    }
  ]
};
```

## 4. Registry Entries

### Templates Registry (`/src/registry/templates.ts`)

```typescript
import { templateNameTemplate } from '@/data/templates';

// Add to imports at top
// Add to templateRegistry array:
{
  id: "template-name",
  name: "Template Display Name", 
  description: "Marketing description for template cards",
  category: "Category Name",
  icon: "📋",
  url: "/template-name/app",
  popular: true, // optional
  featured: true, // optional
  color: "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800",
  iconColor: "text-blue-600 dark:text-blue-400",
  template: createTemplateWithSyncedResources(templateNameTemplate)
}
```

### Landing Pages Registry (`/src/registry/landing-pages.ts`)

Must include comprehensive marketing content:
- Hero section with compelling headline
- Benefits (3-4 key benefits)
- Features (6-8 detailed features)
- Testimonials (3 realistic testimonials)
- FAQs (6-8 common questions)
- CTA sections

### Blogs Registry (`/src/registry/blogs.ts`)

Add 2-4 educational blog posts related to the template:
- Complete articles with full content
- Proper categorization and tags
- Reading time estimates
- Related template links

## 5. File Structure Summary

For template called `example-template`:

```
src/
├── app/
│   └── example-template/
│       ├── page.tsx              # Marketing landing page
│       └── app/
│           └── page.tsx          # Actual template application
├── data/
│   └── templates.ts              # Add template data
└── registry/
    ├── templates.ts              # Add registry entry
    ├── landing-pages.ts          # Add landing page content
    └── blogs.ts                  # Add related blog posts
```

## URL Structure

- **Marketing Page:** `/example-template` - showcases features, benefits, testimonials
- **Template App:** `/example-template/app` - actual functional template interface

## Quality Standards

### Template Data Requirements:
- **MINIMUM 5-6 sections** with logical flow (like wedding template)
- **4-6 reflection prompts per section** with detailed helpful guidance
- **Each prompt must have comprehensive helpText** with specific examples
- **4+ comprehensive resources** with detailed content
- **Clear categorization** and proper metadata

### Comprehensiveness Standard:
**ALL templates must match the depth and detail of the wedding template:**
- **6+ sections covering the entire process**
- **20+ total reflection prompts across all sections**
- **Detailed helpText for every prompt with specific examples**
- **4+ resources with substantial content**
- **Multiple blog posts with complete articles**

**Example of comprehensive prompt:**
```typescript
{
  id: 'vendor-research',
  prompt: 'How will you research and vet potential vendors? What criteria will you use to evaluate them?',
  category: 'research',
  helpText: 'Reviews, portfolios, references, pricing, availability, insurance, experience with similar events, communication style'
}
```

**NOT comprehensive enough:**
```typescript
{
  id: 'vendors',
  prompt: 'What vendors do you need?',
  category: 'planning',
  helpText: 'Choose your vendors'
}
```

### Content Requirements:
- **Marketing copy** that clearly explains value proposition
- **Educational blog posts** that provide real value
- **Realistic testimonials** that address common user concerns
- **Detailed FAQs** that anticipate user questions

## Icons and Styling

Use consistent color schemes:
- `bg-[color]-50 dark:bg-[color]-950/20 border-[color]-200 dark:border-[color]-800`
- `text-[color]-600 dark:text-[color]-400`

Import required icons in landing-pages.ts:
```typescript
import { IconName } from 'lucide-react';
```

## Section Icons Requirements

**CRITICAL:** Every section within each template MUST have a unique icon in the sidebar.

### Adding Section Icons
When creating or updating templates, you MUST add unique icons for each section in `/src/components/templata-sidebar.tsx`:

```typescript
// Add to getSectionIcon function
case 'your-section-id': return <UniqueIcon className="w-4 h-4" />;
```

### Icon Guidelines
- **Each section within a template needs a unique icon**
- **No duplicate icons within the same template**
- **Import required icons from lucide-react**
- **Use semantic icons that represent the section purpose**

### Example - Business Template Icons:
```typescript
case 'business-validation': return <Lightbulb className="w-4 h-4" />;
case 'legal-structure': return <Shield className="w-4 h-4" />;
case 'financial-planning': return <Calculator className="w-4 h-4" />;
case 'brand-marketing': return <Rocket className="w-4 h-4" />;
```

## Validation Checklist

Before considering a template complete:

- [ ] Marketing landing page exists and loads at `/template-name`
- [ ] Template application exists and loads at `/template-name/app`  
- [ ] **Template has 5-6+ sections with comprehensive coverage**
- [ ] **Template has 20+ total reflection prompts across all sections**
- [ ] **Every prompt has detailed helpText with specific examples**
- [ ] **Template has 4+ substantial resources**
- [ ] Registry entry exists in templates.ts with correct URL
- [ ] Landing page content exists with all required sections
- [ ] **3+ related blog posts exist with complete, detailed articles**
- [ ] All imports are properly added to registry files
- [ ] Template follows established color/icon patterns
- [ ] **EVERY section has a unique icon in templata-sidebar.tsx**
- [ ] **All required icons are imported from lucide-react**
- [ ] No 404 errors when navigating to either URL
- [ ] **Template matches wedding template's comprehensiveness level**

**Remember:** Both URLs must work - `/template-name` for marketing and `/template-name/app` for the actual template!

**CRITICAL:** Users must be able to distinguish between sections at first glance using unique icons!