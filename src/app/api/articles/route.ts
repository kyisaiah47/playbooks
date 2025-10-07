import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q') || '';
    const type = searchParams.get('type') || '';
    const difficulty = searchParams.get('difficulty') || '';
    const template = searchParams.get('template') || '';
    const page = parseInt(searchParams.get('page') || '1');
    const pageSize = parseInt(searchParams.get('pageSize') || '100');
    const limit = parseInt(searchParams.get('limit') || pageSize.toString());

    // Calculate pagination
    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;

    // Build query
    let supabaseQuery = supabase
      .from('templata_articles')
      .select('*', { count: 'exact' });

    // Apply template filter
    if (template) {
      supabaseQuery = supabaseQuery.eq('template', template);
    }

    // Apply search filter
    if (query) {
      supabaseQuery = supabaseQuery.or(`title.ilike.%${query}%,excerpt.ilike.%${query}%,tags.cs.{${query}}`);
    }

    // Apply type filter
    if (type) {
      supabaseQuery = supabaseQuery.eq('type', type);
    }

    // Apply difficulty filter
    if (difficulty) {
      supabaseQuery = supabaseQuery.eq('difficulty', difficulty);
    }

    // Apply ordering and pagination
    supabaseQuery = supabaseQuery
      .order('published_at', { ascending: false })
      .range(from, to);

    const { data, error, count } = await supabaseQuery;

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
      slug: article.slug,
      type: article.type,
      difficulty: article.difficulty,
      tags: article.tags,
      template: article.template,
    }));

    return NextResponse.json({ articles, total: count || 0 });
  } catch (error) {
    console.error('[API /articles] Fatal error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch articles' },
      { status: 500 }
    );
  }
}
