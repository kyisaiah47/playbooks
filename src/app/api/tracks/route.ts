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
    const guide_id = searchParams.get('guide_id');
    const archived = searchParams.get('archived');

    // Require authentication
    const user = await getAuthenticatedUser();
    if (!user) {
      return unauthorizedResponse();
    }
    const userId = user.userId;

    // Build query for tracks
    let tracksQuery = supabase
      .from('tracks')
      .select('*')
      .eq('user_id', userId);

    // Filter by guide_id if provided
    if (guide_id) {
      tracksQuery = tracksQuery.eq('guide_id', guide_id);
    }

    // Filter by archived status if provided
    if (archived !== null) {
      tracksQuery = tracksQuery.eq('archived', archived === 'true');
    }

    tracksQuery = tracksQuery.order('created_at', { ascending: false });

    const { data: tracks, error: tracksError } = await tracksQuery;

    if (tracksError) {
      return errorResponse('Failed to fetch tracks');
    }

    if (!tracks || tracks.length === 0) {
      return successResponse({ tracks: [] });
    }

    // Get unique guide IDs
    const guideIds = [...new Set(tracks.map(t => t.guide_id))];

    // Fetch guides separately
    const { data: guides, error: guidesError } = await supabase
      .from('guides')
      .select('id, name, description, icon')
      .in('id', guideIds);

    if (guidesError) {
      return errorResponse('Failed to fetch guides');
    }

    // Create a map of guides by ID
    const guidesMap = new Map((guides || []).map(g => [g.id, g]));

    // Manually join tracks with guides
    const tracksWithGuides = tracks.map(track => ({
      ...track,
      guides: guidesMap.get(track.guide_id) || null
    }));

    return successResponse({ tracks: tracksWithGuides });
  } catch (error) {
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
    const { guide_id, custom_name } = body;

    // guide_id is required for tracks
    if (!guide_id) {
      return errorResponse('guide_id is required', 400);
    }

    // Verify guide exists
    const { data: guide, error: guideError } = await supabase
      .from('guides')
      .select('id')
      .eq('id', guide_id)
      .single();

    if (guideError || !guide) {
      return errorResponse(`Guide not found: ${guide_id}`, 404);
    }

    const insertData = {
      user_id: user.userId,
      guide_id: guide_id,
      custom_name: custom_name || null,
      progress: 0,
      archived: false,
    };

    const { data: track, error } = await supabase
      .from('tracks')
      .insert(insertData)
      .select('*')
      .single();

    if (error) {
      return errorResponse('Failed to create track');
    }

    // Fetch the guide separately
    if (track) {
      const { data: guideData } = await supabase
        .from('guides')
        .select('id, name, description, icon')
        .eq('id', track.guide_id)
        .single();

      track.guides = guideData || null;
    }

    return successResponse({ track }, 201);
  } catch (error) {
    return errorResponse('Internal server error');
  }
}
