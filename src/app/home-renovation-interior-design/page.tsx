export const dynamic = 'force-dynamic';
import type { Metadata } from 'next';
import { TemplateLanding } from '@/components/landing/TemplateLanding';
import { getLandingPageData } from '@/registry/landing-pages';

export const metadata: Metadata = {
  title: 'Home Renovation & Interior Design Template | Plan Your Dream Home | Templata',
  description: 'Complete home renovation and interior design template with project planning, budget tracking, contractor management, and design coordination. Transform your space with confidence. Free to start.',
  keywords: 'home renovation template, interior design planner, renovation budget tracker, contractor management, home improvement planning, remodeling guide, design project template, home renovation checklist',
  openGraph: {
    title: 'Home Renovation & Interior Design Template - Plan Your Dream Home',
    description: 'Comprehensive renovation planning system with budget management, contractor coordination, and design guidance. Create your dream space with expert planning.',
    type: 'website',
    images: ['/home-renovation-template-preview.jpg'],
  },
  alternates: {
    canonical: 'https://templata.com/home-renovation-interior-design',
  },
}

export default function HomeRenovationInteriorDesignPage() {
  const landingData = getLandingPageData('home-renovation-interior-design');
  
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