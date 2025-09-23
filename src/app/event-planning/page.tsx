export const dynamic = 'force-dynamic';
import type { Metadata } from 'next';
import { TemplateLanding } from '@/components/landing/TemplateLanding';
import { getLandingPageData } from '@/registry/landing-pages';

export const metadata: Metadata = {
  title: 'Event Planning Template | Complete Event Coordination Guide | Save 60+ Hours | Templata',
  description: 'Complete event planning template with budget tracking, vendor management, timeline coordination, and marketing strategies. Used by 4,000+ event planners. Create unforgettable experiences.',
  keywords: 'event planning template, event coordination, party planning, corporate events, event management, wedding planning, event marketing, venue selection, vendor management',
  openGraph: {
    title: 'Event Planning Template - Complete Event Coordination & Management Guide',
    description: 'Everything you need to plan memorable events from conception to execution. Professional coordination tools used by 4,000+ event planners.',
    type: 'website',
    images: ['/event-planning-preview.jpg'],
  },
  alternates: {
    canonical: 'https://templata.com/event-planning',
  },
}

export default function EventPlanningPage() {
  const landingData = getLandingPageData('event-planning');
  
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