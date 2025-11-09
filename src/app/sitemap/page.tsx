import type { Metadata } from 'next';
import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';
import { PageLayout } from '@/components/layout';
import { Separator } from '@/components/ui/separator';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export const metadata: Metadata = {
  title: 'Sitemap | Templata Planning Resources',
  description: 'Complete sitemap of all planning guides, categories, expert readings, and resources on Templata.',
  keywords: 'sitemap, planning resources, all guides, all categories, expert readings',
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

  return (
    <PageLayout>
      <section className="py-32">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Sitemap</h1>
          <p className="text-muted-foreground mb-12">
            Complete directory of all planning resources on Templata
          </p>

          {/* Main Pages */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Main Pages</h2>
            <Separator className="mb-4" />
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-primary hover:underline">
                  Planning Guides
                </Link>
              </li>
              <li>
                <Link href="/library" className="text-primary hover:underline">
                  Expert Reading Library
                </Link>
              </li>
              <li>
                <Link href="/questions" className="text-primary hover:underline">
                  Planning Questions Database
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-primary hover:underline">
                  About Templata
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="text-primary hover:underline">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Categories ({categories.length})
            </h2>
            <Separator className="mb-4" />
            <div className="grid gap-6 sm:grid-cols-2">
              {categories.map((category: any) => {
                const categoryGuides = guidesByCategory[category.id] || [];
                return (
                  <div key={category.id}>
                    <Link
                      href={`/guides/categories/${category.id}`}
                      className="text-lg font-semibold text-primary hover:underline"
                    >
                      {category.name}
                    </Link>
                    <p className="text-sm text-muted-foreground mb-2">
                      {categoryGuides.length} guides
                    </p>
                    {categoryGuides.length > 0 && (
                      <ul className="ml-4 space-y-1">
                        {categoryGuides.map((guide: any) => (
                          <li key={guide.id}>
                            <Link
                              href={`/guides/${guide.id}`}
                              className="text-sm text-primary hover:underline"
                            >
                              {guide.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* All Guides */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              All Guides ({guides.length})
            </h2>
            <Separator className="mb-4" />
            <ul className="grid gap-2 sm:grid-cols-2">
              {guides.map((guide: any) => (
                <li key={guide.id}>
                  <Link
                    href={`/guides/${guide.id}`}
                    className="text-primary hover:underline"
                  >
                    {guide.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sample Readings */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Expert Readings (Showing 100)
            </h2>
            <Separator className="mb-4" />
            <ul className="grid gap-2 sm:grid-cols-2">
              {readings.map((reading: any) => (
                <li key={reading.id}>
                  <Link
                    href={`/library/${reading.id}`}
                    className="text-primary hover:underline text-sm"
                  >
                    {reading.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
