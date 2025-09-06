"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Activity,
  Target,
  TrendingUp,
  Calendar,
  Zap,
  Trophy,
  Plus,
  Weight
} from "lucide-react"
import { useFitnessJourney } from "@/contexts/fitness-journey-context"

export function FitnessJourneyOverview() {
  const { data } = useFitnessJourney()
  
  // Calculate fitness-specific metrics
  const [metrics, setMetrics] = useState({
    currentWeight: 0,
    goalWeight: 0,
    weightProgress: 0,
    workoutStreak: 0,
    completedWorkouts: 0,
    totalWorkouts: 0,
    weeklyGoal: 5,
    caloriesPerDay: 0,
    averageCalories: 2000
  })

  useEffect(() => {
    // Load data from localStorage for different fitness areas
    const workouts = JSON.parse(localStorage.getItem('fitness-journey-workouts') || '[]')
    const weightLogs = JSON.parse(localStorage.getItem('fitness-journey-weight-logs') || '[]')
    const goals = JSON.parse(localStorage.getItem('fitness-journey-goals') || '[]')
    const nutrition = JSON.parse(localStorage.getItem('fitness-journey-nutrition') || '[]')
    
    const completedWorkouts = workouts.filter((w: any) => w.status === 'completed').length
    const currentWeight = weightLogs.length > 0 ? weightLogs[weightLogs.length - 1].weight : 0
    const goalWeight = goals.find((g: any) => g.type === 'weight')?.target || 0
    const weightProgress = currentWeight > 0 && goalWeight > 0 ? 
      Math.abs(((currentWeight - (goals.find((g: any) => g.type === 'weight')?.startWeight || currentWeight)) / 
      (goalWeight - (goals.find((g: any) => g.type === 'weight')?.startWeight || currentWeight))) * 100) : 0
    
    // Calculate streak (simplified - consecutive days with workouts)
    const today = new Date()
    let streak = 0
    for (let i = 0; i < 30; i++) {
      const date = new Date(today)
      date.setDate(date.getDate() - i)
      const dateStr = date.toDateString()
      const hasWorkout = workouts.some((w: any) => 
        new Date(w.date).toDateString() === dateStr && w.status === 'completed'
      )
      if (hasWorkout) {
        streak++
      } else if (i > 0) {
        break
      }
    }
    
    const todaysNutrition = nutrition.filter((n: any) => 
      new Date(n.date).toDateString() === today.toDateString()
    )
    const todaysCalories = todaysNutrition.reduce((sum: number, n: any) => sum + n.calories, 0)
    
    setMetrics({
      currentWeight,
      goalWeight,
      weightProgress: Math.min(100, Math.max(0, weightProgress)),
      workoutStreak: streak,
      completedWorkouts,
      totalWorkouts: workouts.length,
      weeklyGoal: 5,
      caloriesPerDay: todaysCalories,
      averageCalories: 2000
    })
  }, [])

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Fitness Journey Dashboard</h1>
          <p className="text-muted-foreground">Track your progress and key milestones</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Quick Log
        </Button>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Weight Progress</CardTitle>
            <Weight className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.weightProgress.toFixed(1)}%</div>
            <Progress value={metrics.weightProgress} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-1">
              {metrics.currentWeight}lbs → {metrics.goalWeight}lbs
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Workout Streak</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.workoutStreak}</div>
            <p className="text-xs text-muted-foreground">consecutive days</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Workouts Completed</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.completedWorkouts}</div>
            <p className="text-xs text-muted-foreground">out of {metrics.totalWorkouts} total</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Calories</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.caloriesPerDay}</div>
            <p className="text-xs text-muted-foreground">of {metrics.averageCalories} target</p>
          </CardContent>
        </Card>
      </div>

      {/* Status Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest workouts and achievements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-sm">Completed morning run - 3 miles</span>
                <Badge variant="secondary">Today</Badge>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm">Hit weekly workout goal early!</span>
                <Badge variant="outline">Yesterday</Badge>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span className="text-sm">New personal record on bench press</span>
                <Badge variant="outline">2 days ago</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Workouts</CardTitle>
            <CardDescription>What's scheduled next</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Upper body strength training</span>
                <Badge variant="outline">Tomorrow</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">5K interval run</span>
                <Badge variant="outline">Saturday</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Yoga recovery session</span>
                <Badge variant="outline">Sunday</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks for your fitness journey</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <Activity className="h-6 w-6" />
              <span className="text-sm">Log Workout</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <Weight className="h-6 w-6" />
              <span className="text-sm">Record Weight</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <Zap className="h-6 w-6" />
              <span className="text-sm">Track Nutrition</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <Target className="h-6 w-6" />
              <span className="text-sm">Set New Goal</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}