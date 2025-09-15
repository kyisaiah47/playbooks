import type { Metadata } from 'next';
import { TemplateLanding } from '@/components/landing/TemplateLanding';
import { getLandingPageData } from '@/registry/landing-pages';

export const metadata: Metadata = {
  title: 'Productivity System Template | Master Time Management & Get 40+ Hours Back | Templata',
  description: 'Complete productivity system with time blocking, task management, goal tracking, and focus techniques. Used by 30,000+ professionals. Double your productivity today.',
  keywords: 'productivity system, time management, task management, time blocking, Getting Things Done, GTD, productivity planner, focus techniques, goal setting, habit tracker',
  openGraph: {
    title: 'Productivity System Template - Master Time Management & Double Your Output',
    description: 'Complete productivity system with time blocking, GTD methods, and goal tracking used by 30,000+ professionals to double their meaningful output.',
    type: 'website',
    images: ['/productivity-system-preview.jpg'],
  },
  alternates: {
    canonical: 'https://templata.com/productivity-system',
  },
}

export default function ProductivitySystemPage() {
  const landingData = getLandingPageData('productivity-system');
  
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