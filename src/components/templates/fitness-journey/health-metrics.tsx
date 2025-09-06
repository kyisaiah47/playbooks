"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Plus,
  Trash2,
  Moon,
  Zap,
  Heart,
  Activity,
  BarChart3,
  Clock,
  TrendingUp,
  TrendingDown
} from "lucide-react"
import { useFitnessJourney } from "@/contexts/fitness-journey-context"

interface SleepLog {
  id: string
  date: Date
  bedtime: string // HH:MM format
  wakeTime: string // HH:MM format
  hoursSlept: number
  quality: 'poor' | 'fair' | 'good' | 'excellent'
  notes?: string
  createdAt: Date
}

interface EnergyLog {
  id: string
  date: Date
  time: string // HH:MM format
  energyLevel: number // 1-10 scale
  mood: 'stressed' | 'tired' | 'neutral' | 'good' | 'great'
  activities?: string
  notes?: string
  createdAt: Date
}

interface RecoveryMetric {
  id: string
  date: Date
  restingHeartRate?: number
  soreness: number // 1-10 scale
  stressLevel: number // 1-10 scale
  hydration: number // glasses of water
  recoveryFeeling: 'very-poor' | 'poor' | 'fair' | 'good' | 'excellent'
  notes?: string
  createdAt: Date
}

