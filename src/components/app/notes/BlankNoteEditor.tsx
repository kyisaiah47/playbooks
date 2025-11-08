'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { SimpleEditor } from '@/components/ui/simple-editor';
import { GuideHeader } from '@/components/app/guides/GuideHeader';
import { Loader2, Save, Check } from 'lucide-react';
import { toast } from 'sonner';

interface BlankNoteEditorProps {
  noteId: string;
}

export function BlankNoteEditor({ noteId }: BlankNoteEditorProps) {
  const [content, setContent] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [icon, setIcon] = useState<string | null>(null);
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [saveTimeout, setSaveTimeout] = useState<NodeJS.Timeout | null>(null);

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
        setTitle(data.userGuide?.custom_name || 'Untitled Note');
        setIcon(data.userGuide?.custom_icon || null);
        setCoverImage(data.userGuide?.custom_cover_image || null);
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
    (updates: { content?: string; name?: string; icon?: string; cover_image?: string }) => {
      if (saveTimeout) {
        clearTimeout(saveTimeout);
      }

      const timeout = setTimeout(async () => {
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
      }, 1000);

      setSaveTimeout(timeout);
    },
    [noteId, saveTimeout]
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

  // Handle icon updates
  const handleIconUpdate = (newIcon: string) => {
    setIcon(newIcon);
    saveNote({ icon: newIcon });
  };

  // Handle cover image updates
  const handleCoverUpdate = (newCover: string) => {
    setCoverImage(newCover);
    saveNote({ cover_image: newCover });
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
      {/* Notion-style Header */}
      <div className="flex-shrink-0">
        <GuideHeader
          guideName={title}
          guideIcon={icon}
          coverImage={coverImage}
          onNameChange={handleTitleUpdate}
          onIconChange={handleIconUpdate}
          onCoverChange={handleCoverUpdate}
        />
      </div>

      {/* Save Indicator */}
      <div className="flex-shrink-0 px-8 py-2 border-b border-border/40">
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

      {/* Editor Area */}
      <div className="flex-1 overflow-auto h-full">
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
