'use client';

import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ReadingCard } from './ReadingCard';
import { Skeleton } from '@/components/ui/skeleton';
import { BookOpen, User, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { ReadingContent } from '@/components/readings/ReadingContent';
import { useDemo } from '@/contexts/demo-context';

interface Reading {
  id: string;
  title: string;
  content: string;
  description: string;
  guide_id: string;
  guide_name: string;
  reading_time: number;
  author?: string | null;
  type?: string;
}

interface ReadingListProps {
  workspaceId: string;
}

export function ReadingList({ workspaceId }: ReadingListProps) {
  const searchParams = useSearchParams();
  const { demoMode, selectedReadingId: demoReadingId } = useDemo();
  const selectedReadingId = demoMode ? demoReadingId : searchParams.get('readingId');

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

  const userGuides = userGuidesData?.userGuides || [];

  // Readings are already filtered by the API
  const readings: Reading[] = readingsData?.readings || [];

  const isLoading = readingsLoading || userGuidesLoading;

  const selectedReading = readings.find(r => r.id === selectedReadingId);

  if (readings.length === 0) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center h-full py-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <BookOpen className="w-12 h-12 text-muted-foreground mb-4" />
        <h3 className="text-lg font-semibold mb-2">No readings available</h3>
        <p className="text-sm text-muted-foreground">
          Start by adding guides to your workspace to access curated readings.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="h-full overflow-y-auto">
      {selectedReading ? (
        <motion.div
          key={selectedReading.id}
          className="w-full p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="text-xs text-muted-foreground mb-2">{selectedReading.guide_name}</div>
            <h1 className="text-3xl font-bold mb-2">{selectedReading.title}</h1>
            <div className="flex items-center gap-4 mt-4">
              <span className="text-xs text-muted-foreground">{selectedReading.reading_time} min read</span>
              {selectedReading.author && (
                <>
                  <span className="text-xs text-muted-foreground">•</span>
                  <div className="flex items-center gap-1.5">
                    <User className="w-3 h-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{selectedReading.author}</span>
                  </div>
                </>
              )}
              {selectedReading.type && (
                <>
                  <span className="text-xs text-muted-foreground">•</span>
                  <div className="flex items-center gap-1.5">
                    <FileText className="w-3 h-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground capitalize">{selectedReading.type}</span>
                  </div>
                </>
              )}
            </div>
          </motion.div>
          <motion.div
            className="w-full max-w-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <ReadingContent content={selectedReading.content} />
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          className="flex flex-col items-center justify-center h-full text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <BookOpen className="w-12 h-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">Select a reading</h3>
          <p className="text-sm text-muted-foreground">
            Choose a reading from the sidebar to view its content
          </p>
        </motion.div>
      )}
    </div>
  );
}
