import type { Metadata } from 'next';
import Script from 'next/script';
import { VsTrelloContent } from '@/components/vs-trello-content';
import { PageLayout } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Templata vs Trello - Life Planning Comparison 2025 | Complete Frameworks',
  description: 'Templata vs Trello comparison for life planning. Templata provides comprehensive frameworks with AI-refined questions and expert content. Trello offers basic kanban task management. Free forever vs $5+/month. See which is better.',
  keywords: 'templata vs trello, trello alternative, life planning comparison, task management vs planning framework, trello limitations, comprehensive planning, templata benefits, structured planning, expert guidance vs checklists',
  authors: [{ name: 'Templata' }],
  creator: 'Templata',
  publisher: 'Templata',
  openGraph: {
    title: 'Templata vs Trello - Life Planning Comparison 2025',
    description: 'Comprehensive planning frameworks vs basic task management.',
    url: 'https://templata.org/vs/trello',
    siteName: 'Templata',
    images: [{ url: 'https://templata.org/og-image.png', width: 1200, height: 630, alt: 'Templata vs Trello' }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Templata vs Trello - Life Planning Comparison 2025',
    description: 'Comprehensive frameworks vs basic task lists.',
    images: ['https://templata.org/og-image.png'],
    creator: '@templata',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: 'https://templata.org/vs/trello' },
};

export default function VsTrelloPage() {
  return (
    <>
      <Script id="vstrello-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'ComparisonPage',name:'Templata vs Trello',url:'https://templata.org/vs/trello'})}}/>
      <PageLayout><VsTrelloContent/></PageLayout>
      <div className="sr-only" aria-hidden="true">
        <h1>Templata vs Trello for Life Planning</h1>
        <p>Templata offers expert planning frameworks with 90%+ coverage, AI-refined questions, curated expert readings, integrated organization tools. Trello offers kanban-style task management with cards and boards. Templata is free forever. Trello costs $5-10+/month for meaningful features. For life planning, Templata provides comprehensive guidance while Trello only handles task tracking.</p>
      </div>
    </>
  );
}
