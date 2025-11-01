import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(
  request: Request,
  { params }: { params: Promise<{ guideId: string }> }
) {
  try {
    const { guideId } = await params;

    const { data: questions, error } = await supabase
      .from('questions')
      .select('id, question, category, question_number')
      .eq('template_id', guideId)
      .order('question_number', { ascending: true });

    if (error) {
      console.error('Error fetching questions:', error);
      return NextResponse.json(
        { error: 'Failed to fetch questions' },
        { status: 500 }
      );
    }

    // Map category to categoryName for frontend compatibility
    const mappedQuestions = (questions || []).map(q => ({
      ...q,
      categoryName: q.category
    }));

    return NextResponse.json({
      questions: mappedQuestions
    });
  } catch (error) {
    console.error('Error in /api/guides/[guideId]/questions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch questions' },
      { status: 500 }
    );
  }
}
