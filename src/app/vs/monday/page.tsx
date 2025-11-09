import type { Metadata } from 'next';
import Script from 'next/script';
import { VsMondayContent } from '@/components/vs-monday-content';
import { PageLayout } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Templata vs Monday.com - Personal Planning vs Work OS',
  description: 'Templata vs Monday.com: Life planning frameworks (90%+ coverage) vs work operating system (team workflows). Templata free vs Monday paid. Life decisions: Templata. Business projects: Monday. Full comparison.',
  keywords: 'templata vs monday, monday.com alternative personal planning, monday vs templata, life planning vs work os, monday for personal use, templata vs monday.com comparison, personal life planning vs monday, monday alternative for life planning, wedding planning monday vs templata',
  authors: [{ name: 'Templata' }],
  creator: 'Templata',
  publisher: 'Templata',
  openGraph: {
    title: 'Templata vs Monday.com - Personal Planning vs Work OS',
    description: 'Life planning frameworks vs work operating system. See which fits your needs.',
    url: 'https://templata.org/vs/monday',
    siteName: 'Templata',
    images: [{ url: 'https://templata.org/og-image.png', width: 1200, height: 630, alt: 'Templata vs Monday.com' }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Templata vs Monday.com - Personal Planning vs Work OS',
    description: 'Life planning vs work operating system.',
    images: ['https://templata.org/og-image.png'],
    creator: '@templata',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: 'https://templata.org/vs/monday' },
};

export default function VsMondayPage() {
  const comparisonSchema = {
    '@context': 'https://schema.org',
    '@type': 'ComparisonPage',
    name: 'Templata vs Monday.com',
    url: 'https://templata.org/vs/monday',
  };

  return (
    <>
      <Script id="vsmonday-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{__html:JSON.stringify(comparisonSchema)}}/>
      <PageLayout><VsMondayContent/></PageLayout>
      <div className="sr-only" aria-hidden="true">
        <h1>Templata vs Monday.com for Life Planning</h1>
        <p>Templata offers expert-crafted life planning frameworks with 90%+ coverage, AI-refined questions, and curated expert content for weddings, career changes, home buying, and major life decisions. Monday.com offers work operating system for teams with project boards, workflow automation, and business process management. Templata is free forever for personal use. Monday.com requires paid subscription. For personal life planning, Templata provides comprehensive frameworks. For business team collaboration, Monday.com provides work tools.</p>
      </div>
    </>
  );
}
