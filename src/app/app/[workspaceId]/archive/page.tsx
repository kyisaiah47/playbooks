'use client';

import { useSearchParams } from 'next/navigation';
import { Archive } from 'lucide-react';
import { TemplatesView } from '@/app/app/views/TemplatesView';

export default function ArchivePage() {
  const searchParams = useSearchParams();
  const selectedNoteId = searchParams.get('noteId');

  return (
    <div className="h-full w-full flex flex-col overflow-hidden">
      {/* Header */}
      <div className="border-b border-border/40 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#6366f1]/10 flex items-center justify-center">
            <Archive className="w-4 h-4 text-[#6366f1]" />
          </div>
          <div>
            <h1 className="text-xl font-semibold">Archive</h1>
            <p className="text-xs text-muted-foreground">
              Click on a note in the sidebar to view it
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        {selectedNoteId ? (
          <TemplatesView userGuideId={selectedNoteId} />
        ) : (
          <div className="h-full flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <Archive className="w-16 h-16 mx-auto mb-4 opacity-20" />
              <p className="text-lg font-medium">No note selected</p>
              <p className="text-sm">Click on an archived note from the sidebar</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
