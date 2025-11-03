import type { Metadata } from 'next';
import { getTemplateById } from '@/registry/guides';
import GuideDetail from './guide-detail';

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
  const title = `${templateData.title} - Comprehensive Guide | Templata`;
  const description = `${templateData.description} Comprehensive guide with AI-refined questions covering 90%+ of what you need to consider, curated expert readings, and integrated planning. Transform your ${templateData.title.toLowerCase()} from overwhelming to exhilarating.`;

  return {
    title,
    description,
    keywords: [
      templateData.title.toLowerCase(),
      `${templateData.title.toLowerCase()} guide`,
      `${templateData.title.toLowerCase()} planning`,
      `${templateData.category.toLowerCase()} guide`,
      'comprehensive planning',
      'ai-refined questions',
      'expert readings',
      'templata',
      'luxury planning',
      'life guides',
    ],
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
          url: '/og-image.png',
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
      images: ['/og-image.png'],
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

export default function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  return <GuideDetail params={params} />;
}
