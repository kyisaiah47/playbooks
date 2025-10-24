'use client';

import { useSearchParams } from 'next/navigation';
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
  const searchParams = useSearchParams();
  const selectedReadingId = searchParams.get('readingId');
  const queryClient = useQueryClient();

  // Fetch user's active guides first
  const { data: userGuidesData, isLoading: userGuidesLoading } = useQuery({
    queryKey: ['user-guides', workspaceId],
    queryFn: async () => {
      const response = await fetch(`/api/user-guides?workspace_id=${workspaceId}&archived=false`);
      if (!response.ok) throw new Error('Failed to fetch user guides');
      return response.json();
    },
  });

  // Fetch all readings (from guide_sections joined with guides)
  const { data: readingsData, isLoading: readingsLoading } = useQuery({
    queryKey: ['readings', workspaceId],
    queryFn: async () => {
      const response = await fetch(`/api/readings?workspace_id=${workspaceId}`);
      if (!response.ok) throw new Error('Failed to fetch readings');
      return response.json();
    },
    enabled: !!userGuidesData, // Only fetch readings after we have user guides
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

  const userGuides = userGuidesData?.userGuides || [];

  // Readings are already filtered by the API
  const readings: Reading[] = readingsData?.readings || [];

  const progress: ReadingProgress[] = progressData?.progress || [];
  const progressMap = new Map(progress.map((p) => [p.guide_section_id, p]));

  const isLoading = readingsLoading || progressLoading || userGuidesLoading;

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="h-32 w-full" />
        ))}
      </div>
    );
  }

  const selectedReading = readings.find(r => r.id === selectedReadingId);

  if (readings.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-12 text-center">
        <BookOpen className="w-12 h-12 text-muted-foreground mb-4" />
        <h3 className="text-lg font-semibold mb-2">No readings available</h3>
        <p className="text-sm text-muted-foreground">
          Start by adding guides to your workspace to access curated readings.
        </p>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto">
      {selectedReading ? (
        <div className="max-w-4xl mx-auto p-8">
          <div className="mb-6">
            <div className="text-xs text-muted-foreground mb-2">{selectedReading.guide_name}</div>
            <h1 className="text-3xl font-bold mb-2">{selectedReading.title}</h1>
            <p className="text-sm text-muted-foreground">{selectedReading.description}</p>
            <div className="flex items-center gap-3 mt-4">
              <span className="text-xs text-muted-foreground">{selectedReading.reading_time} min read</span>
              <button
                onClick={() => toggleReadMutation.mutate({
                  id: selectedReading.id,
                  isRead: !progressMap.has(selectedReading.id)
                })}
                className={`text-xs px-3 py-1 rounded-full transition-colors ${
                  progressMap.has(selectedReading.id)
                    ? 'bg-green-500/10 text-green-600 hover:bg-green-500/20'
                    : 'bg-muted hover:bg-muted/80'
                }`}
              >
                {progressMap.has(selectedReading.id) ? 'Mark as Unread' : 'Mark as Read'}
              </button>
            </div>
          </div>
          <div className="prose prose-sm max-w-none">
            <div dangerouslySetInnerHTML={{ __html: selectedReading.content }} />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full text-center">
          <BookOpen className="w-12 h-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">Select a reading</h3>
          <p className="text-sm text-muted-foreground">
            Choose a reading from the sidebar to view its content
          </p>
        </div>
      )}
    </div>
  );
}
