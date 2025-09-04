"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Timer, Play, Pause, Square, Clock, TrendingUp, AlertTriangle, Phone, Baby } from "lucide-react"
import { useBabyPlanning, getBabyPlanningDisplayData } from "@/contexts/baby-planning-context"

interface Contraction {
  id: string
  startTime: Date
  endTime?: Date
  duration?: number
  intensity: 1 | 2 | 3 | 4 | 5
  notes?: string
}

interface ContractionSession {
  id: string
  date: string
  startTime: string
  contractions: Contraction[]
  isActive: boolean
}

export function ContractionTimer() {
  const { babyPlanningData } = useBabyPlanning()
  const displayData = getBabyPlanningDisplayData(babyPlanningData)
  
  const [sessions, setSessions] = useState<ContractionSession[]>([
    {
      id: "1",
      date: "2024-01-15", 
      startTime: "10:30:00",
      isActive: false,
      contractions: [
        {
          id: "1",
          startTime: new Date("2024-01-15T10:30:00"),
          endTime: new Date("2024-01-15T10:31:30"),
          duration: 90,
          intensity: 3
        },
        {
          id: "2", 
          startTime: new Date("2024-01-15T10:45:00"),
          endTime: new Date("2024-01-15T10:46:45"),
          duration: 105,
          intensity: 4
        }
      ]
    }
  ])

  const [currentSession, setCurrentSession] = useState<ContractionSession | null>(null)
  const [activeContraction, setActiveContraction] = useState<Contraction | null>(null)
  const [contractionTimer, setContractionTimer] = useState(0)
  const [sessionTimer, setSessionTimer] = useState(0)
  const [intensity, setIntensity] = useState<1 | 2 | 3 | 4 | 5>(3)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null
    
    if (currentSession?.isActive) {
      interval = setInterval(() => {
        setSessionTimer(prev => prev + 1)
        if (activeContraction) {
          setContractionTimer(prev => prev + 1)
        }
      }, 1000)
    }
    
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [currentSession?.isActive, activeContraction])

  const startSession = () => {
    const now = new Date()
    const newSession: ContractionSession = {
      id: Date.now().toString(),
      date: now.toISOString().split('T')[0],
      startTime: now.toTimeString().split(' ')[0],
      contractions: [],
      isActive: true
    }
    
    setCurrentSession(newSession)
    setSessionTimer(0)
  }

  const startContraction = () => {
    if (!currentSession) return

    const now = new Date()
    const newContraction: Contraction = {
      id: Date.now().toString(),
      startTime: now,
      intensity: intensity
    }
    
    setActiveContraction(newContraction)
    setContractionTimer(0)
  }

  const endContraction = () => {
    if (!activeContraction || !currentSession) return

    const now = new Date()
    const completedContraction = {
      ...activeContraction,
      endTime: now,
      duration: contractionTimer
    }

    const updatedSession = {
      ...currentSession,
      contractions: [...currentSession.contractions, completedContraction]
    }
    
    setCurrentSession(updatedSession)
    setActiveContraction(null)
    setContractionTimer(0)
  }

  const endSession = () => {
    if (!currentSession) return

    if (activeContraction) {
      endContraction()
    }

    const completedSession = {
      ...currentSession,
      isActive: false
    }

    setSessions([completedSession, ...sessions])
    setCurrentSession(null)
    setSessionTimer(0)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const formatDuration = (seconds: number) => {
    if (seconds < 60) {
      return `${seconds}s`
    }
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const getContractionFrequency = (contractions: Contraction[]) => {
    if (contractions.length < 2) return null
    
    const intervals = []
    for (let i = 1; i < contractions.length; i++) {
      const prevStart = contractions[i - 1].startTime.getTime()
      const currentStart = contractions[i].startTime.getTime()
      intervals.push((currentStart - prevStart) / (1000 * 60)) // in minutes
    }
    
    const avgInterval = intervals.reduce((sum, interval) => sum + interval, 0) / intervals.length
    return Math.round(avgInterval * 10) / 10
  }

  const getAverageDuration = (contractions: Contraction[]) => {
    const completedContractions = contractions.filter(c => c.duration)
    if (completedContractions.length === 0) return null
    
    const total = completedContractions.reduce((sum, c) => sum + (c.duration || 0), 0)
    return Math.round(total / completedContractions.length)
  }

  const shouldCallDoctor = (contractions: Contraction[]) => {
    if (contractions.length < 3) return false
    
    const frequency = getContractionFrequency(contractions)
    const avgDuration = getAverageDuration(contractions)
    
    // 5-1-1 rule: contractions 5 minutes apart, lasting 1 minute, for 1 hour
    return (frequency && frequency <= 5) && (avgDuration && avgDuration >= 60)
  }

  const getIntensityLabel = (level: number) => {
    const labels = { 1: "Mild", 2: "Moderate", 3: "Strong", 4: "Very Strong", 5: "Severe" }
    return labels[level as keyof typeof labels]
  }

  const currentContractions = currentSession?.contractions || []
  const frequency = getContractionFrequency(currentContractions)
  const avgDuration = getAverageDuration(currentContractions)
  const callDoctor = shouldCallDoctor(currentContractions)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Contraction Timer</h2>
          <p className="text-muted-foreground">Track labor contractions and timing patterns</p>
        </div>
        <Badge variant="secondary" className="text-lg px-3 py-1">
          Week {displayData.currentWeek}
        </Badge>
      </div>

      {displayData.currentWeek < 37 && (
        <Alert>
          <Baby className="h-4 w-4" />
          <AlertDescription>
            You're not at full term yet. If you're experiencing regular contractions, contact your healthcare provider immediately.
          </AlertDescription>
        </Alert>
      )}

      {callDoctor && (
        <Alert className="border-destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            <strong>Contact your healthcare provider or hospital now!</strong> Your contractions are following the 5-1-1 pattern (5 minutes apart, lasting 1+ minutes). You may be in active labor.
          </AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Session Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatTime(sessionTimer)}</div>
            <p className="text-xs text-muted-foreground">
              {currentSession?.isActive ? "tracking active" : "no active session"}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Contractions</CardTitle>
            <Timer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentContractions.length}</div>
            <p className="text-xs text-muted-foreground">
              recorded this session
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Frequency</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{frequency ? `${frequency}m` : "N/A"}</div>
            <p className="text-xs text-muted-foreground">
              minutes apart
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Duration</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgDuration ? `${avgDuration}s` : "N/A"}</div>
            <p className="text-xs text-muted-foreground">
              contraction length
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Timer className="h-5 w-5" />
            {currentSession ? "Active Timer" : "Start Timing"}
          </CardTitle>
          <CardDescription>
            {currentSession ? "Track each contraction as it happens" : "Begin a new contraction timing session"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {currentSession ? (
            <div className="space-y-6">
              <div className="text-center space-y-4">
                {activeContraction ? (
                  <div>
                    <div className="text-6xl font-bold text-primary animate-pulse">
                      {formatTime(contractionTimer)}
                    </div>
                    <div className="text-muted-foreground">contraction in progress</div>
                    <div className="mt-4">
                      <Progress 
                        value={Math.min((contractionTimer / 120) * 100, 100)} 
                        className="h-3"
                      />
                      <div className="text-sm text-muted-foreground mt-2">
                        {contractionTimer < 60 ? "Building..." : contractionTimer < 120 ? "Strong contraction" : "Very long contraction"}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="text-4xl font-semibold text-muted-foreground">
                      {formatTime(sessionTimer)}
                    </div>
                    <div className="text-muted-foreground">session time</div>
                    <div className="text-sm text-muted-foreground mt-2">
                      {currentContractions.length} contractions recorded
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                {!activeContraction && (
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-sm font-medium">Contraction intensity:</span>
                    {[1, 2, 3, 4, 5].map(level => (
                      <Button
                        key={level}
                        variant={intensity === level ? "default" : "outline"}
                        size="sm"
                        onClick={() => setIntensity(level as 1|2|3|4|5)}
                      >
                        {level}
                      </Button>
                    ))}
                  </div>
                )}

                <div className="flex justify-center space-x-4">
                  {activeContraction ? (
                    <Button
                      size="lg"
                      onClick={endContraction}
                      className="px-8 py-4 text-lg"
                    >
                      <Square className="mr-2 h-5 w-5" />
                      End Contraction
                    </Button>
                  ) : (
                    <Button
                      size="lg"
                      onClick={startContraction}
                      className="px-8 py-4 text-lg"
                    >
                      <Play className="mr-2 h-5 w-5" />
                      Start Contraction
                    </Button>
                  )}

                  <Button
                    variant="outline"
                    onClick={endSession}
                  >
                    End Session
                  </Button>
                </div>
              </div>

              {currentContractions.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-semibold text-center">Recent Contractions</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {currentContractions.slice(-6).map((contraction, index) => (
                      <div key={contraction.id} className="p-3 bg-muted rounded-lg text-center">
                        <div className="font-semibold">
                          {formatDuration(contraction.duration || 0)}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {contraction.startTime.toTimeString().slice(0, 5)}
                        </div>
                        <Badge variant="secondary" className="text-xs mt-1">
                          {getIntensityLabel(contraction.intensity)}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {frequency && frequency <= 10 && (
                <Alert className="border-orange-200 bg-orange-50">
                  <Clock className="h-4 w-4" />
                  <AlertDescription>
                    Contractions are {frequency} minutes apart. {frequency <= 5 ? "This could indicate active labor." : "Monitor closely and prepare to contact your provider."}
                  </AlertDescription>
                </Alert>
              )}
            </div>
          ) : (
            <div className="text-center space-y-6">
              <div className="space-y-2">
                <div className="text-muted-foreground">
                  Ready to start timing contractions? Make sure you're in a comfortable position.
                </div>
                
                <div className="text-sm space-y-1">
                  <div className="font-medium">When to time contractions:</div>
                  <div className="text-muted-foreground space-y-1">
                    <div>• When contractions feel regular and consistent</div>
                    <div>• When you can't talk through them</div>
                    <div>• When they don't go away with rest or water</div>
                  </div>
                </div>
              </div>

              <Button size="lg" onClick={startSession} className="px-8 py-4 text-lg">
                <Timer className="mr-2 h-5 w-5" />
                Start Session
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <Tabs defaultValue="guide" className="w-full">
        <TabsList>
          <TabsTrigger value="guide">Labor Guide</TabsTrigger>
          <TabsTrigger value="history">Session History</TabsTrigger>
        </TabsList>

        <TabsContent value="guide" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  When to Call Your Provider
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0">
                      1
                    </div>
                    <div>
                      <div className="font-semibold">5-1-1 Rule</div>
                      <div className="text-sm text-muted-foreground">
                        Contractions 5 minutes apart, lasting 1 minute, for 1 hour
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0">
                      2
                    </div>
                    <div>
                      <div className="font-semibold">Water Breaks</div>
                      <div className="text-sm text-muted-foreground">
                        Sudden gush or steady leak of fluid
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0">
                      3
                    </div>
                    <div>
                      <div className="font-semibold">Bleeding</div>
                      <div className="text-sm text-muted-foreground">
                        More than light spotting or mucus plug
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0">
                      4
                    </div>
                    <div>
                      <div className="font-semibold">Decreased Movement</div>
                      <div className="text-sm text-muted-foreground">
                        Baby's movement patterns change significantly
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Labor Stages</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <div className="font-semibold">Early Labor</div>
                    <div className="text-sm text-muted-foreground">
                      Contractions 5-20 minutes apart, lasting 30-45 seconds
                    </div>
                  </div>
                  
                  <div>
                    <div className="font-semibold">Active Labor</div>
                    <div className="text-sm text-muted-foreground">
                      Contractions 3-5 minutes apart, lasting 45-60 seconds
                    </div>
                  </div>
                  
                  <div>
                    <div className="font-semibold">Transition</div>
                    <div className="text-sm text-muted-foreground">
                      Contractions 2-3 minutes apart, lasting 60-90 seconds
                    </div>
                  </div>
                  
                  <div>
                    <div className="font-semibold">Pushing Stage</div>
                    <div className="text-sm text-muted-foreground">
                      Urge to push, contractions may slow slightly
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Previous Sessions</CardTitle>
              <CardDescription>Your contraction timing history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sessions.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">
                    No sessions recorded yet. Start your first timing session above.
                  </p>
                ) : (
                  sessions.map((session) => {
                    const sessionFreq = getContractionFrequency(session.contractions)
                    const sessionAvgDuration = getAverageDuration(session.contractions)
                    
                    return (
                      <div key={session.id} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <div className="font-semibold">{session.date}</div>
                            <div className="text-sm text-muted-foreground">
                              Started at {session.startTime.slice(0, 5)}
                            </div>
                          </div>
                          <Badge variant={session.isActive ? "default" : "secondary"}>
                            {session.isActive ? "Active" : "Completed"}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <div className="font-medium">{session.contractions.length}</div>
                            <div className="text-muted-foreground">Contractions</div>
                          </div>
                          <div>
                            <div className="font-medium">
                              {sessionFreq ? `${sessionFreq}m` : "N/A"}
                            </div>
                            <div className="text-muted-foreground">Apart</div>
                          </div>
                          <div>
                            <div className="font-medium">
                              {sessionAvgDuration ? `${sessionAvgDuration}s` : "N/A"}
                            </div>
                            <div className="text-muted-foreground">Duration</div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}