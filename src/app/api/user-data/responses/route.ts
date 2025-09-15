import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { UserDataService } from '@/lib/services/user-data';

// POST /api/user-data/responses - Create or update user response to a prompt
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { sessionId, templateId, sectionId, promptId, response, metadata } = body;

    if (!sessionId || !templateId || !sectionId || !promptId || !response) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Verify session ownership
    const templateSession = await UserDataService.getTemplateSession(sessionId);
    if (!templateSession || templateSession.userId !== session.user.id) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 });
    }

    const userResponse = await UserDataService.createUserResponse({
      userId: session.user.id,
      sessionId,
      templateId,
      sectionId,
      promptId,
      response,
      metadata,
    });

    return NextResponse.json({ response: userResponse });
  } catch (error) {
    console.error('Error creating user response:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}