import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getAuthenticatedUser, unauthorizedResponse } from '@/lib/auth-utils';
import { apiLimiter } from '@/lib/rate-limit';
import { sanitizeErrorMessage } from '@/lib/validation-utils';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// GET - Fetch user's answers
export async function GET(request: NextRequest) {
  // Apply rate limiting
  const rateLimitResult = await apiLimiter(request);
  if (!rateLimitResult.success) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  const user = await getAuthenticatedUser();

  if (!user) {
    return unauthorizedResponse();
  }

  const userId = user.userId;

  const { searchParams } = new URL(request.url);
  const trackId = searchParams.get('trackId');
  const guideId = searchParams.get('guideId');

  let query = supabase
    .from('answers')
    .select('*')
    .eq('user_id', userId);

  if (trackId) {
    query = query.eq('track_id', trackId);
  } else if (guideId) {
    query = query.eq('guide_id', guideId);
  }

  const { data, error } = await query;

  if (error) {
    return NextResponse.json({ error: sanitizeErrorMessage(error) }, { status: 500 });
  }

  return NextResponse.json({ answers: data });
}

// POST - Save/update answer
export async function POST(request: NextRequest) {
  // Apply rate limiting
  const rateLimitResult = await apiLimiter(request);
  if (!rateLimitResult.success) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  const user = await getAuthenticatedUser();

  if (!user) {
    return unauthorizedResponse();
  }

  const userId = user.userId;

  const { trackId, guideId, questionId, answer } = await request.json();

  if (!questionId) {
    return NextResponse.json(
      { error: 'questionId is required' },
      { status: 400 }
    );
  }

  // trackId OR guideId must be provided
  if (!trackId && !guideId) {
    return NextResponse.json(
      { error: 'trackId or guideId is required' },
      { status: 400 }
    );
  }

  // If trackId provided, verify track ownership
  if (trackId) {
    const { data: track, error: trackError } = await supabase
      .from('tracks')
      .select('id')
      .eq('id', trackId)
      .eq('user_id', userId)
      .single();

    if (trackError || !track) {
      return NextResponse.json({ error: 'Track not found' }, { status: 404 });
    }
  }

  // Upsert (insert or update)
  const { data, error } = await supabase
    .from('answers')
    .upsert(
      {
        user_id: userId,
        track_id: trackId || null,
        guide_id: guideId || null,
        question_id: questionId,
        answer: answer || '',
        updated_at: new Date().toISOString(),
      },
      {
        onConflict: 'user_id,question_id,track_id',
      }
    )
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: sanitizeErrorMessage(error) }, { status: 500 });
  }

  return NextResponse.json({ success: true, data });
}
