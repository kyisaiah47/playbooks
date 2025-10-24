import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getAuthenticatedUser, unauthorizedResponse, errorResponse, successResponse } from '@/lib/auth-utils';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(request: NextRequest) {
  try {
    const user = await getAuthenticatedUser();
    if (!user) {
      return unauthorizedResponse();
    }

    const { searchParams } = new URL(request.url);
    const workspace_id = searchParams.get('workspace_id');
    const archived = searchParams.get('archived');

    let query = supabase
      .from('user_guides')
      .select('*, guides(id, name, description, icon)')
      .eq('user_id', user.userId);

    // Filter by workspace if provided
    if (workspace_id) {
      query = query.eq('workspace_id', workspace_id);
    }

    // Filter by archived status if provided
    if (archived !== null) {
      query = query.eq('archived', archived === 'true');
    }

    query = query.order('created_at', { ascending: false });

    const { data: userGuides, error } = await query;

    if (error) {
      console.error('Error fetching user guides:', error);
      return errorResponse('Failed to fetch user guides');
    }

    return successResponse({ userGuides: userGuides || [] });
  } catch (error) {
    console.error('Error in GET /api/user-guides:', error);
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
    const { guide_id, workspace_id } = body;

    if (!guide_id) {
      return errorResponse('guide_id is required', 400);
    }

    // Verify guide exists
    const { data: guide, error: guideError } = await supabase
      .from('guides')
      .select('id')
      .eq('id', guide_id)
      .single();

    if (guideError || !guide) {
      return errorResponse('Guide not found', 404);
    }

    // If workspace_id is provided, verify it belongs to the user
    if (workspace_id) {
      const { data: workspace, error: workspaceError } = await supabase
        .from('workspaces')
        .select('id')
        .eq('id', workspace_id)
        .eq('user_id', user.userId)
        .single();

      if (workspaceError || !workspace) {
        return errorResponse('Workspace not found', 404);
      }
    }

    const { data: userGuide, error } = await supabase
      .from('user_guides')
      .insert({
        user_id: user.userId,
        guide_id,
        workspace_id: workspace_id || null,
        progress: 0,
        archived: false,
      })
      .select('*, guides(id, name, description, icon)')
      .single();

    if (error) {
      console.error('Error creating user guide:', error);
      return errorResponse('Failed to create user guide');
    }

    return successResponse({ userGuide }, 201);
  } catch (error) {
    console.error('Error in POST /api/user-guides:', error);
    return errorResponse('Internal server error');
  }
}
