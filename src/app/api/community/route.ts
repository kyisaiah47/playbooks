import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { apiLimiter } from '@/lib/rate-limit';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// GET /api/community — public playbooks feed
export async function GET(request: NextRequest) {
  const rateLimitResult = await apiLimiter(request);
  if (!rateLimitResult.success) {
    return NextResponse.json({ error: 'Too many requests.' }, { status: 429 });
  }

  const { searchParams } = new URL(request.url);
  const sort = searchParams.get('sort') ?? 'new'; // 'new' | 'popular'

  const { data: playbooks, error } = await supabase
    .from('playbooks')
    .select('id, title, description, context, created_at, user_id, is_forked, forked_from')
    .eq('is_public', true)
    .order('created_at', { ascending: false })
    .limit(50);

  if (error) {
    return NextResponse.json({ error: 'Failed to fetch community.' }, { status: 500 });
  }

  // Get like + comment counts
  const ids = (playbooks ?? []).map(p => p.id);

  const [likesRes, commentsRes] = await Promise.all([
    supabase.from('playbook_likes').select('playbook_id').in('playbook_id', ids),
    supabase.from('comments').select('playbook_id').in('playbook_id', ids),
  ]);

  const likesMap: Record<string, number> = {};
  const commentsMap: Record<string, number> = {};

  for (const l of likesRes.data ?? []) {
    likesMap[l.playbook_id] = (likesMap[l.playbook_id] ?? 0) + 1;
  }
  for (const c of commentsRes.data ?? []) {
    commentsMap[c.playbook_id] = (commentsMap[c.playbook_id] ?? 0) + 1;
  }

  let enriched = (playbooks ?? []).map(p => ({
    ...p,
    likes_count: likesMap[p.id] ?? 0,
    comments_count: commentsMap[p.id] ?? 0,
  }));

  if (sort === 'popular') {
    enriched = enriched.sort((a, b) => b.likes_count - a.likes_count);
  }

  return NextResponse.json({ playbooks: enriched });
}
