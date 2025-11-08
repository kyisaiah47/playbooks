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

    const { data: guide, error } = await supabase
      .from('guides')
      .select('*')
      .eq('id', guideId)
      .single();

    if (error) {
      return NextResponse.json(
        { error: 'Failed to fetch guide' },
        { status: 500 }
      );
    }

    if (!guide) {
      return NextResponse.json(
        { error: 'Guide not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(guide);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch guide' },
      { status: 500 }
    );
  }
}
