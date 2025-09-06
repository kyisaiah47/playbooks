"use client"

import React, { useState, useEffect } from "react"
import { EventPlanningProvider } from '@/contexts/event-planning-context'
import { SidebarProvider } from "@/components/ui/sidebar"
import { SidebarLeft } from '@/components/templates/event-planning/event-planning-sidebar-left'
import { EventPlanningSetupWizard } from '@/components/templates/event-planning/event-planning-setup-wizard'
import { VenueManagement } from '@/components/templates/event-planning/venue-management'
import { GuestManagement } from '@/components/templates/event-planning/guest-management'
import { VendorCoordination } from '@/components/templates/event-planning/vendor-coordination'
import { BudgetTracking } from '@/components/templates/event-planning/budget-tracking'
import { TimelineManagement } from '@/components/templates/event-planning/timeline-management'
import { VenueSelection } from '@/components/guided-notes/event-planning/venue-selection'
import { BudgetPlanning } from '@/components/guided-notes/event-planning/budget-planning'
import { VendorCoordination as VendorCoordinationGuide } from '@/components/guided-notes/event-planning/vendor-coordination'
import { GuestManagement as GuestManagementGuide } from '@/components/guided-notes/event-planning/guest-management'
import { TimelineCoordination } from '@/components/guided-notes/event-planning/timeline-coordination'
import { CateringMenu } from '@/components/guided-notes/event-planning/catering-menu'
import { EntertainmentAudio } from '@/components/guided-notes/event-planning/entertainment-audio'
import { DecorStyling } from '@/components/guided-notes/event-planning/decor-styling'
import { LogisticsCoordination } from '@/components/guided-notes/event-planning/logistics-coordination'
import { DayOfManagement } from '@/components/guided-notes/event-planning/day-of-management'
import { MyNotes } from '@/components/templates/event-planning/my-notes'
import { PlanningChecklist } from '@/components/resources/event-planning/planning-checklist'
import { BudgetGuide } from '@/components/resources/event-planning/budget-guide'
import { VendorGuide } from '@/components/resources/event-planning/vendor-guide'
import { TimelineGuide } from '@/components/resources/event-planning/timeline-guide'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { 
  MapPin,
  Users,
  DollarSign,
  Target,
  TrendingUp
} from "lucide-react"
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
import { CalendarIcon, Clock } from "lucide-react"

export default function EventPlanningAppPage() {
  return (
    <EventPlanningProvider>
      <SidebarProvider>
        <EventPlanningAppContent />
      </SidebarProvider>
    </EventPlanningProvider>
  )
}

function EventPlanningAppContent() {
  const { eventPlanningData, isWizardOpen, updateEventPlanningData } = useEventPlanning()
  const [currentPage, setCurrentPage] = useState('overview')
  
  const handleSetupComplete = (wizardData: any) => {
    // Map wizard data to EventPlanningData structure
    const eventPlanningData = {
      eventName: wizardData.eventName || "",
      organizerName: wizardData.organizerName || "",
      eventDate: wizardData.eventDate,
      eventTime: undefined,
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

  // Listen for hash changes for navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) // Remove the #
      if (hash) {
        setCurrentPage(hash)
      }
    }

    // Set initial page from hash
    handleHashChange()
    
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const renderPage = () => {
    switch (currentPage) {
      case 'overview':
        return <EventPlanningDashboard />
      case 'venue':
        return <VenueManagement />
      case 'guests':
        return <GuestManagement />
      case 'vendors':
        return <VendorCoordination />
      case 'budget':
        return <BudgetTracking />
      case 'timeline':
        return <TimelineManagement />
      // Guided Notes Pages
      case 'venue-selection':
        return <VenueSelection />
      case 'budget-planning':
        return <BudgetPlanning />
      case 'vendor-coordination':
        return <VendorCoordinationGuide />
      case 'guest-management':
        return <GuestManagementGuide />
      case 'timeline-coordination':
        return <TimelineCoordination />
      case 'catering-menu':
        return <CateringMenu />
      case 'entertainment-audio':
        return <EntertainmentAudio />
      case 'decor-styling':
        return <DecorStyling />
      case 'logistics-coordination':
        return <LogisticsCoordination />
      case 'day-of-management':
        return <DayOfManagement />
      // Resource Pages
      case 'planning-checklist':
        return <PlanningChecklist />
      case 'budget-guide':
        return <BudgetGuide />
      case 'vendor-guide':
        return <VendorGuide />
      case 'timeline-guide':
        return <TimelineGuide />
      // My Notes
      case 'my-notes':
        return <MyNotes />
      default:
        return <EventPlanningDashboard />
    }
  }

  const getPageTitle = () => {
    switch (currentPage) {
      case 'overview':
        return 'Event Planning Overview'
      case 'venue':
        return 'Venue Management'
      case 'guests':
        return 'Guest Management'
      case 'vendors':
        return 'Vendor Coordination'
      case 'budget':
        return 'Budget Tracking'
      case 'timeline':
        return 'Timeline Management'
      // Guided Notes Pages
      case 'venue-selection':
        return 'Venue Selection & Booking'
      case 'budget-planning':
        return 'Event Budget Planning'
      case 'vendor-coordination':
        return 'Vendor Coordination & Management'
      case 'guest-management':
        return 'Guest Management & Experience'
      case 'timeline-coordination':
        return 'Event Timeline & Coordination'
      case 'catering-menu':
        return 'Catering & Menu Planning'
      case 'entertainment-audio':
        return 'Entertainment & Audio Visual'
      case 'decor-styling':
        return 'Decor & Event Styling'
      case 'logistics-coordination':
        return 'Event Logistics & Coordination'
      case 'day-of-management':
        return 'Day-of Event Management'
      // Resource Pages
      case 'planning-checklist':
        return 'Event Planning Master Checklist'
      case 'budget-guide':
        return 'Event Budget Planning Guide'
      case 'vendor-guide':
        return 'Vendor Selection & Management Guide'
      case 'timeline-guide':
        return 'Event Timeline & Task Management'
      // My Notes
      case 'my-notes':
        return 'My Notes'
      default:
        return 'Event Planning Overview'
    }
  }

  const displayData = getEventPlanningDisplayData(eventPlanningData)

  return (
    <>
      <SidebarLeft activeSection={currentPage} />
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
                    {getPageTitle()} - {displayData.eventName}
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
          {renderPage()}
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