import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';

export interface AuthSession {
  userId: string;
  email: string;
  name?: string;
  createdAt: number;
}

export async function getAuthenticatedUser(): Promise<AuthSession | null> {
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

    // Get the current user using Supabase's secure method
    const { data: { user }, error } = await supabase.auth.getUser();

    if (error || !user) {
      return null;
    }

    // Get user profile - we need the users.id, not auth.users.id for foreign keys
    const { data: profile } = await supabase
      .from('users')
      .select('id, name')
      .eq('user_id', user.id)
      .single();

    if (!profile) {
      return null;
    }

    return {
      userId: profile.id, // Use users.id for foreign key relationships
      email: user.email!,
      name: profile.name || user.user_metadata?.name || undefined,
      createdAt: new Date(user.created_at).getTime(),
    };
  } catch (error) {
    return null;
  }
}

export function unauthorizedResponse() {
  return NextResponse.json(
    { error: 'Unauthorized' },
    { status: 401 }
  );
}

export function errorResponse(message: string, status: number = 500) {
  return NextResponse.json(
    { error: message },
    { status }
  );
}

export function successResponse(data: any, status: number = 200) {
  return NextResponse.json(data, { status });
}
