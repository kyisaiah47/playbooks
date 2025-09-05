"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import {
  CalendarIcon,
  Stethoscope,
  Plus,
  Edit,
  Trash2,
  Clock,
  AlertCircle,
  CheckCircle2,
  Heart,
  Activity,
  TrendingUp
} from "lucide-react"

interface Appointment {
  id: string
  date: Date
  type: string
  doctor: string
  notes?: string
  completed: boolean
  results?: string
}

interface Symptom {
  id: string
  date: Date
  symptom: string
  severity: number
  notes?: string
}

interface TestResult {
  id: string
  date: Date
  testName: string
  result: string
  status: "normal" | "abnormal" | "pending"
  notes: string
}

const appointmentSchema = z.object({
  date: z.date(),
  type: z.string().min(1, "Appointment type is required"),
  doctor: z.string().min(1, "Doctor name is required"),
  notes: z.string().optional(),
})

const symptomSchema = z.object({
  date: z.date(),
  symptom: z.string().min(1, "Symptom is required"),
  severity: z.number().min(1).max(10),
  notes: z.string().optional(),
})

const testResultSchema = z.object({
  date: z.date(),
  testName: z.string().min(1, "Test name is required"),
  result: z.string().min(1, "Result is required"),
  status: z.enum(["normal", "abnormal", "pending"]),
  notes: z.string().optional(),
})

