'use client';

import { useState, useEffect } from 'react';
import { PenLine, Search, Loader2, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { motion } from 'framer-motion';

interface JournalEntry {
  id: string;
  title: string | null;
  content: string;
  tags: string[];
  mood: string | null;
  created_at: string;
  updated_at: string;
}

interface JournalSidebarContentProps {
  selectedEntryId: string | null;
  onEntrySelect: (entryId: string | null) => void;
}

export function JournalSidebarContent({ selectedEntryId, onEntrySelect }: JournalSidebarContentProps) {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchEntries() {
      try {
        setLoading(true);
        const response = await fetch('/api/journal?limit=100&offset=0');
        const data = await response.json();
        setEntries(data.entries || []);
      } catch (error) {
        console.error('Error fetching journal entries:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchEntries();
  }, []);

  const filteredEntries = entries.filter(entry => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      entry.title?.toLowerCase().includes(query) ||
      entry.content.toLowerCase().includes(query) ||
      entry.tags.some(tag => tag.toLowerCase().includes(query))
    );
  });

  return (
    <div className="flex flex-col h-full">
      {/* Header with New Button */}
      <div className="px-3 py-2 border-b border-border/40">
        <motion.button
          onClick={() => onEntrySelect(null)}
          className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded bg-primary hover:bg-[#5558e3] text-white text-[11px] font-medium transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Plus className="w-4 h-4" />
          New Entry
        </motion.button>
      </div>

      {/* Search */}
      <div className="px-3 py-2 border-b border-border/40">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-3 w-3 text-muted-foreground/40" />
          <input
            type="text"
            placeholder="Search entries..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-7 pl-7 pr-2 bg-transparent border border-border/40 rounded text-[11px] focus:outline-none focus:border-foreground/40 transition-colors"
          />
        </div>
      </div>

      {/* Entries List */}
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
        ) : filteredEntries.length === 0 ? (
          <motion.div
            className="text-center py-8 px-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-[11px] text-muted-foreground">
              {searchQuery ? 'No entries found' : 'No entries yet'}
            </p>
          </motion.div>
        ) : (
          <motion.div
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
            {filteredEntries.map((entry) => {
              const isSelected = selectedEntryId === entry.id;
              const preview = entry.content.slice(0, 60);

              return (
                <motion.button
                  key={entry.id}
                  onClick={() => onEntrySelect(entry.id)}
                  className={cn(
                    "w-full text-left px-2 py-2 rounded text-sm transition-colors",
                    isSelected
                      ? "bg-primary/10 border border-primary/40"
                      : "hover:bg-muted/50"
                  )}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    show: { opacity: 1, x: 0 }
                  }}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="font-medium text-foreground text-[11px] truncate mb-0.5">
                    {entry.title || 'Untitled'}
                  </div>
                  <div className="text-[10px] text-muted-foreground/70 line-clamp-2 mb-1">
                    {preview}...
                  </div>
                  <div className="text-[10px] text-muted-foreground/50">
                    {format(new Date(entry.created_at), 'MMM d, yyyy')}
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </div>

      {/* Info Text */}
      <div className="p-3 border-t border-border/40">
        <p className="text-[10px] text-muted-foreground">
          {filteredEntries.length} {filteredEntries.length === 1 ? 'entry' : 'entries'}
        </p>
      </div>
    </div>
  );
}
