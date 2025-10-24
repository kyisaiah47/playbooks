'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { BarChart3, Loader2 } from 'lucide-react';
import { GanttView } from '@/components/app/timeline/GanttView';

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

export default function TimelinePage() {
  const params = useParams();
  const router = useRouter();
  const workspaceId = params.workspaceId as string;

  const [userGuides, setUserGuides] = useState<UserGuide[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUserGuides() {
      try {
        setLoading(true);
        const response = await fetch(
          `/api/user-guides?workspace_id=${workspaceId}&archived=false`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch user guides');
        }

        const data = await response.json();
        setUserGuides(data.userGuides || []);
      } catch (err) {
        console.error('Error fetching user guides:', err);
        setError('Failed to load guides');
      } finally {
        setLoading(false);
      }
    }

    fetchUserGuides();
  }, [workspaceId]);

  const handleGuideClick = (guideId: string) => {
    router.push(`/app/${workspaceId}/guide/${guideId}`);
  };

  return (
    <div className="h-full w-full">
      <div className="max-w-7xl mx-auto p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-lg bg-[#6366f1]/10 flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-[#6366f1]" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Timeline</h1>
            <p className="text-sm text-muted-foreground">
              Visualize your active guides on a Gantt-style timeline
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="rounded-lg border border-border/40 bg-background p-6">
          {loading ? (
            <div className="flex items-center justify-center h-96">
              <Loader2 className="w-8 h-8 animate-spin text-[#6366f1]" />
            </div>
          ) : error ? (
            <div className="flex items-center justify-center h-96 text-destructive">
              <p>{error}</p>
            </div>
          ) : (
            <GanttView userGuides={userGuides} onGuideClick={handleGuideClick} />
          )}
        </div>

        {/* Help Text */}
        <div className="mt-6 p-4 rounded-lg bg-muted/20 border border-border/20">
          <h3 className="text-sm font-semibold mb-2">How to use the Timeline</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Each bar represents an active guide in your workspace</li>
            <li>• The length of the bar shows the estimated duration from start to completion</li>
            <li>• Progress is shown both as a percentage and as a fill within the bar</li>
            <li>• Click on any guide bar to navigate to that guide</li>
            <li>• The vertical blue line indicates today's date</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
