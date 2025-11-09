import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getAuthenticatedUser, unauthorizedResponse, errorResponse, successResponse } from '@/lib/auth-utils';
import { apiLimiter } from '@/lib/rate-limit';
import { isValidUUID } from '@/lib/validation-utils';
import { ErrorLogger } from '@/lib/error-logger';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

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

    // Validate UUID format
    if (!isValidUUID(id)) {
      return NextResponse.json(
        { error: 'Invalid ID format' },
        { status: 400 }
      );
    }

    const body = await request.json();

    // Verify track ownership
    const { data: track, error: trackError } = await supabase
      .from('tracks')
      .select('id')
      .eq('id', id)
      .eq('user_id', user.userId)
      .single();

    if (trackError || !track) {
      return errorResponse('Track not found', 404);
    }

    // Whitelist and validate allowed fields
    const allowedFields = ['custom_name', 'progress', 'archived'];
    const updateData: Record<string, any> = {
      updated_at: new Date().toISOString(),
    };

    // Only include whitelisted fields
    for (const field of allowedFields) {
      if (field in body) {
        updateData[field] = body[field];
      }
    }

    // Validate field types and values
    if ('progress' in updateData) {
      if (typeof updateData.progress !== 'number' || updateData.progress < 0 || updateData.progress > 100) {
        return errorResponse('Progress must be a number between 0 and 100', 400);
      }
    }

    if ('archived' in updateData) {
      if (typeof updateData.archived !== 'boolean') {
        return errorResponse('Archived must be a boolean', 400);
      }
    }

    if ('custom_name' in updateData) {
      if (updateData.custom_name !== null && typeof updateData.custom_name !== 'string') {
        return errorResponse('Custom name must be a string or null', 400);
      }
      if (typeof updateData.custom_name === 'string' && updateData.custom_name.length > 200) {
        return errorResponse('Custom name must be less than 200 characters', 400);
      }
    }

    // Update the track
    const { error: updateError } = await supabase
      .from('tracks')
      .update(updateData)
      .eq('id', id);

    if (updateError) {
      return errorResponse('Failed to update track');
    }

    return successResponse({ success: true });
  } catch (error) {
    ErrorLogger.logError(error, {
      component: 'tracks/[id]',
      action: 'PATCH',
    });
    return errorResponse('Internal server error');
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Apply rate limiting
    const rateLimitResult = await apiLimiter(request);
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const user = await getAuthenticatedUser();
    if (!user) {
      return unauthorizedResponse();
    }

    const { id } = await params;

    // Validate UUID format
    if (!isValidUUID(id)) {
      return NextResponse.json(
        { error: 'Invalid ID format' },
        { status: 400 }
      );
    }

    // Verify track ownership
    const { data: track, error: trackError } = await supabase
      .from('tracks')
      .select('id')
      .eq('id', id)
      .eq('user_id', user.userId)
      .single();

    if (trackError || !track) {
      return errorResponse('Track not found', 404);
    }

    // Delete the track (will cascade to notes, items, etc.)
    const { error: deleteError } = await supabase
      .from('tracks')
      .delete()
      .eq('id', id);

    if (deleteError) {
      return errorResponse('Failed to delete track');
    }

    return successResponse({ success: true });
  } catch (error) {
    ErrorLogger.logError(error, {
      component: 'tracks/[id]',
      action: 'DELETE',
    });
    return errorResponse('Internal server error');
  }
}
