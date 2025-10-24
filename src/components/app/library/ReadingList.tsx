'use client';

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ReadingCard } from './ReadingCard';
import { Skeleton } from '@/components/ui/skeleton';
import { BookOpen } from 'lucide-react';

interface Reading {
  id: string;
  title: string;
  content: string;
  description: string;
  guide_id: string;
  guide_name: string;
  reading_time: number;
}

interface ReadingProgress {
  id: string;
  guide_section_id: string;
  completed_at: string;
}

interface ReadingListProps {
  workspaceId: string;
}

export function ReadingList({ workspaceId }: ReadingListProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'guide'>('all');
  const queryClient = useQueryClient();

  // Fetch all readings (from guide_sections joined with guides)
  const { data: readingsData, isLoading: readingsLoading } = useQuery({
    queryKey: ['readings'],
    queryFn: async () => {
      const response = await fetch('/api/guides');
      if (!response.ok) throw new Error('Failed to fetch readings');
      return response.json();
    },
  });

  // Fetch reading progress
  const { data: progressData, isLoading: progressLoading } = useQuery({
    queryKey: ['reading-progress'],
    queryFn: async () => {
      const response = await fetch('/api/reading-progress');
      if (!response.ok) throw new Error('Failed to fetch reading progress');
      return response.json();
    },
  });

  // Toggle read/unread status
  const toggleReadMutation = useMutation({
    mutationFn: async ({ id, isRead }: { id: string; isRead: boolean }) => {
      if (isRead) {
        // Mark as read
        const response = await fetch('/api/reading-progress', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ guide_section_id: id }),
        });
        if (!response.ok) throw new Error('Failed to mark as read');
        return response.json();
      } else {
        // Mark as unread (delete progress)
        const response = await fetch(`/api/reading-progress?guide_section_id=${id}`, {
          method: 'DELETE',
        });
        if (!response.ok) throw new Error('Failed to mark as unread');
        return response.json();
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reading-progress'] });
    },
  });

  const readings: Reading[] = readingsData?.guides || [];
  const progress: ReadingProgress[] = progressData?.progress || [];
  const progressMap = new Map(progress.map((p) => [p.guide_section_id, p]));

  const isLoading = readingsLoading || progressLoading;

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="h-32 w-full" />
        ))}
      </div>
    );
  }

  if (readings.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <BookOpen className="w-12 h-12 text-muted-foreground mb-4" />
        <h3 className="text-lg font-semibold mb-2">No readings available</h3>
        <p className="text-sm text-muted-foreground">
          Start by adding guides to your workspace to access curated readings.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as 'all' | 'guide')}>
        <TabsList>
          <TabsTrigger value="all">All Readings</TabsTrigger>
          <TabsTrigger value="guide">By Guide</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4 mt-6">
          {readings.map((reading) => (
            <ReadingCard
              key={reading.id}
              id={reading.id}
              title={reading.title}
              description={reading.description}
              guideName={reading.guide_name}
              readingTime={reading.reading_time}
              isRead={progressMap.has(reading.id)}
              onToggleRead={(id, isRead) => toggleReadMutation.mutate({ id, isRead })}
              onClick={() => {
                // Handle click to view reading content
                console.log('View reading:', reading.id);
              }}
            />
          ))}
        </TabsContent>

        <TabsContent value="guide" className="mt-6">
          {/* Group readings by guide */}
          {Object.entries(
            readings.reduce((acc, reading) => {
              if (!acc[reading.guide_id]) {
                acc[reading.guide_id] = {
                  name: reading.guide_name,
                  readings: [],
                };
              }
              acc[reading.guide_id].readings.push(reading);
              return acc;
            }, {} as Record<string, { name: string; readings: Reading[] }>)
          ).map(([guideId, { name, readings: guideReadings }]) => (
            <div key={guideId} className="mb-8">
              <h3 className="text-lg font-semibold mb-4">{name}</h3>
              <div className="space-y-4">
                {guideReadings.map((reading) => (
                  <ReadingCard
                    key={reading.id}
                    id={reading.id}
                    title={reading.title}
                    description={reading.description}
                    guideName={name}
                    readingTime={reading.reading_time}
                    isRead={progressMap.has(reading.id)}
                    onToggleRead={(id, isRead) => toggleReadMutation.mutate({ id, isRead })}
                    onClick={() => {
                      console.log('View reading:', reading.id);
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
