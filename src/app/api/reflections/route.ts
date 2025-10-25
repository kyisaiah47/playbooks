import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function getUserFromSession(request: NextRequest) {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('session');

  if (!sessionCookie) {
    return null;
  }

  try {
    const session = JSON.parse(sessionCookie.value);
    return session.userId;
  } catch {
    return null;
  }
}

// GET - Fetch user's reflections
export async function GET(request: NextRequest) {
  const userId = await getUserFromSession(request);

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const date = searchParams.get('date');
  const limit = searchParams.get('limit');

  let query = supabase
    .from('reflections')
    .select('*')
    .eq('user_id', userId)
    .order('date', { ascending: false });

  if (date) {
    query = query.eq('date', date);
  }

  if (limit) {
    query = query.limit(parseInt(limit));
  }

  const { data, error } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ reflections: data });
}

// POST - Save/update reflection
export async function POST(request: NextRequest) {
  const userId = await getUserFromSession(request);

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { date, question, content, mood, tags } = await request.json();

  if (!date) {
    return NextResponse.json({ error: 'date is required' }, { status: 400 });
  }

  // Upsert (insert or update)
  const { data, error } = await supabase
    .from('reflections')
    .upsert(
      {
        user_id: userId,
        date,
        question: question || '',
        content: content || '',
        mood: mood || '',
        tags: tags || [],
        updated_at: new Date().toISOString(),
      },
      {
        onConflict: 'user_id,date',
      }
    )
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, data });
}
