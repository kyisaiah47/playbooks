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

    // Query questions from database
    const { data: questions, error } = await supabase
      .from('questions')
      .select('*')
      .eq('guide_id', guideId)
      .order('prompt_number', { ascending: true });

    if (error) {
      console.error('Error fetching questions from DB:', error);
      return NextResponse.json(
        { error: 'Failed to fetch questions', questions: [] },
        { status: 500 }
      );
    }

    // Transform DB format to match expected API format
    const formattedQuestions = (questions || []).map(q => ({
      id: q.id,
      prompt: q.prompt,
      categoryName: q.prompt_group_category || 'Uncategorized',
      category: q.category
    }));

    return NextResponse.json({
      questions: formattedQuestions,
      count: formattedQuestions.length
    });
  } catch (error) {
    console.error('Error fetching questions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch questions', questions: [] },
      { status: 500 }
    );
  }
}
