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

  useEffect(() => {
    if (selectedTrackIds.length > 0) {
      fetchTracks();
    }
  }, [selectedTrackIds]);

  async function fetchTracks() {
    try {
      setLoading(true);
      const res = await fetch('/api/tracks?archived=false');

      if (!res.ok) {
        if (res.status === 401) {
          setTracks([]);
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
    } catch (error) {
      console.error('Error fetching tracks:', error);
    } finally {
      setLoading(false);
    }
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

  // Show loading state while fetching tracks
  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <p className="text-muted-foreground">Loading tracks...</p>
      </div>
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
  return (
    <Tabs defaultValue={tracks[0].id} className="h-full flex flex-col">
      <div className="border-b bg-background px-4">
        <TabsList className="h-12">
          {tracks.map((track) => {
            const displayName = track.custom_name || track.guides.name;
            return (
              <TabsTrigger key={track.id} value={track.id} className="text-sm">
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
