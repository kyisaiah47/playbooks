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
      url: `${baseUrl}/templates`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
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

    // Fetch all templates to get categories dynamically
    const { data: templates } = await supabase
      .from('templata_templates')
      .select('id, category, created_at')
      .order('created_at', { ascending: false });

    // Get unique categories and generate category pages dynamically
    const uniqueCategories = [...new Set((templates || []).map(t => t.category))];
    const categoryPages: MetadataRoute.Sitemap = uniqueCategories.map((category) => ({
      url: `${baseUrl}/templates/categories/${category.toLowerCase().replace(/\s+&?\s*/g, '-')}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    }));

    // Fetch all article slugs
    const { data: articles } = await supabase
      .from('templata_articles')
      .select('slug, created_at')
      .order('created_at', { ascending: false });

    // Generate template pages
    const templatePages: MetadataRoute.Sitemap = (templates || []).flatMap((template) => [
      {
        url: `${baseUrl}/templates/${template.id}`,
        lastModified: new Date(template.created_at),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}/templates/${template.id}/marketing`,
        lastModified: new Date(template.created_at),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      },
    ]);

    // Generate article pages
    const articlePages: MetadataRoute.Sitemap = (articles || []).map((article) => ({
      url: `${baseUrl}/articles/${article.slug}`,
      lastModified: new Date(article.created_at),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

    return [...staticPages, ...categoryPages, ...templatePages, ...articlePages];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    // Return just static pages if database fetch fails
    return staticPages;
  }
}
