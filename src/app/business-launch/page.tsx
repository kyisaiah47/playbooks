export const dynamic = 'force-dynamic';
import type { Metadata } from 'next';
import { TemplateLanding } from '@/components/landing/TemplateLanding';
import { getLandingPageData } from '@/registry/landing-pages';

export const metadata: Metadata = {
  title: 'Business Launch Template | Start Your Business Right | Market Research & Planning | Templata',
  description: 'Complete business launch template with market validation, business plan builder, funding guide, and launch checklist. Used by 5,000+ entrepreneurs. Launch successfully in 90 days. Free to start.',
  keywords: 'business launch template, startup template, business plan template, market research, business validation, entrepreneur guide, startup checklist, business launch plan, startup tools, business planning',
  openGraph: {
    title: 'Business Launch Template - Start Your Business Right with Market Research & Planning',
    description: 'Complete business launch system with market validation, business planning, and strategic execution. Join 5,000+ entrepreneurs who launched successfully.',
    type: 'website',
    images: ['/business-launch-preview.jpg'],
  },
  alternates: {
    canonical: 'https://templata.com/business-launch',
  },
}

export default function BusinessLaunchPage() {
  const landingData = getLandingPageData('business-launch');
  
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