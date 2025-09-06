"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Target,
  DollarSign,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Calendar,
  FileText,
  Users,
  ShoppingCart,
  Settings
} from "lucide-react"
import { useSmallBusiness } from "@/contexts/small-business-context"

export function SmallBusinessOverview() {
  const { data } = useSmallBusiness()
  
  const [metrics, setMetrics] = useState({
    totalProgress: 0,
    completedTasks: 0,
    pendingLicenses: 0,
    budgetUsed: 0,
    launchReadiness: 0,
    upcomingDeadlines: 0,
  })

  useEffect(() => {
    // Calculate metrics from localStorage data
    const businessPlans = JSON.parse(localStorage.getItem('small-business-business-planning-items') || '[]')
    const legalItems = JSON.parse(localStorage.getItem('small-business-legal-compliance-items') || '[]')
    const financialItems = JSON.parse(localStorage.getItem('small-business-financial-management-items') || '[]')
    const marketingItems = JSON.parse(localStorage.getItem('small-business-marketing-launch-items') || '[]')
    const operationsItems = JSON.parse(localStorage.getItem('small-business-operations-setup-items') || '[]')

    const allTasks = [...businessPlans, ...legalItems, ...financialItems, ...marketingItems, ...operationsItems]
    const completedTasks = allTasks.filter(task => task.status === 'completed').length
    const totalTasks = allTasks.length

    const pendingLicenses = legalItems.filter(item => item.type === 'license' && item.status !== 'completed').length
    
    const budgetItems = financialItems.filter(item => item.amount && item.status === 'completed')
    const budgetUsed = budgetItems.reduce((total, item) => total + (item.amount || 0), 0)

    const upcomingDeadlines = allTasks.filter(task => {
      if (!task.dueDate) return false
      const dueDate = new Date(task.dueDate)
      const now = new Date()
      const daysDiff = (dueDate.getTime() - now.getTime()) / (1000 * 3600 * 24)
      return daysDiff > 0 && daysDiff <= 7
    }).length

    setMetrics({
      totalProgress: totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0,
      completedTasks,
      pendingLicenses,
      budgetUsed,
      launchReadiness: Math.min(100, Math.round((completedTasks / Math.max(totalTasks, 1)) * 100)),
      upcomingDeadlines,
    })
  }, [])

  const recentActivity = [
    { text: "Business plan template created", time: "2 hours ago", type: "success" },
    { text: "EIN application submitted", time: "1 day ago", type: "pending" },
    { text: "Marketing budget allocated", time: "2 days ago", type: "success" },
    { text: "Logo design completed", time: "3 days ago", type: "success" },
  ]

  const upcomingTasks = [
    { text: "Submit business license application", due: "Due in 3 days", priority: "high" },
    { text: "Open business bank account", due: "Due next week", priority: "medium" },
    { text: "Finalize website design", due: "Due in 5 days", priority: "medium" },
    { text: "Set up accounting system", due: "Due next week", priority: "low" },
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Business Launch Dashboard</h1>
          <p className="text-muted-foreground">Track your progress and key milestones</p>
        </div>
        <Button>
          Quick Add Task
        </Button>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.totalProgress}%</div>
            <Progress value={metrics.totalProgress} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tasks Completed</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.completedTasks}</div>
            <p className="text-xs text-muted-foreground">milestones reached</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Licenses</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.pendingLicenses}</div>
            <p className="text-xs text-muted-foreground">require attention</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Budget Spent</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${metrics.budgetUsed.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">total invested</p>
          </CardContent>
        </Card>
      </div>

      {/* Status Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest updates and progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === 'success' ? 'bg-green-500' : 
                    activity.type === 'pending' ? 'bg-yellow-500' : 'bg-blue-500'
                  }`} />
                  <span className="text-sm flex-1">{activity.text}</span>
                  <Badge variant="secondary">{activity.time}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Tasks</CardTitle>
            <CardDescription>What needs attention next</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingTasks.map((task, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm flex-1">{task.text}</span>
                  <div className="flex items-center gap-2">
                    <Badge variant={
                      task.priority === 'high' ? 'destructive' :
                      task.priority === 'medium' ? 'secondary' : 'outline'
                    }>
                      {task.due}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Launch Readiness */}
      <Card>
        <CardHeader>
          <CardTitle>Launch Readiness Score</CardTitle>
          <CardDescription>How ready is your business for launch?</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Business Planning</span>
              <span className="text-sm text-muted-foreground">85%</span>
            </div>
            <Progress value={85} />
            
            <div className="flex items-center justify-between">
              <span>Legal Compliance</span>
              <span className="text-sm text-muted-foreground">60%</span>
            </div>
            <Progress value={60} />
            
            <div className="flex items-center justify-between">
              <span>Financial Setup</span>
              <span className="text-sm text-muted-foreground">75%</span>
            </div>
            <Progress value={75} />
            
            <div className="flex items-center justify-between">
              <span>Marketing Preparation</span>
              <span className="text-sm text-muted-foreground">40%</span>
            </div>
            <Progress value={40} />
            
            <div className="flex items-center justify-between">
              <span>Operations Setup</span>
              <span className="text-sm text-muted-foreground">55%</span>
            </div>
            <Progress value={55} />
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks for your business launch</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <Calendar className="h-6 w-6" />
              <span className="text-sm">Schedule Meeting</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <FileText className="h-6 w-6" />
              <span className="text-sm">Add License</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <DollarSign className="h-6 w-6" />
              <span className="text-sm">Track Expense</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <Users className="h-6 w-6" />
              <span className="text-sm">Add Contact</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}