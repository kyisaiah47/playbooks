"use client"

import { useState } from "react"
import { DivorceCoordinationProvider } from '@/contexts/divorce-coordination-context'
import { SidebarLeft } from '@/components/templates/divorce-coordination/divorce-coordination-sidebar-left'
import { DivorceCoordinationSetupWizard } from '@/components/templates/divorce-coordination/divorce-coordination-setup-wizard'
import { DivorceCoordinationOverview } from '@/components/templates/divorce-coordination/divorce-coordination-overview'
import { LegalDocuments } from '@/components/templates/divorce-coordination/legal-documents'
import { AssetDivision } from '@/components/templates/divorce-coordination/asset-division'
import { ChildCustody } from '@/components/templates/divorce-coordination/child-custody'
import { FinancialPlanning } from '@/components/templates/divorce-coordination/financial-planning'
import { CommunicationLog } from '@/components/templates/divorce-coordination/communication-log'
import { MyNotes } from '@/components/templates/divorce-coordination/my-notes'
import { DivorceProcessGuide } from '@/components/resources/divorce-coordination/divorce-process-guide'
import { LegalRightsGuide } from '@/components/resources/divorce-coordination/legal-rights-guide'
import { FinancialPlanningGuide } from '@/components/resources/divorce-coordination/financial-planning-guide'
import { ChildCustodyGuide } from '@/components/resources/divorce-coordination/child-custody-guide'
import { useDivorceCoordination, DivorceCoordinationData } from '@/contexts/divorce-coordination-context'

export default function DivorceCoordinationAppPage() {
  return (
    <DivorceCoordinationProvider>
      <DivorceAppContent />
    </DivorceCoordinationProvider>
  )
}

function DivorceAppContent() {
  const [currentPage, setCurrentPage] = useState('overview')
  const { isWizardOpen, setWizardOpen, updateDivorceData } = useDivorceCoordination()

  const handleSetupComplete = (data: DivorceCoordinationData) => {
    updateDivorceData(data)
  }
  
  const renderPage = () => {
    switch (currentPage) {
      case 'overview':
        return <DivorceCoordinationOverview />
      case 'legal-documents':
        return <LegalDocuments />
      case 'asset-division':
        return <AssetDivision />
      case 'child-custody':
        return <ChildCustody />
      case 'financial-planning':
        return <FinancialPlanning />
      case 'communication-log':
        return <CommunicationLog />
      case 'my-notes':
        return <MyNotes />
      case 'divorce-process-guide':
        return <DivorceProcessGuide />
      case 'legal-rights-guide':
        return <LegalRightsGuide />
      case 'financial-planning-guide':
        return <FinancialPlanningGuide />
      case 'child-custody-guide':
        return <ChildCustodyGuide />
      default:
        return <DivorceCoordinationOverview />
    }
  }

  return (
    <>
      <div className="flex h-screen">
        <SidebarLeft activeSection={currentPage} onNavigate={setCurrentPage} />
        <main className="flex-1 overflow-y-auto">
          {renderPage()}
        </main>
      </div>

      <DivorceCoordinationSetupWizard
        isOpen={isWizardOpen}
        onClose={() => setWizardOpen(false)}
        onComplete={handleSetupComplete}
      />
    </>
  )
}