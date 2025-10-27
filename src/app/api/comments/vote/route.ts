import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, delta } = body;

    if (!id || typeof delta !== 'number') {
      return NextResponse.json(
        { error: 'id and delta are required' },
        { status: 400 }
      );
    }

    if (delta !== 1 && delta !== -1) {
      return NextResponse.json(
        { error: 'delta must be 1 or -1' },
        { status: 400 }
      );
    }

    // Fetch current comment
    const { data: comment, error: fetchError } = await supabase
      .from('guide_comments')
      .select('upvotes')
      .eq('id', id)
      .single();

    if (fetchError || !comment) {
      return NextResponse.json({ error: 'Comment not found' }, { status: 404 });
    }

    // Update upvotes
    const newUpvotes = Math.max(0, comment.upvotes + delta);

    const { error: updateError } = await supabase
      .from('guide_comments')
      .update({ upvotes: newUpvotes })
      .eq('id', id);

    if (updateError) {
      console.error('Error updating vote:', updateError);
      return NextResponse.json({ error: 'Failed to update vote' }, { status: 500 });
    }

    return NextResponse.json({ upvotes: newUpvotes });
  } catch (error) {
    console.error('Error in vote API:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
