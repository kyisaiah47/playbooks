'use client';

import { useSearchParams } from 'next/navigation';
import { Archive } from 'lucide-react';
import { GuidesView } from '@/app/app/views/GuidesView';
import { motion, AnimatePresence } from 'framer-motion';

export default function ArchivePage() {
  const searchParams = useSearchParams();
  const selectedNoteId = searchParams.get('noteId');

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
            <Archive className="w-4 h-4 text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-semibold">Archive</h1>
            <p className="text-xs text-muted-foreground">
              Click on a note in the sidebar to view it
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        <AnimatePresence mode="wait">
          {selectedNoteId ? (
            <motion.div
              key={selectedNoteId}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              <GuidesView userGuideId={selectedNoteId} />
            </motion.div>
          ) : (
            <motion.div
              className="h-full flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center text-muted-foreground">
                <Archive className="w-16 h-16 mx-auto mb-4 opacity-20" />
                <p className="text-lg font-medium">No note selected</p>
                <p className="text-sm">Click on an archived note from the sidebar</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
