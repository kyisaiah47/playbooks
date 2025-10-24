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

    const { searchParams } = new URL(request.url);
    const guide_section_id = searchParams.get('guide_section_id');
    const user_guide_id = searchParams.get('user_guide_id');

    let query = supabase
      .from('reading_progress')
      .select('*')
      .eq('user_id', user.userId);

    // Filter by guide_section_id if provided
    if (guide_section_id) {
      query = query.eq('guide_section_id', guide_section_id);
    }

    // Filter by user_guide_id if provided
    if (user_guide_id) {
      query = query.eq('user_guide_id', user_guide_id);
    }

    query = query.order('completed_at', { ascending: false });

    const { data: progress, error } = await query;

    if (error) {
      console.error('Error fetching reading progress:', error);
      return errorResponse('Failed to fetch reading progress');
    }

    return successResponse({ progress: progress || [] });
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
    const { guide_section_id, user_guide_id } = body;

    if (!guide_section_id) {
      return errorResponse('guide_section_id is required', 400);
    }

    // Verify guide_section exists
    const { data: section, error: sectionError } = await supabase
      .from('guide_sections')
      .select('id')
      .eq('id', guide_section_id)
      .single();

    if (sectionError || !section) {
      return errorResponse('Guide section not found', 404);
    }

    // Verify user_guide_id belongs to user if provided
    if (user_guide_id) {
      const { data: userGuide, error: guideError } = await supabase
        .from('user_guides')
        .select('id')
        .eq('id', user_guide_id)
        .eq('user_id', user.userId)
        .single();

      if (guideError || !userGuide) {
        return errorResponse('User guide not found', 404);
      }
    }

    // Check if already completed
    const { data: existing, error: existingError } = await supabase
      .from('reading_progress')
      .select('id')
      .eq('user_id', user.userId)
      .eq('guide_section_id', guide_section_id)
      .maybeSingle();

    if (existing) {
      return successResponse({
        progress: existing,
        message: 'Reading already marked as complete'
      });
    }

    const { data: progress, error } = await supabase
      .from('reading_progress')
      .insert({
        user_id: user.userId,
        guide_section_id,
        user_guide_id: user_guide_id || null,
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
    const id = searchParams.get('id');
    const guide_section_id = searchParams.get('guide_section_id');

    if (!id && !guide_section_id) {
      return errorResponse('Either id or guide_section_id is required', 400);
    }

    let query = supabase
      .from('reading_progress')
      .delete()
      .eq('user_id', user.userId);

    if (id) {
      query = query.eq('id', id);
    } else if (guide_section_id) {
      query = query.eq('guide_section_id', guide_section_id);
    }

    const { error } = await query;

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
