'use client';

import { format, isSameMonth, isToday } from 'date-fns';
import { cn } from '@/lib/utils';
import { CalendarEvent, Task } from '@/types/workspace';

interface MonthGridProps {
  calendarDays: Date[];
  currentDate: Date;
  weekDays: string[];
  getEventsForDate: (date: Date) => CalendarEvent[];
  getTasksForDate: (date: Date) => Task[];
  onDateClick: (date: Date) => void;
  onEventClick?: (event: CalendarEvent) => void;
}

export function MonthGrid({
  calendarDays,
  currentDate,
  weekDays,
  getEventsForDate,
  getTasksForDate,
  onDateClick,
  onEventClick,
}: MonthGridProps) {
  return (
    <div className="flex-1 border border-border/40 rounded-lg overflow-hidden bg-background">
      {/* Week Day Headers */}
      <div className="grid grid-cols-7 border-b border-border/40">
        {weekDays.map((day) => (
          <div
            key={day}
            className="px-3 py-2 text-sm font-medium text-muted-foreground text-center border-r border-border/40 last:border-r-0 bg-muted/30"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days Grid */}
      <div className="grid grid-cols-7 auto-rows-fr" style={{ gridTemplateRows: `repeat(${Math.ceil(calendarDays.length / 7)}, minmax(100px, 1fr))` }}>
        {calendarDays.map((day, index) => {
          const dayEvents = getEventsForDate(day);
          const dayTasks = getTasksForDate(day);
          const isCurrentMonth = isSameMonth(day, currentDate);
          const isDayToday = isToday(day);

          return (
            <div
              key={day.toISOString()}
              className={cn(
                'relative border-r border-b border-border/40 p-2 cursor-pointer transition-colors hover:bg-muted/30',
                !isCurrentMonth && 'bg-muted/10',
                isDayToday && 'bg-primary/5',
                'last-in-row:border-r-0'
              )}
              onClick={() => onDateClick(day)}
              style={{
                borderRight: (index + 1) % 7 === 0 ? 'none' : undefined,
                borderBottom: index >= calendarDays.length - 7 ? 'none' : undefined,
              }}
            >
              {/* Date Number */}
              <div className="flex items-start justify-between mb-1">
                <span
                  className={cn(
                    'text-sm font-medium',
                    !isCurrentMonth && 'text-muted-foreground/50',
                    isDayToday && 'w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs'
                  )}
                >
                  {format(day, 'd')}
                </span>
              </div>

              {/* Events and Tasks */}
              <div className="space-y-1">
                {/* Display up to 2 events */}
                {dayEvents.slice(0, 2).map((event) => (
                  <button
                    key={event.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      onEventClick?.(event);
                    }}
                    className="w-full text-left px-1.5 py-0.5 rounded text-xs truncate bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    title={event.title}
                  >
                    {event.title}
                  </button>
                ))}

                {/* Display up to 1 task (if room) */}
                {dayEvents.length < 2 && dayTasks.slice(0, 1).map((task) => (
                  <div
                    key={task.id}
                    className="px-1.5 py-0.5 rounded text-xs truncate bg-orange-500/10 text-orange-700 dark:text-orange-400"
                    title={`Task: ${task.title}`}
                  >
                    {task.title}
                  </div>
                ))}

                {/* Show more indicator */}
                {(dayEvents.length + dayTasks.length > 2) && (
                  <div className="text-xs text-muted-foreground px-1.5">
                    +{dayEvents.length + dayTasks.length - 2} more
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
