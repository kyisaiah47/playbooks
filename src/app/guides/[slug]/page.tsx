import type { Metadata } from 'next';
import GuideDetail from './guide-detail';
import Script from 'next/script';
import { TEMPLATA_FAQ } from '@/lib/seo';
import { createClient } from '@supabase/supabase-js';

// Enable ISR (Incremental Static Regeneration)
// Pages will be cached and revalidated every hour
export const revalidate = 3600;

// Create Supabase client for server-side data fetching
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function getGuide(slug: string) {
  try {
    const { data: guide, error } = await supabase
      .from('guides')
      .select('*')
      .eq('id', slug)
      .single();

    if (error) {
      console.error('[getGuide] Supabase error:', error);
      return null;
    }
    if (!guide) {
      console.error('[getGuide] No guide found for slug:', slug);
      return null;
    }
    return guide;
  } catch (e) {
    console.error('[getGuide] Exception:', e);
    return null;
  }
}

async function getGuideData(slug: string) {
  try {
    const [questionsResult, readingsResult] = await Promise.all([
      supabase
        .from('questions')
        .select('*')
        .eq('guide_id', slug)
        .order('question_number', { ascending: true }),
      supabase
        .from('readings')
        .select('*')
        .eq('guide', slug)
        .order('created_at', { ascending: true })
    ]);

    return {
      questions: questionsResult.data || [],
      readings: readingsResult.data || []
    };
  } catch (e) {
    console.error('[getGuideData] Exception:', e);
    return { questions: [], readings: [] };
  }
}

async function getRelatedGuides(category: string, currentSlug: string) {
  try {
    const { data: guides } = await supabase
      .from('guides')
      .select('id, name, description, category')
      .eq('category', category)
      .neq('id', currentSlug)
      .order('created_at', { ascending: false })
      .limit(3);

    return guides || [];
  } catch (e) {
    console.error('[getRelatedGuides] Exception:', e);
    return [];
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
  const title = guide.meta_title || `${guide.name} Template & Planning Guide | Templata`;

  // Use meta_description if exists in DB, otherwise generate
  const description = guide.meta_description || `Complete ${guide.name.toLowerCase()} planning guide. ${guide.description} Expert framework with ${questions.length > 0 ? `${questions.length}` : ''} planning questions, curated expert readings, and proven strategies. Start planning today.`;

  // Generate comprehensive SEO keywords
  const baseKeywords = [
    guide.name.toLowerCase(),
    `${guide.name.toLowerCase()} template`,
    `${guide.name.toLowerCase()} guide`,
    `${guide.name.toLowerCase()} planning`,
    `how to plan ${guide.name.toLowerCase()}`,
    `${guide.name.toLowerCase()} step by step`,
    `${guide.name.toLowerCase()} tips`,
    `${guide.name.toLowerCase()} mistakes to avoid`,
    `best ${guide.name.toLowerCase()} guide`,
    `${guide.name.toLowerCase()} planning template`,
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
          url: `https://templata.org/api/og?title=${encodeURIComponent(guide.name)}&subtitle=${encodeURIComponent('Expert planning guide')}&type=guide`,
          width: 1200,
          height: 630,
          alt: `${guide.name} Planning Guide: Expert framework with AI-refined questions, curated readings, and comprehensive ${guide.category.toLowerCase()} planning guidance. Free access to professional ${guide.name.toLowerCase()} template.`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`https://templata.org/api/og?title=${encodeURIComponent(guide.name)}&subtitle=${encodeURIComponent('Expert planning guide')}&type=guide`],
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

// Pre-generate the most popular guides at build time
export async function generateStaticParams() {
  try {
    const { data: guides } = await supabase
      .from('guides')
      .select('id')
      .order('created_at', { ascending: false })
      .limit(50); // Pre-generate top 50 guides

    return guides?.map((guide) => ({
      slug: guide.id,
    })) || [];
  } catch (e) {
    console.error('[generateStaticParams] Error:', e);
    return [];
  }
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = await getGuide(slug);

  if (!guide) {
    return <GuideDetail params={params} />;
  }

  const [{ questions, readings }, relatedGuides] = await Promise.all([
    getGuideData(slug),
    getRelatedGuides(guide.category, slug)
  ]);

  // Convert guide data for GuideDetail component
  const guideEntry = {
    id: guide.id,
    name: guide.name,
    description: guide.description,
    category: guide.category,
    icon: guide.icon || '',
    url: `/guides/${guide.id}`,
    color: '',
    iconColor: '',
    guide: guide
  };

  // JSON-LD structured data for better SEO and rich results
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `${guide.name} Template & Guide`,
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
        text: `Complete AI-refined questions to systematically think through your ${guide.name.toLowerCase()}.`,
      },
      {
        '@type': 'HowToStep',
        name: 'Read Expert Guides',
        text: `Access curated expert readings covering all aspects of ${guide.name.toLowerCase()}.`,
      },
      {
        '@type': 'HowToStep',
        name: 'Track Your Progress',
        text: 'Organize your answers, notes, and action items in one integrated workspace.',
      },
    ],
    about: {
      '@type': 'Thing',
      name: guide.name,
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
        name: 'Guides',
        item: 'https://templata.org/guides',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: guide.name,
        item: `https://templata.org/guides/${slug}`,
      },
    ],
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
      <Script
        id="guide-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <GuideDetail
        params={params}
        initialTemplate={guideEntry}
        initialQuestions={questions}
        initialReadings={readings}
      />

      {/* Hidden SEO content - full reading content for search engines */}
      {/* Content is from our database so we can trust it for SEO purposes */}
      <div className="sr-only" aria-hidden="true">
        {readings.map((reading: any) => (
          <article key={`seo-${reading.id}`}>
            <h2>{reading.title}</h2>
            <div>
              {reading.content?.replace(/\n/g, ' ') || ''}
            </div>
          </article>
        ))}

        {/* Related guides for internal linking */}
        {relatedGuides.length > 0 && (
          <section>
            <h2>Related {guide.category} Planning Guides</h2>
            <p>If you're planning {guide.name.toLowerCase()}, you might also be interested in these related {guide.category.toLowerCase()} planning guides:</p>
            {relatedGuides.map((relatedGuide: any) => (
              <article key={`related-${relatedGuide.id}`}>
                <h3><a href={`/guides/${relatedGuide.id}`}>{relatedGuide.name} Planning Guide</a></h3>
                <p>{relatedGuide.description || `Comprehensive ${relatedGuide.name.toLowerCase()} planning guide with expert frameworks and AI-refined questions.`}</p>
              </article>
            ))}
          </section>
        )}
      </div>
    </>
  );
}
