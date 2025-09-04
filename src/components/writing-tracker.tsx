"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  FileText, Plus, Target, Calendar, TrendingUp,
  Clock, CheckCircle, Edit, Trash2, MoreHorizontal
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface WritingGoal {
  id: string
  title: string
  targetWords: number
  currentWords: number
  deadline: Date
  status: 'active' | 'paused' | 'completed'
  section: string
}

interface WritingSession {
  id: string
  date: Date
  duration: number // minutes
  wordsWritten: number
  section: string
  notes: string
}

export function WritingTracker() {
  const [goals, setGoals] = useState<WritingGoal[]>([
    {
      id: '1',
      title: 'Literature Review Section',
      targetWords: 3000,
      currentWords: 1850,
      deadline: new Date('2024-02-15'),
      status: 'active',
      section: 'Literature Review'
    },
    {
      id: '2',
      title: 'Methodology Chapter',
      targetWords: 2500,
      currentWords: 800,
      deadline: new Date('2024-03-01'),
      status: 'active',
      section: 'Methodology'
    }
  ])

  const [sessions, setSessions] = useState<WritingSession[]>([
    {
      id: '1',
      date: new Date('2024-01-20'),
      duration: 90,
      wordsWritten: 450,
      section: 'Literature Review',
      notes: 'Focused on AI applications in research'
    },
    {
      id: '2',
      date: new Date('2024-01-18'),
      duration: 60,
      wordsWritten: 320,
      section: 'Methodology',
      notes: 'Outlined research design framework'
    }
  ])

  const totalWords = goals.reduce((sum, goal) => sum + goal.currentWords, 0)
  const totalTarget = goals.reduce((sum, goal) => sum + goal.targetWords, 0)
  const overallProgress = totalTarget > 0 ? (totalWords / totalTarget) * 100 : 0

  const recentSessions = sessions.sort((a, b) => b.date.getTime() - a.date.getTime()).slice(0, 5)
  const weeklyWords = sessions
    .filter(s => {
      const weekAgo = new Date()
      weekAgo.setDate(weekAgo.getDate() - 7)
      return s.date >= weekAgo
    })
    .reduce((sum, s) => sum + s.wordsWritten, 0)

  const getStatusColor = (status: WritingGoal['status']) => {
    switch (status) {
      case 'active': return 'default'
      case 'paused': return 'secondary'
      case 'completed': return 'outline'
      default: return 'secondary'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center">
            <FileText className="mr-2 h-8 w-8" />
            Writing Tracker
          </h1>
          <p className="text-muted-foreground mt-1">
            Monitor your writing progress and meet your deadlines
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Plus className="mr-2 h-4 w-4" />
            Log Session
          </Button>
          <Button>
            <Target className="mr-2 h-4 w-4" />
            Set Goal
          </Button>
        </div>
      </div>

      {/* Writing Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Writing Progress Overview</CardTitle>
          <CardDescription>Track your overall writing goals and achievements</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Overall Progress</span>
              <span>{totalWords.toLocaleString()} / {totalTarget.toLocaleString()} words ({Math.round(overallProgress)}%)</span>
            </div>
            <Progress value={overallProgress} className="h-3" />
          </div>
          <div className="grid grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold">{totalWords.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground">Total Words</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{weeklyWords.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground">This Week</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{goals.filter(g => g.status === 'active').length}</div>
              <div className="text-xs text-muted-foreground">Active Goals</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{sessions.length}</div>
              <div className="text-xs text-muted-foreground">Total Sessions</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Writing Goals */}
      <Card>
        <CardHeader>
          <CardTitle>Writing Goals</CardTitle>
          <CardDescription>Track progress toward your writing objectives</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {goals.map((goal) => {
            const progress = goal.targetWords > 0 ? (goal.currentWords / goal.targetWords) * 100 : 0
            const daysLeft = Math.ceil((goal.deadline.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
            
            return (
              <div key={goal.id} className="p-4 border rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold">{goal.title}</h4>
                      <Badge variant={getStatusColor(goal.status)}>{goal.status}</Badge>
                      <Badge variant="outline">{goal.section}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <Calendar className="mr-1 h-3 w-3" />
                        Due: {goal.deadline.toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <Clock className="mr-1 h-3 w-3" />
                        {daysLeft} days left
                      </span>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Goal
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{goal.currentWords.toLocaleString()} / {goal.targetWords.toLocaleString()} words ({Math.round(progress)}%)</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
              </div>
            )
          })}
        </CardContent>
      </Card>

      {/* Recent Writing Sessions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Writing Sessions</CardTitle>
          <CardDescription>Your latest writing activity</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {recentSessions.map((session) => (
            <div key={session.id} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium">{session.section}</span>
                  <Badge variant="outline">{session.wordsWritten} words</Badge>
                  <Badge variant="secondary">{session.duration} min</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{session.notes}</p>
                <div className="text-xs text-muted-foreground mt-1">
                  {session.date.toLocaleDateString()} • {Math.round(session.wordsWritten / (session.duration / 60))} words/hour
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Edit className="mr-2 h-4 w-4" />
                    Edit Session
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Add Session */}
      <Card>
        <CardHeader>
          <CardTitle>Log Writing Session</CardTitle>
          <CardDescription>Record your writing progress</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium">Words Written</label>
              <Input type="number" placeholder="0" className="mt-1" />
            </div>
            <div>
              <label className="text-sm font-medium">Duration (minutes)</label>
              <Input type="number" placeholder="0" className="mt-1" />
            </div>
            <div>
              <label className="text-sm font-medium">Section</label>
              <Input placeholder="e.g., Introduction" className="mt-1" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium">Notes</label>
            <Textarea placeholder="What did you work on today?" className="mt-1" />
          </div>
          <Button className="w-full">
            <Plus className="mr-2 h-4 w-4" />
            Log Session
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}