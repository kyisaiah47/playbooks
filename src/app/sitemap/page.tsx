import type { Metadata } from 'next';
import Script from 'next/script';
import { createClient } from '@supabase/supabase-js';
import { PageLayout } from '@/components/layout';
import { SitemapContent } from '@/components/sitemap-content';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export const metadata: Metadata = {
  title: 'Sitemap - All Planning Guides, Resources & Pages | Templata',
  description: 'Complete sitemap of Templata: Browse all planning guides, categories, expert readings, and resources. Find everything for wedding planning, career change, home buying & more life events.',
  keywords: 'templata sitemap, site map, all planning guides, all resources, planning categories list, guide directory, resource index, complete guide list, all planning pages',
};

async function getAllContent() {
  try {
    const [guidesRes, categoriesRes, readingsRes] = await Promise.all([
      supabase.from('guides').select('id, name, category').order('name'),
      supabase.from('categories').select('*').order('display_order'),
      supabase.from('readings').select('id, title, guide').order('title').limit(100),
    ]);

    return {
      guides: guidesRes.data || [],
      categories: categoriesRes.data || [],
      readings: readingsRes.data || [],
    };
  } catch {
    return { guides: [], categories: [], readings: [] };
  }
}

export default async function SitemapPage() {
  const { guides, categories, readings } = await getAllContent();

  // Group guides by category
  const guidesByCategory = guides.reduce((acc: any, guide) => {
    if (!acc[guide.category]) {
      acc[guide.category] = [];
    }
    acc[guide.category].push(guide);
    return acc;
  }, {});

  // WebPage schema
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Sitemap | Templata Planning Resources',
    description: 'Complete sitemap of all planning guides, categories, expert readings, and resources on Templata.',
    url: 'https://templata.org/sitemap',
  };

  // ItemList schema for guides
  const guidesListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'All Planning Guides',
    description: 'Complete list of planning guides on Templata',
    numberOfItems: guides.length,
    itemListElement: guides.slice(0, 100).map((guide: any, index: number) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'HowTo',
        name: guide.name,
        url: `https://templata.org/guides/${guide.id}`,
      },
    })),
  };

  return (
    <>
      <Script
        id="sitemap-webpage-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Script
        id="sitemap-guideslist-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(guidesListSchema) }}
      />

      <PageLayout>
        <SitemapContent
          guides={guides}
          categories={categories}
          readings={readings}
          guidesByCategory={guidesByCategory}
        />
      </PageLayout>
    </>
  );
}
