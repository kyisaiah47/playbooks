'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ChevronRight, Trash2, Save, X } from 'lucide-react';
import { format } from 'date-fns';

interface JournalEntryProps {
  entry: {
    id: string;
    title: string | null;
    content: string;
    tags: string[];
    mood: string | null;
    created_at: string;
    updated_at: string;
  };
  onDelete: (id: string) => void;
  onUpdate: (id: string, updates: { title?: string; content?: string; tags?: string[] }) => void;
}

export function JournalEntry({ entry, onDelete, onUpdate }: JournalEntryProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(entry.title || '');
  const [editContent, setEditContent] = useState(entry.content);
  const [editTags, setEditTags] = useState(entry.tags.join(', '));

  const handleSave = () => {
    const tagsArray = editTags
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);

    onUpdate(entry.id, {
      title: editTitle || undefined,
      content: editContent,
      tags: tagsArray,
    });

    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditTitle(entry.title || '');
    setEditContent(entry.content);
    setEditTags(entry.tags.join(', '));
    setIsEditing(false);
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-start gap-2 flex-1 text-left min-w-0"
          >
            {isExpanded ? (
              <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
            ) : (
              <ChevronRight className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
            )}
            <div className="flex-1 min-w-0">
              {entry.title ? (
                <h3 className="font-semibold text-base mb-1 truncate">{entry.title}</h3>
              ) : (
                <p className="text-sm text-muted-foreground line-clamp-2">{entry.content}</p>
              )}
              <p className="text-xs text-muted-foreground">
                {format(new Date(entry.created_at), 'MMM d, yyyy h:mm a')}
              </p>
            </div>
          </button>

          {/* Tags */}
          {entry.tags.length > 0 && !isExpanded && (
            <div className="flex gap-1 shrink-0">
              {entry.tags.slice(0, 2).map((tag, i) => (
                <Badge key={i} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {entry.tags.length > 2 && (
                <Badge variant="secondary" className="text-xs">
                  +{entry.tags.length - 2}
                </Badge>
              )}
            </div>
          )}
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t space-y-4">
            {isEditing ? (
              <>
                <Input
                  placeholder="Title (optional)"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="font-semibold"
                />
                <Textarea
                  placeholder="Write your thoughts..."
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  rows={6}
                  className="resize-none"
                />
                <Input
                  placeholder="Tags (comma separated)"
                  value={editTags}
                  onChange={(e) => setEditTags(e.target.value)}
                />
                <div className="flex gap-2">
                  <Button onClick={handleSave} size="sm">
                    <Save className="w-4 h-4" />
                    Save
                  </Button>
                  <Button onClick={handleCancel} variant="outline" size="sm">
                    <X className="w-4 h-4" />
                    Cancel
                  </Button>
                </div>
              </>
            ) : (
              <>
                {entry.title && (
                  <h3 className="font-semibold text-lg">{entry.title}</h3>
                )}
                <p className="text-sm whitespace-pre-wrap">{entry.content}</p>

                {entry.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {entry.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}

                <div className="flex gap-2 pt-2">
                  <Button onClick={() => setIsEditing(true)} variant="outline" size="sm">
                    Edit
                  </Button>
                  <Button
                    onClick={() => {
                      if (confirm('Are you sure you want to delete this entry?')) {
                        onDelete(entry.id);
                      }
                    }}
                    variant="destructive"
                    size="sm"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </Button>
                </div>
              </>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
