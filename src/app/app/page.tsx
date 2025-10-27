'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

export default function AppPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    initializeWorkspace();

    async function initializeWorkspace() {
      try {
        // Check if user is authenticated
        const authRes = await fetch('/api/auth/me');
        const authData = await authRes.json();

        if (!authData.user) {
          // Redirect to login if not authenticated
          router.push('/login');
          return;
        }

        // Check if user has workspaces
        const workspacesRes = await fetch('/api/workspaces');
        const workspacesData = await workspacesRes.json();

        if (workspacesData.workspaces && workspacesData.workspaces.length > 0) {
          // User has workspaces, redirect to the first one
          const firstWorkspace = workspacesData.workspaces[0];
          router.push(`/app/${firstWorkspace.id}`);
        } else {
          // No workspaces, create default workspace
          const createRes = await fetch('/api/workspaces/init', {
            method: 'POST',
          });

          if (!createRes.ok) {
            throw new Error('Failed to create default workspace');
          }

          const createData = await createRes.json();

          if (createData.workspace) {
            // Redirect to newly created workspace
            router.push(`/app/${createData.workspace.id}`);
          } else {
            throw new Error('No workspace returned from initialization');
          }
        }
      } catch (error) {
        console.error('Error initializing workspace:', error);
        setError('Failed to initialize workspace. Please try again.');
        setIsLoading(false);
      }
    }
  }, [router]);

  if (error) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <p className="text-destructive font-medium">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="text-muted-foreground">Setting up your workspace...</p>
      </div>
    </div>
  );
}
