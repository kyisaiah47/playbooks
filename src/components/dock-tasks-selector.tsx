"use client"

import * as React from "react"
import { format } from "date-fns"
import { PlusIcon, ChevronDownIcon, PencilIcon } from "lucide-react"
import { useDataCache } from "@/contexts/DataCacheContext"
import { Task } from "@/types/task"
import { ErrorLogger } from "@/lib/error-logger"

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface DockTasksSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTrackIds?: string[];
}

export function DockTasksSelector({
  isOpen,
  onClose,
  selectedTrackIds = []
}: DockTasksSelectorProps) {
  const { items: cachedItems, fetchItems, invalidateItems, tracks, fetchTracks } = useDataCache();
  const [tasks, setTasks] = React.useState<Task[]>([])
  const [loading, setLoading] = React.useState(false)
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
  const [draggedTask, setDraggedTask] = React.useState<Task | null>(null)
  const [selectedTrackId, setSelectedTrackId] = React.useState<string>('')

  // Fetch tracks for the selector
  React.useEffect(() => {
    if (isOpen && !tracks) {
      fetchTracks(false);
    }
  }, [isOpen, tracks, fetchTracks]);

  // Fetch tasks using cache
  React.useEffect(() => {
    if (!isOpen) return;

    async function loadTasks() {
      // Try cached items first
      if (cachedItems && cachedItems.length > 0) {
        const allTasks = cachedItems.filter((item: any) =>
          !item.start_time || item.type === 'task'
        );
        // Filter by selected tracks
        const filteredTasks = selectedTrackIds.length > 0
          ? allTasks.filter((item: any) =>
              item.track_id && selectedTrackIds.includes(item.track_id)
            )
          : allTasks;
        setTasks(filteredTasks);
        return;
      }

      try {
        setLoading(true);
        const items = await fetchItems(false);
        const allTasks = items.filter((item: any) =>
          !item.start_time || item.type === 'task'
        );
        // Filter by selected tracks
        const filteredTasks = selectedTrackIds.length > 0
          ? allTasks.filter((item: any) =>
              item.track_id && selectedTrackIds.includes(item.track_id)
            )
          : allTasks;
        setTasks(filteredTasks);
      } catch (error) {
        ErrorLogger.logError(error, {
          component: 'DockTasksSelector',
          action: 'loadTasks'
        });
        setTasks([]);
      } finally {
        setLoading(false);
      }
    }

    loadTasks();
  }, [isOpen, cachedItems, fetchItems, selectedTrackIds]);

  const tasksByStatus = React.useMemo(() => {
    return {
      todo: tasks.filter(t => t.status === 'todo'),
      in_progress: tasks.filter(t => t.status === 'in_progress'),
      done: tasks.filter(t => t.status === 'done'),
    };
  }, [tasks]);

  const refreshTasks = React.useCallback(async () => {
    invalidateItems();
    const items = await fetchItems(true);
    const allTasks = items.filter((item: any) =>
      !item.start_time || item.type === 'task'
    );
    // Filter by selected tracks
    const filteredTasks = selectedTrackIds.length > 0
      ? allTasks.filter((item: any) =>
          item.track_id && selectedTrackIds.includes(item.track_id)
        )
      : allTasks;
    setTasks(filteredTasks);
  }, [invalidateItems, fetchItems, selectedTrackIds]);

  const resetForm = React.useCallback(() => {
    setTaskTitle('');
    setTaskDescription('');
    setDueDate(undefined);
    setSelectedTask(null);
    setSelectedTrackId(selectedTrackIds.length === 1 ? selectedTrackIds[0] : '');
  }, [selectedTrackIds]);

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
          track_id: selectedTrackId || null,
        }),
      });

      if (res.ok) {
        resetForm();
        setCreateDialogOpen(false);
        await refreshTasks();
      }
    } catch (error) {
      ErrorLogger.logError(error, {
        component: 'DockTasksSelector',
        action: 'handleCreateTask'
      });
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
      ErrorLogger.logError(error, {
        component: 'DockTasksSelector',
        action: 'handleUpdateTask',
        metadata: { taskId: selectedTask.id }
      });
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
      ErrorLogger.logError(error, {
        component: 'DockTasksSelector',
        action: 'handleDeleteTask',
        metadata: { taskId: selectedTask.id }
      });
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
      ErrorLogger.logError(error, {
        component: 'DockTasksSelector',
        action: 'handleStatusChange',
        metadata: { taskId, newStatus }
      });
    }
  };

  const handleDragStart = (task: Task) => {
    setDraggedTask(task);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = async (newStatus: Task['status']) => {
    if (!draggedTask) return;

    if (draggedTask.status !== newStatus) {
      await handleStatusChange(draggedTask.id, newStatus);
    }
    setDraggedTask(null);
  };

  if (!isOpen) return null;

  return (
    <div className="w-[280px] py-3">
      <div className="px-3 pb-3 flex items-center justify-between border-b">
        <h3 className="text-xs font-semibold">Tasks</h3>
        <Button
          variant="ghost"
          size="icon"
          className="size-5"
          title="Add Task"
          onClick={() => {
            resetForm();
            setCreateDialogOpen(true);
          }}
        >
          <PlusIcon className="h-3.5 w-3.5" />
          <span className="sr-only">Add Task</span>
        </Button>
      </div>

      <div className="px-3 pt-3 flex flex-col gap-3">
        {loading ? (
          <div className="text-muted-foreground text-xs text-center py-8">
            Loading tasks...
          </div>
        ) : (
          <>
            {/* To Do Column */}
            <div
              className="flex flex-col gap-1.5"
              onDragOver={handleDragOver}
              onDrop={() => handleDrop('todo')}
            >
              <div className="flex items-center justify-between">
                <h4 className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide">
                  To Do
                </h4>
                <span className="text-[10px] text-muted-foreground">
                  {tasksByStatus.todo.length}
                </span>
              </div>
              <div className="flex flex-col gap-1.5 max-h-[180px] overflow-y-auto">
                {tasksByStatus.todo.length === 0 ? (
                  <div className="text-[10px] text-muted-foreground text-center py-2 border border-dashed rounded-md">
                    No tasks
                  </div>
                ) : (
                  tasksByStatus.todo.map((task) => (
                    <div
                      key={task.id}
                      draggable
                      onDragStart={() => handleDragStart(task)}
                      className="bg-blue-500/10 hover:bg-blue-500/20 relative rounded-md p-2 text-xs cursor-move transition-colors border border-blue-500/20 flex items-start justify-between gap-1.5"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="font-medium mb-0.5 text-xs truncate">{task.title}</div>
                        {task.due_date && (
                          <div className="text-[10px] text-muted-foreground">
                            Due {format(new Date(task.due_date), 'MMM d')}
                          </div>
                        )}
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleTaskClick(task);
                        }}
                        className="flex-shrink-0 p-0.5 hover:bg-background rounded transition-colors"
                      >
                        <PencilIcon className="h-3 w-3 text-muted-foreground" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* In Progress Column */}
            <div
              className="flex flex-col gap-1.5"
              onDragOver={handleDragOver}
              onDrop={() => handleDrop('in_progress')}
            >
              <div className="flex items-center justify-between">
                <h4 className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide">
                  In Progress
                </h4>
                <span className="text-[10px] text-muted-foreground">
                  {tasksByStatus.in_progress.length}
                </span>
              </div>
              <div className="flex flex-col gap-1.5 max-h-[180px] overflow-y-auto">
                {tasksByStatus.in_progress.length === 0 ? (
                  <div className="text-[10px] text-muted-foreground text-center py-2 border border-dashed rounded-md">
                    No tasks
                  </div>
                ) : (
                  tasksByStatus.in_progress.map((task) => (
                    <div
                      key={task.id}
                      draggable
                      onDragStart={() => handleDragStart(task)}
                      className="bg-orange-500/10 hover:bg-orange-500/20 relative rounded-md p-2 text-xs cursor-move transition-colors border border-orange-500/20 flex items-start justify-between gap-1.5"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="font-medium mb-0.5 text-xs truncate">{task.title}</div>
                        {task.due_date && (
                          <div className="text-[10px] text-muted-foreground">
                            Due {format(new Date(task.due_date), 'MMM d')}
                          </div>
                        )}
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleTaskClick(task);
                        }}
                        className="flex-shrink-0 p-0.5 hover:bg-background/50 rounded transition-colors"
                      >
                        <PencilIcon className="h-3 w-3 text-muted-foreground" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Done Column */}
            <div
              className="flex flex-col gap-1.5"
              onDragOver={handleDragOver}
              onDrop={() => handleDrop('done')}
            >
              <div className="flex items-center justify-between">
                <h4 className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide">
                  Done
                </h4>
                <span className="text-[10px] text-muted-foreground">
                  {tasksByStatus.done.length}
                </span>
              </div>
              <div className="flex flex-col gap-1.5 max-h-[180px] overflow-y-auto">
                {tasksByStatus.done.length === 0 ? (
                  <div className="text-[10px] text-muted-foreground text-center py-2 border border-dashed rounded-md">
                    No tasks
                  </div>
                ) : (
                  tasksByStatus.done.map((task) => (
                    <div
                      key={task.id}
                      draggable
                      onDragStart={() => handleDragStart(task)}
                      className="bg-green-500/10 hover:bg-green-500/20 relative rounded-md p-2 text-xs cursor-move transition-colors border border-green-500/20 opacity-60 flex items-start justify-between gap-1.5"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="font-medium mb-0.5 text-xs line-through truncate">{task.title}</div>
                        {task.due_date && (
                          <div className="text-[10px] text-muted-foreground">
                            Due {format(new Date(task.due_date), 'MMM d')}
                          </div>
                        )}
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleTaskClick(task);
                        }}
                        className="flex-shrink-0 p-0.5 hover:bg-background/50 rounded transition-colors"
                      >
                        <PencilIcon className="h-3 w-3 text-muted-foreground" />
                      </button>
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
              {selectedTrackIds.length > 1 && (
                <div className="grid gap-2">
                  <Label htmlFor="task-track">Track</Label>
                  <Select value={selectedTrackId} onValueChange={setSelectedTrackId}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a track" />
                    </SelectTrigger>
                    <SelectContent className="z-[300]">
                      {tracks?.filter(t => selectedTrackIds.includes(t.id)).map(track => (
                        <SelectItem key={track.id} value={track.id}>
                          {track.custom_name || track.guides.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
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
              <Button type="submit" disabled={creating || !taskTitle.trim() || (selectedTrackIds.length > 1 && !selectedTrackId)}>
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
