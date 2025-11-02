'use client';

import { GuidesView } from './GuidesView';
import { TrackTabsWrapper } from '@/components/TrackTabsWrapper';

interface GuidesViewWrapperProps {
  selectedTrackIds: string[];
  onViewChange?: (view: 'templates' | 'reflection' | 'overview') => void;
  setActions?: (actions: any) => void;
}

export function GuidesViewWrapper({
  selectedTrackIds,
  onViewChange,
  setActions
}: GuidesViewWrapperProps) {
  return (
    <TrackTabsWrapper
      selectedTrackIds={selectedTrackIds}
      renderBrowseMode={() => (
        <GuidesView
          onViewChange={onViewChange}
          setActions={setActions}
        />
      )}
      renderView={(track) => (
        <GuidesView
          trackId={track.id}
          onViewChange={onViewChange}
          setActions={setActions}
        />
      )}
    />
  );
}
