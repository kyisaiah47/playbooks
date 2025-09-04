"use client"

import { useState, useEffect } from "react"
import { BabyPlanningSidebarLeft } from "@/components/baby-planning-sidebar-left"
import { SidebarRight } from "@/components/sidebar-right"
import { BabyPlanningOverview } from "@/components/baby-planning-overview"
import { PregnancyTracker } from "@/components/pregnancy-tracker"
import { BabyGearChecklist } from "@/components/baby-gear-checklist"
import { NurseryPlanning } from "@/components/nursery-planning"
import { HealthcareCoordination } from "@/components/healthcare-coordination"
import { BudgetPlanning } from "@/components/budget-planning"
import { BabyNameTracker } from "@/components/baby-name-tracker"
import { WeeklyDevelopment } from "@/components/weekly-development"
import { SymptomsTracker } from "@/components/symptoms-tracker"
import { KickCounter } from "@/components/kick-counter"
import { ContractionTimer } from "@/components/contraction-timer"
import { HospitalBag } from "@/components/hospital-bag"
import { BirthPlan } from "@/components/birth-plan"
import { BabyRegistry } from "@/components/baby-registry"
import { FeedingSchedule } from "@/components/feeding-schedule"
import { SleepTracker } from "@/components/sleep-tracker"
import { AppointmentLog } from "@/components/appointment-log"
import { PhotoTimeline } from "@/components/photo-timeline"
import { MilestonesTracker } from "@/components/milestones-tracker"
import { FirstTrimester } from "@/components/first-trimester"
import { SecondTrimester } from "@/components/second-trimester"
import { ThirdTrimester } from "@/components/third-trimester"
import { LaborDelivery } from "@/components/labor-delivery"
import { PostpartumRecovery } from "@/components/postpartum-recovery"
import { MustHaveGear } from "@/components/must-have-gear"
import { FeedingSupplies } from "@/components/feeding-supplies"
import { DiaperBathing } from "@/components/diaper-bathing"
import { ClothingAccessories } from "@/components/clothing-accessories"
import { SafetyHealth } from "@/components/safety-health"
import { NurseryDesign } from "@/components/nursery-design"
import { BabyPlanningSetupWizard } from "@/components/baby-planning-setup-wizard"
import { ThemeToggle } from "@/components/theme-toggle"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useBabyPlanning, getBabyPlanningDisplayData } from "@/contexts/baby-planning-context"
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
import { Calendar, Clock, Target, Wand2, Settings2, LifeBuoy, Baby, Heart } from "lucide-react"

