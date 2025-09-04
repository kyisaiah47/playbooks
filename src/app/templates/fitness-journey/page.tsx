"use client"

import { useState, useEffect } from "react"
import { FitnessJourneySidebarLeft } from "@/components/fitness-journey-sidebar-left"
import { SidebarRight } from "@/components/sidebar-right"
import { FitnessJourneyOverview } from "@/components/fitness-journey-overview"
import { WorkoutPlanning } from "@/components/workout-planning"
import { NutritionTracking } from "@/components/nutrition-tracking"
import { ProgressMonitoring } from "@/components/progress-monitoring"
import { GoalsManagement } from "@/components/goals-management"
import { FitnessJourneySchedule } from "@/components/fitness-journey-schedule"
import { PersonalTrainerCoordination } from "@/components/personal-trainer-coordination"
import { FitnessJourneySetupWizard } from "@/components/fitness-journey-setup-wizard"
import { ThemeToggle } from "@/components/theme-toggle"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useFitnessJourney, getFitnessJourneyDisplayData } from "@/contexts/fitness-journey-context"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Target, Clock, Activity, Wand2, Settings2, LifeBuoy } from "lucide-react"

function FitnessJourneyTemplatePage() {
  const [activeSection, setActiveSection] = useState("overview")
  const { fitnessJourneyData, isWizardOpen, setWizardOpen, updateFitnessJourneyData } = useFitnessJourney()

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "")
      if (hash) {
        setActiveSection(hash)
      }
    }

    handleHashChange()
    window.addEventListener("hashchange", handleHashChange)
    
    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  const renderContent = () => {
    switch (activeSection) {
      case "workouts":
        return <WorkoutPlanning />
      case "nutrition":
        return <NutritionTracking />
      case "progress":
        return <ProgressMonitoring />
      case "goals":
        return <GoalsManagement />
      case "schedule":
        return <FitnessJourneySchedule />
      case "trainers":
        return <PersonalTrainerCoordination />
      case "settings":
        return <FitnessJourneySettings />
      case "help":
        return <FitnessJourneyHelp />
      case "overview":
      default:
        return <FitnessJourneyOverview />
    }
  }

  const resetAllData = () => {
    if (window.confirm('Are you sure you want to reset all fitness journey data? This action cannot be undone.')) {
      localStorage.removeItem('templata-fitness-journey-data')
      window.location.reload()
    }
  }

  const FitnessJourneySettings = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center">
          <Settings2 className="mr-2 h-8 w-8" />
          Settings
        </h1>
        <p className="text-muted-foreground">Manage your fitness journey preferences and data</p>
      </div>
      
      <div className="grid gap-6">
        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold mb-2">Fitness Journey Setup</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Update your fitness information or restart the setup process
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => setWizardOpen(true)}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Edit Fitness Details
            </button>
            <button
              onClick={resetAllData}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-destructive border-destructive/30 hover:bg-destructive/10"
            >
              Reset All Data
            </button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Reset will clear all fitness journey data and restart the setup wizard
          </p>
        </div>

        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold mb-2">Current Profile</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium">Primary Goal:</span>
              <p className="text-muted-foreground">{fitnessJourneyData.primaryGoal.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) || "Not set"}</p>
            </div>
            <div>
              <span className="font-medium">Fitness Level:</span>
              <p className="text-muted-foreground">{fitnessJourneyData.fitnessLevel.charAt(0).toUpperCase() + fitnessJourneyData.fitnessLevel.slice(1)}</p>
            </div>
            <div>
              <span className="font-medium">Current Weight:</span>
              <p className="text-muted-foreground">{fitnessJourneyData.weight} {fitnessJourneyData.measurementUnits === 'metric' ? 'kg' : 'lbs'}</p>
            </div>
            <div>
              <span className="font-medium">Workouts Per Week:</span>
              <p className="text-muted-foreground">{fitnessJourneyData.workoutDaysPerWeek} days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const FitnessJourneyHelp = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center">
          <LifeBuoy className="mr-2 h-8 w-8" />
          Help & Support
        </h1>
        <p className="text-muted-foreground">Tips and guidance for your fitness journey</p>
      </div>
      
      <div className="grid gap-6">
        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold mb-4">Getting Started</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">1. Set Your Goals</h4>
              <p className="text-sm text-muted-foreground">Use the setup wizard to define your fitness goals and create a personalized plan.</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">2. Plan Your Workouts</h4>
              <p className="text-sm text-muted-foreground">Create workout schedules that fit your availability and preferences.</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">3. Track Your Nutrition</h4>
              <p className="text-sm text-muted-foreground">Monitor your daily nutrition intake to support your fitness goals.</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">4. Monitor Progress</h4>
              <p className="text-sm text-muted-foreground">Regularly track your progress with measurements, photos, and performance metrics.</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold mb-4">Best Practices</h3>
          <div className="space-y-2 text-sm">
            <div>• Start with realistic goals and gradually increase intensity</div>
            <div>• Consistency is more important than perfection</div>
            <div>• Listen to your body and allow for proper recovery</div>
            <div>• Stay hydrated throughout your workouts</div>
            <div>• Focus on proper form before adding weight</div>
            <div>• Track your progress regularly to stay motivated</div>
            <div>• Celebrate small victories along the way</div>
            <div>• Consider working with professionals for personalized guidance</div>
          </div>
        </div>

        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold mb-4">Safety Tips</h3>
          <div className="space-y-2 text-sm">
            <div>• Always warm up before exercising and cool down afterward</div>
            <div>• Consult healthcare providers before starting new programs</div>
            <div>• Stop exercising if you feel pain or discomfort</div>
            <div>• Stay within your fitness level and progress gradually</div>
            <div>• Use proper equipment and maintain it regularly</div>
            <div>• Learn correct exercise techniques to prevent injury</div>
          </div>
        </div>
      </div>
    </div>
  )

  const getSectionTitle = () => {
    switch (activeSection) {
      case "workouts":
        return "Workout Planning"
      case "nutrition":
        return "Nutrition Tracking"
      case "progress":
        return "Progress Monitoring"
      case "goals":
        return "Goals Management"
      case "schedule":
        return "Schedule"
      case "trainers":
        return "Personal Trainers"
      case "settings":
        return "Settings"
      case "help":
        return "Help"
      case "overview":
      default:
        return "Fitness Journey Overview"
    }
  }

  const displayData = getFitnessJourneyDisplayData(fitnessJourneyData)

  return (
    <SidebarProvider>
      <FitnessJourneySidebarLeft />
      <SidebarInset>
        <header className="bg-background sticky top-0 flex h-14 shrink-0 items-center gap-2 border-b">
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
                    {getSectionTitle()} - {displayData.primaryGoal}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex items-center space-x-3 px-3">
            <Badge variant="secondary" className="text-sm hidden sm:flex">
              <Target className="mr-1 h-3 w-3" />
              {displayData.workoutsPerWeek}/week
            </Badge>
            <Badge variant="outline" className="text-sm hidden sm:flex">
              <Activity className="mr-1 h-3 w-3" />
              {displayData.workoutDuration}
            </Badge>
            <Badge variant="outline" className="text-sm hidden md:flex">
              <Clock className="mr-1 h-3 w-3" />
              {displayData.daysUntilTarget} days left
            </Badge>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" onClick={() => setWizardOpen(true)}>
                <Wand2 className="mr-2 h-4 w-4" />
                Setup
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {renderContent()}
        </div>
      </SidebarInset>
      <SidebarRight />
      <FitnessJourneySetupWizard 
        isOpen={isWizardOpen}
        onClose={() => setWizardOpen(false)}
        onComplete={(data) => updateFitnessJourneyData(data)}
        initialData={fitnessJourneyData}
      />
    </SidebarProvider>
  )
}

export default function Page() {
  return <FitnessJourneyTemplatePage />
}