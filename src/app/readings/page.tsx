import { PageLayout } from '@/components/layout';
import { getArticles } from '@/registry/readings';
import { ReadingsList } from './readings-list';
import { ReadingsHero } from './readings-hero';
import { ReadingsFeatures } from './readings-features';

// Metadata is handled in layout.tsx

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = parseInt(params.page || '1', 10);

  const { readings, total } = await getArticles(page, 100);
  console.log(`[ArticlesPage] Fetched ${readings.length} readings (page ${page}, total: ${total})`);

  return (
    <PageLayout>
      <ReadingsHero />
      <ReadingsFeatures />

      {/* Article List */}
      <div className="py-16">
        <ReadingsList initialArticles={readings} initialTotal={total} />
      </div>
    </PageLayout>
  );
}
