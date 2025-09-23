export const dynamic = 'force-dynamic';
import type { Metadata } from 'next';
import { TemplateLanding } from '@/components/landing/TemplateLanding';
import { getLandingPageData } from '@/registry/landing-pages';

export const metadata: Metadata = {
  title: 'Budget Planning Template | Master Your Finances & Build Wealth | Templata',
  description: 'Complete budget planning template with debt payoff calculator, expense tracker, savings planner, and financial goals. Used by 25,000+ people. Master your finances in 30 days. Free to start.',
  keywords: 'budget planning template, debt payoff calculator, expense tracker, financial planning, budget spreadsheet, savings planner, financial goals, money management, budgeting tools, financial freedom',
  openGraph: {
    title: 'Budget Planning Template - Master Your Finances & Build Wealth',
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