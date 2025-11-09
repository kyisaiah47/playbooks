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
  params: { tag: string };
}): Promise<Metadata> {
  const tag = decodeURIComponent(params.tag).replace(/-/g, ' ');

  return {
    title: `${tag} Planning Guides | Templata`,
    description: `Find all planning guides and resources tagged with "${tag}". Expert guidance for ${tag} planning.`,
    keywords: `${tag}, ${tag} planning, ${tag} guides, ${tag} resources, ${tag} templates`,
  };
}

async function getGuidesByTag(tag: string) {
  try {
    const { data: guides, error } = await supabase
      .from('guides')
      .select('id, name, description, category, difficulty, estimated_time, tags')
      .contains('tags', [tag])
      .order('name');

    if (error) {
      console.error('[getGuidesByTag] Error:', error);
      return [];
    }

    return guides || [];
  } catch (e) {
    console.error('[getGuidesByTag] Exception:', e);
    return [];
  }
}

export default async function TagPage({
  params,
}: {
  params: { tag: string };
}) {
  const tagSlug = decodeURIComponent(params.tag);
  const tag = tagSlug.replace(/-/g, ' ');

  const guides = await getGuidesByTag(tag);

  if (guides.length === 0) {
    notFound();
  }

  // Group by category
  const guidesByCategory = guides.reduce((acc: any, guide) => {
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
            {guides.length} {guides.length === 1 ? 'Guide' : 'Guides'}
          </Badge>

          <h1 className="text-4xl font-bold mb-4 capitalize">{tag}</h1>
          <p className="text-muted-foreground mb-12">
            Planning guides and resources tagged with "{tag}"
          </p>

          {Object.entries(guidesByCategory).map(([category, categoryGuides]: [string, any]) => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 capitalize">
                {category.replace(/-/g, ' ')}
              </h2>
              <Separator className="mb-6" />

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
                      {guide.tags && guide.tags.length > 1 && (
                        <span>+{guide.tags.length - 1} more tags</span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Hidden SEO content */}
          <div className="sr-only" aria-hidden="true">
            <h2>{tag} Planning Resources</h2>
            <p>
              Comprehensive collection of {guides.length} planning guides for {tag}.
              Find expert resources, templates, and step-by-step guidance.
            </p>

            <h3>All {tag} Guides</h3>
            <ul>
              {guides.map((guide) => (
                <li key={guide.id}>
                  <strong>{guide.name}</strong>
                  <p>{guide.description}</p>
                  <p>Difficulty: {guide.difficulty || 'All levels'}</p>
                  {guide.estimated_time && <p>Time: {guide.estimated_time}</p>}
                  {guide.tags && <p>Tags: {guide.tags.join(', ')}</p>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
