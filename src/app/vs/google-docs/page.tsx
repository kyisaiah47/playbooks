import type { Metadata } from 'next';
import Script from 'next/script';
import { VsGoogleDocsContent } from '@/components/vs-google-docs-content';
import { PageLayout } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Templata vs Google Docs - Life Planning Comparison 2025 | Better Alternative',
  description: 'Compare Templata vs Google Docs for life planning. Templata offers expert frameworks with 90%+ coverage, AI-refined questions, curated content vs Google Docs blank documents. Free forever. See which is better for weddings, careers, home buying.',
  keywords: 'templata vs google docs, google docs alternative, life planning comparison, planning tool vs google docs, google docs limitations, templata benefits, structured planning vs blank documents, expert planning frameworks, google docs for wedding planning, career planning tools',
  authors: [{ name: 'Templata' }],
  creator: 'Templata',
  publisher: 'Templata',
  openGraph: {
    title: 'Templata vs Google Docs - Life Planning Comparison 2025',
    description: 'Expert frameworks with comprehensive guidance vs blank documents.',
    url: 'https://templata.org/vs/google-docs',
    siteName: 'Templata',
    images: [{ url: 'https://templata.org/og-image.png', width: 1200, height: 630, alt: 'Templata vs Google Docs' }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Templata vs Google Docs - Life Planning Comparison 2025',
    description: 'Expert frameworks vs blank documents.',
    images: ['https://templata.org/og-image.png'],
    creator: '@templata',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: 'https://templata.org/vs/google-docs' },
};

export default function VsGoogleDocsPage() {
  return (
    <>
      <Script id="vsgoogledocs-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'ComparisonPage',name:'Templata vs Google Docs',url:'https://templata.org/vs/google-docs'})}}/>
      <PageLayout><VsGoogleDocsContent/></PageLayout>
      <div className="sr-only" aria-hidden="true">
        <h1>Templata vs Google Docs for Life Planning</h1>
        <p>Templata provides expert frameworks with 90%+ coverage, AI-refined questions, curated readings, integrated organization. Google Docs provides blank documents requiring you to research and structure everything yourself. Templata is free forever. Google Docs is free but offers no planning guidance. For life planning, Templata is significantly better with expert content vs blank pages.</p>
      </div>
    </>
  );
}
