'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FileText, Plus, Search, Loader2, Calendar, BookOpen, PenLine } from 'lucide-react';
import { cn } from '@/lib/utils';
import { formatDistanceToNow } from 'date-fns';
import { useDemo } from '@/contexts/demo-context';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

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

interface NotesListViewProps {
  workspaceId: string;
}

export function NotesListView({ workspaceId }: NotesListViewProps) {
  const router = useRouter();
  const { demoMode } = useDemo();
  const [notes, setNotes] = useState<UserGuide[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [gettingStartedPageId, setGettingStartedPageId] = useState<string | null>(null);
  const [showCreateDialog, setShowCreateDialog] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        // Fetch notes
        const notesResponse = await fetch(`/api/user-guides?workspace_id=${workspaceId}&archived=false`);
        const notesData = await notesResponse.json();
        setNotes(notesData.userGuides || []);

        // Fetch pages to find Getting Started pageId
        const pagesResponse = await fetch(`/api/workspaces/${workspaceId}/pages`);
        const pagesData = await pagesResponse.json();
        const gettingStartedPage = pagesData.pages?.find((p: any) => p.name === 'Getting Started');
        if (gettingStartedPage) {
          setGettingStartedPageId(gettingStartedPage.id);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [workspaceId]);

  const filteredNotes = notes.filter(note =>
    (note.guides?.name || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
    (note.guides?.description || '').toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleNoteClick = (guideId: string) => {
    router.push(`/app/${workspaceId}/notes?id=${guideId}`);
  };

  const handleCreateNote = () => {
    if (demoMode) {
      toast.info('Not available in demo mode');
      return;
    }
    setShowCreateDialog(true);
  };

  const handleCreateFromGuide = () => {
    setShowCreateDialog(false);
    // Navigate to Getting Started page to select a guide
    if (gettingStartedPageId) {
      router.push(`/app/${workspaceId}/notes?pageId=${gettingStartedPageId}`);
    }
  };

  const handleCreateBlankNote = () => {
    setShowCreateDialog(false);
    // TODO: Create blank note (freeform journaling)
    // This will need a new API endpoint and UI for freeform notes
    console.log('Create blank note - to be implemented');
  };

  if (loading) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto">
      <div className="p-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">My Notes</h1>
            <button
              onClick={handleCreateNote}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              <Plus className="h-4 w-4" />
              New Note
            </button>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            All your notes and guides in one place
          </p>

          {/* Search */}
          <div className="relative max-w-xs">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground/40" />
            <input
              type="text"
              placeholder="Search notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-8 pl-8 pr-3 bg-transparent border-b border-border/60 focus:border-foreground/40 outline-none text-sm transition-colors"
            />
          </div>
        </div>

        {/* Notes List */}
        {filteredNotes.length === 0 ? (
          <div className="text-center py-12">
            {searchQuery ? (
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">No notes found matching "{searchQuery}"</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="mb-4 flex justify-center">
                  <FileText className="w-16 h-16 text-muted-foreground/40" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">No Notes Yet</h2>
                <p className="text-sm text-muted-foreground max-w-md mx-auto">
                  Get started by creating your first note. Choose from our guided guides or start from scratch.
                </p>
                <button
                  onClick={handleCreateNote}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium mt-4"
                >
                  <Plus className="h-4 w-4" />
                  Create Your First Note
                </button>
              </div>
            )}
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-border/40">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                {filteredNotes.length} {filteredNotes.length === 1 ? 'note' : 'notes'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredNotes.map((note) => (
                <button
                  key={note.id}
                  onClick={() => handleNoteClick(note.guide_id)}
                  className="group p-4 border border-border/60 rounded-lg hover:border-primary/40 hover:bg-muted/20 transition-all text-left"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <FileText className="h-5 w-5 text-muted-foreground/60 group-hover:text-primary transition-colors flex-shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors truncate">
                        {note.guides?.name || 'Untitled Note'}
                      </h3>
                      {note.guides?.description && (
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {note.guides.description}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>
                        {formatDistanceToNow(new Date(note.updated_at), { addSuffix: true })}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="h-1.5 w-16 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary transition-all"
                          style={{ width: `${note.progress}%` }}
                        />
                      </div>
                      <span className="text-xs">{Math.round(note.progress)}%</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Create Note Dialog */}
      <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Create New Note</DialogTitle>
            <DialogDescription>
              Choose how you'd like to create your note
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-3 py-4">
            <button
              onClick={handleCreateFromGuide}
              className="group flex items-start gap-4 p-4 border border-border/60 rounded-lg hover:border-primary/40 hover:bg-muted/20 transition-all text-left"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-sm mb-1">From Guide</h3>
                <p className="text-xs text-muted-foreground">
                  Start with a structured guide template with questions, readings, and tasks
                </p>
              </div>
            </button>

            <button
              onClick={handleCreateBlankNote}
              className="group flex items-start gap-4 p-4 border border-border/60 rounded-lg hover:border-primary/40 hover:bg-muted/20 transition-all text-left"
            >
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                <PenLine className="w-5 h-5 text-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-sm mb-1">Blank Note</h3>
                <p className="text-xs text-muted-foreground">
                  Create a freeform note for journaling or personal reflection
                </p>
              </div>
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
