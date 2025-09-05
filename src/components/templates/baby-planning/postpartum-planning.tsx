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
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import {
  CalendarIcon,
  Heart,
  Users,
  BabyIcon,
  Home,
  Phone,
  Plus,
  Trash2,
  CheckCircle2,
  Clock,
  AlertCircle
} from "lucide-react"

interface RecoveryPlan {
  id: string
  category: string
  task: string
  timeframe: string
  priority: "high" | "medium" | "low"
  completed: boolean
  notes?: string
}

interface CaregiverContact {
  id: string
  name: string
  relationship: string
  phone: string
  email?: string
  availability: string
  services: string[]
  notes?: string
}

interface NewbornCareItem {
  id: string
  category: string
  task: string
  frequency: string
  completed: boolean
  lastDone?: Date
  notes?: string
}

interface SupportResource {
  id: string
  name: string
  type: "class" | "group" | "service" | "reading"
  description: string
  contact?: string
  cost?: number
  scheduled?: Date
  completed: boolean
}

const recoveryPlanSchema = z.object({
  category: z.string().min(1, "Category is required"),
  task: z.string().min(1, "Task is required"),
  timeframe: z.string().min(1, "Timeframe is required"),
  priority: z.enum(["high", "medium", "low"]),
  notes: z.string().optional(),
})

