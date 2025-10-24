'use client';

import { useMemo } from 'react';
import { TimelineBar } from './TimelineBar';
import { Calendar } from 'lucide-react';

interface UserGuide {
  id: string;
  guides: {
    id: string;
    name: string;
    description: string;
    icon: string;
  };
  progress: number;
  created_at: string;
  archived: boolean;
}

interface GanttViewProps {
  userGuides: UserGuide[];
  onGuideClick: (guideId: string) => void;
}

export function GanttView({ userGuides, onGuideClick }: GanttViewProps) {
  // Calculate timeline data
  const timelineData = useMemo(() => {
    if (!userGuides || userGuides.length === 0) {
      return {
        guides: [],
        startDate: new Date(),
        endDate: new Date(),
        totalDays: 0,
        months: [],
      };
    }

    // Calculate dates and durations for each guide
    const guidesWithDates = userGuides.map((ug) => {
      const startDate = new Date(ug.created_at);

      // Estimate completion based on guide complexity
      // For demo purposes, using a simple 30-60 day range based on progress
      const estimatedDurationDays = ug.progress === 0 ? 60 : Math.max(30, Math.ceil(60 * (1 - ug.progress / 100)));
      const estimatedEndDate = new Date(startDate);
      estimatedEndDate.setDate(estimatedEndDate.getDate() + estimatedDurationDays);

      // Determine category from guide name/description (simplified)
      const category = determineCategory(ug.guides.name, ug.guides.description);

      return {
        id: ug.id,
        name: ug.guides.name,
        icon: ug.guides.icon || '📚',
        category,
        progress: ug.progress,
        startDate,
        estimatedEndDate,
      };
    });

    // Find overall timeline bounds
    const allDates = guidesWithDates.flatMap((g) => [g.startDate, g.estimatedEndDate]);
    const startDate = new Date(Math.min(...allDates.map((d) => d.getTime())));
    const endDate = new Date(Math.max(...allDates.map((d) => d.getTime())));

    // Add padding
    startDate.setDate(startDate.getDate() - 7);
    endDate.setDate(endDate.getDate() + 7);

    const totalDays = Math.ceil(
      (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
    );

    // Generate month labels
    const months: Array<{ label: string; offset: number; width: number }> = [];
    const currentDate = new Date(startDate);
    currentDate.setDate(1); // Start at first of month

    while (currentDate <= endDate) {
      const monthStart = new Date(currentDate);
      const monthEnd = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

      const daysFromStart = Math.ceil(
        (monthStart.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
      );
      const monthDays = monthEnd.getDate();

      months.push({
        label: monthStart.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
        offset: (daysFromStart / totalDays) * 100,
        width: (monthDays / totalDays) * 100,
      });

      currentDate.setMonth(currentDate.getMonth() + 1);
    }

    // Calculate positions for each guide
    const guidesWithPositions = guidesWithDates.map((guide) => {
      const startOffset =
        ((guide.startDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) / totalDays * 100;
      const endOffset =
        ((guide.estimatedEndDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) / totalDays * 100;
      const width = endOffset - startOffset;

      return {
        ...guide,
        startOffset,
        width,
      };
    });

    return {
      guides: guidesWithPositions,
      startDate,
      endDate,
      totalDays,
      months,
    };
  }, [userGuides]);

  if (!userGuides || userGuides.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-96 text-muted-foreground">
        <Calendar className="w-16 h-16 mb-4 opacity-20" />
        <p className="text-lg font-medium">No active guides to display</p>
        <p className="text-sm">Start a guide to see it on your timeline</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Timeline Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Active Guides Timeline</h2>
          <p className="text-sm text-muted-foreground">
            {timelineData.guides.length} active {timelineData.guides.length === 1 ? 'guide' : 'guides'}
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
          {timelineData.startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} -{' '}
          {timelineData.endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </div>
      </div>

      {/* Gantt Chart */}
      <div className="relative">
        {/* Month Headers */}
        <div className="relative h-12 mb-2">
          <div className="absolute left-52 top-0 right-0 flex border-b border-border/40">
            {timelineData.months.map((month, index) => (
              <div
                key={index}
                className="relative border-r border-border/20 last:border-r-0"
                style={{
                  marginLeft: index === 0 ? `${month.offset}%` : '0',
                  width: `${month.width}%`,
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-medium text-muted-foreground">
                    {month.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Date Marker */}
        <div
          className="absolute left-52 top-12 bottom-0 w-0.5 bg-[#6366f1] z-10 pointer-events-none"
          style={{
            marginLeft: `calc(${
              ((new Date().getTime() - timelineData.startDate.getTime()) /
                (1000 * 60 * 60 * 24) /
                timelineData.totalDays) *
              100
            }% + (100% - 13rem) * ${
              ((new Date().getTime() - timelineData.startDate.getTime()) /
                (1000 * 60 * 60 * 24) /
                timelineData.totalDays)
            })`,
          }}
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-[#6366f1] text-white text-[10px] font-medium rounded whitespace-nowrap">
            Today
          </div>
        </div>

        {/* Timeline Bars */}
        <div className="space-y-2">
          {timelineData.guides.map((guide) => (
            <TimelineBar
              key={guide.id}
              guide={guide}
              startOffset={guide.startOffset}
              width={guide.width}
              totalDays={timelineData.totalDays}
              onGuideClick={onGuideClick}
            />
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="pt-4 border-t border-border/40">
        <div className="flex flex-wrap gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-purple-500" />
            <span className="text-muted-foreground">Career & Work</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-blue-500" />
            <span className="text-muted-foreground">Personal Development</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-pink-500" />
            <span className="text-muted-foreground">Relationships</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-green-500" />
            <span className="text-muted-foreground">Health & Wellness</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-amber-500" />
            <span className="text-muted-foreground">Life Transitions</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-emerald-500" />
            <span className="text-muted-foreground">Financial</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper function to determine category from guide data
function determineCategory(name: string, description: string): string {
  const text = (name + ' ' + description).toLowerCase();

  if (text.includes('career') || text.includes('work') || text.includes('job') || text.includes('interview')) {
    return 'Career & Work';
  }
  if (text.includes('relationship') || text.includes('wedding') || text.includes('marriage') || text.includes('family')) {
    return 'Relationships';
  }
  if (text.includes('health') || text.includes('fitness') || text.includes('wellness') || text.includes('exercise')) {
    return 'Health & Wellness';
  }
  if (text.includes('move') || text.includes('transition') || text.includes('change') || text.includes('home')) {
    return 'Life Transitions';
  }
  if (text.includes('money') || text.includes('financial') || text.includes('budget') || text.includes('invest')) {
    return 'Financial';
  }

  return 'Personal Development';
}
