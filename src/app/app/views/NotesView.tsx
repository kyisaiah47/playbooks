'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Plus, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Note {
  id: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

interface NotesViewProps {
  trackId: string;
  trackName?: string;
}

export function NotesView({ trackId, trackName }: NotesViewProps) {
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [autoSave, setAutoSave] = useState(true);
  const [loading, setLoading] = useState(true);
  const titleInputRef = useRef<HTMLInputElement>(null);

  // Load notes for this track
  useEffect(() => {
    async function loadNotes() {
      try {
        setLoading(true);
        const res = await fetch(`/api/notes?track_id=${trackId}`);

        if (!res.ok) {
          if (res.status === 401) {
            setNotes([]);
            setLoading(false);
            return;
          }
          throw new Error('Failed to load notes');
        }

        const data = await res.json();
        const loadedNotes = data.notes || [];
        setNotes(loadedNotes);

        // Auto-select first note if available
        if (loadedNotes.length > 0 && !selectedNote) {
          setSelectedNote(loadedNotes[0]);
          setContent(loadedNotes[0].content || '');
          setTitle(loadedNotes[0].title || '');
        }
      } catch (error) {
        console.error('Error loading notes:', error);
        setNotes([]);
      } finally {
        setLoading(false);
      }
    }

    if (trackId) {
      loadNotes();
    }
  }, [trackId]);

  // Update local state when note is selected
  useEffect(() => {
    if (selectedNote) {
      setContent(selectedNote.content || '');
      setTitle(selectedNote.title || '');
    }
  }, [selectedNote]);

  // Autosave functionality for content
  useEffect(() => {
    if (!autoSave || !selectedNote || loading) return;

    const timeoutId = setTimeout(async () => {
      try {
        await fetch('/api/notes', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            track_id: trackId,
            note_id: selectedNote.id,
            content,
            title
          }),
        });
      } catch (error) {
        console.error('Error auto-saving notes:', error);
      }
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [content, title, autoSave, trackId, selectedNote, loading]);

  const createNewNote = async () => {
    try {
      const res = await fetch('/api/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          track_id: trackId,
          title: 'Untitled Note',
          content: '',
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to create note');
      }

      const data = await res.json();
      const newNote = data.note;

      setNotes(prev => [...prev, newNote]);
      setSelectedNote(newNote);
      setContent('');
      setTitle('Untitled Note');

      // Focus title input
      setTimeout(() => {
        titleInputRef.current?.focus();
        titleInputRef.current?.select();
      }, 100);
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  const deleteNote = async (noteId: string) => {
    try {
      const res = await fetch(`/api/notes?note_id=${noteId}&track_id=${trackId}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        throw new Error('Failed to delete note');
      }

      const updatedNotes = notes.filter(n => n.id !== noteId);
      setNotes(updatedNotes);

      // Select another note if available
      if (selectedNote?.id === noteId) {
        if (updatedNotes.length > 0) {
          setSelectedNote(updatedNotes[0]);
        } else {
          setSelectedNote(null);
          setContent('');
          setTitle('');
        }
      }
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <p className="text-muted-foreground">Loading notes...</p>
      </div>
    );
  }

  return (
    <div className="h-full flex bg-background">
      {/* Sidebar - Notes List */}
      <div className="w-64 border-r flex flex-col">
        <div className="p-3 border-b flex items-center justify-between">
          <span className="text-sm font-medium">Notes</span>
          <Button onClick={createNewNote} size="sm" variant="ghost" className="h-7 w-7 p-0">
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex-1 overflow-auto">
          {notes.length === 0 ? (
            <div className="p-4 text-center text-sm text-muted-foreground">
              <FileText className="w-8 h-8 mx-auto mb-2 opacity-20" />
              <p>No notes yet</p>
              <p className="text-xs mt-1">Click + to create one</p>
            </div>
          ) : (
            <div className="p-2 space-y-1">
              {notes.map((note) => (
                <div
                  key={note.id}
                  onClick={() => setSelectedNote(note)}
                  className={cn(
                    'w-full text-left p-2 rounded-md text-sm transition-colors group cursor-pointer',
                    selectedNote?.id === note.id
                      ? 'bg-muted'
                      : 'hover:bg-muted/50'
                  )}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate">{note.title}</div>
                      <div className="text-xs text-muted-foreground truncate mt-0.5">
                        {note.content || 'Empty note'}
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteNote(note.id);
                      }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-destructive/10 rounded"
                    >
                      <Trash2 className="h-3 w-3 text-destructive" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main Editor */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {selectedNote ? (
          <>
            {/* Title Input */}
            <div className="border-b px-8 py-4">
              <input
                ref={titleInputRef}
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-transparent border-none outline-none text-2xl font-semibold placeholder:text-muted-foreground/40"
                placeholder="Untitled Note"
              />
            </div>

            {/* Content Editor */}
            <div className="flex-1 overflow-auto">
              <textarea
                className="w-full h-full bg-transparent border-none outline-none resize-none text-foreground text-[15px] leading-relaxed font-normal placeholder:text-muted-foreground/40 px-8 py-6 focus:placeholder:text-muted-foreground/60 transition-colors"
                placeholder="Start writing..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                style={{ fontFamily: 'inherit' }}
              />
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-muted-foreground">
            <div className="text-center">
              <FileText className="w-16 h-16 mx-auto mb-4 opacity-20" />
              <p className="text-lg font-medium">No note selected</p>
              <p className="text-sm mt-1">Select a note or create a new one</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
