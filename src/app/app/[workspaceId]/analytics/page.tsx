'use client';

import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { TrendingUp, Loader2, Activity, Calendar, CheckCircle2, Clock } from 'lucide-react';
import { format, startOfWeek, endOfWeek, eachDayOfInterval, isWithinInterval, parseISO, startOfMonth, endOfMonth, subMonths } from 'date-fns';
import { motion } from 'framer-motion';
import { useDemo } from '@/contexts/demo-context';
import { DEMO_WORKSPACE_ID } from '@/lib/demo-constants';

interface UserGuide {
  id: string;
  guide_id: string;
  progress: number;
  archived: boolean;
  custom_name: string | null;
  created_at: string;
  updated_at: string;
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
  completed_at: string | null;
  created_at: string;
  user_guide_id: string | null;
}

interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  created_at: string;
  user_guide_id: string | null;
}

export default function AnalyticsPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const { demoMode } = useDemo();
  const workspaceId = demoMode ? DEMO_WORKSPACE_ID : (params.workspaceId as string);

  const [allUserGuides, setAllUserGuides] = useState<UserGuide[]>([]);
  const [allItems, setAllItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  // Get selected guide IDs from URL
  const selectedGuideIds = searchParams.get('analyticsGuides')?.split(',').filter(Boolean) || [];

  // Filter by selected guides - in demo mode, show all if nothing selected
  const userGuides = selectedGuideIds.length > 0
    ? allUserGuides.filter(guide => selectedGuideIds.includes(guide.id))
    : (demoMode ? allUserGuides : []);

  const items = selectedGuideIds.length > 0
    ? allItems.filter(item => item.user_guide_id && selectedGuideIds.includes(item.user_guide_id))
    : (demoMode ? allItems : []);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        const [guidesRes, itemsRes] = await Promise.all([
          fetch(`/api/user-guides?workspace_id=${workspaceId}&archived=false`),
          fetch(`/api/items`)
        ]);

        if (!guidesRes.ok || !itemsRes.ok) {
          throw new Error('Failed to fetch data');
        }

        const [guidesData, itemsData] = await Promise.all([
          guidesRes.json(),
          itemsRes.json()
        ]);

        setAllUserGuides(guidesData.userGuides || []);
        setAllItems(itemsData.items || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [workspaceId]);

  // Calculate stats
  const totalTasks = items.length;
  const completedTasks = items.filter(t => t.status === 'done').length;
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  const avgProgress = userGuides.length > 0
    ? Math.round(userGuides.reduce((acc, g) => acc + g.progress, 0) / userGuides.length)
    : 0;

  // Monthly trends - last 6 months
  const getLast6MonthsTrends = () => {
    const months = [];
    const today = new Date();

    for (let i = 5; i >= 0; i--) {
      const monthStart = startOfMonth(subMonths(today, i));
      const monthEnd = endOfMonth(subMonths(today, i));
      const monthStr = format(monthStart, 'MMM yyyy');

      const tasksCreatedInMonth = items.filter(t => {
        const date = parseISO(t.created_at);
        return date >= monthStart && date <= monthEnd;
      }).length;

      const tasksCompletedInMonth = items.filter(t => {
        if (!t.completed_at) return false;
        const date = parseISO(t.completed_at);
        return date >= monthStart && date <= monthEnd;
      }).length;

      const notesCreatedInMonth = userGuides.filter(g => {
        const date = parseISO(g.created_at);
        return date >= monthStart && date <= monthEnd;
      }).length;

      months.push({
        month: monthStr,
        tasksCreated: tasksCreatedInMonth,
        tasksCompleted: tasksCompletedInMonth,
        notesCreated: notesCreatedInMonth,
        total: tasksCreatedInMonth + tasksCompletedInMonth + notesCreatedInMonth
      });
    }

    return months;
  };

  const monthlyTrends = getLast6MonthsTrends();
  const maxMonthlyActivity = Math.max(...monthlyTrends.map(m => m.total), 1);

  // Weekly activity pattern
  const getWeeklyPattern = () => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const pattern = daysOfWeek.map(day => ({ day, count: 0 }));

    tasks.forEach(t => {
      const dayIndex = new Date(t.created_at).getDay();
      pattern[dayIndex].count++;
    });

    return pattern;
  };

  const weeklyPattern = getWeeklyPattern();
  const maxWeeklyActivity = Math.max(...weeklyPattern.map(d => d.count), 1);

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
            <TrendingUp className="w-4 h-4 text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-semibold">Analytics</h1>
            <p className="text-xs text-muted-foreground">
              {selectedGuideIds.length > 0
                ? `Showing analytics for ${selectedGuideIds.length} selected note${selectedGuideIds.length > 1 ? 's' : ''}`
                : 'Select notes from sidebar to view analytics'}
            </p>
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
        ) : selectedGuideIds.length === 0 ? (
          <motion.div
            className="flex flex-col items-center justify-center h-96 text-muted-foreground"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <TrendingUp className="w-16 h-16 mb-4 opacity-20" />
            <p className="text-lg font-medium">No notes selected</p>
            <p className="text-sm">Select notes from the sidebar to view analytics</p>
          </motion.div>
        ) : (
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08 }
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
              >
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Active Notes</span>
                </div>
                <div className="text-2xl font-bold">{userGuides.length}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {avgProgress}% avg progress
                </div>
              </motion.div>

              <motion.div
                className="rounded-lg border border-border/40 bg-background p-4"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-muted-foreground">Completion Rate</span>
                </div>
                <div className="text-2xl font-bold text-green-500">{completionRate}%</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {completedTasks}/{totalTasks} tasks done
                </div>
              </motion.div>

              <motion.div
                className="rounded-lg border border-border/40 bg-background p-4"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Total Tasks</span>
                </div>
                <div className="text-2xl font-bold">{totalTasks}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {tasks.filter(t => t.status !== 'completed').length} pending
                </div>
              </motion.div>

              <motion.div
                className="rounded-lg border border-border/40 bg-background p-4"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Events</span>
                </div>
                <div className="text-2xl font-bold">{events.length}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  Total scheduled
                </div>
              </motion.div>
            </motion.div>

            {/* Monthly Trends - Last 6 Months */}
            <motion.div
              className="rounded-lg border border-border/40 bg-background p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <h3 className="text-sm font-semibold mb-4">Monthly Trends (Last 6 Months)</h3>
              <div className="space-y-3">
                {monthlyTrends.map((month) => (
                  <div key={month.month}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="text-xs font-medium">{month.month}</div>
                      <div className="text-xs text-muted-foreground">{month.total} activities</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-8 bg-muted rounded overflow-hidden flex">
                        {month.itemsCreated > 0 && (
                          <div
                            className="bg-blue-500/60 flex items-center justify-center text-[10px] font-medium text-white"
                            style={{ width: `${(month.itemsCreated / month.total) * 100}%` }}
                            title={`${month.itemsCreated} tasks created`}
                          >
                            {month.itemsCreated > 2 && month.itemsCreated}
                          </div>
                        )}
                        {month.itemsCompleted > 0 && (
                          <div
                            className="bg-green-500/60 flex items-center justify-center text-[10px] font-medium text-white"
                            style={{ width: `${(month.itemsCompleted / month.total) * 100}%` }}
                            title={`${month.itemsCompleted} tasks completed`}
                          >
                            {month.itemsCompleted > 2 && month.itemsCompleted}
                          </div>
                        )}
                        {month.notesCreated > 0 && (
                          <div
                            className="bg-purple-500/60 flex items-center justify-center text-[10px] font-medium text-white"
                            style={{ width: `${(month.notesCreated / month.total) * 100}%` }}
                            title={`${month.notesCreated} notes created`}
                          >
                            {month.notesCreated > 2 && month.notesCreated}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 mt-1 text-[10px] text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-blue-500/60" />
                        {month.itemsCreated} created
                      </span>
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-green-500/60" />
                        {month.itemsCompleted} completed
                      </span>
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-purple-500/60" />
                        {month.notesCreated} notes
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Weekly Activity Pattern */}
            <motion.div
              className="rounded-lg border border-border/40 bg-background p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <h3 className="text-sm font-semibold mb-4">Activity by Day of Week</h3>
              <div className="space-y-2">
                {weeklyPattern.map((day) => (
                  <div key={day.day} className="flex items-center gap-2">
                    <div className="text-xs text-muted-foreground w-10 flex-shrink-0">
                      {day.day}
                    </div>
                    <div className="flex-1 flex items-center gap-1">
                      <div
                        className="h-6 bg-primary/20 rounded flex items-center justify-center text-[10px] font-medium"
                        style={{ width: `${(day.count / maxWeeklyActivity) * 100}%`, minWidth: day.count > 0 ? '20px' : '0' }}
                      >
                        {day.count > 0 && day.count}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Note Statistics */}
            <motion.div
              className="rounded-lg border border-border/40 bg-background p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <h3 className="text-sm font-semibold mb-4">Note Statistics</h3>
              <div className="space-y-3">
                {userGuides.map((guide) => {
                  const displayName = guide.custom_name || guide.guides.name;
                  const guideTasks = tasks.filter(t => t.user_guide_id === guide.id);
                  const guideEvents = events.filter(e => e.user_guide_id === guide.id);
                  const guideCompletedTasks = guideTasks.filter(t => t.status === 'completed').length;

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
                          <CheckCircle2 className="w-3 h-3" />
                          <span>{guideCompletedTasks}/{guideTasks.length} tasks</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{guideEvents.length} events</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>Created {format(parseISO(guide.created_at), 'MMM d, yyyy')}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {userGuides.length === 0 && (
                  <div className="text-sm text-muted-foreground text-center py-8">
                    No notes to display
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
