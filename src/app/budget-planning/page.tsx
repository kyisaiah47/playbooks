import type { Metadata } from 'next';
import { TemplateLanding } from '@/components/landing/TemplateLanding';
import { getLandingPageData } from '@/registry/landing-pages';

export const metadata: Metadata = {
  title: 'Budget Planning Template | Master Your Finances & Save 30+ Hours | Templata',
  description: 'Complete budget planning template with expense tracking, debt management, savings goals, and financial insights. Used by 25,000+ individuals. Take control of your finances.',
  keywords: 'budget planner, personal finance template, budget tracker, expense tracker, debt payoff, savings goals, financial planning, money management, budget spreadsheet, personal budget',
  openGraph: {
    title: 'Budget Planning Template - Master Your Finances & Financial Management',
    description: 'Complete budget planning system with expense tracking, debt elimination, and savings strategies used by 25,000+ people to achieve financial freedom.',
    type: 'website',
    images: ['/budget-planning-preview.jpg'],
  },
  alternates: {
    canonical: 'https://templata.com/budget-planning',
  },
}

export default function BudgetPlanningPage() {
  const landingData = getLandingPageData('budget-planning');
  
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