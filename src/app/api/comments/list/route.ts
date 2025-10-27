import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const guide = searchParams.get('guide');
  const sort = searchParams.get('sort') || 'recent'; // top | recent

  if (!guide) {
    return NextResponse.json({ error: 'guide parameter required' }, { status: 400 });
  }

  try {
    let query = supabase
      .from('guide_comments')
      .select('*')
      .eq('guide_slug', guide)
      .is('parent_id', null); // Only root comments

    if (sort === 'top') {
      query = query.order('upvotes', { ascending: false });
    } else {
      query = query.order('created_at', { ascending: false });
    }

    const { data: comments, error } = await query;

    if (error) {
      console.error('Error fetching comments:', error);
      return NextResponse.json({ error: 'Failed to fetch comments' }, { status: 500 });
    }

    // Fetch replies for each root comment
    const commentsWithReplies = await Promise.all(
      (comments || []).map(async (comment) => {
        const { data: replies } = await supabase
          .from('guide_comments')
          .select('*')
          .eq('parent_id', comment.id)
          .order('created_at', { ascending: true });

        return {
          ...comment,
          replies: replies || [],
        };
      })
    );

    return NextResponse.json({ comments: commentsWithReplies });
  } catch (error) {
    console.error('Error in comments list API:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
