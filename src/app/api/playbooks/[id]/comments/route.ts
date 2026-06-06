import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getAuthenticatedUser } from '@/lib/auth-utils';
import { apiLimiter } from '@/lib/rate-limit';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// GET /api/playbooks/[id]/comments
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const { data, error } = await supabase
    .from('comments')
    .select('*')
    .eq('playbook_id', id)
    .order('created_at', { ascending: true });

  if (error) return NextResponse.json({ error: 'Failed to fetch comments.' }, { status: 500 });

  return NextResponse.json({ comments: data ?? [] });
}

// POST /api/playbooks/[id]/comments
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const rateLimitResult = await apiLimiter(request);
  if (!rateLimitResult.success) return NextResponse.json({ error: 'Too many requests.' }, { status: 429 });

  const { id } = await params;
  const user = await getAuthenticatedUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { content, quoted_text, quoted_user } = await request.json();

  if (!content?.trim()) return NextResponse.json({ error: 'Content is required.' }, { status: 400 });

  const { data, error } = await supabase
    .from('comments')
    .insert({
      playbook_id: id,
      user_id: user.userId,
      content: content.trim(),
      quoted_text: quoted_text ?? null,
      quoted_user: quoted_user ?? null,
    })
    .select('*')
    .single();

  if (error) return NextResponse.json({ error: 'Failed to post comment.' }, { status: 500 });

  return NextResponse.json({ comment: data }, { status: 201 });
}
