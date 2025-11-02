'use client';

import { NotesView } from './NotesView';
import { TrackTabsWrapper } from '@/components/TrackTabsWrapper';
import { FileText } from 'lucide-react';

interface NotesViewWrapperProps {
  selectedTrackIds: string[];
}

export function NotesViewWrapper({ selectedTrackIds }: NotesViewWrapperProps) {
  return (
    <TrackTabsWrapper
      selectedTrackIds={selectedTrackIds}
      emptyState={
        <div className="h-full flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <FileText className="w-16 h-16 mx-auto mb-4 opacity-20" />
            <p className="text-lg font-medium">No tracks selected</p>
            <p className="text-sm">Select a track to write freeform notes</p>
          </div>
        </div>
      }
      renderView={(track) => {
        const displayName = track.custom_name || track.guides.name;
        return (
          <NotesView
            trackId={track.id}
            trackName={displayName}
          />
        );
      }}
    />
  );
}
