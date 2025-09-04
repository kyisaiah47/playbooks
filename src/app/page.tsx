"use client"

import { useState, useEffect } from "react"
import { SidebarLeft } from "@/components/sidebar-left"
import { SidebarRight } from "@/components/sidebar-right"
import { WeddingOverview } from "@/components/wedding-overview"
import { VendorManagement } from "@/components/vendor-management"
import { GuestManagement } from "@/components/guest-management"
import { BudgetTracking } from "@/components/budget-tracking"
import { TaskManagement } from "@/components/task-management"
import { WeddingSetupWizard } from "@/components/wedding-setup-wizard"
import { ThemeToggle, ThemeToggleSwitch } from "@/components/theme-toggle"
import { Badge } from "@/components/ui/badge"
import { useWedding, getWeddingDisplayData } from "@/contexts/wedding-context"
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
import { CalendarIcon, Clock } from "lucide-react"

export default function Page() {
  const [activeSection, setActiveSection] = useState("overview")
  const { weddingData, isWizardOpen, setWizardOpen, updateWeddingData } = useWedding()

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
      case "vendors":
        return <VendorManagement />
      case "guests":
        return <GuestManagement />
      case "budget":
        return <BudgetTracking />
      case "tasks":
        return <TaskManagement />
      case "settings":
        return <WeddingSettings />
      case "overview":
      default:
        return <WeddingOverview />
    }
  }

  const WeddingSettings = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your wedding planning preferences and data</p>
      </div>
      
      <div className="grid gap-6">
        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold mb-2">Wedding Setup</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Update your wedding information or restart the setup process
          </p>
          <button
            onClick={() => setWizardOpen(true)}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            Edit Wedding Details
          </button>
        </div>
      </div>
    </div>
  )

  const getSectionTitle = () => {
    switch (activeSection) {
      case "vendors":
        return "Vendor Management"
      case "guests":
        return "Guest Management"
      case "budget":
        return "Budget Tracking"
      case "tasks":
        return "Task Management"
      case "settings":
        return "Settings"
      case "overview":
      default:
        return "Wedding Overview"
    }
  }

  return (
    <SidebarProvider>
      <SidebarLeft />
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
                    {getSectionTitle()} - {getWeddingDisplayData(weddingData).coupleNames}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex items-center space-x-3 px-3">
            <Badge variant="secondary" className="text-sm hidden sm:flex">
              <CalendarIcon className="mr-1 h-3 w-3" />
              {getWeddingDisplayData(weddingData).weddingDate.toLocaleDateString()}
            </Badge>
            <Badge variant="outline" className="text-sm hidden sm:flex">
              <Clock className="mr-1 h-3 w-3" />
              {getWeddingDisplayData(weddingData).daysUntil > 0 ? `${getWeddingDisplayData(weddingData).daysUntil} days left` : 'Wedding Day!'}
            </Badge>
            <div className="flex items-center space-x-2">
              <ThemeToggleSwitch />
              <ThemeToggle />
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {renderContent()}
        </div>
      </SidebarInset>
      <SidebarRight />
      <WeddingSetupWizard 
        isOpen={isWizardOpen}
        onClose={() => setWizardOpen(false)}
        onComplete={(data) => updateWeddingData(data)}
      />
    </SidebarProvider>
  )
}
