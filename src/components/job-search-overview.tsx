"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { useJobSearch, getJobSearchDisplayData } from "@/contexts/job-search-context"
import {
  Briefcase,
  FileText,
  Users,
  TrendingUp,
  Calendar,
  Target,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowUpRight,
  Plus,
  MapPin,
  DollarSign
} from "lucide-react"

export function JobSearchOverview() {
  const { jobSearchData } = useJobSearch()
  const displayData = getJobSearchDisplayData(jobSearchData)
  
  // Mock data for demonstration - in a real app, this would come from the context
  const [stats] = useState({
    applicationsThisWeek: 3,
    totalApplications: 12,
    interviews: 2,
    offers: 0,
    responses: 4,
    responseRate: 33
  })

  const [recentActivities] = useState([
    { id: 1, type: "application", company: "TechCorp", position: "Senior Developer", date: "2 hours ago", status: "submitted" },
    { id: 2, type: "interview", company: "StartupX", position: "Frontend Engineer", date: "Yesterday", status: "completed" },
    { id: 3, type: "networking", contact: "Sarah Johnson", company: "BigTech", date: "3 days ago", status: "connected" },
    { id: 4, type: "offer", company: "InnovateInc", position: "Full Stack Dev", date: "1 week ago", status: "pending" }
  ])

  const weekProgress = (stats.applicationsThisWeek / displayData.weeklyTarget) * 100

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold flex items-center">
          <Briefcase className="mr-2 h-8 w-8" />
          Job Search Dashboard
        </h1>
        <p className="text-muted-foreground">
          Track your progress towards landing your next role as a {displayData.targetRole} in {displayData.industry}
        </p>
      </div>

      {/* Quick Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Week</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.applicationsThisWeek}</div>
            <div className="text-xs text-muted-foreground">
              of {displayData.weeklyTarget} applications
            </div>
            <Progress value={weekProgress} className="mt-2" />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalApplications}</div>
            <p className="text-xs text-muted-foreground">
              +{stats.applicationsThisWeek} from last week
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.responseRate}%</div>
            <p className="text-xs text-muted-foreground">
              {stats.responses} of {stats.totalApplications} applications
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Interviews</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.interviews}</div>
            <p className="text-xs text-muted-foreground">
              {stats.offers} offer{stats.offers !== 1 ? 's' : ''} received
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Search Timeline */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="mr-2 h-5 w-5" />
              Search Timeline
            </CardTitle>
            <CardDescription>
              Your job search journey progress
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium">Target End Date</p>
                <p className="text-sm text-muted-foreground">
                  {displayData.searchEndDate.toLocaleDateString()}
                </p>
              </div>
              <Badge variant="outline">
                {displayData.daysUntilTarget} days left
              </Badge>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Timeline Progress</span>
                <span>25%</span>
              </div>
              <Progress value={25} />
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium">Experience Level</p>
                <p className="text-muted-foreground">{displayData.experienceLevel}</p>
              </div>
              <div>
                <p className="font-medium">Work Type</p>
                <p className="text-muted-foreground">{displayData.workTypeDisplay}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Current Goals */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="mr-2 h-5 w-5" />
              Current Goals
            </CardTitle>
            <CardDescription>
              Your search preferences and targets
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Location</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {displayData.locationsDisplay}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Salary Range</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {displayData.salaryRange}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Target className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Weekly Target</span>
                </div>
                <Badge variant="secondary">
                  {displayData.weeklyTarget} applications
                </Badge>
              </div>
            </div>
            
            <div className="pt-2">
              <Button variant="outline" size="sm" className="w-full">
                <ArrowUpRight className="mr-2 h-4 w-4" />
                View Full Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Recent Activity
              </span>
              <Button variant="outline" size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Add Activity
              </Button>
            </CardTitle>
            <CardDescription>
              Your latest job search activities and updates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => {
                const getActivityIcon = () => {
                  switch (activity.type) {
                    case "application":
                      return <FileText className="h-4 w-4" />
                    case "interview":
                      return <Users className="h-4 w-4" />
                    case "networking":
                      return <Users className="h-4 w-4" />
                    case "offer":
                      return <CheckCircle className="h-4 w-4 text-green-600" />
                    default:
                      return <AlertCircle className="h-4 w-4" />
                  }
                }

                const getStatusColor = () => {
                  switch (activity.status) {
                    case "completed":
                      return "bg-green-100 text-green-800 border-green-200"
                    case "pending":
                      return "bg-yellow-100 text-yellow-800 border-yellow-200"
                    case "submitted":
                      return "bg-blue-100 text-blue-800 border-blue-200"
                    default:
                      return "bg-gray-100 text-gray-800 border-gray-200"
                  }
                }

                return (
                  <div key={activity.id} className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        {getActivityIcon()}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium">
                          {activity.type === "networking" 
                            ? `Connected with ${activity.contact}` 
                            : `${activity.position} at ${activity.company}`
                          }
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {activity.company && activity.type === "networking" && `at ${activity.company} • `}
                          {activity.date}
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline" className={getStatusColor()}>
                      {activity.status}
                    </Badge>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Common tasks to keep your job search moving forward
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <FileText className="h-5 w-5 mb-2" />
              <span className="font-medium">Add Application</span>
              <span className="text-xs text-muted-foreground">Log a new job application</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <Users className="h-5 w-5 mb-2" />
              <span className="font-medium">Schedule Interview</span>
              <span className="text-xs text-muted-foreground">Prepare for upcoming interviews</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <Target className="h-5 w-5 mb-2" />
              <span className="font-medium">Update Goals</span>
              <span className="text-xs text-muted-foreground">Adjust your search criteria</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <TrendingUp className="h-5 w-5 mb-2" />
              <span className="font-medium">View Analytics</span>
              <span className="text-xs text-muted-foreground">Track your progress trends</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}