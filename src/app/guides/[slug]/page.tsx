import type { Metadata } from 'next';
import { getTemplateById } from '@/registry/guides';
import GuideDetail from './guide-detail';
import Script from 'next/script';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const template = await getTemplateById(slug);

  if (!template?.template) {
    return {
      title: 'Guide Not Found - Templata',
      description: 'The requested guide could not be found.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const templateData = template.template;
  const title = `${templateData.title} Template, Checklist & Guide | Templata`;
  const description = `Complete ${templateData.title.toLowerCase()} template and step-by-step checklist. ${templateData.description} Expert guide with 90+ planning questions, curated readings, and proven frameworks. Start planning today.`;

  // Generate comprehensive SEO keywords
  const baseKeywords = [
    templateData.title.toLowerCase(),
    `${templateData.title.toLowerCase()} template`,
    `${templateData.title.toLowerCase()} checklist`,
    `${templateData.title.toLowerCase()} guide`,
    `${templateData.title.toLowerCase()} planning`,
    `how to plan ${templateData.title.toLowerCase()}`,
    `${templateData.title.toLowerCase()} step by step`,
    `${templateData.title.toLowerCase()} tips`,
    `${templateData.title.toLowerCase()} mistakes to avoid`,
    `best ${templateData.title.toLowerCase()} guide`,
    `${templateData.title.toLowerCase()} planning template`,
    `${templateData.category.toLowerCase()} planning`,
    `${templateData.category.toLowerCase()} guide`,
    'planning template',
    'step-by-step guide',
    'comprehensive checklist',
    'expert planning guide',
  ];

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
          alt: `${templateData.title} Guide`,
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
  const template = await getTemplateById(slug);

  if (!template?.template) {
    return <GuideDetail params={params} />;
  }

  const templateData = template.template;

  // JSON-LD structured data for better SEO and rich results
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `${templateData.title} Template & Guide`,
    description: templateData.description,
    image: 'https://templata.org/og-image.svg',
    totalTime: templateData.estimated_time || 'PT2H',
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
        text: `Complete AI-refined questions to systematically think through your ${templateData.title.toLowerCase()}.`,
      },
      {
        '@type': 'HowToStep',
        name: 'Read Expert Guides',
        text: `Access curated expert readings covering all aspects of ${templateData.title.toLowerCase()}.`,
      },
      {
        '@type': 'HowToStep',
        name: 'Track Your Progress',
        text: 'Organize your answers, notes, and action items in one integrated workspace.',
      },
    ],
    about: {
      '@type': 'Thing',
      name: templateData.title,
    },
  };

  return (
    <>
      <Script
        id="guide-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GuideDetail params={params} />
    </>
  );
}
