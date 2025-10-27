import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const search = searchParams.get('search');

    // If no category specified, return all categories
    if (!category) {
      const { data: categories, error } = await supabase
        .from('categories')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) {
        console.error('Error fetching categories:', error);
        return NextResponse.json(
          { error: 'Failed to fetch categories' },
          { status: 500 }
        );
      }

      // Get count for each category
      const categoriesWithCount = await Promise.all(
        (categories || []).map(async (cat) => {
          const { count, error: countError } = await supabase
            .from('guides')
            .select('*', { count: 'exact', head: true })
            .eq('category', cat.id);

          return {
            ...cat,
            count: countError ? 0 : count || 0
          };
        })
      );

      return NextResponse.json({
        categories: categoriesWithCount
      });
    }

    // Fetch guides for specific category
    let query = supabase
      .from('guides')
      .select('id, name, description, category, icon, tags')
      .eq('category', category)
      .order('name', { ascending: true });

    // Apply search filter if provided
    if (search) {
      query = query.or(`name.ilike.%${search}%,description.ilike.%${search}%`);
    }

    const { data: guides, error } = await query;

    if (error) {
      console.error('Error fetching guides:', error);
      return NextResponse.json(
        { error: 'Failed to fetch guides' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      guides: guides || [],
      total: guides?.length || 0
    });
  } catch (error) {
    console.error('Error in /api/guides:', error);
    return NextResponse.json(
      { error: 'Failed to fetch guides' },
      { status: 500 }
    );
  }
}
