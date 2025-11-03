"use client"

import * as React from "react"
import { formatDateRange } from "little-date"
import { format } from "date-fns"
import { PlusIcon, ChevronDownIcon } from "lucide-react"
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

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
  const [startDate, setStartDate] = React.useState<Date | undefined>()
  const [endDate, setEndDate] = React.useState<Date | undefined>()
  const [startTime, setStartTime] = React.useState('09:00')
  const [endTime, setEndTime] = React.useState('10:00')
  const [startDateOpen, setStartDateOpen] = React.useState(false)
  const [endDateOpen, setEndDateOpen] = React.useState(false)
  const [allDay, setAllDay] = React.useState(false)
  const [creating, setCreating] = React.useState(false)
  const [selectedEvent, setSelectedEvent] = React.useState<CalendarEvent | null>(null)
  const [detailsDialogOpen, setDetailsDialogOpen] = React.useState(false)
  const [editing, setEditing] = React.useState(false)
  const [deleting, setDeleting] = React.useState(false)

  // Fetch events from the API
  React.useEffect(() => {
    if (!isOpen) return;

    async function fetchEvents() {
      try {
        setLoading(true);
        const res = await fetch('/api/items');

        // Handle unauthorized users (show empty state)
        if (res.status === 401) {
          setEvents([]);
          setLoading(false);
          return;
        }

        if (res.ok) {
          const data = await res.json();
          // Get all items (both events with start_time and tasks with due_date)
          const allItems = data.items || [];
          setEvents(allItems);
        } else {
          setEvents([]);
        }
      } catch (error) {
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

    return filtered;
  }, [date, events])

  const refreshEvents = React.useCallback(async () => {
    const refreshRes = await fetch('/api/items');
    if (refreshRes.ok) {
      const data = await refreshRes.json();
      setEvents(data.items || []);
    }
  }, []);

  const resetForm = React.useCallback(() => {
    setEventTitle('');
    setEventDescription('');
    setStartDate(undefined);
    setEndDate(undefined);
    setStartTime('09:00');
    setEndTime('10:00');
    setAllDay(false);
    setSelectedEvent(null);
  }, []);

  const handleCreateEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!eventTitle.trim() || !startDate) return;

    setCreating(true);
    try {
      const effectiveStartDate = startDate;
      const effectiveEndDate = endDate || startDate;

      const startDateTime = allDay
        ? `${format(effectiveStartDate, 'yyyy-MM-dd')}T00:00:00`
        : `${format(effectiveStartDate, 'yyyy-MM-dd')}T${startTime}:00`;

      const endDateTime = allDay
        ? `${format(effectiveEndDate, 'yyyy-MM-dd')}T23:59:59`
        : `${format(effectiveEndDate, 'yyyy-MM-dd')}T${endTime}:00`;

      const res = await fetch('/api/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: eventTitle.trim(),
          description: eventDescription.trim() || null,
          start_time: startDateTime,
          end_time: endDateTime,
          all_day: allDay,
        }),
      });

      if (res.ok) {
        resetForm();
        setCreateDialogOpen(false);
        await refreshEvents();
      }
    } catch (error) {
      console.error('Error creating event:', error);
    } finally {
      setCreating(false);
    }
  };

  const handleEventClick = (event: CalendarEvent) => {
    setSelectedEvent(event);
    setEventTitle(event.title);
    setEventDescription(event.description || '');

    // Extract dates and times if event has start_time
    if (event.start_time) {
      const eventStartDate = new Date(event.start_time);
      setStartDate(eventStartDate);
      setStartTime(format(eventStartDate, 'HH:mm'));
      setAllDay(event.all_day || false);

      if (event.end_time) {
        const eventEndDate = new Date(event.end_time);
        setEndDate(eventEndDate);
        setEndTime(format(eventEndDate, 'HH:mm'));
      } else {
        setEndDate(eventStartDate);
        setEndTime(format(eventStartDate, 'HH:mm'));
      }
    } else {
      setStartDate(date || new Date());
      setEndDate(date || new Date());
      setStartTime('09:00');
      setEndTime('10:00');
      setAllDay(true);
    }

    setDetailsDialogOpen(true);
  };

  const handleUpdateEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedEvent || !eventTitle.trim() || !startDate) return;

    setEditing(true);
    try {
      const effectiveStartDate = startDate;
      const effectiveEndDate = endDate || startDate;

      const startDateTime = allDay
        ? `${format(effectiveStartDate, 'yyyy-MM-dd')}T00:00:00`
        : `${format(effectiveStartDate, 'yyyy-MM-dd')}T${startTime}:00`;

      const endDateTime = allDay
        ? `${format(effectiveEndDate, 'yyyy-MM-dd')}T23:59:59`
        : `${format(effectiveEndDate, 'yyyy-MM-dd')}T${endTime}:00`;

      const res = await fetch(`/api/items/${selectedEvent.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: eventTitle.trim(),
          description: eventDescription.trim() || null,
          start_time: startDateTime,
          end_time: endDateTime,
          all_day: allDay,
        }),
      });

      if (res.ok) {
        resetForm();
        setDetailsDialogOpen(false);
        await refreshEvents();
      }
    } catch (error) {
      console.error('Error updating event:', error);
    } finally {
      setEditing(false);
    }
  };

  const handleDeleteEvent = async () => {
    if (!selectedEvent) return;

    setDeleting(true);
    try {
      const res = await fetch(`/api/items/${selectedEvent.id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setDetailsDialogOpen(false);
        setSelectedEvent(null);
        await refreshEvents();
      }
    } catch (error) {
      console.error('Error deleting event:', error);
    } finally {
      setDeleting(false);
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
            onClick={() => {
              resetForm();
              setStartDate(date);
              setEndDate(date);
              setCreateDialogOpen(true);
            }}
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
                onClick={() => handleEventClick(event)}
                className="bg-muted after:bg-primary/70 relative rounded-md p-2 pl-6 text-sm after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full cursor-pointer hover:bg-muted/80 transition-colors"
              >
                <div className="font-medium">{event.title}</div>
                <div className="text-muted-foreground text-xs">
                  {event.start_time && event.end_time
                    ? formatDateRange(new Date(event.start_time), new Date(event.end_time))
                    : event.start_time
                    ? format(new Date(event.start_time), 'h:mm a')
                    : 'All day'}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Create Event Dialog */}
      <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
        <DialogContent className="sm:max-w-[425px] z-[200]">
          <DialogHeader>
            <DialogTitle>Create Event</DialogTitle>
            <DialogDescription>
              Add a new event for {date?.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleCreateEvent}>
            <div className="grid gap-4 py-4 max-h-[60vh] overflow-y-auto">
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
              <div className="grid gap-2">
                <Label>From</Label>
                <div className="flex gap-2">
                  <Popover open={startDateOpen} onOpenChange={setStartDateOpen}>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="flex-1 justify-between font-normal">
                        {startDate ? format(startDate, 'MMM d, yyyy') : "Select date"}
                        <ChevronDownIcon className="h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto overflow-hidden p-0 z-[300]" align="start">
                      <Calendar
                        mode="single"
                        selected={startDate}
                        onSelect={(date) => {
                          setStartDate(date);
                          setStartDateOpen(false);
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <Input
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    disabled={allDay}
                    className="w-32"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label>To</Label>
                <div className="flex gap-2">
                  <Popover open={endDateOpen} onOpenChange={setEndDateOpen}>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="flex-1 justify-between font-normal">
                        {endDate ? format(endDate, 'MMM d, yyyy') : "Select date"}
                        <ChevronDownIcon className="h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto overflow-hidden p-0 z-[300]" align="start">
                      <Calendar
                        mode="single"
                        selected={endDate}
                        onSelect={(date) => {
                          setEndDate(date);
                          setEndDateOpen(false);
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <Input
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    disabled={allDay}
                    className="w-32"
                  />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setCreateDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={creating || !eventTitle.trim() || !startDate}>
                {creating ? "Creating..." : "Create Event"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Event Details/Edit Dialog */}
      <Dialog open={detailsDialogOpen} onOpenChange={setDetailsDialogOpen}>
        <DialogContent className="sm:max-w-[425px] z-[200]">
          <DialogHeader>
            <DialogTitle>Event Details</DialogTitle>
            <DialogDescription>
              View or edit event details
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleUpdateEvent}>
            <div className="grid gap-4 py-4 max-h-[60vh] overflow-y-auto">
              <div className="grid gap-2">
                <Label htmlFor="edit-title">Title</Label>
                <Input
                  id="edit-title"
                  value={eventTitle}
                  onChange={(e) => setEventTitle(e.target.value)}
                  placeholder="Event title"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-description">Description</Label>
                <Input
                  id="edit-description"
                  value={eventDescription}
                  onChange={(e) => setEventDescription(e.target.value)}
                  placeholder="Event description (optional)"
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="edit-all-day"
                  checked={allDay}
                  onChange={(e) => setAllDay(e.target.checked)}
                  className="cursor-pointer"
                />
                <Label htmlFor="edit-all-day" className="cursor-pointer">All day event</Label>
              </div>
              <div className="grid gap-2">
                <Label>From</Label>
                <div className="flex gap-2">
                  <Popover open={startDateOpen} onOpenChange={setStartDateOpen}>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="flex-1 justify-between font-normal">
                        {startDate ? format(startDate, 'MMM d, yyyy') : "Select date"}
                        <ChevronDownIcon className="h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto overflow-hidden p-0 z-[300]" align="start">
                      <Calendar
                        mode="single"
                        selected={startDate}
                        onSelect={(date) => {
                          setStartDate(date);
                          setStartDateOpen(false);
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <Input
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    disabled={allDay}
                    className="w-32"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label>To</Label>
                <div className="flex gap-2">
                  <Popover open={endDateOpen} onOpenChange={setEndDateOpen}>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="flex-1 justify-between font-normal">
                        {endDate ? format(endDate, 'MMM d, yyyy') : "Select date"}
                        <ChevronDownIcon className="h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto overflow-hidden p-0 z-[300]" align="start">
                      <Calendar
                        mode="single"
                        selected={endDate}
                        onSelect={(date) => {
                          setEndDate(date);
                          setEndDateOpen(false);
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <Input
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    disabled={allDay}
                    className="w-32"
                  />
                </div>
              </div>
            </div>
            <DialogFooter className="flex-col gap-2 sm:flex-row">
              <Button
                type="button"
                variant="destructive"
                onClick={handleDeleteEvent}
                disabled={deleting || editing}
                className="sm:mr-auto"
              >
                {deleting ? "Deleting..." : "Delete"}
              </Button>
              <div className="flex gap-2">
                <Button type="button" variant="outline" onClick={() => setDetailsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" disabled={editing || deleting || !eventTitle.trim() || !startDate}>
                  {editing ? "Saving..." : "Save Changes"}
                </Button>
              </div>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
