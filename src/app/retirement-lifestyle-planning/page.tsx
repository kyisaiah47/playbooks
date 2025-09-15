import type { Metadata } from 'next';
import { TemplateLanding } from '@/components/landing/TemplateLanding';
import { getLandingPageData } from '@/registry/landing-pages';

export const metadata: Metadata = {
  title: 'Retirement & Lifestyle Planning Template | Plan Your Perfect Retirement | Templata',
  description: 'Complete retirement planning template with lifestyle design, financial planning, health strategies, and legacy planning. Used by 8,000+ pre-retirees and retirees.',
  keywords: 'retirement planning template, retirement lifestyle, retirement planning, financial planning, retirement goals, retirement health, lifestyle planning',
  openGraph: {
    title: 'Retirement & Lifestyle Planning Template - Plan Your Perfect Retirement',
    description: 'Everything you need for retirement planning with lifestyle design, financial strategies, and comprehensive planning used by 8,000+ people.',
    type: 'website',
    images: ['/retirement-planning-preview.jpg'],
  },
  alternates: {
    canonical: 'https://templata.com/retirement-lifestyle-planning',
  },
}

export default function RetirementLifestylePlanningPage() {
  const landingData = getLandingPageData('retirement-lifestyle-planning');
  
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