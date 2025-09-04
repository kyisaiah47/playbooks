"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useFitnessJourney, getFitnessJourneyDisplayData } from "@/contexts/fitness-journey-context"
import { 
  Dumbbell, 
  Target, 
  TrendingUp, 
  Calendar, 
  Activity, 
  Heart, 
  Droplets, 
  Scale,
  Trophy,
  Clock,
  Flame,
  Users
} from "lucide-react"

export function FitnessJourneyOverview() {
  const { fitnessJourneyData } = useFitnessJourney()
  const displayData = getFitnessJourneyDisplayData(fitnessJourneyData)

  // Mock data for demonstration
  const mockStats = {
    currentStreak: 12,
    totalWorkouts: 48,
    averageWorkoutDuration: 52,
    caloriesBurned: 15420,
    weightChange: fitnessJourneyData.targetWeight ? fitnessJourneyData.weight - fitnessJourneyData.targetWeight : 0,
    weeklyProgress: 75,
    hydrationGoal: 85,
    sleepAverage: 7.2,
    restHeartRate: 58
  }

  const recentWorkouts = [
    { date: "Today", type: "Full Body Strength", duration: 45, calories: 320 },
    { date: "Yesterday", type: "Cardio HIIT", duration: 30, calories: 280 },
    { date: "2 days ago", type: "Upper Body", duration: 50, calories: 290 },
    { date: "3 days ago", type: "Yoga Flow", duration: 40, calories: 150 },
  ]

  const upcomingGoals = [
    { goal: "Run 5K under 25 minutes", progress: 60, daysLeft: 14 },
    { goal: "Bench press bodyweight", progress: 78, daysLeft: 21 },
    { goal: "Lose 5kg", progress: 40, daysLeft: 45 },
    { goal: "Complete 30-day yoga challenge", progress: 23, daysLeft: 7 },
  ]

  const quickActions = [
    { label: "Start Workout", icon: Dumbbell, action: "#workouts", variant: "default" as const },
    { label: "Log Meal", icon: Target, action: "#nutrition", variant: "outline" as const },
    { label: "Update Weight", icon: Scale, action: "#progress", variant: "outline" as const },
    { label: "Schedule Session", icon: Calendar, action: "#schedule", variant: "outline" as const },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold flex items-center">
          <Dumbbell className="mr-2 h-8 w-8" />
          Fitness Journey Overview
        </h1>
        <p className="text-muted-foreground">
          Track your progress and stay motivated on your fitness journey
        </p>
      </div>

      {/* Key Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
            <Flame className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockStats.currentStreak}</div>
            <p className="text-xs text-muted-foreground">consecutive days</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Workouts</CardTitle>
            <Activity className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockStats.totalWorkouts}</div>
            <p className="text-xs text-muted-foreground">this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Calories Burned</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockStats.caloriesBurned.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Workout</CardTitle>
            <Clock className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockStats.averageWorkoutDuration}</div>
            <p className="text-xs text-muted-foreground">minutes</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Jump right into your fitness routine</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {quickActions.map((action) => (
              <Button
                key={action.label}
                variant={action.variant}
                className="flex items-center gap-2"
                onClick={() => window.location.hash = action.action}
              >
                <action.icon className="h-4 w-4" />
                {action.label}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Progress Overview */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Weekly Progress</CardTitle>
            <CardDescription>
              {displayData.workoutsPerWeek} workouts per week goal
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Workouts Completed</span>
                <span>{Math.floor(mockStats.weeklyProgress / 25)}/{displayData.workoutsPerWeek}</span>
              </div>
              <Progress value={mockStats.weeklyProgress} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Hydration Goal</span>
                <span>{Math.floor(mockStats.hydrationGoal / 100 * parseInt(displayData.waterIntakeTarget))}/{displayData.waterIntakeTarget}</span>
              </div>
              <Progress value={mockStats.hydrationGoal} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Health Metrics</CardTitle>
            <CardDescription>Key health indicators</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Scale className="h-4 w-4 text-blue-600" />
                <span className="text-sm">Current Weight</span>
              </div>
              <span className="font-medium">{displayData.currentWeight}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-red-600" />
                <span className="text-sm">Resting HR</span>
              </div>
              <span className="font-medium">{mockStats.restHeartRate} bpm</span>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Droplets className="h-4 w-4 text-cyan-600" />
                <span className="text-sm">Daily Water</span>
              </div>
              <span className="font-medium">{displayData.waterIntakeTarget}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity and Goals */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Workouts</CardTitle>
            <CardDescription>Your latest training sessions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentWorkouts.map((workout, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
                  <div>
                    <p className="font-medium text-sm">{workout.type}</p>
                    <p className="text-xs text-muted-foreground">{workout.date}</p>
                  </div>
                  <div className="text-right text-xs text-muted-foreground">
                    <div>{workout.duration} min</div>
                    <div>{workout.calories} cal</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Goals</CardTitle>
            <CardDescription>Your current fitness objectives</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingGoals.slice(0, 3).map((goal, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-medium truncate pr-2">{goal.goal}</p>
                    <Badge variant="outline" className="text-xs">
                      {goal.daysLeft}d left
                    </Badge>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-muted-foreground mb-1">
                      <span>Progress</span>
                      <span>{goal.progress}%</span>
                    </div>
                    <Progress value={goal.progress} className="h-1.5" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Journey Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Your Fitness Journey</CardTitle>
          <CardDescription>
            Started {displayData.daysUntilTarget > 0 ? 
              `${Math.abs(displayData.daysUntilTarget - 180)} days ago` : 
              'recently'
            } • {displayData.primaryGoal} • {displayData.fitnessLevel}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{mockStats.totalWorkouts}</div>
              <div className="text-sm text-muted-foreground">Total Workouts</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{mockStats.currentStreak}</div>
              <div className="text-sm text-muted-foreground">Day Streak</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{displayData.hasPersonalTrainer ? 'Yes' : 'No'}</div>
              <div className="text-sm text-muted-foreground">Personal Trainer</div>
            </div>
          </div>
          
          {fitnessJourneyData.motivationalStatement && (
            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
              <div className="flex items-start gap-2">
                <Trophy className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm italic">{fitnessJourneyData.motivationalStatement}</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}