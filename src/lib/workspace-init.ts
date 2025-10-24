import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export interface WorkspaceInitResult {
  workspace: {
    id: string;
    user_id: string;
    name: string;
    icon: string | null;
    created_at: string;
    updated_at: string;
  };
  pages: Array<{
    id: string;
    workspace_id: string;
    name: string;
    icon: string | null;
    parent_page_id: string | null;
    guide_id: string | null;
    position: number;
    created_at: string;
    updated_at: string;
  }>;
}

/**
 * Creates a default workspace for a new user with a "Getting Started" page.
 *
 * @param userId - The user's UUID
 * @returns WorkspaceInitResult containing the created workspace and pages
 * @throws Error if workspace or page creation fails
 */
export async function createDefaultWorkspace(userId: string): Promise<WorkspaceInitResult> {
  // Create workspace "My Life Planning" with home icon
  const { data: workspace, error: workspaceError } = await supabase
    .from('workspaces')
    .insert({
      user_id: userId,
      name: 'My Life Planning',
      icon: '🏠',
    })
    .select()
    .single();

  if (workspaceError || !workspace) {
    console.error('Error creating default workspace:', workspaceError);
    throw new Error('Failed to create default workspace');
  }

  // Create "Getting Started" page
  // Note: guide_id can be set to a welcome guide ID when available
  // For now, we'll create the page without a specific guide_id
  const { data: gettingStartedPage, error: pageError } = await supabase
    .from('pages')
    .insert({
      workspace_id: workspace.id,
      name: 'Getting Started',
      icon: '👋',
      parent_page_id: null,
      guide_id: null, // Can be set to 'welcome' or a specific guide ID when available
      position: 0,
    })
    .select()
    .single();

  if (pageError || !gettingStartedPage) {
    console.error('Error creating Getting Started page:', pageError);
    // If page creation fails, we should consider cleaning up the workspace
    // or just return the workspace without pages
    return {
      workspace,
      pages: [],
    };
  }

  return {
    workspace,
    pages: [gettingStartedPage],
  };
}

/**
 * Checks if a user has any workspaces
 *
 * @param userId - The user's UUID
 * @returns true if the user has at least one workspace, false otherwise
 */
export async function userHasWorkspaces(userId: string): Promise<boolean> {
  const { data: workspaces, error } = await supabase
    .from('workspaces')
    .select('id')
    .eq('user_id', userId)
    .limit(1);

  if (error) {
    console.error('Error checking user workspaces:', error);
    return false;
  }

  return workspaces !== null && workspaces.length > 0;
}

/**
 * Gets the first workspace for a user (by creation date)
 *
 * @param userId - The user's UUID
 * @returns The first workspace or null if none exists
 */
export async function getFirstWorkspace(userId: string): Promise<{ id: string } | null> {
  const { data: workspace, error } = await supabase
    .from('workspaces')
    .select('id')
    .eq('user_id', userId)
    .order('created_at', { ascending: true })
    .limit(1)
    .single();

  if (error || !workspace) {
    return null;
  }

  return workspace;
}
