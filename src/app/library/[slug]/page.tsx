import type { Metadata } from 'next';
import ReadingPageClient from './reading-page-client';
import Script from 'next/script';

async function getReading(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/readings/${id}`, {
    cache: 'no-store'
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const reading = await getReading(slug);

  if (!reading) {
    return {
      title: 'Reading Not Found - Templata',
      description: 'The requested reading could not be found.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const guideName = reading.guide
    ? reading.guide.split('-').map((word: string) =>
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ')
    : 'Library';

  // Use meta_title if exists, otherwise generate
  const title = reading.meta_title || `${reading.title} | ${guideName} Guide - Templata`;

  // Use meta_description if exists, otherwise generate
  const description = reading.meta_description || reading.excerpt || `${reading.title}. Expert insights for ${guideName.toLowerCase()}. ${reading.read_time || 'Essential reading'} to help you succeed.`;

  // Extract keyword patterns from title
  const titleLower = reading.title.toLowerCase();
  const hasPattern = (pattern: string) => titleLower.includes(pattern);

  // Build comprehensive keywords
  const baseKeywords = [
    reading.title.toLowerCase(),
    guideName.toLowerCase(),
    `${guideName.toLowerCase()} tips`,
    `${guideName.toLowerCase()} advice`,
    `${guideName.toLowerCase()} guide`,
  ];

  // Add pattern-based keywords
  if (hasPattern('mistake') || hasPattern('error') || hasPattern('avoid')) {
    baseKeywords.push(
      `${guideName.toLowerCase()} mistakes`,
      `${guideName.toLowerCase()} mistakes to avoid`,
      `common ${guideName.toLowerCase()} mistakes`
    );
  }
  if (hasPattern('how to') || hasPattern('guide to')) {
    baseKeywords.push(
      `how to ${guideName.toLowerCase()}`,
      `${guideName.toLowerCase()} step by step`
    );
  }
  if (hasPattern('tips') || hasPattern('advice')) {
    baseKeywords.push(
      `${guideName.toLowerCase()} tips`,
      `best ${guideName.toLowerCase()} tips`
    );
  }
  if (hasPattern('checklist')) {
    baseKeywords.push(
      `${guideName.toLowerCase()} checklist`,
      `${guideName.toLowerCase()} planning checklist`
    );
  }

  // Add tags from database
  if (reading.tags && Array.isArray(reading.tags)) {
    baseKeywords.push(...reading.tags.map((tag: string) => tag.toLowerCase()));
  }

  // Add author if available
  if (reading.author) {
    baseKeywords.push(reading.author.toLowerCase());
  }

  return {
    title,
    description,
    keywords: baseKeywords,
    authors: reading.author ? [{ name: reading.author }] : [{ name: 'Templata' }],
    creator: reading.author || 'Templata',
    publisher: 'Templata',
    openGraph: {
      title,
      description,
      url: `https://templata.org/library/${slug}`,
      siteName: 'Templata',
      images: [
        {
          url: '/og-image.svg',
          width: 1200,
          height: 630,
          alt: reading.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
      ...(reading.author && { authors: [reading.author] }),
      ...(reading.updated_at && { modifiedTime: reading.updated_at }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.svg'],
      ...(reading.author && { creator: `@${reading.author.replace(/\s+/g, '')}` }),
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
      canonical: `https://templata.org/library/${slug}`,
    },
  };
}

export default async function ReadingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const reading = await getReading(slug);

  if (!reading) {
    return <ReadingPageClient params={params} />;
  }

  const guideName = reading.guide
    ? reading.guide.split('-').map((word: string) =>
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ')
    : 'Library';

  // JSON-LD structured data for Article
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: reading.title,
    description: reading.excerpt || reading.title,
    image: 'https://templata.org/og-image.svg',
    author: {
      '@type': 'Organization',
      name: reading.author || 'Templata',
      url: 'https://templata.org',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Templata',
      url: 'https://templata.org',
      logo: {
        '@type': 'ImageObject',
        url: 'https://templata.org/brand/templata-logo.png',
      },
    },
    datePublished: reading.published_at || reading.created_at,
    dateModified: reading.updated_at || reading.created_at,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://templata.org/library/${slug}`,
    },
    keywords: reading.tags ? reading.tags.join(', ') : guideName.toLowerCase(),
    articleSection: guideName,
    about: {
      '@type': 'Thing',
      name: guideName,
    },
  };

  return (
    <>
      <Script
        id="reading-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReadingPageClient params={params} />
    </>
  );
}
