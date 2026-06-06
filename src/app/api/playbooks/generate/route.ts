import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { createClient } from '@supabase/supabase-js';
import { getAuthenticatedUser } from '@/lib/auth-utils';
import { apiLimiter } from '@/lib/rate-limit';
import { buildPlaybookPrompt, GeneratedPlaybook } from '@/lib/playbook-prompt';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
});

export async function POST(request: NextRequest) {
  const rateLimitResult = await apiLimiter(request);
  if (!rateLimitResult.success) {
    return NextResponse.json({ error: 'Too many requests.' }, { status: 429 });
  }

  const user = await getAuthenticatedUser();

  const { context } = await request.json();

  if (!context || context.trim().length < 10) {
    return NextResponse.json({ error: 'Please describe what you are planning.' }, { status: 400 });
  }

  if (context.length > 2000) {
    return NextResponse.json({ error: 'Description is too long.' }, { status: 400 });
  }

  // Call Claude
  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 8096,
    messages: [
      {
        role: 'user',
        content: buildPlaybookPrompt(context.trim()),
      },
    ],
  });

  const rawText = message.content[0].type === 'text' ? message.content[0].text : '';
  // Strip markdown code fences if Claude wrapped the JSON
  const cleaned = rawText.replace(/^```(?:json)?\s*/i, '').replace(/\s*```\s*$/, '').trim();

  let generated: GeneratedPlaybook;
  try {
    generated = JSON.parse(cleaned);
  } catch {
    console.error('Failed to parse AI response:', cleaned.slice(0, 500));
    return NextResponse.json({ error: 'Failed to parse AI response. Please try again.' }, { status: 500 });
  }

  // Save playbook
  const { data: playbook, error: playbookError } = await supabase
    .from('playbooks')
    .insert({
      user_id: user?.userId ?? null,
      title: generated.title,
      description: generated.description,
      context: context.trim(),
      is_public: false,
    })
    .select('*')
    .single();

  if (playbookError || !playbook) {
    return NextResponse.json({ error: 'Failed to save playbook.' }, { status: 500 });
  }

  // Save all items
  const itemsToInsert = generated.items.map((item) => ({
    playbook_id: playbook.id,
    type: item.type,
    content: item.content,
    phase: item.phase ?? null,
    position: item.position,
    completed: false,
    resource_type: item.resource_type ?? null,
    url: item.url ?? null,
  }));

  const { error: itemsError } = await supabase.from('items').insert(itemsToInsert);

  if (itemsError) {
    return NextResponse.json({ error: 'Failed to save playbook items.' }, { status: 500 });
  }

  return NextResponse.json({ playbook }, { status: 201 });
}
