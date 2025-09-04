"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Plus, Calendar as CalendarIcon, Clock, AlertTriangle, CheckCircle2, User, Flag, Filter } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

const tasks = [
  {
    id: 1,
    title: "Send save the dates",
    description: "Design and mail save the date cards to all guests",
    category: "Invitations",
    priority: "High",
    status: "Completed",
    dueDate: new Date("2024-01-15"),
    assignedTo: "Sarah",
    estimatedTime: "2 weeks",
    dependencies: ["Guest list finalization"],
    completed: true
  },
  {
    id: 2,
    title: "Book wedding photographer",
    description: "Research and book professional wedding photographer",
    category: "Vendors",
    priority: "High",
    status: "Completed",
    dueDate: new Date("2024-01-30"),
    assignedTo: "Michael",
    estimatedTime: "1 week",
    dependencies: [],
    completed: true
  },
  {
    id: 3,
    title: "Final headcount to caterer",
    description: "Provide final guest count to catering team",
    category: "Catering",
    priority: "High",
    status: "Overdue",
    dueDate: new Date("2024-05-10"),
    assignedTo: "Sarah",
    estimatedTime: "1 day",
    dependencies: ["RSVP deadline"],
    completed: false
  },
  {
    id: 4,
    title: "Menu tasting with caterer",
    description: "Attend scheduled menu tasting and make final selections",
    category: "Catering",
    priority: "Medium",
    status: "In Progress",
    dueDate: new Date("2024-05-20"),
    assignedTo: "Both",
    estimatedTime: "Half day",
    dependencies: ["Final headcount"],
    completed: false
  },
  {
    id: 5,
    title: "Final dress fitting",
    description: "Final alterations and fitting for wedding dress",
    category: "Attire",
    priority: "High",
    status: "Scheduled",
    dueDate: new Date("2024-05-25"),
    assignedTo: "Sarah",
    estimatedTime: "2 hours",
    dependencies: [],
    completed: false
  },
  {
    id: 6,
    title: "Wedding rings sizing",
    description: "Final fitting and pickup of wedding rings",
    category: "Jewelry",
    priority: "Medium",
    status: "Not Started",
    dueDate: new Date("2024-06-01"),
    assignedTo: "Michael",
    estimatedTime: "1 hour",
    dependencies: [],
    completed: false
  },
  {
    id: 7,
    title: "Marriage license application",
    description: "Apply for marriage license at city hall",
    category: "Legal",
    priority: "High",
    status: "Scheduled",
    dueDate: new Date("2024-05-30"),
    assignedTo: "Both",
    estimatedTime: "2 hours",
    dependencies: [],
    completed: false
  },
  {
    id: 8,
    title: "Create wedding playlist",
    description: "Compile music playlist for ceremony and reception",
    category: "Music",
    priority: "Low",
    status: "In Progress",
    dueDate: new Date("2024-06-10"),
    assignedTo: "Michael",
    estimatedTime: "3 days",
    dependencies: [],
    completed: false
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "Completed":
      return "bg-primary/10 text-primary border-primary/20"
    case "In Progress":
      return "bg-accent/30 text-accent-foreground border-accent/50"
    case "Scheduled":
      return "bg-secondary/30 text-secondary-foreground border-secondary/50"
    case "Overdue":
      return "bg-destructive/10 text-destructive border-destructive/20"
    case "Not Started":
      return "bg-muted text-muted-foreground border-border"
    default:
      return "bg-muted text-muted-foreground border-border"
  }
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "High":
      return "text-destructive"
    case "Medium":
      return "text-accent-foreground"
    case "Low":
      return "text-primary"
    default:
      return "text-muted-foreground"
  }
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case "Completed":
      return <CheckCircle2 className="h-4 w-4 text-primary" />
    case "Overdue":
      return <AlertTriangle className="h-4 w-4 text-destructive" />
    case "In Progress":
      return <Clock className="h-4 w-4 text-accent-foreground" />
    default:
      return <Clock className="h-4 w-4 text-muted-foreground" />
  }
}

