'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { Network, Loader2 } from 'lucide-react';
import { GuideGraph } from '@/components/app/graph/GuideGraph';
import { motion } from 'framer-motion';
import { useDemo } from '@/contexts/demo-context';
import { DEMO_WORKSPACE_ID } from '@/lib/demo-constants';

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
  const searchParams = useSearchParams();
  const { demoMode } = useDemo();
  const workspaceId = demoMode ? DEMO_WORKSPACE_ID : (params.workspaceId as string);

  const [allUserGuides, setAllUserGuides] = useState<UserGuide[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Get selected guide IDs from URL
  const selectedGuideIds = searchParams.get('graphGuides')?.split(',').filter(Boolean) || [];

  // Filter guides by selection - show none if nothing selected
  const userGuides = selectedGuideIds.length > 0
    ? allUserGuides.filter(guide => selectedGuideIds.includes(guide.id))
    : [];

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
        setAllUserGuides(data.userGuides || []);
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
    <motion.div
      className="h-full w-full flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="border-b border-border/40 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Network className="w-4 h-4 text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-semibold">Knowledge Graph</h1>
            <p className="text-xs text-muted-foreground">
              Explore connections between your active guides
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-6">

        {/* Content */}
        {loading ? (
          <motion.div
            className="flex items-center justify-center h-96 rounded-lg border border-border/40 bg-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </motion.div>
        ) : error ? (
          <motion.div
            className="flex items-center justify-center h-96 text-destructive rounded-lg border border-border/40 bg-background"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{error}</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <GuideGraph userGuides={userGuides} onGuideClick={handleGuideClick} />
          </motion.div>
        )}

        {/* Legend and Help */}
        <motion.div
          className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
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
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-4 p-4 rounded-lg bg-primary/5 border border-primary/20"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <h3 className="text-sm font-semibold mb-2 text-primary">Understanding Connections</h3>
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
        </motion.div>
      </div>
    </motion.div>
  );
}
