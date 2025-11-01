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

    const { data: readings, error } = await supabase
      .from('readings')
      .select('id, title, excerpt, read_time, author')
      .eq('guide', guideId)
      .order('created_at', { ascending: true });

    if (error) {
      console.error('Error fetching readings:', error);
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
    console.error('Error in /api/guides/[guideId]/readings:', error);
    return NextResponse.json(
      { error: 'Failed to fetch readings' },
      { status: 500 }
    );
  }
}