const caregiverSchema = z.object({
  name: z.string().min(1, "Name is required"),
  relationship: z.string().min(1, "Relationship is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.string().optional(),
  availability: z.string().min(1, "Availability is required"),
  services: z.array(z.string()).min(1, "Select at least one service"),
  notes: z.string().optional(),
})

const newbornCareSchema = z.object({
  category: z.string().min(1, "Category is required"),
  task: z.string().min(1, "Task is required"),
  frequency: z.string().min(1, "Frequency is required"),
  notes: z.string().optional(),
})

const supportResourceSchema = z.object({
  name: z.string().min(1, "Name is required"),
  type: z.enum(["class", "group", "service", "reading"]),
  description: z.string().min(1, "Description is required"),
  contact: z.string().optional(),
  cost: z.number().optional(),
  scheduled: z.date().optional(),
})

export function PostpartumPlanning() {
  const [recoveryPlan, setRecoveryPlan] = useState<RecoveryPlan[]>([
    {
      id: "1",
      category: "Physical Recovery",
      task: "Rest 6-8 hours per day",
      timeframe: "First 2 weeks",
      priority: "high",
      completed: false,
      notes: "Sleep when baby sleeps"
    },
    {
      id: "2",
      category: "Medical Care",
      task: "Schedule 6-week postpartum checkup",
      timeframe: "Week 6",
      priority: "high",
      completed: false
    },
    {
      id: "3",
      category: "Mental Health",
      task: "Monitor for postpartum depression signs",
      timeframe: "Ongoing",
      priority: "high",
      completed: false
    },
    {
      id: "4",
      category: "Nutrition",
      task: "Take postnatal vitamins daily",
      timeframe: "Daily",
      priority: "medium",
      completed: false
    }
  ])

  const [caregivers, setCaregivers] = useState<CaregiverContact[]>([
    {
      id: "1",
      name: "Mom (Susan)",
      relationship: "Mother",
      phone: "(555) 123-4567",
      email: "susan@email.com",
      availability: "Available weekends, can help with meals",
      services: ["Cooking", "Cleaning", "Baby Care"],
      notes: "Experienced with newborns"
    },
    {
      id: "2",
      name: "Sarah Thompson",
      relationship: "Friend/Neighbor",
      phone: "(555) 987-6543",
      availability: "Weekday mornings",
      services: ["Grocery Shopping", "Light Cleaning"],
      notes: "Lives nearby, offered to help"
    }
  ])

  const [newbornCare, setNewbornCare] = useState<NewbornCareItem[]>([
    {
      id: "1",
      category: "Feeding",
      task: "Track feeding times and amounts",
      frequency: "Every 2-3 hours",
      completed: false
    },
    {
      id: "2",
      category: "Sleep",
      task: "Log sleep patterns",
      frequency: "Daily",
      completed: false
    },
    {
      id: "3",
      category: "Health",
      task: "Check diaper count (wet/dirty)",
      frequency: "Daily",
      completed: false
    },
    {
      id: "4",
      category: "Development",
      task: "Track weight gain",
      frequency: "Weekly",
      completed: false
    }
  ])

  const [supportResources, setSupportResources] = useState<SupportResource[]>([
    {
      id: "1",
      name: "New Mom Support Group",
      type: "group",
      description: "Weekly meetings for new mothers to share experiences",
      contact: "Community Center - (555) 111-2222",
      completed: false
    },
    {
      id: "2",
      name: "Breastfeeding Class",
      type: "class",
      description: "Learn proper techniques and troubleshooting",
      contact: "Hospital Education Department",
      cost: 50,
      scheduled: new Date("2024-07-15"),
      completed: false
    },
    {
      id: "3",
      name: "Postpartum Doula Service",
      type: "service",
      description: "Professional support for postpartum recovery",
      contact: "City Doula Collective",
      cost: 200,
      completed: false
    }
  ])

  const [isAddingRecovery, setIsAddingRecovery] = useState(false)
  const [isAddingCaregiver, setIsAddingCaregiver] = useState(false)
  const [isAddingNewbornCare, setIsAddingNewbornCare] = useState(false)
  const [isAddingResource, setIsAddingResource] = useState(false)

  const recoveryForm = useForm({
    resolver: zodResolver(recoveryPlanSchema),
    defaultValues: {
      category: "",
      task: "",
      timeframe: "",
      priority: "medium" as const,
      notes: "",
    },
  })

  const caregiverForm = useForm({
    resolver: zodResolver(caregiverSchema),
    defaultValues: {
      name: "",
      relationship: "",
      phone: "",
      email: "",
      availability: "",
      services: [],
      notes: "",
    },
  })

  const newbornCareForm = useForm({
    resolver: zodResolver(newbornCareSchema),
    defaultValues: {
      category: "",
      task: "",
      frequency: "",
      notes: "",
    },
  })

  const supportResourceForm = useForm({
    resolver: zodResolver(supportResourceSchema),
    defaultValues: {
      name: "",
      type: "group" as const,
      description: "",
      contact: "",
      cost: undefined,
      scheduled: undefined,
    },
  })

  const recoveryCategories = [
    "Physical Recovery",
    "Mental Health", 
    "Medical Care",
    "Nutrition",
    "Exercise",
    "Self Care"
  ]

  const caregiverServices = [
    "Cooking",
    "Cleaning",
    "Laundry",
    "Baby Care",
    "Grocery Shopping", 
    "Pet Care",
    "Transportation"
  ]

  const newbornCategories = [
    "Feeding",
    "Sleep",
    "Health",
    "Development",
    "Safety",
    "Bonding"
  ]

  const onSubmitRecovery = (data: z.infer<typeof recoveryPlanSchema>) => {
    const newItem: RecoveryPlan = {
      id: Date.now().toString(),
      ...data,
      completed: false,
    }
    setRecoveryPlan([...recoveryPlan, newItem])
    setIsAddingRecovery(false)
    recoveryForm.reset()
  }

  const onSubmitCaregiver = (data: z.infer<typeof caregiverSchema>) => {
    const newCaregiver: CaregiverContact = {
      id: Date.now().toString(),
      ...data,
    }
    setCaregivers([...caregivers, newCaregiver])
    setIsAddingCaregiver(false)
    caregiverForm.reset()
  }

  const onSubmitNewbornCare = (data: z.infer<typeof newbornCareSchema>) => {
    const newItem: NewbornCareItem = {
      id: Date.now().toString(),
      ...data,
      completed: false,
    }
    setNewbornCare([...newbornCare, newItem])
    setIsAddingNewbornCare(false)
    newbornCareForm.reset()
  }

  const onSubmitResource = (data: z.infer<typeof supportResourceSchema>) => {
    const newResource: SupportResource = {
      id: Date.now().toString(),
      ...data,
      completed: false,
    }
    setSupportResources([...supportResources, newResource])
    setIsAddingResource(false)
    supportResourceForm.reset()
  }

  const toggleRecoveryComplete = (id: string) => {
    setRecoveryPlan(recoveryPlan.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ))
  }

  const toggleNewbornCareComplete = (id: string) => {
    setNewbornCare(newbornCare.map(item =>
      item.id === id ? { ...item, completed: !item.completed, lastDone: new Date() } : item
    ))
  }

  const toggleResourceComplete = (id: string) => {
    setSupportResources(supportResources.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ))
  }

  // Statistics
  const completedRecoveryTasks = recoveryPlan.filter(item => item.completed).length
  const totalRecoveryTasks = recoveryPlan.length
  const completedNewbornTasks = newbornCare.filter(item => item.completed).length
  const totalNewbornTasks = newbornCare.length
  const completedResources = supportResources.filter(item => item.completed).length
  const totalResources = supportResources.length

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Postpartum Planning</h1>
        <p className="text-muted-foreground">Plan for your recovery and new life with baby</p>
      </div>

      {/* Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recovery Plan</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedRecoveryTasks}</div>
            <p className="text-xs text-muted-foreground">
              of {totalRecoveryTasks} tasks completed
            </p>
            <Progress value={(completedRecoveryTasks / Math.max(totalRecoveryTasks, 1)) * 100} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Support Network</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{caregivers.length}</div>
            <p className="text-xs text-muted-foreground">
              caregivers available
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Baby Care</CardTitle>
            <BabyIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedNewbornTasks}</div>
            <p className="text-xs text-muted-foreground">
              of {totalNewbornTasks} care tasks done
            </p>
            <Progress value={(completedNewbornTasks / Math.max(totalNewbornTasks, 1)) * 100} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resources</CardTitle>
            <Home className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedResources}</div>
            <p className="text-xs text-muted-foreground">
              of {totalResources} resources accessed
            </p>
            <Progress value={(completedResources / Math.max(totalResources, 1)) * 100} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="recovery" className="space-y-4">
        <TabsList>
          <TabsTrigger value="recovery">Recovery Plan</TabsTrigger>
          <TabsTrigger value="support">Support Network</TabsTrigger>
          <TabsTrigger value="newborn">Newborn Care</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="recovery" className="space-y-4">
          {/* Recovery Plan */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Recovery Plan</CardTitle>
                <CardDescription>Track your postpartum recovery tasks</CardDescription>
              </div>
              <Dialog open={isAddingRecovery} onOpenChange={setIsAddingRecovery}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Task
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add Recovery Task</DialogTitle>
                  </DialogHeader>
                  <Form {...recoveryForm}>
                    <form onSubmit={recoveryForm.handleSubmit(onSubmitRecovery)} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={recoveryForm.control}
                          name="category"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Category</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select category" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {recoveryCategories.map((category) => (
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
                        <FormField
                          control={recoveryForm.control}
                          name="priority"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Priority</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select priority" />
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
                      </div>
                      <FormField
                        control={recoveryForm.control}
                        name="task"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Task</FormLabel>
                            <FormControl>
                              <Input placeholder="What needs to be done?" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={recoveryForm.control}
                        name="timeframe"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Timeframe</FormLabel>
                            <FormControl>
                              <Input placeholder="When should this be done?" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={recoveryForm.control}
                        name="notes"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Notes</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Additional details..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="flex justify-end space-x-2">
                        <Button type="button" variant="outline" onClick={() => setIsAddingRecovery(false)}>
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
                {recoveryPlan.map((item) => (
                  <div key={item.id} className="flex items-start space-x-3 p-4 border rounded-lg">
                    <Checkbox
                      checked={item.completed}
                      onCheckedChange={() => toggleRecoveryComplete(item.id)}
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className={cn("font-semibold", item.completed && "line-through text-muted-foreground")}>
                          {item.task}
                        </h3>
                        <Badge variant="outline">{item.category}</Badge>
                        <Badge 
                          variant={
                            item.priority === "high" ? "destructive" :
                            item.priority === "medium" ? "default" : "secondary"
                          }
                        >
                          {item.priority}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">
                        Timeframe: {item.timeframe}
                      </p>
                      {item.notes && (
                        <p className="text-sm text-muted-foreground">{item.notes}</p>
                      )}
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setRecoveryPlan(recoveryPlan.filter(r => r.id !== item.id))}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="support" className="space-y-4">
          {/* Support Network */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Support Network</CardTitle>
                <CardDescription>Organize your caregivers and support people</CardDescription>
              </div>
              <Dialog open={isAddingCaregiver} onOpenChange={setIsAddingCaregiver}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Contact
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Add Support Contact</DialogTitle>
                  </DialogHeader>
                  <Form {...caregiverForm}>
                    <form onSubmit={caregiverForm.handleSubmit(onSubmitCaregiver)} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={caregiverForm.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Full name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={caregiverForm.control}
                          name="relationship"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Relationship</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g., Mother, Friend, Doula" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={caregiverForm.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone</FormLabel>
                              <FormControl>
                                <Input placeholder="(555) 123-4567" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={caregiverForm.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email (optional)</FormLabel>
                              <FormControl>
                                <Input placeholder="email@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={caregiverForm.control}
                        name="availability"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Availability</FormLabel>
                            <FormControl>
                              <Input placeholder="When are they available to help?" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={caregiverForm.control}
                        name="services"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Services They Can Provide</FormLabel>
                            <div className="grid grid-cols-2 gap-2">
                              {caregiverServices.map((service) => (
                                <div key={service} className="flex items-center space-x-2">
                                  <Checkbox
                                    checked={field.value?.includes(service)}
                                    onCheckedChange={(checked) => {
                                      const updatedServices = checked
                                        ? [...(field.value || []), service]
                                        : (field.value || []).filter(s => s !== service)
                                      field.onChange(updatedServices)
                                    }}
                                  />
                                  <label className="text-sm">{service}</label>
                                </div>
                              ))}
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="flex justify-end space-x-2">
                        <Button type="button" variant="outline" onClick={() => setIsAddingCaregiver(false)}>
                          Cancel
                        </Button>
                        <Button type="submit">Add Contact</Button>
                      </div>
                    </form>
                  </Form>
                </DialogContent>
              </Dialog>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {caregivers.map((caregiver) => (
                  <div key={caregiver.id} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold">{caregiver.name}</h3>
                        <p className="text-sm text-muted-foreground">{caregiver.relationship}</p>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => setCaregivers(caregivers.filter(c => c.id !== caregiver.id))}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4" />
                        <span>{caregiver.phone}</span>
                      </div>
                      {caregiver.email && (
                        <div className="text-muted-foreground">
                          📧 {caregiver.email}
                        </div>
                      )}
                      <div className="text-muted-foreground">
                        📅 {caregiver.availability}
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {caregiver.services.map((service) => (
                          <Badge key={service} variant="outline" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                      {caregiver.notes && (
                        <p className="text-xs text-muted-foreground mt-2">{caregiver.notes}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="newborn" className="space-y-4">
          {/* Newborn Care */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Newborn Care Tracking</CardTitle>
                <CardDescription>Track daily care tasks for your newborn</CardDescription>
              </div>
              <Dialog open={isAddingNewbornCare} onOpenChange={setIsAddingNewbornCare}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Task
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add Newborn Care Task</DialogTitle>
                  </DialogHeader>
                  <Form {...newbornCareForm}>
                    <form onSubmit={newbornCareForm.handleSubmit(onSubmitNewbornCare)} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={newbornCareForm.control}
                          name="category"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Category</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select category" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {newbornCategories.map((category) => (
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
                        <FormField
                          control={newbornCareForm.control}
                          name="frequency"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Frequency</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g., Every 2 hours" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={newbornCareForm.control}
                        name="task"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Task</FormLabel>
                            <FormControl>
                              <Input placeholder="What needs to be tracked?" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={newbornCareForm.control}
                        name="notes"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Notes</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Additional details..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="flex justify-end space-x-2">
                        <Button type="button" variant="outline" onClick={() => setIsAddingNewbornCare(false)}>
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
                {newbornCare.map((item) => (
                  <div key={item.id} className="flex items-start space-x-3 p-4 border rounded-lg">
                    <Checkbox
                      checked={item.completed}
                      onCheckedChange={() => toggleNewbornCareComplete(item.id)}
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className={cn("font-semibold", item.completed && "line-through text-muted-foreground")}>
                          {item.task}
                        </h3>
                        <Badge variant="outline">{item.category}</Badge>
                      </div>
                      <div className="text-sm text-muted-foreground mb-1">
                        Frequency: {item.frequency}
                      </div>
                      {item.lastDone && (
                        <div className="text-xs text-green-600">
                          Last done: {format(item.lastDone, "MMM d, h:mm a")}
                        </div>
                      )}
                      {item.notes && (
                        <p className="text-sm text-muted-foreground mt-1">{item.notes}</p>
                      )}
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setNewbornCare(newbornCare.filter(n => n.id !== item.id))}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="space-y-4">
          {/* Support Resources */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Support Resources</CardTitle>
                <CardDescription>Classes, groups, and services to help you</CardDescription>
              </div>
              <Dialog open={isAddingResource} onOpenChange={setIsAddingResource}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Resource
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add Support Resource</DialogTitle>
                  </DialogHeader>
                  <Form {...supportResourceForm}>
                    <form onSubmit={supportResourceForm.handleSubmit(onSubmitResource)} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={supportResourceForm.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Resource Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Name of resource" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={supportResourceForm.control}
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
                                  <SelectItem value="class">Class</SelectItem>
                                  <SelectItem value="group">Support Group</SelectItem>
                                  <SelectItem value="service">Professional Service</SelectItem>
                                  <SelectItem value="reading">Reading Material</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={supportResourceForm.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Describe this resource..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={supportResourceForm.control}
                          name="contact"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Contact Info</FormLabel>
                              <FormControl>
                                <Input placeholder="Phone, website, etc." {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={supportResourceForm.control}
                          name="cost"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Cost</FormLabel>
                              <FormControl>
                                <Input
                                  type="number"
                                  step="0.01"
                                  placeholder="0.00"
                                  {...field}
                                  onChange={(e) => field.onChange(e.target.value ? parseFloat(e.target.value) : undefined)}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="flex justify-end space-x-2">
                        <Button type="button" variant="outline" onClick={() => setIsAddingResource(false)}>
                          Cancel
                        </Button>
                        <Button type="submit">Add Resource</Button>
                      </div>
                    </form>
                  </Form>
                </DialogContent>
              </Dialog>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {supportResources.map((resource) => (
                  <div key={resource.id} className="flex items-start space-x-3 p-4 border rounded-lg">
                    <Checkbox
                      checked={resource.completed}
                      onCheckedChange={() => toggleResourceComplete(resource.id)}
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className={cn("font-semibold", resource.completed && "line-through text-muted-foreground")}>
                          {resource.name}
                        </h3>
                        <Badge variant="outline">{resource.type}</Badge>
                        {resource.cost && (
                          <Badge variant="secondary">${resource.cost}</Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground mb-2">{resource.description}</p>
                      {resource.contact && (
                        <p className="text-sm text-muted-foreground">Contact: {resource.contact}</p>
                      )}
                      {resource.scheduled && (
                        <p className="text-sm text-blue-600">
                          Scheduled: {format(resource.scheduled, "MMM d, yyyy")}
                        </p>
                      )}
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setSupportResources(supportResources.filter(r => r.id !== resource.id))}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}