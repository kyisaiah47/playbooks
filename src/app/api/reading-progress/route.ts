import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getAuthenticatedUser, unauthorizedResponse, errorResponse, successResponse } from '@/lib/auth-utils';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(request: NextRequest) {
  try {
    const user = await getAuthenticatedUser();
    if (!user) {
      return unauthorizedResponse();
    }

    const { data: progress, error } = await supabase
      .from('user_reading_progress')
      .select('*')
      .eq('user_id', user.userId)
      .order('completed_at', { ascending: false });

    if (error) {
      console.error('Error fetching reading progress:', error);
      return errorResponse('Failed to fetch reading progress');
    }

    // Transform to match expected format (reading_id -> guide_section_id for compatibility)
    const transformedProgress = progress?.map(p => ({
      ...p,
      guide_section_id: p.reading_id
    })) || [];

    return successResponse({ progress: transformedProgress });
  } catch (error) {
    console.error('Error in GET /api/reading-progress:', error);
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
    const { guide_section_id } = body;
    const reading_id = guide_section_id; // For compatibility with frontend

    if (!reading_id) {
      return errorResponse('reading_id is required', 400);
    }

    // Check if already completed
    const { data: existing } = await supabase
      .from('user_reading_progress')
      .select('id')
      .eq('user_id', user.userId)
      .eq('reading_id', reading_id)
      .maybeSingle();

    if (existing) {
      return successResponse({
        progress: existing,
        message: 'Reading already marked as complete'
      });
    }

    const { data: progress, error } = await supabase
      .from('user_reading_progress')
      .insert({
        user_id: user.userId,
        reading_id,
        completed: true,
        completed_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating reading progress:', error);
      return errorResponse('Failed to mark reading as complete');
    }

    return successResponse({ progress }, 201);
  } catch (error) {
    console.error('Error in POST /api/reading-progress:', error);
    return errorResponse('Internal server error');
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const user = await getAuthenticatedUser();
    if (!user) {
      return unauthorizedResponse();
    }

    const { searchParams } = new URL(request.url);
    const guide_section_id = searchParams.get('guide_section_id');
    const reading_id = guide_section_id; // For compatibility

    if (!reading_id) {
      return errorResponse('reading_id is required', 400);
    }

    const { error } = await supabase
      .from('user_reading_progress')
      .delete()
      .eq('user_id', user.userId)
      .eq('reading_id', reading_id);

    if (error) {
      console.error('Error deleting reading progress:', error);
      return errorResponse('Failed to delete reading progress');
    }

    return successResponse({ message: 'Reading progress deleted successfully' });
  } catch (error) {
    console.error('Error in DELETE /api/reading-progress:', error);
    return errorResponse('Internal server error');
  }
}
