import type { Metadata } from 'next';
import { getBlogPostBySlug } from '@/registry/blogs';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogPostBySlug(slug);

  if (!article) {
    return {
      title: 'Article Not Found | Templata',
      description: 'The requested article could not be found.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${article.title} | Templata`;
  const description = article.description || `${article.excerpt} Expert guidance and insights for ${article.category.toLowerCase()}.`;

  return {
    title,
    description,
    keywords: `${article.title.toLowerCase()}, ${article.category.toLowerCase()}, life planning, ${article.tags?.join(', ')}, templata articles, expert guidance`,
    authors: [{ name: 'Templata Team' }],
    creator: 'Templata',
    publisher: 'Templata',
    metadataBase: new URL('https://templata.com'),
    alternates: {
      canonical: `/articles/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://templata.com/articles/${slug}`,
      siteName: 'Templata',
      images: [
        {
          url: `/articles/${slug}-preview.jpg`,
          width: 1200,
          height: 630,
          alt: `${article.title} - Expert Guidance Article`,
        },
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt || article.publishedAt,
      section: article.category,
      tags: article.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`/articles/${slug}-twitter.jpg`],
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

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Article structured data is handled dynamically in the page component */}
      {children}
    </>
  );
}