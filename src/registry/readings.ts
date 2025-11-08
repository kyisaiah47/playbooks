import { supabase } from '@/lib/supabase';

// Reading registry - empty by default, will be populated from Supabase
export const readingRegistry: any[] = [];

// Export all readings as array for backward compatibility
export const readings = readingRegistry;

// Helper function to get reading by ID
export async function getReadingById(id: string) {
  const { data, error } = await supabase
    .from('templata_articles')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !data) return null;

  return {
    id: data.id,
    title: data.title,
    excerpt: data.excerpt,
    content: data.content,
    author: data.author,
    publishedAt: data.published_at,
    updatedAt: data.updated_at,
    readTime: data.read_time,
    tags: data.tags,
    slug: data.slug,
    type: data.type,
    difficulty: data.difficulty,
    seo: {
      metaTitle: data.meta_title,
      metaDescription: data.meta_description
    },
    template: data.template
  };
}

// Helper function to get reading by slug
export async function getReadingBySlug(slug: string) {
  const { data, error } = await supabase
    .from('templata_articles')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error || !data) return null;

  return {
    id: data.id,
    title: data.title,
    excerpt: data.excerpt,
    content: data.content,
    author: data.author,
    publishedAt: data.published_at,
    updatedAt: data.updated_at,
    readTime: data.read_time,
    tags: data.tags,
    slug: data.slug,
    type: data.type,
    difficulty: data.difficulty,
    seo: {
      metaTitle: data.meta_title,
      metaDescription: data.meta_description
    },
    template: data.template
  };
}

// Helper function to get readings by category
export async function getReadingsByCategory(category: string) {
  const { data, error } = await supabase
    .from('templata_articles')
    .select('*')
    .eq('category', category);

  if (error || !data) return [];
  return data;
}

// Helper function to get related readings
export async function getRelatedReadings(readingId: string, count = 3) {
  const { data, error } = await supabase
    .from('templata_articles')
    .select('*')
    .neq('id', readingId)
    .limit(count);

  if (error || !data) return [];
  return data;
}

// Helper function to get readings by guide (for component compatibility)
export async function getReadingsByGuide(guideId: string) {
  const { data, error } = await supabase
    .from('templata_articles')
    .select('*')
    .eq('template', guideId);

  if (error || !data) return [];
  return data;
}

// Helper function to get all available reading IDs
export async function getReadingIds(): Promise<string[]> {
  const { data, error } = await supabase
    .from('templata_articles')
    .select('id');

  if (error || !data) return [];
  return data.map((reading: any) => reading.id);
}

// Helper function to get paginated readings
export async function getReadings(page = 1, pageSize = 50) {
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  const { data, error, count } = await supabase
    .from('templata_articles')
    .select('*', { count: 'exact' })
    .order('published_at', { ascending: false })
    .range(from, to);

  if (error || !data) {
    console.error('[getReadings] Supabase error:', error);
    return { readings: [], total: 0 };
  }

  const readings = data.map((reading: any) => ({
    id: reading.id,
    title: reading.title,
    excerpt: reading.excerpt,
    content: reading.content,
    author: reading.author,
    publishedAt: reading.published_at,
    updatedAt: reading.updated_at,
    readTime: reading.read_time,
    category: reading.category,
    featured: reading.featured,
    tags: reading.tags,
    slug: reading.slug,
    type: reading.type,
    difficulty: reading.difficulty,
    seo: {
      metaTitle: reading.meta_title,
      metaDescription: reading.meta_description,
      ogImage: reading.og_image
    },
    template: reading.template,
    relatedPosts: reading.related_posts
  }));

  return { readings, total: count || 0 };
}