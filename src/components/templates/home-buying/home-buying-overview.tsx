"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { CalendarIcon, CheckCircle2, Clock, DollarSign, Home, MapPin, Users, Star, AlertCircle, TrendingUp, FileText } from "lucide-react"
import { useHomeBuying, getHomeBuyingDisplayData } from "@/contexts/home-buying-context"

export function HomeBuyingOverview() {
  const { homeBuyingData } = useHomeBuying()
  const displayData = getHomeBuyingDisplayData(homeBuyingData)

  // Mock data for demonstration - in real app, this would come from context/database
  const [metrics] = useState({
    propertiesViewed: 12,
    propertiesShortlisted: 4,
    offersSubmitted: 2,
    inspectionsCompleted: 1,
    documentsUploaded: 8,
    daysSearching: 45,
    avgPropertyPrice: 485000,
    budgetUtilization: 87
  })

  const milestones = [
    { id: 1, title: "Get Pre-approved", completed: true, date: "2024-03-15" },
    { id: 2, title: "Find a Real Estate Agent", completed: true, date: "2024-03-20" },
    { id: 3, title: "Start House Hunting", completed: true, date: "2024-04-01" },
    { id: 4, title: "Make First Offer", completed: true, date: "2024-04-15" },
    { id: 5, title: "Get Offer Accepted", completed: false, date: null },
    { id: 6, title: "Complete Home Inspection", completed: false, date: null },
    { id: 7, title: "Finalize Mortgage", completed: false, date: null },
    { id: 8, title: "Close on Home", completed: false, date: null }
  ]

  const completedMilestones = milestones.filter(m => m.completed).length
  const totalMilestones = milestones.length
  const progressPercentage = (completedMilestones / totalMilestones) * 100

  const upcomingTasks = [
    { id: 1, title: "Schedule viewing for 123 Oak Street", priority: "high", dueDate: "2024-05-10" },
    { id: 2, title: "Submit counteroffer on Maple Ave property", priority: "high", dueDate: "2024-05-08" },
    { id: 3, title: "Research neighborhood schools", priority: "medium", dueDate: "2024-05-15" },
    { id: 4, title: "Get home insurance quotes", priority: "medium", dueDate: "2024-05-12" }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Home Buying Overview</h1>
        <p className="text-muted-foreground">Track your progress through the home buying journey</p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Days Until Move</CardTitle>
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{displayData.daysUntilMove > 0 ? displayData.daysUntilMove : 'TBD'}</div>
            <p className="text-xs text-muted-foreground">
              Target: {displayData.targetMoveDate.toLocaleDateString()}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Properties Viewed</CardTitle>
            <Home className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.propertiesViewed}</div>
            <p className="text-xs text-muted-foreground">
              {metrics.propertiesShortlisted} shortlisted
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Budget Progress</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.budgetUtilization}%</div>
            <p className="text-xs text-muted-foreground">
              Avg ${metrics.avgPropertyPrice.toLocaleString()}
            </p>
            <Progress value={metrics.budgetUtilization} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Offers Submitted</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.offersSubmitted}</div>
            <p className="text-xs text-muted-foreground">
              {metrics.inspectionsCompleted} inspection completed
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Progress Tracker */}
      <Card className="md:col-span-2 lg:col-span-3">
        <CardHeader>
          <CardTitle>Home Buying Progress</CardTitle>
          <CardDescription>Your journey to homeownership</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Progress</span>
            <span>{completedMilestones} of {totalMilestones} milestones complete</span>
          </div>
          <Progress value={progressPercentage} className="h-3" />
          
          <div className="space-y-3 mt-6">
            {milestones.map((milestone) => (
              <div key={milestone.id} className="flex items-center justify-between p-3 rounded-lg border">
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${milestone.completed ? 'bg-primary' : 'bg-muted-foreground'}`}></div>
                  <span className={`text-sm ${milestone.completed ? 'line-through text-muted-foreground' : ''}`}>
                    {milestone.title}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  {milestone.date && (
                    <span className="text-xs text-muted-foreground">
                      {new Date(milestone.date).toLocaleDateString()}
                    </span>
                  )}
                  {milestone.completed ? (
                    <Badge variant="secondary" className="text-xs">
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      Complete
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="text-xs">
                      Pending
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats and Upcoming Tasks */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
            <CardDescription>Your search activity</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span className="text-sm">Days Searching</span>
              <span className="font-medium">{metrics.daysSearching} days</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Documents Uploaded</span>
              <span className="font-medium">{metrics.documentsUploaded}/12</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Budget Range</span>
              <span className="font-medium">{displayData.budgetRange}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Preferred Area</span>
              <span className="font-medium">{displayData.preferredArea}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Tasks</CardTitle>
            <CardDescription>High priority items requiring attention</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {upcomingTasks.map((task) => (
              <div key={task.id} className={`p-3 rounded-lg border ${task.priority === 'high' ? 'border-destructive/20 bg-destructive/5' : 'border-accent/20 bg-accent/5'}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${task.priority === 'high' ? 'bg-destructive' : 'bg-accent'}`}></div>
                    <span className="text-sm font-medium">{task.title}</span>
                  </div>
                  <Badge variant={task.priority === 'high' ? 'destructive' : 'outline'} className="text-xs">
                    {task.priority === 'high' ? 'Urgent' : 'Medium'}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-1 ml-4">
                  Due: {new Date(task.dueDate).toLocaleDateString()}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}