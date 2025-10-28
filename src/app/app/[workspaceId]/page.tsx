'use client';

import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, ListTodo, Calendar, CheckCircle2, Circle, Loader2, Clock, AlertCircle, CalendarDays, ChevronLeft, ChevronRight } from 'lucide-react';
import { format, isToday, isTomorrow, isPast, isFuture, parseISO, startOfDay } from 'date-fns';
import { useDemo } from '@/contexts/demo-context';
import { DEMO_WORKSPACE_ID } from '@/lib/demo-constants';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarPicker } from '@/components/ui/calendar';
import { AgendaList } from '@/components/app/daily/AgendaList';
import { Item } from '@/types/workspace';

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

export default function OverviewPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const { demoMode } = useDemo();
  const workspaceId = demoMode ? DEMO_WORKSPACE_ID : (params.workspaceId as string);

  const [allUserGuides, setAllUserGuides] = useState<UserGuide[]>([]);
  const [allItems, setAllItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  // Daily view state
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  // Get selected note IDs from URL, fallback to localStorage if URL is empty
  const urlIds = searchParams.get('overviewGuides')?.split(',').filter(Boolean);
  const localStorageIds = typeof window !== 'undefined'
    ? JSON.parse(localStorage.getItem('selectedOverviewGuideIds') || '[]')
    : [];
  const selectedNoteIds = urlIds && urlIds.length > 0 ? urlIds : localStorageIds;
  console.log('[Daily View] selectedNoteIds:', selectedNoteIds);
  console.log('[Daily View] allUserGuides:', allUserGuides.map(g => ({ id: g.id, name: g.guides.name })));

  // Filter by selection - only show data from checked notes
  // In demo mode, show all data if nothing is selected
  const userGuides = selectedNoteIds.length > 0
    ? allUserGuides.filter(guide => selectedNoteIds.includes(guide.id))
    : (demoMode ? allUserGuides : []);
  console.log('[Daily View] Filtered userGuides:', userGuides.map(g => ({ id: g.id, name: g.guides.name })));

  const tasks = selectedNoteIds.length > 0
    ? allItems.filter(task => task.user_guide_id && selectedNoteIds.includes(task.user_guide_id))
    : (demoMode ? allItems : []);

  const events = selectedNoteIds.length > 0
    ? allItems.filter(event => event.user_guide_id && selectedNoteIds.includes(event.user_guide_id))
    : (demoMode ? allItems : []);

  // Get tasks for selected date
  const formatDateForAPI = (date: Date) => format(date, 'yyyy-MM-dd');
  const todayTasks = allItems.filter(task =>
    task.due_date && formatDateForAPI(parseISO(task.due_date)) === formatDateForAPI(selectedDate)
  );
  const todayFilteredTasks = selectedNoteIds.length > 0
    ? todayTasks.filter(task => task.user_guide_id && selectedNoteIds.includes(task.user_guide_id))
    : (demoMode ? todayTasks : []);

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

  useEffect(() => {
    if (demoMode) {
      // Fetch real data from demo workspace
      

      async function fetchDemoData() {
        try {
          setLoading(true);

          const [guidesRes, itemsRes] = await Promise.all([
            fetch(`/api/notes?workspace_id=${DEMO_WORKSPACE_ID}&archived=false`),
            fetch(`/api/items?workspace_id=${DEMO_WORKSPACE_ID}`)
          ]);

          if (guidesRes.ok) {
            const guidesData = await guidesRes.json();
            setAllUserGuides(guidesData.notes || []);
          }

          if (itemsRes.ok) {
            const itemsData = await itemsRes.json();
            setAllItems(itemsData.items || []);
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

        const [guidesRes, itemsRes] = await Promise.all([
          fetch(`/api/notes?workspace_id=${workspaceId}&archived=false`),
          fetch(`/api/items`)
        ]);

        if (!guidesRes.ok || !itemsRes.ok) {
          throw new Error('Failed to fetch data');
        }

        const [guidesData, itemsData] = await Promise.all([
          guidesRes.json(),
          itemsRes.json()
        ]);

        setAllUserGuides(guidesData.notes || []);
        setAllItems(itemsData.items || []);
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
            className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <CalendarDays className="w-4 h-4 text-amber-500" />
          </motion.div>
          <div>
            <h1 className="text-xl font-semibold">Daily</h1>
            <p className="text-xs text-muted-foreground">Your daily task agenda</p>
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
            <CalendarDays className="w-16 h-16 mb-4 opacity-20" />
            <p className="text-lg font-medium">No notes selected</p>
            <p className="text-sm">Select notes from the sidebar to see your daily view</p>
          </motion.div>
        ) : userGuides.length === 0 && selectedNoteIds.length > 0 ? (
          <motion.div
            className="flex flex-col items-center justify-center h-96 text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <CalendarDays className="w-16 h-16 mb-4 opacity-20" />
            <p className="text-lg font-medium">No data found</p>
            <p className="text-sm">The selected notes don't have any data yet</p>
          </motion.div>
        ) : (
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {/* Today's Agenda Section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.25 }}
            >
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

              {/* Agenda List */}
              <div className="max-w-2xl">
                <AgendaList
                  tasks={todayFilteredTasks}
                  date={formatDateForAPI(selectedDate)}
                />
              </div>

              {/* Future Date Notice */}
              <AnimatePresence>
                {isFutureDate && (
                  <motion.div
                    className="mt-4 p-3 bg-muted/50 rounded-lg border border-border/60 text-center max-w-2xl"
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
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
