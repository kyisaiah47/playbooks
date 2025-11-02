import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getAuthenticatedUser, unauthorizedResponse, errorResponse, successResponse } from '@/lib/auth-utils';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const track_id = searchParams.get('track_id');

    const user = await getAuthenticatedUser();
    if (!user) {
      return unauthorizedResponse();
    }

    if (!track_id) {
      return errorResponse('track_id is required', 400);
    }

    // Verify track ownership
    const { data: track, error: trackError } = await supabase
      .from('tracks')
      .select('id')
      .eq('id', track_id)
      .eq('user_id', user.userId)
      .single();

    if (trackError || !track) {
      return errorResponse('Track not found', 404);
    }

    // Get notes for this track
    const { data: note, error: noteError } = await supabase
      .from('notes')
      .select('*')
      .eq('track_id', track_id)
      .single();

    // Return empty content if no note exists yet
    if (noteError && noteError.code === 'PGRST116') {
      return successResponse({ content: '' });
    }

    if (noteError) {
      console.error('Error fetching note:', noteError);
      return errorResponse('Failed to fetch note');
    }

    return successResponse({ content: note?.content || '' });
  } catch (error) {
    console.error('Error in GET /api/notes:', error);
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
    const { track_id, content } = body;

    if (!track_id) {
      return errorResponse('track_id is required', 400);
    }

    // Verify track ownership
    const { data: track, error: trackError } = await supabase
      .from('tracks')
      .select('id')
      .eq('id', track_id)
      .eq('user_id', user.userId)
      .single();

    if (trackError || !track) {
      return errorResponse('Track not found', 404);
    }

    // Check if note already exists
    const { data: existingNote } = await supabase
      .from('notes')
      .select('id')
      .eq('track_id', track_id)
      .single();

    if (existingNote) {
      // Update existing note
      const { error: updateError } = await supabase
        .from('notes')
        .update({ content })
        .eq('id', existingNote.id);

      if (updateError) {
        console.error('Error updating note:', updateError);
        return errorResponse('Failed to update note');
      }
    } else {
      // Create new note
      const { error: insertError } = await supabase
        .from('notes')
        .insert({
          track_id,
          content,
        });

      if (insertError) {
        console.error('Error creating note:', insertError);
        return errorResponse('Failed to create note');
      }
    }

    return successResponse({ success: true });
  } catch (error) {
    console.error('Error in POST /api/notes:', error);
    return errorResponse('Internal server error');
  }
}
