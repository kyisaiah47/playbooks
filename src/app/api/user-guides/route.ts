import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getAuthenticatedUser, unauthorizedResponse, errorResponse, successResponse } from '@/lib/auth-utils';
import { DEMO_WORKSPACE_ID, DEMO_USER_ID } from '@/lib/demo-constants';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const workspace_id = searchParams.get('workspace_id');
    const guide_id = searchParams.get('guide_id');
    const archived = searchParams.get('archived');

    // Check if this is a demo request
    const isDemoRequest = workspace_id === DEMO_WORKSPACE_ID;

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

    // Build query for notes
    let notesQuery = supabase
      .from('notes')
      .select('*')
      .eq('user_id', userId);

    // Filter by workspace if provided
    if (workspace_id) {
      notesQuery = notesQuery.eq('workspace_id', workspace_id);
    }

    // Filter by guide_id if provided
    if (guide_id) {
      notesQuery = notesQuery.eq('guide_id', guide_id);
    }

    // Filter by archived status if provided
    if (archived !== null) {
      notesQuery = notesQuery.eq('archived', archived === 'true');
    }

    notesQuery = notesQuery.order('created_at', { ascending: false });

    const { data: notes, error: notesError } = await notesQuery;

    if (notesError) {
      console.error('Error fetching notes:', notesError);
      return errorResponse('Failed to fetch user guides');
    }

    if (!notes || notes.length === 0) {
      return successResponse({ userGuides: [] });
    }

    // Get unique guide IDs
    const guideIds = [...new Set(notes.map(n => n.guide_id))];

    // Fetch guides separately
    const { data: guides, error: guidesError } = await supabase
      .from('guides')
      .select('id, name, description, icon')
      .in('id', guideIds);

    if (guidesError) {
      console.error('Error fetching guides:', guidesError);
      return errorResponse('Failed to fetch guides');
    }

    // Create a map of guides by ID
    const guidesMap = new Map((guides || []).map(g => [g.id, g]));

    // Manually join notes with guides
    const userGuides = notes.map(note => ({
      ...note,
      guides: guidesMap.get(note.guide_id) || null
    }));

    return successResponse({ userGuides });
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
      console.error('Guide not found for guide_id:', guide_id, 'Error:', guideError);
      return errorResponse(`Guide not found: ${guide_id}`, 404);
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
      .from('notes')
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
