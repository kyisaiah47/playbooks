'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { format } from 'date-fns';
import { CheckCircle2 } from 'lucide-react';

interface DailyNoteProps {
  date: string; // YYYY-MM-DD format
  initialContent: string;
  onSave: (content: string) => void;
}

export function DailyNote({ date, initialContent, onSave }: DailyNoteProps) {
  const [content, setContent] = useState(initialContent);
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  // Auto-save with debounce
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (content !== initialContent) {
        setIsSaving(true);
        onSave(content);
        setLastSaved(new Date());

        // Reset saving state after a short delay
        setTimeout(() => {
          setIsSaving(false);
        }, 500);
      }
    }, 1000); // 1 second debounce

    return () => clearTimeout(timeoutId);
  }, [content, initialContent, onSave]);

  // Update content when date changes
  useEffect(() => {
    setContent(initialContent);
  }, [initialContent, date]);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Daily Reflection</CardTitle>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            {isSaving && (
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Saving...
              </span>
            )}
            {!isSaving && lastSaved && (
              <span className="flex items-center gap-1 text-green-600">
                <CheckCircle2 className="w-3 h-3" />
                Saved {format(lastSaved, 'h:mm a')}
              </span>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Textarea
          placeholder="How was your day? What are you grateful for? What did you learn?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={12}
          className="resize-none"
        />
        <p className="text-xs text-muted-foreground mt-2">
          Your note auto-saves as you type
        </p>
      </CardContent>
    </Card>
  );
}
