export const dynamic = 'force-dynamic';
import type { Metadata } from 'next';
import { TemplateLanding } from '@/components/landing/TemplateLanding';
import { getLandingPageData } from '@/registry/landing-pages';

export const metadata: Metadata = {
  title: 'Travel Planning Template | Complete Trip Planning Guide | Save 40+ Hours | Templata',
  description: 'Complete travel planning template with itinerary builder, budget tracking, booking coordination, and travel guides. Used by 9,000+ travelers. Plan perfect adventures.',
  keywords: 'travel planning template, trip planner, travel itinerary, travel budget, vacation planning, travel guide, travel checklist, travel coordination, trip organizer',
  openGraph: {
    title: 'Travel Planning Template - Complete Trip Planning & Itinerary Guide',
    description: 'Everything you need to plan amazing adventures from destination research to departure. Comprehensive planning tools used by 9,000+ travelers.',
    type: 'website',
    images: ['/travel-planning-preview.jpg'],
  },
  alternates: {
    canonical: 'https://templata.com/travel-planning',
  },
}

export default function TravelPlanningPage() {
  const landingData = getLandingPageData('travel-planning');
  
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