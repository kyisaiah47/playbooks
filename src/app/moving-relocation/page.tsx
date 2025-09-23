export const dynamic = 'force-dynamic';
import type { Metadata } from 'next';
import { TemplateLanding } from '@/components/landing/TemplateLanding';
import { getLandingPageData } from '@/registry/landing-pages';

export const metadata: Metadata = {
  title: 'Moving & Relocation Template | Complete Moving Planning Guide | Save 50+ Hours | Templata',
  description: 'Complete moving template with timeline planning, vendor coordination, budget tracking, and stress reduction strategies. Used by 7,000+ families. Make your move seamless.',
  keywords: 'moving template, relocation planner, moving checklist, moving timeline, moving budget, home relocation, moving coordination, moving organization, relocation guide',
  openGraph: {
    title: 'Moving & Relocation Template - Complete Moving Planning & Coordination Guide',
    description: 'Everything you need for a stress-free move with timeline planning, vendor management, and budget tracking used by 7,000+ families.',
    type: 'website',
    images: ['/moving-relocation-preview.jpg'],
  },
  alternates: {
    canonical: 'https://templata.com/moving-relocation',
  },
}

export default function MovingRelocationPage() {
  const landingData = getLandingPageData('moving-relocation');
  
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