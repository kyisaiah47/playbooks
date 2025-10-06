import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q') || '';
    const limit = parseInt(searchParams.get('limit') || '50');

    if (!query) {
      // If no query, return total count only
      const { count, error: countError } = await supabase
        .from('templata_articles')
        .select('*', { count: 'exact', head: true });

      if (countError) throw countError;

      return NextResponse.json({ articles: [], total: count || 0 });
    }

    // Search using Supabase full-text search with count
    const { data, error, count } = await supabase
      .from('templata_articles')
      .select('*', { count: 'exact' })
      .or(`title.ilike.%${query}%,excerpt.ilike.%${query}%,category.ilike.%${query}%`)
      .order('published_at', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('[API /articles] Error:', error);
      throw error;
    }

    const articles = data.map((article: any) => ({
      id: article.id,
      title: article.title,
      excerpt: article.excerpt,
      author: article.author,
      publishedAt: article.published_at,
      readTime: article.read_time,
      category: article.category,
      slug: article.slug,
    }));

    console.log('[API /articles] Query:', query, '- Returned', articles.length, 'of', count, 'total matches');

    return NextResponse.json({ articles, total: count || 0 });
  } catch (error) {
    console.error('[API /articles] Fatal error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch articles' },
      { status: 500 }
    );
  }
}
