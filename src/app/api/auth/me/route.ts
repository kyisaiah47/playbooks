import { NextResponse } from 'next/server';
import { getAuthenticatedUser } from '@/lib/auth-utils';
import { ErrorLogger } from '@/lib/error-logger';

export async function GET() {
  try {
    const user = await getAuthenticatedUser();

    if (!user) {
      return NextResponse.json({ user: null });
    }

    return NextResponse.json({
      user: {
        id: user.userId,
        email: user.email,
        name: user.name,
      },
    });
  } catch (error) {
    ErrorLogger.logError(error, {
      component: 'auth/me',
      action: 'GET',
    });
    return NextResponse.json({ user: null });
  }
}
