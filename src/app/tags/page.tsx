import type { Metadata } from 'next';
import Script from 'next/script';
import { createClient } from '@supabase/supabase-js';
import { PageLayout } from '@/components/layout';
import { TagsHub } from '@/components/tags-hub';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export const metadata: Metadata = {
  title: 'Browse Planning Guides by Topic Tags - Wedding, Career, Finance & More | Templata',
  description: 'Browse planning guides by topic: anxiety, budgeting, career change, relationships, health, wedding, home buying & more. Find exactly what you need organized by tags. Free access.',
  keywords: 'planning tags, life planning topics, browse by tag, planning categories, guide topics, planning resources by tag, find planning guides, search by topic, planning tag cloud, organized planning resources',
};

async function getAllTags() {
  try {
    const { data: guides, error } = await supabase
      .from('guides')
      .select('id, name, description, tags, category, difficulty, estimated_time')
      .not('tags', 'is', null);

    if (error) {
      console.error('[getAllTags] Error:', error);
      return {};
    }

    // Extract all unique tags and count guides per tag
    const tagCounts: Record<string, { count: number; guides: any[] }> = {};

    guides?.forEach((guide) => {
      if (guide.tags && Array.isArray(guide.tags)) {
        guide.tags.forEach((tag: string) => {
          if (!tagCounts[tag]) {
            tagCounts[tag] = { count: 0, guides: [] };
          }
          tagCounts[tag].count++;
          tagCounts[tag].guides.push(guide);
        });
      }
    });

    return tagCounts;
  } catch (e) {
    console.error('[getAllTags] Exception:', e);
    return {};
  }
}

export default async function TagsPage() {
  const tagCounts = await getAllTags();

  // Sort tags by count (most popular first)
  const sortedTags = Object.entries(tagCounts)
    .sort(([, a], [, b]) => b.count - a.count)
    .map(([tag, data]) => ({ tag, count: data.count }));

  // Create a map of tag -> guides
  const allGuidesByTag: Record<string, any[]> = {};
  Object.entries(tagCounts).forEach(([tag, data]) => {
    allGuidesByTag[tag] = data.guides;
  });

  // ItemList schema for tags
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Planning Tags',
    description: 'Browse planning guides by topic tag',
    numberOfItems: sortedTags.length,
    itemListElement: sortedTags.slice(0, 50).map((tagData, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: tagData.tag.replace(/-/g, ' '),
      url: `https://templata.org/tags/${tagData.tag}`,
    })),
  };

  // WebPage schema
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Planning Tags | Browse by Topic',
    description: 'Browse planning guides by tag - anxiety, budgeting, career change, relationships, health, and more.',
    url: 'https://templata.org/tags',
  };

  return (
    <>
      <Script
        id="tags-itemlist-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Script
        id="tags-webpage-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <PageLayout>
        <TagsHub tags={sortedTags} totalTags={sortedTags.length} allGuidesByTag={allGuidesByTag} />

      {/* Hidden SEO content */}
      <div className="sr-only" aria-hidden="true">
        <h2>All Planning Tags</h2>
        <p>Browse {sortedTags.length} planning topics and tags to find guides relevant to your needs.</p>

        <h3>Popular Planning Topics</h3>
        <ul>
          {sortedTags.map(({ tag, count }) => (
            <li key={tag}>
              <strong>{tag} planning resources</strong> - {count} guides available
              <p>Find comprehensive {tag} planning guides, templates, and expert resources on Templata.</p>
            </li>
          ))}
        </ul>

        <h3>Common Planning Tag Searches</h3>
        <ul>
          <li>anxiety planning resources - guides for managing anxiety during life transitions</li>
          <li>budgeting templates and tools - financial planning resources</li>
          <li>career change guides - professional transition planning</li>
          <li>wedding planning resources - complete wedding guides</li>
          <li>home buying guides - real estate planning resources</li>
          <li>relationship planning - guidance for relationships and family</li>
          <li>health planning resources - wellness and health guides</li>
        </ul>
      </div>
      </PageLayout>
    </>
  );
}
