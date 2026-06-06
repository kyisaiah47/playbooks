import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getAuthenticatedUser } from '@/lib/auth-utils';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// PATCH /api/playbooks/[id]/items/[itemId] — update completed, answer, etc.
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string; itemId: string }> }
) {
  const { id: playbookId, itemId } = await params;
  const user = await getAuthenticatedUser();

  const { data: playbook } = await supabase
    .from('playbooks')
    .select('user_id')
    .eq('id', playbookId)
    .single();

  if (!playbook || playbook.user_id !== user?.userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const allowed = ['completed', 'answer'];
  const updates: Record<string, unknown> = { updated_at: new Date().toISOString() };
  for (const key of allowed) {
    if (key in body) updates[key] = body[key];
  }

  const { error } = await supabase.from('items').update(updates).eq('id', itemId).eq('playbook_id', playbookId);

  if (error) {
    return NextResponse.json({ error: 'Failed to update item.' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
