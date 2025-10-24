'use client';

import { useState, useEffect, useCallback } from 'react';
import { PenLine, Plus, Search, X, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { EntryList } from '@/components/app/journal/EntryList';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

interface JournalEntry {
  id: string;
  title: string | null;
  content: string;
  tags: string[];
  mood: string | null;
  created_at: string;
  updated_at: string;
}

export default function JournalPage() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [loading, setLoading] = useState(true);

  // Form state
  const [showForm, setShowForm] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newTags, setNewTags] = useState('');
  const [submitting, setSubmitting] = useState(false);

  // Search/filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Pagination
  const [hasMore, setHasMore] = useState(true);
  const LIMIT = 10;

  // Fetch entries
  const fetchEntries = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/journal?limit=${LIMIT}&offset=0`);

      if (!response.ok) {
        throw new Error('Failed to fetch journal entries');
      }

      const data = await response.json();
      setEntries(data.entries || []);
      setHasMore(data.entries?.length === LIMIT);
    } catch (error) {
      console.error('Error fetching journal entries:', error);
      toast.error('Failed to load journal entries');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEntries();
  }, [fetchEntries]);

  // Create new entry
  const handleCreateEntry = async () => {
    if (!newContent.trim()) {
      toast.error('Content is required');
      return;
    }

    const tagsArray = newTags
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);

    try {
      setSubmitting(true);
      const response = await fetch('/api/journal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: newTitle.trim() || null,
          content: newContent.trim(),
          tags: tagsArray,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create entry');
      }

      const data = await response.json();
      setEntries([data.entry, ...entries]);

      // Reset form
      setNewTitle('');
      setNewContent('');
      setNewTags('');
      setShowForm(false);

      toast.success('Entry created successfully');
    } catch (error) {
      console.error('Error creating entry:', error);
      toast.error('Failed to create entry');
    } finally {
      setSubmitting(false);
    }
  };

  // Update entry
  const handleUpdateEntry = async (
    id: string,
    updates: { title?: string; content?: string; tags?: string[] }
  ) => {
    try {
      const response = await fetch(`/api/journal/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
      });

      if (!response.ok) {
        throw new Error('Failed to update entry');
      }

      const data = await response.json();
      setEntries(entries.map(e => (e.id === id ? data.entry : e)));

      toast.success('Entry updated successfully');
    } catch (error) {
      console.error('Error updating entry:', error);
      toast.error('Failed to update entry');
    }
  };

  // Delete entry
  const handleDeleteEntry = async (id: string) => {
    try {
      const response = await fetch(`/api/journal/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete entry');
      }

      setEntries(entries.filter(e => e.id !== id));
      toast.success('Entry deleted successfully');
    } catch (error) {
      console.error('Error deleting entry:', error);
      toast.error('Failed to delete entry');
    }
  };

  // Load more entries
  const loadMore = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `/api/journal?limit=${LIMIT}&offset=${entries.length}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch more entries');
      }

      const data = await response.json();
      setEntries([...entries, ...(data.entries || [])]);
      setHasMore(data.entries?.length === LIMIT);
    } catch (error) {
      console.error('Error loading more entries:', error);
      toast.error('Failed to load more entries');
    } finally {
      setLoading(false);
    }
  };

  // Get all unique tags from entries
  const allTags = Array.from(new Set(entries.flatMap(e => e.tags))).sort();

  // Filter entries
  const filteredEntries = entries.filter(entry => {
    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesTitle = entry.title?.toLowerCase().includes(query);
      const matchesContent = entry.content.toLowerCase().includes(query);
      const matchesTags = entry.tags.some(tag => tag.toLowerCase().includes(query));

      if (!matchesTitle && !matchesContent && !matchesTags) {
        return false;
      }
    }

    // Tag filter
    if (selectedTags.length > 0) {
      if (!selectedTags.some(tag => entry.tags.includes(tag))) {
        return false;
      }
    }

    return true;
  });

  return (
    <div className="h-full w-full p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#6366f1]/10 flex items-center justify-center">
              <PenLine className="w-5 h-5 text-[#6366f1]" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Journal</h1>
              <p className="text-sm text-muted-foreground">
                {entries.length} {entries.length === 1 ? 'entry' : 'entries'}
              </p>
            </div>
          </div>
          <Button onClick={() => setShowForm(!showForm)}>
            {showForm ? (
              <>
                <X className="w-4 h-4" />
                Cancel
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                New Entry
              </>
            )}
          </Button>
        </div>

        {/* New Entry Form */}
        {showForm && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>New Journal Entry</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="Title (optional)"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
              <Textarea
                placeholder="Write your thoughts..."
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                rows={6}
                className="resize-none"
              />
              <Input
                placeholder="Tags (comma separated, e.g., personal, work, goals)"
                value={newTags}
                onChange={(e) => setNewTags(e.target.value)}
              />
              <Button onClick={handleCreateEntry} disabled={submitting}>
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Creating...
                  </>
                ) : (
                  'Create Entry'
                )}
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Search and Filter */}
        <div className="mb-6 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search entries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>

          {allTags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => {
                const isSelected = selectedTags.includes(tag);
                return (
                  <Badge
                    key={tag}
                    variant={isSelected ? 'default' : 'outline'}
                    className="cursor-pointer"
                    onClick={() => {
                      setSelectedTags(
                        isSelected
                          ? selectedTags.filter(t => t !== tag)
                          : [...selectedTags, tag]
                      );
                    }}
                  >
                    {tag}
                  </Badge>
                );
              })}
              {selectedTags.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedTags([])}
                  className="h-6 px-2 text-xs"
                >
                  Clear filters
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Entries List */}
        {loading && entries.length === 0 ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <>
            <EntryList
              entries={filteredEntries}
              onDelete={handleDeleteEntry}
              onUpdate={handleUpdateEntry}
            />

            {/* Load More */}
            {hasMore && !searchQuery && selectedTags.length === 0 && (
              <div className="mt-6 text-center">
                <Button
                  variant="outline"
                  onClick={loadMore}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Loading...
                    </>
                  ) : (
                    'Load More'
                  )}
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
