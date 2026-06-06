import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const FREE_LIMITS = { playbooks: 1, feedback: 5 };
const PRO_LIMITS  = { playbooks: 10, feedback: 50 };

function currentMonth() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}

async function getOrCreateUsage(userId: string) {
  const month = currentMonth();
  const { data } = await supabase
    .from('usage')
    .select('*')
    .eq('user_id', userId)
    .eq('month', month)
    .single();

  if (data) return data;

  const { data: created } = await supabase
    .from('usage')
    .insert({ user_id: userId, month, playbooks_used: 0, feedback_used: 0 })
    .select('*')
    .single();

  return created;
}

async function getUserTier(userId: string): Promise<'free' | 'pro'> {
  const { data } = await supabase
    .from('subscriptions')
    .select('tier')
    .eq('user_id', userId)
    .eq('status', 'active')
    .single();
  return data?.tier === 'pro' ? 'pro' : 'free';
}

export async function checkPlaybookLimit(userId: string): Promise<{ allowed: boolean; used: number; limit: number }> {
  const [usage, tier] = await Promise.all([getOrCreateUsage(userId), getUserTier(userId)]);
  const limit = tier === 'pro' ? PRO_LIMITS.playbooks : FREE_LIMITS.playbooks;
  if (!usage) return { allowed: false, used: 0, limit };
  const used = usage.playbooks_used ?? 0;
  return { allowed: used < limit, used, limit };
}

export async function checkFeedbackLimit(userId: string): Promise<{ allowed: boolean; used: number; limit: number }> {
  const [usage, tier] = await Promise.all([getOrCreateUsage(userId), getUserTier(userId)]);
  const limit = tier === 'pro' ? PRO_LIMITS.feedback : FREE_LIMITS.feedback;
  if (!usage) return { allowed: false, used: 0, limit };
  const used = usage.feedback_used ?? 0;
  return { allowed: used < limit, used, limit };
}

export async function incrementPlaybooks(userId: string) {
  const month = currentMonth();
  await supabase.rpc('increment_usage', { p_user_id: userId, p_month: month, p_field: 'playbooks_used' });
}

export async function incrementFeedback(userId: string) {
  const month = currentMonth();
  await supabase.rpc('increment_usage', { p_user_id: userId, p_month: month, p_field: 'feedback_used' });
}
