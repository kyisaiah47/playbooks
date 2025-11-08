import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { signupSchema } from '@/lib/validations/auth';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input with Zod
    const validationResult = signupSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { error: validationResult.error.issues[0].message },
        { status: 400 }
      );
    }

    const { email, password, name } = validationResult.data;

    // Use Supabase Auth to create user
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true, // Auto-confirm for now, can enable email verification later
      user_metadata: {
        name: name || null,
      },
    });

    if (authError || !authData.user) {
      return NextResponse.json(
        { error: authError?.message || 'Failed to create user' },
        { status: 400 }
      );
    }

    // Create profile in users table (linked to auth.users)
    const { error: profileError } = await supabase
      .from('users')
      .insert({
        user_id: authData.user.id,
        email: authData.user.email,
        name: name || null,
      });

    if (profileError) {
      // Don't fail the signup if profile creation fails, user can complete it later
    }

    // Sign in the user to get a session
    const { data: sessionData, error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError || !sessionData.session) {
      return NextResponse.json(
        { error: 'User created but failed to sign in' },
        { status: 500 }
      );
    }

    const response = NextResponse.json({
      success: true,
      user: {
        id: authData.user.id,
        email: authData.user.email,
        name: name,
      },
    });

    // Set session cookie with Supabase session
    response.cookies.set('sb-access-token', sessionData.session.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: sessionData.session.expires_in,
      path: '/',
    });

    response.cookies.set('sb-refresh-token', sessionData.session.refresh_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
