"use client"

import { useState, useEffect } from "react"
import { ResearchSidebarLeft } from "@/components/research-sidebar-left"
import { SidebarRight } from "@/components/sidebar-right"
import { ResearchOverview } from "@/components/research-overview"
import { LiteratureReview } from "@/components/literature-review"
import { MethodologyPlanning } from "@/components/methodology-planning"
import { DataManagement } from "@/components/data-management"
import { WritingTracker } from "@/components/writing-tracker"
import { ResearchSetupWizard } from "@/components/research-setup-wizard"
import { ThemeToggle } from "@/components/theme-toggle"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useResearch, getResearchDisplayData, ResearchProvider } from "@/contexts/research-context"
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
import { CalendarIcon, Clock, BookOpen, Users, Target, Wand2 } from "lucide-react"

function ResearchTemplatePage() {
  const [activeSection, setActiveSection] = useState("overview")
  const { researchData, isWizardOpen, setWizardOpen, updateResearchData } = useResearch()

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
      case "literature":
        return <LiteratureReview />
      case "methodology":
        return <MethodologyPlanning />
      case "data":
        return <DataManagement />
      case "writing":
        return <WritingTracker />
      case "collaboration":
        return <CollaborationHub />
      case "timeline":
        return <ProjectTimeline />
      case "settings":
        return <ResearchSettings />
      case "overview":
      default:
        return <ResearchOverview />
    }
  }


  const CollaborationHub = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center">
          <Users className="mr-2 h-8 w-8" />
          Collaboration Hub
        </h1>
        <p className="text-muted-foreground">Coordinate with your research team</p>
      </div>
      
      <div className="grid gap-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-lg border p-6">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <Users className="mr-2 h-5 w-5" />
              Team Members
            </h3>
            <p className="text-muted-foreground mb-4">
              Manage your research collaborators and their roles
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                <span className="font-medium">{researchData.supervisor || "Supervisor"}</span>
                <Badge variant="outline">Advisor</Badge>
              </div>
              <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                <span className="font-medium">You</span>
                <Badge variant="default">Lead Researcher</Badge>
              </div>
              {researchData.teamSize > 1 && (
                <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                  <span className="font-medium">{researchData.teamSize - 1} Other Member{researchData.teamSize > 2 ? 's' : ''}</span>
                  <Badge variant="secondary">Collaborator{researchData.teamSize > 2 ? 's' : ''}</Badge>
                </div>
              )}
            </div>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="text-lg font-semibold mb-2">Communication</h3>
            <p className="text-muted-foreground mb-4">
              Track meetings and communications
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>• Weekly supervisor meetings scheduled</div>
              <div>• Team collaboration tools integrated</div>
              <div>• Progress reports automated</div>
              <div>• Document sharing enabled</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const ProjectTimeline = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center">
          <CalendarIcon className="mr-2 h-8 w-8" />
          Project Timeline
        </h1>
        <p className="text-muted-foreground">Manage your research schedule and milestones</p>
      </div>
      
      <div className="grid gap-6">
        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold mb-4">Research Phases</h3>
          <div className="space-y-4">
            {[
              { phase: "Literature Review", duration: "2 months", status: "in-progress" },
              { phase: "Methodology Development", duration: "1 month", status: "upcoming" },
              { phase: "Data Collection", duration: "3 months", status: "upcoming" },
              { phase: "Data Analysis", duration: "2 months", status: "upcoming" },
              { phase: "Writing & Revision", duration: "3 months", status: "upcoming" },
              { phase: "Final Submission", duration: "1 month", status: "upcoming" }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <h4 className="font-medium">{item.phase}</h4>
                  <p className="text-sm text-muted-foreground">{item.duration}</p>
                </div>
                <Badge variant={item.status === 'in-progress' ? 'default' : 'secondary'}>
                  {item.status}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const resetAllData = () => {
    if (window.confirm('Are you sure you want to reset all research data? This action cannot be undone.')) {
      localStorage.removeItem('templata-research-data')
      window.location.reload()
    }
  }

  const ResearchSettings = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your research project preferences and data</p>
      </div>
      
      <div className="grid gap-6">
        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold mb-2">Research Project Setup</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Update your research information or restart the setup process
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => setWizardOpen(true)}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Edit Research Details
            </button>
            <button
              onClick={resetAllData}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-destructive border-destructive/30 hover:bg-destructive/10"
            >
              Reset All Data
            </button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Reset will clear all project data and restart the setup wizard
          </p>
        </div>
      </div>
    </div>
  )

  const getSectionTitle = () => {
    switch (activeSection) {
      case "literature":
        return "Literature Review"
      case "methodology":
        return "Methodology Planning"
      case "data":
        return "Data Management"
      case "writing":
        return "Writing Tracker"
      case "collaboration":
        return "Collaboration Hub"
      case "timeline":
        return "Project Timeline"
      case "settings":
        return "Settings"
      case "overview":
      default:
        return "Research Overview"
    }
  }

  return (
    <SidebarProvider>
      <ResearchSidebarLeft />
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
                    {getSectionTitle()} - {getResearchDisplayData(researchData).projectTitle}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex items-center space-x-3 px-3">
            <Badge variant="secondary" className="text-sm hidden sm:flex">
              <CalendarIcon className="mr-1 h-3 w-3" />
              {getResearchDisplayData(researchData).endDate.toLocaleDateString()}
            </Badge>
            <Badge variant="outline" className="text-sm hidden sm:flex">
              <Clock className="mr-1 h-3 w-3" />
              {getResearchDisplayData(researchData).daysUntilDeadline} days left
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
      <ResearchSetupWizard 
        isOpen={isWizardOpen}
        onClose={() => setWizardOpen(false)}
        onComplete={(data) => updateResearchData(data)}
        initialData={researchData}
      />
    </SidebarProvider>
  )
}

export default function Page() {
  return (
    <ResearchProvider>
      <ResearchTemplatePage />
    </ResearchProvider>
  )
}