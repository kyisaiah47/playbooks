"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useCollegePlanning, getCollegePlanningDisplayData } from "@/contexts/college-planning-context"
import { 
  GraduationCap, 
  Target, 
  Calendar, 
  DollarSign, 
  FileText, 
  MapPin, 
  TrendingUp, 
  Clock,
  CheckCircle,
  AlertCircle,
  Trophy,
  BookOpen
} from "lucide-react"

export function CollegePlanningOverview() {
  const { collegePlanningData } = useCollegePlanning()
  const displayData = getCollegePlanningDisplayData(collegePlanningData)

  const quickActions = [
    {
      title: "Search Colleges",
      description: "Find schools that match your criteria",
      icon: GraduationCap,
      href: "#college-search",
      color: "bg-blue-500"
    },
    {
      title: "Start Application",
      description: "Begin a new college application",
      icon: FileText,
      href: "#applications",
      color: "bg-green-500"
    },
    {
      title: "Plan Campus Visit",
      description: "Schedule virtual or in-person visits",
      icon: MapPin,
      href: "#campus-visits",
      color: "bg-purple-500"
    },
    {
      title: "Write Essays",
      description: "Work on application essays",
      icon: BookOpen,
      href: "#essays",
      color: "bg-orange-500"
    }
  ]

  const recentActivity = [
    {
      action: "Updated GPA to 3.7",
      time: "2 days ago",
      type: "academic"
    },
    {
      action: "Added University of California to research list",
      time: "1 week ago",
      type: "research"
    },
    {
      action: "Completed SAT practice test",
      time: "1 week ago",
      type: "testing"
    },
    {
      action: "Started personal statement draft",
      time: "2 weeks ago",
      type: "essay"
    }
  ]

  const milestones = [
    {
      title: "Complete Setup Wizard",
      completed: true,
      description: "Profile and preferences configured"
    },
    {
      title: "Build College List",
      completed: false,
      description: "Research and shortlist 15-20 colleges"
    },
    {
      title: "Take Standardized Tests",
      completed: displayData.hasStandardizedTests,
      description: "SAT or ACT scores recorded"
    },
    {
      title: "Request Recommendations",
      completed: false,
      description: "Ask teachers and counselors for letters"
    },
    {
      title: "Submit Applications",
      completed: false,
      description: "Complete and submit all applications"
    }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center">
          <GraduationCap className="mr-2 h-8 w-8" />
          College Planning Overview
        </h1>
        <p className="text-muted-foreground">
          Track your progress toward college admission and stay organized throughout the process
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current GPA</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{displayData.currentGPA}</div>
            <Progress value={displayData.gpaProgress} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-1">
              Target: {displayData.targetGPA}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Days to Graduation</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{displayData.daysUntilGraduation}</div>
            <p className="text-xs text-muted-foreground">
              Class of {displayData.graduationYear}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Test Scores</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              {displayData.satScore ? (
                <div className="text-2xl font-bold">{displayData.satScore}</div>
              ) : displayData.actScore ? (
                <div className="text-2xl font-bold">{displayData.actScore}</div>
              ) : (
                <div className="text-2xl font-bold text-muted-foreground">--</div>
              )}
              <p className="text-xs text-muted-foreground">
                {displayData.satScore ? "SAT Score" : displayData.actScore ? "ACT Score" : "No scores yet"}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Applications</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{displayData.applicationProgress}</div>
            <p className="text-xs text-muted-foreground">
              Planned applications
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Timeline and Deadlines */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="mr-2 h-5 w-5" />
              Important Deadlines
            </CardTitle>
            <CardDescription>Upcoming dates for your college journey</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {displayData.isJuniorYear && (
              <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                <div>
                  <h4 className="font-medium">Junior Year Focus</h4>
                  <p className="text-sm text-muted-foreground">Take SAT/ACT, research colleges</p>
                </div>
                <AlertCircle className="h-5 w-5 text-yellow-600" />
              </div>
            )}
            
            {displayData.isSeniorYear && (
              <>
                <div className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-950/20 rounded-lg">
                  <div>
                    <h4 className="font-medium">Early Applications</h4>
                    <p className="text-sm text-muted-foreground">Due Nov 1-15</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary">
                      {displayData.daysUntilEarlyDeadlines > 0 
                        ? `${displayData.daysUntilEarlyDeadlines} days`
                        : 'Past due'
                      }
                    </Badge>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <div>
                    <h4 className="font-medium">Regular Decision</h4>
                    <p className="text-sm text-muted-foreground">Due Jan 1-15</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline">
                      {displayData.daysUntilRegularDeadlines > 0 
                        ? `${displayData.daysUntilRegularDeadlines} days`
                        : 'Past due'
                      }
                    </Badge>
                  </div>
                </div>
              </>
            )}
            
            <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
              <div>
                <h4 className="font-medium">FAFSA Filing</h4>
                <p className="text-sm text-muted-foreground">Available Oct 1</p>
              </div>
              <DollarSign className="h-5 w-5 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="mr-2 h-5 w-5" />
              Progress Milestones
            </CardTitle>
            <CardDescription>Track your college planning journey</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-3">
                {milestone.completed ? (
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                ) : (
                  <div className="h-5 w-5 rounded-full border-2 border-muted-foreground mt-0.5 flex-shrink-0" />
                )}
                <div className="flex-1">
                  <h4 className={`font-medium ${milestone.completed ? 'text-green-700 dark:text-green-400' : ''}`}>
                    {milestone.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Jump into key college planning tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {quickActions.map((action, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-auto p-4 flex flex-col items-center space-y-2"
                onClick={() => window.location.hash = action.href.substring(1)}
              >
                <div className={`p-2 rounded-full ${action.color} text-white`}>
                  <action.icon className="h-5 w-5" />
                </div>
                <div className="text-center">
                  <h4 className="font-medium">{action.title}</h4>
                  <p className="text-xs text-muted-foreground">{action.description}</p>
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest college planning updates</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.action}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Profile Summary</CardTitle>
            <CardDescription>Your current college planning profile</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium">Intended Major:</span>
                <p className="text-muted-foreground">{displayData.intendedMajor}</p>
              </div>
              <div>
                <span className="font-medium">Financial Aid:</span>
                <p className="text-muted-foreground">
                  {displayData.financialAidNeeded ? "Required" : "Not needed"}
                </p>
              </div>
              <div>
                <span className="font-medium">Academic Interests:</span>
                <p className="text-muted-foreground">{displayData.academicInterestsCount} areas</p>
              </div>
              <div>
                <span className="font-medium">Extracurriculars:</span>
                <p className="text-muted-foreground">{displayData.extracurricularsCount} activities</p>
              </div>
              <div>
                <span className="font-medium">Preferred Locations:</span>
                <p className="text-muted-foreground">{displayData.preferredLocationsDisplay}</p>
              </div>
              <div>
                <span className="font-medium">Family Contribution:</span>
                <p className="text-muted-foreground">{displayData.expectedContribution}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Academic Profile */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <BookOpen className="mr-2 h-5 w-5" />
            Academic Profile
          </CardTitle>
          <CardDescription>Your current academic standing and achievements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <h4 className="font-medium">GPA Progress</h4>
              <div className="flex items-center space-x-2">
                <Progress value={displayData.gpaProgress} className="flex-1" />
                <span className="text-sm text-muted-foreground">
                  {displayData.currentGPA}/{displayData.targetGPA}
                </span>
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium">Test Scores</h4>
              <div className="space-y-1">
                {displayData.satScore && (
                  <div className="flex justify-between text-sm">
                    <span>SAT:</span>
                    <span className="font-medium">{displayData.satScore}/1600</span>
                  </div>
                )}
                {displayData.actScore && (
                  <div className="flex justify-between text-sm">
                    <span>ACT:</span>
                    <span className="font-medium">{displayData.actScore}/36</span>
                  </div>
                )}
                {!displayData.hasStandardizedTests && (
                  <p className="text-sm text-muted-foreground">No test scores recorded</p>
                )}
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium">Advanced Courses</h4>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>AP Courses Taken:</span>
                  <span className="font-medium">{collegePlanningData.standardizedTests.ap.coursesTaken.length}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>AP Courses Planned:</span>
                  <span className="font-medium">{collegePlanningData.standardizedTests.ap.coursesPlanned.length}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}