export function HealthTracking() {
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: "1",
      date: new Date("2024-02-15"),
      type: "First Prenatal Visit",
      doctor: "Dr. Sarah Johnson",
      notes: "Initial checkup, confirmed pregnancy",
      completed: true,
      results: "Everything looks healthy, due date confirmed"
    },
    {
      id: "2", 
      date: new Date("2024-03-15"),
      type: "12-Week Checkup",
      doctor: "Dr. Sarah Johnson",
      notes: "Nuchal translucency scan scheduled",
      completed: false
    },
    {
      id: "3",
      date: new Date("2024-04-10"),
      type: "Anatomy Scan",
      doctor: "Dr. Sarah Johnson", 
      notes: "20-week detailed ultrasound",
      completed: false
    }
  ])

  const [symptoms, setSymptoms] = useState<Symptom[]>([
    {
      id: "1",
      date: new Date("2024-02-10"),
      symptom: "Morning Sickness",
      severity: 6,
      notes: "Nausea mainly in mornings, helped by crackers"
    },
    {
      id: "2",
      date: new Date("2024-02-12"),
      symptom: "Fatigue",
      severity: 8,
      notes: "Extreme tiredness, need afternoon naps"
    }
  ])

  const [testResults, setTestResults] = useState<TestResult[]>([
    {
      id: "1",
      date: new Date("2024-02-15"),
      testName: "Blood Work - HCG",
      result: "45,000 mIU/mL",
      status: "normal",
      notes: "Levels appropriate for gestational age"
    },
    {
      id: "2",
      date: new Date("2024-02-15"),
      testName: "Urine Test",
      result: "Protein: Negative, Glucose: Negative",
      status: "normal", 
      notes: "All clear"
    }
  ])

  const [isAddingAppointment, setIsAddingAppointment] = useState(false)
  const [isAddingSymptom, setIsAddingSymptom] = useState(false)
  const [isAddingTest, setIsAddingTest] = useState(false)

  const appointmentForm = useForm({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      date: new Date(),
      type: "",
      doctor: "",
      notes: "",
    },
  })

  const symptomForm = useForm({
    resolver: zodResolver(symptomSchema),
    defaultValues: {
      date: new Date(),
      symptom: "",
      severity: 5,
      notes: "",
    },
  })

  const testForm = useForm({
    resolver: zodResolver(testResultSchema),
    defaultValues: {
      date: new Date(),
      testName: "",
      result: "",
      status: "pending" as const,
      notes: "",
    },
  })

  const appointmentTypes = [
    "First Prenatal Visit",
    "Regular Checkup", 
    "Ultrasound",
    "Anatomy Scan",
    "Glucose Test",
    "Group B Strep Test",
    "Non-Stress Test",
    "Specialist Consultation",
    "Other"
  ]

  const commonSymptoms = [
    "Morning Sickness",
    "Nausea", 
    "Fatigue",
    "Headaches",
    "Back Pain",
    "Heartburn",
    "Swelling",
    "Mood Changes",
    "Sleep Issues",
    "Cravings",
    "Other"
  ]

  const onSubmitAppointment = (data: z.infer<typeof appointmentSchema>) => {
    const newAppointment: Appointment = {
      id: Date.now().toString(),
      ...data,
      completed: false,
    }
    setAppointments([...appointments, newAppointment])
    setIsAddingAppointment(false)
    appointmentForm.reset()
  }

  const onSubmitSymptom = (data: z.infer<typeof symptomSchema>) => {
    const newSymptom: Symptom = {
      id: Date.now().toString(),
      ...data,
    }
    setSymptoms([...symptoms, newSymptom])
    setIsAddingSymptom(false)
    symptomForm.reset()
  }

  const onSubmitTest = (data: z.infer<typeof testResultSchema>) => {
    const newTest: TestResult = {
      id: Date.now().toString(),
      ...data,
    }
    setTestResults([...testResults, newTest])
    setIsAddingTest(false)
    testForm.reset()
  }

  const toggleAppointmentComplete = (id: string) => {
    setAppointments(appointments.map(apt => 
      apt.id === id ? { ...apt, completed: !apt.completed } : apt
    ))
  }

  const deleteAppointment = (id: string) => {
    setAppointments(appointments.filter(apt => apt.id !== id))
  }

  const deleteSymptom = (id: string) => {
    setSymptoms(symptoms.filter(symptom => symptom.id !== id))
  }

  const deleteTestResult = (id: string) => {
    setTestResults(testResults.filter(test => test.id !== id))
  }

  const completedAppointments = appointments.filter(apt => apt.completed).length
  const upcomingAppointments = appointments.filter(apt => !apt.completed).length
  const normalTests = testResults.filter(test => test.status === "normal").length
  const averageSymptomSeverity = symptoms.length > 0 
    ? Math.round(symptoms.reduce((sum, symptom) => sum + symptom.severity, 0) / symptoms.length)
    : 0

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Health Tracking</h1>
        <p className="text-muted-foreground">Track your prenatal appointments, symptoms, and test results</p>
      </div>

      {/* Health Metrics Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Visits</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedAppointments}</div>
            <p className="text-xs text-muted-foreground">
              of {appointments.length} total appointments
            </p>
            <Progress value={(completedAppointments / appointments.length) * 100} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Visits</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{upcomingAppointments}</div>
            <p className="text-xs text-muted-foreground">
              appointments scheduled
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Test Results</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{normalTests}</div>
            <p className="text-xs text-muted-foreground">
              of {testResults.length} results normal
            </p>
            <Progress value={(normalTests / Math.max(testResults.length, 1)) * 100} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Symptom Severity</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{averageSymptomSeverity}/10</div>
            <p className="text-xs text-muted-foreground">
              average severity level
            </p>
            <Progress value={averageSymptomSeverity * 10} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Appointments Section */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Prenatal Appointments</CardTitle>
            <CardDescription>Track your doctor visits and checkups</CardDescription>
          </div>
          <Dialog open={isAddingAppointment} onOpenChange={setIsAddingAppointment}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Appointment
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Appointment</DialogTitle>
              </DialogHeader>
              <Form {...appointmentForm}>
                <form onSubmit={appointmentForm.handleSubmit(onSubmitAppointment)} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={appointmentForm.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Date</FormLabel>
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
                    <FormField
                      control={appointmentForm.control}
                      name="type"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Appointment Type</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {appointmentTypes.map((type) => (
                                <SelectItem key={type} value={type}>
                                  {type}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={appointmentForm.control}
                    name="doctor"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Doctor/Provider</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter doctor name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={appointmentForm.control}
                    name="notes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Notes</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Additional notes..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex justify-end space-x-2">
                    <Button type="button" variant="outline" onClick={() => setIsAddingAppointment(false)}>
                      Cancel
                    </Button>
                    <Button type="submit">Add Appointment</Button>
                  </div>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div key={appointment.id} className="flex items-start justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant={appointment.completed ? "default" : "secondary"}>
                      {appointment.completed ? <CheckCircle2 className="h-3 w-3 mr-1" /> : <Clock className="h-3 w-3 mr-1" />}
                      {appointment.completed ? "Completed" : "Scheduled"}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {format(appointment.date, "MMM d, yyyy")}
                    </span>
                  </div>
                  <h4 className="font-semibold">{appointment.type}</h4>
                  <p className="text-sm text-muted-foreground mb-1">Dr. {appointment.doctor}</p>
                  {appointment.notes && (
                    <p className="text-sm text-muted-foreground">{appointment.notes}</p>
                  )}
                  {appointment.results && (
                    <p className="text-sm text-green-600 mt-2">Results: {appointment.results}</p>
                  )}
                </div>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => toggleAppointmentComplete(appointment.id)}
                  >
                    {appointment.completed ? "Mark Pending" : "Mark Complete"}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => deleteAppointment(appointment.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Symptoms & Test Results Row */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Symptoms Tracking */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Symptoms</CardTitle>
              <CardDescription>Track pregnancy symptoms</CardDescription>
            </div>
            <Dialog open={isAddingSymptom} onOpenChange={setIsAddingSymptom}>
              <DialogTrigger asChild>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Log Symptom</DialogTitle>
                </DialogHeader>
                <Form {...symptomForm}>
                  <form onSubmit={symptomForm.handleSubmit(onSubmitSymptom)} className="space-y-4">
                    <FormField
                      control={symptomForm.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Date</FormLabel>
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
                    <FormField
                      control={symptomForm.control}
                      name="symptom"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Symptom</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select symptom" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {commonSymptoms.map((symptom) => (
                                <SelectItem key={symptom} value={symptom}>
                                  {symptom}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={symptomForm.control}
                      name="severity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Severity (1-10)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              min="1"
                              max="10"
                              {...field}
                              onChange={(e) => field.onChange(parseInt(e.target.value))}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={symptomForm.control}
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
                      <Button type="button" variant="outline" onClick={() => setIsAddingSymptom(false)}>
                        Cancel
                      </Button>
                      <Button type="submit">Log Symptom</Button>
                    </div>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {symptoms.slice(0, 5).map((symptom) => (
                <div key={symptom.id} className="flex items-center justify-between p-3 border rounded">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-medium">{symptom.symptom}</span>
                      <Badge variant="outline">
                        {symptom.severity}/10
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {format(symptom.date, "MMM d")}
                      {symptom.notes && ` • ${symptom.notes}`}
                    </p>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => deleteSymptom(symptom.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Test Results */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Test Results</CardTitle>
              <CardDescription>Track lab results and screenings</CardDescription>
            </div>
            <Dialog open={isAddingTest} onOpenChange={setIsAddingTest}>
              <DialogTrigger asChild>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Test Result</DialogTitle>
                </DialogHeader>
                <Form {...testForm}>
                  <form onSubmit={testForm.handleSubmit(onSubmitTest)} className="space-y-4">
                    <FormField
                      control={testForm.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Test Date</FormLabel>
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
                    <FormField
                      control={testForm.control}
                      name="testName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Test Name</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Blood Work - HCG" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={testForm.control}
                      name="result"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Result</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Test results..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={testForm.control}
                      name="status"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Status</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select status" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="normal">Normal</SelectItem>
                              <SelectItem value="abnormal">Abnormal</SelectItem>
                              <SelectItem value="pending">Pending</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={testForm.control}
                      name="notes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Notes</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Additional notes..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex justify-end space-x-2">
                      <Button type="button" variant="outline" onClick={() => setIsAddingTest(false)}>
                        Cancel
                      </Button>
                      <Button type="submit">Add Result</Button>
                    </div>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {testResults.slice(0, 5).map((test) => (
                <div key={test.id} className="flex items-start justify-between p-3 border rounded">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-medium text-sm">{test.testName}</span>
                      <Badge 
                        variant={test.status === "normal" ? "default" : 
                                test.status === "abnormal" ? "destructive" : "secondary"}
                      >
                        {test.status === "normal" && <CheckCircle2 className="h-3 w-3 mr-1" />}
                        {test.status === "abnormal" && <AlertCircle className="h-3 w-3 mr-1" />}
                        {test.status === "pending" && <Clock className="h-3 w-3 mr-1" />}
                        {test.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">
                      {format(test.date, "MMM d, yyyy")}
                    </p>
                    <p className="text-sm">{test.result}</p>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => deleteTestResult(test.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}