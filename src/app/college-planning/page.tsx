import type { Metadata } from 'next';
import { TemplateLanding } from '@/components/landing/TemplateLanding';
import { getLandingPageData } from '@/registry/landing-pages';

export const metadata: Metadata = {
  title: 'College Planning Template | Complete College Admissions Guide | Get Into Your Dream School | Templata',
  description: 'Complete college planning template with application tracking, essay organization, financial aid guidance, and scholarship management. Used by 18,000+ students. Navigate admissions successfully.',
  keywords: 'college planning template, college applications, college admissions, college essay, scholarship search, financial aid, FAFSA, college prep, university applications, college planning guide',
  openGraph: {
    title: 'College Planning Template - Complete College Admissions & Application Guide',
    description: 'Everything you need to navigate college admissions successfully. Comprehensive planning system used by 18,000+ students and families.',
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