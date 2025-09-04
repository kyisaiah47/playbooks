"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Baby, Clock, Play, Pause, RotateCcw, TrendingUp, Calendar, Target, Heart, AlertTriangle } from "lucide-react"
import { useBabyPlanning, getBabyPlanningDisplayData } from "@/contexts/baby-planning-context"

interface KickSession {
  id: string
  date: string
  startTime: string
  endTime?: string
  kicks: Array<{
    time: string
    intensity: 'light' | 'medium' | 'strong'
  }>
  duration?: number
  completed: boolean
}

export function KickCounter() {
  const { babyPlanningData } = useBabyPlanning()
  const displayData = getBabyPlanningDisplayData(babyPlanningData)
  
  const [sessions, setSessions] = useState<KickSession[]>([
    {
      id: "1",
      date: "2024-01-15",
      startTime: "14:30:00",
      endTime: "14:52:00",
      kicks: [
        { time: "14:32:15", intensity: "medium" },
        { time: "14:35:42", intensity: "strong" },
        { time: "14:38:10", intensity: "light" },
        { time: "14:41:33", intensity: "medium" },
        { time: "14:44:58", intensity: "strong" },
        { time: "14:47:22", intensity: "medium" },
        { time: "14:49:45", intensity: "light" },
        { time: "14:51:18", intensity: "medium" },
        { time: "14:52:30", intensity: "strong" },
        { time: "14:53:55", intensity: "medium" }
      ],
      duration: 22,
      completed: true
    }
  ])
  
  const [currentSession, setCurrentSession] = useState<KickSession | null>(null)
  const [isActive, setIsActive] = useState(false)
  const [timer, setTimer] = useState(0)
  const [kickIntensity, setKickIntensity] = useState<'light' | 'medium' | 'strong'>('medium')

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null
    
    if (isActive && currentSession) {
      interval = setInterval(() => {
        setTimer(prev => prev + 1)
      }, 1000)
    } else if (!isActive && timer !== 0) {
      if (interval) clearInterval(interval)
    }
    
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isActive, timer, currentSession])

  const startSession = () => {
    const now = new Date()
    const newSession: KickSession = {
      id: Date.now().toString(),
      date: now.toISOString().split('T')[0],
      startTime: now.toTimeString().split(' ')[0],
      kicks: [],
      completed: false
    }
    
    setCurrentSession(newSession)
    setIsActive(true)
    setTimer(0)
  }

  const recordKick = () => {
    if (!currentSession) return

    const now = new Date()
    const kick = {
      time: now.toTimeString().split(' ')[0],
      intensity: kickIntensity
    }

    const updatedSession = {
      ...currentSession,
      kicks: [...currentSession.kicks, kick]
    }
    
    setCurrentSession(updatedSession)

    // Auto-complete if we reach 10 kicks
    if (updatedSession.kicks.length >= 10) {
      completeSession(updatedSession)
    }
  }

  const completeSession = (sessionToComplete = currentSession) => {
    if (!sessionToComplete) return

    const now = new Date()
    const completedSession = {
      ...sessionToComplete,
      endTime: now.toTimeString().split(' ')[0],
      duration: Math.floor(timer / 60),
      completed: true
    }

    setSessions([completedSession, ...sessions])
    setCurrentSession(null)
    setIsActive(false)
    setTimer(0)
  }

  const resetSession = () => {
    setCurrentSession(null)
    setIsActive(false)
    setTimer(0)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const getKickGoal = () => {
    // Standard recommendation: 10 kicks in 2 hours or less
    return { target: 10, timeLimit: 120 }
  }

  const getTodaySessions = () => {
    const today = new Date().toISOString().split('T')[0]
    return sessions.filter(s => s.date === today)
  }

  const getAverageKickTime = () => {
    const completedSessions = sessions.filter(s => s.completed && s.duration)
    if (completedSessions.length === 0) return 0
    
    const total = completedSessions.reduce((sum, s) => sum + (s.duration || 0), 0)
    return Math.round(total / completedSessions.length)
  }

  const kickGoal = getKickGoal()
  const todaySessions = getTodaySessions()
  const averageTime = getAverageKickTime()
  const currentKickCount = currentSession?.kicks.length || 0
  const progress = Math.min((currentKickCount / kickGoal.target) * 100, 100)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Baby Kick Counter</h2>
          <p className="text-muted-foreground">Track your baby's movements and activity patterns</p>
        </div>
        <Badge variant="secondary" className="text-lg px-3 py-1">
          Week {displayData.currentWeek}
        </Badge>
      </div>

      {displayData.currentWeek < 18 && (
        <Alert>
          <Baby className="h-4 w-4" />
          <AlertDescription>
            Baby movements typically become noticeable around 18-25 weeks. You may not feel regular kicks yet.
          </AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Sessions</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{todaySessions.length}</div>
            <p className="text-xs text-muted-foreground">
              kick counting sessions
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{averageTime}min</div>
            <p className="text-xs text-muted-foreground">
              to reach 10 kicks
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{sessions.length}</div>
            <p className="text-xs text-muted-foreground">
              completed sessions
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5" />
            {currentSession ? "Active Session" : "Start Kick Counting"}
          </CardTitle>
          <CardDescription>
            {currentSession 
              ? `Goal: ${kickGoal.target} kicks in ${kickGoal.timeLimit} minutes or less`
              : "Begin a new kick counting session to monitor baby's activity"
            }
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {currentSession ? (
            <div className="space-y-6">
              <div className="text-center space-y-4">
                <div className="text-6xl font-bold text-primary">
                  {currentKickCount}
                </div>
                <div className="text-muted-foreground">
                  kicks of {kickGoal.target} target
                </div>
                <Progress value={progress} className="h-3" />
              </div>

              <div className="flex items-center justify-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-semibold">{formatTime(timer)}</div>
                  <div className="text-sm text-muted-foreground">elapsed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-semibold">{Math.max(0, kickGoal.timeLimit - Math.floor(timer / 60))}</div>
                  <div className="text-sm text-muted-foreground">minutes left</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-sm font-medium">Kick intensity:</span>
                  {(['light', 'medium', 'strong'] as const).map(intensity => (
                    <Button
                      key={intensity}
                      variant={kickIntensity === intensity ? "default" : "outline"}
                      size="sm"
                      onClick={() => setKickIntensity(intensity)}
                    >
                      {intensity}
                    </Button>
                  ))}
                </div>

                <div className="flex items-center justify-center space-x-4">
                  <Button
                    size="lg"
                    onClick={recordKick}
                    className="px-8 py-4 text-lg"
                  >
                    <Baby className="mr-2 h-5 w-5" />
                    Record Kick
                  </Button>
                  
                  <Button
                    variant="outline"
                    onClick={() => setIsActive(!isActive)}
                  >
                    {isActive ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </Button>
                  
                  <Button
                    variant="outline"
                    onClick={resetSession}
                  >
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex justify-center">
                  <Button
                    variant="secondary"
                    onClick={() => completeSession()}
                    disabled={currentKickCount === 0}
                  >
                    Complete Session
                  </Button>
                </div>
              </div>

              {currentSession.kicks.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-semibold text-center">Recent Kicks</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {currentSession.kicks.slice(-5).map((kick, index) => (
                      <Badge
                        key={index}
                        variant={kick.intensity === 'strong' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {kick.time.slice(0, 5)} - {kick.intensity}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {timer > kickGoal.timeLimit * 60 && currentKickCount < kickGoal.target && (
                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    It's taking longer than usual to reach 10 kicks. Consider contacting your healthcare provider if this becomes a pattern.
                  </AlertDescription>
                </Alert>
              )}
            </div>
          ) : (
            <div className="text-center space-y-4">
              <div className="text-muted-foreground">
                Ready to start counting? Find a quiet time when baby is usually active.
              </div>
              
              <div className="space-y-2">
                <div className="text-sm font-medium">Best times to count:</div>
                <div className="flex justify-center space-x-4 text-sm text-muted-foreground">
                  <span>• After meals</span>
                  <span>• Evening hours</span>
                  <span>• When lying on your side</span>
                </div>
              </div>

              <Button size="lg" onClick={startSession} className="px-8 py-4 text-lg">
                <Play className="mr-2 h-5 w-5" />
                Start Counting
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <Tabs defaultValue="recent" className="w-full">
        <TabsList>
          <TabsTrigger value="recent">Recent Sessions</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
        </TabsList>

        <TabsContent value="recent" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Sessions</CardTitle>
              <CardDescription>Your latest kick counting sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sessions.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">
                    No sessions recorded yet. Start your first kick counting session above.
                  </p>
                ) : (
                  sessions.slice(0, 5).map((session) => (
                    <div key={session.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <div className="font-semibold">{session.kicks.length} kicks</div>
                        <div className="text-sm text-muted-foreground">
                          {session.date} • {session.startTime.slice(0, 5)}
                          {session.endTime && ` - ${session.endTime.slice(0, 5)}`}
                        </div>
                      </div>
                      
                      <div className="text-right space-y-1">
                        {session.duration && (
                          <div className="text-sm font-medium">{session.duration} minutes</div>
                        )}
                        <Badge variant={session.completed ? "default" : "secondary"}>
                          {session.completed ? "Completed" : "In Progress"}
                        </Badge>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Activity Patterns
                </CardTitle>
                <CardDescription>When baby is most active</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{averageTime || "N/A"}</div>
                    <p className="text-sm text-muted-foreground">Average time to 10 kicks</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Sessions completed on time</span>
                      <span className="font-medium">
                        {sessions.filter(s => s.completed && (s.duration || 0) <= kickGoal.timeLimit).length}/{sessions.filter(s => s.completed).length}
                      </span>
                    </div>
                    <Progress 
                      value={sessions.length > 0 
                        ? (sessions.filter(s => s.completed && (s.duration || 0) <= kickGoal.timeLimit).length / sessions.filter(s => s.completed).length) * 100 
                        : 0
                      }
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Movement Quality</CardTitle>
                <CardDescription>Kick intensity distribution</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {['light', 'medium', 'strong'].map(intensity => {
                    const count = sessions.reduce((total, session) => 
                      total + session.kicks.filter(kick => kick.intensity === intensity).length, 0
                    )
                    const totalKicks = sessions.reduce((total, session) => total + session.kicks.length, 0)
                    const percentage = totalKicks > 0 ? (count / totalKicks) * 100 : 0

                    return (
                      <div key={intensity} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="capitalize">{intensity} kicks</span>
                          <span>{count} ({Math.round(percentage)}%)</span>
                        </div>
                        <Progress value={percentage} />
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}