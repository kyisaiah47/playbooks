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

    const { data: userGuide, error } = await supabase
      .from('user_guides')
      .select('*, guides(id, name, description, icon)')
      .eq('id', id)
      .eq('user_id', user.userId)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return errorResponse('User guide not found', 404);
      }
      console.error('Error fetching user guide:', error);
      return errorResponse('Failed to fetch user guide');
    }

    return successResponse({ userGuide });
  } catch (error) {
    console.error('Error in GET /api/user-guides/[id]:', error);
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
    const { progress, archived, name, icon } = body;

    // Build update object
    const updateData: any = {};
    if (progress !== undefined) {
      if (typeof progress !== 'number' || progress < 0 || progress > 100) {
        return errorResponse('Progress must be a number between 0 and 100', 400);
      }
      updateData.progress = progress;
    }
    if (archived !== undefined) {
      if (typeof archived !== 'boolean') {
        return errorResponse('Archived must be a boolean', 400);
      }
      updateData.archived = archived;
      // Set archived_at timestamp when archiving
      if (archived) {
        updateData.archived_at = new Date().toISOString();
      } else {
        updateData.archived_at = null;
      }
    }
    if (name !== undefined) {
      if (typeof name !== 'string' || name.trim().length === 0) {
        return errorResponse('Name must be a non-empty string', 400);
      }
      updateData.custom_name = name.trim();
    }
    if (icon !== undefined) {
      if (typeof icon !== 'string') {
        return errorResponse('Icon must be a string', 400);
      }
      updateData.custom_icon = icon;
    }

    if (Object.keys(updateData).length === 0) {
      return errorResponse('No valid fields to update', 400);
    }

    const { data: userGuide, error } = await supabase
      .from('user_guides')
      .update(updateData)
      .eq('id', id)
      .eq('user_id', user.userId)
      .select('*, guides(id, name, description, icon)')
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return errorResponse('User guide not found', 404);
      }
      console.error('Error updating user guide:', error);
      return errorResponse('Failed to update user guide');
    }

    return successResponse({ userGuide });
  } catch (error) {
    console.error('Error in PATCH /api/user-guides/[id]:', error);
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
      .from('user_guides')
      .delete()
      .eq('id', id)
      .eq('user_id', user.userId);

    if (error) {
      console.error('Error deleting user guide:', error);
      return errorResponse('Failed to delete user guide');
    }

    return successResponse({ message: 'User guide deleted successfully' });
  } catch (error) {
    console.error('Error in DELETE /api/user-guides/[id]:', error);
    return errorResponse('Internal server error');
  }
}
