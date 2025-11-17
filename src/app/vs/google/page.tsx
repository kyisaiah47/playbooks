import type { Metadata } from 'next';
import Script from 'next/script';
import { PageLayout } from '@/components/layout';
import { VsGoogleContent } from '@/components/vs-google-content';

export const metadata: Metadata = {
  title: 'Templata vs Google Search - Organized Planning vs Scattered Tabs',
  description: 'Compare Templata to Google Search for life planning. Expert frameworks with 90%+ coverage vs 50 browser tabs. One organized system vs scattered blog posts. Free comprehensive planning.',
  keywords: 'templata vs google, google search alternative, life planning tool, wedding planning vs google, organized planning, expert frameworks, comprehensive life planning, google search scattered, planning framework, life planning platform, google search vs organized system, 50 tabs vs one platform, google research vs expert guidance, scattered blog posts vs curated content, templata vs googling how to plan, comprehensive framework vs random articles, organized planning vs google search results, ai planning vs google searching',
  authors: [{ name: 'Templata' }],
  creator: 'Templata',
  publisher: 'Templata',
  openGraph: {
    title: 'Templata vs Google Search | Organized vs Scattered',
    description: 'Expert frameworks with 90%+ coverage vs 50 scattered tabs. Choose organized planning.',
    url: 'https://templata.org/vs/google',
    siteName: 'Templata',
    images: [
      {
        url: 'https://templata.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Templata vs Google Search: Organized expert planning frameworks with 90%+ coverage vs 50 scattered browser tabs. One comprehensive system vs fragmented blog posts.',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Templata vs Google Search | Organized vs Scattered',
    description: 'Expert frameworks with 90%+ coverage vs 50 scattered tabs.',
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
    canonical: 'https://templata.org/vs/google',
  },
};

export default function VsGooglePage() {
  // Using Article schema for better Google recognition
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Templata vs Google Search - Organized Planning vs Scattered Tabs',
    description: 'Compare expert planning frameworks vs scattered Google search results. One organized system vs 50 browser tabs.',
    url: 'https://templata.org/vs/google',
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
      '@id': 'https://templata.org/vs/google',
    },
    keywords: 'templata vs google, organized planning, life planning tool, wedding planning framework, comprehensive planning system',
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
        name: 'vs Google',
        item: 'https://templata.org/vs/google',
      },
    ],
  };

  return (
    <>
      <Script
        id="vs-google-article-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="vs-google-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageLayout>
        <VsGoogleContent />
      </PageLayout>

      {/* Hidden SEO content */}
      <div className="sr-only" aria-hidden="true">
        <h2>Templata vs Google Search - Life Planning Comparison</h2>
        <p>
          Compare Templata's organized expert frameworks to Google Search for planning major life events. While Google provides scattered search results across hundreds of blog posts, Templata offers comprehensive, validated frameworks in one integrated platform.
        </p>

        <h3>The Problem with Google for Life Planning</h3>
        <p>
          Planning a wedding, career change, or home purchase through Google means opening 50+ browser tabs, reading conflicting advice from random blogs, and trying to synthesize everything yourself. No organization, no tracking, no certainty you've covered everything important.
        </p>

        <h3>How Templata Solves This</h3>
        <p>
          Templata replaces scattered search results with one comprehensive framework per life event. Each guide provides 50+ AI-refined questions ensuring 90%+ coverage of what matters, plus curated expert readings integrated with your planning. Everything organized in dedicated workspaces with built-in tasks, calendars, and progress tracking.
        </p>

        <h3>Key Differences</h3>
        <ul>
          <li><strong>Organization:</strong> Google gives scattered results; Templata provides structured frameworks</li>
          <li><strong>Coverage:</strong> Google requires you to piece together information; Templata ensures 90%+ validated coverage</li>
          <li><strong>Quality:</strong> Google shows random blogs; Templata curates expert readings</li>
          <li><strong>Tools:</strong> Google has no planning tools; Templata includes tasks, calendars, analytics</li>
          <li><strong>Tracking:</strong> Google doesn't track your progress; Templata shows completion and momentum</li>
        </ul>

        <h3>When to Use Each</h3>
        <p>
          Use Google for quick lookups and specific questions. Use Templata for comprehensive life planning where you need expert frameworks, organized guidance, and integrated tools to manage complex decisions.
        </p>
      </div>
    </>
  );
}