function BabyPlanningTemplatePage() {
  const [activeSection, setActiveSection] = useState("overview")
  const { babyPlanningData, isWizardOpen, setWizardOpen, updateBabyPlanningData } = useBabyPlanning()

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
      case "pregnancy":
        return <PregnancyTracker />
      case "gear":
        return <BabyGearChecklist />
      case "nursery":
        return <NurseryPlanning />
      case "healthcare":
        return <HealthcareCoordination />
      case "budget":
        return <BudgetPlanning />
      case "names":
        return <BabyNameTracker />
      case "timeline":
        return <TimelineSchedule />
      
      // Favorites pages
      case "weekly-development":
        return <WeeklyDevelopment />
      case "symptoms-tracker":
        return <SymptomsTracker />
      case "kick-counter":
        return <KickCounter />
      case "contraction-timer":
        return <ContractionTimer />
      case "hospital-bag":
        return <HospitalBag />
      case "birth-plan":
        return <BirthPlan />
      case "registry":
        return <BabyRegistry />
      case "feeding-schedule":
        return <FeedingSchedule />
      case "sleep-tracker":
        return <SleepTracker />
      case "appointment-log":
        return <AppointmentLog />
      case "photo-timeline":
        return <PhotoTimeline />
      case "milestones":
        return <MilestonesTracker />
      
      // Workspace pages - Pregnancy Journey
      case "first-trimester":
        return <FirstTrimester />
      case "second-trimester":
        return <SecondTrimester />
      case "third-trimester":
        return <ThirdTrimester />
      case "labor-delivery":
        return <LaborDelivery />
      case "postpartum-recovery":
        return <PostpartumRecovery />
      
      // Workspace pages - Baby Essentials
      case "must-have-gear":
        return <MustHaveGear />
      case "feeding-supplies":
        return <FeedingSupplies />
      case "diaper-bathing":
        return <DiaperBathing />
      case "clothing-accessories":
        return <ClothingAccessories />
      case "safety-health":
        return <SafetyHealth />
      
      // Workspace pages - Home & Family Prep
      case "nursery-design":
        return <NurseryDesign />
      
      case "settings":
        return <BabyPlanningSettings />
      case "help":
        return <BabyPlanningHelp />
      case "overview":
      default:
        return <BabyPlanningOverview />
    }
  }

  const resetAllData = () => {
    if (window.confirm('Are you sure you want to reset all baby planning data? This action cannot be undone.')) {
      localStorage.removeItem('templata-baby-planning-data')
      window.location.reload()
    }
  }

  const TimelineSchedule = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center">
          <Calendar className="mr-2 h-8 w-8" />
          Timeline & Schedule
        </h1>
        <p className="text-muted-foreground">Track important milestones and plan your pregnancy timeline</p>
      </div>
      
      <div className="grid gap-6">
        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold mb-4">Pregnancy Timeline</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
              <div>
                <h4 className="font-medium">Current Progress</h4>
                <p className="text-sm text-muted-foreground">Week {babyPlanningData.currentWeek} of 40</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">{getBabyPlanningDisplayData(babyPlanningData).trimester}</div>
                <div className="text-sm text-muted-foreground">Trimester</div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Due Date</h4>
                <p className="text-sm text-muted-foreground">
                  {babyPlanningData.dueDate ? new Date(babyPlanningData.dueDate).toLocaleDateString() : "Not set"}
                </p>
              </div>
              
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Days Remaining</h4>
                <p className="text-sm text-muted-foreground">
                  {getBabyPlanningDisplayData(babyPlanningData).daysUntilDue} days
                </p>
              </div>
              
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Weeks Remaining</h4>
                <p className="text-sm text-muted-foreground">
                  {getBabyPlanningDisplayData(babyPlanningData).weeksRemaining} weeks
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold mb-4">Important Dates</h3>
          <div className="space-y-3">
            {babyPlanningData.babyShowerPlanned && babyPlanningData.babyShowerDate && (
              <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                <span>Baby Shower</span>
                <span className="text-sm text-muted-foreground">
                  {new Date(babyPlanningData.babyShowerDate).toLocaleDateString()}
                </span>
              </div>
            )}
            
            {babyPlanningData.nurseryCompletionGoal && (
              <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                <span>Nursery Completion Goal</span>
                <span className="text-sm text-muted-foreground">
                  {new Date(babyPlanningData.nurseryCompletionGoal).toLocaleDateString()}
                </span>
              </div>
            )}
            
            {babyPlanningData.hospitalBagPackingDate && (
              <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                <span>Hospital Bag Packing</span>
                <span className="text-sm text-muted-foreground">
                  {new Date(babyPlanningData.hospitalBagPackingDate).toLocaleDateString()}
                </span>
              </div>
            )}
            
            {babyPlanningData.babymoonPlanned && babyPlanningData.babymoonDate && (
              <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                <span>Babymoon</span>
                <span className="text-sm text-muted-foreground">
                  {new Date(babyPlanningData.babymoonDate).toLocaleDateString()}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold mb-4">Milestone Memories</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {babyPlanningData.announcementDate && (
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium">Pregnancy Announcement</h4>
                <p className="text-sm text-muted-foreground">
                  {new Date(babyPlanningData.announcementDate).toLocaleDateString()}
                </p>
              </div>
            )}
            
            {babyPlanningData.genderRevealDate && (
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium">Gender Reveal</h4>
                <p className="text-sm text-muted-foreground">
                  {new Date(babyPlanningData.genderRevealDate).toLocaleDateString()}
                </p>
              </div>
            )}
            
            {babyPlanningData.firstKickDate && (
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium">First Kick Felt</h4>
                <p className="text-sm text-muted-foreground">
                  {new Date(babyPlanningData.firstKickDate).toLocaleDateString()}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )

  const BabyPlanningSettings = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center">
          <Settings2 className="mr-2 h-8 w-8" />
          Settings
        </h1>
        <p className="text-muted-foreground">Manage your baby planning preferences and data</p>
      </div>
      
      <div className="grid gap-6">
        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold mb-2">Baby Planning Setup</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Update your baby planning information or restart the setup process
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => setWizardOpen(true)}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Edit Baby Planning Details
            </button>
            <button
              onClick={resetAllData}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-destructive border-destructive/30 hover:bg-destructive/10"
            >
              Reset All Data
            </button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Reset will clear all baby planning data and restart the setup wizard
          </p>
        </div>

        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold mb-2">Current Information</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium">Baby Name:</span>
              <p className="text-muted-foreground">{babyPlanningData.babyName || "Not chosen yet"}</p>
            </div>
            <div>
              <span className="font-medium">Gender:</span>
              <p className="text-muted-foreground">{getBabyPlanningDisplayData(babyPlanningData).genderDisplay}</p>
            </div>
            <div>
              <span className="font-medium">Due Date:</span>
              <p className="text-muted-foreground">
                {babyPlanningData.dueDate ? new Date(babyPlanningData.dueDate).toLocaleDateString() : "Not set"}
              </p>
            </div>
            <div>
              <span className="font-medium">Current Week:</span>
              <p className="text-muted-foreground">Week {babyPlanningData.currentWeek}</p>
            </div>
            <div>
              <span className="font-medium">First Baby:</span>
              <p className="text-muted-foreground">{babyPlanningData.isFirstBaby ? "Yes" : "No"}</p>
            </div>
            <div>
              <span className="font-medium">Total Budget:</span>
              <p className="text-muted-foreground">{getBabyPlanningDisplayData(babyPlanningData).budgetTotal}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const BabyPlanningHelp = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center">
          <LifeBuoy className="mr-2 h-8 w-8" />
          Help & Support
        </h1>
        <p className="text-muted-foreground">Tips and guidance for your baby planning journey</p>
      </div>
      
      <div className="grid gap-6">
        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold mb-4">Getting Started</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">1. Complete Your Setup</h4>
              <p className="text-sm text-muted-foreground">Use the setup wizard to configure your baby planning preferences and timeline.</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">2. Track Your Pregnancy</h4>
              <p className="text-sm text-muted-foreground">Monitor your weekly progress, symptoms, and important appointments.</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">3. Plan Your Nursery</h4>
              <p className="text-sm text-muted-foreground">Design your nursery layout and track furniture and decoration purchases.</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">4. Manage Your Budget</h4>
              <p className="text-sm text-muted-foreground">Keep track of baby-related expenses and stay within your budget.</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">5. Coordinate Healthcare</h4>
              <p className="text-sm text-muted-foreground">Manage doctor appointments, tests, and create your birth plan.</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold mb-4">Trimester Guidelines</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">First Trimester (Weeks 1-12)</h4>
              <div className="text-sm space-y-1">
                <div>• Schedule your first prenatal appointment</div>
                <div>• Start taking prenatal vitamins</div>
                <div>• Begin thinking about baby names</div>
                <div>• Consider when to announce your pregnancy</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Second Trimester (Weeks 13-27)</h4>
              <div className="text-sm space-y-1">
                <div>• Schedule anatomy scan (18-22 weeks)</div>
                <div>• Consider genetic screening tests</div>
                <div>• Start planning your nursery</div>
                <div>• Begin shopping for maternity clothes</div>
                <div>• Plan your babymoon if desired</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Third Trimester (Weeks 28-40)</h4>
              <div className="text-sm space-y-1">
                <div>• Complete nursery setup</div>
                <div>• Pack your hospital bag</div>
                <div>• Finalize your birth plan</div>
                <div>• Install car seat</div>
                <div>• Schedule final prenatal visits</div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold mb-4">Essential Tips</h3>
          <div className="space-y-2 text-sm">
            <div>• Stay hydrated and eat regular, nutritious meals</div>
            <div>• Get plenty of rest and listen to your body</div>
            <div>• Attend all scheduled prenatal appointments</div>
            <div>• Start preparing siblings and pets for baby's arrival</div>
            <div>• Consider taking childbirth and parenting classes</div>
            <div>• Build your support network of family and friends</div>
            <div>• Don't hesitate to ask questions during appointments</div>
            <div>• Trust your instincts and contact your provider with concerns</div>
          </div>
        </div>
      </div>
    </div>
  )

  const getSectionTitle = () => {
    switch (activeSection) {
      case "pregnancy":
        return "Pregnancy Tracking"
      case "gear":
        return "Baby Gear Checklist"
      case "nursery":
        return "Nursery Planning"
      case "healthcare":
        return "Healthcare Coordination"
      case "budget":
        return "Budget Planning"
      case "names":
        return "Baby Names"
      case "timeline":
        return "Timeline & Schedule"
      case "settings":
        return "Settings"
      case "help":
        return "Help"
      case "overview":
      default:
        return "Baby Planning Overview"
    }
  }

  const displayData = getBabyPlanningDisplayData(babyPlanningData)

  return (
    <SidebarProvider>
      <BabyPlanningSidebarLeft />
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
                    {getSectionTitle()} - {displayData.babyName}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex items-center space-x-3 px-3">
            <Badge variant="secondary" className="text-sm hidden sm:flex">
              <Baby className="mr-1 h-3 w-3" />
              Week {displayData.currentWeek}
            </Badge>
            <Badge variant="outline" className="text-sm hidden sm:flex">
              <Heart className="mr-1 h-3 w-3" />
              {displayData.trimester} Trimester
            </Badge>
            <Badge variant="outline" className="text-sm hidden sm:flex">
              <Clock className="mr-1 h-3 w-3" />
              {displayData.daysUntilDue} days left
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
      <BabyPlanningSetupWizard 
        isOpen={isWizardOpen}
        onClose={() => setWizardOpen(false)}
        onComplete={(data) => updateBabyPlanningData(data)}
        initialData={babyPlanningData}
      />
    </SidebarProvider>
  )
}

export default function Page() {
  return <BabyPlanningTemplatePage />
}