"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Moon, Sun, Clock, BarChart3, Calendar, Target, Baby } from "lucide-react"
import { useBabyPlanning, getBabyPlanningDisplayData } from "@/contexts/baby-planning-context"

interface SleepEntry {
  id: string
  date: string
  sleepStart: string
  sleepEnd?: string
  duration?: number // in minutes
  quality: 'poor' | 'fair' | 'good' | 'excellent'
  location: 'own-room' | 'parents-room' | 'other'
  wakeUps: number
  notes?: string
}

interface SleepGoal {
  type: 'total-sleep' | 'continuous-sleep' | 'bedtime-routine'
  target: number
  unit: string
  description: string
}

export function SleepTracker() {
  const { babyPlanningData } = useBabyPlanning()
  const displayData = getBabyPlanningDisplayData(babyPlanningData)
  
  const [sleepEntries, setSleepEntries] = useState<SleepEntry[]>([
    {
      id: "1",
      date: "2024-01-15",
      sleepStart: "20:30",
      sleepEnd: "06:45",
      duration: 615, // 10h 15m
      quality: "good",
      location: "parents-room",
      wakeUps: 2,
      notes: "Woke for feedings at 12:30 and 4:00"
    },
    {
      id: "2",
      date: "2024-01-14", 
      sleepStart: "21:15",
      sleepEnd: "07:00",
      duration: 585, // 9h 45m
      quality: "fair",
      location: "parents-room",
      wakeUps: 3,
      notes: "Restless night, frequent wake-ups"
    }
  ])

  const [goals, setGoals] = useState<SleepGoal[]>([
    { type: 'total-sleep', target: 10, unit: 'hours', description: 'Total sleep per day' },
    { type: 'continuous-sleep', target: 4, unit: 'hours', description: 'Longest continuous sleep' },
    { type: 'bedtime-routine', target: 30, unit: 'minutes', description: 'Bedtime routine duration' }
  ])

  const [newEntry, setNewEntry] = useState({
    sleepStart: '',
    sleepEnd: '',
    quality: 'good' as 'poor' | 'fair' | 'good' | 'excellent',
    location: 'parents-room' as 'own-room' | 'parents-room' | 'other',
    wakeUps: '0',
    notes: ''
  })

  const addSleepEntry = () => {
    if (!newEntry.sleepStart) return

    const duration = newEntry.sleepEnd 
      ? calculateDuration(newEntry.sleepStart, newEntry.sleepEnd)
      : undefined

    const entry: SleepEntry = {
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      sleepStart: newEntry.sleepStart,
      sleepEnd: newEntry.sleepEnd || undefined,
      duration,
      quality: newEntry.quality,
      location: newEntry.location,
      wakeUps: parseInt(newEntry.wakeUps) || 0,
      notes: newEntry.notes || undefined
    }

    setSleepEntries([entry, ...sleepEntries])
    setNewEntry({
      sleepStart: '',
      sleepEnd: '',
      quality: 'good',
      location: 'parents-room',
      wakeUps: '0',
      notes: ''
    })
  }

  const calculateDuration = (start: string, end: string) => {
    const startTime = new Date(`2000-01-01T${start}`)
    let endTime = new Date(`2000-01-01T${end}`)
    
    // Handle overnight sleep
    if (endTime < startTime) {
      endTime = new Date(`2000-01-02T${end}`)
    }
    
    return Math.round((endTime.getTime() - startTime.getTime()) / (1000 * 60))
  }

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return `${hours}h ${mins}m`
  }

  const getTodayStats = () => {
    const today = new Date().toISOString().split('T')[0]
    const todayEntries = sleepEntries.filter(entry => entry.date === today)
    
    const totalSleep = todayEntries.reduce((sum, entry) => sum + (entry.duration || 0), 0)
    const longestSleep = Math.max(...todayEntries.map(entry => entry.duration || 0), 0)
    const totalWakeUps = todayEntries.reduce((sum, entry) => sum + entry.wakeUps, 0)
    
    return {
      totalSleep,
      longestSleep,
      totalWakeUps,
      sleepSessions: todayEntries.length
    }
  }

  const getWeeklyAverage = () => {
    const weekAgo = new Date()
    weekAgo.setDate(weekAgo.getDate() - 7)
    
    const weekEntries = sleepEntries.filter(entry => {
      const entryDate = new Date(entry.date)
      return entryDate >= weekAgo
    })
    
    if (weekEntries.length === 0) return 0
    
    const totalSleep = weekEntries.reduce((sum, entry) => sum + (entry.duration || 0), 0)
    return Math.round(totalSleep / 7) // daily average in minutes
  }

  const getSleepQualityDistribution = () => {
    const distribution = { poor: 0, fair: 0, good: 0, excellent: 0 }
    sleepEntries.forEach(entry => {
      distribution[entry.quality]++
    })
    return distribution
  }

  const getGoalProgress = (goalType: string) => {
    const todayStats = getTodayStats()
    const goal = goals.find(g => g.type === goalType)
    if (!goal) return 0

    switch (goalType) {
      case 'total-sleep':
        return Math.min((todayStats.totalSleep / (goal.target * 60)) * 100, 100)
      case 'continuous-sleep':
        return Math.min((todayStats.longestSleep / (goal.target * 60)) * 100, 100)
      default:
        return 0
    }
  }

  const todayStats = getTodayStats()
  const weeklyAverage = getWeeklyAverage()
  const qualityDistribution = getSleepQualityDistribution()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Sleep Schedule Tracker</h2>
          <p className="text-muted-foreground">Monitor sleep patterns and establish healthy routines</p>
        </div>
        <Button onClick={addSleepEntry}>
          <Plus className="mr-2 h-4 w-4" />
          Log Sleep
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Sleep</CardTitle>
            <Moon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {todayStats.totalSleep > 0 ? formatDuration(todayStats.totalSleep) : "0h 0m"}
            </div>
            <p className="text-xs text-muted-foreground">
              across {todayStats.sleepSessions} session{todayStats.sleepSessions !== 1 ? 's' : ''}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Longest Sleep</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {todayStats.longestSleep > 0 ? formatDuration(todayStats.longestSleep) : "0h 0m"}
            </div>
            <p className="text-xs text-muted-foreground">
              continuous sleep today
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Night Wake-ups</CardTitle>
            <Sun className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{todayStats.totalWakeUps}</div>
            <p className="text-xs text-muted-foreground">
              wake-ups today
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Weekly Average</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {weeklyAverage > 0 ? formatDuration(weeklyAverage) : "0h 0m"}
            </div>
            <p className="text-xs text-muted-foreground">
              daily average
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Sleep Goals
          </CardTitle>
          <CardDescription>Track progress toward healthy sleep targets</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {goals.map((goal, index) => {
              const progress = getGoalProgress(goal.type)
              
              return (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{goal.description}</span>
                    <span className="font-medium">
                      {goal.target} {goal.unit}
                    </span>
                  </div>
                  <Progress value={progress} />
                  <p className="text-xs text-muted-foreground">
                    {Math.round(progress)}% complete today
                  </p>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Log Sleep Session</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="sleep-start">Bedtime</Label>
              <Input
                id="sleep-start"
                type="time"
                value={newEntry.sleepStart}
                onChange={(e) => setNewEntry({...newEntry, sleepStart: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="sleep-end">Wake Time (optional)</Label>
              <Input
                id="sleep-end"
                type="time"
                value={newEntry.sleepEnd}
                onChange={(e) => setNewEntry({...newEntry, sleepEnd: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="wake-ups">Wake-ups</Label>
              <Input
                id="wake-ups"
                type="number"
                min="0"
                value={newEntry.wakeUps}
                onChange={(e) => setNewEntry({...newEntry, wakeUps: e.target.value})}
                placeholder="0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="quality">Sleep Quality</Label>
              <Select 
                value={newEntry.quality} 
                onValueChange={(value: 'poor' | 'fair' | 'good' | 'excellent') => setNewEntry({...newEntry, quality: value})}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="poor">Poor</SelectItem>
                  <SelectItem value="fair">Fair</SelectItem>
                  <SelectItem value="good">Good</SelectItem>
                  <SelectItem value="excellent">Excellent</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Sleep Location</Label>
              <Select 
                value={newEntry.location} 
                onValueChange={(value: 'own-room' | 'parents-room' | 'other') => setNewEntry({...newEntry, location: value})}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="own-room">Own Room</SelectItem>
                  <SelectItem value="parents-room">Parents Room</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Notes (optional)</Label>
              <Input
                id="notes"
                value={newEntry.notes}
                onChange={(e) => setNewEntry({...newEntry, notes: e.target.value})}
                placeholder="Sleep notes"
              />
            </div>
          </div>

          <Button onClick={addSleepEntry} className="mt-4">
            <Plus className="h-4 w-4 mr-2" />
            Add Sleep Entry
          </Button>
        </CardContent>
      </Card>

      <Tabs defaultValue="recent" className="w-full">
        <TabsList>
          <TabsTrigger value="recent">Recent Sleep</TabsTrigger>
          <TabsTrigger value="patterns">Sleep Patterns</TabsTrigger>
          <TabsTrigger value="tips">Sleep Tips</TabsTrigger>
        </TabsList>

        <TabsContent value="recent" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Sleep Sessions</CardTitle>
              <CardDescription>Your latest recorded sleep periods</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {sleepEntries.slice(0, 7).map((entry) => (
                  <div key={entry.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary">{entry.date}</Badge>
                        <span className="font-medium">{entry.sleepStart}</span>
                        {entry.sleepEnd && <span className="text-muted-foreground">- {entry.sleepEnd}</span>}
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm">
                        {entry.duration && (
                          <span className="text-primary font-medium">
                            {formatDuration(entry.duration)}
                          </span>
                        )}
                        <Badge 
                          variant={
                            entry.quality === 'excellent' ? 'default' :
                            entry.quality === 'good' ? 'secondary' :
                            entry.quality === 'fair' ? 'outline' : 'destructive'
                          }
                          className="text-xs"
                        >
                          {entry.quality}
                        </Badge>
                        <span className="text-muted-foreground">
                          {entry.wakeUps} wake-up{entry.wakeUps !== 1 ? 's' : ''}
                        </span>
                      </div>
                      
                      {entry.notes && (
                        <p className="text-sm text-muted-foreground">{entry.notes}</p>
                      )}
                    </div>
                  </div>
                ))}
                
                {sleepEntries.length === 0 && (
                  <p className="text-muted-foreground text-center py-8">
                    No sleep entries yet. Log your first sleep session above.
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="patterns" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Sleep Quality Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(qualityDistribution).map(([quality, count]) => {
                    const total = Object.values(qualityDistribution).reduce((a, b) => a + b, 0)
                    const percentage = total > 0 ? (count / total) * 100 : 0
                    
                    return (
                      <div key={quality} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="capitalize">{quality}</span>
                          <span>{count} nights ({Math.round(percentage)}%)</span>
                        </div>
                        <Progress value={percentage} />
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sleep Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-muted rounded-lg">
                    <h4 className="font-medium mb-1">Average Sleep Duration</h4>
                    <p className="text-sm text-muted-foreground">
                      {weeklyAverage > 0 ? formatDuration(weeklyAverage) : "No data yet"} per night this week
                    </p>
                  </div>
                  
                  <div className="p-3 bg-muted rounded-lg">
                    <h4 className="font-medium mb-1">Sleep Location Preference</h4>
                    <p className="text-sm text-muted-foreground">
                      Most sleep sessions in parents' room
                    </p>
                  </div>
                  
                  <div className="p-3 bg-muted rounded-lg">
                    <h4 className="font-medium mb-1">Consistency Score</h4>
                    <p className="text-sm text-muted-foreground">
                      Bedtime routine is developing well
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="tips" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Baby className="h-5 w-5" />
                  Age-Appropriate Sleep Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Newborn (0-3 months)</h4>
                    <ul className="text-sm text-muted-foreground ml-4 list-disc">
                      <li>14-17 hours total sleep</li>
                      <li>Sleep in 2-4 hour stretches</li>
                      <li>No set schedule yet</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Infant (4-11 months)</h4>
                    <ul className="text-sm text-muted-foreground ml-4 list-disc">
                      <li>12-15 hours total sleep</li>
                      <li>6-8 hour night stretches</li>
                      <li>2-3 daytime naps</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Toddler (1-2 years)</h4>
                    <ul className="text-sm text-muted-foreground ml-4 list-disc">
                      <li>11-14 hours total sleep</li>
                      <li>10-12 hours nighttime</li>
                      <li>1-2 daytime naps</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sleep Environment Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-semibold text-sm">Room Temperature</h4>
                    <p className="text-sm text-muted-foreground">
                      Keep room between 68-70°F (20-22°C) for optimal comfort
                    </p>
                  </div>
                  
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-semibold text-sm">Lighting</h4>
                    <p className="text-sm text-muted-foreground">
                      Dark room for sleep, bright light during wake times
                    </p>
                  </div>
                  
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-semibold text-sm">Sound</h4>
                    <p className="text-sm text-muted-foreground">
                      White noise can help mask household sounds
                    </p>
                  </div>
                  
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-semibold text-sm">Safety</h4>
                    <p className="text-sm text-muted-foreground">
                      Back to sleep, firm mattress, no loose bedding
                    </p>
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