import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getAuthenticatedUser, unauthorizedResponse, errorResponse, successResponse } from '@/lib/auth-utils';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getAuthenticatedUser();
    if (!user) {
      return unauthorizedResponse();
    }

    const eventId = params.id;

    // Verify the event belongs to the user before deleting
    const { data: event, error: fetchError } = await supabase
      .from('calendar_events')
      .select('id')
      .eq('id', eventId)
      .eq('user_id', user.userId)
      .single();

    if (fetchError || !event) {
      return errorResponse('Event not found', 404);
    }

    const { error } = await supabase
      .from('calendar_events')
      .delete()
      .eq('id', eventId)
      .eq('user_id', user.userId);

    if (error) {
      console.error('Error deleting calendar event:', error);
      return errorResponse('Failed to delete calendar event');
    }

    return successResponse({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error('Error in DELETE /api/calendar/[id]:', error);
    return errorResponse('Internal server error');
  }
}
