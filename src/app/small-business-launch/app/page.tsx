"use client"

import { useState } from "react"
import { SmallBusinessProvider } from '@/contexts/small-business-context'
import { SidebarLeft } from '@/components/templates/small-business/small-business-sidebar-left'
import { SmallBusinessSetupWizard } from '@/components/templates/small-business/small-business-setup-wizard'
import { SmallBusinessOverview } from '@/components/templates/small-business/small-business-overview'
import { BusinessPlanning } from '@/components/templates/small-business/business-planning'
import { LegalCompliance } from '@/components/templates/small-business/legal-compliance'
import { FinancialManagement } from '@/components/templates/small-business/financial-management'
import { MarketingLaunch } from '@/components/templates/small-business/marketing-launch'
import { OperationsSetup as OperationsSetupPage } from '@/components/templates/small-business/operations-setup'

// Import guided notes
import { BusinessModelCanvas } from '@/components/guided-notes/small-business/business-model-canvas'
import { MarketResearch } from '@/components/guided-notes/small-business/market-research'
import { CompetitiveAnalysis } from '@/components/guided-notes/small-business/competitive-analysis'
import { FinancialProjections } from '@/components/guided-notes/small-business/financial-projections'
import { FundingStrategy } from '@/components/guided-notes/small-business/funding-strategy'
import { LegalStructure } from '@/components/guided-notes/small-business/legal-structure'
import { BrandIdentity } from '@/components/guided-notes/small-business/brand-identity'
import { ProductDevelopment } from '@/components/guided-notes/small-business/product-development'
import { LaunchStrategy } from '@/components/guided-notes/small-business/launch-strategy'
import { CustomerAcquisition } from '@/components/guided-notes/small-business/customer-acquisition'
import { OperationsSetup } from '@/components/guided-notes/small-business/operations-setup'
import { RiskManagement } from '@/components/guided-notes/small-business/risk-management'
import { useSmallBusiness } from '@/contexts/small-business-context'

// Import resources
import { StartupGuide } from '@/components/resources/small-business/startup-guide'
import { BusinessPlanTemplate } from '@/components/resources/small-business/business-plan-template'
import { LegalChecklist } from '@/components/resources/small-business/legal-checklist'
import { MarketingToolkit } from '@/components/resources/small-business/marketing-toolkit'

// Import My Notes component
import { CreateNote } from '@/components/create-note'

export default function SmallBusinessAppPage() {
  return (
    <SmallBusinessProvider>
      <SmallBusinessAppContent />
    </SmallBusinessProvider>
  )
}

function SmallBusinessAppContent() {
  const [currentPage, setCurrentPage] = useState('overview')
  const { isWizardOpen, updateBusinessData } = useSmallBusiness()

  const handleSetupComplete = (wizardData: unknown) => {
    updateBusinessData({
      ...(wizardData as Record<string, unknown>),
      setupCompleted: true,
    })
  }

  const handleNavigation = (page: string) => {
    setCurrentPage(page)
  }
  
  const renderPage = () => {
    switch (currentPage) {
      case 'overview':
        return <SmallBusinessOverview />
      case 'planning':
        return <BusinessPlanning />
      case 'legal':
        return <LegalCompliance />
      case 'finances':
        return <FinancialManagement />
      case 'marketing':
        return <MarketingLaunch />
      case 'operations':
        return <OperationsSetupPage />
      
      // Guided Notes
      case 'business-model':
        return <BusinessModelCanvas />
      case 'market-research':
        return <MarketResearch />
      case 'competitive-analysis':
        return <CompetitiveAnalysis />
      case 'financial-projections':
        return <FinancialProjections />
      case 'funding-strategy':
        return <FundingStrategy />
      case 'legal-structure':
        return <LegalStructure />
      case 'brand-identity':
        return <BrandIdentity />
      case 'product-development':
        return <ProductDevelopment />
      case 'launch-strategy':
        return <LaunchStrategy />
      case 'customer-acquisition':
        return <CustomerAcquisition />
      case 'operations-setup':
        return <OperationsSetup />
      case 'risk-management':
        return <RiskManagement />
      
      // Resources
      case 'startup-guide':
        return <StartupGuide />
      case 'business-plan-template':
        return <BusinessPlanTemplate />
      case 'legal-checklist':
        return <LegalChecklist />
      case 'marketing-toolkit':
        return <MarketingToolkit />
      
      // My Notes
      case 'my-notes':
        return (
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2">My Notes</h1>
              <p className="text-muted-foreground">
                Create free-form notes alongside your structured small business planning
              </p>
            </div>
            <CreateNote />
          </div>
        )
      
      default:
        return <SmallBusinessOverview />
    }
  }

  return (
    <>
      <div className="flex h-screen">
        <SidebarLeft activeSection={currentPage} onNavigate={handleNavigation} />
        <main className="flex-1 overflow-y-auto">
          {renderPage()}
        </main>
      </div>

      <SmallBusinessSetupWizard
        open={isWizardOpen}
        onComplete={handleSetupComplete}
      />
    </>
  )
}