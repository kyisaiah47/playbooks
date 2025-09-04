"use client"

import { useState } from "react"
import { useBabyPlanning, getBabyPlanningDisplayData } from "@/contexts/baby-planning-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Heart,
  Baby,
  Calendar,
  TrendingUp,
  Plus,
  Activity,
  Scale,
  Thermometer,
  Clock,
  AlertCircle,
  CheckCircle,
} from "lucide-react"

interface SymptomEntry {
  id: string
  date: string
  symptom: string
  severity: 'mild' | 'moderate' | 'severe'
  notes: string
}

interface WeightEntry {
  id: string
  date: string
  weight: number
  notes: string
}

interface AppointmentEntry {
  id: string
  date: string
  type: string
  provider: string
  notes: string
  completed: boolean
}

export function PregnancyTracker() {
  const { babyPlanningData } = useBabyPlanning()
  const displayData = getBabyPlanningDisplayData(babyPlanningData)
  
  // Mock data - in a real app, this would come from state/database
  const [symptoms] = useState<SymptomEntry[]>([
    {
      id: '1',
      date: '2024-01-15',
      symptom: 'Morning sickness',
      severity: 'moderate',
      notes: 'Felt nauseous in the morning, better after eating crackers'
    },
    {
      id: '2',
      date: '2024-01-18',
      symptom: 'Fatigue',
      severity: 'mild',
      notes: 'More tired than usual, went to bed early'
    },
    {
      id: '3',
      date: '2024-01-20',
      symptom: 'Food aversions',
      severity: 'moderate',
      notes: 'Cannot tolerate the smell of coffee or eggs'
    }
  ])

  const [weightEntries] = useState<WeightEntry[]>([
    { id: '1', date: '2024-01-01', weight: 150, notes: 'Starting weight' },
    { id: '2', date: '2024-01-15', weight: 152, notes: 'Slight increase' },
    { id: '3', date: '2024-02-01', weight: 154, notes: 'Steady progress' }
  ])

  const [appointments] = useState<AppointmentEntry[]>([
    {
      id: '1',
      date: '2024-01-10',
      type: 'First Prenatal Visit',
      provider: 'Dr. Johnson',
      notes: 'Initial checkup, confirmed pregnancy',
      completed: true
    },
    {
      id: '2',
      date: '2024-02-15',
      type: 'Monthly Checkup',
      provider: 'Dr. Johnson',
      notes: 'Routine visit, heard heartbeat',
      completed: true
    },
    {
      id: '3',
      date: '2024-03-20',
      type: 'Anatomy Scan',
      provider: 'Ultrasound Tech',
      notes: 'Scheduled for detailed anatomy scan',
      completed: false
    }
  ])

  const pregnancyProgress = Math.round((babyPlanningData.currentWeek / 40) * 100)
  const daysInWeek = 7
  const currentDayInWeek = 3 // Mock data

  const weeklyMilestones = {
    4: { size: "Poppy seed", development: "Neural tube begins to form" },
    8: { size: "Raspberry", development: "Heart begins beating" },
    12: { size: "Plum", development: "All organs are formed" },
    16: { size: "Avocado", development: "You may feel first movements" },
    20: { size: "Banana", development: "Anatomy scan week" },
    24: { size: "Ear of corn", development: "Hearing develops" },
    28: { size: "Eggplant", development: "Brain development accelerates" },
    32: { size: "Coconut", development: "Bones are hardening" },
    36: { size: "Romaine lettuce", development: "Lungs are nearly mature" },
    40: { size: "Watermelon", development: "Full term!" }
  }

  const getCurrentMilestone = () => {
    const weeks = Object.keys(weeklyMilestones).map(Number).sort((a, b) => a - b)
    let currentMilestone = weeks[0]
    
    for (const week of weeks) {
      if (babyPlanningData.currentWeek >= week) {
        currentMilestone = week
      } else {
        break
      }
    }
    
    return weeklyMilestones[currentMilestone as keyof typeof weeklyMilestones]
  }

  const currentMilestone = getCurrentMilestone()

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold flex items-center">
          <Heart className="mr-2 h-8 w-8" />
          Pregnancy Tracking
        </h1>
        <p className="text-muted-foreground">
          Monitor your pregnancy progress and track important milestones
        </p>
      </div>

      {/* Current Progress */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Baby className="mr-2 h-5 w-5" />
              Current Progress
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-4xl font-bold">Week {displayData.currentWeek}</div>
              <div className="text-muted-foreground">{displayData.trimester} Trimester</div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span>{pregnancyProgress}%</span>
              </div>
              <Progress value={pregnancyProgress} className="h-3" />
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-3 bg-muted rounded-lg">
                <div className="font-semibold">{displayData.daysUntilDue}</div>
                <div className="text-xs text-muted-foreground">Days to go</div>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <div className="font-semibold">{displayData.weeksRemaining}</div>
                <div className="text-xs text-muted-foreground">Weeks remaining</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Activity className="mr-2 h-5 w-5" />
              Baby Development
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-2xl font-bold">Size of a {currentMilestone.size}</div>
              <div className="text-muted-foreground">{currentMilestone.development}</div>
            </div>

            <div className="p-4 bg-gradient-to-r from-pink-50 to-blue-50 rounded-lg border">
              <div className="font-medium mb-2">This Week's Development</div>
              <div className="text-sm text-muted-foreground">
                Your baby is continuing to grow and develop. Major organs are functioning, 
                and rapid brain development is occurring.
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tracking Tabs */}
      <Tabs defaultValue="symptoms" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="symptoms">Symptoms</TabsTrigger>
          <TabsTrigger value="weight">Weight</TabsTrigger>
          <TabsTrigger value="appointments">Appointments</TabsTrigger>
          <TabsTrigger value="milestones">Milestones</TabsTrigger>
        </TabsList>

        <TabsContent value="symptoms" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Symptom Tracking</h3>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Symptom
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Log New Symptom</DialogTitle>
                  <DialogDescription>
                    Track pregnancy symptoms to discuss with your healthcare provider
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="symptom">Symptom</Label>
                    <Input id="symptom" placeholder="e.g., Nausea, Fatigue, Back pain" />
                  </div>
                  <div>
                    <Label htmlFor="severity">Severity</Label>
                    <select id="severity" className="w-full p-2 border rounded-md">
                      <option value="mild">Mild</option>
                      <option value="moderate">Moderate</option>
                      <option value="severe">Severe</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea id="notes" placeholder="Additional details..." />
                  </div>
                  <Button className="w-full">Log Symptom</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid gap-3">
            {symptoms.map((symptom) => (
              <Card key={symptom.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <div className="font-medium">{symptom.symptom}</div>
                      <div className="text-sm text-muted-foreground">{symptom.notes}</div>
                      <div className="text-xs text-muted-foreground">
                        {new Date(symptom.date).toLocaleDateString()}
                      </div>
                    </div>
                    <Badge 
                      variant={
                        symptom.severity === 'severe' ? 'destructive' : 
                        symptom.severity === 'moderate' ? 'secondary' : 'outline'
                      }
                    >
                      {symptom.severity}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="weight" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Weight Tracking</h3>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Weight
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Log Weight Entry</DialogTitle>
                  <DialogDescription>
                    Track your weight gain throughout pregnancy
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="weight">Weight</Label>
                    <Input id="weight" type="number" placeholder="150" />
                  </div>
                  <div>
                    <Label htmlFor="weight-notes">Notes</Label>
                    <Textarea id="weight-notes" placeholder="Any observations..." />
                  </div>
                  <Button className="w-full">Log Weight</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Scale className="mr-2 h-5 w-5" />
                Weight Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-3 bg-muted rounded-lg">
                    <div className="font-semibold">{weightEntries[0]?.weight} lbs</div>
                    <div className="text-xs text-muted-foreground">Starting Weight</div>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <div className="font-semibold">{weightEntries[weightEntries.length - 1]?.weight} lbs</div>
                    <div className="text-xs text-muted-foreground">Current Weight</div>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <div className="font-semibold">
                      +{(weightEntries[weightEntries.length - 1]?.weight || 0) - (weightEntries[0]?.weight || 0)} lbs
                    </div>
                    <div className="text-xs text-muted-foreground">Total Gain</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {weightEntries.slice(-5).map((entry) => (
                    <div key={entry.id} className="flex justify-between items-center p-2 border rounded">
                      <div>
                        <div className="font-medium">{entry.weight} lbs</div>
                        <div className="text-xs text-muted-foreground">{entry.notes}</div>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {new Date(entry.date).toLocaleDateString()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appointments" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Appointments</h3>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Appointment
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Schedule Appointment</DialogTitle>
                  <DialogDescription>
                    Add a new prenatal appointment or medical visit
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="apt-type">Appointment Type</Label>
                    <Input id="apt-type" placeholder="e.g., Monthly Checkup, Ultrasound" />
                  </div>
                  <div>
                    <Label htmlFor="apt-provider">Healthcare Provider</Label>
                    <Input id="apt-provider" placeholder="Dr. Smith" />
                  </div>
                  <div>
                    <Label htmlFor="apt-date">Date & Time</Label>
                    <Input id="apt-date" type="datetime-local" />
                  </div>
                  <div>
                    <Label htmlFor="apt-notes">Notes</Label>
                    <Textarea id="apt-notes" placeholder="What to discuss..." />
                  </div>
                  <Button className="w-full">Schedule Appointment</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="space-y-3">
            {appointments.map((appointment) => (
              <Card key={appointment.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center space-x-2">
                        {appointment.completed ? (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        ) : (
                          <Clock className="h-4 w-4 text-blue-600" />
                        )}
                        <div className="font-medium">{appointment.type}</div>
                      </div>
                      <div className="text-sm text-muted-foreground pl-6">
                        <div>{appointment.provider}</div>
                        <div>{new Date(appointment.date).toLocaleDateString()}</div>
                        {appointment.notes && <div className="mt-1">{appointment.notes}</div>}
                      </div>
                    </div>
                    <Badge variant={appointment.completed ? "secondary" : "outline"}>
                      {appointment.completed ? "Completed" : "Scheduled"}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="milestones" className="space-y-4">
          <h3 className="text-lg font-semibold">Pregnancy Milestones</h3>
          
          <div className="grid gap-4">
            {Object.entries(weeklyMilestones).map(([week, milestone]) => {
              const weekNum = parseInt(week)
              const isCompleted = babyPlanningData.currentWeek > weekNum
              const isCurrent = babyPlanningData.currentWeek === weekNum
              const isUpcoming = babyPlanningData.currentWeek < weekNum
              
              return (
                <Card key={week} className={
                  isCurrent ? "border-primary bg-primary/5" : 
                  isCompleted ? "opacity-75" : ""
                }>
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 mt-1">
                        {isCompleted ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : isCurrent ? (
                          <AlertCircle className="h-5 w-5 text-primary" />
                        ) : (
                          <Clock className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center space-x-2">
                          <div className="font-medium">Week {week}</div>
                          {isCurrent && <Badge>Current</Badge>}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Size of a {milestone.size}
                        </div>
                        <div className="text-sm">{milestone.development}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}