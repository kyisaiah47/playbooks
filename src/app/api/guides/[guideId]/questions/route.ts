import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { isValidUUID } from '@/lib/validation-utils';
import { ErrorLogger } from '@/lib/error-logger';

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

    // Validate UUID format
    if (!isValidUUID(guideId)) {
      return NextResponse.json(
        { error: 'Invalid ID format' },
        { status: 400 }
      );
    }

    const { data: questions, error } = await supabase
      .from('questions')
      .select('id, question, category, question_number')
      .eq('guide_id', guideId)
      .order('question_number', { ascending: true });

    if (error) {
      return NextResponse.json(
        { error: 'Failed to fetch questions' },
        { status: 500 }
      );
    }

    // Map fields for frontend compatibility
    const mappedQuestions = (questions || []).map(q => ({
      ...q,
      categoryName: q.category
    }));

    return NextResponse.json({
      questions: mappedQuestions
    });
  } catch (error) {
    ErrorLogger.logError(error, {
      component: 'guides/[guideId]/questions',
      action: 'GET',
    });
    return NextResponse.json(
      { error: 'Failed to fetch questions' },
      { status: 500 }
    );
  }
}
