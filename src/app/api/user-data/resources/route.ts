import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { UserDataService } from '@/lib/services/user-data';

// GET /api/user-data/resources - Get user's saved resources
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const savedResources = await UserDataService.getUserSavedResources(session.user.id);
    return NextResponse.json({ savedResources });
  } catch (error) {
    console.error('Error fetching saved resources:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST /api/user-data/resources - Save a resource
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { templateId, resourceId, title, userNotes } = body;

    if (!templateId || !resourceId || !title) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const savedResource = await UserDataService.saveResource({
      userId: session.user.id,
      templateId,
      resourceId,
      title,
      userNotes,
    });

    return NextResponse.json({ savedResource });
  } catch (error) {
    console.error('Error saving resource:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// DELETE /api/user-data/resources - Unsave a resource
export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const resourceId = searchParams.get('resourceId');

    if (!resourceId) {
      return NextResponse.json({ error: 'Missing resourceId' }, { status: 400 });
    }

    await UserDataService.unsaveResource(session.user.id, resourceId);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error unsaving resource:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}