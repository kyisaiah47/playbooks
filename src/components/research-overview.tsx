"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { useResearch, getResearchDisplayData } from "@/contexts/research-context"
import { 
  BookOpen, Users, Clock, Target, TrendingUp, 
  FileText, Calendar, DollarSign, Settings
} from "lucide-react"

export function ResearchOverview() {
  const { researchData, setWizardOpen } = useResearch()
  const displayData = getResearchDisplayData(researchData)

  const quickStats = [
    {
      label: "Project Type",
      value: displayData.projectType,
      icon: BookOpen,
      color: "text-foreground"
    },
    {
      label: "Research Field",
      value: researchData.researchField,
      icon: Target,
      color: "text-foreground"
    },
    {
      label: "Team Size",
      value: `${researchData.teamSize} member${researchData.teamSize !== 1 ? 's' : ''}`,
      icon: Users,
      color: "text-foreground"
    },
    {
      label: "Timeline",
      value: researchData.timeline,
      icon: Clock,
      color: "text-foreground"
    }
  ]

  const upcomingTasks = [
    { task: "Literature Review", due: "In 3 days", priority: "high" },
    { task: "Ethics Approval", due: "Next week", priority: "medium" },
    { task: "Data Collection Plan", due: "In 2 weeks", priority: "medium" },
    { task: "Budget Review", due: "End of month", priority: "low" }
  ]

  const recentActivity = [
    { activity: "Project setup completed", time: "Today" },
    { activity: "Research proposal drafted", time: "2 days ago" },
    { activity: "Team meeting scheduled", time: "1 week ago" }
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'destructive'
      case 'medium': return 'secondary'
      case 'low': return 'outline'
      default: return 'outline'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">{displayData.projectTitle}</h1>
          <p className="text-muted-foreground mt-1">
            {researchData.researchField} • {displayData.projectType}
          </p>
        </div>
        <Button variant="outline" onClick={() => setWizardOpen(true)}>
          <Settings className="mr-2 h-4 w-4" />
          Edit Project Details
        </Button>
      </div>

      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <TrendingUp className="mr-2 h-5 w-5" />
            Project Progress
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Overall Progress</span>
              <span>{Math.round(displayData.progressPercentage)}%</span>
            </div>
            <Progress value={displayData.progressPercentage} className="h-3" />
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Days Remaining</span>
              <span className="font-medium">{displayData.daysUntilDeadline}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Expected Completion</span>
              <span className="font-medium">{displayData.endDate.toLocaleDateString()}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {quickStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="font-semibold text-sm truncate">{stat.value}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Upcoming Tasks */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              Upcoming Tasks
            </CardTitle>
            <CardDescription>
              Important deadlines and milestones
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {upcomingTasks.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-2 rounded-lg border">
                <div className="flex-1">
                  <p className="text-sm font-medium">{item.task}</p>
                  <p className="text-xs text-muted-foreground">{item.due}</p>
                </div>
                <Badge variant={getPriorityColor(item.priority) as any} className="text-xs">
                  {item.priority}
                </Badge>
              </div>
            ))}
            <Button variant="outline" size="sm" className="w-full">
              View All Tasks
            </Button>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="mr-2 h-5 w-5" />
              Recent Activity
            </CardTitle>
            <CardDescription>
              Latest updates and changes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentActivity.map((item, index) => (
              <div key={index} className="flex items-center space-x-3 p-2">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm">{item.activity}</p>
                  <p className="text-xs text-muted-foreground">{item.time}</p>
                </div>
              </div>
            ))}
            <Button variant="outline" size="sm" className="w-full">
              View All Activity
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Research Details */}
      <Card>
        <CardHeader>
          <CardTitle>Research Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Research Objectives</h4>
              {researchData.objectives.length > 0 ? (
                <ul className="space-y-1">
                  {researchData.objectives.map((objective, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                      {objective}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-muted-foreground">No objectives defined yet</p>
              )}
            </div>

            <div>
              <h4 className="font-semibold mb-2">Expected Outcomes</h4>
              {researchData.expectedOutcomes.length > 0 ? (
                <ul className="space-y-1">
                  {researchData.expectedOutcomes.map((outcome, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-muted-foreground">No expected outcomes defined yet</p>
              )}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Methodology</h4>
            {researchData.methodology.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {researchData.methodology.map((method, index) => (
                  <Badge key={index} variant="secondary">{method}</Badge>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">No methodology selected yet</p>
            )}
          </div>

          {researchData.supervisor && (
            <div>
              <h4 className="font-semibold mb-2">Supervisor</h4>
              <p className="text-sm text-muted-foreground">{researchData.supervisor}</p>
            </div>
          )}

          {researchData.budget && researchData.budget > 0 && (
            <div>
              <h4 className="font-semibold mb-2 flex items-center">
                <DollarSign className="mr-1 h-4 w-4" />
                Budget
              </h4>
              <p className="text-sm text-muted-foreground">
                ${researchData.budget.toLocaleString()}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}