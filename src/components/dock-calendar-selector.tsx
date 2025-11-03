"use client"

import * as React from "react"
import { formatDateRange } from "little-date"
import { format } from "date-fns"
import { PlusIcon } from "lucide-react"
import { isSameDay } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface CalendarEvent {
  id: string;
  title: string;
  start_time: string;
  end_time: string;
  due_date?: string;
}

interface DockCalendarSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  noWrapper?: boolean;
}

export function DockCalendarSelector({
  isOpen,
  onClose,
  noWrapper = false
}: DockCalendarSelectorProps) {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [events, setEvents] = React.useState<CalendarEvent[]>([])
  const [loading, setLoading] = React.useState(true)
  const [createDialogOpen, setCreateDialogOpen] = React.useState(false)
  const [eventTitle, setEventTitle] = React.useState('')
  const [eventDescription, setEventDescription] = React.useState('')
  const [eventTime, setEventTime] = React.useState('09:00')
  const [allDay, setAllDay] = React.useState(false)
  const [creating, setCreating] = React.useState(false)

  // Fetch events from the API
  React.useEffect(() => {
    if (!isOpen) return;

    async function fetchEvents() {
      try {
        setLoading(true);
        console.log('Fetching events from /api/items...');
        const res = await fetch('/api/items');
        console.log('Response status:', res.status);

        // Handle unauthorized users (show empty state)
        if (res.status === 401) {
          console.log('Unauthorized - showing empty state');
          setEvents([]);
          setLoading(false);
          return;
        }

        if (res.ok) {
          const data = await res.json();
          console.log('Raw data from API:', data);
          console.log('All items:', data.items);

          // Get all items (both events with start_time and tasks with due_date)
          const allItems = data.items || [];
          console.log('All items (events + tasks):', allItems);
          setEvents(allItems);
        } else {
          console.error('Failed to fetch items:', res.status, res.statusText);
          setEvents([]);
        }
      } catch (error) {
        console.error('Error fetching calendar events:', error);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, [isOpen]);

  // Filter events for the selected date
  const eventsForSelectedDate = React.useMemo(() => {
    if (!date) return [];

    const filtered = events.filter(event => {
      // Check if item has start_time (calendar event) or due_date (task)
      if (event.start_time) {
        return isSameDay(new Date(event.start_time), date);
      } else if (event.due_date) {
        return isSameDay(new Date(event.due_date), date);
      }
      return false;
    });

    console.log('Selected date:', date);
    console.log('Filtered items for date:', filtered);
    return filtered;
  }, [date, events])

  const handleCreateEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!eventTitle.trim() || !date) return;

    setCreating(true);
    try {
      const startDateTime = allDay
        ? `${format(date, 'yyyy-MM-dd')}T00:00:00`
        : `${format(date, 'yyyy-MM-dd')}T${eventTime}:00`;

      const res = await fetch('/api/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: eventTitle.trim(),
          description: eventDescription.trim() || null,
          start_time: startDateTime,
          all_day: allDay,
        }),
      });

      if (res.ok) {
        // Reset form
        setEventTitle('');
        setEventDescription('');
        setEventTime('09:00');
        setAllDay(false);
        setCreateDialogOpen(false);

        // Refresh events
        const refreshRes = await fetch('/api/items');
        if (refreshRes.ok) {
          const data = await refreshRes.json();
          setEvents(data.items || []);
        }
      }
    } catch (error) {
      console.error('Error creating event:', error);
    } finally {
      setCreating(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="w-fit py-4">
      <div className="px-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="bg-transparent p-0"
          required
        />
      </div>
      <div className="flex flex-col items-start gap-3 border-t px-4 !pt-4">
        <div className="flex w-full items-center justify-between px-1">
          <div className="text-sm font-medium">
            {date?.toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="size-6"
            title="Add Event"
            onClick={() => setCreateDialogOpen(true)}
          >
            <PlusIcon />
            <span className="sr-only">Add Event</span>
          </Button>
        </div>
        <div className="flex w-full flex-col gap-2">
          {loading ? (
            <div className="text-muted-foreground text-xs text-center py-4">
              Loading events...
            </div>
          ) : eventsForSelectedDate.length === 0 ? (
            <div className="text-muted-foreground text-xs text-center py-4">
              No events for this day
            </div>
          ) : (
            eventsForSelectedDate.map((event) => (
              <div
                key={event.id}
                className="bg-muted after:bg-primary/70 relative rounded-md p-2 pl-6 text-sm after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full"
              >
                <div className="font-medium">{event.title}</div>
                <div className="text-muted-foreground text-xs">
                  {formatDateRange(new Date(event.start_time), new Date(event.end_time))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Create Event Dialog */}
      <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create Event</DialogTitle>
            <DialogDescription>
              Add a new event for {date?.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleCreateEvent}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="event-title">Title</Label>
                <Input
                  id="event-title"
                  value={eventTitle}
                  onChange={(e) => setEventTitle(e.target.value)}
                  placeholder="Event title"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="event-description">Description</Label>
                <Input
                  id="event-description"
                  value={eventDescription}
                  onChange={(e) => setEventDescription(e.target.value)}
                  placeholder="Event description (optional)"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="event-time">Time</Label>
                <Input
                  id="event-time"
                  type="time"
                  value={eventTime}
                  onChange={(e) => setEventTime(e.target.value)}
                  disabled={allDay}
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="all-day"
                  checked={allDay}
                  onChange={(e) => setAllDay(e.target.checked)}
                  className="cursor-pointer"
                />
                <Label htmlFor="all-day" className="cursor-pointer">All day event</Label>
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setCreateDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={creating || !eventTitle.trim()}>
                {creating ? "Creating..." : "Create Event"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
