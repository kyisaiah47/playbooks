'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { ListTodo, Search, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useDemo } from '@/contexts/demo-context';
import { DEMO_WORKSPACE_ID } from '@/lib/demo-constants';

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

interface TasksSidebarContentProps {
  selectedNoteIds: Set<string>;
  onNoteToggle: (noteId: string) => void;
}

export function TasksSidebarContent({ selectedNoteIds, onNoteToggle }: TasksSidebarContentProps) {
  const params = useParams();
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
    (note.custom_name || note.guides?.name || '').toLowerCase().includes(searchQuery.toLowerCase())
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
              const isSelected = selectedNoteIds.has(note.id);
              const displayName = note.custom_name || note.guides?.name || 'Untitled Note';

              return (
                <motion.button
                  key={note.id}
                  onClick={() => onNoteToggle(note.id)}
                  className={cn(
                    "w-full flex items-center gap-2 px-2 py-2 rounded text-sm transition-colors group hover:bg-muted/50"
                  )}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    show: { opacity: 1, x: 0 }
                  }}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={cn(
                    "h-4 w-4 rounded border flex items-center justify-center flex-shrink-0 transition-colors",
                    isSelected
                      ? "bg-primary border-primary"
                      : "border-muted-foreground/40"
                  )}>
                    {isSelected && (
                      <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <div className="font-medium text-foreground break-words text-sm">
                      {displayName}
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
          Toggle notes to filter tasks
        </p>
      </div>
    </div>
  );
}
