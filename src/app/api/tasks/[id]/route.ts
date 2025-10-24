import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getAuthenticatedUser, unauthorizedResponse, errorResponse, successResponse } from '@/lib/auth-utils';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

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
    const { title, description, status, priority, due_date, completed_at } = body;

    // Build update object
    const updateData: any = {};
    if (title !== undefined && typeof title === 'string' && title.trim().length > 0) {
      updateData.title = title.trim();
    }
    if (description !== undefined) {
      updateData.description = description;
    }
    if (status !== undefined) {
      if (!['todo', 'in_progress', 'completed'].includes(status)) {
        return errorResponse('Invalid status value', 400);
      }
      updateData.status = status;
      // Auto-set completed_at when marking as completed
      if (status === 'completed' && completed_at === undefined) {
        updateData.completed_at = new Date().toISOString();
      }
    }
    if (priority !== undefined) {
      if (!['low', 'medium', 'high'].includes(priority)) {
        return errorResponse('Invalid priority value', 400);
      }
      updateData.priority = priority;
    }
    if (due_date !== undefined) {
      updateData.due_date = due_date;
    }
    if (completed_at !== undefined) {
      updateData.completed_at = completed_at;
    }

    if (Object.keys(updateData).length === 0) {
      return errorResponse('No valid fields to update', 400);
    }

    const { data: task, error } = await supabase
      .from('tasks')
      .update(updateData)
      .eq('id', id)
      .eq('user_id', user.userId)
      .select()
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return errorResponse('Task not found', 404);
      }
      console.error('Error updating task:', error);
      return errorResponse('Failed to update task');
    }

    return successResponse({ task });
  } catch (error) {
    console.error('Error in PATCH /api/tasks/[id]:', error);
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
      .from('tasks')
      .delete()
      .eq('id', id)
      .eq('user_id', user.userId);

    if (error) {
      console.error('Error deleting task:', error);
      return errorResponse('Failed to delete task');
    }

    return successResponse({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error('Error in DELETE /api/tasks/[id]:', error);
    return errorResponse('Internal server error');
  }
}
