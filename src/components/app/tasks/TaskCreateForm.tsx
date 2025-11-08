'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { CalendarIcon, X } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface UserGuide {
  id: string;
  guides: {
    id: string;
    name: string;
    icon: string | null;
  };
}

interface TaskCreateFormProps {
  status: 'todo' | 'in_progress' | 'done';
  onSubmit: (task: {
    title: string;
    description: string;
    status: 'todo' | 'in_progress' | 'done';
    due_date: string | null;
    user_guide_id: string | null;
  }) => void;
  onCancel: () => void;
}

export function TaskCreateForm({ status, onSubmit, onCancel }: TaskCreateFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState<Date | undefined>();
  const [userGuideId, setUserGuideId] = useState<string | null>(null);
  const [userGuides, setUserGuides] = useState<UserGuide[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch user guides
  useEffect(() => {
    async function fetchUserGuides() {
      try {
        const res = await fetch(`/api/notes`);
        const data = await res.json();
        setUserGuides(data.notes || []);
      } catch (error) {
      }
    }
    fetchUserGuides();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    setLoading(true);
    onSubmit({
      title: title.trim(),
      description: description.trim(),
      status,
      due_date: dueDate ? dueDate.toISOString() : null,
      user_guide_id: userGuideId,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-muted/30 rounded-lg border">
      {/* Title */}
      <div className="space-y-2">
        <Label htmlFor="title" className="text-xs font-medium">
          Title <span className="text-destructive">*</span>
        </Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title..."
          required
          autoFocus
          className="h-9 text-sm"
        />
      </div>

      {/* Description */}
      <div className="space-y-2">
        <Label htmlFor="description" className="text-xs font-medium">
          Description
        </Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add more details..."
          rows={3}
          className="text-sm resize-none"
        />
      </div>

      {/* Due Date */}
      <div className="space-y-2">
        <Label className="text-xs font-medium">Due Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                'w-full justify-start text-left font-normal h-9 text-sm',
                !dueDate && 'text-muted-foreground'
              )}
            >
              <CalendarIcon className="mr-2 h-3.5 w-3.5" />
              {dueDate ? format(dueDate, 'PPP') : 'Pick a date'}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={dueDate}
              onSelect={setDueDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Guide Selection */}
      {userGuides.length > 0 && (
        <div className="space-y-2">
          <Label className="text-xs font-medium">Associated Guide</Label>
          <Select value={userGuideId || ''} onValueChange={(value) => setUserGuideId(value || null)}>
            <SelectTrigger className="h-9 text-sm">
              <SelectValue placeholder="Select a guide (optional)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">None</SelectItem>
              {userGuides.map((userGuide) => (
                <SelectItem key={userGuide.id} value={userGuide.id}>
                  <span className="flex items-center gap-2">
                    {userGuide.guides.icon && <span>{userGuide.guides.icon}</span>}
                    {userGuide.guides.name}
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center gap-2 pt-2">
        <Button type="submit" disabled={loading || !title.trim()} className="h-9 text-sm">
          {loading ? 'Creating...' : 'Create Task'}
        </Button>
        <Button type="button" variant="ghost" onClick={onCancel} className="h-9 text-sm">
          Cancel
        </Button>
      </div>
    </form>
  );
}
