import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const sessionCookie = request.cookies.get('session');
  const { pathname } = request.nextUrl;

  // Protect /app/settings only (allow /app to be accessed anonymously as demo)
  if (pathname.startsWith('/app/settings')) {
    if (!sessionCookie) {
      // Redirect to login if no session
      const loginUrl = new URL('/login', request.url);
      return NextResponse.redirect(loginUrl);
    }

    // Validate session is not expired (7 days)
    try {
      const session = JSON.parse(sessionCookie.value);
      const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000;

      if (Date.now() - session.createdAt > sevenDaysInMs) {
        // Session expired, redirect to login
        const loginUrl = new URL('/login', request.url);
        return NextResponse.redirect(loginUrl);
      }
    } catch (error) {
      // Invalid session format, redirect to login
      const loginUrl = new URL('/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/app/settings',
    '/app/settings/:path*',
  ],
};
