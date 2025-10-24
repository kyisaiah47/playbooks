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
    const limit = searchParams.get('limit');
    const offset = searchParams.get('offset');

    let query = supabase
      .from('journal_entries')
      .select('*')
      .eq('user_id', user.userId)
      .order('created_at', { ascending: false });

    // Apply pagination if provided
    if (limit) {
      const limitNum = parseInt(limit, 10);
      if (!isNaN(limitNum) && limitNum > 0) {
        query = query.limit(limitNum);
      }
    }

    if (offset) {
      const offsetNum = parseInt(offset, 10);
      if (!isNaN(offsetNum) && offsetNum >= 0) {
        query = query.range(offsetNum, offsetNum + (limit ? parseInt(limit, 10) : 10) - 1);
      }
    }

    const { data: entries, error } = await query;

    if (error) {
      console.error('Error fetching journal entries:', error);
      return errorResponse('Failed to fetch journal entries');
    }

    return successResponse({ entries: entries || [] });
  } catch (error) {
    console.error('Error in GET /api/journal:', error);
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
    const { title, content, mood, tags } = body;

    if (!content || typeof content !== 'string' || content.trim().length === 0) {
      return errorResponse('Journal entry content is required', 400);
    }

    const { data: entry, error } = await supabase
      .from('journal_entries')
      .insert({
        user_id: user.userId,
        title: title || null,
        content: content.trim(),
        mood: mood || null,
        tags: tags || [],
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating journal entry:', error);
      return errorResponse('Failed to create journal entry');
    }

    return successResponse({ entry }, 201);
  } catch (error) {
    console.error('Error in POST /api/journal:', error);
    return errorResponse('Internal server error');
  }
}
