import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { guide_slug, body: commentBody, parent_id, user_handle } = body;

    if (!guide_slug || !commentBody) {
      return NextResponse.json(
        { error: 'guide_slug and body are required' },
        { status: 400 }
      );
    }

    // Basic validation
    if (commentBody.length < 10) {
      return NextResponse.json(
        { error: 'Comment must be at least 10 characters' },
        { status: 400 }
      );
    }

    if (commentBody.length > 5000) {
      return NextResponse.json(
        { error: 'Comment must be less than 5000 characters' },
        { status: 400 }
      );
    }

    const { data: comment, error } = await supabase
      .from('guide_comments')
      .insert({
        guide_slug,
        body: commentBody,
        parent_id: parent_id || null,
        user_handle: user_handle || 'Anonymous',
        upvotes: 0,
        is_flagged: false,
        is_expert: false,
      })
      .select()
      .single();

    if (error) {
      console.error('Error adding comment:', error);
      return NextResponse.json({ error: 'Failed to add comment' }, { status: 500 });
    }

    return NextResponse.json({ comment }, { status: 201 });
  } catch (error) {
    console.error('Error in add comment API:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
