'use client';

import { useParams, useSearchParams } from 'next/navigation';
import { BlankNoteEditor } from '@/components/app/notes/BlankNoteEditor';
import { GuidesView } from '@/app/app/views/GuidesView';
import { useDemo } from '@/contexts/demo-context';
import { DEMO_WORKSPACE_ID } from '@/lib/demo-constants';
import { FileText } from 'lucide-react';

export default function NotePage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const { demoMode, selectedGuideId: demoGuideId } = useDemo();
  const workspaceId = demoMode ? DEMO_WORKSPACE_ID : (params.workspaceId as string);
  const guideId = demoMode ? demoGuideId : searchParams.get('guideId');
  const noteId = searchParams.get('id');

  // Guided note (has guideId)
  if (guideId) {
    return (
      <GuidesView
        workspaceId={workspaceId}
        defaultGuideId={guideId}
      />
    );
  }

  // Blank note (has noteId)
  if (noteId) {
    return <BlankNoteEditor noteId={noteId} workspaceId={workspaceId} />;
  }

  // No note selected
  return (
    <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
      <FileText className="w-16 h-16 mb-4 opacity-20" />
      <p className="text-lg font-medium">No note selected</p>
      <p className="text-sm">Select a note from the sidebar</p>
    </div>
  );
}
