'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Search, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useDemo } from '@/contexts/demo-context';
import { DEMO_WORKSPACE_ID } from '@/lib/demo-constants';

interface ArchivedGuide {
  id: string;
  guide_id: string;
  progress: number;
  archived: boolean;
  archived_at: string;
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

import { useRouter, useSearchParams } from 'next/navigation';

export function ArchiveSidebarContent() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { demoMode } = useDemo();
  const workspaceId = demoMode ? DEMO_WORKSPACE_ID : (params.workspaceId as string);

  const [guides, setGuides] = useState<ArchivedGuide[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchArchivedGuides() {
      try {
        setLoading(true);
        const guidesResponse = await fetch(`/api/notes?workspace_id=${workspaceId}&archived=true`);
        const guidesData = await guidesResponse.json();
        setGuides(guidesData.notes || []);
      } catch (error) {
        console.error('Error fetching archived guides:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchArchivedGuides();
  }, [workspaceId]);

  const filteredGuides = guides.filter(guide =>
    (guide.custom_name || guide.guides?.name || '').toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-3 py-2 border-b border-border/40">
        <h3 className="text-xs font-medium text-foreground uppercase tracking-wider">Archived Notes</h3>
        <p className="text-[10px] text-muted-foreground mt-0.5">
          {guides.length} archived {guides.length === 1 ? 'note' : 'notes'}
        </p>
      </div>

      {/* Search */}
      <div className="px-3 py-2 border-b border-border/40">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-3 w-3 text-muted-foreground/40" />
          <input
            type="text"
            placeholder="Search archived notes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-7 pl-7 pr-2 bg-transparent border border-border/40 rounded text-[11px] focus:outline-none focus:border-foreground/40 transition-colors"
          />
        </div>
      </div>

      {/* Guides List */}
      <div className="flex-1 overflow-y-auto px-2 py-2">
        {loading ? (
          <motion.div
            className="flex items-center justify-center py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
          </motion.div>
        ) : filteredGuides.length === 0 ? (
          <motion.div
            className="text-center py-8 px-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-sm text-muted-foreground">
              {searchQuery ? 'No archived notes found' : 'No archived notes yet'}
            </p>
          </motion.div>
        ) : (
          <motion.div
            key={filteredGuides.length}
            className="space-y-0.5"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.03 }
              }
            }}
            initial="hidden"
            animate="show"
          >
            {filteredGuides.map((guide) => {
              const displayName = guide.custom_name || guide.guides?.name || 'Untitled Guide';

              return (
                <motion.button
                  key={guide.id}
                  onClick={() => {
                    const params = new URLSearchParams(searchParams.toString());
                    params.set('noteId', guide.id);
                    router.replace(`${window.location.pathname}?${params.toString()}`, { scroll: false });
                  }}
                  className="w-full flex items-center gap-2 px-2 py-2 rounded text-sm transition-colors hover:bg-muted/50"
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    show: { opacity: 1, x: 0 }
                  }}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex-1 min-w-0 text-left">
                    <div className="font-medium text-foreground break-words text-sm">
                      {displayName}
                    </div>
                    <div className="text-xs text-muted-foreground/70">
                      {guide.progress}% complete • Archived {new Date(guide.archived_at).toLocaleDateString()}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </div>

      {/* Info Text */}
      <div className="p-3 border-t border-border/40">
        <p className="text-xs text-muted-foreground">
          Archived notes are shown in the main view
        </p>
      </div>
    </div>
  );
}
