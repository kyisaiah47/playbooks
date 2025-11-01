'use client';

import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { CalendarIcon, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

interface UserGuide {
  id: string;
  guide_id: string;
  custom_name: string | null;
  guides: {
    id: string;
    name: string;
  };
}

interface EventCreateFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedDate?: Date;
  onEventCreated?: () => void;
}

export function EventCreateForm({
  open,
  onOpenChange,
  selectedDate,
  onEventCreated,
}: EventCreateFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(
    selectedDate ? format(selectedDate, 'yyyy-MM-dd') : format(new Date(), 'yyyy-MM-dd')
  );
  const [time, setTime] = useState('09:00');
  const [allDay, setAllDay] = useState(false);
  const [selectedNoteId, setSelectedNoteId] = useState<string>('');
  const [notes, setNotes] = useState<UserGuide[]>([]);
  const [loadingNotes, setLoadingNotes] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch notes when dialog opens
  useEffect(() => {
    if (open) {
      setLoadingNotes(true);
      fetch('/api/notes?archived=false')
        .then(res => res.json())
        .then(data => {
          setNotes(data.notes || []);
        })
        .catch(err => {
          console.error('Error fetching notes:', err);
        })
        .finally(() => {
          setLoadingNotes(false);
        });
    }
  }, [open]);

  // Update date when selectedDate changes
  useEffect(() => {
    if (selectedDate) {
      setDate(format(selectedDate, 'yyyy-MM-dd'));
    }
  }, [selectedDate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!title.trim()) {
      setError('Event title is required');
      return;
    }

    setLoading(true);

    try {
      // Combine date and time for start_time
      const startDateTime = allDay
        ? `${date}T00:00:00`
        : `${date}T${time}:00`;

      const response = await fetch('/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title.trim(),
          description: description.trim() || null,
          start_time: startDateTime,
          all_day: allDay,
          user_guide_id: selectedNoteId || null,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to create event');
      }

      // Reset form
      setTitle('');
      setDescription('');
      setTime('09:00');
      setAllDay(false);
      setSelectedNoteId('');
      onOpenChange(false);

      // Trigger refresh
      if (onEventCreated) {
        onEventCreated();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create event');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Create Event</DialogTitle>
          <DialogDescription>
            Add a new event to your calendar
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium">
              Event Title <span className="text-destructive">*</span>
            </label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Team meeting, Birthday party..."
              autoFocus
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add details about this event..."
              rows={3}
              className={cn(
                'w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm',
                'placeholder:text-muted-foreground',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                'disabled:cursor-not-allowed disabled:opacity-50'
              )}
            />
          </div>

          {/* Link to Note */}
          <div className="space-y-2">
            <label htmlFor="note" className="text-sm font-medium">
              Link to Note <span className="text-xs text-muted-foreground">(optional)</span>
            </label>
            {loadingNotes ? (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Loader2 className="w-3 h-3 animate-spin" />
                Loading notes...
              </div>
            ) : (
              <select
                id="note"
                value={selectedNoteId}
                onChange={(e) => setSelectedNoteId(e.target.value)}
                className={cn(
                  'w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                  'disabled:cursor-not-allowed disabled:opacity-50'
                )}
              >
                <option value="">No note (standalone event)</option>
                {notes.map((note) => (
                  <option key={note.id} value={note.id}>
                    {note.custom_name || note.guides?.name || 'Untitled Note'}
                  </option>
                ))}
              </select>
            )}
            <p className="text-xs text-muted-foreground">
              Link this event to a note to filter it in the calendar sidebar
            </p>
          </div>

          {/* Date */}
          <div className="space-y-2">
            <label htmlFor="date" className="text-sm font-medium">
              Date <span className="text-destructive">*</span>
            </label>
            <div className="relative">
              <Input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          {/* All Day Toggle */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="allDay"
              checked={allDay}
              onChange={(e) => setAllDay(e.target.checked)}
              className="w-4 h-4 rounded border-input"
            />
            <label htmlFor="allDay" className="text-sm font-medium cursor-pointer">
              All day event
            </label>
          </div>

          {/* Time (only if not all day) */}
          {!allDay && (
            <div className="space-y-2">
              <label htmlFor="time" className="text-sm font-medium">
                Time
              </label>
              <Input
                id="time"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="rounded-lg bg-destructive/10 text-destructive px-3 py-2 text-sm">
              {error}
            </div>
          )}

          {/* Footer */}
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              Create Event
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
