import { MetadataRoute } from 'next';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const baseUrl = 'https://templata.org';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch all guides from database
  const { data: guides } = await supabase
    .from('guides')
    .select('id, updated_at')
    .order('updated_at', { ascending: false });

  // Fetch all guide categories
  const { data: categories } = await supabase
    .from('guides')
    .select('category')
    .order('category');

  // Get unique categories
  const uniqueCategories = [...new Set(categories?.map(c => c.category) || [])];

  // Fetch all library items
  const { data: library } = await supabase
    .from('library')
    .select('id, updated_at')
    .order('updated_at', { ascending: false });

  // Fetch all collections
  const { data: collections } = await supabase
    .from('collections')
    .select('id, updated_at')
    .order('updated_at', { ascending: false });

  // Fetch all tags
  const { data: tags } = await supabase
    .from('questions')
    .select('tags')
    .not('tags', 'is', null);

  // Get unique tags
  const allTags = tags?.flatMap(t => t.tags || []) || [];
  const uniqueTags = [...new Set(allTags)];

  // Static pages with high priority
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/features`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/features/calendar`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/features/tasks`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/features/analytics`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/use-cases`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/library`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/how-to-use`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/changelog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/collections`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tags`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/questions`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/glossary`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/sitemap`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/alternatives`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // VS comparison pages
  const vsPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/vs/notion`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/vs/google-docs`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/vs/trello`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/vs/asana`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/vs/monday`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Dynamic guide pages
  const guidePages: MetadataRoute.Sitemap =
    guides?.map((guide) => ({
      url: `${baseUrl}/guides/${guide.id}`,
      lastModified: new Date(guide.updated_at || Date.now()),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })) || [];

  // Guide category pages
  const categoryPages: MetadataRoute.Sitemap =
    uniqueCategories.map((category) => ({
      url: `${baseUrl}/guides/categories/${encodeURIComponent(category)}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));

  // Dynamic library pages
  const libraryPages: MetadataRoute.Sitemap =
    library?.map((item) => ({
      url: `${baseUrl}/library/${item.id}`,
      lastModified: new Date(item.updated_at || Date.now()),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })) || [];

  // Dynamic collection pages
  const collectionPages: MetadataRoute.Sitemap =
    collections?.map((collection) => ({
      url: `${baseUrl}/collections/${collection.id}`,
      lastModified: new Date(collection.updated_at || Date.now()),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })) || [];

  // Tag pages
  const tagPages: MetadataRoute.Sitemap =
    uniqueTags.map((tag) => ({
      url: `${baseUrl}/tags/${encodeURIComponent(tag)}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    }));

  return [
    ...staticPages,
    ...vsPages,
    ...guidePages,
    ...categoryPages,
    ...libraryPages,
    ...collectionPages,
    ...tagPages,
  ];
}
