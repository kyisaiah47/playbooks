import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getAuthenticatedUser } from '@/lib/auth-utils';
import { apiLimiter } from '@/lib/rate-limit';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// GET /api/playbooks/[id] — fetch a single playbook with its items
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const rateLimitResult = await apiLimiter(request);
  if (!rateLimitResult.success) {
    return NextResponse.json({ error: 'Too many requests.' }, { status: 429 });
  }

  const { id } = await params;
  const user = await getAuthenticatedUser();

  const { data: playbook, error } = await supabase
    .from('playbooks')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !playbook) {
    return NextResponse.json({ error: 'Playbook not found.' }, { status: 404 });
  }

  // Only owner or public playbooks
  if (!playbook.is_public && playbook.user_id !== user?.userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { data: items } = await supabase
    .from('items')
    .select('*')
    .eq('playbook_id', id)
    .order('position', { ascending: true });

  return NextResponse.json({ playbook: { ...playbook, items: items ?? [] } });
}

// DELETE /api/playbooks/[id]
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const user = await getAuthenticatedUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { error } = await supabase
    .from('playbooks')
    .update({ deleted_at: new Date().toISOString() })
    .eq('id', id)
    .eq('user_id', user.userId);

  if (error) {
    return NextResponse.json({ error: 'Failed to delete playbook.' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
