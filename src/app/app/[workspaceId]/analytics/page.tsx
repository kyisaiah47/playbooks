'use client';

import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { TrendingUp, Loader2, Activity, Calendar, CheckCircle2, Clock } from 'lucide-react';
import { format, startOfWeek, endOfWeek, eachDayOfInterval, isWithinInterval, parseISO, startOfMonth, endOfMonth, subMonths } from 'date-fns';

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
  const workspaceId = params.workspaceId as string;

  const [allUserGuides, setAllUserGuides] = useState<UserGuide[]>([]);
  const [allTasks, setAllTasks] = useState<Task[]>([]);
  const [allEvents, setAllEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);

  // Get selected guide IDs from URL
  const selectedGuideIds = searchParams.get('analyticsGuides')?.split(',').filter(Boolean) || [];

  // Filter by selection
  const userGuides = selectedGuideIds.length > 0
    ? allUserGuides.filter(guide => selectedGuideIds.includes(guide.id))
    : allUserGuides;

  const tasks = selectedGuideIds.length > 0
    ? allTasks.filter(task => task.user_guide_id && selectedGuideIds.includes(task.user_guide_id))
    : allTasks;

  const events = selectedGuideIds.length > 0
    ? allEvents.filter(event => event.user_guide_id && selectedGuideIds.includes(event.user_guide_id))
    : allEvents;

  useEffect(() => {
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
  }, [workspaceId]);

  // Calculate stats
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(t => t.status === 'completed').length;
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  const avgProgress = userGuides.length > 0
    ? Math.round(userGuides.reduce((acc, g) => acc + g.progress, 0) / userGuides.length)
    : 0;

  // Activity over last 30 days
  const getLast30DaysActivity = () => {
    const last30Days = [];
    const today = new Date();

    for (let i = 29; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = format(date, 'yyyy-MM-dd');

      const tasksCreated = tasks.filter(t => format(parseISO(t.created_at), 'yyyy-MM-dd') === dateStr).length;
      const tasksCompleted = tasks.filter(t => t.completed_at && format(parseISO(t.completed_at), 'yyyy-MM-dd') === dateStr).length;
      const eventsCreated = events.filter(e => format(parseISO(e.created_at), 'yyyy-MM-dd') === dateStr).length;

      last30Days.push({
        date: dateStr,
        tasks: tasksCreated,
        completed: tasksCompleted,
        events: eventsCreated,
        total: tasksCreated + tasksCompleted + eventsCreated
      });
    }

    return last30Days;
  };

  const activityData = getLast30DaysActivity();
  const maxActivity = Math.max(...activityData.map(d => d.total), 1);

  return (
    <div className="h-full w-full flex flex-col overflow-hidden">
      {/* Header */}
      <div className="border-b border-border/40 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#6366f1]/10 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-[#6366f1]" />
          </div>
          <div>
            <h1 className="text-xl font-semibold">Analytics</h1>
            <p className="text-xs text-muted-foreground">Usage history and statistics</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-6">
        {loading ? (
          <div className="flex items-center justify-center h-96">
            <Loader2 className="w-8 h-8 animate-spin text-[#6366f1]" />
          </div>
        ) : (
          <div className="space-y-4">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="rounded-lg border border-border/40 bg-background p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Active Notes</span>
                </div>
                <div className="text-2xl font-bold">{userGuides.length}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {avgProgress}% avg progress
                </div>
              </div>

              <div className="rounded-lg border border-border/40 bg-background p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-muted-foreground">Completion Rate</span>
                </div>
                <div className="text-2xl font-bold text-green-500">{completionRate}%</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {completedTasks}/{totalTasks} tasks done
                </div>
              </div>

              <div className="rounded-lg border border-border/40 bg-background p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Total Tasks</span>
                </div>
                <div className="text-2xl font-bold">{totalTasks}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {tasks.filter(t => t.status !== 'completed').length} pending
                </div>
              </div>

              <div className="rounded-lg border border-border/40 bg-background p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Events</span>
                </div>
                <div className="text-2xl font-bold">{events.length}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  Total scheduled
                </div>
              </div>
            </div>

            {/* Activity Chart - Last 30 Days */}
            <div className="rounded-lg border border-border/40 bg-background p-4">
              <h3 className="text-sm font-semibold mb-4">Activity Last 30 Days</h3>
              <div className="space-y-2">
                {activityData.map((day) => (
                  <div key={day.date} className="flex items-center gap-2">
                    <div className="text-[10px] text-muted-foreground w-16 flex-shrink-0">
                      {format(parseISO(day.date), 'MMM d')}
                    </div>
                    <div className="flex-1 flex items-center gap-1">
                      <div
                        className="h-6 bg-[#6366f1]/20 rounded flex items-center justify-center text-[10px] font-medium"
                        style={{ width: `${(day.total / maxActivity) * 100}%`, minWidth: day.total > 0 ? '20px' : '0' }}
                      >
                        {day.total > 0 && day.total}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Note Statistics */}
            <div className="rounded-lg border border-border/40 bg-background p-4">
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
                        <div className="text-sm font-semibold text-[#6366f1]">{guide.progress}%</div>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden mb-2">
                        <div
                          className="h-full bg-[#6366f1] transition-all"
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
