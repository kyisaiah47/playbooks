"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  FileText,
  DollarSign,
  Calendar,
  Users,
  CheckCircle2,
  AlertCircle,
  Clock,
  TrendingUp
} from "lucide-react"
import { useDivorceCoordination } from "@/contexts/divorce-coordination-context"

export function DivorceCoordinationOverview() {
  const { data } = useDivorceCoordination()
  
  const [metrics, setMetrics] = useState({
    totalProgress: 0,
    documentsCompleted: 0,
    assetsValued: 0,
    custodyArranged: 0,
    financialPlanningDone: 0,
    communicationLogged: 0,
    upcomingDeadlines: 0,
    budgetUsed: 0,
  })

  useEffect(() => {
    // Calculate metrics from localStorage data
    const documents = JSON.parse(localStorage.getItem('divorce-coordination-legal-documents') || '[]')
    const assets = JSON.parse(localStorage.getItem('divorce-coordination-asset-division') || '[]')
    const custody = JSON.parse(localStorage.getItem('divorce-coordination-child-custody') || '[]')
    const financial = JSON.parse(localStorage.getItem('divorce-coordination-financial-planning') || '[]')
    const communications = JSON.parse(localStorage.getItem('divorce-coordination-communication-log') || '[]')

    const documentsCompleted = documents.filter((doc: any) => doc.status === 'completed').length
    const assetsValued = assets.filter((asset: any) => asset.status === 'completed').length
    const custodyArranged = custody.filter((item: any) => item.status === 'completed').length
    const financialDone = financial.filter((item: any) => item.status === 'completed').length

    const totalItems = documents.length + assets.length + custody.length + financial.length
    const completedItems = documentsCompleted + assetsValued + custodyArranged + financialDone
    const totalProgress = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0

    // Count upcoming deadlines (next 7 days)
    const nextWeek = new Date()
    nextWeek.setDate(nextWeek.getDate() + 7)
    const upcomingDeadlines = [...documents, ...custody, ...financial].filter((item: any) => 
      item.deadline && new Date(item.deadline) <= nextWeek && new Date(item.deadline) >= new Date()
    ).length

    setMetrics({
      totalProgress,
      documentsCompleted,
      assetsValued,
      custodyArranged,
      financialPlanningDone: financialDone,
      communicationLogged: communications.length,
      upcomingDeadlines,
      budgetUsed: 0, // Will be calculated from financial planning
    })
  }, [])

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Divorce Coordination Dashboard</h1>
          <p className="text-muted-foreground">Track your divorce process progress and key milestones</p>
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
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.totalProgress}%</div>
            <Progress value={metrics.totalProgress} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Documents Done</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.documentsCompleted}</div>
            <p className="text-xs text-muted-foreground">legal documents completed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Assets Reviewed</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.assetsValued}</div>
            <p className="text-xs text-muted-foreground">assets valued and divided</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Deadlines</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.upcomingDeadlines}</div>
            <p className="text-xs text-muted-foreground">due in next 7 days</p>
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
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-sm">Financial disclosure submitted</span>
                <Badge variant="secondary">Today</Badge>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm">Property appraisal completed</span>
                <Badge variant="outline">Yesterday</Badge>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span className="text-sm">Custody schedule discussion held</span>
                <Badge variant="outline">2 days ago</Badge>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full" />
                <span className="text-sm">Attorney meeting scheduled</span>
                <Badge variant="outline">3 days ago</Badge>
              </div>
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
              <div className="flex items-center justify-between">
                <span className="text-sm">Submit retirement account statements</span>
                <Badge variant="destructive">Due Tomorrow</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Mediation session preparation</span>
                <Badge variant="secondary">Due in 3 days</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Child custody evaluation</span>
                <Badge variant="outline">Due in 5 days</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Review settlement proposal</span>
                <Badge variant="outline">Due in 1 week</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks for your divorce coordination</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <FileText className="h-6 w-6" />
              <span className="text-sm">Add Document</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <DollarSign className="h-6 w-6" />
              <span className="text-sm">Log Asset</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <Users className="h-6 w-6" />
              <span className="text-sm">Update Custody</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <Calendar className="h-6 w-6" />
              <span className="text-sm">Schedule Meeting</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}