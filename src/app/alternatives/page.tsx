import type { Metadata } from 'next';
import Script from 'next/script';
import { AlternativesContent } from '@/components/alternatives-content';
import { PageLayout } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Best Life Planning Apps - Templata vs Notion, Trello, Asana & More',
  description: 'Compare best life planning tools: Templata (expert frameworks, 90%+ coverage, free), Notion (blank pages), Google Docs (basic), Trello (tasks), Asana (project mgmt), Monday (work OS). See which is best for weddings, careers, home buying.',
  keywords: 'best life planning apps, life planning tools comparison, templata vs notion vs trello, best planning software, notion alternatives for planning, best free planning app, wedding planning app comparison, career planning tools, life planning software reviews, templata alternatives, best planning platform, planning app comparison',
  authors: [{ name: 'Templata' }],
  creator: 'Templata',
  publisher: 'Templata',
  openGraph: {
    title: 'Best Life Planning Apps - Complete Comparison',
    description: 'Compare Templata, Notion, Trello, Asana, Monday.com and more. Find the best tool for life planning.',
    url: 'https://templata.org/alternatives',
    siteName: 'Templata',
    images: [{ url: 'https://templata.org/og-image.png', width: 1200, height: 630, alt: 'Best Life Planning Apps' }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Life Planning Apps - Complete Comparison',
    description: 'Compare Templata, Notion, Trello, Asana, Monday and find the best for life planning.',
    images: ['https://templata.org/og-image.png'],
    creator: '@templata',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: 'https://templata.org/alternatives' },
};

export default function AlternativesPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Best Life Planning Apps and Tools',
    description: 'Comprehensive comparison of life planning tools including Templata, Notion, Google Docs, Trello, Asana, and Monday.com',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'SoftwareApplication',
          name: 'Templata',
          applicationCategory: 'LifestyleApplication',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          description: 'Expert-crafted life planning frameworks with 90%+ coverage, AI-refined questions, and curated expert readings. Free forever.'
        }
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'SoftwareApplication',
          name: 'Notion',
          applicationCategory: 'ProductivityApplication',
          description: 'Flexible workspace for notes, docs, and databases. Blank page approach requiring custom setup.'
        }
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'SoftwareApplication',
          name: 'Google Docs',
          applicationCategory: 'ProductivityApplication',
          description: 'Cloud-based document editor for writing and collaboration.'
        }
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'SoftwareApplication',
          name: 'Trello',
          applicationCategory: 'ProductivityApplication',
          description: 'Visual kanban boards for simple task management and checklists.'
        }
      },
      {
        '@type': 'ListItem',
        position: 5,
        item: {
          '@type': 'SoftwareApplication',
          name: 'Asana',
          applicationCategory: 'BusinessApplication',
          description: 'Project management tool for work teams, timelines, and task coordination.'
        }
      },
      {
        '@type': 'ListItem',
        position: 6,
        item: {
          '@type': 'SoftwareApplication',
          name: 'Monday.com',
          applicationCategory: 'BusinessApplication',
          description: 'Work operating system for team workflows and business processes.'
        }
      }
    ]
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Best Life Planning Apps - Complete Comparison',
    description: 'Comprehensive comparison of life planning tools including Templata, Notion, Google Docs, Trello, Asana, and Monday.com',
    url: 'https://templata.org/alternatives',
  };

  return (
    <>
      <Script id="alternatives-itemlist-jsonld" type="application/ld+json"
        dangerouslySetInnerHTML={{__html:JSON.stringify(itemListSchema)}}/>
      <Script id="alternatives-webpage-jsonld" type="application/ld+json"
        dangerouslySetInnerHTML={{__html:JSON.stringify(webPageSchema)}}/>
      <PageLayout><AlternativesContent/></PageLayout>

      <div className="sr-only" aria-hidden="true">
        <h1>Best Life Planning Apps and Tools Comparison</h1>
        <p>Compare the best life planning tools: Templata, Notion, Google Docs, Trello, Asana, and Monday.com. Find the right tool for planning weddings, career changes, home buying, and major life decisions.</p>

        <h2>Life Planning Tool Comparison</h2>
        <p>Templata: Expert-crafted frameworks with 90%+ coverage, AI-refined questions, curated expert readings. Free forever. Best for weddings, careers, home buying, business launches.</p>
        <p>Notion: Flexible workspace with blank pages. Good for general note-taking but requires you to build planning frameworks yourself. Paid plans for teams.</p>
        <p>Google Docs: Free document editor. Good for basic writing but no planning structure or expert guidance.</p>
        <p>Trello: Visual kanban boards for simple task lists. Good for basic checklists but no planning frameworks or expert content.</p>
        <p>Asana: Project management for work teams. Excellent for work projects but not built for personal life planning. Paid plans required.</p>
        <p>Monday.com: Work operating system for business workflows. Great for team collaboration but expensive for personal use. Subscription required.</p>

        <h2>Best Life Planning App for Different Needs</h2>
        <p>Best for wedding planning: Templata - expert frameworks and comprehensive question sets</p>
        <p>Best for career planning: Templata - AI-refined career transition questions and expert readings</p>
        <p>Best for home buying: Templata - complete home buying framework from search to closing</p>
        <p>Best for business planning: Templata - business launch frameworks and financial planning</p>
        <p>Best for general notes: Notion - flexible for custom setups</p>
        <p>Best for work projects: Asana or Monday.com - team collaboration features</p>
        <p>Best free option for life planning: Templata - completely free with no paywalls</p>
      </div>
    </>
  );
}
