'use client';

import { useState } from 'react';
import {
  GanttProvider,
  GanttSidebar,
  GanttSidebarGroup,
  GanttSidebarItem,
  GanttTimeline,
  GanttHeader,
  GanttFeatureList,
  GanttFeatureListGroup,
  GanttFeatureRow,
  GanttToday,
  type GanttFeature,
  type GanttStatus,
} from '@/components/ui/shadcn-io/gantt';
import { IconTimeline } from '@tabler/icons-react';
import { addDays } from 'date-fns';

interface TimelineViewProps {
  templateId: string | null;
}

const statuses: GanttStatus[] = [
  { id: '1', name: 'Pending', color: '#94a3b8' },
  { id: '2', name: 'In Progress', color: '#60a5fa' },
  { id: '3', name: 'Completed', color: '#34d399' },
];

export function TimelineView({ templateId }: TimelineViewProps) {
  const today = new Date();

  // Mock prompts with timeline data
  const [features] = useState<GanttFeature[]>([
    {
      id: '1',
      name: 'Define your wedding vision',
      startAt: addDays(today, -30),
      endAt: addDays(today, -25),
      status: statuses[2], // Completed
    },
    {
      id: '2',
      name: 'Set your budget',
      startAt: addDays(today, -20),
      endAt: addDays(today, -10),
      status: statuses[1], // In Progress
    },
    {
      id: '3',
      name: 'Choose your venue',
      startAt: addDays(today, -5),
      endAt: addDays(today, 15),
      status: statuses[1], // In Progress
    },
    {
      id: '4',
      name: 'Create guest list',
      startAt: addDays(today, 10),
      endAt: addDays(today, 25),
      status: statuses[0], // Pending
    },
    {
      id: '5',
      name: 'Select vendors',
      startAt: addDays(today, 20),
      endAt: addDays(today, 40),
      status: statuses[0], // Pending
    },
    {
      id: '6',
      name: 'Send invitations',
      startAt: addDays(today, 35),
      endAt: addDays(today, 50),
      status: statuses[0], // Pending
    },
  ]);

  const handleMove = (id: string, startDate: Date, endDate: Date | null) => {
    console.log('Move feature:', id, startDate, endDate);
    // Handle feature move
  };

  if (!templateId) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <IconTimeline className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-lg font-semibold mb-2">No Template Selected</h3>
          <p className="text-sm text-muted-foreground">
            Select a template from the dock to view timeline
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-hidden p-6">
      <div className="h-full flex flex-col">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Timeline View</h2>
          <p className="text-sm text-muted-foreground">
            Visualize prompts on a timeline. Drag to adjust dates.
          </p>
        </div>

        <div className="flex-1 min-h-0">
          <GanttProvider range="monthly" zoom={100}>
            <GanttSidebar>
              <GanttSidebarGroup name="Wedding Planning">
                {features.map((feature) => (
                  <GanttSidebarItem key={feature.id} feature={feature} />
                ))}
              </GanttSidebarGroup>
            </GanttSidebar>

            <GanttTimeline>
              <GanttHeader />
              <GanttFeatureList>
                <GanttFeatureListGroup>
                  <GanttFeatureRow features={features} onMove={handleMove} />
                </GanttFeatureListGroup>
              </GanttFeatureList>
              <GanttToday />
            </GanttTimeline>
          </GanttProvider>
        </div>
      </div>
    </div>
  );
}
