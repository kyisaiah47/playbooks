"use client"

import { useState, useEffect } from "react"
import { JobSearchSidebarLeft } from "@/components/job-search-sidebar-left"
import { SidebarRight } from "@/components/sidebar-right"
import { JobSearchOverview } from "@/components/job-search-overview"
import { ApplicationTracker } from "@/components/application-tracker"
import { InterviewPrep } from "@/components/interview-prep"
import { NetworkingManager } from "@/components/networking-manager"
import { SalaryTracker } from "@/components/salary-tracker"
import { JobSearchSchedule } from "@/components/job-search-schedule"
import { JobSearchSetupWizard } from "@/components/job-search-setup-wizard"
import { ThemeToggle } from "@/components/theme-toggle"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useJobSearch, getJobSearchDisplayData } from "@/contexts/job-search-context"
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
import { CalendarIcon, Clock, Target, Wand2, Settings2, LifeBuoy } from "lucide-react"

function JobSearchTemplatePage() {
  const [activeSection, setActiveSection] = useState("overview")
  const { jobSearchData, isWizardOpen, setWizardOpen, updateJobSearchData } = useJobSearch()

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
      case "applications":
        return <ApplicationTracker />
      case "interviews":
        return <InterviewPrep />
      case "networking":
        return <NetworkingManager />
      case "salary":
        return <SalaryTracker />
      case "schedule":
        return <JobSearchSchedule />
      case "settings":
        return <JobSearchSettings />
      case "help":
        return <JobSearchHelp />
      case "overview":
      default:
        return <JobSearchOverview />
    }
  }

  const resetAllData = () => {
    if (window.confirm('Are you sure you want to reset all job search data? This action cannot be undone.')) {
      localStorage.removeItem('templata-job-search-data')
      window.location.reload()
    }
  }

  const JobSearchSettings = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center">
          <Settings2 className="mr-2 h-8 w-8" />
          Settings
        </h1>
        <p className="text-muted-foreground">Manage your job search preferences and data</p>
      </div>
      
      <div className="grid gap-6">
        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold mb-2">Job Search Setup</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Update your job search information or restart the setup process
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => setWizardOpen(true)}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Edit Job Search Details
            </button>
            <button
              onClick={resetAllData}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-destructive border-destructive/30 hover:bg-destructive/10"
            >
              Reset All Data
            </button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Reset will clear all job search data and restart the setup wizard
          </p>
        </div>

        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold mb-2">Current Preferences</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium">Target Role:</span>
              <p className="text-muted-foreground">{jobSearchData.targetRole || "Not set"}</p>
            </div>
            <div>
              <span className="font-medium">Industry:</span>
              <p className="text-muted-foreground">{jobSearchData.industry || "Not set"}</p>
            </div>
            <div>
              <span className="font-medium">Experience Level:</span>
              <p className="text-muted-foreground">{jobSearchData.experienceLevel.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
            </div>
            <div>
              <span className="font-medium">Work Type:</span>
              <p className="text-muted-foreground">{jobSearchData.workType.charAt(0).toUpperCase() + jobSearchData.workType.slice(1)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const JobSearchHelp = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center">
          <LifeBuoy className="mr-2 h-8 w-8" />
          Help & Support
        </h1>
        <p className="text-muted-foreground">Tips and guidance for your job search journey</p>
      </div>
      
      <div className="grid gap-6">
        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold mb-4">Getting Started</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">1. Complete Your Profile</h4>
              <p className="text-sm text-muted-foreground">Use the setup wizard to configure your job search preferences and goals.</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">2. Track Applications</h4>
              <p className="text-sm text-muted-foreground">Log every job application to maintain momentum and track your progress.</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">3. Prepare for Interviews</h4>
              <p className="text-sm text-muted-foreground">Use the interview prep tools to practice common questions and research companies.</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">4. Build Your Network</h4>
              <p className="text-sm text-muted-foreground">Maintain professional relationships and seek referral opportunities.</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold mb-4">Best Practices</h3>
          <div className="space-y-2 text-sm">
            <div>• Set weekly application targets and stick to them</div>
            <div>• Follow up on applications after 1-2 weeks</div>
            <div>• Customize your resume and cover letter for each position</div>
            <div>• Practice your elevator pitch regularly</div>
            <div>• Research companies thoroughly before interviews</div>
            <div>• Send thank-you notes after interviews</div>
            <div>• Keep detailed records of all interactions</div>
          </div>
        </div>
      </div>
    </div>
  )

  const getSectionTitle = () => {
    switch (activeSection) {
      case "applications":
        return "Applications"
      case "interviews":
        return "Interview Prep"
      case "networking":
        return "Networking"
      case "salary":
        return "Salary Tracker"
      case "schedule":
        return "Schedule"
      case "settings":
        return "Settings"
      case "help":
        return "Help"
      case "overview":
      default:
        return "Job Search Overview"
    }
  }

  const displayData = getJobSearchDisplayData(jobSearchData)

  return (
    <SidebarProvider>
      <JobSearchSidebarLeft />
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
                    {getSectionTitle()} - {displayData.targetRole}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex items-center space-x-3 px-3">
            <Badge variant="secondary" className="text-sm hidden sm:flex">
              <Target className="mr-1 h-3 w-3" />
              {displayData.weeklyTarget}/week
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
      <JobSearchSetupWizard 
        isOpen={isWizardOpen}
        onClose={() => setWizardOpen(false)}
        onComplete={(data) => updateJobSearchData(data)}
        initialData={jobSearchData}
      />
    </SidebarProvider>
  )
}

export default function Page() {
  return <JobSearchTemplatePage />
}