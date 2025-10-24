'use client';

import { Task } from '@/types/workspace';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trash2, Calendar, FileText } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface TaskCardProps {
  task: Task & {
    user_guides?: {
      id: string;
      guides: {
        name: string;
        icon: string | null;
      };
    } | null;
  };
  onDelete: (taskId: string) => void;
}

export function TaskCard({ task, onDelete }: TaskCardProps) {
  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete(task.id);
  };

  return (
    <Card className="p-3 hover:border-primary/40 transition-all group cursor-grab active:cursor-grabbing">
      <div className="space-y-2">
        {/* Title */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-medium text-sm leading-tight flex-1">{task.title}</h3>
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={handleDelete}
            className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0 h-6 w-6"
          >
            <Trash2 className="h-3.5 w-3.5 text-destructive" />
          </Button>
        </div>

        {/* Description */}
        {task.description && (
          <p className="text-xs text-muted-foreground line-clamp-2">
            {task.description}
          </p>
        )}

        {/* Metadata */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Associated Guide */}
          {task.user_guides?.guides && (
            <Badge variant="outline" className="text-xs gap-1">
              <FileText className="h-3 w-3" />
              {task.user_guides.guides.name}
            </Badge>
          )}

          {/* Due Date */}
          {task.due_date && (
            <Badge
              variant="outline"
              className={cn(
                "text-xs gap-1",
                new Date(task.due_date) < new Date() && task.status !== 'done'
                  ? "border-destructive/50 text-destructive"
                  : ""
              )}
            >
              <Calendar className="h-3 w-3" />
              {format(new Date(task.due_date), 'MMM d')}
            </Badge>
          )}
        </div>
      </div>
    </Card>
  );
}
