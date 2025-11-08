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
import { CalendarEvent } from '@/types/calendar';
import { Task } from '@/types/task';
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
      if (!event.start_time) return false;
      const eventDate = new Date(event.start_time);
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
    <MonthGrid
      calendarDays={calendarDays}
      currentDate={currentDate}
      weekDays={weekDays}
      getEventsForDate={getEventsForDate}
      getTasksForDate={getTasksForDate}
      onDateClick={onDateClick}
      onEventClick={onEventClick}
    />
  );
}
