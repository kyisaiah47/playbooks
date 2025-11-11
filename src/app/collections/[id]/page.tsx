import type { Metadata } from 'next';
import Script from 'next/script';
import { createClient } from '@supabase/supabase-js';
import { PageLayout } from '@/components/layout';
import { CollectionGuidesDisplay } from '@/components/collection-guides-display';
import { notFound } from 'next/navigation';

// Enable ISR (Incremental Static Regeneration)
// Pages will be cached and revalidated every hour
export const revalidate = 3600;

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { data: collection } = await supabase
    .from('collections')
    .select('name, description')
    .eq('id', params.id)
    .single();

  if (!collection) {
    return {
      title: 'Collection Not Found | Templata',
    };
  }

  return {
    title: `${collection.name} | Planning Collection | Templata`,
    description: collection.description || `Curated collection of planning guides: ${collection.name}`,
    keywords: `${collection.name}, planning collection, guide bundle, ${collection.name.toLowerCase()} planning`,
  };
}

async function getCollection(id: string) {
  try {
    const { data: collection, error } = await supabase
      .from('collections')
      .select('*')
      .eq('id', id)
      .single();

    if (error || !collection) {
      return null;
    }

    // Get the guides
    if (!collection.guide_ids || collection.guide_ids.length === 0) {
      return { ...collection, guides: [] };
    }

    const { data: guides } = await supabase
      .from('guides')
      .select('id, name, description, category, icon, difficulty, estimated_time, tags')
      .in('id', collection.guide_ids)
      .order('name');

    // Check if each guide has content
    const guidesWithContent = await Promise.all(
      (guides || []).map(async (guide) => {
        const [questionsResult, readingsResult] = await Promise.all([
          supabase.from('questions').select('id').eq('guide_id', guide.id),
          supabase.from('readings').select('id').eq('guide', guide.id)
        ]);

        return {
          ...guide,
          hasContent: (questionsResult.data?.length || 0) > 0 && (readingsResult.data?.length || 0) > 0,
          questionsCount: questionsResult.data?.length || 0,
          readingsCount: readingsResult.data?.length || 0,
        };
      })
    );

    return {
      ...collection,
      guides: guidesWithContent,
    };
  } catch (e) {
    console.error('[getCollection] Exception:', e);
    return null;
  }
}

async function getCollectionQuestionsGrouped(collectionId: string, guideIds: string[]) {
  try {
    if (!guideIds || guideIds.length === 0) return [];

    const { data: guides } = await supabase
      .from('guides')
      .select('id, name')
      .in('id', guideIds);

    if (!guides || guides.length === 0) return [];

    const questionsGrouped = await Promise.all(
      guides.map(async (guide) => {
        const { data: questions } = await supabase
          .from('questions')
          .select('id, question, question_number')
          .eq('guide_id', guide.id)
          .order('question_number')
          .limit(10);

        return {
          guideName: guide.name,
          guideId: guide.id,
          questions: questions || [],
          totalCount: questions?.length || 0,
        };
      })
    );

    return questionsGrouped.filter(g => g.questions.length > 0);
  } catch {
    return [];
  }
}

async function getCollectionReadingsGrouped(collectionId: string, guideIds: string[]) {
  try {
    if (!guideIds || guideIds.length === 0) return [];

    const { data: guides } = await supabase
      .from('guides')
      .select('id, name')
      .in('id', guideIds);

    if (!guides || guides.length === 0) return [];

    const readingsGrouped = await Promise.all(
      guides.map(async (guide) => {
        const { data: readings } = await supabase
          .from('readings')
          .select('id, title, excerpt, author, read_time')
          .eq('guide', guide.id)
          .order('created_at', { ascending: false })
          .limit(6);

        return {
          guideName: guide.name,
          guideId: guide.id,
          readings: readings || [],
          totalCount: readings?.length || 0,
        };
      })
    );

    return readingsGrouped.filter(g => g.readings.length > 0);
  } catch {
    return [];
  }
}

async function getAllCollections() {
  try {
    const { data: collections, error } = await supabase
      .from('collections')
      .select('id, name, description')
      .order('created_at');

    if (error) return [];
    return collections || [];
  } catch {
    return [];
  }
}

export default async function CollectionPage({
  params,
}: {
  params: { id: string };
}) {
  const collection = await getCollection(params.id);

  if (!collection) {
    notFound();
  }

  const [allCollections, questionsGrouped, readingsGrouped] = await Promise.all([
    getAllCollections(),
    getCollectionQuestionsGrouped(params.id, collection.guide_ids || []),
    getCollectionReadingsGrouped(params.id, collection.guide_ids || []),
  ]);

  const otherCollections = allCollections.filter(c => c.id !== params.id);

  const totalQuestionsCount = collection.guides.reduce((sum: number, g: any) => sum + (g.questionsCount || 0), 0);
  const totalReadingsCount = collection.guides.reduce((sum: number, g: any) => sum + (g.readingsCount || 0), 0);

  // CollectionPage schema
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: collection.name,
    description: collection.description,
    url: `https://templata.org/collections/${collection.id}`,
    numberOfItems: collection.guides.length,
  };

  // ItemList schema
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${collection.name} Guides`,
    description: collection.description,
    numberOfItems: collection.guides.length,
    itemListElement: collection.guides.map((guide: any, index: number) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'HowTo',
        name: guide.name,
        description: guide.description,
        url: `https://templata.org/guides/${guide.id}`,
      },
    })),
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://templata.org',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Collections',
        item: 'https://templata.org/collections',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: collection.name,
        item: `https://templata.org/collections/${collection.id}`,
      },
    ],
  };

  return (
    <>
      <Script
        id="collection-page-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <Script
        id="collection-itemlist-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Script
        id="collection-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageLayout>
        <CollectionGuidesDisplay
          collection={collection}
          otherCollections={otherCollections}
          questionsGrouped={questionsGrouped}
          readingsGrouped={readingsGrouped}
          totalQuestionsCount={totalQuestionsCount}
          totalReadingsCount={totalReadingsCount}
        />
      </PageLayout>

      {/* Hidden SEO content */}
      <div className="sr-only" aria-hidden="true">
        <h2>{collection.name} - Complete Planning Collection</h2>
        <p>{collection.description}</p>
        <p>
          This curated collection includes {collection.guides.length} comprehensive planning guides.
        </p>

        <h3>Guides in this Collection</h3>
        <ul>
          {collection.guides.map((guide: any) => (
            <li key={guide.id}>
              <strong>{guide.name}</strong>
              <p>{guide.description}</p>
              <p>Category: {guide.category}</p>
              <p>Difficulty: {guide.difficulty || 'All levels'}</p>
              {guide.estimated_time && <p>Time: {guide.estimated_time}</p>}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
