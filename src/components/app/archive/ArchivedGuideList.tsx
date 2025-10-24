'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { RotateCcw, Trash2, Calendar, Archive as ArchiveIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { toast } from 'sonner';

interface ArchivedGuide {
  id: string;
  guide_id: string;
  archived_at: string;
  completed_at?: string;
  guides: {
    name: string;
    description: string;
    icon: string;
  };
}

interface ArchivedGuideListProps {
  workspaceId: string;
}

export function ArchivedGuideList({ workspaceId }: ArchivedGuideListProps) {
  const queryClient = useQueryClient();

  // Fetch archived guides
  const { data, isLoading } = useQuery({
    queryKey: ['archived-guides', workspaceId],
    queryFn: async () => {
      const response = await fetch(`/api/user-guides?workspace_id=${workspaceId}&archived=true`);
      if (!response.ok) throw new Error('Failed to fetch archived guides');
      return response.json();
    },
  });

  // Restore guide mutation
  const restoreMutation = useMutation({
    mutationFn: async (userGuideId: string) => {
      const response = await fetch(`/api/user-guides/${userGuideId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ archived: false }),
      });
      if (!response.ok) throw new Error('Failed to restore guide');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['archived-guides', workspaceId] });
      queryClient.invalidateQueries({ queryKey: ['user-guides', workspaceId] });
      toast.success('Guide restored successfully');
    },
    onError: () => {
      toast.error('Failed to restore guide');
    },
  });

  // Delete guide mutation
  const deleteMutation = useMutation({
    mutationFn: async (userGuideId: string) => {
      const response = await fetch(`/api/user-guides/${userGuideId}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete guide');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['archived-guides', workspaceId] });
      toast.success('Guide deleted permanently');
    },
    onError: () => {
      toast.error('Failed to delete guide');
    },
  });

  const archivedGuides: ArchivedGuide[] = data?.userGuides || [];

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-32 w-full" />
        ))}
      </div>
    );
  }

  if (archivedGuides.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <ArchiveIcon className="w-12 h-12 text-muted-foreground mb-4" />
        <h3 className="text-lg font-semibold mb-2">No archived guides</h3>
        <p className="text-sm text-muted-foreground">
          Guides you archive will appear here. You can restore or delete them at any time.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {archivedGuides.map((archivedGuide) => (
        <div
          key={archivedGuide.id}
          className="rounded-lg border border-border/40 bg-background p-6 hover:border-border/60 transition-all"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{archivedGuide.guides.icon}</span>
                <h3 className="text-xl font-semibold">{archivedGuide.guides.name}</h3>
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                {archivedGuide.guides.description}
              </p>

              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                {archivedGuide.completed_at && (
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>
                      Completed{' '}
                      {new Date(archivedGuide.completed_at).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <ArchiveIcon className="w-3 h-3" />
                  <span>
                    Archived{' '}
                    {new Date(archivedGuide.archived_at).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => restoreMutation.mutate(archivedGuide.id)}
                disabled={restoreMutation.isPending}
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Restore
              </Button>

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-red-600 hover:text-red-700 hover:bg-red-600/10"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Delete guide permanently?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This will permanently delete "{archivedGuide.guides.name}" and all associated
                      responses. This action cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => deleteMutation.mutate(archivedGuide.id)}
                      className="bg-red-600 hover:bg-red-700"
                    >
                      Delete Permanently
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
