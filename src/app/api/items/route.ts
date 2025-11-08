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
    const status = searchParams.get('status');
    const track_id = searchParams.get('track_id');
    const due_date = searchParams.get('due_date');

    let query = supabase
      .from('items')
      .select('*')
      .eq('user_id', user.userId);

    // Filter by status if provided
    if (status) {
      query = query.eq('status', status);
    }

    // Filter by track_id if provided
    if (track_id) {
      query = query.eq('track_id', track_id);
    }

    // Filter by due_date if provided
    if (due_date) {
      query = query.eq('due_date', due_date);
    }

    query = query.order('created_at', { ascending: false });

    const { data: items, error } = await query;

    if (error) {
      return errorResponse('Failed to fetch items');
    }

    return successResponse({ items: items || [] });
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
    const { title, description, status, priority, due_date, track_id, page_id } = body;

    if (!title || typeof title !== 'string' || title.trim().length === 0) {
      return errorResponse('Task title is required', 400);
    }

    // Verify track_id belongs to user if provided
    if (track_id) {
      const { data: track, error: trackError } = await supabase
        .from('tracks')
        .select('id')
        .eq('id', track_id)
        .eq('user_id', user.userId)
        .single();

      if (trackError || !track) {
        return errorResponse('Track not found', 404);
      }
    }

    // Verify page_id belongs to user if provided
    if (page_id) {
      const { data: page, error: pageError } = await supabase
        .from('pages')
        .select('id, user_id')
        .eq('id', page_id)
        .eq('user_id', user.userId)
        .single();

      if (pageError || !page) {
        return errorResponse('Page not found', 404);
      }
    }

    const { data: item, error } = await supabase
      .from('items')
      .insert({
        user_id: user.userId,
        title: title.trim(),
        description: description || null,
        status: status || 'todo',
        due_date: due_date || null,
        track_id: track_id || null,
        all_day: false,
      })
      .select()
      .single();

    if (error) {
      return errorResponse('Failed to create item');
    }

    return successResponse({ item }, 201);
  } catch (error) {
    return errorResponse('Internal server error');
  }
}
