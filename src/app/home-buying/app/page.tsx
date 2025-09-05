"use client"

import { useState, useEffect } from "react"
import { HomeBuyingSidebarLeft } from "@/components/templates/home-buying/home-buying-sidebar-left"
import { SidebarRight } from "@/components/sidebar-right"
import { HomeBuyingOverview } from "@/components/templates/home-buying/home-buying-overview"
import { PropertySearch } from "@/components/templates/home-buying/property-search"
import { Financing } from "@/components/templates/home-buying/financing"
import { Inspections } from "@/components/templates/home-buying/inspections"
import { Moving } from "@/components/templates/home-buying/moving"
import { Legal } from "@/components/templates/home-buying/legal"
import { CreateNote } from "@/components/create-note"
import { HomeBuyingSetupWizard } from "@/components/templates/home-buying/home-buying-setup-wizard"

// Guided Notes Components
import { HouseHuntingCriteria } from "@/components/guided-notes/home-buying/house-hunting-criteria"
import { MortgageComparison } from "@/components/guided-notes/home-buying/mortgage-comparison"
import { DownPayment } from "@/components/guided-notes/home-buying/down-payment"
import { HomeInspection } from "@/components/guided-notes/home-buying/home-inspection"
import { Insurance } from "@/components/guided-notes/home-buying/insurance"
import { ClosingProcess } from "@/components/guided-notes/home-buying/closing-process"
import { MovingTimeline } from "@/components/guided-notes/home-buying/moving-timeline"
import { UtilitySetup } from "@/components/guided-notes/home-buying/utility-setup"
import { NeighborhoodResearch } from "@/components/guided-notes/home-buying/neighborhood-research"
import { PropertyTaxes } from "@/components/guided-notes/home-buying/property-taxes"

// Resources Components
import { BuyersGuide } from "@/components/resources/home-buying/buyers-guide"
import { MortgageGuide } from "@/components/resources/home-buying/mortgage-guide"
import { InspectionChecklist } from "@/components/resources/home-buying/inspection-checklist"
import { ClosingGuide } from "@/components/resources/home-buying/closing-guide"
import { ThemeToggle } from "@/components/theme-toggle"
import { Badge } from "@/components/ui/badge"
import { useHomeBuying, getHomeBuyingDisplayData } from "@/contexts/home-buying-context"
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
import { CalendarIcon, Clock, Wand2 } from "lucide-react"

export default function Page() {
  const [activeSection, setActiveSection] = useState("overview")
  const { homeBuyingData, isWizardOpen, setWizardOpen, updateHomeBuyingData } = useHomeBuying()

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
      // Core Pages
      case "property-search":
        return <PropertySearch />
      case "financing":
        return <Financing />
      case "inspections":
        return <Inspections />
      case "moving":
        return <Moving />
      case "legal":
        return <Legal />
      
      // Guided Notes
      case "house-hunting-criteria":
        return <HouseHuntingCriteria />
      case "mortgage-comparison":
        return <MortgageComparison />
      case "down-payment":
        return <DownPayment />
      case "home-inspection":
        return <HomeInspection />
      case "insurance":
        return <Insurance />
      case "closing-process":
        return <ClosingProcess />
      case "moving-timeline":
        return <MovingTimeline />
      case "utility-setup":
        return <UtilitySetup />
      case "neighborhood-research":
        return <NeighborhoodResearch />
      case "property-taxes":
        return <PropertyTaxes />
      
      // Resources
      case "buyers-guide":
        return <BuyersGuide />
      case "mortgage-guide":
        return <MortgageGuide />
      case "inspection-checklist":
        return <InspectionChecklist />
      case "closing-guide":
        return <ClosingGuide />
      
      // Settings
      case "settings":
        return <HomeBuyingSettings />
      
      // My Notes
      case "create-note":
        return <CreateNote />
      
      case "overview":
      default:
        return <HomeBuyingOverview />
    }
  }

  const HomeBuyingSettings = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your home buying preferences and data</p>
      </div>
      
      <div className="grid gap-6">
        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold mb-2">Home Buying Setup</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Update your home buying information or restart the setup process
          </p>
          <button
            onClick={() => setWizardOpen(true)}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            Edit Home Buying Details
          </button>
        </div>
      </div>
    </div>
  )

  const getSectionTitle = () => {
    switch (activeSection) {
      case "property-search":
        return "Property Search"
      case "financing":
        return "Financing"
      case "inspections":
        return "Inspections"
      case "moving":
        return "Moving"
      case "legal":
        return "Legal & Paperwork"
      case "house-hunting-criteria":
        return "House Hunting Criteria"
      case "mortgage-comparison":
        return "Mortgage Comparison"
      case "down-payment":
        return "Down Payment Strategy"
      case "home-inspection":
        return "Home Inspection Guide"
      case "insurance":
        return "Homeowners Insurance"
      case "closing-process":
        return "Closing Process"
      case "moving-timeline":
        return "Moving Timeline"
      case "utility-setup":
        return "Utility Setup"
      case "neighborhood-research":
        return "Neighborhood Research"
      case "property-taxes":
        return "Property Tax Planning"
      case "buyers-guide":
        return "First-Time Buyer's Guide"
      case "mortgage-guide":
        return "Mortgage Guide"
      case "inspection-checklist":
        return "Inspection Checklist"
      case "closing-guide":
        return "Closing Guide"
      case "settings":
        return "Settings"
      case "create-note":
        return "My Notes"
      case "overview":
      default:
        return "Home Buying Overview"
    }
  }

  return (
    <SidebarProvider>
      <HomeBuyingSidebarLeft activeSection={activeSection} />
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
                    {getSectionTitle()} - {getHomeBuyingDisplayData(homeBuyingData).buyerNames}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex items-center space-x-3 px-3">
            <Badge variant="secondary" className="text-sm hidden sm:flex">
              <CalendarIcon className="mr-1 h-3 w-3" />
              {getHomeBuyingDisplayData(homeBuyingData).targetMoveDate.toLocaleDateString()}
            </Badge>
            <Badge variant="outline" className="text-sm hidden sm:flex">
              <Clock className="mr-1 h-3 w-3" />
              {getHomeBuyingDisplayData(homeBuyingData).daysUntilMove > 0 ? `${getHomeBuyingDisplayData(homeBuyingData).daysUntilMove} days left` : 'Move Day!'}
            </Badge>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setWizardOpen(true)}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3"
                title="Edit Home Buying Setup"
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
      <HomeBuyingSetupWizard
        isOpen={isWizardOpen}
        onClose={() => setWizardOpen(false)}
        onComplete={(data) => {
          updateHomeBuyingData(data)
          setWizardOpen(false)
        }}
      />
    </SidebarProvider>
  )
}