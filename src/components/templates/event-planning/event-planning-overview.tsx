"use client"

import { useState, useEffect } from "react"
import { SidebarLeft } from "./event-planning-sidebar-left"
import { EventPlanningSetupWizard } from "./event-planning-setup-wizard"
import { useEventPlanning, getEventPlanningDisplayData } from "@/contexts/event-planning-context"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { 
  CalendarIcon,
  Clock,
  MapPin,
  Users,
  DollarSign,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Target
} from "lucide-react"

export function EventPlanningOverview() {
  const { eventPlanningData, isWizardOpen, updateEventPlanningData } = useEventPlanning()

  const handleSetupComplete = (wizardData: any) => {
    // Map wizard data to EventPlanningData structure
    const eventPlanningData = {
      eventName: wizardData.eventName || "",
      organizerName: wizardData.organizerName || "",
      eventDate: wizardData.eventDate,
      eventTime: undefined, // Not collected in wizard, can be set later
      eventType: wizardData.eventType || "",
      attendeeCount: wizardData.attendeeCount || 0,
      totalBudget: wizardData.totalBudget || 0,
      eventVenue: wizardData.eventVenue || "",
      eventAddress: wizardData.eventAddress || "",
      eventStyle: wizardData.eventStyle || "",
      specialRequirements: wizardData.specialRequirements || "",
      cateringNeeds: wizardData.cateringNeeds || "",
      venueType: wizardData.venueType,
      capacity: wizardData.capacity,
      budgetPriority: wizardData.budgetPriority,
      notes: wizardData.notes
    }
    
    updateEventPlanningData(eventPlanningData)
  }

  const displayData = getEventPlanningDisplayData(eventPlanningData)

  return (
    <>
      <SidebarLeft />
      <SidebarInset>
        <header className="bg-background sticky top-0 z-50 flex h-14 shrink-0 items-center gap-2 border-b">
          <div className="flex flex-1 items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage className="line-clamp-1">
                    Event Planning Overview - {displayData.eventName}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex items-center space-x-3 px-3">
            {displayData.eventDate && (
              <Badge variant="secondary" className="text-sm hidden sm:flex">
                <CalendarIcon className="mr-1 h-3 w-3" />
                {displayData.eventDate.toLocaleDateString()}
              </Badge>
            )}
            {displayData.daysUntil > 0 && (
              <Badge variant="outline" className="text-sm hidden sm:flex">
                <Clock className="mr-1 h-3 w-3" />
                {displayData.daysUntil} days left
              </Badge>
            )}
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <EventPlanningDashboard />
        </div>
      </SidebarInset>

      <EventPlanningSetupWizard
        open={isWizardOpen}
        onComplete={handleSetupComplete}
      />
    </>
  )
}

