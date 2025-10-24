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
  const userGuideId = searchParams.get('userGuideId');

  let query = supabase
    .from('responses')
    .select('*')
    .eq('user_id', userId);

  if (templateId) {
    query = query.eq('template_id', templateId);
  }

  // Filter by user_guide_id if provided
  if (userGuideId) {
    query = query.eq('user_guide_id', userGuideId);
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

  const { templateId, promptId, response, userGuideId } = await request.json();

  if (!templateId || !promptId) {
    return NextResponse.json(
      { error: 'templateId and promptId are required' },
      { status: 400 }
    );
  }

  // Prepare the upsert data
  const upsertData: any = {
    user_id: userId,
    template_id: templateId,
    prompt_id: promptId,
    response: response || '',
    updated_at: new Date().toISOString(),
  };

  // Include user_guide_id if provided
  if (userGuideId) {
    upsertData.user_guide_id = userGuideId;
  }

  // Upsert (insert or update)
  // The unique constraint depends on whether we have a user_guide_id or not
  const conflictColumns = userGuideId
    ? 'user_id,user_guide_id,prompt_id'
    : 'user_id,template_id,prompt_id';

  const { data, error } = await supabase
    .from('responses')
    .upsert(upsertData, {
      onConflict: conflictColumns,
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, data });
}
