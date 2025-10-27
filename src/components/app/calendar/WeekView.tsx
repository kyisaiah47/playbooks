'use client';

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  format,
  addWeeks,
  subWeeks,
  isSameDay,
  isToday,
  addDays,
} from 'date-fns';
import { CalendarEvent, Task } from '@/types/workspace';
import { cn } from '@/lib/utils';

interface WeekViewProps {
  currentDate: Date;
  onDateChange: (date: Date) => void;
  events: CalendarEvent[];
  tasks: Task[];
  onDateClick: (date: Date) => void;
  onEventClick?: (event: CalendarEvent) => void;
}

export function WeekView({
  currentDate,
  onDateChange,
  events,
  tasks,
  onDateClick,
  onEventClick,
}: WeekViewProps) {
  const weekStart = startOfWeek(currentDate, { weekStartsOn: 0 });
  const weekEnd = endOfWeek(currentDate, { weekStartsOn: 0 });

  const weekDays = eachDayOfInterval({
    start: weekStart,
    end: weekEnd,
  });

  const handlePreviousWeek = () => {
    onDateChange(subWeeks(currentDate, 1));
  };

  const handleNextWeek = () => {
    onDateChange(addWeeks(currentDate, 1));
  };

  const handleToday = () => {
    onDateChange(new Date());
  };

  // Get events for a specific date
  const getEventsForDate = (date: Date) => {
    return events.filter(event => {
      const eventDate = new Date(event.date);
      return isSameDay(eventDate, date);
    });
  };

  // Get tasks due on a specific date
  const getTasksForDate = (date: Date) => {
    return tasks.filter(task => {
      if (!task.due_date) return false;
      const taskDate = new Date(task.due_date);
      return isSameDay(taskDate, date);
    });
  };

  const hours = Array.from({ length: 24 }, (_, i) => i);

  return (
    <div className="flex flex-col h-full">
      {/* Header with Navigation */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold">
            {format(weekStart, 'MMM d')} - {format(weekEnd, 'MMM d, yyyy')}
          </h2>
          <div className="flex gap-1">
            <Button
              variant="outline"
              size="icon-sm"
              onClick={handlePreviousWeek}
              title="Previous week"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon-sm"
              onClick={handleNextWeek}
              title="Next week"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <Button variant="outline" size="sm" onClick={handleToday}>
          Today
        </Button>
      </div>

      {/* Week Grid */}
      <div className="flex-1 border border-border/40 rounded-lg overflow-auto bg-background">
        <div className="grid grid-cols-8 min-w-[800px]">
          {/* Time column header */}
          <div className="sticky top-0 bg-muted/30 border-b border-r border-border/40 p-2 text-xs font-medium text-muted-foreground z-10">
            Time
          </div>

          {/* Day headers */}
          {weekDays.map((day) => (
            <div
              key={day.toISOString()}
              className={cn(
                'sticky top-0 bg-muted/30 border-b border-r last:border-r-0 border-border/40 p-2 text-center z-10',
                isToday(day) && 'bg-primary/10'
              )}
            >
              <div className="text-xs font-medium">{format(day, 'EEE')}</div>
              <div className={cn(
                'text-lg font-bold mt-1',
                isToday(day) && 'text-primary'
              )}>
                {format(day, 'd')}
              </div>
            </div>
          ))}

          {/* Time slots */}
          {hours.map((hour) => (
            <React.Fragment key={`hour-${hour}`}>
              {/* Time label */}
              <div
                className="border-r border-b border-border/40 p-2 text-xs text-muted-foreground bg-muted/10"
              >
                {format(new Date().setHours(hour, 0, 0, 0), 'h:mm a')}
              </div>

              {/* Day cells for this hour */}
              {weekDays.map((day) => {
                const dayEvents = getEventsForDate(day);
                const dayTasks = getTasksForDate(day);
                const hourEvents = dayEvents.filter(event => {
                  if (event.all_day) return hour === 0;
                  const eventHour = new Date(event.start_time || event.date).getHours();
                  return eventHour === hour;
                });

                return (
                  <button
                    key={`${day.toISOString()}-${hour}`}
                    onClick={() => onDateClick(day)}
                    className={cn(
                      'border-r last:border-r-0 border-b border-border/40 p-1 min-h-[60px] hover:bg-muted/50 transition-colors text-left',
                      isToday(day) && 'bg-primary/5'
                    )}
                  >
                    {hour === 0 && (
                      <div className="space-y-1">
                        {/* All day events */}
                        {dayEvents.filter(e => e.all_day).map((event) => (
                          <button
                            key={event.id}
                            onClick={(e) => {
                              e.stopPropagation();
                              onEventClick?.(event);
                            }}
                            className="w-full text-left px-1.5 py-0.5 bg-primary text-white rounded text-xs truncate hover:bg-primary/90 transition-colors"
                          >
                            {event.title}
                          </button>
                        ))}
                        {/* Tasks */}
                        {dayTasks.map((task) => (
                          <div
                            key={task.id}
                            className={cn(
                              'px-1.5 py-0.5 rounded text-xs truncate',
                              task.status === 'done' && 'bg-green-600 text-white',
                              task.status === 'in_progress' && 'bg-blue-600 text-white',
                              task.status === 'todo' && 'bg-orange-500 text-white'
                            )}
                          >
                            {task.title}
                          </div>
                        ))}
                      </div>
                    )}
                    {/* Hourly events */}
                    {hourEvents.filter(e => !e.all_day).map((event) => (
                      <button
                        key={event.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          onEventClick?.(event);
                        }}
                        className="w-full text-left px-1.5 py-0.5 bg-primary text-white rounded text-xs truncate hover:bg-primary/90 transition-colors mb-1"
                      >
                        {event.title}
                      </button>
                    ))}
                  </button>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
