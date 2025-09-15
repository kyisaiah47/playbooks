import type { Metadata } from 'next';
import { TemplateLanding } from '@/components/landing/TemplateLanding';
import { getLandingPageData } from '@/registry/landing-pages';

export const metadata: Metadata = {
  title: 'Sustainable Living & Environmental Impact Template | Reduce Your Carbon Footprint | Templata',
  description: 'Complete sustainable living template with environmental impact tracking, eco-friendly lifestyle planning, and carbon footprint reduction strategies. Live sustainably with purpose. Free to start.',
  keywords: 'sustainable living template, environmental impact tracker, carbon footprint calculator, eco-friendly lifestyle, green living guide, sustainability planner, zero waste template, climate action planning',
  openGraph: {
    title: 'Sustainable Living & Environmental Impact Template - Reduce Your Carbon Footprint',
    description: 'Comprehensive sustainability system with impact tracking, lifestyle planning, and eco-friendly strategies. Make a positive environmental difference.',
    type: 'website',
    images: ['/sustainable-living-template-preview.jpg'],
  },
  alternates: {
    canonical: 'https://templata.com/sustainable-living',
  },
}

export default function SustainableLivingPage() {
  const landingData = getLandingPageData('sustainable-living');
  
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