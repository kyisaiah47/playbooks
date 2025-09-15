import type { Metadata } from 'next';
import { TemplateLanding } from '@/components/landing/TemplateLanding';
import { getLandingPageData } from '@/registry/landing-pages';

export const metadata: Metadata = {
  title: 'Personal Health & Wellness Template | Optimize Your Health & Lifestyle | Templata',
  description: 'Complete health and wellness optimization template with fitness tracking, nutrition planning, mental health support, and lifestyle design. Evidence-based guidance for holistic wellbeing. Free to start.',
  keywords: 'personal health template, wellness planning, fitness tracker, nutrition guide, mental health support, lifestyle optimization, health goals, wellness journey, holistic health, healthy living template',
  openGraph: {
    title: 'Personal Health & Wellness Template - Optimize Your Health & Lifestyle',
    description: 'Comprehensive health optimization system with fitness, nutrition, mental wellness, and lifestyle planning. Transform your health with evidence-based guidance.',
    type: 'website',
    images: ['/health-wellness-template-preview.jpg'],
  },
  alternates: {
    canonical: 'https://templata.com/personal-health-wellness',
  },
}

export default function PersonalHealthWellnessPage() {
  const landingData = getLandingPageData('personal-health-wellness');
  
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