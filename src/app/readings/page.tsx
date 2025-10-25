import { PageLayout } from '@/components/layout';
import { getReadings } from '@/registry/readings';
import { ReadingsList } from './readings-list';
import { ReadingsHero } from './readings-hero';
import { ReadingsFeatures } from './readings-features';

// Metadata is handled in layout.tsx

export default async function ReadingsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = parseInt(params.page || '1', 10);

  const { readings, total } = await getReadings(page, 100);
  console.log(`[ReadingsPage] Fetched ${readings.length} readings (page ${page}, total: ${total})`);

  return (
    <PageLayout>
      <ReadingsHero />
      <ReadingsFeatures />

      {/* Reading List */}
      <div className="py-16">
        <ReadingsList initialArticles={readings} initialTotal={total} />
      </div>
    </PageLayout>
  );
}
