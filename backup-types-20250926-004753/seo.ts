import { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  canonical?: string;
  robots?: string;
  type?: 'website' | 'article' | 'profile';
  image?: string;
  noIndex?: boolean;
  keywords?: string[];
}

export function generateMetadata(config: SEOConfig): Metadata {
  const baseUrl = 'https://templata.com';
  const fullTitle = config.title.includes('Templata') ? config.title : `${config.title} | Templata`;

  return {
    title: fullTitle,
    description: config.description,
    keywords: config.keywords?.join(', '),
    robots: config.robots || (config.noIndex ? 'noindex,follow' : 'index,follow'),
    canonical: config.canonical ? `${baseUrl}${config.canonical}` : undefined,
    openGraph: {
      title: fullTitle,
      description: config.description,
      url: config.canonical ? `${baseUrl}${config.canonical}` : undefined,
      siteName: 'Templata',
      type: config.type || 'website',
      images: config.image ? [{ url: config.image }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: config.description,
      images: config.image ? [config.image] : undefined,
    },
  };
}

export function generateStructuredData(type: 'CollectionPage' | 'Article' | 'WebPage', data: any) {
  const baseStructure = {
    '@context': 'https://schema.org',
    '@type': type,
    name: data.title,
    description: data.description,
    url: data.url,
  };

  switch (type) {
    case 'CollectionPage':
      return {
        ...baseStructure,
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: data.numberOfItems,
          itemListElement: data.items?.map((item: any, index: number) => ({
            '@type': 'Article',
            position: index + 1,
            name: item.title,
            description: item.excerpt,
            url: item.url,
            author: {
              '@type': 'Organization',
              name: item.author
            },
            datePublished: item.publishedAt,
            articleSection: item.category
          })) || []
        }
      };

    case 'Article':
      return {
        ...baseStructure,
        '@type': 'Article',
        headline: data.title,
        author: {
          '@type': 'Organization',
          name: data.author
        },
        datePublished: data.publishedAt,
        dateModified: data.updatedAt || data.publishedAt,
        articleSection: data.category,
        wordCount: data.wordCount,
        timeRequired: data.readTime,
        keywords: data.tags?.join(', '),
        publisher: {
          '@type': 'Organization',
          name: 'Templata',
          logo: {
            '@type': 'ImageObject',
            url: 'https://templata.com/logo.png'
          }
        }
      };

    case 'WebPage':
    default:
      return baseStructure;
  }
}

export function generateBreadcrumbStructuredData(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `https://templata.com${crumb.url}`
    }))
  };
}

export function generatePaginationLinks(currentPage: number, totalPages: number, basePath: string) {
  const links: Array<{ rel: string; href: string }> = [];

  if (currentPage > 1) {
    const prevPage = currentPage === 2 ? basePath : `${basePath}?page=${currentPage - 1}`;
    links.push({ rel: 'prev', href: `https://templata.com${prevPage}` });
  }

  if (currentPage < totalPages) {
    links.push({ rel: 'next', href: `https://templata.com${basePath}?page=${currentPage + 1}` });
  }

  return links;
}

// SEO-optimized keywords for different categories
export const categoryKeywords: Record<string, string[]> = {
  'Personal Life': ['life decisions', 'personal growth', 'life planning', 'self improvement'],
  'Career & Business': ['career advice', 'business planning', 'professional development', 'entrepreneurship'],
  'Family & Parenting': ['family planning', 'parenting advice', 'child development', 'family relationships'],
  'Finance & Investment': ['financial planning', 'investment advice', 'money management', 'wealth building'],
  'Health & Wellness': ['health planning', 'wellness advice', 'lifestyle changes', 'mental health'],
  'Education & Learning': ['education planning', 'learning strategies', 'skill development', 'academic success'],
  'Relationships & Dating': ['relationship advice', 'dating tips', 'communication skills', 'love and relationships'],
  'Home & Living': ['home improvement', 'interior design', 'real estate', 'home organization'],
  'Travel & Adventure': ['travel planning', 'adventure travel', 'vacation planning', 'travel tips'],
  'Technology & Digital': ['technology planning', 'digital transformation', 'tech advice', 'digital lifestyle']
};

export function getKeywordsForCategory(category: string): string[] {
  return categoryKeywords[category] || ['planning', 'advice', 'guidance', 'tips'];
}