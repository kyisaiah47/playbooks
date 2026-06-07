import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { z } from 'zod';
import { getAuthenticatedUser } from '@/lib/auth-utils';
import { apiLimiter } from '@/lib/rate-limit';
import { ErrorLogger } from '@/lib/error-logger';

const updateUserSchema = z.object({
  name: z.string().min(1).max(100),
});

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const rateLimitResult = await apiLimiter(request);
    if (!rateLimitResult.success) {
      return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
    }

    const user = await getAuthenticatedUser();
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const validationResult = updateUserSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json({ error: validationResult.error.issues[0].message }, { status: 400 });
    }

    const { name } = validationResult.data;

    const { error } = await supabase
      .from('users')
      .update({ name, updated_at: new Date().toISOString() })
      .eq('email', user.email);

    if (error) {
      return NextResponse.json({ error: 'Failed to update user' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    ErrorLogger.logError(error, { component: 'user/update', action: 'POST' });
    return NextResponse.json({ error: 'Failed to update user' }, { status: 500 });
  }
}
