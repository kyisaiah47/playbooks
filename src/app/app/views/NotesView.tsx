'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { FileText } from 'lucide-react';

interface NotesViewProps {
  trackId: string;
  trackName?: string;
}

export function NotesView({ trackId, trackName }: NotesViewProps) {
  const [content, setContent] = useState('');
  const [autoSave, setAutoSave] = useState(true);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [loading, setLoading] = useState(true);

  // Load notes content for this track
  useEffect(() => {
    async function loadNotes() {
      try {
        setLoading(true);
        const res = await fetch(`/api/notes?track_id=${trackId}`);

        if (!res.ok) {
          if (res.status === 401) {
            setContent('');
            setLoading(false);
            return;
          }
          throw new Error('Failed to load notes');
        }

        const data = await res.json();
        setContent(data.content || '');
      } catch (error) {
        console.error('Error loading notes:', error);
        setContent('');
      } finally {
        setLoading(false);
      }
    }

    if (trackId) {
      loadNotes();
    }
  }, [trackId]);

  // Autosave functionality
  useEffect(() => {
    if (!autoSave || !trackId || loading) return;

    const timeoutId = setTimeout(async () => {
      try {
        await fetch('/api/notes', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ track_id: trackId, content }),
        });
        setLastSaved(new Date());
      } catch (error) {
        console.error('Error auto-saving notes:', error);
      }
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [content, autoSave, trackId, loading]);

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <p className="text-muted-foreground">Loading notes...</p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-background">
      {/* Editor */}
      <div className="flex-1 overflow-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="h-full max-w-4xl mx-auto"
        >
          <textarea
            className="w-full h-full bg-transparent border-none outline-none resize-none text-foreground text-[15px] leading-relaxed font-normal placeholder:text-muted-foreground/40 p-8 focus:placeholder:text-muted-foreground/60 transition-colors"
            placeholder="Start writing..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{ fontFamily: 'inherit' }}
          />
        </motion.div>
      </div>
    </div>
  );
}
