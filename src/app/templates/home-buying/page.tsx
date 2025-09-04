"use client"

import { useState, useEffect } from "react"
import { HomeBuyingSidebarLeft } from "@/components/home-buying-sidebar-left"
import { SidebarRight } from "@/components/sidebar-right"
import { HomeBuyingOverview } from "@/components/home-buying-overview"
import { PropertySearch } from "@/components/property-search"
import { MortgageCalculator } from "@/components/mortgage-calculator"
import { AgentTracker } from "@/components/agent-tracker"
import { HomeInspectionChecklist } from "@/components/home-inspection-checklist"
import { MovingPlanner } from "@/components/moving-planner"
import { DocumentOrganizer } from "@/components/document-organizer"
import { HomeBuyingSetupWizard } from "@/components/home-buying-setup-wizard"
import { ThemeToggle } from "@/components/theme-toggle"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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
import { Calendar, Clock, DollarSign, Wand2, Settings2, LifeBuoy } from "lucide-react"

function HomeBuyingTemplatePage() {
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
      case "properties":
        return <PropertySearch />
      case "mortgage":
        return <MortgageCalculator />
      case "agents":
        return <AgentTracker />
      case "inspection":
        return <HomeInspectionChecklist />
      case "moving":
        return <MovingPlanner />
      case "documents":
        return <DocumentOrganizer />
      case "settings":
        return <HomeBuyingSettings />
      case "help":
        return <HomeBuyingHelp />
      case "overview":
      default:
        return <HomeBuyingOverview />
    }
  }

  const resetAllData = () => {
    if (window.confirm('Are you sure you want to reset all home buying data? This action cannot be undone.')) {
      localStorage.removeItem('templata-home-buying-data')
      window.location.reload()
    }
  }

  const HomeBuyingSettings = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center">
          <Settings2 className="mr-2 h-8 w-8" />
          Settings
        </h1>
        <p className="text-muted-foreground">Manage your home buying preferences and data</p>
      </div>
      
      <div className="grid gap-6">
        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold mb-2">Home Buying Setup</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Update your home search criteria or restart the setup process
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => setWizardOpen(true)}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Edit Home Buying Details
            </button>
            <button
              onClick={resetAllData}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-destructive border-destructive/30 hover:bg-destructive/10"
            >
              Reset All Data
            </button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Reset will clear all home buying data and restart the setup wizard
          </p>
        </div>

        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold mb-2">Current Preferences</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium">Target Location:</span>
              <p className="text-muted-foreground">{homeBuyingData.targetLocation || "Not set"}</p>
            </div>
            <div>
              <span className="font-medium">Budget Range:</span>
              <p className="text-muted-foreground">
                {homeBuyingData.currency} {homeBuyingData.minBudget.toLocaleString()} - {homeBuyingData.maxBudget.toLocaleString()}
              </p>
            </div>
            <div>
              <span className="font-medium">Property Type:</span>
              <p className="text-muted-foreground">{homeBuyingData.propertyType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
            </div>
            <div>
              <span className="font-medium">Bedrooms/Bathrooms:</span>
              <p className="text-muted-foreground">{homeBuyingData.bedrooms} bed, {homeBuyingData.bathrooms} bath</p>
            </div>
            <div>
              <span className="font-medium">First Time Buyer:</span>
              <p className="text-muted-foreground">{homeBuyingData.firstTimeBuyer ? "Yes" : "No"}</p>
            </div>
            <div>
              <span className="font-medium">Timeline:</span>
              <p className="text-muted-foreground">{homeBuyingData.searchTimeline.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const HomeBuyingHelp = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center">
          <LifeBuoy className="mr-2 h-8 w-8" />
          Help & Support
        </h1>
        <p className="text-muted-foreground">Tips and guidance for your home buying journey</p>
      </div>
      
      <div className="grid gap-6">
        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold mb-4">Getting Started</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">1. Complete Your Profile</h4>
              <p className="text-sm text-muted-foreground">Use the setup wizard to configure your home buying preferences and budget.</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">2. Get Pre-Approved</h4>
              <p className="text-sm text-muted-foreground">Get pre-approved for a mortgage to understand your buying power and show sellers you're serious.</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">3. Start Your Property Search</h4>
              <p className="text-sm text-muted-foreground">Use the property search tool to track homes you're interested in and schedule viewings.</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">4. Build Your Team</h4>
              <p className="text-sm text-muted-foreground">Use the agent tracker to manage relationships with real estate professionals.</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">5. Plan Your Move</h4>
              <p className="text-sm text-muted-foreground">Use the moving planner to organize your relocation timeline and tasks.</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold mb-4">Home Buying Tips</h3>
          <div className="space-y-2 text-sm">
            <div>• Get pre-approved before you start shopping</div>
            <div>• Research neighborhoods thoroughly</div>
            <div>• Factor in all costs (taxes, insurance, HOA, maintenance)</div>
            <div>• Don't skip the home inspection</div>
            <div>• Consider future resale value</div>
            <div>• Be prepared to act quickly in competitive markets</div>
            <div>• Keep detailed records of all transactions</div>
            <div>• Work with experienced professionals</div>
          </div>
        </div>

        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold mb-4">Common Mistakes to Avoid</h3>
          <div className="space-y-2 text-sm">
            <div>• Not getting pre-approved first</div>
            <div>• Falling in love with the first house you see</div>
            <div>• Ignoring additional costs beyond the purchase price</div>
            <div>• Skipping the home inspection</div>
            <div>• Making major purchases during the loan process</div>
            <div>• Not researching the neighborhood</div>
            <div>• Waiving contingencies without understanding the risks</div>
          </div>
        </div>
      </div>
    </div>
  )

  const getSectionTitle = () => {
    switch (activeSection) {
      case "properties":
        return "Property Search"
      case "mortgage":
        return "Mortgage Calculator"
      case "agents":
        return "Agent Tracker"
      case "inspection":
        return "Home Inspection"
      case "moving":
        return "Moving Planner"
      case "documents":
        return "Document Organizer"
      case "settings":
        return "Settings"
      case "help":
        return "Help"
      case "overview":
      default:
        return "Home Buying Overview"
    }
  }

  const displayData = getHomeBuyingDisplayData(homeBuyingData)

  return (
    <SidebarProvider>
      <HomeBuyingSidebarLeft />
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
                    {getSectionTitle()} - {displayData.targetLocation}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex items-center space-x-3 px-3">
            <Badge variant="secondary" className="text-sm hidden sm:flex">
              <DollarSign className="mr-1 h-3 w-3" />
              {displayData.budgetRange}
            </Badge>
            <Badge variant="outline" className="text-sm hidden sm:flex">
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
      <HomeBuyingSetupWizard 
        isOpen={isWizardOpen}
        onClose={() => setWizardOpen(false)}
        onComplete={(data) => updateHomeBuyingData(data)}
        initialData={homeBuyingData}
      />
    </SidebarProvider>
  )
}

export default function Page() {
  return <HomeBuyingTemplatePage />
}