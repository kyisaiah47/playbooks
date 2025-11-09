import { NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { ErrorLogger } from '@/lib/error-logger';

export async function POST() {
  try {
    const cookieStore = await cookies();

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value;
          },
          set(name: string, value: string, options: any) {
            cookieStore.set({ name, value, ...options });
          },
          remove(name: string, options: any) {
            cookieStore.set({ name, value: '', ...options });
          },
        },
      }
    );

    // Sign out using Supabase's method - this will clear all cookies properly
    await supabase.auth.signOut();

    const response = NextResponse.json({ success: true });
    return response;
  } catch (error) {
    ErrorLogger.logError(error, {
      component: 'auth/logout',
      action: 'POST',
    });
    return NextResponse.json(
      { error: 'Failed to logout' },
      { status: 500 }
    );
  }
}
