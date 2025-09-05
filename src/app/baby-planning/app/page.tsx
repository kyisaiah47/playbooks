"use client"

import { useState, useEffect } from "react"
import { SidebarLeft } from "@/components/templates/baby-planning/baby-planning-sidebar-left"
import { SidebarRight } from "@/components/sidebar-right"
import { BabyPlanningOverview } from "@/components/templates/baby-planning/baby-planning-overview"
import { CreateNote } from "@/components/create-note"
import { BabyPlanningSetupWizard } from "@/components/templates/baby-planning/baby-planning-setup-wizard"
import { HealthTracking } from "@/components/templates/baby-planning/health-tracking"
import { RegistryShopping } from "@/components/templates/baby-planning/registry-shopping"
import { BudgetTracking } from "@/components/templates/baby-planning/budget-tracking"
import { TimelineMilestones } from "@/components/templates/baby-planning/timeline-milestones"
import { PostpartumPlanning } from "@/components/templates/baby-planning/postpartum-planning"
import { BirthPlan } from "@/components/guided-notes/baby-planning/birth-plan"
import { HospitalBag } from "@/components/guided-notes/baby-planning/hospital-bag"
import { NurserySetup } from "@/components/guided-notes/baby-planning/nursery-setup"
import { BabyRegistry } from "@/components/guided-notes/baby-planning/baby-registry"
import { MaternityLeave } from "@/components/guided-notes/baby-planning/maternity-leave"
import { ChildcareSearch } from "@/components/guided-notes/baby-planning/childcare-search"
import { BabyProofing } from "@/components/guided-notes/baby-planning/baby-proofing"
import { FeedingPlan } from "@/components/guided-notes/baby-planning/feeding-plan"
import { SleepSchedule } from "@/components/guided-notes/baby-planning/sleep-schedule"
import { EmergencyContacts } from "@/components/guided-notes/baby-planning/emergency-contacts"
import { PregnancyGuide } from "@/components/resources/baby-planning/pregnancy-guide"
import { BabyGearChecklist } from "@/components/resources/baby-planning/baby-gear-checklist"
import { NewbornCareGuide } from "@/components/resources/baby-planning/newborn-care-guide"
import { PostpartumGuide } from "@/components/resources/baby-planning/postpartum-guide"
import { ThemeToggle } from "@/components/theme-toggle"
import { Badge } from "@/components/ui/badge"
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
import { Clock, Wand2, Baby } from "lucide-react"

export default function Page() {
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
      case "settings":
        return <BabyPlanningSettings />
      
      // Core sections
      case "health":
        return <HealthTracking />
      case "preparation":
        return <PostpartumPlanning />
      case "registry":
        return <RegistryShopping />
      case "budget":
        return <BudgetTracking />
      case "support":
        return <TimelineMilestones />
      
      // Guided Notes
      case "birth-plan":
        return <BirthPlan />
      case "hospital-bag":
        return <HospitalBag />
      case "nursery-setup":
        return <NurserySetup />
      case "baby-registry":
        return <BabyRegistry />
      case "maternity-leave":
        return <MaternityLeave />
      case "childcare":
        return <ChildcareSearch />
      case "baby-proofing":
        return <BabyProofing />
      case "feeding-plan":
        return <FeedingPlan />
      case "sleep-schedule":
        return <SleepSchedule />
      case "emergency-contacts":
        return <EmergencyContacts />
      case "baby-shower":
        return <div className="p-8 text-center text-muted-foreground">Baby Shower Planning - Coming Soon</div>
      case "announcements":
        return <div className="p-8 text-center text-muted-foreground">Announcement Plans - Coming Soon</div>
      
      // Resources
      case "pregnancy-guide":
        return <PregnancyGuide />
      case "baby-gear-checklist":
        return <BabyGearChecklist />
      case "newborn-care":
        return <NewbornCareGuide />
      case "postpartum-guide":
        return <PostpartumGuide />
      
      // My Notes
      case "create-note":
        return <CreateNote />
      
      case "overview":
      default:
        return <BabyPlanningOverview />
    }
  }

  const BabyPlanningSettings = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your baby planning preferences and data</p>
      </div>
      
      <div className="grid gap-6">
        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold mb-2">Baby Planning Setup</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Update your baby information or restart the setup process
          </p>
          <button
            onClick={() => setWizardOpen(true)}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            Edit Baby Details
          </button>
        </div>
      </div>
    </div>
  )

  const getSectionTitle = () => {
    switch (activeSection) {
      case "settings":
        return "Settings"
      case "health":
        return "Health Tracking"
      case "preparation":
        return "Postpartum Planning"
      case "registry":
        return "Registry & Shopping"
      case "budget":
        return "Budget Tracking"
      case "support":
        return "Timeline & Milestones"
      case "birth-plan":
        return "Birth Plan & Preferences"
      case "hospital-bag":
        return "Hospital Bag Checklist"
      case "nursery-setup":
        return "Nursery Setup Guide"
      case "baby-registry":
        return "Baby Registry Essentials"
      case "maternity-leave":
        return "Maternity Leave Planning"
      case "childcare":
        return "Childcare Research & Setup"
      case "baby-proofing":
        return "Baby-Proofing Checklist"
      case "feeding-plan":
        return "Feeding Plan & Schedule"
      case "sleep-schedule":
        return "Sleep Schedule & Routine"
      case "emergency-contacts":
        return "Emergency Contacts & Info"
      case "baby-shower":
        return "Baby Shower Planning"
      case "announcements":
        return "Announcement Plans"
      case "pregnancy-guide":
        return "Pregnancy Week-by-Week Guide"
      case "baby-gear-checklist":
        return "Baby Gear Checklist"
      case "newborn-care":
        return "Newborn Care Guide"
      case "postpartum-guide":
        return "Postpartum Recovery Guide"
      case "create-note":
        return "Create New Note"
      case "overview":
      default:
        return "Baby Planning Overview"
    }
  }

  return (
    <SidebarProvider>
      <SidebarLeft activeSection={activeSection} />
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
                    {getSectionTitle()} - {getBabyPlanningDisplayData(babyPlanningData).parentNames}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex items-center space-x-3 px-3">
            <Badge variant="secondary" className="text-sm hidden sm:flex">
              <Baby className="mr-1 h-3 w-3" />
              Due {getBabyPlanningDisplayData(babyPlanningData).dueDate.toLocaleDateString()}
            </Badge>
            <Badge variant="outline" className="text-sm hidden sm:flex">
              <Clock className="mr-1 h-3 w-3" />
              {getBabyPlanningDisplayData(babyPlanningData).weeksUntilDue > 0 ? `${getBabyPlanningDisplayData(babyPlanningData).weeksUntilDue} weeks left` : 'Baby is here!'}
            </Badge>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setWizardOpen(true)}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3"
                title="Edit Baby Planning Setup"
              >
                <Wand2 className="h-4 w-4" />
              </button>
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
        onComplete={(data) => {
          updateBabyPlanningData(data)
          setWizardOpen(false)
        }}
      />
    </SidebarProvider>
  )
}