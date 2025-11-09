import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { forgotPasswordSchema } from '@/lib/validations/auth';
import { authLimiter } from '@/lib/rate-limit';
import { sanitizeErrorMessage } from '@/lib/validation-utils';
import { ErrorLogger } from '@/lib/error-logger';

export async function POST(request: NextRequest) {
  try {
    // Apply rate limiting (5 requests per minute)
    const rateLimitResult = await authLimiter(request);
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: 'Too many password reset attempts. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Validate input with Zod
    const validationResult = forgotPasswordSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { error: validationResult.error.issues[0].message },
        { status: 400 }
      );
    }

    const { email } = validationResult.data;

    const supabase = await createClient();

    // Send password reset email
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/reset-password`,
    });

    if (error) {
      return NextResponse.json(
        { error: sanitizeErrorMessage(error) },
        { status: 400 }
      );
    }

    return NextResponse.json({
      message: 'Password reset email sent successfully'
    });
  } catch (error) {
    ErrorLogger.logError(error, {
      component: 'auth/forgot-password',
      action: 'POST',
    });
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}
