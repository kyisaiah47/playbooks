'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import { ChevronsUpDown, Plus, Loader2, ArrowLeft, Check } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

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

interface TrackSelectorProps {
  selectedTrackIds: string[];
  onSelectionChange: (trackIds: string[]) => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function TrackSelector({ selectedTrackIds, onSelectionChange, open: controlledOpen, onOpenChange }: TrackSelectorProps) {
  const [internalOpen, setInternalOpen] = useState(false);

  // Use controlled state if provided, otherwise use internal state
  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const setOpen = onOpenChange || setInternalOpen;
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [guides, setGuides] = useState<Guide[]>([]);
  const [creating, setCreating] = useState(false);
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);
  const [customName, setCustomName] = useState('');

  useEffect(() => {
    fetchTracks();
  }, []);

  async function fetchTracks() {
    try {
      setLoading(true);
      const res = await fetch('/api/tracks?archived=false');

      if (!res.ok) {
        if (res.status === 401) {
          setTracks([]);
          setLoading(false);
          return;
        }
        throw new Error('Failed to fetch tracks');
      }

      const data = await res.json();
      setTracks(data.tracks || []);
    } catch (error) {
      console.error('Error fetching tracks:', error);
    } finally {
      setLoading(false);
    }
  }

  async function fetchGuides() {
    try {
      const res = await fetch('/api/guides?all=true');
      const data = await res.json();
      setGuides(data.guides || []);
    } catch (error) {
      console.error('Error fetching guides:', error);
    }
  }

  async function createTrack() {
    if (!selectedGuide) return;

    try {
      setCreating(true);
      const res = await fetch('/api/tracks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          guide_id: selectedGuide.id,
          custom_name: customName.trim() || null,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to create track');
      }

      const data = await res.json();
      setTracks(prev => [data.track, ...prev]);
      setCreateDialogOpen(false);
      setSearchQuery('');
      setSelectedGuide(null);
      setCustomName('');

      // Auto-select the newly created track
      onSelectionChange([...selectedTrackIds, data.track.id]);
    } catch (error) {
      console.error('Error creating track:', error);
    } finally {
      setCreating(false);
    }
  }

  function handleGuideSelect(guide: Guide) {
    setSelectedGuide(guide);
    setCustomName(''); // Start with empty, will show guide name as placeholder
  }

  function handleBackToGuides() {
    setSelectedGuide(null);
    setCustomName('');
  }

  const handleToggleTrack = (trackId: string) => {
    if (selectedTrackIds.includes(trackId)) {
      onSelectionChange(selectedTrackIds.filter(id => id !== trackId));
    } else {
      onSelectionChange([...selectedTrackIds, trackId]);
    }
  };

  const selectedTracks = tracks.filter(t => selectedTrackIds.includes(t.id));

  const filteredGuides = searchQuery.trim()
    ? guides.filter(g =>
        g.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        g.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : guides;

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full md:w-[280px] justify-between"
          >
            {selectedTracks.length === 0 ? (
              <span className="text-muted-foreground">Select tracks...</span>
            ) : selectedTracks.length === 1 ? (
              <span className="truncate">
                {selectedTracks[0].custom_name || selectedTracks[0].guides.name}
              </span>
            ) : (
              <span>{selectedTracks.length} tracks selected</span>
            )}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[280px] p-0" align="start">
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
                    <CommandItem
                      onSelect={() => {
                        setOpen(false);
                        fetchGuides();
                        setCreateDialogOpen(true);
                      }}
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      <span>New Track</span>
                    </CommandItem>
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
        </PopoverContent>
      </Popover>

      {/* Create Track Dialog */}
      <Dialog open={createDialogOpen} onOpenChange={(open) => {
        setCreateDialogOpen(open);
        if (!open) {
          setSelectedGuide(null);
          setCustomName('');
          setSearchQuery('');
        }
      }}>
        <DialogContent className="max-w-2xl">
          {!selectedGuide ? (
            // Step 1: Select a guide
            <>
              <DialogHeader>
                <DialogTitle>Start a New Track</DialogTitle>
                <DialogDescription>
                  Choose a guide to start working on. You can create multiple tracks from the same guide.
                </DialogDescription>
              </DialogHeader>

              <Command className="rounded-lg border">
                <CommandInput
                  placeholder="Search guides..."
                  value={searchQuery}
                  onValueChange={setSearchQuery}
                />
                <CommandList className="max-h-[400px]">
                  <CommandEmpty>No guides found.</CommandEmpty>
                  <CommandGroup>
                    {filteredGuides.map((guide) => (
                      <CommandItem
                        key={guide.id}
                        onSelect={() => handleGuideSelect(guide)}
                      >
                        <div className="flex-1">
                          <div className="font-medium">{guide.name}</div>
                          <div className="text-xs text-muted-foreground line-clamp-1">
                            {guide.description}
                          </div>
                        </div>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </>
          ) : (
            // Step 2: Name the track
            <>
              <DialogHeader>
                <DialogTitle>Name Your Track</DialogTitle>
                <DialogDescription>
                  Give your track a custom name, or leave it blank to use the guide name.
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <div className="rounded-lg border border-border/40 bg-muted/20 p-4">
                  <div className="text-sm font-medium mb-1">Selected Guide</div>
                  <div className="text-lg font-semibold">{selectedGuide.name}</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {selectedGuide.description}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="track-name">Track Name (Optional)</Label>
                  <Input
                    id="track-name"
                    placeholder={selectedGuide.name}
                    value={customName}
                    onChange={(e) => setCustomName(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !creating) {
                        createTrack();
                      }
                    }}
                    autoFocus
                  />
                  <p className="text-xs text-muted-foreground">
                    Leave blank to use "{selectedGuide.name}"
                  </p>
                </div>

                <div className="flex gap-2 justify-end pt-4">
                  <Button
                    variant="outline"
                    onClick={handleBackToGuides}
                    disabled={creating}
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                  <Button
                    onClick={createTrack}
                    disabled={creating}
                  >
                    {creating ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Creating...
                      </>
                    ) : (
                      <>
                        <Check className="w-4 h-4 mr-2" />
                        Create Track
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
