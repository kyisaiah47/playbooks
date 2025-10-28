'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { SimpleEditor } from '@/components/ui/simple-editor';
import { Loader2, Save, Check } from 'lucide-react';
import { toast } from 'sonner';
import { debounce } from '@/lib/utils';

interface BlankNoteEditorProps {
  noteId: string;
  workspaceId: string;
}

export function BlankNoteEditor({ noteId, workspaceId }: BlankNoteEditorProps) {
  const [content, setContent] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  // Fetch note content
  useEffect(() => {
    async function fetchNote() {
      try {
        setLoading(true);
        const response = await fetch(`/api/notes/${noteId}`);

        if (!response.ok) {
          throw new Error('Failed to fetch note');
        }

        const data = await response.json();
        setContent(data.userGuide?.content || '');
        setTitle(data.userGuide?.custom_name || '');
      } catch (error) {
        console.error('Error fetching note:', error);
        toast.error('Failed to load note');
      } finally {
        setLoading(false);
      }
    }

    fetchNote();
  }, [noteId]);

  // Debounced save function
  const saveNote = useCallback(
    debounce(async (updates: { content?: string; name?: string }) => {
      try {
        setSaving(true);
        const response = await fetch(`/api/notes/${noteId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updates),
        });

        if (!response.ok) {
          throw new Error('Failed to save note');
        }

        setLastSaved(new Date());
      } catch (error) {
        console.error('Error saving note:', error);
        toast.error('Failed to save note');
      } finally {
        setSaving(false);
      }
    }, 1000),
    [noteId]
  );

  // Handle content updates
  const handleContentUpdate = (newContent: string) => {
    setContent(newContent);
    saveNote({ content: newContent });
  };

  // Handle title updates
  const handleTitleUpdate = (newTitle: string) => {
    setTitle(newTitle);
    saveNote({ name: newTitle });
  };

  if (loading) {
    return (
      <motion.div
        className="h-full w-full flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
      </motion.div>
    );
  }

  return (
    <div className="h-full w-full flex flex-col overflow-hidden bg-background">
      {/* Header Bar */}
      <div className="flex-shrink-0 border-b border-border/40 bg-muted/20">
        <div className="max-w-5xl mx-auto px-8 py-4">
          {/* Title Input */}
          <input
            type="text"
            value={title}
            onChange={(e) => handleTitleUpdate(e.target.value)}
            placeholder="Untitled Note"
            className="w-full text-4xl font-bold bg-transparent border-none outline-none placeholder:text-muted-foreground/30 mb-2"
          />

          {/* Save Indicator */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            {saving ? (
              <>
                <Loader2 className="w-3 h-3 animate-spin" />
                <span>Saving...</span>
              </>
            ) : lastSaved ? (
              <>
                <Check className="w-3 h-3 text-green-500" />
                <span>Saved {lastSaved.toLocaleTimeString()}</span>
              </>
            ) : (
              <span>Start typing...</span>
            )}
          </div>
        </div>
      </div>

      {/* Editor Area */}
      <div className="flex-1 overflow-auto">
        <div className="h-full max-w-5xl mx-auto px-8 py-8">
          <SimpleEditor
            content={content}
            onUpdate={handleContentUpdate}
            placeholder="Write your thoughts here..."
            className="prose prose-base lg:prose-lg dark:prose-invert focus:outline-none max-w-none"
          />
        </div>
      </div>
    </div>
  );
}
