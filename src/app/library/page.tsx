import { PageLayout } from '@/components/layout';
import { ReadingsList } from './readings-list';
import { ReadingsHero } from './readings-hero';
import { ReadingsFeatures } from './readings-features';

// Metadata is handled in layout.tsx

export default async function LibraryPage() {
  // Fetch initial data from /api/library
  const guidesResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/library`, { cache: 'no-store' });
  const guidesData = await guidesResponse.json();
  const guides = guidesData.guides || [];

  // Fetch readings for each guide
  const allReadings: any[] = [];
  for (const guide of guides) {
    const readingsResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/library?guide=${guide.guide_id}`, { cache: 'no-store' });
    const readingsData = await readingsResponse.json();
    const readings = readingsData.readings || [];

    // Transform readings to reading format
    readings.forEach((reading: any) => {
      allReadings.push({
        id: reading.id,
        title: reading.title,
        excerpt: reading.excerpt,
        content: reading.content,
        author: reading.author,
        publishedAt: reading.updated_at,
        readTime: reading.read_time,
        category: guide.guide_name,
        featured: false,
        tags: reading.sources || [],
        slug: reading.id,
        type: 'reading',
        difficulty: 'intermediate',
        relatedTemplates: [guide.guide_id]
      });
    });
  }

  console.log(`[LibraryPage] Fetched ${allReadings.length} readings from library`);

  return (
    <PageLayout>
      <ReadingsHero />
      <ReadingsFeatures />

      {/* Readings List */}
      <div className="py-16">
        <ReadingsList initialReadings={allReadings} initialTotal={allReadings.length} />
      </div>
    </PageLayout>
  );
}
