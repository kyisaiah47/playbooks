import type { Metadata } from 'next';
import { getBlogPostBySlug } from "@/registry/blogs";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Article Not Found | Templata',
      description: 'The requested article could not be found.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${post.title} | Templata`;
  const description = post.excerpt || post.description || `Expert insights on ${post.category.toLowerCase()}. ${post.title} - practical guidance for life's important decisions.`;

  return {
    title,
    description,
    keywords: `${post.category.toLowerCase()}, ${post.title.toLowerCase()}, life planning, expert advice, templata articles`,
    authors: [{ name: post.author || 'Templata Editorial Team' }],
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
          url: post.image || '/og-article-default.jpg',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author || 'Templata Editorial Team'],
      section: post.category,
      tags: post.tags || [post.category],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [post.image || '/twitter-article-default.jpg'],
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
    category: post.category,
  };
}

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}