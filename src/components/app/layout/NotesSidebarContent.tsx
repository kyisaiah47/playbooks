'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams, useSearchParams } from 'next/navigation';
import { FileText, Plus, Search, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

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
  onNoteClick: (guideId: string) => void;
  onNewNote: () => void;
}

export function NotesSidebarContent({ activeGuideId, onNoteClick, onNewNote }: NotesSidebarContentProps) {
  const params = useParams();
  const workspaceId = params.workspaceId as string;

  const [notes, setNotes] = useState<UserGuide[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchNotes() {
      try {
        setLoading(true);
        const notesResponse = await fetch(`/api/user-guides?workspace_id=${workspaceId}&archived=false`);
        const notesData = await notesResponse.json();
        setNotes(notesData.userGuides || []);
      } catch (error) {
        console.error('Error fetching notes:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchNotes();
  }, [workspaceId]);

  const filteredNotes = notes.filter(note =>
    note.guides.name.toLowerCase().includes(searchQuery.toLowerCase())
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
            <p className="text-[11px] text-muted-foreground">
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
            {filteredNotes.map((note) => (
              <motion.button
                key={note.id}
                onClick={() => onNoteClick(note.guide_id)}
                className={cn(
                  "w-full flex items-center gap-1.5 px-2 py-1.5 rounded text-sm transition-colors group",
                  activeGuideId === note.guide_id
                    ? "bg-[#6366f1]/10 text-[#6366f1]"
                    : "hover:bg-muted/50 text-foreground"
                )}
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  show: { opacity: 1, x: 0 }
                }}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <FileText className="h-3.5 w-3.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="font-normal truncate">
                    {note.guides.name}
                  </div>
                  {note.progress > 0 && (
                    <div className="flex items-center gap-1 mt-0.5">
                      <div className="h-1 flex-1 bg-muted-foreground/20 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary transition-all"
                          style={{ width: `${note.progress}%` }}
                        />
                      </div>
                      <span className="text-[9px] text-muted-foreground">{Math.round(note.progress)}%</span>
                    </div>
                  )}
                </div>
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>

      {/* New Note Button */}
      <div className="p-2 border-t border-border/40">
        <motion.button
          onClick={onNewNote}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Plus className="h-3.5 w-3.5" />
          <span className="text-[11px] font-medium">New Note</span>
        </motion.button>
      </div>
    </div>
  );
}
