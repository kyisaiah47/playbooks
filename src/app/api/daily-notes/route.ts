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
    const date = searchParams.get('date');

    if (!date) {
      return errorResponse('Date query parameter is required', 400);
    }

    // Validate date format (YYYY-MM-DD)
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(date)) {
      return errorResponse('Invalid date format. Use YYYY-MM-DD', 400);
    }

    const { data: note, error } = await supabase
      .from('daily_notes')
      .select('*')
      .eq('user_id', user.userId)
      .eq('date', date)
      .maybeSingle();

    if (error) {
      console.error('Error fetching daily note:', error);
      return errorResponse('Failed to fetch daily note');
    }

    return successResponse({ note: note || null });
  } catch (error) {
    console.error('Error in GET /api/daily-notes:', error);
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
    const { date, content } = body;

    if (!date) {
      return errorResponse('Date is required', 400);
    }

    // Validate date format (YYYY-MM-DD)
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(date)) {
      return errorResponse('Invalid date format. Use YYYY-MM-DD', 400);
    }

    if (!content || typeof content !== 'string') {
      return errorResponse('Content is required', 400);
    }

    // Upsert: Insert or update if exists
    const { data: note, error } = await supabase
      .from('daily_notes')
      .upsert(
        {
          user_id: user.userId,
          date,
          content: content.trim(),
        },
        {
          onConflict: 'user_id,date',
          ignoreDuplicates: false,
        }
      )
      .select()
      .single();

    if (error) {
      console.error('Error upserting daily note:', error);
      return errorResponse('Failed to save daily note');
    }

    return successResponse({ note }, 201);
  } catch (error) {
    console.error('Error in POST /api/daily-notes:', error);
    return errorResponse('Internal server error');
  }
}
