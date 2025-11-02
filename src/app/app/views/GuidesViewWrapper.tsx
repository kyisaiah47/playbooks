'use client';

import { GuidesView } from './GuidesView';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState, useEffect } from 'react';
import { FolderOpen } from 'lucide-react';

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
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if (selectedTrackIds.length > 0) {
      fetchTracks();
    } else {
      setInitialLoad(false);
    }
  }, [selectedTrackIds]);

  async function fetchTracks() {
    try {
      setLoading(true);
      const res = await fetch('/api/tracks?archived=false');

      if (!res.ok) {
        if (res.status === 401) {
          setTracks([]);
          setInitialLoad(false);
          return;
        }
        throw new Error('Failed to fetch tracks');
      }

      const data = await res.json();
      const allTracks = data.tracks || [];

      // Filter to only selected tracks
      const selectedTracks = allTracks.filter((t: Track) =>
        selectedTrackIds.includes(t.id)
      );
      setTracks(selectedTracks);
      setInitialLoad(false);
    } catch (error) {
      console.error('Error fetching tracks:', error);
      setInitialLoad(false);
    } finally {
      setLoading(false);
    }
  }

  // Show loading on initial page load while fetching tracks from localStorage
  if (initialLoad && selectedTrackIds.length > 0) {
    return (
      <div className="h-full flex items-center justify-center">
        <p className="text-muted-foreground">Loading tracks...</p>
      </div>
    );
  }

  // Browse mode - no tracks selected
  if (selectedTrackIds.length === 0) {
    return (
      <GuidesView
        onViewChange={onViewChange}
        setActions={setActions}
      />
    );
  }

  // Single track selected
  if (selectedTrackIds.length === 1 && tracks.length === 1) {
    const track = tracks[0];
    return (
      <GuidesView
        trackId={track.id}
        onViewChange={onViewChange}
        setActions={setActions}
      />
    );
  }

  // Multiple tracks selected - tabbed interface
  if (selectedTrackIds.length > 1) {
    if (loading) {
      return (
        <div className="h-full flex items-center justify-center">
          <p className="text-muted-foreground">Loading tracks...</p>
        </div>
      );
    }

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

    return (
      <Tabs defaultValue={tracks[0].id} className="h-full flex flex-col">
        <div className="px-6 pt-3 pb-1">
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
            <GuidesView
              trackId={track.id}
              onViewChange={onViewChange}
              setActions={setActions}
            />
          </TabsContent>
        ))}
      </Tabs>
    );
  }

  // Loading state while tracks are being fetched
  return (
    <div className="h-full flex items-center justify-center">
      <p className="text-muted-foreground">Loading...</p>
    </div>
  );
}
