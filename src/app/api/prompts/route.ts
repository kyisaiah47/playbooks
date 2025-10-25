import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const guideId = searchParams.get('guideId');

    if (!guideId) {
      return NextResponse.json(
        { error: 'guideId is required' },
        { status: 400 }
      );
    }

    // Query prompts from database
    const { data: prompts, error } = await supabase
      .from('questions')
      .select('*')
      .eq('guide_id', guideId)
      .order('prompt_number', { ascending: true });

    if (error) {
      console.error('Error fetching prompts from DB:', error);
      return NextResponse.json(
        { error: 'Failed to fetch prompts', prompts: [] },
        { status: 500 }
      );
    }

    // Transform DB format to match expected API format
    const formattedPrompts = (prompts || []).map(p => ({
      id: p.id,
      prompt: p.prompt,
      categoryName: p.prompt_group_category || 'Uncategorized',
      category: p.category
    }));

    return NextResponse.json({
      prompts: formattedPrompts,
      count: formattedPrompts.length
    });
  } catch (error) {
    console.error('Error fetching prompts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch prompts', prompts: [] },
      { status: 500 }
    );
  }
}
