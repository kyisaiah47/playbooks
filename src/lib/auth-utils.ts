import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export interface AuthSession {
  userId: string;
  email: string;
  name?: string;
  createdAt: number;
}

export async function getAuthenticatedUser(): Promise<AuthSession | null> {
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('session');

    if (!sessionCookie) {
      return null;
    }

    const session = JSON.parse(sessionCookie.value);

    // Simple session validation (check if not expired - 7 days)
    const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000;
    if (Date.now() - session.createdAt > sevenDaysInMs) {
      return null;
    }

    return {
      userId: session.userId,
      email: session.email,
      name: session.name,
      createdAt: session.createdAt,
    };
  } catch (error) {
    console.error('Session error:', error);
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
