import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const { data: reading, error } = await supabase
      .from('readings')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      return NextResponse.json(
        { error: 'Failed to fetch reading' },
        { status: 500 }
      );
    }

    if (!reading) {
      return NextResponse.json(
        { error: 'Reading not found' },
        { status: 404 }
      );
    }

    // Map fields for frontend compatibility
    const mappedReading = {
      ...reading,
      readTime: reading.read_time?.replace(/ min read$/i, '').replace(/min read$/i, '') || '5',
      publishedAt: reading.published_at
    };

    return NextResponse.json(mappedReading);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch reading' },
      { status: 500 }
    );
  }
}
