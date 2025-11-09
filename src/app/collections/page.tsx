import type { Metadata } from 'next';
import Script from 'next/script';
import { createClient } from '@supabase/supabase-js';
import { PageLayout } from '@/components/layout';
import { CollectionsHub } from '@/components/collections-hub';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export const metadata: Metadata = {
  title: 'Curated Planning Collections - Guide Bundles for Life Events | Templata',
  description: 'Curated collections of planning guides for major life events: New parent essentials, career changer pack, wedding planning complete & more. Multiple related guides bundled together. Free access.',
  keywords: 'planning collections, guide bundles, curated guide collections, life planning resources, planning packages, bundled planning guides, collection of guides, related planning guides, planning resource packs',
};

async function getAllCollections() {
  try {
    const { data: collections, error } = await supabase
      .from('collections')
      .select('*')
      .order('created_at');

    if (error) {
      console.error('[getAllCollections] Error:', error);
      return [];
    }

    // For each collection, get the actual guides
    const collectionsWithGuides = await Promise.all(
      (collections || []).map(async (collection) => {
        if (!collection.guide_ids || collection.guide_ids.length === 0) {
          return { ...collection, guides: [] };
        }

        const { data: guides } = await supabase
          .from('guides')
          .select('id, name, category')
          .in('id', collection.guide_ids);

        return {
          ...collection,
          guides: guides || [],
          guideCount: (guides || []).length,
        };
      })
    );

    return collectionsWithGuides;
  } catch (e) {
    console.error('[getAllCollections] Exception:', e);
    return [];
  }
}

export default async function CollectionsPage() {
  const collections = await getAllCollections();

  // ItemList schema
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Planning Collections',
    description: 'Curated collections of planning guides for major life events',
    numberOfItems: collections.length,
    itemListElement: collections.map((collection: any, index: number) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'CollectionPage',
        name: collection.name,
        description: collection.description,
        url: `https://templata.org/collections/${collection.id}`,
      },
    })),
  };

  // WebPage schema
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Planning Collections | Curated Guide Bundles',
    description: 'Curated collections of planning guides for major life events. New parent essentials, career changer pack, wedding planning complete, and more.',
    url: 'https://templata.org/collections',
  };

  return (
    <>
      <Script
        id="collections-itemlist-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Script
        id="collections-webpage-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <PageLayout>
        <CollectionsHub collections={collections} totalCollections={collections.length} />

      {/* Hidden SEO content */}
      <div className="sr-only" aria-hidden="true">
        <h2>All Planning Collections</h2>
        <p>
          Curated collections of planning guides for major life events. {collections.length} collections available.
        </p>

        <h3>Available Collections</h3>
        <ul>
          {collections.map((collection: any) => (
            <li key={collection.id}>
              <strong>{collection.name}</strong>
              <p>{collection.description}</p>
              <p>{collection.guideCount} guides in this collection</p>
            </li>
          ))}
        </ul>

        <h3>Popular Planning Collection Searches</h3>
        <ul>
          <li>new parent planning resources - complete guide to pregnancy and early parenting</li>
          <li>career change planning bundle - transition to new career successfully</li>
          <li>wedding planning complete package - everything for your perfect day</li>
          <li>home buying guide collection - from search to closing</li>
          <li>financial planning starter kit - budgeting, saving, and debt management</li>
          <li>entrepreneur resources - launch and grow your business</li>
        </ul>
      </div>
      </PageLayout>
    </>
  );
}
