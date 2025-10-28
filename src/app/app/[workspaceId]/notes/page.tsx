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
  const [loading, setLoading] = useState(false);
  const [pageName, setPageName] = useState<string>('');

  // If viewing a blank note (noteId without guide)
  if (noteId) {
    return <BlankNoteEditor noteId={noteId} workspaceId={workspaceId} />;
  }

  // If viewing a guided note
  if (guideId) {
    return (
      <GuidesView
        workspaceId={workspaceId}
        defaultGuideId={guideId}
      />
    );
  }

  // No params - show empty state
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-full text-muted-foreground"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <FileText className="w-16 h-16 mb-4 opacity-20" />
      <p className="text-lg font-medium">No note selected</p>
      <p className="text-sm">Click on a note from the sidebar to view it</p>
    </motion.div>
  );
}
