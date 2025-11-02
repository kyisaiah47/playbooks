'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  format,
  addDays,
  subDays,
  isSameDay,
  isToday,
} from 'date-fns';
import { CalendarEvent, Task } from '@/types/workspace';
import { cn } from '@/lib/utils';

interface DayViewProps {
  currentDate: Date;
  onDateChange: (date: Date) => void;
  events: CalendarEvent[];
  tasks: Task[];
  onDateClick: (date: Date) => void;
  onEventClick?: (event: CalendarEvent) => void;
  view: 'month' | 'week' | 'day';
  onViewChange: (view: 'month' | 'week' | 'day') => void;
  onCreateEvent: () => void;
}

export function DayView({
  currentDate,
  onDateChange,
  events,
  tasks,
  onDateClick,
  onEventClick,
  view,
  onViewChange,
  onCreateEvent,
}: DayViewProps) {
  const handlePreviousDay = () => {
    onDateChange(subDays(currentDate, 1));
  };

  const handleNextDay = () => {
    onDateChange(addDays(currentDate, 1));
  };

  const handleToday = () => {
    onDateChange(new Date());
  };

  // Get events for the current date
  const dayEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    return isSameDay(eventDate, currentDate);
  });

  // Get tasks due on the current date
  const dayTasks = tasks.filter(task => {
    if (!task.due_date) return false;
    const taskDate = new Date(task.due_date);
    return isSameDay(taskDate, currentDate);
  });

  const hours = Array.from({ length: 24 }, (_, i) => i);

  return (
    <div className="flex-1 border border-border/40 rounded-lg overflow-auto bg-background h-full">
        <div className="min-w-[400px] md:min-w-[600px]">
          {/* All-day section */}
          <div className="border-b border-border/40 bg-muted/10">
            <div className="flex">
              <div className="w-24 flex-shrink-0 p-2 border-r border-border/40 text-xs font-medium text-muted-foreground">
                All Day
              </div>
              <div className="flex-1 p-2 space-y-1">
                {/* All day events */}
                {dayEvents.filter(e => e.all_day).map((event) => (
                  <button
                    key={event.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      onEventClick?.(event);
                    }}
                    className="w-full text-left px-3 py-2 bg-primary text-primary-foreground rounded text-sm hover:bg-primary/90 transition-colors"
                  >
                    {event.title}
                  </button>
                ))}
                {/* Tasks */}
                {dayTasks.map((task) => (
                  <div
                    key={task.id}
                    className={cn(
                      'px-3 py-2 rounded text-sm',
                      task.status === 'done' && 'bg-green-600 text-primary-foreground',
                      task.status === 'in_progress' && 'bg-blue-600 text-primary-foreground',
                      task.status === 'todo' && 'bg-orange-500 text-primary-foreground'
                    )}
                  >
                    {task.title}
                  </div>
                ))}
                {dayEvents.filter(e => e.all_day).length === 0 && dayTasks.length === 0 && (
                  <p className="text-sm text-muted-foreground italic">No all-day events or tasks</p>
                )}
              </div>
            </div>
          </div>

          {/* Hourly time slots */}
          {hours.map((hour) => {
            const hourEvents = dayEvents.filter(event => {
              if (event.all_day) return false;
              const eventHour = new Date(event.start_time || event.date).getHours();
              return eventHour === hour;
            });

            return (
              <div
                key={hour}
                className="flex border-b border-border/40 min-h-[80px] hover:bg-muted/20 transition-colors"
              >
                {/* Time label */}
                <div className="w-24 flex-shrink-0 p-2 border-r border-border/40 text-sm text-muted-foreground">
                  {format(new Date().setHours(hour, 0, 0, 0), 'h:mm a')}
                </div>

                {/* Event slot */}
                <button
                  onClick={() => onDateClick(currentDate)}
                  className="flex-1 p-2 text-left space-y-1"
                >
                  {hourEvents.map((event) => (
                    <button
                      key={event.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        onEventClick?.(event);
                      }}
                      className="w-full text-left px-3 py-2 bg-primary text-primary-foreground rounded text-sm hover:bg-primary/90 transition-colors"
                    >
                      <div className="font-medium">{event.title}</div>
                      {event.description && (
                        <div className="text-xs opacity-90 mt-1 line-clamp-2">{event.description}</div>
                      )}
                    </button>
                  ))}
                </button>
              </div>
            );
          })}
        </div>
    </div>
  );
}
