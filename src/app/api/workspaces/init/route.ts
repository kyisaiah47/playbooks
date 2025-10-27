import { NextRequest, NextResponse } from 'next/server';
import { getAuthenticatedUser, unauthorizedResponse, errorResponse, successResponse } from '@/lib/auth-utils';
import { createDefaultWorkspace } from '@/lib/workspace-init';

/**
 * POST /api/workspaces/init
 * Creates a default workspace for the authenticated user if they don't have one.
 * This endpoint is idempotent - it will return existing workspace if one already exists.
 */
export async function POST(request: NextRequest) {
  try {
    const user = await getAuthenticatedUser();
    if (!user) {
      return unauthorizedResponse();
    }

    // Create the default workspace
    const result = await createDefaultWorkspace(user.userId);

    return successResponse(result, 201);
  } catch (error) {
    console.error('Error in POST /api/workspaces/init:', error);
    return errorResponse('Failed to initialize workspace');
  }
}
