import type { Metadata } from 'next';
import { getTemplateById } from '@/registry/guides';
import MarketingClient from './marketing-client';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const template = await getTemplateById(slug);

  if (!template?.template) {
    return {
      title: 'Template Not Found | Templata',
      description: 'The requested template could not be found.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const guideData = template.template;

  // Generate long-tail keywords
  const baseKeywords = [
    guideData.title.toLowerCase(),
    `${guideData.title.toLowerCase()} template`,
    `${guideData.title.toLowerCase()} planning`,
    `${guideData.title.toLowerCase()} checklist`,
    `${guideData.title.toLowerCase()} guide`,
    `how to plan ${guideData.title.toLowerCase()}`,
    `${guideData.title.toLowerCase()} organization`,
    guideData.category.toLowerCase(),
    `${guideData.category.toLowerCase()} template`,
    'life planning template',
    'ai planning tool',
    'templata',
    'life organization',
    'planning prompts',
    'expert articles',
    'structured planning',
    'ai-powered template',
    'life os',
    'planning workspace'
  ];

  const title = `${guideData.title} Template - Complete Planning Guide with AI | Templata`;
  const description = `${guideData.description} Access expert ${guideData.title.toLowerCase()} planning with prompts, articles, and AI-powered guidance. Save 80+ hours with our comprehensive ${guideData.title.toLowerCase()} template. Free to start.`;

  return {
    title,
    description,
    keywords: baseKeywords.join(', '),
    authors: [{ name: 'Templata' }],
    creator: 'Templata',
    publisher: 'Templata',
    metadataBase: new URL('https://templata.org'),
    alternates: {
      canonical: `/guides/${slug}/marketing`,
    },
    openGraph: {
      title,
      description,
      url: `https://templata.org/guides/${slug}/marketing`,
      siteName: 'Templata',
      images: [
        {
          url: `/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: `${guideData.title} Template - Templata`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`/og-image.jpg`],
      creator: '@templata',
      site: '@templata',
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
  };
}

export default function TemplateMarketingPage({ params }: { params: Promise<{ slug: string }> }) {
  return <MarketingClient params={params} />;
}