'use client';

import { JournalEntry } from './JournalEntry';

interface Entry {
  id: string;
  title: string | null;
  content: string;
  tags: string[];
  mood: string | null;
  created_at: string;
  updated_at: string;
}

interface EntryListProps {
  entries: Entry[];
  onDelete: (id: string) => void;
  onUpdate: (id: string, updates: { title?: string; content?: string; tags?: string[] }) => void;
}

export function EntryList({ entries, onDelete, onUpdate }: EntryListProps) {
  if (entries.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No journal entries yet.</p>
        <p className="text-sm text-muted-foreground mt-1">Create your first entry to get started.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {entries.map((entry) => (
        <JournalEntry
          key={entry.id}
          entry={entry}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}
