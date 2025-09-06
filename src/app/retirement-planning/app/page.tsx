"use client"

import { useState } from "react"
import { RetirementPlanningProvider } from '@/contexts/retirement-planning-context'
import { SidebarLeft } from '@/components/templates/retirement-planning/retirement-planning-sidebar-left'
import { RetirementPlanningSetupWizard } from '@/components/templates/retirement-planning/retirement-planning-setup-wizard'
import { RetirementPlanningOverview } from '@/components/templates/retirement-planning/retirement-planning-overview'
import { SavingsTracker } from '@/components/templates/retirement-planning/savings-tracker'
import { InvestmentPortfolio } from '@/components/templates/retirement-planning/investment-portfolio'
import { RetirementGoals } from '@/components/templates/retirement-planning/retirement-goals'
import { IncomePlanning } from '@/components/templates/retirement-planning/income-planning'
import { ExpenseBudgeting } from '@/components/templates/retirement-planning/expense-budgeting'
import { MyNotes } from '@/components/templates/retirement-planning/my-notes'
import { InvestmentGuide } from '@/components/resources/retirement-planning/investment-guide'
import { RetirementTimeline } from '@/components/resources/retirement-planning/retirement-timeline'
import { SocialSecurityGuide } from '@/components/resources/retirement-planning/social-security-guide'
import { HealthcareGuide } from '@/components/resources/retirement-planning/healthcare-guide'
import { SidebarProvider } from "@/components/ui/sidebar"

export default function RetirementPlanningAppPage() {
  return (
    <RetirementPlanningProvider>
      <RetirementAppContent />
    </RetirementPlanningProvider>
  )
}

function RetirementAppContent() {
  const [currentPage, setCurrentPage] = useState('overview')
  const [showSetupWizard, setShowSetupWizard] = useState(false)
  
  const renderPage = () => {
    switch (currentPage) {
      case 'overview':
        return <RetirementPlanningOverview />
      case 'savings':
        return <SavingsTracker />
      case 'portfolio':
        return <InvestmentPortfolio />
      case 'goals':
        return <RetirementGoals />
      case 'income':
        return <IncomePlanning />
      case 'expenses':
        return <ExpenseBudgeting />
      case 'my-notes':
        return <MyNotes />
      case 'investment-guide':
        return <InvestmentGuide />
      case 'retirement-timeline':
        return <RetirementTimeline />
      case 'social-security-guide':
        return <SocialSecurityGuide />
      case 'healthcare-guide':
        return <HealthcareGuide />
      default:
        return <RetirementPlanningOverview />
    }
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <SidebarLeft 
          activeSection={currentPage} 
          onNavigate={setCurrentPage}
        />
        <main className="flex-1 overflow-y-auto">
          {renderPage()}
        </main>
        <RetirementPlanningSetupWizard 
          open={showSetupWizard}
          onComplete={(data) => {
            console.log('Setup completed:', data)
            setShowSetupWizard(false)
          }}
        />
      </div>
    </SidebarProvider>
  )
}