'use client';

import { useParams, useSearchParams } from 'next/navigation';
import { BlankNoteEditor } from '@/components/app/notes/BlankNoteEditor';
import { useDemo } from '@/contexts/demo-context';
import { DEMO_WORKSPACE_ID } from '@/lib/demo-constants';

export default function NotePage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const { demoMode } = useDemo();
  const workspaceId = demoMode ? DEMO_WORKSPACE_ID : (params.workspaceId as string);
  const noteId = searchParams.get('id');

  if (!noteId) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground">
        <p>Note not found</p>
      </div>
    );
  }

  return <BlankNoteEditor noteId={noteId} workspaceId={workspaceId} />;
}
