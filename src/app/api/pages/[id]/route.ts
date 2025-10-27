import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getAuthenticatedUser, unauthorizedResponse, errorResponse, successResponse } from '@/lib/auth-utils';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function verifyPageOwnership(pageId: string, userId: string) {
  const { data: page, error } = await supabase
    .from('pages')
    .select('id, workspace_id, workspaces!inner(user_id)')
    .eq('id', pageId)
    .single();

  if (error || !page) {
    return null;
  }

  // @ts-ignore - workspaces is joined
  if (page.workspaces.user_id !== userId) {
    return null;
  }

  return page;
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
    const { name, icon, content, parent_page_id } = body;

    // Verify page ownership
    const page = await verifyPageOwnership(id, user.userId);
    if (!page) {
      return errorResponse('Page not found', 404);
    }

    // Build update object
    const updateData: any = {};
    if (name !== undefined && typeof name === 'string' && name.trim().length > 0) {
      updateData.name = name.trim();
    }
    if (icon !== undefined) {
      updateData.icon = icon;
    }
    if (content !== undefined) {
      updateData.content = content;
    }
    if (parent_page_id !== undefined) {
      // If parent_page_id is provided, verify it exists and belongs to the same workspace
      if (parent_page_id) {
        const { data: parentPage, error: parentError } = await supabase
          .from('pages')
          .select('id')
          .eq('id', parent_page_id)
          .eq('workspace_id', page.workspace_id)
          .single();

        if (parentError || !parentPage) {
          return errorResponse('Parent page not found', 404);
        }
      }
      updateData.parent_page_id = parent_page_id;
    }

    if (Object.keys(updateData).length === 0) {
      return errorResponse('No valid fields to update', 400);
    }

    const { data: updatedPage, error } = await supabase
      .from('pages')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating page:', error);
      return errorResponse('Failed to update page');
    }

    return successResponse({ page: updatedPage });
  } catch (error) {
    console.error('Error in PATCH /api/pages/[id]:', error);
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

    // Verify page ownership
    const page = await verifyPageOwnership(id, user.userId);
    if (!page) {
      return errorResponse('Page not found', 404);
    }

    const { error } = await supabase
      .from('pages')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting page:', error);
      return errorResponse('Failed to delete page');
    }

    return successResponse({ message: 'Page deleted successfully' });
  } catch (error) {
    console.error('Error in DELETE /api/pages/[id]:', error);
    return errorResponse('Internal server error');
  }
}
