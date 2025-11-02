'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  format,
  addMonths,
  subMonths,
  isSameMonth,
  isSameDay,
  isToday,
} from 'date-fns';
import { CalendarEvent, Task } from '@/types/workspace';
import { MonthGrid } from './MonthGrid';
import { cn } from '@/lib/utils';

interface MonthViewProps {
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

export function MonthView({
  currentDate,
  onDateChange,
  events,
  tasks,
  onDateClick,
  onEventClick,
  view,
  onViewChange,
  onCreateEvent,
}: MonthViewProps) {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 0 });
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 0 });

  const calendarDays = eachDayOfInterval({
    start: calendarStart,
    end: calendarEnd,
  });

  const handlePreviousMonth = () => {
    onDateChange(subMonths(currentDate, 1));
  };

  const handleNextMonth = () => {
    onDateChange(addMonths(currentDate, 1));
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

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="flex flex-col h-full">
      {/* Header with Navigation */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
          <h2 className="text-lg sm:text-2xl font-bold">
            <AnimatePresence mode="wait">
              <motion.span
                key={format(currentDate, 'MMMM yyyy')}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="inline-block"
              >
                {format(currentDate, 'MMMM yyyy')}
              </motion.span>
            </AnimatePresence>
          </h2>
          <div className="flex gap-1">
            <Button
              variant="outline"
              size="icon-sm"
              onClick={handlePreviousMonth}
              title="Previous month"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon-sm"
              onClick={handleNextMonth}
              title="Next month"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={handleToday}>
              Today
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex border border-border/40 rounded-lg overflow-hidden">
            <button
              onClick={() => onViewChange('month')}
              className={cn(
                'px-3 py-1.5 text-xs font-medium transition-colors',
                view === 'month'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-transparent text-foreground hover:bg-muted/50'
              )}
            >
              Month
            </button>
            <button
              onClick={() => onViewChange('week')}
              className={cn(
                'px-3 py-1.5 text-xs font-medium transition-colors border-x border-border/40',
                view === 'week'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-transparent text-foreground hover:bg-muted/50'
              )}
            >
              Week
            </button>
            <button
              onClick={() => onViewChange('day')}
              className={cn(
                'px-3 py-1.5 text-xs font-medium transition-colors',
                view === 'day'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-transparent text-foreground hover:bg-muted/50'
              )}
            >
              Day
            </button>
          </div>
          <Button onClick={onCreateEvent} size="sm">
            <Plus className="w-4 h-4" />
            Add Event
          </Button>
        </div>
      </div>

      {/* Calendar Grid */}
      <MonthGrid
        calendarDays={calendarDays}
        currentDate={currentDate}
        weekDays={weekDays}
        getEventsForDate={getEventsForDate}
        getTasksForDate={getTasksForDate}
        onDateClick={onDateClick}
        onEventClick={onEventClick}
      />
    </div>
  );
}
