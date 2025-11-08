'use client';

import { Progress } from '@/components/ui/progress';
import { Skeleton } from '@/components/ui/skeleton';
import { BookOpen } from 'lucide-react';

interface GuideProgress {
  id: string;
  name: string;
  icon: string;
  progress: number;
  totalQuestions: number;
  answeredQuestions: number;
}

interface GuideProgressListProps {
  guides: GuideProgress[];
  isLoading?: boolean;
}

export function GuideProgressList({ guides, isLoading = false }: GuideProgressListProps) {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-20 w-full" />
        ))}
      </div>
    );
  }

  if (guides.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <BookOpen className="w-12 h-12 text-muted-foreground mb-4" />
        <h3 className="text-lg font-semibold mb-2">No active guides</h3>
        <p className="text-sm text-muted-foreground">
          Start by adding guides to track your progress.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-border/40 bg-background p-6">
      <h3 className="text-lg font-semibold mb-6">Guide Progress</h3>
      <div className="space-y-6">
        {guides.map((guide) => (
          <div key={guide.id}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-lg">{guide.icon}</span>
                <span className="font-medium">{guide.name}</span>
              </div>
              <span className="text-sm text-muted-foreground">
                {guide.answeredQuestions} / {guide.totalQuestions}
              </span>
            </div>
            <Progress value={guide.progress} className="h-2" />
            <div className="mt-1 text-xs text-muted-foreground text-right">
              {Math.round(guide.progress)}% complete
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
