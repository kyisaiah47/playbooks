'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Circle } from 'lucide-react';
import { format } from 'date-fns';

interface Task {
  id: string;
  title: string;
  description: string | null;
  status: string;
  priority: string;
  due_date: string | null;
  created_at: string;
  updated_at: string;
}

interface AgendaListProps {
  tasks: Task[];
  date: string;
  onTaskClick?: (taskId: string) => void;
}

export function AgendaList({ tasks, date, onTaskClick }: AgendaListProps) {
  const priorityColors: Record<string, string> = {
    high: 'destructive',
    medium: 'default',
    low: 'secondary',
  };

  const displayDate = format(new Date(date + 'T00:00:00'), 'EEEE, MMMM d');

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Today's Agenda</CardTitle>
        <p className="text-sm text-muted-foreground">{displayDate}</p>
      </CardHeader>
      <CardContent>
        {tasks.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground text-sm">No tasks due today</p>
            <p className="text-xs text-muted-foreground mt-1">Enjoy your free day!</p>
          </div>
        ) : (
          <div className="space-y-2">
            {tasks.map((task) => (
              <button
                key={task.id}
                onClick={() => onTaskClick?.(task.id)}
                className="w-full text-left p-3 rounded-lg border border-border/60 hover:bg-muted/50 transition-colors group"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    {task.status === 'completed' ? (
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    ) : (
                      <Circle className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h4
                        className={`font-medium text-sm ${
                          task.status === 'completed'
                            ? 'line-through text-muted-foreground'
                            : ''
                        }`}
                      >
                        {task.title}
                      </h4>
                      <Badge
                        variant={priorityColors[task.priority] as any}
                        className="text-xs shrink-0"
                      >
                        {task.priority}
                      </Badge>
                    </div>
                    {task.description && (
                      <p
                        className={`text-xs mt-1 line-clamp-2 ${
                          task.status === 'completed'
                            ? 'text-muted-foreground/70'
                            : 'text-muted-foreground'
                        }`}
                      >
                        {task.description}
                      </p>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
