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

    const { data: entry, error } = await supabase
      .from('journal_entries')
      .select('*')
      .eq('id', id)
      .eq('user_id', user.userId)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return errorResponse('Journal entry not found', 404);
      }
      console.error('Error fetching journal entry:', error);
      return errorResponse('Failed to fetch journal entry');
    }

    return successResponse({ entry });
  } catch (error) {
    console.error('Error in GET /api/journal/[id]:', error);
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
    const { title, content, mood, tags } = body;

    // Build update object
    const updateData: any = {};
    if (title !== undefined) {
      updateData.title = title;
    }
    if (content !== undefined && typeof content === 'string' && content.trim().length > 0) {
      updateData.content = content.trim();
    }
    if (mood !== undefined) {
      updateData.mood = mood;
    }
    if (tags !== undefined) {
      if (!Array.isArray(tags)) {
        return errorResponse('Tags must be an array', 400);
      }
      updateData.tags = tags;
    }

    if (Object.keys(updateData).length === 0) {
      return errorResponse('No valid fields to update', 400);
    }

    const { data: entry, error } = await supabase
      .from('journal_entries')
      .update(updateData)
      .eq('id', id)
      .eq('user_id', user.userId)
      .select()
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return errorResponse('Journal entry not found', 404);
      }
      console.error('Error updating journal entry:', error);
      return errorResponse('Failed to update journal entry');
    }

    return successResponse({ entry });
  } catch (error) {
    console.error('Error in PATCH /api/journal/[id]:', error);
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
      .from('journal_entries')
      .delete()
      .eq('id', id)
      .eq('user_id', user.userId);

    if (error) {
      console.error('Error deleting journal entry:', error);
      return errorResponse('Failed to delete journal entry');
    }

    return successResponse({ message: 'Journal entry deleted successfully' });
  } catch (error) {
    console.error('Error in DELETE /api/journal/[id]:', error);
    return errorResponse('Internal server error');
  }
}
