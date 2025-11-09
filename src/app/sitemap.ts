import { MetadataRoute } from 'next';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://templata.org';

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
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
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/changelog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ];

  try {
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Fetch all guides (templates)
    const { data: guides } = await supabase
      .from('guides')
      .select('id, category, created_at, last_updated')
      .order('created_at', { ascending: false });

    // Get unique categories and generate category pages dynamically
    const uniqueCategories = [...new Set((guides || []).map(t => t.category))];
    const categoryPages: MetadataRoute.Sitemap = uniqueCategories.map((category) => ({
      url: `${baseUrl}/guides/categories/${category.toLowerCase().replace(/\s+&?\s*/g, '-')}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    }));

    // Fetch all readings (articles)
    const { data: readings } = await supabase
      .from('readings')
      .select('id, slug, created_at, updated_at')
      .order('created_at', { ascending: false});

    // Generate guide pages
    const guidePages: MetadataRoute.Sitemap = (guides || []).map((guide) => ({
      url: `${baseUrl}/guides/${guide.id}`,
      lastModified: guide.last_updated ? new Date(guide.last_updated) : new Date(guide.created_at),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));

    // Generate reading/library pages - use id instead of slug for URL
    const readingPages: MetadataRoute.Sitemap = (readings || []).map((reading) => ({
      url: `${baseUrl}/library/${reading.id}`,
      lastModified: reading.updated_at ? new Date(reading.updated_at) : new Date(reading.created_at),
      changeFrequency: 'monthly' as const,
      priority: 0.7, // Increased from 0.6 - these are valuable SEO pages
    }));

    return [...staticPages, ...categoryPages, ...guidePages, ...readingPages];
  } catch {
    // Return just static pages if database fetch fails
    return staticPages;
  }
}
