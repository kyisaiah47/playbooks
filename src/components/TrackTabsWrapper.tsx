'use client';

import { useState, useEffect, ReactNode } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FolderOpen } from 'lucide-react';
import { useDataCache } from '@/contexts/DataCacheContext';

interface Track {
  id: string;
  guide_id: string;
  custom_name: string | null;
  progress: number;
  guides: {
    id: string;
    name: string;
    description: string;
    icon: string | null;
  };
}

interface TrackTabsWrapperProps {
  selectedTrackIds: string[];
  emptyState?: ReactNode;
  renderView: (track: Track) => ReactNode;
  renderBrowseMode?: () => ReactNode;
}

export function TrackTabsWrapper({
  selectedTrackIds,
  emptyState,
  renderView,
  renderBrowseMode,
}: TrackTabsWrapperProps) {
  const { tracks: cachedTracks, fetchTracks } = useDataCache();
  const [tracks, setTracks] = useState<Track[]>([]);

  useEffect(() => {
    async function loadTracks() {
      if (selectedTrackIds.length === 0) {
        setTracks([]);
        return;
      }

      // Try cached tracks first
      if (cachedTracks && cachedTracks.length > 0) {
        const selectedTracks = cachedTracks.filter((t: Track) =>
          selectedTrackIds.includes(t.id)
        );
        setTracks(selectedTracks);
        return;
      }

      // Only fetch if not in cache
      try {
        const allTracks = await fetchTracks(false);
        const selectedTracks = allTracks.filter((t: Track) =>
          selectedTrackIds.includes(t.id)
        );
        setTracks(selectedTracks);
      } catch (error) {
        console.error('Error loading tracks:', error);
        setTracks([]);
      }
    }

    loadTracks();
  }, [selectedTrackIds, cachedTracks]);

  // Browse mode - no tracks selected
  if (selectedTrackIds.length === 0) {
    if (renderBrowseMode) {
      return <>{renderBrowseMode()}</>;
    }
    return (
      emptyState || (
        <div className="h-full flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <FolderOpen className="w-16 h-16 mx-auto mb-4 opacity-20" />
            <p className="text-lg font-medium">No tracks selected</p>
            <p className="text-sm">Select a track to get started</p>
          </div>
        </div>
      )
    );
  }

  // No tracks found after loading
  if (tracks.length === 0) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center text-muted-foreground">
          <FolderOpen className="w-16 h-16 mx-auto mb-4 opacity-20" />
          <p className="text-lg font-medium">No tracks found</p>
          <p className="text-sm">The selected tracks may have been deleted</p>
        </div>
      </div>
    );
  }

  // Single track selected
  if (tracks.length === 1) {
    return <>{renderView(tracks[0])}</>;
  }

  // Multiple tracks selected - tabbed interface
  return (
    <Tabs defaultValue={tracks[0].id} className="h-full flex flex-col">
      <div className="border-b flex items-center justify-center py-2">
        <TabsList className="h-8 bg-transparent p-0 gap-1">
          {tracks.map((track) => {
            const displayName = track.custom_name || track.guides.name;
            return (
              <TabsTrigger
                key={track.id}
                value={track.id}
                className="text-xs px-3 py-1 data-[state=active]:bg-muted data-[state=inactive]:bg-transparent"
              >
                {displayName}
              </TabsTrigger>
            );
          })}
        </TabsList>
      </div>

      {tracks.map((track) => (
        <TabsContent key={track.id} value={track.id} className="flex-1 overflow-hidden mt-0">
          {renderView(track)}
        </TabsContent>
      ))}
    </Tabs>
  );
}
