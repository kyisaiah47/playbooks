import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json({ error: 'id is required' }, { status: 400 });
    }

    const { error } = await supabase
      .from('guide_comments')
      .update({ is_flagged: true })
      .eq('id', id);

    if (error) {
      console.error('Error flagging comment:', error);
      return NextResponse.json({ error: 'Failed to flag comment' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in flag API:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
