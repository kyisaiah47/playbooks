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
    const { title, description, start_time, end_time, all_day, location } = body;

    // Build update object
    const updateData: any = {};
    if (title !== undefined && typeof title === 'string' && title.trim().length > 0) {
      updateData.title = title.trim();
    }
    if (description !== undefined) {
      updateData.description = description;
    }
    if (start_time !== undefined) {
      updateData.start_time = start_time;
    }
    if (end_time !== undefined) {
      updateData.end_time = end_time;
    }
    if (all_day !== undefined) {
      if (typeof all_day !== 'boolean') {
        return errorResponse('all_day must be a boolean', 400);
      }
      updateData.all_day = all_day;
    }
    if (location !== undefined) {
      updateData.location = location;
    }

    if (Object.keys(updateData).length === 0) {
      return errorResponse('No valid fields to update', 400);
    }

    const { data: event, error } = await supabase
      .from('calendar_events')
      .update(updateData)
      .eq('id', id)
      .eq('user_id', user.userId)
      .select()
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return errorResponse('Calendar event not found', 404);
      }
      console.error('Error updating calendar event:', error);
      return errorResponse('Failed to update calendar event');
    }

    return successResponse({ event });
  } catch (error) {
    console.error('Error in PATCH /api/calendar/[id]:', error);
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
      .from('calendar_events')
      .delete()
      .eq('id', id)
      .eq('user_id', user.userId);

    if (error) {
      console.error('Error deleting calendar event:', error);
      return errorResponse('Failed to delete calendar event');
    }

    return successResponse({ message: 'Calendar event deleted successfully' });
  } catch (error) {
    console.error('Error in DELETE /api/calendar/[id]:', error);
    return errorResponse('Internal server error');
  }
}
