'use client';

import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Check, Loader2 } from 'lucide-react';

interface Guide {
  id: string;
  name: string;
  description: string;
  icon: string | null;
}

interface CreateTrackDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onTrackCreated: () => void;
}

export function CreateTrackDialog({ open, onOpenChange, onTrackCreated }: CreateTrackDialogProps) {
  const [guides, setGuides] = useState<Guide[]>([]);
  const [creating, setCreating] = useState(false);
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);
  const [customName, setCustomName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (open) {
      fetchGuides();
    }
  }, [open]);

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

      setSelectedGuide(null);
      setCustomName('');
      setSearchQuery('');
      onOpenChange(false);
      onTrackCreated();
    } catch (error) {
      console.error('Error creating track:', error);
    } finally {
      setCreating(false);
    }
  }

  function handleGuideSelect(guide: Guide) {
    setSelectedGuide(guide);
    setCustomName('');
  }

  function handleBackToGuides() {
    setSelectedGuide(null);
    setCustomName('');
  }

  const filteredGuides = searchQuery.trim()
    ? guides.filter(g =>
        g.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        g.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : guides;

  return (
    <Dialog open={open} onOpenChange={(open) => {
      onOpenChange(open);
      if (!open) {
        setSelectedGuide(null);
        setCustomName('');
        setSearchQuery('');
      }
    }}>
      <DialogContent className="max-w-2xl">
        {!selectedGuide ? (
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
  );
}
