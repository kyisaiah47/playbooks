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
    const user_guide_id = searchParams.get('user_guide_id');
    const due_date = searchParams.get('due_date');

    let query = supabase
      .from('tasks')
      .select('*')
      .eq('user_id', user.userId);

    // Filter by status if provided
    if (status) {
      query = query.eq('status', status);
    }

    // Filter by user_guide_id if provided
    if (user_guide_id) {
      query = query.eq('user_guide_id', user_guide_id);
    }

    // Filter by due_date if provided
    if (due_date) {
      query = query.eq('due_date', due_date);
    }

    query = query.order('created_at', { ascending: false });

    const { data: tasks, error } = await query;

    if (error) {
      console.error('Error fetching tasks:', error);
      return errorResponse('Failed to fetch tasks');
    }

    return successResponse({ tasks: tasks || [] });
  } catch (error) {
    console.error('Error in GET /api/tasks:', error);
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
    const { title, description, status, priority, due_date, user_guide_id, page_id } = body;

    if (!title || typeof title !== 'string' || title.trim().length === 0) {
      return errorResponse('Task title is required', 400);
    }

    // Verify user_guide_id belongs to user if provided
    if (user_guide_id) {
      const { data: userGuide, error: guideError } = await supabase
        .from('notes')
        .select('id')
        .eq('id', user_guide_id)
        .eq('user_id', user.userId)
        .single();

      if (guideError || !userGuide) {
        return errorResponse('User guide not found', 404);
      }
    }

    // Verify page_id belongs to user if provided
    if (page_id) {
      const { data: page, error: pageError } = await supabase
        .from('pages')
        .select('id, workspace_id, workspaces!inner(user_id)')
        .eq('id', page_id)
        .single();

      // @ts-ignore - workspaces is joined
      if (pageError || !page || page.workspaces.user_id !== user.userId) {
        return errorResponse('Page not found', 404);
      }
    }

    const { data: task, error } = await supabase
      .from('tasks')
      .insert({
        user_id: user.userId,
        title: title.trim(),
        description: description || null,
        status: status || 'todo',
        priority: priority || 'medium',
        due_date: due_date || null,
        user_guide_id: user_guide_id || null,
        page_id: page_id || null,
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating task:', error);
      return errorResponse('Failed to create task');
    }

    return successResponse({ task }, 201);
  } catch (error) {
    console.error('Error in POST /api/tasks:', error);
    return errorResponse('Internal server error');
  }
}
