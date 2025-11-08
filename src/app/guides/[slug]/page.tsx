import type { Metadata } from 'next';
import GuideDetail from './guide-detail';
import Script from 'next/script';
import { TEMPLATA_FAQ } from '@/lib/seo';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function getGuide(slug: string) {
  try {
    const { data, error } = await supabase
      .from('guides')
      .select('*')
      .eq('id', slug)
      .single();

    if (error) return null;
    return data;
  } catch {
    return null;
  }
}

async function getGuideData(slug: string) {
  try {
    const [questionsResult, readingsResult] = await Promise.all([
      supabase
        .from('questions')
        .select('id, question, category_name')
        .eq('guide', slug)
        .order('created_at', { ascending: true }),
      supabase
        .from('readings')
        .select('id, title, excerpt, content, read_time, author, slug')
        .eq('guide', slug)
        .order('created_at', { ascending: true })
    ]);

    return {
      questions: questionsResult.data || [],
      readings: readingsResult.data || []
    };
  } catch {
    return { questions: [], readings: [] };
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = await getGuide(slug);

  if (!guide) {
    return {
      title: 'Guide Not Found - Templata',
      description: 'The requested guide could not be found.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const { questions } = await getGuideData(slug);

  // Use meta_title if exists in DB, otherwise generate
  const title = guide.meta_title || `${guide.title} Template & Planning Guide | Templata`;

  // Use meta_description if exists in DB, otherwise generate
  const description = guide.meta_description || `Complete ${guide.title.toLowerCase()} planning guide. ${guide.description} Expert framework with ${questions.length > 0 ? `${questions.length}` : ''} planning questions, curated expert readings, and proven strategies. Start planning today.`;

  // Generate comprehensive SEO keywords
  const baseKeywords = [
    guide.title.toLowerCase(),
    `${guide.title.toLowerCase()} template`,
    `${guide.title.toLowerCase()} guide`,
    `${guide.title.toLowerCase()} planning`,
    `how to plan ${guide.title.toLowerCase()}`,
    `${guide.title.toLowerCase()} step by step`,
    `${guide.title.toLowerCase()} tips`,
    `${guide.title.toLowerCase()} mistakes to avoid`,
    `best ${guide.title.toLowerCase()} guide`,
    `${guide.title.toLowerCase()} planning template`,
    `${guide.category.toLowerCase()} planning`,
    `${guide.category.toLowerCase()} guide`,
    'planning template',
    'step-by-step guide',
    'expert planning guide',
  ];

  // Add SEO keywords from database if available
  if (guide.seo_keywords && Array.isArray(guide.seo_keywords)) {
    baseKeywords.push(...guide.seo_keywords.map((keyword: string) => keyword.toLowerCase()));
  }

  return {
    title,
    description,
    keywords: baseKeywords,
    authors: [{ name: 'Templata' }],
    creator: 'Templata',
    publisher: 'Templata',
    openGraph: {
      title,
      description,
      url: `https://templata.org/guides/${slug}`,
      siteName: 'Templata',
      images: [
        {
          url: '/og-image.svg',
          width: 1200,
          height: 630,
          alt: `${guide.title} Guide`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.svg'],
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
      canonical: `https://templata.org/guides/${slug}`,
    },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = await getGuide(slug);

  if (!guide) {
    return <GuideDetail params={params} />;
  }

  const { questions, readings } = await getGuideData(slug);

  // Convert guide data to template format for GuideDetail component
  const template = {
    id: guide.id,
    name: guide.title,
    description: guide.description,
    category: guide.category,
    icon: guide.icon || '',
    url: `/guides/${guide.id}`,
    color: '',
    iconColor: '',
    template: guide
  };

  // JSON-LD structured data for better SEO and rich results
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `${guide.title} Template & Guide`,
    description: guide.description,
    image: 'https://templata.org/og-image.svg',
    totalTime: guide.estimated_time || 'PT2H',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '0',
    },
    tool: {
      '@type': 'HowToTool',
      name: 'Templata Planning Platform',
    },
    supply: {
      '@type': 'HowToSupply',
      name: 'Planning Template & Checklist',
    },
    step: [
      {
        '@type': 'HowToStep',
        name: 'Answer Planning Questions',
        text: `Complete AI-refined questions to systematically think through your ${guide.title.toLowerCase()}.`,
      },
      {
        '@type': 'HowToStep',
        name: 'Read Expert Guides',
        text: `Access curated expert readings covering all aspects of ${guide.title.toLowerCase()}.`,
      },
      {
        '@type': 'HowToStep',
        name: 'Track Your Progress',
        text: 'Organize your answers, notes, and action items in one integrated workspace.',
      },
    ],
    about: {
      '@type': 'Thing',
      name: guide.title,
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

  return (
    <>
      <Script
        id="guide-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="guide-faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <GuideDetail
        params={params}
        initialTemplate={template}
        initialQuestions={questions}
        initialReadings={readings}
      />

      {/* Hidden SEO content - full reading content for search engines */}
      <div className="sr-only" aria-hidden="true">
        {readings.map((reading: any) => (
          <article key={`seo-${reading.id}`}>
            <h2>{reading.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: reading.content?.replace(/\n/g, '<br />') || '' }} />
          </article>
        ))}
      </div>
    </>
  );
}
