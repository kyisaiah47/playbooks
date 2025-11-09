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

    const { data: readings, error } = await supabase
      .from('readings')
      .select('id, title, excerpt, content, read_time, author, slug')
      .eq('guide', guideId)
      .order('created_at', { ascending: true });

    if (error) {
      return NextResponse.json(
        { error: 'Failed to fetch readings' },
        { status: 500 }
      );
    }

    // Map read_time to readTime for frontend compatibility
    const mappedReadings = (readings || []).map(r => ({
      ...r,
      readTime: r.read_time?.replace(/ min read$/i, '').replace(/min read$/i, '') || '5'
    }));

    return NextResponse.json({
      readings: mappedReadings
    });
  } catch (error) {
    ErrorLogger.logError(error, {
      component: 'guides/[guideId]/readings',
      action: 'GET',
    });
    return NextResponse.json(
      { error: 'Failed to fetch readings' },
      { status: 500 }
    );
  }
}
