import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getAuthenticatedUser, unauthorizedResponse, errorResponse, successResponse } from '@/lib/auth-utils';
import { DEMO_WORKSPACE_ID, DEMO_USER_ID } from '@/lib/demo-constants';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Check if this is a demo request
    const isDemoRequest = id === DEMO_WORKSPACE_ID;

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

    // Verify workspace belongs to user
    const { data: workspace, error: workspaceError } = await supabase
      .from('workspaces')
      .select('id')
      .eq('id', id)
      .eq('user_id', userId)
      .single();

    if (workspaceError || !workspace) {
      return errorResponse('Workspace not found', 404);
    }

    // Fetch pages in hierarchical structure
    const { data: pages, error } = await supabase
      .from('pages')
      .select('*')
      .eq('workspace_id', id)
      .order('created_at', { ascending: true });

    if (error) {
      console.error('Error fetching pages:', error);
      return errorResponse('Failed to fetch pages');
    }

    return successResponse({ pages: pages || [] });
  } catch (error) {
    console.error('Error in GET /api/workspaces/[id]/pages:', error);
    return errorResponse('Internal server error');
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await getAuthenticatedUser();
    if (!user) {
      return unauthorizedResponse();
    }

    const { id } = await params;
    const body = await request.json();
    const { name, parent_page_id, guide_id, icon } = body;

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return errorResponse('Page name is required', 400);
    }

    // Verify workspace belongs to user
    const { data: workspace, error: workspaceError } = await supabase
      .from('workspaces')
      .select('id')
      .eq('id', id)
      .eq('user_id', user.userId)
      .single();

    if (workspaceError || !workspace) {
      return errorResponse('Workspace not found', 404);
    }

    // If parent_page_id is provided, verify it exists and belongs to the same workspace
    if (parent_page_id) {
      const { data: parentPage, error: parentError } = await supabase
        .from('pages')
        .select('id')
        .eq('id', parent_page_id)
        .eq('workspace_id', id)
        .single();

      if (parentError || !parentPage) {
        return errorResponse('Parent page not found', 404);
      }
    }

    const { data: page, error } = await supabase
      .from('pages')
      .insert({
        workspace_id: id,
        name: name.trim(),
        parent_page_id: parent_page_id || null,
        guide_id: guide_id || null,
        icon: icon || null,
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating page:', error);
      return errorResponse('Failed to create page');
    }

    return successResponse({ page }, 201);
  } catch (error) {
    console.error('Error in POST /api/workspaces/[id]/pages:', error);
    return errorResponse('Internal server error');
  }
}
