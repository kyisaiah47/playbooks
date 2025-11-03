"use client"

import * as React from "react"
import { format } from "date-fns"
import { PlusIcon, ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface Task {
  id: string;
  title: string;
  description?: string;
  due_date?: string;
  status: 'todo' | 'in_progress' | 'done';
}

interface DockTasksSelectorProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DockTasksSelector({
  isOpen,
  onClose,
}: DockTasksSelectorProps) {
  const [tasks, setTasks] = React.useState<Task[]>([])
  const [loading, setLoading] = React.useState(true)
  const [createDialogOpen, setCreateDialogOpen] = React.useState(false)
  const [taskTitle, setTaskTitle] = React.useState('')
  const [taskDescription, setTaskDescription] = React.useState('')
  const [dueDate, setDueDate] = React.useState<Date | undefined>()
  const [dueDateOpen, setDueDateOpen] = React.useState(false)
  const [creating, setCreating] = React.useState(false)
  const [selectedTask, setSelectedTask] = React.useState<Task | null>(null)
  const [detailsDialogOpen, setDetailsDialogOpen] = React.useState(false)
  const [editing, setEditing] = React.useState(false)
  const [deleting, setDeleting] = React.useState(false)

  // Fetch tasks from the API
  React.useEffect(() => {
    if (!isOpen) return;

    async function fetchTasks() {
      try {
        setLoading(true);
        const res = await fetch('/api/items');

        if (res.status === 401) {
          setTasks([]);
          setLoading(false);
          return;
        }

        if (res.ok) {
          const data = await res.json();
          // Get tasks (items without start_time or explicitly marked as tasks)
          const allTasks = (data.items || []).filter((item: any) =>
            !item.start_time || item.type === 'task'
          );
          setTasks(allTasks);
        } else {
          setTasks([]);
        }
      } catch (error) {
        setTasks([]);
      } finally {
        setLoading(false);
      }
    }

    fetchTasks();
  }, [isOpen]);

  const tasksByStatus = React.useMemo(() => {
    return {
      todo: tasks.filter(t => t.status === 'todo'),
      in_progress: tasks.filter(t => t.status === 'in_progress'),
      done: tasks.filter(t => t.status === 'done'),
    };
  }, [tasks]);

  const refreshTasks = React.useCallback(async () => {
    const refreshRes = await fetch('/api/items');
    if (refreshRes.ok) {
      const data = await refreshRes.json();
      const allTasks = (data.items || []).filter((item: any) =>
        !item.start_time || item.type === 'task'
      );
      setTasks(allTasks);
    }
  }, []);

  const resetForm = React.useCallback(() => {
    setTaskTitle('');
    setTaskDescription('');
    setDueDate(undefined);
    setSelectedTask(null);
  }, []);

  const handleCreateTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskTitle.trim()) return;

    setCreating(true);
    try {
      const res = await fetch('/api/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: taskTitle.trim(),
          description: taskDescription.trim() || null,
          due_date: dueDate ? format(dueDate, 'yyyy-MM-dd') : null,
          status: 'todo',
          type: 'task',
        }),
      });

      if (res.ok) {
        resetForm();
        setCreateDialogOpen(false);
        await refreshTasks();
      }
    } catch (error) {
      console.error('Error creating task:', error);
    } finally {
      setCreating(false);
    }
  };

  const handleTaskClick = (task: Task) => {
    setSelectedTask(task);
    setTaskTitle(task.title);
    setTaskDescription(task.description || '');
    if (task.due_date) {
      setDueDate(new Date(task.due_date));
    } else {
      setDueDate(undefined);
    }
    setDetailsDialogOpen(true);
  };

  const handleUpdateTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTask || !taskTitle.trim()) return;

    setEditing(true);
    try {
      const res = await fetch(`/api/items/${selectedTask.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: taskTitle.trim(),
          description: taskDescription.trim() || null,
          due_date: dueDate ? format(dueDate, 'yyyy-MM-dd') : null,
        }),
      });

      if (res.ok) {
        resetForm();
        setDetailsDialogOpen(false);
        await refreshTasks();
      }
    } catch (error) {
      console.error('Error updating task:', error);
    } finally {
      setEditing(false);
    }
  };

  const handleDeleteTask = async () => {
    if (!selectedTask) return;

    setDeleting(true);
    try {
      const res = await fetch(`/api/items/${selectedTask.id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        resetForm();
        setDetailsDialogOpen(false);
        await refreshTasks();
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    } finally {
      setDeleting(false);
    }
  };

  const handleStatusChange = async (taskId: string, newStatus: Task['status']) => {
    try {
      const res = await fetch(`/api/items/${taskId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });

      if (res.ok) {
        await refreshTasks();
      }
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="w-[400px] py-4">
      <div className="px-4 pb-4 flex items-center justify-between border-b">
        <h3 className="text-sm font-semibold">Tasks</h3>
        <Button
          variant="ghost"
          size="icon"
          className="size-6"
          title="Add Task"
          onClick={() => {
            resetForm();
            setCreateDialogOpen(true);
          }}
        >
          <PlusIcon />
          <span className="sr-only">Add Task</span>
        </Button>
      </div>

      <div className="px-4 pt-4 flex flex-col gap-4">
        {loading ? (
          <div className="text-muted-foreground text-xs text-center py-8">
            Loading tasks...
          </div>
        ) : (
          <>
            {/* To Do Column */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  To Do
                </h4>
                <span className="text-xs text-muted-foreground">
                  {tasksByStatus.todo.length}
                </span>
              </div>
              <div className="flex flex-col gap-2 max-h-[200px] overflow-y-auto">
                {tasksByStatus.todo.length === 0 ? (
                  <div className="text-xs text-muted-foreground text-center py-3 border border-dashed rounded-md">
                    No tasks
                  </div>
                ) : (
                  tasksByStatus.todo.map((task) => (
                    <div
                      key={task.id}
                      onClick={() => handleTaskClick(task)}
                      className="bg-muted hover:bg-muted/80 relative rounded-md p-2 text-sm cursor-pointer transition-colors border border-border/50"
                    >
                      <div className="font-medium mb-0.5 text-sm">{task.title}</div>
                      {task.due_date && (
                        <div className="text-xs text-muted-foreground">
                          Due {format(new Date(task.due_date), 'MMM d')}
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* In Progress Column */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  In Progress
                </h4>
                <span className="text-xs text-muted-foreground">
                  {tasksByStatus.in_progress.length}
                </span>
              </div>
              <div className="flex flex-col gap-2 max-h-[200px] overflow-y-auto">
                {tasksByStatus.in_progress.length === 0 ? (
                  <div className="text-xs text-muted-foreground text-center py-3 border border-dashed rounded-md">
                    No tasks
                  </div>
                ) : (
                  tasksByStatus.in_progress.map((task) => (
                    <div
                      key={task.id}
                      onClick={() => handleTaskClick(task)}
                      className="bg-blue-500/10 hover:bg-blue-500/20 relative rounded-md p-2 text-sm cursor-pointer transition-colors border border-blue-500/20"
                    >
                      <div className="font-medium mb-0.5 text-sm">{task.title}</div>
                      {task.due_date && (
                        <div className="text-xs text-muted-foreground">
                          Due {format(new Date(task.due_date), 'MMM d')}
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Done Column */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Done
                </h4>
                <span className="text-xs text-muted-foreground">
                  {tasksByStatus.done.length}
                </span>
              </div>
              <div className="flex flex-col gap-2 max-h-[200px] overflow-y-auto">
                {tasksByStatus.done.length === 0 ? (
                  <div className="text-xs text-muted-foreground text-center py-3 border border-dashed rounded-md">
                    No tasks
                  </div>
                ) : (
                  tasksByStatus.done.map((task) => (
                    <div
                      key={task.id}
                      onClick={() => handleTaskClick(task)}
                      className="bg-green-500/10 hover:bg-green-500/20 relative rounded-md p-2 text-sm cursor-pointer transition-colors border border-green-500/20 opacity-60"
                    >
                      <div className="font-medium mb-0.5 text-sm line-through">{task.title}</div>
                      {task.due_date && (
                        <div className="text-xs text-muted-foreground">
                          Due {format(new Date(task.due_date), 'MMM d')}
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Create Task Dialog */}
      <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
        <DialogContent className="sm:max-w-[425px] z-[200]">
          <DialogHeader>
            <DialogTitle>Create Task</DialogTitle>
            <DialogDescription>
              Add a new task to your list
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleCreateTask}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="task-title">Title</Label>
                <Input
                  id="task-title"
                  value={taskTitle}
                  onChange={(e) => setTaskTitle(e.target.value)}
                  placeholder="Task title"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="task-description">Description</Label>
                <Input
                  id="task-description"
                  value={taskDescription}
                  onChange={(e) => setTaskDescription(e.target.value)}
                  placeholder="Task description (optional)"
                />
              </div>
              <div className="grid gap-2">
                <Label>Due Date (Optional)</Label>
                <Popover open={dueDateOpen} onOpenChange={setDueDateOpen}>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="justify-between font-normal">
                      {dueDate ? format(dueDate, 'MMM d, yyyy') : "Select date"}
                      <ChevronDownIcon className="h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto overflow-hidden p-0 z-[300]" align="start">
                    <Calendar
                      mode="single"
                      selected={dueDate}
                      onSelect={(date) => {
                        setDueDate(date);
                        setDueDateOpen(false);
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setCreateDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={creating || !taskTitle.trim()}>
                {creating ? "Creating..." : "Create Task"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Task Details/Edit Dialog */}
      <Dialog open={detailsDialogOpen} onOpenChange={setDetailsDialogOpen}>
        <DialogContent className="sm:max-w-[425px] z-[200]">
          <DialogHeader>
            <DialogTitle>Task Details</DialogTitle>
            <DialogDescription>
              View or edit task details
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleUpdateTask}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="edit-title">Title</Label>
                <Input
                  id="edit-title"
                  value={taskTitle}
                  onChange={(e) => setTaskTitle(e.target.value)}
                  placeholder="Task title"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-description">Description</Label>
                <Input
                  id="edit-description"
                  value={taskDescription}
                  onChange={(e) => setTaskDescription(e.target.value)}
                  placeholder="Task description (optional)"
                />
              </div>
              <div className="grid gap-2">
                <Label>Due Date (Optional)</Label>
                <Popover open={dueDateOpen} onOpenChange={setDueDateOpen}>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="justify-between font-normal">
                      {dueDate ? format(dueDate, 'MMM d, yyyy') : "Select date"}
                      <ChevronDownIcon className="h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto overflow-hidden p-0 z-[300]" align="start">
                    <Calendar
                      mode="single"
                      selected={dueDate}
                      onSelect={(date) => {
                        setDueDate(date);
                        setDueDateOpen(false);
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="grid gap-2">
                <Label>Status</Label>
                <div className="flex gap-2">
                  <Button
                    type="button"
                    variant={selectedTask?.status === 'todo' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => selectedTask && handleStatusChange(selectedTask.id, 'todo')}
                    className="flex-1"
                  >
                    To Do
                  </Button>
                  <Button
                    type="button"
                    variant={selectedTask?.status === 'in_progress' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => selectedTask && handleStatusChange(selectedTask.id, 'in_progress')}
                    className="flex-1"
                  >
                    In Progress
                  </Button>
                  <Button
                    type="button"
                    variant={selectedTask?.status === 'done' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => selectedTask && handleStatusChange(selectedTask.id, 'done')}
                    className="flex-1"
                  >
                    Done
                  </Button>
                </div>
              </div>
            </div>
            <DialogFooter className="flex-col gap-2 sm:flex-row">
              <Button
                type="button"
                variant="destructive"
                onClick={handleDeleteTask}
                disabled={deleting || editing}
                className="sm:mr-auto"
              >
                {deleting ? "Deleting..." : "Delete"}
              </Button>
              <div className="flex gap-2">
                <Button type="button" variant="outline" onClick={() => setDetailsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" disabled={editing || deleting || !taskTitle.trim()}>
                  {editing ? "Saving..." : "Save Changes"}
                </Button>
              </div>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
