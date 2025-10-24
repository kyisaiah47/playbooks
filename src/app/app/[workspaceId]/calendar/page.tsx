'use client';

import { useState, useEffect, useCallback } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { Calendar as CalendarIcon, Plus, Loader2, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MonthView } from '@/components/app/calendar/MonthView';
import { EventList } from '@/components/app/calendar/EventList';
import { EventCreateForm } from '@/components/app/calendar/EventCreateForm';
import { CalendarEvent, Task } from '@/types/workspace';
import { startOfMonth, endOfMonth, format } from 'date-fns';

export default function CalendarPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const workspaceId = params.workspaceId as string;

  const [currentDate, setCurrentDate] = useState(new Date());
  const [allEvents, setAllEvents] = useState<CalendarEvent[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);

  // Get selected note IDs from URL
  const selectedNoteIds = searchParams.get('calendarNotes')?.split(',').filter(Boolean) || [];

  // Filter events by selected notes - only show events if notes are selected
  const events = selectedNoteIds.length > 0
    ? allEvents.filter(event => event.user_guide_id && selectedNoteIds.includes(event.user_guide_id))
    : [];

  // Fetch calendar events
  const fetchEvents = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Get start and end dates for the current month view
      const monthStart = startOfMonth(currentDate);
      const monthEnd = endOfMonth(currentDate);

      // Fetch events
      const eventsResponse = await fetch(
        `/api/calendar?start_date=${format(monthStart, 'yyyy-MM-dd')}&end_date=${format(monthEnd, 'yyyy-MM-dd')}`
      );

      if (!eventsResponse.ok) {
        const errorData = await eventsResponse.json();
        console.error('Calendar API error:', errorData);
        throw new Error(errorData.error || 'Failed to fetch events');
      }

      const eventsData = await eventsResponse.json();
      setAllEvents(eventsData.events || []);

      // Fetch tasks with due dates
      const tasksResponse = await fetch('/api/tasks');

      if (!tasksResponse.ok) {
        throw new Error('Failed to fetch tasks');
      }

      const tasksData = await tasksResponse.json();
      setTasks(tasksData.tasks || []);
    } catch (err) {
      console.error('Error fetching calendar data:', err);
      setError(err instanceof Error ? err.message : 'Failed to load calendar');
    } finally {
      setLoading(false);
    }
  }, [currentDate]);

  // Fetch data on mount and when currentDate changes
  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setCreateDialogOpen(true);
  };

  const handleCreateEvent = () => {
    setSelectedDate(undefined);
    setCreateDialogOpen(true);
  };

  const handleEventCreated = () => {
    // Refresh events after creating a new one
    fetchEvents();
  };

  const handleEventClick = (event: CalendarEvent) => {
    setSelectedEvent(event);
  };

  const handleDeleteEvent = async (eventId: string) => {
    try {
      const response = await fetch(`/api/calendar/${eventId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete event');
      }

      // Refresh events after deletion
      fetchEvents();
    } catch (err) {
      console.error('Error deleting event:', err);
    }
  };

  return (
    <div className="h-full w-full flex flex-col overflow-hidden">
      {/* Header */}
      <div className="border-b border-border/40 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#6366f1]/10 flex items-center justify-center">
              <CalendarIcon className="w-4 h-4 text-[#6366f1]" />
            </div>
            <div>
              <h1 className="text-xl font-semibold">Calendar</h1>
              <p className="text-xs text-muted-foreground">View and manage your events</p>
            </div>
          </div>
          <Button onClick={handleCreateEvent} size="sm">
            <Plus className="w-4 h-4" />
            Add Event
          </Button>
        </div>
      </div>

      {/* Error State */}
      {error && (
        <div className="mx-6 mt-4 rounded-lg border border-destructive/50 bg-destructive/10 p-4">
          <p className="text-sm text-destructive">{error}</p>
          <Button
            variant="outline"
            size="sm"
            onClick={fetchEvents}
            className="mt-2"
          >
            Try Again
          </Button>
        </div>
      )}

      {/* Loading State */}
      {loading && !error ? (
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <Loader2 className="w-8 h-8 animate-spin text-[#6366f1]" />
            <p className="text-sm text-muted-foreground">Loading calendar...</p>
          </div>
        </div>
      ) : (
        /* Main Content */
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 overflow-hidden p-6">
          {/* Calendar View - Takes 2 columns on large screens */}
          <div className="lg:col-span-2 flex flex-col min-h-0">
            <MonthView
              currentDate={currentDate}
              onDateChange={setCurrentDate}
              events={events}
              tasks={tasks}
              onDateClick={handleDateClick}
              onEventClick={handleEventClick}
            />
          </div>

          {/* Upcoming Events Sidebar - Takes 1 column */}
          <div className="lg:col-span-1 overflow-y-auto space-y-6">
            <EventList
              events={events}
              tasks={tasks}
              onEventClick={handleEventClick}
            />

            {/* Selected Event Details */}
            {selectedEvent && (
              <div className="rounded-lg border border-border/40 bg-background overflow-hidden">
                <div className="px-4 py-3 border-b border-border/40 flex items-center justify-between">
                  <h3 className="text-sm font-semibold">Event Details</h3>
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="p-4 space-y-4">
                  <div>
                    <h4 className="text-base font-semibold mb-2">{selectedEvent.title}</h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CalendarIcon className="w-4 h-4" />
                      <span>{format(new Date(selectedEvent.date), 'EEEE, MMMM d, yyyy')}</span>
                    </div>
                  </div>

                  {selectedEvent.description && (
                    <div>
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {selectedEvent.description}
                      </p>
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        handleDeleteEvent(selectedEvent.id);
                        setSelectedEvent(null);
                      }}
                      className="text-sm text-destructive hover:text-destructive/80 transition-colors flex items-center gap-2"
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete Event
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Create Event Dialog */}
      <EventCreateForm
        open={createDialogOpen}
        onOpenChange={setCreateDialogOpen}
        selectedDate={selectedDate}
        onEventCreated={handleEventCreated}
      />
    </div>
  );
}
