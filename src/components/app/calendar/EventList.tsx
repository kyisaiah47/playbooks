'use client';

import { format, isSameDay, isToday, isTomorrow, addDays } from 'date-fns';
import { Calendar, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CalendarEvent, Task } from '@/types/workspace';

interface EventListProps {
  events: CalendarEvent[];
  tasks: Task[];
  onEventClick?: (event: CalendarEvent) => void;
}

interface EventItem {
  type: 'event' | 'task';
  id: string;
  title: string;
  date: Date;
  time?: string;
  description?: string | null;
  data: CalendarEvent | Task;
}

export function EventList({ events, tasks, onEventClick }: EventListProps) {
  // Combine events and tasks into a single list
  const now = new Date();
  const nextWeek = addDays(now, 7);

  const upcomingItems: EventItem[] = [
    ...events
      .filter(event => {
        const eventDate = new Date(event.date);
        return eventDate >= now && eventDate <= nextWeek;
      })
      .map(event => ({
        type: 'event' as const,
        id: event.id,
        title: event.title,
        date: new Date(event.date),
        description: event.description,
        data: event,
      })),
    ...tasks
      .filter(task => {
        if (!task.due_date || task.status === 'done') return false;
        const taskDate = new Date(task.due_date);
        return taskDate >= now && taskDate <= nextWeek;
      })
      .map(task => ({
        type: 'task' as const,
        id: task.id,
        title: task.title,
        date: new Date(task.due_date!),
        description: task.description,
        data: task,
      })),
  ].sort((a, b) => a.date.getTime() - b.date.getTime());

  const getDateLabel = (date: Date) => {
    if (isToday(date)) return 'Today';
    if (isTomorrow(date)) return 'Tomorrow';
    return format(date, 'EEE, MMM d');
  };

  // Group items by date
  const groupedItems = upcomingItems.reduce((acc, item) => {
    const dateKey = format(item.date, 'yyyy-MM-dd');
    if (!acc[dateKey]) {
      acc[dateKey] = {
        date: item.date,
        items: [],
      };
    }
    acc[dateKey].items.push(item);
    return acc;
  }, {} as Record<string, { date: Date; items: EventItem[] }>);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Calendar className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold">Upcoming Events</h3>
      </div>

      {upcomingItems.length === 0 ? (
        <div className="rounded-lg border border-border/40 bg-muted/20 p-6 text-center">
          <p className="text-sm text-muted-foreground">
            No upcoming events in the next 7 days
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {Object.entries(groupedItems).map(([dateKey, { date, items }]) => (
            <div key={dateKey} className="space-y-2">
              {/* Date Header */}
              <div className="flex items-center gap-2">
                <div className="h-px flex-1 bg-border/40" />
                <span className="text-sm font-medium text-muted-foreground px-2">
                  {getDateLabel(date)}
                </span>
                <div className="h-px flex-1 bg-border/40" />
              </div>

              {/* Items for this date */}
              <div className="space-y-2">
                {items.map((item) => (
                  <button
                    key={`${item.type}-${item.id}`}
                    onClick={() => {
                      if (item.type === 'event' && onEventClick) {
                        onEventClick(item.data as CalendarEvent);
                      }
                    }}
                    className={cn(
                      'w-full text-left rounded-lg border border-border/40 p-3 hover:bg-muted/30 transition-colors',
                      item.type === 'event' && 'hover:border-primary/30'
                    )}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={cn(
                          'w-1 h-full rounded-full shrink-0',
                          item.type === 'event'
                            ? 'bg-primary'
                            : 'bg-orange-500'
                        )}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-medium text-sm truncate">
                            {item.title}
                          </h4>
                          {item.time && (
                            <span className="text-xs text-muted-foreground flex items-center gap-1 shrink-0">
                              <Clock className="w-3 h-3" />
                              {item.time}
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                            {item.description}
                          </p>
                        )}
                        <div className="mt-2">
                          <span
                            className={cn(
                              'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium',
                              item.type === 'event'
                                ? 'bg-primary/10 text-primary'
                                : 'bg-orange-500/10 text-orange-700 dark:text-orange-400'
                            )}
                          >
                            {item.type === 'event' ? 'Event' : 'Task Due'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
