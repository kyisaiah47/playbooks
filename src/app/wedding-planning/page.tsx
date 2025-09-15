import type { Metadata } from 'next';
import { TemplateLanding } from '@/components/landing/TemplateLanding';
import { getLandingPageData } from '@/registry/landing-pages';

export const metadata: Metadata = {
  title: 'Wedding Planning Template | Save 50+ Hours Planning Your Perfect Wedding | Templata',
  description: 'Complete wedding planning template with budget tracker, guest list manager, vendor coordination, and timeline builder. Used by 10,000+ couples. Save 50+ hours of planning time. Free to start.',
  keywords: 'wedding planning template, wedding budget tracker, wedding guest list, wedding checklist, wedding planner spreadsheet, wedding vendor list, wedding timeline template, wedding planning guide, wedding organization, wedding planning tools',
  openGraph: {
    title: 'Wedding Planning Template - Save 50+ Hours Planning Your Perfect Wedding',
    description: 'Complete wedding planning system with budget tracking, guest management, and vendor coordination. Join 10,000+ couples who saved time and stress.',
    type: 'website',
    images: ['/wedding-template-preview.jpg'],
  },
  alternates: {
    canonical: 'https://templata.com/wedding-planning',
  },
}

export default function WeddingPlanningPage() {
  const landingData = getLandingPageData('wedding-planning');
  
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