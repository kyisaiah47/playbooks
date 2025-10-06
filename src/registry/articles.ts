import { supabase } from '@/lib/supabase';

// Article registry - empty by default, will be populated from Supabase
export const articleRegistry: any[] = [];

// Export all articles as array for backward compatibility
export const articles = articleRegistry;

// Helper function to get article by ID
export async function getArticleById(id: string) {
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

// Helper function to get article by slug
export async function getArticleBySlug(slug: string) {
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

// Helper function to get articles by category
export async function getArticlesByCategory(category: string) {
  const { data, error } = await supabase
    .from('templata_articles')
    .select('*')
    .eq('category', category);

  if (error || !data) return [];
  return data;
}

// Helper function to get related articles
export async function getRelatedArticles(articleId: string, count = 3) {
  const { data, error } = await supabase
    .from('templata_articles')
    .select('*')
    .neq('id', articleId)
    .limit(count);

  if (error || !data) return [];
  return data;
}

// Helper function to get articles by template (for component compatibility)
export async function getArticlesByTemplate(templateId: string) {
  const { data, error } = await supabase
    .from('templata_articles')
    .select('*')
    .eq('template', templateId);

  if (error || !data) return [];
  return data;
}

// Helper function to get all available article IDs
export async function getArticleIds(): Promise<string[]> {
  const { data, error } = await supabase
    .from('templata_articles')
    .select('id');

  if (error || !data) return [];
  return data.map((article: any) => article.id);
}

// Helper function to get paginated articles
export async function getArticles(page = 1, pageSize = 50) {
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  const { data, error, count } = await supabase
    .from('templata_articles')
    .select('*', { count: 'exact' })
    .order('published_at', { ascending: false })
    .range(from, to);

  if (error || !data) {
    console.error('[getArticles] Supabase error:', error);
    return { articles: [], total: 0 };
  }

  const articles = data.map((article: any) => ({
    id: article.id,
    title: article.title,
    excerpt: article.excerpt,
    content: article.content,
    author: article.author,
    publishedAt: article.published_at,
    updatedAt: article.updated_at,
    readTime: article.read_time,
    category: article.category,
    featured: article.featured,
    tags: article.tags,
    slug: article.slug,
    type: article.type,
    difficulty: article.difficulty,
    seo: {
      metaTitle: article.meta_title,
      metaDescription: article.meta_description,
      ogImage: article.og_image
    },
    template: article.template,
    relatedPosts: article.related_posts
  }));

  return { articles, total: count || 0 };
}