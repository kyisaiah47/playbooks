'use client';

import { useParams, useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { TemplatesView } from '@/app/app/views/TemplatesView';
import { GettingStartedWizard } from '@/components/app/notes/GettingStartedWizard';
import { NotesListView } from '@/components/app/notes/NotesListView';
import { Loader2, FileText } from 'lucide-react';

export default function NotesPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const workspaceId = params.workspaceId as string;
  const guideId = searchParams.get('id');
  const pageId = searchParams.get('pageId');

  const [userGuideId, setUserGuideId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [pageName, setPageName] = useState<string>('');

  // Fetch or create user_guide instance for this guide
  useEffect(() => {
    async function fetchOrCreateUserGuide() {
      if (!guideId) {
        setLoading(false);
        return;
      }

      try {
        // Check if user already has this guide in workspace
        const response = await fetch(`/api/user-guides?workspace_id=${workspaceId}&guide_id=${guideId}`);

        if (!response.ok) {
          console.error('Failed to fetch user guides:', response.status);
          setLoading(false);
          return;
        }

        const data = await response.json();

        if (data.userGuides && data.userGuides.length > 0) {
          // Use existing user_guide
          setUserGuideId(data.userGuides[0].id);
        } else {
          // Create new user_guide instance
          const createResponse = await fetch('/api/user-guides', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              workspace_id: workspaceId,
              guide_id: guideId,
            }),
          });

          if (createResponse.ok) {
            const createData = await createResponse.json();
            setUserGuideId(createData.userGuide.id);
          } else {
            console.error('Failed to create user guide:', createResponse.status);
          }
        }
      } catch (error) {
        console.error('Error fetching/creating user guide:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchOrCreateUserGuide();
  }, [guideId, workspaceId]);

  // Fetch page data if pageId is present
  useEffect(() => {
    async function fetchPage() {
      if (!pageId) return;

      try {
        const response = await fetch(`/api/workspaces/${workspaceId}/pages`);
        if (!response.ok) return;
        const data = await response.json();
        const page = data.pages.find((p: any) => p.id === pageId);
        if (page) {
          setPageName(page.name);
        }
      } catch (error) {
        console.error('Error fetching page:', error);
      }
    }

    fetchPage();
  }, [pageId, workspaceId]);

  if (loading) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  const handleSelectGuide = (guideId: string) => {
    // Navigate to notes view with the selected guide
    router.push(`/app/${workspaceId}/notes?id=${guideId}`);
  };

  // If viewing a page (not a guide template)
  if (pageId && !guideId) {
    // Show guide selection for "Getting Started" page
    if (pageName === 'Getting Started') {
      return (
        <GettingStartedWizard
          workspaceId={workspaceId}
          onSelectGuide={handleSelectGuide}
        />
      );
    }

    // Show regular page editor for other pages
    return (
      <div className="h-full w-full p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">{pageName || 'Untitled'}</h1>
          <p className="text-sm text-muted-foreground mt-4">
            This is where the page editor will go - showing content for the selected page from the sidebar.
          </p>
        </div>
      </div>
    );
  }

  if (!guideId && !pageId) {
    return <NotesListView workspaceId={workspaceId} />;
  }

  return (
    <TemplatesView
      workspaceId={workspaceId}
      userGuideId={userGuideId || undefined}
      defaultTemplateId={guideId}
    />
  );
}
