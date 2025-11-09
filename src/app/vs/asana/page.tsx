import type { Metadata } from 'next';
import Script from 'next/script';
import { VsAsanaContent } from '@/components/vs-asana-content';
import { PageLayout } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Templata vs Asana - Life Planning vs Project Management',
  description: 'Templata vs Asana: Personal life planning (90%+ coverage, expert frameworks) vs team project management (tasks, timelines). Templata free vs Asana paid. Wedding planning: Templata. Work projects: Asana. See full comparison.',
  keywords: 'templata vs asana, asana alternative life planning, asana vs templata, life planning vs project management, asana for personal use, templata vs asana comparison, personal planning tool vs asana, asana alternative for life events, wedding planning asana vs templata, career planning tools vs asana',
  authors: [{ name: 'Templata' }],
  creator: 'Templata',
  publisher: 'Templata',
  openGraph: {
    title: 'Templata vs Asana - Life Planning vs Project Management',
    description: 'Personal life planning frameworks vs team project management. See the difference.',
    url: 'https://templata.org/vs/asana',
    siteName: 'Templata',
    images: [{ url: 'https://templata.org/og-image.png', width: 1200, height: 630, alt: 'Templata vs Asana' }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Templata vs Asana - Life Planning vs Project Management',
    description: 'Personal life planning vs team project management.',
    images: ['https://templata.org/og-image.png'],
    creator: '@templata',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: 'https://templata.org/vs/asana' },
};

export default function VsAsanaPage() {
  const comparisonSchema = {
    '@context': 'https://schema.org',
    '@type': 'ComparisonPage',
    name: 'Templata vs Asana',
    url: 'https://templata.org/vs/asana',
  };

  return (
    <>
      <Script id="vsasana-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{__html:JSON.stringify(comparisonSchema)}}/>
      <PageLayout><VsAsanaContent/></PageLayout>
      <div className="sr-only" aria-hidden="true">
        <h1>Templata vs Asana for Life Planning</h1>
        <p>Templata provides expert life planning frameworks with 90%+ coverage, AI-refined questions, curated expert readings for weddings, careers, home buying, and major life transitions. Asana provides project management tools for team task tracking, workflow automation, and work collaboration. Templata is free forever for personal life planning. Asana requires paid plans for meaningful features. For life planning, Templata is purpose-built. For work projects, Asana is purpose-built.</p>
      </div>
    </>
  );
}
