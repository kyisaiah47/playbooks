import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { UserDataService } from '@/lib/services/user-data';

// GET /api/user-data/sessions/[sessionId] - Get specific template session
export async function GET(request: NextRequest, { params }: { params: { sessionId: string } }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const templateSession = await UserDataService.getTemplateSession(params.sessionId);
    
    if (!templateSession || templateSession.userId !== session.user.id) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 });
    }

    return NextResponse.json({ session: templateSession });
  } catch (error) {
    console.error('Error fetching template session:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// PATCH /api/user-data/sessions/[sessionId] - Update template session progress
export async function PATCH(request: NextRequest, { params }: { params: { sessionId: string } }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { progress, currentSection, isCompleted, metadata } = body;

    // Verify session ownership
    const templateSession = await UserDataService.getTemplateSession(params.sessionId);
    if (!templateSession || templateSession.userId !== session.user.id) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 });
    }

    const updatedSession = await UserDataService.updateTemplateSession({
      sessionId: params.sessionId,
      progress,
      currentSection,
      isCompleted,
      metadata,
    });

    return NextResponse.json({ session: updatedSession });
  } catch (error) {
    console.error('Error updating template session:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}