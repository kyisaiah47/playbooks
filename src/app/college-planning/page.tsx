import type { Metadata } from 'next';
import { TemplateLanding } from '@/components/landing/TemplateLanding';
import { getLandingPageData } from '@/registry/landing-pages';

export const metadata: Metadata = {
  title: 'College Planning Template | Complete College Application & Financial Aid Guide | Templata',
  description: 'Complete college planning template with application tracker, essay guides, financial aid planner, and timeline. Used by 15,000+ students. Get into your dream college. Free to start.',
  keywords: 'college planning template, college application tracker, college essay guide, financial aid planner, college selection, SAT ACT prep, college admissions, scholarship search, college timeline, college checklist',
  openGraph: {
    title: 'College Planning Template - Complete College Application & Financial Aid Guide',
    description: 'Navigate college planning with expert guidance. Comprehensive system with application tracking, essay guides, and financial aid planning used by 15,000+ students.',
    type: 'website',
    images: ['/college-planning-preview.jpg'],
  },
  alternates: {
    canonical: 'https://templata.com/college-planning',
  },
}

export default function CollegePlanningPage() {
  const landingData = getLandingPageData('college-planning');
  
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