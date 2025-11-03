"use client"

import * as React from "react"
import { formatDateRange } from "little-date"
import { PlusIcon } from "lucide-react"
import { isSameDay } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"

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

          // Filter only items with start_time (calendar events)
          const calendarEvents = (data.items || []).filter((item: CalendarEvent) => item.start_time);
          console.log('Filtered calendar events (with start_time):', calendarEvents);
          setEvents(calendarEvents);
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
      if (!event.start_time) return false;
      return isSameDay(new Date(event.start_time), date);
    });

    console.log('Selected date:', date);
    console.log('Filtered events for date:', filtered);
    return filtered;
  }, [date, events])

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
    </div>
  )
}
