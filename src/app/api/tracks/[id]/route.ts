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

    // Verify track ownership
    const { data: track, error: trackError } = await supabase
      .from('tracks')
      .select('id')
      .eq('id', id)
      .eq('user_id', user.userId)
      .single();

    if (trackError || !track) {
      return errorResponse('Track not found', 404);
    }

    // Update the track
    const { error: updateError } = await supabase
      .from('tracks')
      .update({
        ...body,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id);

    if (updateError) {
      return errorResponse('Failed to update track');
    }

    return successResponse({ success: true });
  } catch (error) {
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

    // Verify track ownership
    const { data: track, error: trackError } = await supabase
      .from('tracks')
      .select('id')
      .eq('id', id)
      .eq('user_id', user.userId)
      .single();

    if (trackError || !track) {
      return errorResponse('Track not found', 404);
    }

    // Delete the track (will cascade to notes, items, etc.)
    const { error: deleteError } = await supabase
      .from('tracks')
      .delete()
      .eq('id', id);

    if (deleteError) {
      return errorResponse('Failed to delete track');
    }

    return successResponse({ success: true });
  } catch (error) {
    return errorResponse('Internal server error');
  }
}
