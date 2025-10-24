'use client';

import { useState, useEffect, useCallback } from 'react';
import { CalendarDays, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { DailyNote } from '@/components/app/daily/DailyNote';
import { AgendaList } from '@/components/app/daily/AgendaList';
import { format } from 'date-fns';
import { toast } from 'sonner';

interface DailyNoteData {
  id?: string;
  date: string;
  content: string;
  created_at?: string;
  updated_at?: string;
}

interface Task {
  id: string;
  title: string;
  description: string | null;
  status: string;
  priority: string;
  due_date: string | null;
  created_at: string;
  updated_at: string;
}

export default function DailyPage() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [note, setNote] = useState<DailyNoteData | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [tasksLoading, setTasksLoading] = useState(true);

  // Format date for API calls
  const formatDateForAPI = (date: Date) => format(date, 'yyyy-MM-dd');

  // Fetch daily note
  const fetchNote = useCallback(async (date: Date) => {
    try {
      setLoading(true);
      const dateStr = formatDateForAPI(date);
      const response = await fetch(`/api/daily-notes?date=${dateStr}`);

      if (!response.ok) {
        throw new Error('Failed to fetch daily note');
      }

      const data = await response.json();
      setNote(data.note || { date: dateStr, content: '' });
    } catch (error) {
      console.error('Error fetching daily note:', error);
      toast.error('Failed to load daily note');
      setNote({ date: formatDateForAPI(date), content: '' });
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch tasks for the selected date
  const fetchTasks = useCallback(async (date: Date) => {
    try {
      setTasksLoading(true);
      const dateStr = formatDateForAPI(date);
      const response = await fetch(`/api/tasks?due_date=${dateStr}`);

      if (!response.ok) {
        throw new Error('Failed to fetch tasks');
      }

      const data = await response.json();
      setTasks(data.tasks || []);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      toast.error('Failed to load tasks');
      setTasks([]);
    } finally {
      setTasksLoading(false);
    }
  }, []);

  // Fetch both note and tasks when date changes
  useEffect(() => {
    fetchNote(selectedDate);
    fetchTasks(selectedDate);
  }, [selectedDate, fetchNote, fetchTasks]);

  // Save daily note
  const handleSaveNote = async (content: string) => {
    try {
      const dateStr = formatDateForAPI(selectedDate);
      const response = await fetch('/api/daily-notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          date: dateStr,
          content: content.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to save daily note');
      }

      const data = await response.json();
      setNote(data.note);
    } catch (error) {
      console.error('Error saving daily note:', error);
      toast.error('Failed to save daily note');
    }
  };

  // Navigate to previous day
  const goToPreviousDay = () => {
    const prevDay = new Date(selectedDate);
    prevDay.setDate(prevDay.getDate() - 1);
    setSelectedDate(prevDay);
  };

  // Navigate to next day
  const goToNextDay = () => {
    const nextDay = new Date(selectedDate);
    nextDay.setDate(nextDay.getDate() + 1);
    setSelectedDate(nextDay);
  };

  // Navigate to today
  const goToToday = () => {
    setSelectedDate(new Date());
  };

  const isToday = formatDateForAPI(selectedDate) === formatDateForAPI(new Date());
  const isFuture = selectedDate > new Date();

  return (
    <div className="h-full w-full p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#6366f1]/10 flex items-center justify-center">
              <CalendarDays className="w-5 h-5 text-[#6366f1]" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Daily</h1>
              <p className="text-sm text-muted-foreground">
                {format(selectedDate, 'EEEE, MMMM d, yyyy')}
              </p>
            </div>
          </div>
        </div>

        {/* Date Navigation */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon-sm"
              onClick={goToPreviousDay}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-[240px]">
                  <CalendarDays className="w-4 h-4" />
                  {format(selectedDate, 'MMMM d, yyyy')}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => date && setSelectedDate(date)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <Button
              variant="outline"
              size="icon-sm"
              onClick={goToNextDay}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {!isToday && (
            <Button variant="secondary" onClick={goToToday}>
              Today
            </Button>
          )}
        </div>

        {/* Content Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Daily Note - Takes 2 columns */}
            <div className="lg:col-span-2">
              <DailyNote
                date={formatDateForAPI(selectedDate)}
                initialContent={note?.content || ''}
                onSave={handleSaveNote}
              />
            </div>

            {/* Today's Agenda - Takes 1 column */}
            <div className="lg:col-span-1">
              {tasksLoading ? (
                <div className="flex items-center justify-center py-12">
                  <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
                </div>
              ) : (
                <AgendaList
                  tasks={tasks}
                  date={formatDateForAPI(selectedDate)}
                />
              )}
            </div>
          </div>
        )}

        {/* Future Date Notice */}
        {isFuture && (
          <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border/60 text-center">
            <p className="text-sm text-muted-foreground">
              You&apos;re viewing a future date. Start planning ahead!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
