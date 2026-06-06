import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getAuthenticatedUser } from '@/lib/auth-utils';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const { data } = await supabase.from('playbooks').select('notes').eq('id', id).single();
  return NextResponse.json({ notes: data?.notes ?? '' });
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const user = await getAuthenticatedUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { notes } = await request.json();

  const { error } = await supabase
    .from('playbooks')
    .update({ notes })
    .eq('id', id)
    .eq('user_id', user.userId);

  if (error) return NextResponse.json({ error: 'Failed to save notes.' }, { status: 500 });
  return NextResponse.json({ success: true });
}
