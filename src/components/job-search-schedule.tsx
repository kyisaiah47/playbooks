"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useJobSearch, getJobSearchDisplayData } from "@/contexts/job-search-context"
import {
  Calendar,
  Clock,
  Plus,
  CheckCircle,
  AlertCircle,
  Users,
  Building,
  Phone,
  Video,
  MapPin,
  Edit,
  Trash2,
  Bell,
  Target
} from "lucide-react"

interface ScheduleEvent {
  id: string
  title: string
  company: string
  type: 'interview' | 'networking' | 'application-deadline' | 'follow-up' | 'research' | 'other'
  date: string
  time: string
  duration?: number
  location?: string
  contactPerson?: string
  notes: string
  status: 'scheduled' | 'completed' | 'cancelled' | 'rescheduled'
  priority: 'low' | 'medium' | 'high'
  reminders: string[]
}

interface Task {
  id: string
  title: string
  description: string
  category: 'application' | 'interview-prep' | 'networking' | 'research' | 'follow-up' | 'other'
  dueDate?: string
  completed: boolean
  priority: 'low' | 'medium' | 'high'
  estimatedTime?: number
}

const eventTypes = {
  interview: "Interview",
  networking: "Networking Event",
  "application-deadline": "Application Deadline", 
  "follow-up": "Follow-up",
  research: "Research",
  other: "Other"
}

const taskCategories = {
  application: "Application",
  "interview-prep": "Interview Prep",
  networking: "Networking",
  research: "Research", 
  "follow-up": "Follow-up",
  other: "Other"
}

const priorityColors = {
  low: "bg-blue-100 text-blue-800 border-blue-200",
  medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
  high: "bg-red-100 text-red-800 border-red-200"
}

const statusColors = {
  scheduled: "bg-blue-100 text-blue-800 border-blue-200",
  completed: "bg-green-100 text-green-800 border-green-200",
  cancelled: "bg-red-100 text-red-800 border-red-200",
  rescheduled: "bg-yellow-100 text-yellow-800 border-yellow-200"
}

