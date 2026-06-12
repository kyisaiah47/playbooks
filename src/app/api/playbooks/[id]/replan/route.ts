import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { createClient } from '@supabase/supabase-js';
import { getAuthenticatedUser } from '@/lib/auth-utils';
import { apiLimiter } from '@/lib/rate-limit';
import { buildReplanPrompt } from '@/lib/playbook-prompt';
import { checkFeedbackLimit, incrementFeedback } from '@/lib/usage';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY! });

// POST /api/playbooks/[id]/replan — replan remaining items after a situation change
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const rateLimitResult = await apiLimiter(request);
  if (!rateLimitResult.success) {
    return NextResponse.json({ error: 'Too many requests.' }, { status: 429 });
  }

  const { id: playbookId } = await params;
  const user = await getAuthenticatedUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { data: playbook } = await supabase
    .from('playbooks')
    .select('*')
    .eq('id', playbookId)
    .single();

  if (!playbook || playbook.user_id !== user.userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const limit = await checkFeedbackLimit(user.userId);
  if (!limit.allowed) {
    return NextResponse.json({ error: `You've used ${limit.used}/${limit.limit} AI insights this month. Upgrade to Pro for more.`, limitReached: true }, { status: 403 });
  }

  const { change } = await request.json();
  if (typeof change !== 'string' || change.trim().length < 5 || change.length > 1000) {
    return NextResponse.json({ error: 'Please describe what changed.' }, { status: 400 });
  }

  const { data: items } = await supabase
    .from('items')
    .select('*')
    .eq('playbook_id', playbookId)
    .order('position', { ascending: true });

  const all = items ?? [];
  const isKept = (i: typeof all[number]) =>
    (i.type === 'task' && i.completed) || (i.type === 'question' && i.answer);
  const keptItems = all.filter(isKept);
  const openItems = all.filter(i => !isKept(i));

  const prompt = buildReplanPrompt(playbook.context, change.trim(), keptItems, openItems);

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 8096,
    messages: [{ role: 'user', content: prompt }],
  });

  const rawText = message.content[0].type === 'text' ? message.content[0].text : '';
  const cleaned = rawText.replace(/^```(?:json)?\s*/i, '').replace(/\s*```\s*$/, '').trim();

  let generated: { items: Array<{ type: string; content: string; phase?: string; position: number; resource_type?: string; url?: string }> };
  try {
    generated = JSON.parse(cleaned);
    if (!Array.isArray(generated.items) || generated.items.length === 0) throw new Error('empty');
  } catch {
    console.error('Failed to parse replan response:', cleaned.slice(0, 500));
    return NextResponse.json({ error: 'Failed to parse AI response. Please try again.' }, { status: 500 });
  }

  // Replace open items with the new plan; kept items stay untouched
  const maxKeptPosition = keptItems.reduce((m, i) => Math.max(m, i.position ?? 0), 0);

  if (openItems.length > 0) {
    const { error: deleteError } = await supabase
      .from('items')
      .delete()
      .in('id', openItems.map(i => i.id));
    if (deleteError) {
      return NextResponse.json({ error: 'Failed to replan items.' }, { status: 500 });
    }
  }

  const { error: insertError } = await supabase.from('items').insert(
    generated.items.map(item => ({
      playbook_id: playbookId,
      type: ['task', 'question', 'resource'].includes(item.type) ? item.type : 'task',
      content: item.content,
      phase: item.phase ?? null,
      position: maxKeptPosition + (item.position ?? 1),
      completed: false,
      resource_type: item.resource_type ?? null,
      url: item.url ?? null,
    })),
  );
  if (insertError) {
    return NextResponse.json({ error: 'Failed to save replanned items.' }, { status: 500 });
  }

  await supabase
    .from('playbooks')
    .update({ context: `${playbook.context}\n\nUpdate: ${change.trim()}`, updated_at: new Date().toISOString() })
    .eq('id', playbookId);

  await incrementFeedback(user.userId);
  return NextResponse.json({ success: true });
}
