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
    const start_date = searchParams.get('start_date');
    const end_date = searchParams.get('end_date');

    let query = supabase
      .from('calendar_events')
      .select('*')
      .eq('user_id', user.userId);

    // Filter by date range if provided
    if (start_date) {
      query = query.gte('start_time', start_date);
    }
    if (end_date) {
      query = query.lte('start_time', end_date);
    }

    query = query.order('start_time', { ascending: true });

    const { data: events, error } = await query;

    if (error) {
      console.error('Error fetching calendar events:', error);
      return errorResponse('Failed to fetch calendar events');
    }

    return successResponse({ events: events || [] });
  } catch (error) {
    console.error('Error in GET /api/calendar:', error);
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
    const { title, description, start_time, end_time, all_day, location, user_guide_id } = body;

    if (!title || typeof title !== 'string' || title.trim().length === 0) {
      return errorResponse('Event title is required', 400);
    }

    if (!start_time) {
      return errorResponse('Start time is required', 400);
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

    const { data: event, error } = await supabase
      .from('calendar_events')
      .insert({
        user_id: user.userId,
        title: title.trim(),
        description: description || null,
        start_time,
        end_time: end_time || null,
        all_day: all_day || false,
        location: location || null,
        user_guide_id: user_guide_id || null,
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating calendar event:', error);
      return errorResponse('Failed to create calendar event');
    }

    return successResponse({ event }, 201);
  } catch (error) {
    console.error('Error in POST /api/calendar:', error);
    return errorResponse('Internal server error');
  }
}