function EventPlanningDashboard() {
  const { eventPlanningData } = useEventPlanning()
  
  // Calculate event-specific metrics
  const [metrics, setMetrics] = useState({
    totalProgress: 0,
    guestsConfirmed: 0,
    totalGuests: 0,
    vendorsBooked: 0,
    budgetUsed: 0,
    budgetTotal: 0,
    daysToEvent: 0,
    tasksCompleted: 0,
    totalTasks: 0,
    venuesBooked: 0
  })

  useEffect(() => {
    // Load data from localStorage to calculate metrics
    const venues = JSON.parse(localStorage.getItem('event-planning-venues') || '[]')
    const guests = JSON.parse(localStorage.getItem('event-planning-guests') || '[]')
    const vendors = JSON.parse(localStorage.getItem('event-planning-vendors') || '[]')
    const expenses = JSON.parse(localStorage.getItem('event-planning-expenses') || '[]')
    const tasks = JSON.parse(localStorage.getItem('event-planning-tasks') || '[]')
    
    const confirmedGuests = guests.filter((g: any) => g.status === 'confirmed').length
    const bookedVendors = vendors.filter((v: any) => v.status === 'booked').length
    const bookedVenues = venues.filter((v: any) => v.status === 'booked').length
    const totalExpenses = expenses.reduce((sum: number, expense: any) => sum + expense.amount, 0)
    const completedTasks = tasks.filter((t: any) => t.status === 'completed').length
    
    // Calculate days to event
    const eventDate = eventPlanningData?.eventDate ? new Date(eventPlanningData.eventDate) : new Date()
    const today = new Date()
    const daysToEvent = Math.ceil((eventDate.getTime() - today.getTime()) / (1000 * 3600 * 24))
    
    // Calculate overall progress
    const progressFactors = [
      venues.length > 0 ? (bookedVenues / Math.max(venues.length, 1)) * 100 : 0,
      guests.length > 0 ? (confirmedGuests / Math.max(guests.length, 1)) * 100 : 0,
      vendors.length > 0 ? (bookedVendors / Math.max(vendors.length, 1)) * 100 : 0,
      tasks.length > 0 ? (completedTasks / Math.max(tasks.length, 1)) * 100 : 0
    ]
    const overallProgress = progressFactors.reduce((sum, factor) => sum + factor, 0) / progressFactors.length
    
    setMetrics({
      totalProgress: Math.round(overallProgress),
      guestsConfirmed: confirmedGuests,
      totalGuests: guests.length,
      vendorsBooked: bookedVendors,
      budgetUsed: totalExpenses,
      budgetTotal: eventPlanningData?.totalBudget || 0,
      daysToEvent: Math.max(0, daysToEvent),
      tasksCompleted: completedTasks,
      totalTasks: tasks.length,
      venuesBooked: bookedVenues
    })
  }, [eventPlanningData])

  const budgetPercentage = metrics.budgetTotal > 0 ? (metrics.budgetUsed / metrics.budgetTotal) * 100 : 0

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Event Planning Dashboard</h1>
          <p className="text-muted-foreground">Track your event progress and key milestones</p>
        </div>
        <Button>
          Quick Add
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
            <CardTitle className="text-sm font-medium">Guest RSVPs</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.guestsConfirmed}</div>
            <p className="text-xs text-muted-foreground">out of {metrics.totalGuests} invited</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Days to Event</CardTitle>
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.daysToEvent}</div>
            <p className="text-xs text-muted-foreground">days remaining</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Budget Used</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${metrics.budgetUsed.toLocaleString()}</div>
            <Progress value={budgetPercentage} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-1">
              {budgetPercentage.toFixed(1)}% of ${metrics.budgetTotal.toLocaleString()}
            </p>
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
              {metrics.guestsConfirmed > 0 && (
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-sm">{metrics.guestsConfirmed} guests confirmed attendance</span>
                  <Badge variant="secondary">Recent</Badge>
                </div>
              )}
              {metrics.vendorsBooked > 0 && (
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span className="text-sm">{metrics.vendorsBooked} vendors successfully booked</span>
                  <Badge variant="secondary">This week</Badge>
                </div>
              )}
              {metrics.tasksCompleted > 0 && (
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  <span className="text-sm">{metrics.tasksCompleted} planning tasks completed</span>
                  <Badge variant="secondary">Today</Badge>
                </div>
              )}
              {metrics.budgetUsed > 0 && (
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full" />
                  <span className="text-sm">Budget updated: ${metrics.budgetUsed.toLocaleString()} spent</span>
                  <Badge variant="secondary">Yesterday</Badge>
                </div>
              )}
              {metrics.guestsConfirmed === 0 && metrics.vendorsBooked === 0 && metrics.tasksCompleted === 0 && metrics.budgetUsed === 0 && (
                <div className="text-center py-4">
                  <p className="text-sm text-muted-foreground">No recent activity. Start planning your event!</p>
                </div>
              )}
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
              {metrics.daysToEvent <= 30 && (
                <div className="flex items-center justify-between">
                  <span className="text-sm">Finalize catering headcount</span>
                  <Badge variant={metrics.daysToEvent <= 7 ? "destructive" : "outline"}>
                    {metrics.daysToEvent <= 7 ? "Urgent" : "Due Soon"}
                  </Badge>
                </div>
              )}
              {metrics.totalGuests > metrics.guestsConfirmed && (
                <div className="flex items-center justify-between">
                  <span className="text-sm">Follow up on pending RSVPs</span>
                  <Badge variant="outline">In Progress</Badge>
                </div>
              )}
              {budgetPercentage > 80 && (
                <div className="flex items-center justify-between">
                  <span className="text-sm">Review budget allocation</span>
                  <Badge variant="secondary">Important</Badge>
                </div>
              )}
              {metrics.venuesBooked === 0 && (
                <div className="flex items-center justify-between">
                  <span className="text-sm">Book event venue</span>
                  <Badge variant="destructive">High Priority</Badge>
                </div>
              )}
              <div className="flex items-center justify-between">
                <span className="text-sm">Confirm venue setup details</span>
                <Badge variant="outline">This Week</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks for your event planning</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <Users className="h-6 w-6" />
              <span className="text-sm">Add Guest</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <MapPin className="h-6 w-6" />
              <span className="text-sm">Book Venue</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <TrendingUp className="h-6 w-6" />
              <span className="text-sm">Track Expense</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <Clock className="h-6 w-6" />
              <span className="text-sm">Add Task</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}