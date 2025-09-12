import type { Metadata } from 'next';
import { TemplateLanding } from '@/components/landing/TemplateLanding';
import { getLandingPageData } from '@/registry/landing-pages';

export const metadata: Metadata = {
  title: 'Fitness Journey Template | Complete Workout & Nutrition Planning Guide | Templata',
  description: 'Complete fitness planning template with workout routines, nutrition tracking, progress monitoring, and goal setting. Used by 15,000+ fitness enthusiasts. Transform your body and mind.',
  keywords: 'fitness template, workout planner, fitness tracker, nutrition planning, exercise routine, fitness goals, strength training, weight loss, muscle building, fitness journey',
  openGraph: {
    title: 'Fitness Journey Template - Complete Workout & Nutrition Planning System',
    description: 'Everything you need to achieve your fitness goals with structured workouts, nutrition guidance, and progress tracking used by 15,000+ people.',
    type: 'website',
    images: ['/fitness-journey-preview.jpg'],
  },
  alternates: {
    canonical: 'https://templata.com/fitness-journey',
  },
}

export default function FitnessJourneyPage() {
  const landingData = getLandingPageData('fitness-journey');
  
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