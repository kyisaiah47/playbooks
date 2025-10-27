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

  // Get selected guide IDs from URL, fallback to localStorage if URL is empty
  const urlIds = searchParams.get('graphGuides')?.split(',').filter(Boolean);
  const localStorageIds = typeof window !== 'undefined'
    ? JSON.parse(localStorage.getItem('selectedGraphGuideIds') || '[]')
    : [];
  const selectedGuideIds = urlIds && urlIds.length > 0 ? urlIds : localStorageIds;

  // Filter guides by selection - show none if nothing selected, or all in demo mode
  const userGuides = selectedGuideIds.length > 0
    ? allUserGuides.filter(guide => selectedGuideIds.includes(guide.id))
    : (demoMode ? allUserGuides : []);

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
      <div className="flex-1 overflow-hidden p-6 flex flex-col">
        {loading ? (
          <motion.div
            className="flex items-center justify-center h-full rounded-lg border border-border/40 bg-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </motion.div>
        ) : error ? (
          <motion.div
            className="flex items-center justify-center h-full text-destructive rounded-lg border border-border/40 bg-background"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{error}</p>
          </motion.div>
        ) : selectedGuideIds.length === 0 && !demoMode ? (
          <motion.div
            className="flex flex-col items-center justify-center h-full text-muted-foreground rounded-lg border border-border/40 bg-background"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Network className="w-16 h-16 mb-4 opacity-20" />
            <p className="text-lg font-medium">No notes selected</p>
            <p className="text-sm">Select notes from the sidebar to see your knowledge graph</p>
          </motion.div>
        ) : userGuides.length === 0 && selectedGuideIds.length > 0 ? (
          <motion.div
            className="flex flex-col items-center justify-center h-full text-muted-foreground rounded-lg border border-border/40 bg-background"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Network className="w-16 h-16 mb-4 opacity-20" />
            <p className="text-lg font-medium">No data found</p>
            <p className="text-sm">The selected notes don't have any data yet</p>
          </motion.div>
        ) : (
          <motion.div
            className="flex-1 min-h-0"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <GuideGraph userGuides={userGuides} onGuideClick={handleGuideClick} />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
