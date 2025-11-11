import type { Metadata } from 'next';
import ReadingPageClient from './reading-page-client';
import Script from 'next/script';
import { TEMPLATA_FAQ } from '@/lib/seo';
import { createClient } from '@supabase/supabase-js';

// Enable ISR (Incremental Static Regeneration)
// Pages will be cached and revalidated every hour
export const revalidate = 3600;

// Use server-side Supabase client for SSR
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function getReading(id: string) {
  try {
    const { data: reading, error } = await supabase
      .from('readings')
      .select('*')
      .eq('id', id)
      .single();

    if (error || !reading) return null;

    // Map fields for frontend compatibility (same as API route)
    return {
      ...reading,
      readTime: reading.read_time?.replace(/ min read$/i, '').replace(/min read$/i, '') || '5',
      publishedAt: reading.published_at
    };
  } catch {
    return null;
  }
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
          url: `https://templata.org/api/og?title=${encodeURIComponent(reading.title)}&subtitle=${encodeURIComponent(guideName + ' Guide')}&type=library`,
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
      images: [`https://templata.org/api/og?title=${encodeURIComponent(reading.title)}&subtitle=${encodeURIComponent(guideName + ' Guide')}&type=library`],
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

// Pre-generate the most popular readings at build time
export async function generateStaticParams() {
  try {
    const { data: readings } = await supabase
      .from('readings')
      .select('id')
      .order('created_at', { ascending: false })
      .limit(100); // Pre-generate top 100 readings

    return readings?.map((reading) => ({
      slug: reading.id,
    })) || [];
  } catch (e) {
    console.error('[generateStaticParams] Error:', e);
    return [];
  }
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
    inLanguage: 'en-US',
    about: {
      '@type': 'Thing',
      name: guideName,
    },
  };

  // FAQ schema for rich snippets in Google search
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: TEMPLATA_FAQ.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  // Breadcrumb schema for navigation hierarchy
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
        name: 'Library',
        item: 'https://templata.org/library',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: reading.title,
        item: `https://templata.org/library/${slug}`,
      },
    ],
  };

  return (
    <>
      <Script
        id="reading-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="reading-faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="reading-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ReadingPageClient params={params} />
    </>
  );
}
