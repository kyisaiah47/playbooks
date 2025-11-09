import type { Metadata } from 'next';
import { createClient } from '@supabase/supabase-js';
import { PageLayout } from '@/components/layout';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { notFound } from 'next/navigation';

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
      .select('id, name, description, category, difficulty, estimated_time')
      .in('id', collection.guide_ids)
      .order('name');

    return {
      ...collection,
      guides: guides || [],
    };
  } catch (e) {
    console.error('[getCollection] Exception:', e);
    return null;
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

  // Group guides by category
  const guidesByCategory = collection.guides.reduce((acc: any, guide: any) => {
    if (!acc[guide.category]) {
      acc[guide.category] = [];
    }
    acc[guide.category].push(guide);
    return acc;
  }, {});

  return (
    <PageLayout>
      <section className="py-32">
        <div className="container max-w-4xl">
          <Badge variant="secondary" className="mb-4">
            Collection
          </Badge>

          <h1 className="text-4xl font-bold mb-4">{collection.name}</h1>
          <p className="text-muted-foreground text-lg mb-8">
            {collection.description}
          </p>

          <div className="mb-12">
            <Badge variant="outline">
              {collection.guides.length} {collection.guides.length === 1 ? 'Guide' : 'Guides'}
            </Badge>
          </div>

          <Separator className="mb-12" />

          {collection.guides.length === 0 ? (
            <p className="text-muted-foreground text-center py-12">
              This collection is being curated. Check back soon!
            </p>
          ) : (
            <>
              {Object.entries(guidesByCategory).map(([category, categoryGuides]: [string, any]) => (
                <div key={category} className="mb-12">
                  <h2 className="text-2xl font-semibold mb-4 capitalize">
                    {category.replace(/-/g, ' ')}
                  </h2>

                  <div className="space-y-4">
                    {categoryGuides.map((guide: any) => (
                      <Link
                        key={guide.id}
                        href={`/guides/${guide.id}`}
                        className="block border-border rounded-lg border p-6 hover:border-primary transition-colors"
                      >
                        <h3 className="text-lg font-semibold mb-2">{guide.name}</h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          {guide.description}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          {guide.difficulty && (
                            <Badge variant="outline" className="text-xs">
                              {guide.difficulty}
                            </Badge>
                          )}
                          {guide.estimated_time && <span>{guide.estimated_time}</span>}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </>
          )}

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
        </div>
      </section>
    </PageLayout>
  );
}