export function HealthMetrics() {
  const { data, updateData } = useFitnessJourney()
  const [sleepLogs, setSleepLogs] = useState<SleepLog[]>([])
  const [energyLogs, setEnergyLogs] = useState<EnergyLog[]>([])
  const [recoveryMetrics, setRecoveryMetrics] = useState<RecoveryMetric[]>([])
  
  const [isAddingSleep, setIsAddingSleep] = useState(false)
  const [isAddingEnergy, setIsAddingEnergy] = useState(false)
  const [isAddingRecovery, setIsAddingRecovery] = useState(false)

  // Form states
  const [sleepForm, setSleepForm] = useState({
    date: new Date().toISOString().split('T')[0],
    bedtime: '22:00',
    wakeTime: '07:00',
    quality: 'good' as SleepLog['quality'],
    notes: '',
  })

  const [energyForm, setEnergyForm] = useState({
    date: new Date().toISOString().split('T')[0],
    time: new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }),
    energyLevel: 5,
    mood: 'neutral' as EnergyLog['mood'],
    activities: '',
    notes: '',
  })

  const [recoveryForm, setRecoveryForm] = useState({
    date: new Date().toISOString().split('T')[0],
    restingHeartRate: 70,
    soreness: 1,
    stressLevel: 1,
    hydration: 8,
    recoveryFeeling: 'good' as RecoveryMetric['recoveryFeeling'],
    notes: '',
  })

  // Load data from localStorage
  useEffect(() => {
    const savedSleep = localStorage.getItem('fitness-journey-sleep-logs')
    if (savedSleep) {
      const parsed = JSON.parse(savedSleep)
      setSleepLogs(parsed.map((s: any) => ({
        ...s,
        date: new Date(s.date),
        createdAt: new Date(s.createdAt)
      })))
    }

    const savedEnergy = localStorage.getItem('fitness-journey-energy-logs')
    if (savedEnergy) {
      const parsed = JSON.parse(savedEnergy)
      setEnergyLogs(parsed.map((e: any) => ({
        ...e,
        date: new Date(e.date),
        createdAt: new Date(e.createdAt)
      })))
    }

    const savedRecovery = localStorage.getItem('fitness-journey-recovery-metrics')
    if (savedRecovery) {
      const parsed = JSON.parse(savedRecovery)
      setRecoveryMetrics(parsed.map((r: any) => ({
        ...r,
        date: new Date(r.date),
        createdAt: new Date(r.createdAt)
      })))
    }
  }, [])

  // Save functions
  const saveSleepLogs = (newLogs: SleepLog[]) => {
    setSleepLogs(newLogs)
    localStorage.setItem('fitness-journey-sleep-logs', JSON.stringify(newLogs))
  }

  const saveEnergyLogs = (newLogs: EnergyLog[]) => {
    setEnergyLogs(newLogs)
    localStorage.setItem('fitness-journey-energy-logs', JSON.stringify(newLogs))
  }

  const saveRecoveryMetrics = (newMetrics: RecoveryMetric[]) => {
    setRecoveryMetrics(newMetrics)
    localStorage.setItem('fitness-journey-recovery-metrics', JSON.stringify(newMetrics))
  }

  // Helper functions
  const calculateSleepHours = (bedtime: string, wakeTime: string) => {
    const [bedHour, bedMin] = bedtime.split(':').map(Number)
    const [wakeHour, wakeMin] = wakeTime.split(':').map(Number)
    
    let bedtimeMs = bedHour * 60 + bedMin
    let waketimeMs = wakeHour * 60 + wakeMin
    
    // Handle overnight sleep
    if (waketimeMs < bedtimeMs) {
      waketimeMs += 24 * 60 // Add 24 hours
    }
    
    return (waketimeMs - bedtimeMs) / 60
  }

  // CRUD Operations - Sleep
  const addSleep = () => {
    const hoursSlept = calculateSleepHours(sleepForm.bedtime, sleepForm.wakeTime)
    const newSleep: SleepLog = {
      id: Date.now().toString(),
      date: new Date(sleepForm.date),
      bedtime: sleepForm.bedtime,
      wakeTime: sleepForm.wakeTime,
      hoursSlept,
      quality: sleepForm.quality,
      notes: sleepForm.notes,
      createdAt: new Date(),
    }
    saveSleepLogs([...sleepLogs, newSleep])
    setSleepForm({
      date: new Date().toISOString().split('T')[0],
      bedtime: '22:00',
      wakeTime: '07:00',
      quality: 'good',
      notes: '',
    })
    setIsAddingSleep(false)
  }

  const deleteSleep = (id: string) => {
    saveSleepLogs(sleepLogs.filter(log => log.id !== id))
  }

  // CRUD Operations - Energy
  const addEnergy = () => {
    const newEnergy: EnergyLog = {
      id: Date.now().toString(),
      date: new Date(energyForm.date),
      time: energyForm.time,
      energyLevel: energyForm.energyLevel,
      mood: energyForm.mood,
      activities: energyForm.activities,
      notes: energyForm.notes,
      createdAt: new Date(),
    }
    saveEnergyLogs([...energyLogs, newEnergy])
    setEnergyForm({
      date: new Date().toISOString().split('T')[0],
      time: new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }),
      energyLevel: 5,
      mood: 'neutral',
      activities: '',
      notes: '',
    })
    setIsAddingEnergy(false)
  }

  const deleteEnergy = (id: string) => {
    saveEnergyLogs(energyLogs.filter(log => log.id !== id))
  }

  // CRUD Operations - Recovery
  const addRecovery = () => {
    const newRecovery: RecoveryMetric = {
      id: Date.now().toString(),
      date: new Date(recoveryForm.date),
      restingHeartRate: recoveryForm.restingHeartRate,
      soreness: recoveryForm.soreness,
      stressLevel: recoveryForm.stressLevel,
      hydration: recoveryForm.hydration,
      recoveryFeeling: recoveryForm.recoveryFeeling,
      notes: recoveryForm.notes,
      createdAt: new Date(),
    }
    saveRecoveryMetrics([...recoveryMetrics, newRecovery])
    setRecoveryForm({
      date: new Date().toISOString().split('T')[0],
      restingHeartRate: 70,
      soreness: 1,
      stressLevel: 1,
      hydration: 8,
      recoveryFeeling: 'good',
      notes: '',
    })
    setIsAddingRecovery(false)
  }

  const deleteRecovery = (id: string) => {
    saveRecoveryMetrics(recoveryMetrics.filter(metric => metric.id !== id))
  }

  // Calculate averages and trends
  const getAverageSleep = () => {
    if (sleepLogs.length === 0) return 0
    const total = sleepLogs.reduce((sum, log) => sum + log.hoursSlept, 0)
    return total / sleepLogs.length
  }

  const getAverageEnergyLevel = () => {
    if (energyLogs.length === 0) return 0
    const total = energyLogs.reduce((sum, log) => sum + log.energyLevel, 0)
    return total / energyLogs.length
  }

  const getQualityColor = (quality: SleepLog['quality']) => {
    switch (quality) {
      case 'excellent': return 'bg-green-500'
      case 'good': return 'bg-blue-500'
      case 'fair': return 'bg-yellow-500'
      case 'poor': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const getMoodColor = (mood: EnergyLog['mood']) => {
    switch (mood) {
      case 'great': return 'bg-green-500'
      case 'good': return 'bg-blue-500'
      case 'neutral': return 'bg-gray-500'
      case 'tired': return 'bg-yellow-500'
      case 'stressed': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Health Metrics</h1>
          <p className="text-muted-foreground">Track sleep, energy levels, and recovery metrics</p>
        </div>
      </div>

      {/* Health Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Sleep</CardTitle>
            <Moon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{getAverageSleep().toFixed(1)}h</div>
            <p className="text-xs text-muted-foreground">per night</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Energy Level</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{getAverageEnergyLevel().toFixed(1)}/10</div>
            <p className="text-xs text-muted-foreground">average rating</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sleep Entries</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{sleepLogs.length}</div>
            <p className="text-xs text-muted-foreground">nights tracked</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recovery Logs</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{recoveryMetrics.length}</div>
            <p className="text-xs text-muted-foreground">entries logged</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs for different metrics */}
      <Tabs defaultValue="sleep" className="space-y-4">
        <TabsList>
          <TabsTrigger value="sleep">Sleep Tracking</TabsTrigger>
          <TabsTrigger value="energy">Energy Levels</TabsTrigger>
          <TabsTrigger value="recovery">Recovery Metrics</TabsTrigger>
        </TabsList>

        <TabsContent value="sleep" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Sleep Tracking</CardTitle>
                  <CardDescription>Monitor your sleep patterns and quality</CardDescription>
                </div>
                <Dialog open={isAddingSleep} onOpenChange={setIsAddingSleep}>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Log Sleep
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add Sleep Entry</DialogTitle>
                      <DialogDescription>Record your sleep information</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="sleepDate">Date</Label>
                        <Input
                          id="sleepDate"
                          type="date"
                          value={sleepForm.date}
                          onChange={(e) => setSleepForm({...sleepForm, date: e.target.value})}
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="bedtime">Bedtime</Label>
                          <Input
                            id="bedtime"
                            type="time"
                            value={sleepForm.bedtime}
                            onChange={(e) => setSleepForm({...sleepForm, bedtime: e.target.value})}
                          />
                        </div>
                        
                        <div className="grid gap-2">
                          <Label htmlFor="wakeTime">Wake Time</Label>
                          <Input
                            id="wakeTime"
                            type="time"
                            value={sleepForm.wakeTime}
                            onChange={(e) => setSleepForm({...sleepForm, wakeTime: e.target.value})}
                          />
                        </div>
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="quality">Sleep Quality</Label>
                        <Select value={sleepForm.quality} onValueChange={(value: SleepLog['quality']) => setSleepForm({...sleepForm, quality: value})}>
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

                      <div className="grid gap-2">
                        <Label htmlFor="sleepNotes">Notes</Label>
                        <Textarea
                          id="sleepNotes"
                          value={sleepForm.notes}
                          onChange={(e) => setSleepForm({...sleepForm, notes: e.target.value})}
                          placeholder="How did you sleep? Any disturbances?"
                        />
                      </div>
                      
                      <div className="text-sm text-muted-foreground">
                        Estimated sleep duration: {calculateSleepHours(sleepForm.bedtime, sleepForm.wakeTime).toFixed(1)} hours
                      </div>
                    </div>
                    <DialogFooter>
                      <Button onClick={addSleep}>Add Sleep Entry</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              {sleepLogs.length === 0 ? (
                <div className="text-center py-8">
                  <Moon className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">No sleep data yet. Start tracking your sleep!</p>
                </div>
              ) : (
                <Table>
                  <TableCaption>Your sleep tracking history</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Bedtime</TableHead>
                      <TableHead>Wake Time</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Quality</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sleepLogs
                      .sort((a, b) => b.date.getTime() - a.date.getTime())
                      .map((log) => (
                        <TableRow key={log.id}>
                          <TableCell>{log.date.toLocaleDateString()}</TableCell>
                          <TableCell>{log.bedtime}</TableCell>
                          <TableCell>{log.wakeTime}</TableCell>
                          <TableCell className="font-medium">{log.hoursSlept.toFixed(1)}h</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <div className={`w-2 h-2 rounded-full ${getQualityColor(log.quality)}`} />
                              <Badge variant="outline">{log.quality}</Badge>
                            </div>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="outline" size="sm" onClick={() => deleteSleep(log.id)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="energy" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Energy Level Tracking</CardTitle>
                  <CardDescription>Monitor your energy and mood throughout the day</CardDescription>
                </div>
                <Dialog open={isAddingEnergy} onOpenChange={setIsAddingEnergy}>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Log Energy
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add Energy Entry</DialogTitle>
                      <DialogDescription>Record your current energy level and mood</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="energyDate">Date</Label>
                          <Input
                            id="energyDate"
                            type="date"
                            value={energyForm.date}
                            onChange={(e) => setEnergyForm({...energyForm, date: e.target.value})}
                          />
                        </div>
                        
                        <div className="grid gap-2">
                          <Label htmlFor="energyTime">Time</Label>
                          <Input
                            id="energyTime"
                            type="time"
                            value={energyForm.time}
                            onChange={(e) => setEnergyForm({...energyForm, time: e.target.value})}
                          />
                        </div>
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="energyLevel">Energy Level (1-10)</Label>
                        <Input
                          id="energyLevel"
                          type="number"
                          min="1"
                          max="10"
                          value={energyForm.energyLevel}
                          onChange={(e) => setEnergyForm({...energyForm, energyLevel: parseInt(e.target.value) || 1})}
                        />
                        <Progress value={energyForm.energyLevel * 10} className="mt-2" />
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="mood">Mood</Label>
                        <Select value={energyForm.mood} onValueChange={(value: EnergyLog['mood']) => setEnergyForm({...energyForm, mood: value})}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="stressed">Stressed</SelectItem>
                            <SelectItem value="tired">Tired</SelectItem>
                            <SelectItem value="neutral">Neutral</SelectItem>
                            <SelectItem value="good">Good</SelectItem>
                            <SelectItem value="great">Great</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="activities">Recent Activities</Label>
                        <Input
                          id="activities"
                          value={energyForm.activities}
                          onChange={(e) => setEnergyForm({...energyForm, activities: e.target.value})}
                          placeholder="e.g., workout, meal, work, rest"
                        />
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="energyNotes">Notes</Label>
                        <Textarea
                          id="energyNotes"
                          value={energyForm.notes}
                          onChange={(e) => setEnergyForm({...energyForm, notes: e.target.value})}
                          placeholder="How are you feeling? What might be affecting your energy?"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button onClick={addEnergy}>Add Energy Entry</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              {energyLogs.length === 0 ? (
                <div className="text-center py-8">
                  <Zap className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">No energy data yet. Start tracking your energy levels!</p>
                </div>
              ) : (
                <Table>
                  <TableCaption>Your energy level history</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date & Time</TableHead>
                      <TableHead>Energy Level</TableHead>
                      <TableHead>Mood</TableHead>
                      <TableHead>Activities</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {energyLogs
                      .sort((a, b) => b.date.getTime() - a.date.getTime())
                      .map((log) => (
                        <TableRow key={log.id}>
                          <TableCell>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              {log.date.toLocaleDateString()} {log.time}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{log.energyLevel}/10</span>
                              <Progress value={log.energyLevel * 10} className="w-20" />
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <div className={`w-2 h-2 rounded-full ${getMoodColor(log.mood)}`} />
                              <Badge variant="outline">{log.mood}</Badge>
                            </div>
                          </TableCell>
                          <TableCell>{log.activities || '-'}</TableCell>
                          <TableCell className="text-right">
                            <Button variant="outline" size="sm" onClick={() => deleteEnergy(log.id)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recovery" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Recovery Metrics</CardTitle>
                  <CardDescription>Track your recovery and overall wellness</CardDescription>
                </div>
                <Dialog open={isAddingRecovery} onOpenChange={setIsAddingRecovery}>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Log Recovery
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add Recovery Entry</DialogTitle>
                      <DialogDescription>Record your recovery metrics</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="recoveryDate">Date</Label>
                        <Input
                          id="recoveryDate"
                          type="date"
                          value={recoveryForm.date}
                          onChange={(e) => setRecoveryForm({...recoveryForm, date: e.target.value})}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="restingHeartRate">Resting Heart Rate</Label>
                          <Input
                            id="restingHeartRate"
                            type="number"
                            value={recoveryForm.restingHeartRate}
                            onChange={(e) => setRecoveryForm({...recoveryForm, restingHeartRate: parseInt(e.target.value) || 0})}
                          />
                        </div>
                        
                        <div className="grid gap-2">
                          <Label htmlFor="hydration">Water Intake (glasses)</Label>
                          <Input
                            id="hydration"
                            type="number"
                            value={recoveryForm.hydration}
                            onChange={(e) => setRecoveryForm({...recoveryForm, hydration: parseInt(e.target.value) || 0})}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="soreness">Soreness Level (1-10)</Label>
                          <Input
                            id="soreness"
                            type="number"
                            min="1"
                            max="10"
                            value={recoveryForm.soreness}
                            onChange={(e) => setRecoveryForm({...recoveryForm, soreness: parseInt(e.target.value) || 1})}
                          />
                        </div>
                        
                        <div className="grid gap-2">
                          <Label htmlFor="stressLevel">Stress Level (1-10)</Label>
                          <Input
                            id="stressLevel"
                            type="number"
                            min="1"
                            max="10"
                            value={recoveryForm.stressLevel}
                            onChange={(e) => setRecoveryForm({...recoveryForm, stressLevel: parseInt(e.target.value) || 1})}
                          />
                        </div>
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="recoveryFeeling">Overall Recovery Feeling</Label>
                        <Select value={recoveryForm.recoveryFeeling} onValueChange={(value: RecoveryMetric['recoveryFeeling']) => setRecoveryForm({...recoveryForm, recoveryFeeling: value})}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="very-poor">Very Poor</SelectItem>
                            <SelectItem value="poor">Poor</SelectItem>
                            <SelectItem value="fair">Fair</SelectItem>
                            <SelectItem value="good">Good</SelectItem>
                            <SelectItem value="excellent">Excellent</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="recoveryNotes">Notes</Label>
                        <Textarea
                          id="recoveryNotes"
                          value={recoveryForm.notes}
                          onChange={(e) => setRecoveryForm({...recoveryForm, notes: e.target.value})}
                          placeholder="How are you recovering? Any observations?"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button onClick={addRecovery}>Add Recovery Entry</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              {recoveryMetrics.length === 0 ? (
                <div className="text-center py-8">
                  <Heart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">No recovery data yet. Start monitoring your recovery!</p>
                </div>
              ) : (
                <Table>
                  <TableCaption>Your recovery metrics history</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Heart Rate</TableHead>
                      <TableHead>Soreness</TableHead>
                      <TableHead>Stress</TableHead>
                      <TableHead>Recovery Feeling</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recoveryMetrics
                      .sort((a, b) => b.date.getTime() - a.date.getTime())
                      .map((metric) => (
                        <TableRow key={metric.id}>
                          <TableCell>{metric.date.toLocaleDateString()}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1">
                              <Heart className="h-4 w-4 text-red-500" />
                              {metric.restingHeartRate} bpm
                            </div>
                          </TableCell>
                          <TableCell>{metric.soreness}/10</TableCell>
                          <TableCell>{metric.stressLevel}/10</TableCell>
                          <TableCell>
                            <Badge variant="outline">{metric.recoveryFeeling}</Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="outline" size="sm" onClick={() => deleteRecovery(metric.id)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}