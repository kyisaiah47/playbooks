'use client';

import { useParams, useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GuidesView } from '@/app/app/views/GuidesView';
import { GettingStartedWizard } from '@/components/app/notes/GettingStartedWizard';
import { NotesListView } from '@/components/app/notes/NotesListView';
import { BlankNoteEditor } from '@/components/app/notes/BlankNoteEditor';
import { Loader2, FileText } from 'lucide-react';
import { useDemo } from '@/contexts/demo-context';
import { DEMO_WORKSPACE_ID } from '@/lib/demo-constants';

export default function NotesPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { demoMode, selectedGuideId: demoGuideId } = useDemo();
  const workspaceId = demoMode ? DEMO_WORKSPACE_ID : (params.workspaceId as string);
  const guideId = demoMode ? demoGuideId : searchParams.get('id');
  const pageId = searchParams.get('pageId');
  const noteId = searchParams.get('noteId');

  const [userGuideId, setUserGuideId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [pageName, setPageName] = useState<string>('');

  // Debug logging
  useEffect(() => {
    console.log('[NotesPage] Params:', { noteId, guideId, pageId, workspaceId });
  }, [noteId, guideId, pageId, workspaceId]);

  // Fetch or create user_guide instance for this guide
  useEffect(() => {
    async function fetchOrCreateUserGuide() {
      // If we have a noteId without guideId, or no params at all, don't need to load
      if (!guideId) {
        console.log('[NotesPage] No guideId, setting loading to false');
        setLoading(false);
        return;
      }

      try {
        // Check if user already has this guide in workspace
        const response = await fetch(`/api/notes?workspace_id=${workspaceId}&guide_id=${guideId}`);

        if (!response.ok) {
          console.error('Failed to fetch user guides:', response.status);
          setLoading(false);
          return;
        }

        const data = await response.json();

        if (data.notes && data.notes.length > 0) {
          // Use existing user_guide
          setUserGuideId(data.notes[0].id);
        } else if (!demoMode) {
          // Create new user_guide instance (only if not in demo mode)
          const createResponse = await fetch('/api/notes', {
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
  }, [guideId, workspaceId, demoMode]);

  // Fetch page data if pageId is present
  useEffect(() => {
    async function fetchPage() {
      if (!pageId) return;

      try {
        const response = await fetch(`/api/workspaces/${workspaceId}/pages`);
        if (!response.ok) return;
        const data = await response.json();
        const page = data.pages?.find((p: any) => p.id === pageId);
        if (page) {
          setPageName(page.name);
        }
      } catch (error) {
        console.error('Error fetching page:', error);
      }
    }

    fetchPage();
  }, [pageId, workspaceId]);

  // Load default note if no params - redirect to overview instead
  useEffect(() => {
    if (!guideId && !pageId && !noteId) {
      console.log('[NotesPage] No params - redirecting to overview');
      router.replace(`/app/${workspaceId}`);
    }
  }, [guideId, pageId, noteId, workspaceId, router]);

  if (loading) {
    return (
      <motion.div
        className="h-full w-full flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
      </motion.div>
    );
  }

  const handleSelectGuide = (guideId: string) => {
    // Navigate to notes view with the selected guide
    router.push(`/app/${workspaceId}/notes?id=${guideId}`);
  };

  // If viewing a page (not a guide)
  if (pageId && !guideId) {
    console.log('[NotesPage] Rendering page view, pageName:', pageName);
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
      <motion.div
        className="h-full w-full p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {pageName || 'Untitled'}
          </motion.h1>
          <motion.p
            className="text-sm text-muted-foreground mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            This is where the page editor will go - showing content for the selected page from the sidebar.
          </motion.p>
        </div>
      </motion.div>
    );
  }

  // If viewing a blank note (noteId without guide)
  if (noteId && !guideId) {
    console.log('[NotesPage] Rendering blank note view, noteId:', noteId);
    return <BlankNoteEditor noteId={noteId} workspaceId={workspaceId} />;
  }

  // If no params, show loading (redirect happens in useEffect)
  if (!guideId && !pageId && !noteId) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  console.log('[NotesPage] Rendering GuidesView with guideId:', guideId);
  return (
    <GuidesView
      workspaceId={workspaceId}
      userGuideId={userGuideId || undefined}
      defaultGuideId={guideId}
    />
  );
}
