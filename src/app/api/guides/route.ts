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
    const all = searchParams.get('all'); // New param to fetch all guides

    // If all=true, return all guides
    if (all === 'true') {
      const { data: guides, error } = await supabase
        .from('guides')
        .select('id, name, description, category, icon, tags')
        .order('name', { ascending: true });

      if (error) {
        return NextResponse.json(
          { error: 'Failed to fetch guides' },
          { status: 500 }
        );
      }

      // Get counts of readings and questions for all guides in 2 queries instead of N
      const guideIds = (guides || []).map(g => g.id);

      const [readingsCounts, questionsCounts] = await Promise.all([
        supabase
          .from('readings')
          .select('guide')
          .in('guide', guideIds),
        supabase
          .from('questions')
          .select('guide_id')
          .in('guide_id', guideIds)
      ]);

      // Aggregate counts by guide
      const readingsCountMap = (readingsCounts.data || []).reduce((acc: Record<string, number>, r) => {
        acc[r.guide] = (acc[r.guide] || 0) + 1;
        return acc;
      }, {});

      const questionsCountMap = (questionsCounts.data || []).reduce((acc: Record<string, number>, q) => {
        acc[q.guide_id] = (acc[q.guide_id] || 0) + 1;
        return acc;
      }, {});

      // Attach counts to guides
      const guidesWithCounts = (guides || []).map(guide => ({
        ...guide,
        readingsCount: readingsCountMap[guide.id] || 0,
        questionsCount: questionsCountMap[guide.id] || 0,
        hasContent: (readingsCountMap[guide.id] || 0) > 0 && (questionsCountMap[guide.id] || 0) > 0
      }));

      return NextResponse.json({
        guides: guidesWithCounts || []
      });
    }

    // If no category specified, return all categories
    if (!category) {
      const { data: categories, error } = await supabase
        .from('categories')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) {
        return NextResponse.json(
          { error: 'Failed to fetch categories' },
          { status: 500 }
        );
      }

      // Get count for all categories in 1 query instead of N
      const categoryIds = (categories || []).map(c => c.id);

      const { data: guidesData } = await supabase
        .from('guides')
        .select('category')
        .in('category', categoryIds);

      // Aggregate counts by category
      const categoryCountMap = (guidesData || []).reduce((acc: Record<string, number>, g) => {
        acc[g.category] = (acc[g.category] || 0) + 1;
        return acc;
      }, {});

      // Attach counts to categories
      const categoriesWithCount = (categories || []).map(cat => ({
        ...cat,
        count: categoryCountMap[cat.id] || 0
      }));

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
      return NextResponse.json(
        { error: 'Failed to fetch guides' },
        { status: 500 }
      );
    }

    // Get counts of readings and questions for each guide
    const guidesWithCounts = await Promise.all(
      (guides || []).map(async (guide) => {
        const [readingsResult, questionsResult] = await Promise.all([
          supabase
            .from('readings')
            .select('*', { count: 'exact', head: true })
            .eq('guide', guide.id),
          supabase
            .from('questions')
            .select('*', { count: 'exact', head: true })
            .eq('guide_id', guide.id)
        ]);

        return {
          ...guide,
          readingsCount: readingsResult.count || 0,
          questionsCount: questionsResult.count || 0,
          hasContent: (readingsResult.count || 0) > 0 && (questionsResult.count || 0) > 0
        };
      })
    );

    return NextResponse.json({
      guides: guidesWithCounts || [],
      total: guidesWithCounts?.length || 0
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch guides' },
      { status: 500 }
    );
  }
}
