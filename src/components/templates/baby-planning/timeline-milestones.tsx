"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { format, addWeeks, differenceInWeeks } from "date-fns"
import { cn } from "@/lib/utils"
import {
  Calendar as CalendarIcon,
  Clock,
  CheckCircle2,
  Circle,
  AlertCircle,
  Baby,
  Heart,
  Star,
  Plus,
  Trash2
} from "lucide-react"

interface Milestone {
  id: string
  week: number
  title: string
  description: string
  type: "pregnancy" | "preparation" | "medical"
  completed: boolean
  dueDate?: Date
  notes?: string
}

interface Task {
  id: string
  title: string
  description: string
  dueDate: Date
  priority: "high" | "medium" | "low"
  category: string
  completed: boolean
  notes?: string
}

const milestoneSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  week: z.number().min(1).max(42),
  type: z.enum(["pregnancy", "preparation", "medical"]),
  dueDate: z.date().optional(),
  notes: z.string().optional(),
})

const taskSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  dueDate: z.date(),
  priority: z.enum(["high", "medium", "low"]),
  category: z.string().min(1, "Category is required"),
  notes: z.string().optional(),
})

export function TimelineMilestones() {
  const [milestones, setMilestones] = useState<Milestone[]>([
    {
      id: "1",
      week: 4,
      title: "First Doctor Visit",
      description: "Confirm pregnancy and establish prenatal care",
      type: "medical",
      completed: true,
      dueDate: new Date("2024-02-15")
    },
    {
      id: "2",
      week: 8,
      title: "Baby&apos;s Heart Starts Beating",
      description: "Baby&apos;s heart begins to beat and can be detected",
      type: "pregnancy",
      completed: true
    },
    {
      id: "3",
      week: 12,
      title: "First Trimester Screening",
      description: "Nuchal translucency scan and blood work",
      type: "medical",
      completed: false,
      dueDate: new Date("2024-03-15")
    },
    {
      id: "4",
      week: 16,
      title: "Announce Pregnancy",
      description: "Share the exciting news with family and friends",
      type: "preparation",
      completed: false
    },
    {
      id: "5",
      week: 20,
      title: "Anatomy Scan",
      description: "Detailed ultrasound to check baby&apos;s development",
      type: "medical",
      completed: false,
      dueDate: new Date("2024-04-10")
    },
    {
      id: "6",
      week: 24,
      title: "Register for Baby Shower",
      description: "Set up baby registry and plan shower",
      type: "preparation",
      completed: false
    },
    {
      id: "7",
      week: 28,
      title: "Third Trimester Begins",
      description: "Baby&apos;s survival rate increases significantly",
      type: "pregnancy",
      completed: false
    },
    {
      id: "8",
      week: 32,
      title: "Hospital Bag Preparation",
      description: "Pack bags for the hospital stay",
      type: "preparation",
      completed: false
    },
    {
      id: "9",
      week: 36,
      title: "Baby Shower",
      description: "Celebrate with family and friends",
      type: "preparation",
      completed: false
    },
    {
      id: "10",
      week: 40,
      title: "Due Date",
      description: "Baby is full-term and ready to be born",
      type: "pregnancy",
      completed: false
    }
  ])

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Research Pediatricians",
      description: "Find and interview potential doctors for baby",
      dueDate: new Date("2024-03-01"),
      priority: "high",
      category: "Healthcare",
      completed: false
    },
    {
      id: "2",
      title: "Set Up Nursery",
      description: "Paint walls, assemble furniture, organize baby items",
      dueDate: new Date("2024-05-01"),
      priority: "medium",
      category: "Preparation",
      completed: false
    },
    {
      id: "3",
      title: "Install Car Seat",
      description: "Properly install and inspect car seat safety",
      dueDate: new Date("2024-06-01"),
      priority: "high",
      category: "Safety",
      completed: false
    },
    {
      id: "4",
      title: "Plan Maternity Leave",
      description: "Submit paperwork and plan work transition",
      dueDate: new Date("2024-04-15"),
      priority: "high",
      category: "Work",
      completed: false
    },
    {
      id: "5",
      title: "Take Hospital Tour",
      description: "Visit labor and delivery ward, learn about procedures",
      dueDate: new Date("2024-05-15"),
      priority: "medium",
      category: "Healthcare",
      completed: false
    }
  ])

  const [isAddingMilestone, setIsAddingMilestone] = useState(false)
  const [isAddingTask, setIsAddingTask] = useState(false)

  const milestoneForm = useForm({
    resolver: zodResolver(milestoneSchema),
    defaultValues: {
      title: "",
      description: "",
      week: 20,
      type: "preparation" as const,
      dueDate: undefined,
      notes: "",
    },
  })

  const taskForm = useForm({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      title: "",
      description: "",
      dueDate: new Date(),
      priority: "medium" as const,
      category: "",
      notes: "",
    },
  })

  const categories = [
    "Healthcare",
    "Preparation",
    "Safety",
    "Work",
    "Finance",
    "Education",
    "Registry",
    "Other"
  ]

  const onSubmitMilestone = (data: z.infer<typeof milestoneSchema>) => {
    const newMilestone: Milestone = {
      id: Date.now().toString(),
      ...data,
      completed: false,
    }
    setMilestones([...milestones, newMilestone].sort((a, b) => a.week - b.week))
    setIsAddingMilestone(false)
    milestoneForm.reset()
  }

  const onSubmitTask = (data: z.infer<typeof taskSchema>) => {
    const newTask: Task = {
      id: Date.now().toString(),
      ...data,
      completed: false,
    }
    setTasks([...tasks, newTask].sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime()))
    setIsAddingTask(false)
    taskForm.reset()
  }

  const toggleMilestoneComplete = (id: string) => {
    setMilestones(milestones.map(milestone =>
      milestone.id === id ? { ...milestone, completed: !milestone.completed } : milestone
    ))
  }

  const toggleTaskComplete = (id: string) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteMilestone = (id: string) => {
    setMilestones(milestones.filter(m => m.id !== id))
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(t => t.id !== id))
  }

  // Calculate current pregnancy week (assuming conception date)
  const conceptionDate = new Date("2024-01-15") // Example date
  const currentWeek = Math.max(1, differenceInWeeks(new Date(), conceptionDate))

  // Statistics
  const completedMilestones = milestones.filter(m => m.completed).length
  const totalMilestones = milestones.length
  const completedTasks = tasks.filter(t => t.completed).length
  const totalTasks = tasks.length
  const upcomingTasks = tasks.filter(t => !t.completed && t.dueDate > new Date()).length
  const overdueTasks = tasks.filter(t => !t.completed && t.dueDate < new Date()).length

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Timeline & Milestones</h1>
        <p className="text-muted-foreground">Track your pregnancy journey and preparation tasks</p>
      </div>

      {/* Progress Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Week</CardTitle>
            <Baby className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentWeek}</div>
            <p className="text-xs text-muted-foreground">
              weeks pregnant
            </p>
            <Progress value={(currentWeek / 40) * 100} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Milestones</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedMilestones}</div>
            <p className="text-xs text-muted-foreground">
              of {totalMilestones} completed
            </p>
            <Progress value={(completedMilestones / Math.max(totalMilestones, 1)) * 100} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tasks Done</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedTasks}</div>
            <p className="text-xs text-muted-foreground">
              of {totalTasks} tasks completed
            </p>
            <Progress value={(completedTasks / Math.max(totalTasks, 1)) * 100} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming</CardTitle>
            {overdueTasks > 0 ? (
              <AlertCircle className="h-4 w-4 text-destructive" />
            ) : (
              <Clock className="h-4 w-4 text-muted-foreground" />
            )}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{upcomingTasks}</div>
            <p className="text-xs text-muted-foreground">
              {overdueTasks > 0 ? `${overdueTasks} overdue` : "tasks pending"}
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="timeline" className="space-y-4">
        <TabsList>
          <TabsTrigger value="timeline">Pregnancy Timeline</TabsTrigger>
          <TabsTrigger value="tasks">Preparation Tasks</TabsTrigger>
        </TabsList>

        <TabsContent value="timeline" className="space-y-4">
          {/* Pregnancy Timeline */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Pregnancy Milestones</CardTitle>
                <CardDescription>Track important pregnancy milestones by week</CardDescription>
              </div>
              <Dialog open={isAddingMilestone} onOpenChange={setIsAddingMilestone}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Milestone
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add Custom Milestone</DialogTitle>
                  </DialogHeader>
                  <Form {...milestoneForm}>
                    <form onSubmit={milestoneForm.handleSubmit(onSubmitMilestone)} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={milestoneForm.control}
                          name="week"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Week</FormLabel>
                              <FormControl>
                                <Input
                                  type="number"
                                  min="1"
                                  max="42"
                                  {...field}
                                  onChange={(e) => field.onChange(parseInt(e.target.value) || 20)}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={milestoneForm.control}
                          name="type"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Type</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="pregnancy">Pregnancy</SelectItem>
                                  <SelectItem value="medical">Medical</SelectItem>
                                  <SelectItem value="preparation">Preparation</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={milestoneForm.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                              <Input placeholder="Milestone title" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={milestoneForm.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Describe this milestone..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={milestoneForm.control}
                        name="dueDate"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel>Due Date (optional)</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant={"outline"}
                                    className={cn(
                                      "pl-3 text-left font-normal",
                                      !field.value && "text-muted-foreground"
                                    )}
                                  >
                                    {field.value ? (
                                      format(field.value, "PPP")
                                    ) : (
                                      <span>Pick date</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="flex justify-end space-x-2">
                        <Button type="button" variant="outline" onClick={() => setIsAddingMilestone(false)}>
                          Cancel
                        </Button>
                        <Button type="submit">Add Milestone</Button>
                      </div>
                    </form>
                  </Form>
                </DialogContent>
              </Dialog>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={milestone.id} className="flex items-start space-x-4 p-4 border rounded-lg">
                    <div className="flex flex-col items-center">
                      <div className={cn(
                        "w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold",
                        milestone.week <= currentWeek 
                          ? "bg-primary text-primary-foreground border-primary" 
                          : "border-muted-foreground text-muted-foreground",
                        milestone.completed && "bg-primary border-primary"
                      )}>
                        {milestone.week}
                      </div>
                      {index < milestones.length - 1 && (
                        <div className="w-px h-8 bg-border mt-2" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold">{milestone.title}</h3>
                        <Badge 
                          variant={
                            milestone.type === "medical" ? "destructive" :
                            milestone.type === "pregnancy" ? "default" : "secondary"
                          }
                        >
                          {milestone.type}
                        </Badge>
                        {milestone.completed && (
                          <Badge variant="outline" className="text-primary border-primary">
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                            Completed
                          </Badge>
                        )}
                        {milestone.week <= currentWeek && !milestone.completed && (
                          <Badge variant="outline" className="text-secondary-foreground border-secondary">
                            Current
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground mb-2">{milestone.description}</p>
                      {milestone.dueDate && (
                        <p className="text-sm text-muted-foreground">
                          Due: {format(milestone.dueDate, "MMM d, yyyy")}
                        </p>
                      )}
                      <div className="flex items-center space-x-2 mt-3">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => toggleMilestoneComplete(milestone.id)}
                        >
                          {milestone.completed ? (
                            <>
                              <Circle className="h-4 w-4 mr-1" />
                              Mark Incomplete
                            </>
                          ) : (
                            <>
                              <CheckCircle2 className="h-4 w-4 mr-1" />
                              Mark Complete
                            </>
                          )}
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => deleteMilestone(milestone.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tasks" className="space-y-4">
          {/* Tasks Section */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Preparation Tasks</CardTitle>
                <CardDescription>Organize tasks to prepare for baby&apos;s arrival</CardDescription>
              </div>
              <Dialog open={isAddingTask} onOpenChange={setIsAddingTask}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Task
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Task</DialogTitle>
                  </DialogHeader>
                  <Form {...taskForm}>
                    <form onSubmit={taskForm.handleSubmit(onSubmitTask)} className="space-y-4">
                      <FormField
                        control={taskForm.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Task Title</FormLabel>
                            <FormControl>
                              <Input placeholder="What needs to be done?" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={taskForm.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Task details..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="grid grid-cols-3 gap-4">
                        <FormField
                          control={taskForm.control}
                          name="dueDate"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel>Due Date</FormLabel>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant={"outline"}
                                      className={cn(
                                        "pl-3 text-left font-normal",
                                        !field.value && "text-muted-foreground"
                                      )}
                                    >
                                      {field.value ? (
                                        format(field.value, "MMM d")
                                      ) : (
                                        <span>Pick date</span>
                                      )}
                                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={taskForm.control}
                          name="priority"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Priority</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Priority" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="high">High</SelectItem>
                                  <SelectItem value="medium">Medium</SelectItem>
                                  <SelectItem value="low">Low</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={taskForm.control}
                          name="category"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Category</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Category" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {categories.map((category) => (
                                    <SelectItem key={category} value={category}>
                                      {category}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="flex justify-end space-x-2">
                        <Button type="button" variant="outline" onClick={() => setIsAddingTask(false)}>
                          Cancel
                        </Button>
                        <Button type="submit">Add Task</Button>
                      </div>
                    </form>
                  </Form>
                </DialogContent>
              </Dialog>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tasks.map((task) => {
                  const isOverdue = !task.completed && task.dueDate < new Date()
                  const isDueSoon = !task.completed && task.dueDate <= addWeeks(new Date(), 1)

                  return (
                    <div 
                      key={task.id} 
                      className={cn(
                        "flex items-start space-x-3 p-4 border rounded-lg",
                        isOverdue && "border-destructive/50 bg-destructive/5",
                        isDueSoon && !isOverdue && "border-secondary/50 bg-secondary/10"
                      )}
                    >
                      <Checkbox
                        checked={task.completed}
                        onCheckedChange={() => toggleTaskComplete(task.id)}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className={cn("font-semibold", task.completed && "line-through text-muted-foreground")}>
                            {task.title}
                          </h3>
                          <Badge 
                            variant={
                              task.priority === "high" ? "destructive" :
                              task.priority === "medium" ? "default" : "secondary"
                            }
                          >
                            {task.priority}
                          </Badge>
                          <Badge variant="outline">{task.category}</Badge>
                          {isOverdue && (
                            <Badge variant="destructive">Overdue</Badge>
                          )}
                          {isDueSoon && !isOverdue && (
                            <Badge className="bg-secondary">Due Soon</Badge>
                          )}
                        </div>
                        <p className={cn("text-muted-foreground mb-2", task.completed && "line-through")}>
                          {task.description}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Due: {format(task.dueDate, "MMM d, yyyy")}
                        </p>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => deleteTask(task.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}