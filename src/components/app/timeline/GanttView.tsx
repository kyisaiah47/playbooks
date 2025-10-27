'use client';

import { useMemo } from 'react';
import { Calendar, CheckSquare } from 'lucide-react';
import { CalendarEvent, Task } from '@/types/workspace';
import { format, startOfMonth, endOfMonth, addMonths, subMonths, isSameDay } from 'date-fns';

interface GanttViewProps {
  events: CalendarEvent[];
  tasks: Task[];
}

export function GanttView({ events, tasks }: GanttViewProps) {
  const timelineData = useMemo(() => {
    const allItems = [
      ...events.filter(e => e.start_time).map(e => ({ ...e, type: 'event' as const, date: new Date(e.start_time!) })),
      ...tasks.filter(t => t.due_date).map(t => ({ ...t, type: 'task' as const, date: new Date(t.due_date!) }))
    ];

    if (allItems.length === 0) {
      return { items: [], startDate: new Date(), endDate: new Date(), totalDays: 0, months: [], days: [] };
    }

    // Find date range including today
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dates = [...allItems.map(item => item.date), today];
    let startDate = new Date(Math.min(...dates.map(d => d.getTime())));
    let endDate = new Date(Math.max(...dates.map(d => d.getTime())));

    // Add padding - 7 days before and after
    startDate = new Date(startDate);
    startDate.setDate(startDate.getDate() - 7);
    endDate = new Date(endDate);
    endDate.setDate(endDate.getDate() + 7);

    const totalDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));

    // Generate day labels
    const days: Array<{ label: string; date: Date; offset: number }> = [];
    const currentDate = new Date(startDate);

    for (let i = 0; i < totalDays; i++) {
      days.push({
        label: format(currentDate, 'd'),
        date: new Date(currentDate),
        offset: (i / totalDays) * 100,
      });
      currentDate.setDate(currentDate.getDate() + 1);
    }

    // Generate month labels for grouping
    const months: Array<{ label: string; offset: number; width: number }> = [];
    const monthDate = new Date(startDate);
    let currentMonth = monthDate.getMonth();
    let monthStartDay = 0;

    for (let i = 0; i <= totalDays; i++) {
      const testDate = new Date(startDate);
      testDate.setDate(testDate.getDate() + i);

      if (i === totalDays || testDate.getMonth() !== currentMonth) {
        months.push({
          label: format(new Date(startDate.getTime() + monthStartDay * 24 * 60 * 60 * 1000), 'MMM yyyy'),
          offset: (monthStartDay / totalDays) * 100,
          width: ((i - monthStartDay) / totalDays) * 100,
        });
        currentMonth = testDate.getMonth();
        monthStartDay = i;
      }
    }

    // Position items
    const itemsWithPositions = allItems.map(item => ({
      ...item,
      offset: ((item.date.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24) / totalDays) * 100,
    }));

    return { items: itemsWithPositions, startDate, endDate, totalDays, months, days };
  }, [events, tasks]);

  if (timelineData.items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-96 text-muted-foreground">
        <Calendar className="w-16 h-16 mb-4 opacity-20" />
        <p className="text-lg font-medium">No events or tasks to display</p>
        <p className="text-sm">Select notes from the sidebar to see their timeline</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Timeline Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold">Timeline View</h2>
          <p className="text-xs text-muted-foreground">
            {timelineData.items.length} {timelineData.items.length === 1 ? 'item' : 'items'}
          </p>
        </div>
      </div>

      {/* Gantt Chart */}
      <div className="border border-border/40 rounded-lg overflow-x-auto bg-background">
        <div style={{ width: `${timelineData.totalDays * 40}px` }}>
          {/* Month Headers Row */}
          <div className="relative h-8 bg-muted/30 border-b border-border/40">
            <div className="absolute inset-0 flex">
              {timelineData.months.map((month, index) => (
                <div
                  key={index}
                  className="relative border-r border-border/40 last:border-r-0 flex items-center justify-center"
                  style={{ width: `${month.width}%` }}
                >
                  <span className="text-[10px] font-semibold text-foreground">{month.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Day Headers Row */}
          <div className="relative h-8 bg-muted/20 border-b border-border/40">
            <div className="absolute inset-0 flex">
              {timelineData.days.map((day, index) => (
                <div
                  key={index}
                  className="relative border-r border-border/30 flex items-center justify-center"
                  style={{ width: `${100 / timelineData.totalDays}%`, minWidth: '40px' }}
                >
                  <span className="text-[10px] text-muted-foreground">{day.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Grid and Items Container */}
          <div className="relative min-h-[400px]">
            {/* Vertical Grid Lines */}
            <div className="absolute inset-0 flex pointer-events-none">
              {timelineData.days.map((day, index) => (
                <div
                  key={index}
                  className="relative border-r border-border/30"
                  style={{ width: `${100 / timelineData.totalDays}%`, minWidth: '40px' }}
                />
              ))}
            </div>

          {/* Horizontal Grid Lines */}
          <div className="absolute inset-0 pointer-events-none">
            {timelineData.items.map((_, index) => (
              <div
                key={index}
                className="border-b border-border/20"
                style={{ height: '32px' }}
              />
            ))}
          </div>

          {/* Today Marker */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-primary z-50 pointer-events-none"
            style={{
              left: `${((new Date().getTime() - timelineData.startDate.getTime()) / (1000 * 60 * 60 * 24) / timelineData.totalDays) * 100}%`,
            }}
          >
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-1.5 py-0.5 bg-primary text-white text-[9px] font-medium rounded whitespace-nowrap shadow-lg z-50">
              Today
            </div>
          </div>

          {/* Items */}
          <div className="relative" style={{ width: '100%' }}>
            {timelineData.items.map((item, index) => (
              <div key={`${item.type}-${item.id}`} className="relative h-8 flex items-center" style={{ width: '100%' }}>
                <button
                  className="absolute flex items-center group z-20"
                  style={{
                    left: `${item.offset}%`,
                    transform: 'translateX(-50%)'
                  }}
                >
                  <div className={`
                    px-2.5 py-1 rounded border flex items-center gap-1.5 shadow-sm
                    transition-all hover:shadow-md hover:scale-105 cursor-pointer
                    ${item.type === 'event'
                      ? 'bg-primary border-primary text-white hover:bg-[#5558e3]'
                      : item.status === 'done'
                        ? 'bg-green-600 border-green-600 text-white hover:bg-green-700'
                        : item.status === 'in_progress'
                          ? 'bg-blue-600 border-blue-600 text-white hover:bg-blue-700'
                          : 'bg-orange-500 border-orange-500 text-white hover:bg-orange-600'
                    }
                  `}>
                    {item.type === 'event' ? (
                      <Calendar className="w-3 h-3 flex-shrink-0" />
                    ) : (
                      <CheckSquare className="w-3 h-3 flex-shrink-0" />
                    )}
                    <span className="text-[11px] font-medium whitespace-nowrap">{item.title}</span>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
