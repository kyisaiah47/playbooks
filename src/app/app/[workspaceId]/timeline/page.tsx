'use client';

import { useEffect, useState, useCallback } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { BarChart3, Loader2 } from 'lucide-react';
import { GanttView } from '@/components/app/timeline/GanttView';
import { CalendarEvent, Task } from '@/types/workspace';
import { startOfMonth, endOfMonth, format } from 'date-fns';
import { motion } from 'framer-motion';
import { useDemo } from '@/contexts/demo-context';
import { DEMO_WORKSPACE_ID } from '@/lib/demo-constants';

export default function TimelinePage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const { demoMode } = useDemo();
  const workspaceId = demoMode ? DEMO_WORKSPACE_ID : (params.workspaceId as string);

  const [allEvents, setAllEvents] = useState<CalendarEvent[]>([]);
  const [allTasks, setAllTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Get selected note IDs from URL
  const selectedNoteIds = searchParams.get('timelineNotes')?.split(',').filter(Boolean) || [];

  // Filter events and tasks by selected notes - in demo mode, show all if nothing selected
  const events = selectedNoteIds.length > 0
    ? allEvents.filter(event => event.user_guide_id && selectedNoteIds.includes(event.user_guide_id))
    : (demoMode ? allEvents : []);

  const tasks = selectedNoteIds.length > 0
    ? allTasks.filter(task => task.user_guide_id && selectedNoteIds.includes(task.user_guide_id))
    : (demoMode ? allTasks : []);

  // Fetch data
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch events
      const eventsResponse = await fetch('/api/items');
      if (!eventsResponse.ok) throw new Error('Failed to fetch events');
      const eventsData = await eventsResponse.json();
      setAllEvents(eventsData.events || []);

      // Fetch tasks
      const tasksResponse = await fetch('/api/items');
      if (!tasksResponse.ok) throw new Error('Failed to fetch tasks');
      const tasksData = await tasksResponse.json();
      setAllTasks(tasksData.items || []);
    } catch (err) {
      console.error('Error fetching timeline data:', err);
      setError('Failed to load timeline data');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
            <BarChart3 className="w-4 h-4 text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-semibold">Timeline</h1>
            <p className="text-xs text-muted-foreground">Visualize your active guides</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-6">
        {loading ? (
          <motion.div
            className="flex items-center justify-center h-96"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </motion.div>
        ) : error ? (
          <motion.div
            className="flex items-center justify-center h-96 text-destructive"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{error}</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <GanttView events={events} tasks={tasks} />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
