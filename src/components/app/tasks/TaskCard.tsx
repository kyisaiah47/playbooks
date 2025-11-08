'use client';

import { useState } from 'react';
import { Task } from '@/types/task';
import { Button } from '@/components/ui/button';
import { Trash2, Calendar, Pencil } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { TaskDeleteDialog } from './TaskDeleteDialog';

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
  onEdit: () => void;
}

export function TaskCard({ task, onDelete, onEdit }: TaskCardProps) {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowDeleteDialog(true);
  };

  const handleConfirmDelete = () => {
    onDelete(task.id);
    setShowDeleteDialog(false);
  };

  const handleEdit = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onEdit();
  };

  return (
    <div className="space-y-2">
      {/* Title */}
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-medium text-sm leading-tight flex-1">{task.title}</h3>
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={handleEdit}
            onPointerDown={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            className="shrink-0 h-6 w-6"
          >
            <Pencil className="h-3.5 w-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={handleDeleteClick}
            onPointerDown={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            className="shrink-0 h-6 w-6"
          >
            <Trash2 className="h-3.5 w-3.5 text-destructive" />
          </Button>
        </div>
      </div>

      {/* Description */}
      {task.description && (
        <p className="text-xs text-muted-foreground line-clamp-2">
          {task.description}
        </p>
      )}

      {/* Metadata */}
      {task.due_date && (
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <div className={cn(
            "flex items-center gap-1",
            new Date(task.due_date) < new Date() && task.status !== 'done'
              ? "text-destructive"
              : ""
          )}>
            <Calendar className="h-3 w-3" />
            {format(new Date(task.due_date), 'MMM d')}
          </div>
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      <TaskDeleteDialog
        open={showDeleteDialog}
        onOpenChange={setShowDeleteDialog}
        onConfirm={handleConfirmDelete}
        taskTitle={task.title}
      />
    </div>
  );
}
