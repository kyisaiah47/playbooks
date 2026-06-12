import { NextResponse } from 'next/server';
import { getAuthenticatedUser } from '@/lib/auth-utils';
import { checkPlaybookLimit, checkFeedbackLimit } from '@/lib/usage';

// GET /api/user/usage — current month usage + tier limits
export async function GET() {
  const user = await getAuthenticatedUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const [playbooks, insights] = await Promise.all([
    checkPlaybookLimit(user.userId),
    checkFeedbackLimit(user.userId),
  ]);

  const serialize = (l: { used: number; limit: number }) => ({
    used: l.used,
    limit: Number.isFinite(l.limit) ? l.limit : null, // null = unlimited
  });

  return NextResponse.json({
    tier: Number.isFinite(playbooks.limit) ? 'free' : 'pro',
    playbooks: serialize(playbooks),
    insights: serialize(insights),
  });
}
