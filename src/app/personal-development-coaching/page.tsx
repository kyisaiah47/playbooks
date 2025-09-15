import type { Metadata } from 'next';
import { TemplateLanding } from '@/components/landing/TemplateLanding';
import { getLandingPageData } from '@/registry/landing-pages';

export const metadata: Metadata = {
  title: 'Personal Development & Life Coaching Template | Transform Your Life | Templata',
  description: 'Comprehensive personal development template with life coaching strategies, goal setting, habit formation, and transformation planning. Used by 10,000+ people pursuing growth.',
  keywords: 'personal development template, life coaching, self improvement, goal setting, habit formation, life transformation, personal growth, coaching template',
  openGraph: {
    title: 'Personal Development & Life Coaching Template - Transform Your Life',
    description: 'Everything you need for personal transformation with coaching strategies, goal setting, and development planning used by 10,000+ people.',
    type: 'website',
    images: ['/personal-development-preview.jpg'],
  },
  alternates: {
    canonical: 'https://templata.com/personal-development-coaching',
  },
}

export default function PersonalDevelopmentCoachingPage() {
  const landingData = getLandingPageData('personal-development-coaching');
  
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