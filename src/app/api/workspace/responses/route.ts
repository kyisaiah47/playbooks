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

// GET - Fetch user's workspace responses
export async function GET(request: NextRequest) {
  const userId = await getUserFromSession(request);

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const templateId = searchParams.get('templateId');

  let query = supabase
    .from('workspace_responses')
    .select('*')
    .eq('user_id', userId);

  if (templateId) {
    query = query.eq('template_id', templateId);
  }

  const { data, error } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ responses: data });
}

// POST - Save/update workspace response
export async function POST(request: NextRequest) {
  const userId = await getUserFromSession(request);

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { templateId, promptId, response } = await request.json();

  if (!templateId || !promptId) {
    return NextResponse.json(
      { error: 'templateId and promptId are required' },
      { status: 400 }
    );
  }

  // Upsert (insert or update)
  const { data, error } = await supabase
    .from('workspace_responses')
    .upsert(
      {
        user_id: userId,
        template_id: templateId,
        prompt_id: promptId,
        response: response || '',
        updated_at: new Date().toISOString(),
      },
      {
        onConflict: 'user_id,template_id,prompt_id',
      }
    )
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, data });
}
