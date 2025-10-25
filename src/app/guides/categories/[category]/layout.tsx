import type { Metadata } from 'next';

interface CategoryLayoutProps {
  children: React.ReactNode;
  params: Promise<{ category: string }>;
}

// Map URL slugs to display names
const categoryDisplayNames: Record<string, string> = {
  'life-planning': 'Life Planning',
  'career-finance': 'Career & Finance',
  'health-wellness': 'Health & Wellness',
  'relationships-family': 'Relationships & Family',
  'creative-hobbies': 'Creative & Hobbies',
  'business-entrepreneurship': 'Business & Entrepreneurship',
  'education-learning': 'Education & Learning',
  'technology-digital': 'Technology & Digital',
  'personal-development': 'Personal Development',
  'home-living': 'Home & Living',
};

const categoryDescriptions: Record<string, string> = {
  'life-planning': 'Comprehensive guides for major life planning decisions and milestones.',
  'career-finance': 'Expert guides for career changes, job searches, and financial planning.',
  'health-wellness': 'Structured guides for health goals, wellness routines, and medical planning.',
  'relationships-family': 'Guides for relationships, family planning, and important life events.',
  'creative-hobbies': 'Planning frameworks for creative projects, hobbies, and artistic pursuits.',
  'business-entrepreneurship': 'Business planning guides for entrepreneurs and startup founders.',
  'education-learning': 'Educational planning guides for students and lifelong learners.',
  'technology-digital': 'Guides for digital projects, tech planning, and online initiatives.',
  'personal-development': 'Self-improvement frameworks and personal growth planning guides.',
  'home-living': 'Home buying, moving, renovation, and living space planning guides.',
};

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const categoryName = categoryDisplayNames[category] ||
    category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const description = categoryDescriptions[category] || `Browse all ${categoryName.toLowerCase()} guides with questions, readings, and expert guidance.`;

  const title = `${categoryName} Guides | Templata`;

  return {
    title,
    description,
    keywords: `${categoryName.toLowerCase()} guides, ${categoryName.toLowerCase()} planning, life planning, structured frameworks, templata`,
    openGraph: {
      title,
      description,
      url: `https://templata.org/guides/categories/${category}`,
      siteName: 'Templata',
      images: [
        {
          url: 'https://templata.org/og-image.png',
          width: 1200,
          height: 630,
          alt: `${categoryName} Guides - Templata`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://templata.org/og-image.png'],
      creator: '@templata',
      site: '@templata',
    },
    alternates: {
      canonical: `/guides/categories/${category}`,
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

export default async function CategoryLayout({ children, params }: CategoryLayoutProps) {
  const { category } = await params;
  const categoryName = categoryDisplayNames[category] ||
    category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <>
      {children}

      {/* Schema.org CollectionPage Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: `${categoryName} Guides`,
            description: categoryDescriptions[category] || `Browse all ${categoryName.toLowerCase()} guides.`,
            url: `https://templata.org/guides/categories/${category}`,
            isPartOf: {
              '@type': 'WebSite',
              name: 'Templata',
              url: 'https://templata.org'
            },
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://templata.org'
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Guides',
                  item: 'https://templata.org/guides'
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: categoryName,
                  item: `https://templata.org/guides/categories/${category}`
                }
              ]
            }
          })
        }}
      />
    </>
  );
}
