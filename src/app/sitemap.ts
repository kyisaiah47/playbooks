import { MetadataRoute } from 'next';
import { articles } from '@/registry/articles';

const ARTICLES_PER_PAGE = 25;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://templata.com';

  // Calculate total pages for articles
  const totalArticlePages = Math.ceil(articles.length / ARTICLES_PER_PAGE);

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/partners`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/preview`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // Article pages (paginated)
  const articlePages: MetadataRoute.Sitemap = Array.from(
    { length: totalArticlePages },
    (_, i) => ({
      url: i === 0 ? `${baseUrl}/articles` : `${baseUrl}/articles?page=${i + 1}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: i === 0 ? 0.9 : 0.7,
    })
  );

  // Individual articles
  const articleDetailPages: MetadataRoute.Sitemap = articles.map((post) => {
    const dateString = post.updatedAt || post.publishedAt;
    const lastModified = new Date(dateString);

    return {
      url: `${baseUrl}/articles/${post.slug}`,
      lastModified: isNaN(lastModified.getTime()) ? new Date() : lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    };
  });

  return [...staticPages, ...articlePages, ...articleDetailPages];
}