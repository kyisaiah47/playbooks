'use client';

import { useEffect, useState, useCallback } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, ListTodo, Calendar, CheckCircle2, Circle, Loader2, Clock, AlertCircle, CalendarDays, ChevronLeft, ChevronRight } from 'lucide-react';
import { format, isToday, isTomorrow, isPast, isFuture, parseISO, startOfDay } from 'date-fns';
import { useDemo } from '@/contexts/demo-context';
import { DEMO_WORKSPACE_ID } from '@/lib/demo-constants';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarPicker } from '@/components/ui/calendar';
import { DailyNote } from '@/components/app/daily/DailyNote';
import { AgendaList } from '@/components/app/daily/AgendaList';
import { toast } from 'sonner';

interface UserGuide {
  id: string;
  guide_id: string;
  progress: number;
  archived: boolean;
  custom_name: string | null;
  guides: {
    id: string;
    name: string;
    description: string;
    icon: string | null;
  };
}

interface Task {
  id: string;
  title: string;
  status: string;
  due_date: string | null;
  user_guide_id: string | null;
}

interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  user_guide_id: string | null;
}

interface DailyNoteData {
  id?: string;
  date: string;
  content: string;
  created_at?: string;
  updated_at?: string;
}

export default function OverviewPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const { demoMode } = useDemo();
  const workspaceId = demoMode ? DEMO_WORKSPACE_ID : (params.workspaceId as string);

  const [allUserGuides, setAllUserGuides] = useState<UserGuide[]>([]);
  const [allTasks, setAllTasks] = useState<Task[]>([]);
  const [allEvents, setAllEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);

  // Daily view state
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [dailyNote, setDailyNote] = useState<DailyNoteData | null>(null);
  const [dailyNoteLoading, setDailyNoteLoading] = useState(false);

  // Get selected note IDs from URL
  const selectedNoteIds = searchParams.get('overviewGuides')?.split(',').filter(Boolean) || [];

  // Filter by selection - only show data from checked notes
  // In demo mode, show all data if nothing is selected
  const userGuides = selectedNoteIds.length > 0
    ? allUserGuides.filter(guide => selectedNoteIds.includes(guide.id))
    : (demoMode ? allUserGuides : []);

  const tasks = selectedNoteIds.length > 0
    ? allTasks.filter(task => task.user_guide_id && selectedNoteIds.includes(task.user_guide_id))
    : (demoMode ? allTasks : []);

  const events = selectedNoteIds.length > 0
    ? allEvents.filter(event => event.user_guide_id && selectedNoteIds.includes(event.user_guide_id))
    : (demoMode ? allEvents : []);

  // Get tasks for selected date
  const formatDateForAPI = (date: Date) => format(date, 'yyyy-MM-dd');
  const todayTasks = allTasks.filter(task =>
    task.due_date && formatDateForAPI(parseISO(task.due_date)) === formatDateForAPI(selectedDate)
  );
  const todayFilteredTasks = selectedNoteIds.length > 0
    ? todayTasks.filter(task => task.user_guide_id && selectedNoteIds.includes(task.user_guide_id))
    : (demoMode ? todayTasks : []);

  // Fetch daily note for selected date
  const fetchDailyNote = useCallback(async (date: Date) => {
    try {
      setDailyNoteLoading(true);
      const dateStr = formatDateForAPI(date);
      const response = await fetch(`/api/daily-notes?date=${dateStr}`);

      if (!response.ok) {
        throw new Error('Failed to fetch daily note');
      }

      const data = await response.json();
      setDailyNote(data.note || { date: dateStr, content: '' });
    } catch (error) {
      console.error('Error fetching daily note:', error);
      toast.error('Failed to load daily note');
      setDailyNote({ date: formatDateForAPI(date), content: '' });
    } finally {
      setDailyNoteLoading(false);
    }
  }, []);

  // Save daily note
  const handleSaveDailyNote = async (content: string) => {
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
      setDailyNote(data.note);
    } catch (error) {
      console.error('Error saving daily note:', error);
      toast.error('Failed to save daily note');
    }
  };

  // Date navigation functions
  const goToPreviousDay = () => {
    const prevDay = new Date(selectedDate);
    prevDay.setDate(prevDay.getDate() - 1);
    setSelectedDate(prevDay);
  };

  const goToNextDay = () => {
    const nextDay = new Date(selectedDate);
    nextDay.setDate(nextDay.getDate() + 1);
    setSelectedDate(nextDay);
  };

  const goToToday = () => {
    setSelectedDate(new Date());
  };

  // Fetch daily note when date changes
  useEffect(() => {
    fetchDailyNote(selectedDate);
  }, [selectedDate, fetchDailyNote]);

  useEffect(() => {
    if (demoMode) {
      // Fetch real data from demo workspace
      

      async function fetchDemoData() {
        try {
          setLoading(true);

          const [guidesRes, tasksRes, eventsRes] = await Promise.all([
            fetch(`/api/user-guides?workspace_id=${DEMO_WORKSPACE_ID}&archived=false`),
            fetch(`/api/tasks?workspace_id=${DEMO_WORKSPACE_ID}`),
            fetch(`/api/calendar?workspace_id=${DEMO_WORKSPACE_ID}`)
          ]);

          if (guidesRes.ok) {
            const guidesData = await guidesRes.json();
            setAllUserGuides(guidesData.userGuides || []);
          }

          if (tasksRes.ok) {
            const tasksData = await tasksRes.json();
            setAllTasks(tasksData.tasks || []);
          }

          if (eventsRes.ok) {
            const eventsData = await eventsRes.json();
            setAllEvents(eventsData.events || []);
          }
        } catch (error) {
          console.error('Error fetching demo data:', error);
        } finally {
          setLoading(false);
        }
      }

      fetchDemoData();
      return;
    }

    async function fetchData() {
      try {
        setLoading(true);

        const [guidesRes, tasksRes, eventsRes] = await Promise.all([
          fetch(`/api/user-guides?workspace_id=${workspaceId}&archived=false`),
          fetch(`/api/tasks`),
          fetch(`/api/calendar`)
        ]);

        if (!guidesRes.ok || !tasksRes.ok || !eventsRes.ok) {
          throw new Error('Failed to fetch data');
        }

        const [guidesData, tasksData, eventsData] = await Promise.all([
          guidesRes.json(),
          tasksRes.json(),
          eventsRes.json()
        ]);

        setAllUserGuides(guidesData.userGuides || []);
        setAllTasks(tasksData.tasks || []);
        setAllEvents(eventsData.events || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [workspaceId, demoMode]);

  const isTodaySelected = formatDateForAPI(selectedDate) === formatDateForAPI(new Date());
  const isFutureDate = selectedDate > new Date();

  return (
    <motion.div
      className="h-full w-full flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <motion.div
        className="border-b border-border/40 px-6 py-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <div className="flex items-center gap-3">
          <motion.div
            className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <LayoutDashboard className="w-4 h-4 text-primary" />
          </motion.div>
          <div>
            <h1 className="text-xl font-semibold">Overview</h1>
            <p className="text-xs text-muted-foreground">Your workspace dashboard</p>
          </div>
        </div>
      </motion.div>

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
        ) : selectedNoteIds.length === 0 && !demoMode ? (
          <motion.div
            className="flex flex-col items-center justify-center h-96 text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <LayoutDashboard className="w-16 h-16 mb-4 opacity-20" />
            <p className="text-lg font-medium">No notes selected</p>
            <p className="text-sm">Select notes from the sidebar to see your overview</p>
          </motion.div>
        ) : (
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {/* Today's Focus Section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.25 }}
            >
              <div className="mb-4">
                <h2 className="text-lg font-semibold mb-1">Today's Focus</h2>
                <p className="text-xs text-muted-foreground">Your daily snapshot and reflection</p>
              </div>

              {/* Date Navigation */}
              <div className="flex items-center justify-between mb-4">
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
                      <CalendarPicker
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
                  {!isTodaySelected && (
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
              </div>

              {/* Daily Content Grid */}
              {dailyNoteLoading ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {/* Daily Note - 2 columns */}
                  <div className="lg:col-span-2">
                    <DailyNote
                      date={formatDateForAPI(selectedDate)}
                      initialContent={dailyNote?.content || ''}
                      onSave={handleSaveDailyNote}
                    />
                  </div>

                  {/* Today's Agenda - 1 column */}
                  <div className="lg:col-span-1">
                    <AgendaList
                      tasks={todayFilteredTasks}
                      date={formatDateForAPI(selectedDate)}
                    />
                  </div>
                </div>
              )}

              {/* Future Date Notice */}
              <AnimatePresence>
                {isFutureDate && (
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
            </motion.div>

            {/* Divider */}
            <div className="border-t border-border/40" />

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              animate="show"
            >
              <motion.div
                className="rounded-lg border border-border/40 bg-background p-4"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <ListTodo className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Total Tasks</span>
                </div>
                <div className="text-2xl font-bold">{tasks.length}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {tasks.filter(t => t.status === 'completed').length} completed
                </div>
              </motion.div>

              <motion.div
                className="rounded-lg border border-border/40 bg-background p-4"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="w-5 h-5 text-amber-500" />
                  <span className="text-sm text-muted-foreground">Overdue Tasks</span>
                </div>
                <div className="text-2xl font-bold text-amber-500">
                  {tasks.filter(t => t.status !== 'completed' && t.due_date && isPast(parseISO(t.due_date)) && !isToday(parseISO(t.due_date))).length}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Need attention
                </div>
              </motion.div>

              <motion.div
                className="rounded-lg border border-border/40 bg-background p-4"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-blue-500" />
                  <span className="text-sm text-muted-foreground">Due Today</span>
                </div>
                <div className="text-2xl font-bold text-blue-500">
                  {tasks.filter(t => t.status !== 'completed' && t.due_date && isToday(parseISO(t.due_date))).length}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Tasks for today
                </div>
              </motion.div>

              <motion.div
                className="rounded-lg border border-border/40 bg-background p-4"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Events</span>
                </div>
                <div className="text-2xl font-bold">{events.length}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  Total events
                </div>
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Upcoming Tasks */}
              <div className="rounded-lg border border-border/40 bg-background p-4">
                <h3 className="text-sm font-semibold mb-3">Upcoming Tasks</h3>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {tasks
                    .filter(t => t.status !== 'completed' && t.due_date)
                    .sort((a, b) => new Date(a.due_date!).getTime() - new Date(b.due_date!).getTime())
                    .slice(0, 10)
                    .map(task => {
                      const dueDate = parseISO(task.due_date!);
                      const isOverdue = isPast(dueDate) && !isToday(dueDate);
                      const isDueToday = isToday(dueDate);
                      const isDueTomorrow = isTomorrow(dueDate);

                      return (
                        <div key={task.id} className="flex items-start gap-2 p-2 rounded hover:bg-muted/50 transition-colors">
                          <Circle className="w-4 h-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium break-words">{task.title}</div>
                            <div className={`text-xs mt-0.5 ${
                              isOverdue ? 'text-amber-500' :
                              isDueToday ? 'text-blue-500' :
                              'text-muted-foreground'
                            }`}>
                              {isOverdue ? 'Overdue' :
                               isDueToday ? 'Today' :
                               isDueTomorrow ? 'Tomorrow' :
                               format(dueDate, 'MMM d, yyyy')}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  {tasks.filter(t => t.status !== 'completed' && t.due_date).length === 0 && (
                    <div className="text-sm text-muted-foreground text-center py-8">
                      No upcoming tasks
                    </div>
                  )}
                </div>
              </div>

              {/* Upcoming Events */}
              <div className="rounded-lg border border-border/40 bg-background p-4">
                <h3 className="text-sm font-semibold mb-3">Upcoming Events</h3>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {events
                    .filter(e => isFuture(parseISO(e.date)) || isToday(parseISO(e.date)))
                    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                    .slice(0, 10)
                    .map(event => {
                      const eventDate = parseISO(event.date);
                      const isDueToday = isToday(eventDate);
                      const isDueTomorrow = isTomorrow(eventDate);

                      return (
                        <div key={event.id} className="flex items-start gap-2 p-2 rounded hover:bg-muted/50 transition-colors">
                          <Calendar className="w-4 h-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium break-words">{event.title}</div>
                            <div className={`text-xs mt-0.5 ${isDueToday ? 'text-blue-500' : 'text-muted-foreground'}`}>
                              {isDueToday ? 'Today' :
                               isDueTomorrow ? 'Tomorrow' :
                               format(eventDate, 'MMM d, yyyy')}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  {events.filter(e => isFuture(parseISO(e.date)) || isToday(parseISO(e.date))).length === 0 && (
                    <div className="text-sm text-muted-foreground text-center py-8">
                      No upcoming events
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Note Progress */}
            <div className="rounded-lg border border-border/40 bg-background p-4">
              <h3 className="text-sm font-semibold mb-3">Note Progress</h3>
              <div className="space-y-3">
                {userGuides.map((guide) => {
                  const displayName = guide.custom_name || guide.guides.name;
                  const noteTasks = tasks.filter(t => t.user_guide_id === guide.id);
                  const completedTasks = noteTasks.filter(t => t.status === 'completed').length;
                  const noteEvents = events.filter(e => e.user_guide_id === guide.id);

                  return (
                    <div key={guide.id} className="p-3 rounded-lg border border-border/40 bg-muted/20">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium text-sm">{displayName}</div>
                        <div className="text-sm font-semibold text-primary">{guide.progress}%</div>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden mb-2">
                        <div
                          className="h-full bg-primary transition-all"
                          style={{ width: `${guide.progress}%` }}
                        />
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <ListTodo className="w-3 h-3" />
                          <span>{completedTasks}/{noteTasks.length} tasks</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{noteEvents.length} events</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
