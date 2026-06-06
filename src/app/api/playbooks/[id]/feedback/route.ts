import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { createClient } from '@supabase/supabase-js';
import { getAuthenticatedUser } from '@/lib/auth-utils';
import { apiLimiter } from '@/lib/rate-limit';
import { buildFeedbackPrompt } from '@/lib/feedback-prompt';
import { checkFeedbackLimit, incrementFeedback } from '@/lib/usage';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
});

// POST /api/playbooks/[id]/feedback — submit an answer and get AI feedback
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

  const { item_id, answer } = await request.json();

  if (!item_id || !answer?.trim()) {
    return NextResponse.json({ error: 'item_id and answer are required.' }, { status: 400 });
  }

  // Fetch playbook + item
  const [{ data: playbook }, { data: item }] = await Promise.all([
    supabase.from('playbooks').select('title, context, user_id, is_public').eq('id', playbookId).single(),
    supabase.from('items').select('*').eq('id', item_id).eq('playbook_id', playbookId).single(),
  ]);

  if (!playbook || !item) {
    return NextResponse.json({ error: 'Not found.' }, { status: 404 });
  }

  if (!playbook.is_public && playbook.user_id !== user?.userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (item.type !== 'question') {
    return NextResponse.json({ error: 'Feedback is only available for questions.' }, { status: 400 });
  }

  if (user) {
    const limit = await checkFeedbackLimit(user.userId);
    if (!limit.allowed) {
      return NextResponse.json({ error: `You've used ${limit.used}/${limit.limit} AI insights this month. Upgrade to Pro for more.`, limitReached: true }, { status: 403 });
    }
  }

  // Get AI feedback
  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 1024,
    messages: [
      {
        role: 'user',
        content: buildFeedbackPrompt(playbook.title, playbook.context, item.content, answer.trim()),
      },
    ],
  });

  const feedback = message.content[0].type === 'text' ? message.content[0].text : '';

  // Save answer + feedback to item
  const { error: updateError } = await supabase
    .from('items')
    .update({ answer: answer.trim(), ai_feedback: feedback, updated_at: new Date().toISOString() })
    .eq('id', item_id);

  if (updateError) {
    return NextResponse.json({ error: 'Failed to save answer.' }, { status: 500 });
  }

  if (user) await incrementFeedback(user.userId);
  return NextResponse.json({ feedback });
}
