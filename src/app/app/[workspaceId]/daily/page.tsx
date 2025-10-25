'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { CalendarDays, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { DailyNote } from '@/components/app/daily/DailyNote';
import { AgendaList } from '@/components/app/daily/AgendaList';
import { format } from 'date-fns';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';

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
  user_guide_id: string | null;
  created_at: string;
  updated_at: string;
}

export default function DailyPage() {
  const searchParams = useSearchParams();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [note, setNote] = useState<DailyNoteData | null>(null);
  const [allTasks, setAllTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [tasksLoading, setTasksLoading] = useState(true);

  // Get selected note IDs from URL
  const selectedNoteIds = searchParams.get('dailyNotes')?.split(',').filter(Boolean) || [];

  // Filter tasks by selected notes
  const tasks = selectedNoteIds.length > 0
    ? allTasks.filter(task => task.user_guide_id && selectedNoteIds.includes(task.user_guide_id))
    : allTasks;

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
      setAllTasks(data.tasks || []);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      toast.error('Failed to load tasks');
      setAllTasks([]);
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
    <motion.div
      className="h-full w-full flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="border-b border-border/40 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <CalendarDays className="w-4 h-4 text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-semibold">Daily</h1>
            <motion.p
              key={formatDateForAPI(selectedDate)}
              className="text-xs text-muted-foreground"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              {format(selectedDate, 'EEEE, MMMM d, yyyy')}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-6">
        {/* Date Navigation */}
        <motion.div
          className="flex items-center justify-between mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className="flex items-center gap-2">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="icon-sm"
                onClick={goToPreviousDay}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
            </motion.div>

            <Popover>
              <PopoverTrigger asChild>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="outline" className="w-[240px]">
                    <CalendarDays className="w-4 h-4" />
                    {format(selectedDate, 'MMMM d, yyyy')}
                  </Button>
                </motion.div>
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

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="icon-sm"
                onClick={goToNextDay}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>

          <AnimatePresence>
            {!isToday && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <Button variant="secondary" onClick={goToToday}>
                  Today
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Content Grid */}
        {loading ? (
          <motion.div
            className="flex items-center justify-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
          </motion.div>
        ) : (
          <motion.div
            key={formatDateForAPI(selectedDate)}
            className="grid grid-cols-1 lg:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
          >
            {/* Daily Note - Takes 2 columns */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <DailyNote
                date={formatDateForAPI(selectedDate)}
                initialContent={note?.content || ''}
                onSave={handleSaveNote}
              />
            </motion.div>

            {/* Today's Agenda - Takes 1 column */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.25 }}
            >
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
            </motion.div>
          </motion.div>
        )}

        {/* Future Date Notice */}
        <AnimatePresence>
          {isFuture && (
            <motion.div
              className="mt-4 p-3 bg-muted/50 rounded-lg border border-border/60 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-xs text-muted-foreground">
                You&apos;re viewing a future date. Start planning ahead!
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
