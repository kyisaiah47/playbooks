import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getAuthenticatedUser, unauthorizedResponse, errorResponse, successResponse } from '@/lib/auth-utils';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await getAuthenticatedUser();
    if (!user) {
      return unauthorizedResponse();
    }

    const { id } = await params;

    const { data: workspace, error } = await supabase
      .from('workspaces')
      .select('*')
      .eq('id', id)
      .eq('user_id', user.userId)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return errorResponse('Workspace not found', 404);
      }
      console.error('Error fetching workspace:', error);
      return errorResponse('Failed to fetch workspace');
    }

    return successResponse({ workspace });
  } catch (error) {
    console.error('Error in GET /api/workspaces/[id]:', error);
    return errorResponse('Internal server error');
  }
}

export async function PATCH(
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
    const { name, icon } = body;

    // Validate at least one field to update
    if (!name && icon === undefined) {
      return errorResponse('At least one field (name or icon) is required', 400);
    }

    // Build update object
    const updateData: any = {};
    if (name && typeof name === 'string' && name.trim().length > 0) {
      updateData.name = name.trim();
    }
    if (icon !== undefined) {
      updateData.icon = icon;
    }

    const { data: workspace, error } = await supabase
      .from('workspaces')
      .update(updateData)
      .eq('id', id)
      .eq('user_id', user.userId)
      .select()
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return errorResponse('Workspace not found', 404);
      }
      console.error('Error updating workspace:', error);
      return errorResponse('Failed to update workspace');
    }

    return successResponse({ workspace });
  } catch (error) {
    console.error('Error in PATCH /api/workspaces/[id]:', error);
    return errorResponse('Internal server error');
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await getAuthenticatedUser();
    if (!user) {
      return unauthorizedResponse();
    }

    const { id } = await params;

    const { error } = await supabase
      .from('workspaces')
      .delete()
      .eq('id', id)
      .eq('user_id', user.userId);

    if (error) {
      console.error('Error deleting workspace:', error);
      return errorResponse('Failed to delete workspace');
    }

    return successResponse({ message: 'Workspace deleted successfully' });
  } catch (error) {
    console.error('Error in DELETE /api/workspaces/[id]:', error);
    return errorResponse('Internal server error');
  }
}