const isOverdue = (dueDate: Date) => {
  return new Date() > dueDate
}

const getDaysUntilDue = (dueDate: Date) => {
  const today = new Date()
  const diffTime = dueDate.getTime() - today.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays
}

export function TaskManagement() {
  const [isAddTaskDialogOpen, setIsAddTaskDialogOpen] = useState(false)
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [selectedFilter, setSelectedFilter] = useState("all")

  const taskStats = {
    total: tasks.length,
    completed: tasks.filter(t => t.completed).length,
    inProgress: tasks.filter(t => t.status === "In Progress").length,
    overdue: tasks.filter(t => t.status === "Overdue").length
  }

  const filteredTasks = tasks.filter(task => {
    switch (selectedFilter) {
      case "completed":
        return task.completed
      case "pending":
        return !task.completed
      case "overdue":
        return task.status === "Overdue"
      case "high-priority":
        return task.priority === "High" && !task.completed
      default:
        return true
    }
  })

  const tasksByCategory = tasks.reduce((acc, task) => {
    if (!acc[task.category]) {
      acc[task.category] = []
    }
    acc[task.category].push(task)
    return acc
  }, {} as Record<string, typeof tasks>)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Task Management</h2>
          <p className="text-muted-foreground">Track your wedding planning tasks and timeline</p>
        </div>
        <Dialog open={isAddTaskDialogOpen} onOpenChange={setIsAddTaskDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline">
              <Plus className="mr-2 h-4 w-4" />
              Add Task
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Add New Task</DialogTitle>
              <DialogDescription>
                Create a new wedding planning task.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div>
                <Label htmlFor="task-title">Task Title</Label>
                <Input id="task-title" placeholder="Enter task title" />
              </div>
              <div>
                <Label htmlFor="task-description">Description</Label>
                <Textarea id="task-description" rows={3} placeholder="Task description" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="task-category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vendors">Vendors</SelectItem>
                      <SelectItem value="invitations">Invitations</SelectItem>
                      <SelectItem value="catering">Catering</SelectItem>
                      <SelectItem value="attire">Attire</SelectItem>
                      <SelectItem value="venue">Venue</SelectItem>
                      <SelectItem value="legal">Legal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="task-priority">Priority</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Due Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <Label htmlFor="task-assigned">Assigned To</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Assign to" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sarah">Sarah</SelectItem>
                      <SelectItem value="michael">Michael</SelectItem>
                      <SelectItem value="both">Both</SelectItem>
                      <SelectItem value="planner">Wedding Planner</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={() => setIsAddTaskDialogOpen(false)}>
                Add Task
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tasks</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{taskStats.total}</div>
            <p className="text-xs text-muted-foreground">
              Wedding planning tasks
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{taskStats.completed}</div>
            <p className="text-xs text-muted-foreground">
              {((taskStats.completed / taskStats.total) * 100).toFixed(0)}% complete
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
            <Clock className="h-4 w-4 text-accent-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent-foreground">{taskStats.inProgress}</div>
            <p className="text-xs text-muted-foreground">
              Currently active
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overdue</CardTitle>
            <AlertTriangle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">{taskStats.overdue}</div>
            <p className="text-xs text-muted-foreground">
              Need attention
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="list" className="space-y-4">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="list">Task List</TabsTrigger>
            <TabsTrigger value="calendar">Calendar View</TabsTrigger>
            <TabsTrigger value="categories">By Category</TabsTrigger>
          </TabsList>
          
          <Select value={selectedFilter} onValueChange={setSelectedFilter}>
            <SelectTrigger className="w-40">
              <Filter className="mr-2 h-4 w-4" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Tasks</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="overdue">Overdue</SelectItem>
              <SelectItem value="high-priority">High Priority</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <TabsContent value="list" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Tasks Overview</CardTitle>
              <CardDescription>All your wedding planning tasks in one place</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[600px]">
                <div className="space-y-3">
                  {filteredTasks.map((task) => (
                    <div key={task.id} className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <Checkbox 
                        checked={task.completed}
                        className="mt-1"
                        disabled={task.completed}
                      />
                      <div className="flex-1 space-y-2">
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <h4 className={`font-medium ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                              {task.title}
                            </h4>
                            <p className="text-sm text-muted-foreground">{task.description}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            {getStatusIcon(task.status)}
                            <Badge className={getStatusColor(task.status)} variant="outline">
                              {task.status}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <CalendarIcon className="h-3 w-3" />
                            <span>{format(task.dueDate, "MMM dd, yyyy")}</span>
                            {!task.completed && (
                              <span className={`ml-1 ${isOverdue(task.dueDate) ? 'text-destructive' : getDaysUntilDue(task.dueDate) <= 7 ? 'text-accent-foreground' : ''}`}>
                                ({getDaysUntilDue(task.dueDate)} days)
                              </span>
                            )}
                          </div>
                          <div className="flex items-center space-x-1">
                            <User className="h-3 w-3" />
                            <span>{task.assignedTo}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Flag className={`h-3 w-3 ${getPriorityColor(task.priority)}`} />
                            <span className={getPriorityColor(task.priority)}>{task.priority}</span>
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {task.category}
                          </Badge>
                        </div>

                        {task.dependencies.length > 0 && (
                          <div className="text-xs text-muted-foreground">
                            <span className="font-medium">Depends on:</span> {task.dependencies.join(", ")}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calendar" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Task Calendar</CardTitle>
                <CardDescription>View tasks by due date</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border w-full"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  Tasks for {date ? format(date, "MMM dd") : "Selected Date"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px]">
                  <div className="space-y-3">
                    {date && tasks
                      .filter(task => format(task.dueDate, "yyyy-MM-dd") === format(date, "yyyy-MM-dd"))
                      .map((task) => (
                        <div key={task.id} className="p-3 border rounded-lg">
                          <div className="flex items-center space-x-2">
                            <Checkbox checked={task.completed} disabled />
                            <div className="flex-1">
                              <h5 className="font-medium text-sm">{task.title}</h5>
                              <p className="text-xs text-muted-foreground">{task.assignedTo}</p>
                            </div>
                            <Badge variant="outline" className={`text-xs ${getStatusColor(task.status)}`}>
                              {task.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    {date && tasks.filter(task => format(task.dueDate, "yyyy-MM-dd") === format(date, "yyyy-MM-dd")).length === 0 && (
                      <p className="text-sm text-muted-foreground text-center py-4">
                        No tasks due on this date
                      </p>
                    )}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="categories" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Tasks by Category</CardTitle>
              <CardDescription>Organized view of tasks grouped by category</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="multiple" className="w-full">
                {Object.entries(tasksByCategory).map(([category, categoryTasks]) => {
                  const completedInCategory = categoryTasks.filter(t => t.completed).length
                  return (
                    <AccordionItem key={category} value={category}>
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex items-center justify-between w-full mr-4">
                          <span className="font-medium">{category}</span>
                          <div className="flex items-center space-x-2">
                            <Badge variant="secondary" className="text-xs">
                              {completedInCategory}/{categoryTasks.length}
                            </Badge>
                            <div className="w-20 h-2 bg-muted rounded-full">
                              <div 
                                className="h-full bg-primary rounded-full transition-all"
                                style={{ width: `${(completedInCategory / categoryTasks.length) * 100}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2 pt-2">
                          {categoryTasks.map((task) => (
                            <div key={task.id} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                              <Checkbox checked={task.completed} disabled />
                              <div className="flex-1">
                                <h5 className={`font-medium text-sm ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                                  {task.title}
                                </h5>
                                <div className="flex items-center space-x-4 text-xs text-muted-foreground mt-1">
                                  <span>Due: {format(task.dueDate, "MMM dd")}</span>
                                  <span>Assigned: {task.assignedTo}</span>
                                  <span className={getPriorityColor(task.priority)}>
                                    {task.priority} Priority
                                  </span>
                                </div>
                              </div>
                              <Badge variant="outline" className={`text-xs ${getStatusColor(task.status)}`}>
                                {task.status}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  )
                })}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}