import type { Metadata } from 'next';
import Script from 'next/script';
import { PageLayout } from '@/components/layout';
import { VsWikipediaContent } from '@/components/vs-wikipedia-content';

export const metadata: Metadata = {
  title: 'Templata vs Wikipedia - Active Planning vs Passive Reading',
  description: 'Compare Templata to Wikipedia for life planning. Personalized planning frameworks with 50+ questions vs general encyclopedia articles. Active planning vs passive reading. Free comprehensive guidance.',
  keywords: 'templata vs wikipedia, wikipedia alternative planning, active planning framework, life planning tool, personalized planning, wedding planning vs wikipedia, comprehensive planning, planning framework, life planning platform, active vs passive planning, personalized frameworks vs general articles, actionable guidance vs encyclopedia, templata interactive planning vs wikipedia reading, guided questions vs wikipedia information, comprehensive planning vs passive research, life event planning vs wikipedia articles',
  authors: [{ name: 'Templata' }],
  creator: 'Templata',
  publisher: 'Templata',
  openGraph: {
    title: 'Templata vs Wikipedia | Active Planning vs Passive Reading',
    description: 'Personalized planning frameworks vs general encyclopedia articles. Choose active planning.',
    url: 'https://templata.org/vs/wikipedia',
    siteName: 'Templata',
    images: [
      {
        url: 'https://templata.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Templata vs Wikipedia: Personalized life planning frameworks with 50+ guided questions vs general encyclopedia articles. Active planning vs passive reading.',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Templata vs Wikipedia | Active Planning vs Passive Reading',
    description: 'Personalized planning frameworks vs general encyclopedia articles.',
    images: ['https://templata.org/og-image.png'],
    creator: '@templata',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://templata.org/vs/wikipedia',
  },
};

export default function VsWikipediaPage() {
  // Using Article schema for better Google recognition
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Templata vs Wikipedia - Active Planning vs Passive Reading',
    description: 'Compare personalized planning frameworks vs general encyclopedia articles. Active guided planning vs passive information consumption.',
    url: 'https://templata.org/vs/wikipedia',
    image: 'https://templata.org/og-image.png',
    author: {
      '@type': 'Organization',
      name: 'Templata',
      url: 'https://templata.org',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Templata',
      url: 'https://templata.org',
      logo: {
        '@type': 'ImageObject',
        url: 'https://templata.org/logo.png',
      },
    },
    datePublished: '2025-01-10',
    dateModified: '2025-01-10',
    inLanguage: 'en-US',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://templata.org/vs/wikipedia',
    },
    keywords: 'templata vs wikipedia, active planning, personalized life planning, planning framework, comprehensive guidance',
    articleSection: 'Comparisons',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://templata.org',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Comparisons',
        item: 'https://templata.org/alternatives',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'vs Wikipedia',
        item: 'https://templata.org/vs/wikipedia',
      },
    ],
  };

  return (
    <>
      <Script
        id="vs-wikipedia-article-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="vs-wikipedia-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageLayout>
        <VsWikipediaContent />
      </PageLayout>

      {/* Hidden SEO content */}
      <div className="sr-only" aria-hidden="true">
        <h2>Templata vs Wikipedia - Life Planning Comparison</h2>
        <p>
          Compare Templata's active planning frameworks to Wikipedia encyclopedia articles for major life events. While Wikipedia provides general background knowledge, Templata offers personalized, actionable planning with expert guidance and integrated tools.
        </p>

        <h3>The Limitation of Wikipedia for Planning</h3>
        <p>
          Wikipedia's articles on "Wedding planning," "Career change," or "Home buying" give you general information that applies to everyone. No personalization, no action items, no way to organize YOUR specific planning, no progress tracking. You read passively, then figure out planning yourself.
        </p>

        <h3>How Templata Transforms This</h3>
        <p>
          Templata transforms passive encyclopedia reading into active, personalized planning. Instead of one general article for everyone, each guide provides 50+ AI-refined questions tailored to YOUR situation. Expert-validated frameworks ensure 90%+ coverage of what matters for YOUR specific planning journey.
        </p>

        <h3>Key Differences</h3>
        <ul>
          <li><strong>Approach:</strong> Wikipedia is passive reading; Templata is active planning</li>
          <li><strong>Personalization:</strong> Wikipedia is the same for everyone; Templata adapts to your situation</li>
          <li><strong>Action:</strong> Wikipedia gives background knowledge; Templata gives actionable questions and tasks</li>
          <li><strong>Tools:</strong> Wikipedia has no planning tools; Templata includes tasks, calendars, tracking</li>
          <li><strong>Coverage:</strong> Wikipedia covers topics broadly; Templata ensures 90%+ coverage of YOUR specific needs</li>
        </ul>

        <h3>When to Use Each</h3>
        <p>
          Use Wikipedia to learn background information and understand terminology. Use Templata when you need to actually plan and execute a major life event with expert frameworks, personalized guidance, and integrated organization tools.
        </p>
      </div>
    </>
  );
}
