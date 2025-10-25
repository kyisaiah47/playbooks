import type { Metadata } from 'next';
import { getGuideById } from '@/registry/guides';
import GuideBrowse from './guide-browse';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = await getGuideById(slug);

  if (!guide?.guide) {
    return {
      title: 'Template Not Found | Templata',
      description: 'The requested guide could not be found.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const guideData = guide.guide;
  const title = `${guideData.title} Template | Templata`;
  const description = `${guideData.description} Complete guide with questions, readings, and guided steps. Save 80+ hours with our AI-powered ${guideData.title.toLowerCase()} guide.`;

  return {
    title,
    description,
    keywords: `${guideData.title.toLowerCase()} guide, ${guideData.category.toLowerCase()}, life planning guide, structured planning, templata`,
    authors: [{ name: 'Templata Team' }],
    creator: 'Templata',
    publisher: 'Templata',
    metadataBase: new URL('https://templata.org'),
    alternates: {
      canonical: `/guides/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://templata.org/guides/${slug}`,
      siteName: 'Templata',
      images: [
        {
          url: `/guides/${slug}-preview.jpg`,
          width: 1200,
          height: 630,
          alt: `${guideData.title} Template Preview`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`/guides/${slug}-twitter.jpg`],
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

export default function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  return <GuideBrowse params={params} />;
}