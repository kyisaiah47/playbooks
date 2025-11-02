'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Plus, Loader2, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MonthView } from '@/components/app/calendar/MonthView';
import { WeekView } from '@/components/app/calendar/WeekView';
import { DayView } from '@/components/app/calendar/DayView';
import { EventList } from '@/components/app/calendar/EventList';
import { EventCreateForm } from '@/components/app/calendar/EventCreateForm';
import { CalendarEvent, Task } from '@/types/workspace';
import { format } from 'date-fns';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

type CalendarViewType = 'month' | 'week' | 'day';

interface CalendarViewProps {
  selectedTrackIds: string[];
}

export function CalendarView({ selectedTrackIds }: CalendarViewProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<CalendarViewType>('month');
  const [allItems, setAllItems] = useState<CalendarEvent[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);

  // Filter items by selected tracks, or show all
  const filteredItems = selectedTrackIds.length > 0
    ? allItems.filter(item => item.track_id && selectedTrackIds.includes(item.track_id))
    : allItems;

  // Separate events (items with start_time) from tasks (items with due_date but no start_time)
  const events = filteredItems.filter(item => item.start_time);
  const filteredTasks = filteredItems.filter(item => item.due_date && !item.start_time);

  // Fetch calendar events
  const fetchEvents = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch all items (both events and tasks)
      const itemsResponse = await fetch('/api/items');

      if (!itemsResponse.ok) {
        // If unauthorized, just show empty state
        if (itemsResponse.status === 401) {
          setAllItems([]);
          setTasks([]);
          setLoading(false);
          return;
        }
        const errorData = await itemsResponse.json().catch(() => ({}));
        console.error('Items API error:', errorData);
        throw new Error(errorData.error || 'Failed to fetch items');
      }

      const itemsData = await itemsResponse.json();
      setAllItems(itemsData.items || []);
      setTasks(itemsData.items || []);
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
      const response = await fetch(`/api/items/${eventId}`, {
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
    <motion.div
      className="h-full w-full flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
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
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <p className="text-sm text-muted-foreground">Loading calendar...</p>
          </div>
        </div>
      ) : (
        /* Main Content */
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 overflow-hidden p-6">
          {/* Calendar View - Takes 2 columns on large screens */}
          <div className="lg:col-span-2 flex flex-col min-h-0">
            {view === 'month' && (
              <MonthView
                currentDate={currentDate}
                onDateChange={setCurrentDate}
                events={events}
                tasks={filteredTasks}
                onDateClick={handleDateClick}
                onEventClick={handleEventClick}
                view={view}
                onViewChange={setView}
                onCreateEvent={handleCreateEvent}
              />
            )}
            {view === 'week' && (
              <WeekView
                currentDate={currentDate}
                onDateChange={setCurrentDate}
                events={events}
                tasks={filteredTasks}
                onDateClick={handleDateClick}
                onEventClick={handleEventClick}
                view={view}
                onViewChange={setView}
                onCreateEvent={handleCreateEvent}
              />
            )}
            {view === 'day' && (
              <DayView
                currentDate={currentDate}
                onDateChange={setCurrentDate}
                events={events}
                tasks={filteredTasks}
                onDateClick={handleDateClick}
                onEventClick={handleEventClick}
                view={view}
                onViewChange={setView}
                onCreateEvent={handleCreateEvent}
              />
            )}
          </div>

          {/* Upcoming Events Sidebar - Takes 1 column */}
          <div className="lg:col-span-1 overflow-y-auto space-y-6">
            <EventList
              events={events}
              tasks={filteredTasks}
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
    </motion.div>
  );
}
