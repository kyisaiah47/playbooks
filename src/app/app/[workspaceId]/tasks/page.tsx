'use client';

import { useParams, useSearchParams } from 'next/navigation';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { ListTodo, Loader2 } from 'lucide-react';
import { KanbanBoard } from '@/components/app/tasks/KanbanBoard';
import { Task } from '@/types/workspace';
import { toast } from 'sonner';
import { useDemo } from '@/contexts/demo-context';
import { DEMO_WORKSPACE_ID } from '@/lib/demo-constants';

interface ExtendedTask extends Task {
  user_guides?: {
    id: string;
    guides: {
      name: string;
      icon: string | null;
    };
  } | null;
}

export default function TasksPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const { demoMode } = useDemo();
  const workspaceId = demoMode ? DEMO_WORKSPACE_ID : (params.workspaceId as string);
  const queryClient = useQueryClient();

  // Get selected note IDs from URL
  const selectedNoteIds = searchParams.get('tasksNotes')?.split(',').filter(Boolean) || [];

  // Fetch tasks
  const { data: allTasks, isLoading, error } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const res = await fetch('/api/items');
      if (!res.ok) throw new Error('Failed to fetch tasks');
      const data = await res.json();
      return data.items as ExtendedTask[];
    },
  });

  // Filter tasks by selected notes - in demo mode, show all tasks if nothing selected
  const data = selectedNoteIds.length > 0
    ? (allTasks || []).filter(task => task.user_guide_id && selectedNoteIds.includes(task.user_guide_id))
    : (demoMode ? (allTasks || []) : []);

  // Create task mutation
  const createTaskMutation = useMutation({
    mutationFn: async (task: {
      title: string;
      description: string;
      status: 'todo' | 'in_progress' | 'done';
      due_date: string | null;
      user_guide_id: string | null;
    }) => {
      const res = await fetch('/api/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
      });
      if (!res.ok) throw new Error('Failed to create task');
      return res.json();
    },
    onMutate: async (newTask) => {
      // Cancel outgoing refetches
      await queryClient.cancelQueries({ queryKey: ['tasks'] });

      // Snapshot the previous value
      const previousTasks = queryClient.getQueryData<ExtendedTask[]>(['tasks']);

      // Optimistically update to the new value
      queryClient.setQueryData<ExtendedTask[]>(['tasks'], (old = []) => [
        ...old,
        {
          id: `temp-${Date.now()}`,
          user_id: '',
          title: newTask.title,
          description: newTask.description,
          status: newTask.status as 'todo' | 'in_progress' | 'done',
          due_date: newTask.due_date,
          user_guide_id: newTask.user_guide_id,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        } as ExtendedTask,
      ]);

      return { previousTasks };
    },
    onError: (err, newTask, context) => {
      // Rollback on error
      if (context?.previousTasks) {
        queryClient.setQueryData(['tasks'], context.previousTasks);
      }
      toast.error('Failed to create task');
    },
    onSuccess: () => {
      toast.success('Task created successfully');
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });

  // Delete task mutation
  const deleteTaskMutation = useMutation({
    mutationFn: async (taskId: string) => {
      const res = await fetch(`/api/items/${taskId}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error('Failed to delete task');
      return res.json();
    },
    onMutate: async (taskId) => {
      await queryClient.cancelQueries({ queryKey: ['tasks'] });

      const previousTasks = queryClient.getQueryData<ExtendedTask[]>(['tasks']);

      queryClient.setQueryData<ExtendedTask[]>(['tasks'], (old = []) =>
        old.filter((task) => task.id !== taskId)
      );

      return { previousTasks };
    },
    onError: (err, taskId, context) => {
      if (context?.previousTasks) {
        queryClient.setQueryData(['tasks'], context.previousTasks);
      }
      toast.error('Failed to delete task');
    },
    onSuccess: () => {
      toast.success('Task deleted successfully');
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });

  // Update task status mutation
  const updateTaskStatusMutation = useMutation({
    mutationFn: async ({
      taskId,
      status,
    }: {
      taskId: string;
      status: 'todo' | 'in_progress' | 'done';
    }) => {
      const res = await fetch(`/api/items/${taskId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      if (!res.ok) throw new Error('Failed to update task');
      return res.json();
    },
    onMutate: async ({ taskId, status }) => {
      await queryClient.cancelQueries({ queryKey: ['tasks'] });

      const previousTasks = queryClient.getQueryData<ExtendedTask[]>(['tasks']);

      queryClient.setQueryData<ExtendedTask[]>(['tasks'], (old = []) =>
        old.map((task) =>
          task.id === taskId
            ? { ...task, status: status as 'todo' | 'in_progress' | 'done' }
            : task
        )
      );

      return { previousTasks };
    },
    onError: (err, variables, context) => {
      if (context?.previousTasks) {
        queryClient.setQueryData(['tasks'], context.previousTasks);
      }
      toast.error('Failed to update task status');
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });

  // Update task mutation
  const updateTaskMutation = useMutation({
    mutationFn: async ({
      taskId,
      updates,
    }: {
      taskId: string;
      updates: {
        title: string;
        description: string;
        due_date: string | null;
      };
    }) => {
      const res = await fetch(`/api/items/${taskId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
      });
      if (!res.ok) throw new Error('Failed to update task');
      return res.json();
    },
    onMutate: async ({ taskId, updates }) => {
      await queryClient.cancelQueries({ queryKey: ['tasks'] });

      const previousTasks = queryClient.getQueryData<ExtendedTask[]>(['tasks']);

      queryClient.setQueryData<ExtendedTask[]>(['tasks'], (old = []) =>
        old.map((task) =>
          task.id === taskId
            ? { ...task, ...updates }
            : task
        )
      );

      return { previousTasks };
    },
    onError: (err, variables, context) => {
      if (context?.previousTasks) {
        queryClient.setQueryData(['tasks'], context.previousTasks);
      }
      toast.error('Failed to update task');
    },
    onSuccess: () => {
      toast.success('Task updated successfully');
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });

  const handleCreateTask = (task: {
    title: string;
    description: string;
    status: 'todo' | 'in_progress' | 'done';
    due_date: string | null;
    user_guide_id: string | null;
  }) => {
    if (demoMode) {
      toast.info('Not available in demo mode');
      return;
    }
    createTaskMutation.mutate(task);
  };

  const handleDeleteTask = (taskId: string) => {
    deleteTaskMutation.mutate(taskId);
  };

  const handleUpdateTaskStatus = (
    taskId: string,
    newStatus: 'todo' | 'in_progress' | 'done'
  ) => {
    updateTaskStatusMutation.mutate({ taskId, status: newStatus });
  };

  const handleUpdateTask = (
    taskId: string,
    updates: {
      title: string;
      description: string;
      due_date: string | null;
    }
  ) => {
    updateTaskMutation.mutate({ taskId, updates });
  };

  if (isLoading) {
    return (
      <motion.div
        className="h-full w-full flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        className="h-full w-full p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
              <ListTodo className="w-5 h-5 text-destructive" />
            </div>
            <h1 className="text-3xl font-bold">Tasks</h1>
          </div>
          <p className="text-destructive">
            Failed to load tasks. Please try again later.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="h-full w-full flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="border-b border-border/40 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <ListTodo className="w-4 h-4 text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-semibold">Tasks</h1>
            <p className="text-xs text-muted-foreground">Manage your tasks</p>
          </div>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="flex-1 overflow-auto">
        <KanbanBoard
          tasks={data || []}
          onCreateTask={handleCreateTask}
          onDeleteTask={handleDeleteTask}
          onUpdateTaskStatus={handleUpdateTaskStatus}
          onUpdateTask={handleUpdateTask}
          workspaceId={workspaceId}
        />
      </div>
    </motion.div>
  );
}
