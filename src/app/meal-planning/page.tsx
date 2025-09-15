import type { Metadata } from 'next';
import { TemplateLanding } from '@/components/landing/TemplateLanding';
import { getLandingPageData } from '@/registry/landing-pages';

export const metadata: Metadata = {
  title: 'Meal Planning Template | Healthy Meal Planning & Grocery Guide | Save 8+ Hours | Templata',
  description: 'Complete meal planning template with weekly menus, grocery lists, nutrition tracking, and budget management. Used by 12,000+ families. Eat better, save time & money.',
  keywords: 'meal planning template, meal prep, grocery list, weekly menu, nutrition planning, healthy eating, budget meals, family meal planning, recipe organization',
  openGraph: {
    title: 'Meal Planning Template - Complete Meal Planning & Nutrition Guide',
    description: 'Everything you need to plan healthy meals, create shopping lists, and manage nutrition goals. Comprehensive system used by 12,000+ families.',
    type: 'website',
    images: ['/meal-planning-preview.jpg'],
  },
  alternates: {
    canonical: 'https://templata.com/meal-planning',
  },
}

export default function MealPlanningPage() {
  const landingData = getLandingPageData('meal-planning');
  
  if (!landingData) {
    return <div>Landing page data not found</div>;
  }

  // Create FAQ JSON-LD from the landing data
  const faqJsonLd = landingData.faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": landingData.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : undefined;
  
  return <TemplateLanding {...landingData} faqJsonLd={faqJsonLd} />;
}