export function JobSearchSchedule() {
  const { jobSearchData } = useJobSearch()
  const displayData = getJobSearchDisplayData(jobSearchData)

  const [events, setEvents] = useState<ScheduleEvent[]>([
    {
      id: "1",
      title: "Technical Interview",
      company: "TechCorp",
      type: "interview",
      date: "2024-09-10",
      time: "14:00",
      duration: 60,
      location: "Video Call - Zoom",
      contactPerson: "Sarah Johnson - Engineering Manager",
      notes: "Focus on React, system design, and coding challenges",
      status: "scheduled",
      priority: "high",
      reminders: ["1 day before", "2 hours before"]
    },
    {
      id: "2", 
      title: "Follow up on application",
      company: "StartupX",
      type: "follow-up",
      date: "2024-09-08",
      time: "10:00",
      notes: "Send follow-up email about application status",
      status: "scheduled", 
      priority: "medium",
      reminders: []
    },
    {
      id: "3",
      title: "Tech Meetup - JS Conference",
      company: "Local Community",
      type: "networking",
      date: "2024-09-12",
      time: "18:00",
      duration: 180,
      location: "Downtown Convention Center",
      notes: "Great networking opportunity, many local tech companies attending",
      status: "scheduled",
      priority: "medium",
      reminders: ["1 day before"]
    }
  ])

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Research BigTech Inc company culture",
      description: "Read recent news, employee reviews, and understand their values before interview",
      category: "research",
      dueDate: "2024-09-09",
      completed: false,
      priority: "high",
      estimatedTime: 120
    },
    {
      id: "2",
      title: "Update LinkedIn profile",
      description: "Add recent project and optimize headline for job search",
      category: "other",
      dueDate: "2024-09-06",
      completed: true,
      priority: "medium",
      estimatedTime: 60
    },
    {
      id: "3",
      title: "Practice system design questions",
      description: "Review common system design patterns and practice whiteboarding",
      category: "interview-prep",
      dueDate: "2024-09-09",
      completed: false,
      priority: "high",
      estimatedTime: 180
    }
  ])

  const [showEventDialog, setShowEventDialog] = useState(false)
  const [showTaskDialog, setShowTaskDialog] = useState(false)
  const [editingEvent, setEditingEvent] = useState<ScheduleEvent | null>(null)
  const [editingTask, setEditingTask] = useState<Task | null>(null)

  const [eventForm, setEventForm] = useState({
    title: "",
    company: "",
    type: "interview" as ScheduleEvent['type'],
    date: "",
    time: "",
    duration: "",
    location: "",
    contactPerson: "",
    notes: "",
    priority: "medium" as ScheduleEvent['priority']
  })

  const [taskForm, setTaskForm] = useState({
    title: "",
    description: "",
    category: "application" as Task['category'],
    dueDate: "",
    priority: "medium" as Task['priority'],
    estimatedTime: ""
  })

  const upcomingEvents = events
    .filter(e => e.status === 'scheduled' && new Date(e.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 5)

  const upcomingTasks = tasks
    .filter(t => !t.completed && (!t.dueDate || new Date(t.dueDate) >= new Date()))
    .sort((a, b) => {
      if (!a.dueDate && !b.dueDate) return 0
      if (!a.dueDate) return 1
      if (!b.dueDate) return -1
      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
    })
    .slice(0, 5)

  const todayEvents = events.filter(e => {
    const today = new Date().toISOString().split('T')[0]
    return e.date === today && e.status === 'scheduled'
  })

  const handleAddEvent = () => {
    if (!eventForm.title || !eventForm.date || !eventForm.time) return

    const newEvent: ScheduleEvent = {
      id: Date.now().toString(),
      ...eventForm,
      duration: eventForm.duration ? parseInt(eventForm.duration) : undefined,
      status: 'scheduled',
      reminders: []
    }

    if (editingEvent) {
      setEvents(prev => prev.map(e => 
        e.id === editingEvent.id ? { ...newEvent, id: editingEvent.id } : e
      ))
    } else {
      setEvents(prev => [...prev, newEvent])
    }

    resetEventForm()
    setShowEventDialog(false)
    setEditingEvent(null)
  }

  const handleAddTask = () => {
    if (!taskForm.title) return

    const newTask: Task = {
      id: Date.now().toString(),
      title: taskForm.title,
      description: taskForm.description,
      category: taskForm.category,
      dueDate: taskForm.dueDate || undefined,
      completed: false,
      priority: taskForm.priority,
      estimatedTime: taskForm.estimatedTime ? parseInt(taskForm.estimatedTime) : undefined
    }

    if (editingTask) {
      setTasks(prev => prev.map(t => 
        t.id === editingTask.id ? { ...newTask, id: editingTask.id } : t
      ))
    } else {
      setTasks(prev => [...prev, newTask])
    }

    resetTaskForm()
    setShowTaskDialog(false)
    setEditingTask(null)
  }

  const resetEventForm = () => {
    setEventForm({
      title: "",
      company: "",
      type: "interview",
      date: "",
      time: "",
      duration: "",
      location: "",
      contactPerson: "",
      notes: "",
      priority: "medium"
    })
  }

  const resetTaskForm = () => {
    setTaskForm({
      title: "",
      description: "",
      category: "application",
      dueDate: "",
      priority: "medium",
      estimatedTime: ""
    })
  }

  const toggleTaskComplete = (id: string) => {
    setTasks(prev => prev.map(t => 
      t.id === id ? { ...t, completed: !t.completed } : t
    ))
  }

  const handleEditEvent = (event: ScheduleEvent) => {
    setEventForm({
      title: event.title,
      company: event.company,
      type: event.type,
      date: event.date,
      time: event.time,
      duration: event.duration?.toString() || "",
      location: event.location || "",
      contactPerson: event.contactPerson || "",
      notes: event.notes,
      priority: event.priority
    })
    setEditingEvent(event)
    setShowEventDialog(true)
  }

  const handleEditTask = (task: Task) => {
    setTaskForm({
      title: task.title,
      description: task.description,
      category: task.category,
      dueDate: task.dueDate || "",
      priority: task.priority,
      estimatedTime: task.estimatedTime?.toString() || ""
    })
    setEditingTask(task)
    setShowTaskDialog(true)
  }

  const handleDeleteEvent = (id: string) => {
    if (confirm("Are you sure you want to delete this event?")) {
      setEvents(prev => prev.filter(e => e.id !== id))
    }
  }

  const handleDeleteTask = (id: string) => {
    if (confirm("Are you sure you want to delete this task?")) {
      setTasks(prev => prev.filter(t => t.id !== id))
    }
  }

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'interview': return <Users className="h-4 w-4" />
      case 'networking': return <Users className="h-4 w-4" />
      case 'application-deadline': return <Clock className="h-4 w-4" />
      case 'follow-up': return <Bell className="h-4 w-4" />
      case 'research': return <Building className="h-4 w-4" />
      default: return <Calendar className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold flex items-center">
            <Calendar className="mr-2 h-8 w-8" />
            Job Search Schedule
          </h1>
          <p className="text-muted-foreground">
            Manage your interviews, deadlines, and job search tasks
          </p>
        </div>
      </div>

      {/* Today&apos;s Overview */}
      {todayEvents.length > 0 && (
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-800">Today&apos;s Schedule</CardTitle>
            <CardDescription className="text-blue-600">
              {todayEvents.length} event{todayEvents.length !== 1 ? 's' : ''} scheduled for today
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {todayEvents.map((event) => (
                <div key={event.id} className="flex items-center space-x-3 p-2 bg-white rounded border">
                  {getEventIcon(event.type)}
                  <div className="flex-1">
                    <div className="font-medium">{event.title}</div>
                    <div className="text-sm text-muted-foreground">
                      {event.company} • {event.time}
                      {event.duration && ` (${event.duration}min)`}
                    </div>
                  </div>
                  <Badge className={priorityColors[event.priority]}>
                    {event.priority}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Tabs defaultValue="calendar" className="space-y-4">
        <TabsList>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="overview">Weekly Overview</TabsTrigger>
        </TabsList>

        <TabsContent value="calendar" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Schedule & Events</h2>
            <Dialog open={showEventDialog} onOpenChange={setShowEventDialog}>
              <DialogTrigger asChild>
                <Button onClick={() => setEditingEvent(null)}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Event
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>
                    {editingEvent ? "Edit Event" : "Add New Event"}
                  </DialogTitle>
                  <DialogDescription>
                    {editingEvent 
                      ? "Update event details and scheduling information"
                      : "Schedule a new event for your job search calendar"
                    }
                  </DialogDescription>
                </DialogHeader>
                
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Title*</Label>
                      <Input
                        id="title"
                        value={eventForm.title}
                        onChange={(e) => setEventForm(prev => ({ ...prev, title: e.target.value }))}
                        placeholder="e.g. Technical Interview"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={eventForm.company}
                        onChange={(e) => setEventForm(prev => ({ ...prev, company: e.target.value }))}
                        placeholder="e.g. TechCorp"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="type">Event Type</Label>
                    <Select value={eventForm.type} onValueChange={(value) => setEventForm(prev => ({ ...prev, type: value as ScheduleEvent['type'] }))}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(eventTypes).map(([key, label]) => (
                          <SelectItem key={key} value={key}>{label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Date*</Label>
                      <Input
                        id="date"
                        type="date"
                        value={eventForm.date}
                        onChange={(e) => setEventForm(prev => ({ ...prev, date: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Time*</Label>
                      <Input
                        id="time"
                        type="time"
                        value={eventForm.time}
                        onChange={(e) => setEventForm(prev => ({ ...prev, time: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="duration">Duration (min)</Label>
                      <Input
                        id="duration"
                        type="number"
                        value={eventForm.duration}
                        onChange={(e) => setEventForm(prev => ({ ...prev, duration: e.target.value }))}
                        placeholder="60"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={eventForm.location}
                        onChange={(e) => setEventForm(prev => ({ ...prev, location: e.target.value }))}
                        placeholder="e.g. Video Call - Zoom, Office Address"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="priority">Priority</Label>
                      <Select value={eventForm.priority} onValueChange={(value) => setEventForm(prev => ({ ...prev, priority: value as ScheduleEvent['priority'] }))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contactPerson">Contact Person</Label>
                    <Input
                      id="contactPerson"
                      value={eventForm.contactPerson}
                      onChange={(e) => setEventForm(prev => ({ ...prev, contactPerson: e.target.value }))}
                      placeholder="e.g. Sarah Johnson - Engineering Manager"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea
                      id="notes"
                      value={eventForm.notes}
                      onChange={(e) => setEventForm(prev => ({ ...prev, notes: e.target.value }))}
                      placeholder="Additional details about this event..."
                    />
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button onClick={handleAddEvent} disabled={!eventForm.title || !eventForm.date || !eventForm.time}>
                    {editingEvent ? "Update Event" : "Add Event"}
                  </Button>
                  <Button variant="outline" onClick={() => {
                    setShowEventDialog(false)
                    setEditingEvent(null)
                    resetEventForm()
                  }}>
                    Cancel
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>
                  Your next {upcomingEvents.length} scheduled events
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="border rounded-lg p-3">
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            {getEventIcon(event.type)}
                            <span className="font-medium">{event.title}</span>
                            <Badge variant="outline" className="text-xs">
                              {eventTypes[event.type]}
                            </Badge>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {event.company && `${event.company} • `}
                            {new Date(event.date).toLocaleDateString()} at {event.time}
                            {event.duration && ` (${event.duration}min)`}
                          </div>
                          {event.location && (
                            <div className="text-sm text-muted-foreground flex items-center">
                              <MapPin className="mr-1 h-3 w-3" />
                              {event.location}
                            </div>
                          )}
                          {event.notes && (
                            <p className="text-sm text-muted-foreground">{event.notes}</p>
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={priorityColors[event.priority]}>
                            {event.priority}
                          </Badge>
                          <div className="flex space-x-1">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleEditEvent(event)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDeleteEvent(event.id)}
                              className="text-destructive hover:text-destructive"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {upcomingEvents.length === 0 && (
                    <div className="text-center py-6">
                      <Calendar className="mx-auto h-8 w-8 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground mt-2">
                        No upcoming events scheduled
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* All Events Table */}
            <Card>
              <CardHeader>
                <CardTitle>All Events</CardTitle>
                <CardDescription>
                  Complete calendar of scheduled events
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Event</TableHead>
                      <TableHead>Date/Time</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {events.slice(0, 5).map((event) => (
                      <TableRow key={event.id}>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="font-medium flex items-center">
                              {getEventIcon(event.type)}
                              <span className="ml-2">{event.title}</span>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {event.company}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            {new Date(event.date).toLocaleDateString()}
                            <br />
                            {event.time}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={statusColors[event.status]}>
                            {event.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-1">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleEditEvent(event)}
                            >
                              <Edit className="h-3 w-3" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDeleteEvent(event.id)}
                              className="text-destructive hover:text-destructive"
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="tasks" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Job Search Tasks</h2>
            <Dialog open={showTaskDialog} onOpenChange={setShowTaskDialog}>
              <DialogTrigger asChild>
                <Button onClick={() => setEditingTask(null)}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Task
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    {editingTask ? "Edit Task" : "Add New Task"}
                  </DialogTitle>
                  <DialogDescription>
                    {editingTask 
                      ? "Update task details and requirements"
                      : "Create a new task for your job search activities"
                    }
                  </DialogDescription>
                </DialogHeader>
                
                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="taskTitle">Title*</Label>
                    <Input
                      id="taskTitle"
                      value={taskForm.title}
                      onChange={(e) => setTaskForm(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="e.g. Research company culture"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={taskForm.description}
                      onChange={(e) => setTaskForm(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="Detailed description of what needs to be done..."
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select value={taskForm.category} onValueChange={(value) => setTaskForm(prev => ({ ...prev, category: value as Task['category'] }))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(taskCategories).map(([key, label]) => (
                            <SelectItem key={key} value={key}>{label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="taskPriority">Priority</Label>
                      <Select value={taskForm.priority} onValueChange={(value) => setTaskForm(prev => ({ ...prev, priority: value as Task['priority'] }))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="dueDate">Due Date</Label>
                      <Input
                        id="dueDate"
                        type="date"
                        value={taskForm.dueDate}
                        onChange={(e) => setTaskForm(prev => ({ ...prev, dueDate: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="estimatedTime">Est. Time (minutes)</Label>
                      <Input
                        id="estimatedTime"
                        type="number"
                        value={taskForm.estimatedTime}
                        onChange={(e) => setTaskForm(prev => ({ ...prev, estimatedTime: e.target.value }))}
                        placeholder="60"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button onClick={handleAddTask} disabled={!taskForm.title}>
                    {editingTask ? "Update Task" : "Add Task"}
                  </Button>
                  <Button variant="outline" onClick={() => {
                    setShowTaskDialog(false)
                    setEditingTask(null)
                    resetTaskForm()
                  }}>
                    Cancel
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {/* Upcoming Tasks */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Tasks</CardTitle>
                <CardDescription>
                  Tasks due soon or high priority items
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingTasks.map((task) => (
                    <div key={task.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleTaskComplete(task.id)}
                        className={task.completed ? 'text-green-600' : 'text-muted-foreground'}
                      >
                        <CheckCircle className="h-4 w-4" />
                      </Button>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className={`font-medium ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                            {task.title}
                          </span>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline" className="text-xs">
                              {taskCategories[task.category]}
                            </Badge>
                            <Badge className={priorityColors[task.priority]}>
                              {task.priority}
                            </Badge>
                          </div>
                        </div>
                        {task.description && (
                          <p className={`text-sm text-muted-foreground ${task.completed ? 'line-through' : ''}`}>
                            {task.description}
                          </p>
                        )}
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          {task.dueDate && (
                            <span className="flex items-center">
                              <Clock className="mr-1 h-3 w-3" />
                              Due {new Date(task.dueDate).toLocaleDateString()}
                            </span>
                          )}
                          {task.estimatedTime && (
                            <span className="flex items-center">
                              <Target className="mr-1 h-3 w-3" />
                              {task.estimatedTime}min
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex space-x-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleEditTask(task)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteTask(task.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                  
                  {upcomingTasks.length === 0 && (
                    <div className="text-center py-6">
                      <CheckCircle className="mx-auto h-8 w-8 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground mt-2">
                        No upcoming tasks
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Task Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Task Summary</CardTitle>
                <CardDescription>
                  Overview of your task completion
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">
                        {tasks.filter(t => t.completed).length}
                      </div>
                      <div className="text-sm text-muted-foreground">Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        {tasks.filter(t => !t.completed).length}
                      </div>
                      <div className="text-sm text-muted-foreground">Pending</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">Tasks by Category</h4>
                    {Object.entries(taskCategories).map(([key, label]) => {
                      const categoryTasks = tasks.filter(t => t.category === key)
                      const completedCount = categoryTasks.filter(t => t.completed).length
                      
                      return categoryTasks.length > 0 ? (
                        <div key={key} className="flex justify-between items-center">
                          <span className="text-sm">{label}</span>
                          <div className="text-sm text-muted-foreground">
                            {completedCount}/{categoryTasks.length}
                          </div>
                        </div>
                      ) : null
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="overview" className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold">Weekly Overview</h2>
            <p className="text-muted-foreground">
              Your job search activity summary for this week
            </p>
          </div>
          
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  This Week
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Events Scheduled</span>
                    <span className="font-medium">{events.filter(e => e.status === 'scheduled').length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tasks Due</span>
                    <span className="font-medium">{tasks.filter(t => !t.completed && t.dueDate).length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>High Priority Items</span>
                    <span className="font-medium">
                      {[...events, ...tasks].filter(item => 
                        'priority' in item && item.priority === 'high' && 
                        (!('completed' in item) || !item.completed)
                      ).length}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="mr-2 h-5 w-5" />
                  Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Task Completion Rate</span>
                    <span className="font-medium">
                      {tasks.length > 0 ? Math.round((tasks.filter(t => t.completed).length / tasks.length) * 100) : 0}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Weekly Target</span>
                    <span className="font-medium">{displayData.weeklyTarget} applications</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Days Until Goal</span>
                    <span className="font-medium">{displayData.daysUntilTarget}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertCircle className="mr-2 h-5 w-5" />
                  Attention Needed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Overdue Tasks</span>
                    <span className="font-medium text-red-600">
                      {tasks.filter(t => !t.completed && t.dueDate && new Date(t.dueDate) < new Date()).length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>High Priority</span>
                    <span className="font-medium text-orange-600">
                      {tasks.filter(t => !t.completed && t.priority === 'high').length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Events Today</span>
                    <span className="font-medium text-blue-600">{todayEvents.length}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}