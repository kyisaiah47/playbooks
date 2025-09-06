"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import { 
  Plus,
  Edit,
  Trash2,
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  User,
  Flag,
  Search,
  Filter,
  CalendarDays,
  Timer
} from "lucide-react"
import { useEventPlanning } from "@/contexts/event-planning-context"

// Define task-specific data interface
interface Task {
  id: string
  name: string
  description: string
  category: 'planning' | 'booking' | 'preparation' | 'coordination' | 'communication' | 'logistics' | 'decoration' | 'other'
  status: 'not-started' | 'in-progress' | 'completed' | 'overdue' | 'cancelled'
  priority: 'low' | 'medium' | 'high' | 'critical'
  assignedTo: string
  dueDate: Date
  startDate: Date
  completedDate?: Date
  estimatedHours: number
  actualHours: number
  dependencies: string[]
  tags: string[]
  notes: string
  createdAt: Date
  updatedAt: Date
}

export function TimelineManagement() {
  const { eventPlanningData } = useEventPlanning()
  const [tasks, setTasks] = useState<Task[]>([])
  const [isAddingTask, setIsAddingTask] = useState(false)
  const [editingTask, setEditingTask] = useState<Task | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState<string>('all')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [priorityFilter, setPriorityFilter] = useState<string>('all')
  const [viewMode, setViewMode] = useState<'list' | 'timeline'>('list')

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: 'planning' as const,
    priority: 'medium' as const,
    assignedTo: '',
    dueDate: new Date(),
    startDate: new Date(),
    estimatedHours: 0,
    actualHours: 0,
    dependencies: [] as string[],
    tags: [] as string[],
    notes: '',
  })

  // Load tasks from localStorage
  useEffect(() => {
    const savedTasks = localStorage.getItem('event-planning-tasks')
    if (savedTasks) {
      const parsed = JSON.parse(savedTasks)
      setTasks(parsed.map((task: any) => ({
        ...task,
        dueDate: new Date(task.dueDate),
        startDate: new Date(task.startDate),
        completedDate: task.completedDate ? new Date(task.completedDate) : undefined,
        createdAt: new Date(task.createdAt),
        updatedAt: new Date(task.updatedAt),
      })))
    }
  }, [])

  // Save tasks to localStorage
  const saveTasks = (newTasks: Task[]) => {
    setTasks(newTasks)
    localStorage.setItem('event-planning-tasks', JSON.stringify(newTasks))
  }

  // Filter tasks based on search and filters
  const filteredTasks = tasks.filter(task => {
    const matchesSearch = searchTerm === '' || 
      task.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.assignedTo.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = categoryFilter === 'all' || task.category === categoryFilter
    const matchesStatus = statusFilter === 'all' || task.status === statusFilter
    const matchesPriority = priorityFilter === 'all' || task.priority === priorityFilter
    
    return matchesSearch && matchesCategory && matchesStatus && matchesPriority
  })

  // Sort tasks by due date
  const sortedTasks = [...filteredTasks].sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime())

  // CRUD Operations
  const addTask = () => {
    const newTask: Task = {
      id: Date.now().toString(),
      ...formData,
      status: 'not-started',
      actualHours: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    saveTasks([...tasks, newTask])
    resetForm()
    setIsAddingTask(false)
  }

  const updateTask = (id: string, updates: Partial<Task>) => {
    const updatedTasks = tasks.map(task => 
      task.id === id 
        ? { ...task, ...updates, updatedAt: new Date() }
        : task
    )
    saveTasks(updatedTasks)
  }

  const deleteTask = (id: string) => {
    const filteredTasks = tasks.filter(task => task.id !== id)
    saveTasks(filteredTasks)
  }

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      category: 'planning',
      priority: 'medium',
      assignedTo: '',
      dueDate: new Date(),
      startDate: new Date(),
      estimatedHours: 0,
      actualHours: 0,
      dependencies: [],
      tags: [],
      notes: '',
    })
    setEditingTask(null)
  }

  const openEditDialog = (task: Task) => {
    setFormData({
      name: task.name,
      description: task.description,
      category: task.category,
      priority: task.priority,
      assignedTo: task.assignedTo,
      dueDate: task.dueDate,
      startDate: task.startDate,
      estimatedHours: task.estimatedHours,
      actualHours: task.actualHours,
      dependencies: task.dependencies,
      tags: task.tags,
      notes: task.notes,
    })
    setEditingTask(task)
    setIsAddingTask(true)
  }

  const handleSave = () => {
    if (editingTask) {
      updateTask(editingTask.id, formData)
    } else {
      addTask()
    }
    resetForm()
    setIsAddingTask(false)
  }

  const toggleTaskComplete = (id: string) => {
    const task = tasks.find(t => t.id === id)
    if (task) {
      const newStatus = task.status === 'completed' ? 'not-started' : 'completed'
      const updates: Partial<Task> = {
        status: newStatus,
        completedDate: newStatus === 'completed' ? new Date() : undefined
      }
      updateTask(id, updates)
    }
  }

  // Calculate progress/metrics
  const totalTasks = tasks.length
  const completedTasks = tasks.filter(task => task.status === 'completed').length
  const inProgressTasks = tasks.filter(task => task.status === 'in-progress').length
  const overdueTasks = tasks.filter(task => {
    const today = new Date()
    return task.status !== 'completed' && task.dueDate < today
  }).length
  
  const progressPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0
  
  // Calculate days until event
  const eventDate = eventPlanningData?.eventDate ? new Date(eventPlanningData.eventDate) : new Date()
  const today = new Date()
  const daysUntilEvent = Math.ceil((eventDate.getTime() - today.getTime()) / (1000 * 3600 * 24))

  // Upcoming tasks (next 7 days)
  const nextWeek = new Date()
  nextWeek.setDate(today.getDate() + 7)
  const upcomingTasks = tasks.filter(task => 
    task.status !== 'completed' && 
    task.dueDate >= today && 
    task.dueDate <= nextWeek
  )

  const getStatusColor = (status: Task['status']) => {
    switch (status) {
      case 'completed': return 'default'
      case 'in-progress': return 'secondary'
      case 'overdue': return 'destructive'
      case 'cancelled': return 'outline'
      default: return 'outline'
    }
  }

  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'critical': return 'destructive'
      case 'high': return 'secondary'
      case 'medium': return 'outline'
      case 'low': return 'outline'
      default: return 'outline'
    }
  }

  const getCategoryColor = (category: Task['category']) => {
    const colors = ['default', 'secondary', 'outline']
    return colors[category.charCodeAt(0) % colors.length]
  }

  const isOverdue = (task: Task) => {
    return task.status !== 'completed' && task.dueDate < today
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Timeline Management</h1>
          <p className="text-muted-foreground">Track tasks, deadlines, and project milestones</p>
        </div>
        <div className="flex gap-2">
          <div className="flex gap-1">
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              List
            </Button>
            <Button
              variant={viewMode === 'timeline' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('timeline')}
            >
              Timeline
            </Button>
          </div>
          <Dialog open={isAddingTask} onOpenChange={(open) => {
            setIsAddingTask(open)
            if (!open) resetForm()
          }}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Task
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{editingTask ? 'Edit Task' : 'Add New Task'}</DialogTitle>
                <DialogDescription>
                  {editingTask ? 'Update task information' : 'Add a new task to your event timeline.'}
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Task Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Task title"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    placeholder="Detailed task description"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="category">Category</Label>
                    <Select value={formData.category} onValueChange={(value) => 
                      setFormData({...formData, category: value as Task['category']})
                    }>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="planning">Planning</SelectItem>
                        <SelectItem value="booking">Booking</SelectItem>
                        <SelectItem value="preparation">Preparation</SelectItem>
                        <SelectItem value="coordination">Coordination</SelectItem>
                        <SelectItem value="communication">Communication</SelectItem>
                        <SelectItem value="logistics">Logistics</SelectItem>
                        <SelectItem value="decoration">Decoration</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="priority">Priority</Label>
                    <Select value={formData.priority} onValueChange={(value) => 
                      setFormData({...formData, priority: value as Task['priority']})
                    }>
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="critical">Critical</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="assignedTo">Assigned To</Label>
                  <Input
                    id="assignedTo"
                    value={formData.assignedTo}
                    onChange={(e) => setFormData({...formData, assignedTo: e.target.value})}
                    placeholder="Person responsible"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="startDate">Start Date</Label>
                    <Input
                      id="startDate"
                      type="date"
                      value={formData.startDate.toISOString().split('T')[0]}
                      onChange={(e) => setFormData({...formData, startDate: new Date(e.target.value)})}
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="dueDate">Due Date</Label>
                    <Input
                      id="dueDate"
                      type="date"
                      value={formData.dueDate.toISOString().split('T')[0]}
                      onChange={(e) => setFormData({...formData, dueDate: new Date(e.target.value)})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="estimatedHours">Estimated Hours</Label>
                    <Input
                      id="estimatedHours"
                      type="number"
                      value={formData.estimatedHours}
                      onChange={(e) => setFormData({...formData, estimatedHours: parseInt(e.target.value) || 0})}
                      placeholder="Hours needed"
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="actualHours">Actual Hours</Label>
                    <Input
                      id="actualHours"
                      type="number"
                      value={formData.actualHours}
                      onChange={(e) => setFormData({...formData, actualHours: parseInt(e.target.value) || 0})}
                      placeholder="Hours spent"
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    placeholder="Additional notes and details..."
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" onClick={handleSave}>
                  {editingTask ? 'Update Task' : 'Add Task'}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{progressPercentage.toFixed(1)}%</div>
            <Progress value={progressPercentage} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-1">
              {completedTasks} of {totalTasks} tasks completed
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
            <Timer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{inProgressTasks}</div>
            <p className="text-xs text-muted-foreground">currently active</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overdue</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{overdueTasks}</div>
            <p className="text-xs text-muted-foreground">need immediate attention</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Days to Event</CardTitle>
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Math.max(0, daysUntilEvent)}</div>
            <p className="text-xs text-muted-foreground">days remaining</p>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Tasks */}
      {upcomingTasks.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Tasks (Next 7 Days)</CardTitle>
            <CardDescription>Tasks due within the next week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {upcomingTasks.slice(0, 5).map((task) => (
                <div key={task.id} className="flex items-center justify-between p-2 bg-muted rounded">
                  <div className="flex items-center gap-3">
                    <Checkbox
                      checked={task.status === 'completed'}
                      onCheckedChange={() => toggleTaskComplete(task.id)}
                    />
                    <div>
                      <div className="font-medium">{task.name}</div>
                      <div className="text-sm text-muted-foreground">
                        Due: {task.dueDate.toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant={getPriorityColor(task.priority)}>
                      {task.priority}
                    </Badge>
                    {isOverdue(task) && (
                      <Badge variant="destructive">Overdue</Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Search & Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search tasks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
            
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="planning">Planning</SelectItem>
                <SelectItem value="booking">Booking</SelectItem>
                <SelectItem value="preparation">Preparation</SelectItem>
                <SelectItem value="coordination">Coordination</SelectItem>
                <SelectItem value="communication">Communication</SelectItem>
                <SelectItem value="logistics">Logistics</SelectItem>
                <SelectItem value="decoration">Decoration</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="not-started">Not Started</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="overdue">Overdue</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>

            <Select value={priorityFilter} onValueChange={setPriorityFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priorities</SelectItem>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Tasks List */}
      <Card>
        <CardHeader>
          <CardTitle>Task List ({filteredTasks.length} tasks)</CardTitle>
          <CardDescription>Manage your event planning tasks and deadlines</CardDescription>
        </CardHeader>
        <CardContent>
          {filteredTasks.length === 0 ? (
            <div className="text-center py-8">
              <Clock className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">
                {tasks.length === 0 ? 'No tasks added yet. Add your first task to get started!' : 'No tasks match your current filters.'}
              </p>
            </div>
          ) : (
            <Table>
              <TableCaption>Your event planning tasks</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">Done</TableHead>
                  <TableHead>Task</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Assigned To</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedTasks.map((task) => (
                  <TableRow key={task.id} className={isOverdue(task) ? 'bg-red-50' : ''}>
                    <TableCell>
                      <Checkbox
                        checked={task.status === 'completed'}
                        onCheckedChange={() => toggleTaskComplete(task.id)}
                      />
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">{task.name}</div>
                      {task.description && (
                        <div className="text-sm text-muted-foreground truncate max-w-xs">
                          {task.description}
                        </div>
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge variant={getCategoryColor(task.category)}>
                        {task.category}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {task.assignedTo && (
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {task.assignedTo}
                        </div>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {task.dueDate.toLocaleDateString()}
                      </div>
                      {isOverdue(task) && (
                        <Badge variant="destructive" className="text-xs mt-1">
                          Overdue
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge variant={getPriorityColor(task.priority)}>
                        {task.priority}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getStatusColor(task.status)}>
                        {task.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Select
                          value={task.status}
                          onValueChange={(value) => updateTask(task.id, { 
                            status: value as Task['status'],
                            completedDate: value === 'completed' ? new Date() : task.completedDate
                          })}
                        >
                          <SelectTrigger className="w-28 h-8">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="not-started">Not Started</SelectItem>
                            <SelectItem value="in-progress">In Progress</SelectItem>
                            <SelectItem value="completed">Completed</SelectItem>
                            <SelectItem value="overdue">Overdue</SelectItem>
                            <SelectItem value="cancelled">Cancelled</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => openEditDialog(task)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => deleteTask(task.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  )
}