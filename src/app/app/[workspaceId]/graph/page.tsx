'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Network, Loader2 } from 'lucide-react';
import { GuideGraph } from '@/components/app/graph/GuideGraph';

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

export default function GraphPage() {
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
            <Network className="w-5 h-5 text-[#6366f1]" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Knowledge Graph</h1>
            <p className="text-sm text-muted-foreground">
              Explore connections between your active guides
            </p>
          </div>
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex items-center justify-center h-96 rounded-lg border border-border/40 bg-background">
            <Loader2 className="w-8 h-8 animate-spin text-[#6366f1]" />
          </div>
        ) : error ? (
          <div className="flex items-center justify-center h-96 text-destructive rounded-lg border border-border/40 bg-background">
            <p>{error}</p>
          </div>
        ) : (
          <GuideGraph userGuides={userGuides} onGuideClick={handleGuideClick} />
        )}

        {/* Legend and Help */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Category Legend */}
          <div className="p-4 rounded-lg bg-muted/20 border border-border/20">
            <h3 className="text-sm font-semibold mb-3">Categories</h3>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-500" />
                <span className="text-muted-foreground">Career & Work</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <span className="text-muted-foreground">Personal Dev</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-pink-500" />
                <span className="text-muted-foreground">Relationships</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-muted-foreground">Health</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="text-muted-foreground">Life Transitions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-muted-foreground">Financial</span>
              </div>
            </div>
          </div>

          {/* How to Use */}
          <div className="p-4 rounded-lg bg-muted/20 border border-border/20">
            <h3 className="text-sm font-semibold mb-3">How to use the Graph</h3>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Each node represents an active guide</li>
              <li>• The ring shows completion progress</li>
              <li>• Click on any node to open that guide</li>
              <li>• Drag nodes to rearrange the layout</li>
              <li>• Zoom and pan to explore connections</li>
              <li>• Lines show relationships between guides</li>
            </ul>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-4 p-4 rounded-lg bg-[#6366f1]/5 border border-[#6366f1]/20">
          <h3 className="text-sm font-semibold mb-2 text-[#6366f1]">Understanding Connections</h3>
          <div className="text-xs text-muted-foreground space-y-1">
            <p>
              <strong>Solid lines:</strong> Guides in the same category - these may have similar goals or approaches
            </p>
            <p>
              <strong>Dashed lines:</strong> Guides with shared keywords - indicating thematic overlap or complementary content
            </p>
            <p className="mt-2 italic">
              The graph helps you discover synergies between your guides and identify areas where your learning connects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
