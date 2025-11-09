'use client';

import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { useDataCache } from '@/contexts/DataCacheContext';
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import { Plus, Loader2 } from 'lucide-react';

interface Guide {
  id: string;
  name: string;
  description: string;
  icon: string | null;
}

interface Track {
  id: string;
  guide_id: string;
  custom_name: string | null;
  progress: number;
  archived: boolean;
  created_at: string;
  guides: Guide;
}

interface DockTrackSelectorProps {
  selectedTrackIds: string[];
  onSelectionChange: (trackIds: string[]) => void;
  isOpen: boolean;
  onClose: () => void;
  noWrapper?: boolean;
  onOpenCreateDialog?: () => void;
  refreshKey?: number;
}

export function DockTrackSelector({
  selectedTrackIds,
  onSelectionChange,
  isOpen,
  onClose,
  noWrapper = false,
  onOpenCreateDialog,
  refreshKey = 0
}: DockTrackSelectorProps) {
  const { tracks: cachedTracks, fetchTracks } = useDataCache();
  const [loading, setLoading] = useState(false);

  // Only fetch once on mount if no cache
  useEffect(() => {
    if (!cachedTracks || cachedTracks.length === 0) {
      loadTracks();
    }
  }, []); // Empty deps - only run on mount

  // Fetch when refreshKey changes
  useEffect(() => {
    if (refreshKey > 0) {
      loadTracks();
    }
  }, [refreshKey]);

  async function loadTracks() {
    setLoading(true);
    try {
      await fetchTracks(true);
    } catch {
      // Ignore fetch errors
    } finally {
      setLoading(false);
    }
  }

  const tracks = cachedTracks || [];


  const handleToggleTrack = (trackId: string) => {
    if (selectedTrackIds.includes(trackId)) {
      onSelectionChange(selectedTrackIds.filter(id => id !== trackId));
    } else {
      onSelectionChange([...selectedTrackIds, trackId]);
    }
  };

  if (!isOpen) return null;

  const commandContent = (
    <Command>
      <CommandInput placeholder="Search tracks..." />
      <CommandList>
        {loading ? (
          <div className="py-6 text-center text-sm">
            <Loader2 className="w-4 h-4 animate-spin mx-auto" />
          </div>
        ) : (
          <>
            {tracks.length > 0 && (
              <>
                <CommandGroup>
                  {tracks.map((track) => {
                    const displayName = track.custom_name || track.guides.name;
                    const isSelected = selectedTrackIds.includes(track.id);

                    return (
                      <CommandItem
                        key={track.id}
                        onSelect={() => handleToggleTrack(track.id)}
                      >
                        <Checkbox
                          checked={isSelected}
                          className="mr-2"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="truncate text-sm">{displayName}</div>
                          {track.custom_name && track.guides && (
                            <div className="text-xs text-muted-foreground truncate">
                              {track.guides.name}
                            </div>
                          )}
                        </div>
                        <Badge variant="outline" className="ml-2 text-xs">
                          {track.progress}%
                        </Badge>
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
                <CommandSeparator />
              </>
            )}
            <CommandGroup>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (onOpenCreateDialog) {
                    onOpenCreateDialog();
                  }
                }}
                className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 w-full"
              >
                <Plus className="mr-2 h-4 w-4" />
                <span>New Track</span>
              </button>
            </CommandGroup>
            {tracks.length === 0 && (
              <div className="py-2 px-2 text-center text-xs text-muted-foreground">
                No tracks yet. Create your first one!
              </div>
            )}
          </>
        )}
      </CommandList>
    </Command>
  );

  return (
    <>
      {noWrapper ? (
        commandContent
      ) : (
        <div className="w-[280px] bg-background border border-border rounded-xl shadow-lg overflow-hidden">
          {commandContent}
        </div>
      )}
    </>
  );
}
