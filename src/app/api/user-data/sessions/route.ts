import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { UserDataService } from '@/lib/services/user-data';

// GET /api/user-data/sessions - Get user's template sessions
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const sessions = await UserDataService.getUserTemplateSessions(session.user.id);
    return NextResponse.json({ sessions });
  } catch (error) {
    console.error('Error fetching user sessions:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST /api/user-data/sessions - Create new template session
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { templateId, title } = body;

    if (!templateId || !title) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const templateSession = await UserDataService.createTemplateSession({
      userId: session.user.id,
      templateId,
      title,
    });

    return NextResponse.json({ session: templateSession });
  } catch (error) {
    console.error('Error creating template session:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}