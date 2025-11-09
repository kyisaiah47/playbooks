import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getAuthenticatedUser, unauthorizedResponse, errorResponse, successResponse } from '@/lib/auth-utils';
import { apiLimiter } from '@/lib/rate-limit';
import { isValidUUID } from '@/lib/validation-utils';
import { ErrorLogger } from '@/lib/error-logger';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Apply rate limiting
    const rateLimitResult = await apiLimiter(request);
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const user = await getAuthenticatedUser();
    if (!user) {
      return unauthorizedResponse();
    }

    const { id } = await params;

    // Validate UUID format
    if (!isValidUUID(id)) {
      return NextResponse.json(
        { error: 'Invalid ID format' },
        { status: 400 }
      );
    }

    const body = await request.json();
    const { title, description, status, due_date, completed_at } = body;

    // Build update object
    const updateData: any = {};
    if (title !== undefined && typeof title === 'string' && title.trim().length > 0) {
      updateData.title = title.trim();
    }
    if (description !== undefined) {
      updateData.description = description;
    }
    if (status !== undefined) {
      if (!['todo', 'in_progress', 'done'].includes(status)) {
        return errorResponse('Invalid status value', 400);
      }
      updateData.status = status;
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

    const { data: item, error } = await supabase
      .from('items')
      .update(updateData)
      .eq('id', id)
      .eq('user_id', user.userId)
      .select()
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return errorResponse('Item not found', 404);
      }
      return errorResponse('Failed to update item');
    }

    return successResponse({ item });
  } catch (error) {
    ErrorLogger.logError(error, {
      component: 'items/[id]',
      action: 'PATCH',
    });
    return errorResponse('Internal server error');
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Apply rate limiting
    const rateLimitResult = await apiLimiter(request);
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const user = await getAuthenticatedUser();
    if (!user) {
      return unauthorizedResponse();
    }

    const { id } = await params;

    // Validate UUID format
    if (!isValidUUID(id)) {
      return NextResponse.json(
        { error: 'Invalid ID format' },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from('items')
      .delete()
      .eq('id', id)
      .eq('user_id', user.userId);

    if (error) {
      return errorResponse('Failed to delete item');
    }

    return successResponse({ message: 'Item deleted successfully' });
  } catch (error) {
    ErrorLogger.logError(error, {
      component: 'items/[id]',
      action: 'DELETE',
    });
    return errorResponse('Internal server error');
  }
}
