'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { LayoutDashboard, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

interface UserGuide {
  id: string;
  guide_id: string;
  progress: number;
  archived: boolean;
  created_at: string;
  updated_at: string;
  custom_name: string | null;
  guides: {
    id: string;
    name: string;
    description: string;
    icon: string | null;
  };
}

export function OverviewSidebarContent() {
  const params = useParams();
  const router = useRouter();
  const workspaceId = params.workspaceId as string;

  const [guides, setGuides] = useState<UserGuide[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGuides() {
      try {
        setLoading(true);
        const guidesResponse = await fetch(`/api/user-guides?workspace_id=${workspaceId}&archived=false`);
        const guidesData = await guidesResponse.json();
        // Sort by most recently updated
        const sortedGuides = (guidesData.userGuides || []).sort((a: UserGuide, b: UserGuide) =>
          new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        );
        setGuides(sortedGuides.slice(0, 10)); // Show only top 10
      } catch (error) {
        console.error('Error fetching guides:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchGuides();
  }, [workspaceId]);

  const handleGuideClick = (guideId: string) => {
    router.push(`/app/${workspaceId}/notes?id=${guideId}`);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-3 py-2 border-b border-border/40">
        <div className="text-[11px] font-semibold text-muted-foreground">RECENT GUIDES</div>
      </div>

      {/* Guides List */}
      <div className="flex-1 overflow-y-auto px-2 py-2">
        {loading ? (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
          </div>
        ) : guides.length === 0 ? (
          <div className="text-center py-8 px-2">
            <p className="text-[11px] text-muted-foreground">No guides yet</p>
          </div>
        ) : (
          <div className="space-y-0.5">
            {guides.map((guide) => {
              const displayName = guide.custom_name || guide.guides.name;

              return (
                <button
                  key={guide.id}
                  onClick={() => handleGuideClick(guide.id)}
                  className="w-full text-left px-2 py-2 rounded text-sm transition-colors hover:bg-muted/50"
                >
                  <div className="font-medium text-foreground text-[11px] truncate mb-0.5">
                    {displayName}
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-muted-foreground/70">
                    <span>{guide.progress}% complete</span>
                    <span>{format(new Date(guide.updated_at), 'MMM d')}</span>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Info Text */}
      <div className="p-3 border-t border-border/40">
        <p className="text-[10px] text-muted-foreground">
          Recently updated guides
        </p>
      </div>
    </div>
  );
}
