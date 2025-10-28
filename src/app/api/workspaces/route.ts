import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getAuthenticatedUser, unauthorizedResponse, errorResponse, successResponse } from '@/lib/auth-utils';
import { DEMO_USER_ID } from '@/lib/demo-constants';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const requestedUserId = searchParams.get('user_id');

    // Check if this is a demo request
    const isDemoRequest = requestedUserId === DEMO_USER_ID;

    let userId: string;
    if (isDemoRequest) {
      // Allow unauthenticated access to demo workspace
      userId = DEMO_USER_ID;
    } else {
      // Require authentication for non-demo requests
      const user = await getAuthenticatedUser();
      if (!user) {
        return unauthorizedResponse();
      }
      userId = user.userId;
    }

    const { data: workspaces, error } = await supabase
      .from('workspaces')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching workspaces:', error);
      return errorResponse('Failed to fetch workspaces');
    }

    return successResponse({ workspaces: workspaces || [] });
  } catch (error) {
    console.error('Error in GET /api/workspaces:', error);
    return errorResponse('Internal server error');
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await getAuthenticatedUser();
    if (!user) {
      return unauthorizedResponse();
    }

    const body = await request.json();
    const { name, icon } = body;

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return errorResponse('Workspace name is required', 400);
    }

    const { data: workspace, error } = await supabase
      .from('workspaces')
      .insert({
        user_id: user.userId,
        name: name.trim(),
        icon: icon || null,
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating workspace:', error);
      return errorResponse('Failed to create workspace');
    }

    return successResponse({ workspace }, 201);
  } catch (error) {
    console.error('Error in POST /api/workspaces:', error);
    return errorResponse('Internal server error');
  }
}
