import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { resetPasswordSchema } from '@/lib/validations/auth';
import { sanitizeErrorMessage } from '@/lib/validation-utils';
import { ErrorLogger } from '@/lib/error-logger';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input with Zod
    const validationResult = resetPasswordSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { error: validationResult.error.issues[0].message },
        { status: 400 }
      );
    }

    const { password } = validationResult.data;

    const supabase = await createClient();

    // Update user password
    const { error } = await supabase.auth.updateUser({
      password: password,
    });

    if (error) {
      return NextResponse.json(
        { error: sanitizeErrorMessage(error) },
        { status: 400 }
      );
    }

    return NextResponse.json({
      message: 'Password updated successfully'
    });
  } catch (error) {
    ErrorLogger.logError(error, {
      component: 'auth/reset-password',
      action: 'POST',
    });
    return NextResponse.json(
      { error: 'An error occurred while resetting your password' },
      { status: 500 }
    );
  }
}
