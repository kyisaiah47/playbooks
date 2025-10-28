'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams, useSearchParams } from 'next/navigation';
import { FileText, Plus, Search, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useDemo } from '@/contexts/demo-context';
import { DEMO_WORKSPACE_ID } from '@/lib/demo-constants';
import { toast } from 'sonner';
import { getIconComponent } from '@/lib/icon-utils';
import { NewNotePopover } from '@/components/app/dialogs/NewNotePopover';

interface UserGuide {
  id: string;
  guide_id: string;
  progress: number;
  archived: boolean;
  created_at: string;
  updated_at: string;
  guides: {
    id: string;
    name: string;
    description: string;
    icon: string | null;
  };
}

interface NotesSidebarContentProps {
  activeGuideId: string | null;
  onNoteClick: (guideId: string, guideName?: string, guideIcon?: string | null) => void;
  onCreateBlankNote: () => void;
  onCreateGuidedNote: () => void;
}

export function NotesSidebarContent({ activeGuideId, onNoteClick, onCreateBlankNote, onCreateGuidedNote }: NotesSidebarContentProps) {
  const params = useParams();
  const router = useRouter();
  const { demoMode } = useDemo();
  const workspaceId = demoMode ? DEMO_WORKSPACE_ID : (params.workspaceId as string);

  const [notes, setNotes] = useState<UserGuide[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchNotes() {
      try {
        setLoading(true);
        const notesResponse = await fetch(`/api/notes?workspace_id=${workspaceId}&archived=false`);
        const notesData = await notesResponse.json();
        setNotes(notesData.notes || []);
      } catch (error) {
        console.error('Error fetching notes:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchNotes();
  }, [workspaceId]);

  const filteredNotes = notes.filter(note =>
    (note.guides?.name || '').toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <div className="flex flex-col h-full">
      {/* Search */}
      <div className="px-3 py-2 border-b border-border/40">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-3 w-3 text-muted-foreground/40" />
          <input
            type="text"
            placeholder="Search notes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-7 pl-7 pr-2 bg-transparent border border-border/40 rounded text-[11px] focus:outline-none focus:border-foreground/40 transition-colors"
          />
        </div>
      </div>

      {/* Notes List */}
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
        ) : filteredNotes.length === 0 ? (
          <motion.div
            className="text-center py-8 px-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-sm text-muted-foreground">
              {searchQuery ? 'No notes found' : 'No notes yet'}
            </p>
          </motion.div>
        ) : (
          <motion.div
            key={filteredNotes.length}
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
            {filteredNotes.map((note) => {
              const IconComponent = getIconComponent(note.guides?.icon);
              const isBlankNote = !note.guide_id;
              return (
                <motion.button
                  key={note.id}
                  onClick={() => {
                    if (isBlankNote) {
                      // For blank notes, navigate using noteId
                      router.push(`/app/${workspaceId}/notes?noteId=${note.id}`);
                    } else {
                      onNoteClick(note.guide_id, note.guides?.name, note.guides?.icon);
                    }
                  }}
                  className={cn(
                    "w-full flex items-center gap-2 px-2 py-2 rounded transition-colors group",
                    activeGuideId === note.guide_id
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-muted/50 text-foreground"
                  )}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    show: { opacity: 1, x: 0 }
                  }}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <IconComponent className="h-4 w-4 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="font-medium truncate text-sm">
                      {isBlankNote
                        ? (note.custom_name || 'Untitled Note')
                        : (note.guides?.name || 'Untitled Note')}
                    </div>
                    {note.progress > 0 && (
                      <div className="flex items-center gap-1 mt-0.5">
                        <div className="h-1 flex-1 bg-muted-foreground/20 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary transition-all"
                            style={{ width: `${note.progress}%` }}
                          />
                        </div>
                        <span className="text-xs text-muted-foreground">{Math.round(note.progress)}%</span>
                      </div>
                    )}
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </div>

      {/* New Note Button */}
      <div className="p-2 border-t border-border/40">
        <NewNotePopover
          onCreateBlankNote={() => {
            if (demoMode) {
              toast.info('Not available in demo mode');
              return;
            }
            onCreateBlankNote();
          }}
          onCreateGuidedNote={() => {
            if (demoMode) {
              toast.info('Not available in demo mode');
              return;
            }
            onCreateGuidedNote();
          }}
        >
          <motion.button
            className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Plus className="h-4 w-4" />
            <span className="text-sm font-medium">New Note</span>
          </motion.button>
        </NewNotePopover>
      </div>
    </div>
  );
}
