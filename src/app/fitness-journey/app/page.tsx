"use client"

import { useState, useEffect } from "react"
import { FitnessJourneyProvider } from '@/contexts/fitness-journey-context'
import { SidebarLeft } from '@/components/templates/fitness-journey/fitness-journey-sidebar-left'
import { FitnessJourneySetupWizard } from '@/components/templates/fitness-journey/fitness-journey-setup-wizard'
import { FitnessJourneyOverview } from '@/components/templates/fitness-journey/fitness-journey-overview'
import { WorkoutPlanning } from '@/components/templates/fitness-journey/workout-planning'
import { NutritionTracking } from '@/components/templates/fitness-journey/nutrition-tracking'
import { ProgressMonitoring } from '@/components/templates/fitness-journey/progress-monitoring'
import { GoalSetting as GoalSettingTemplate } from '@/components/templates/fitness-journey/goal-setting'
import { HealthMetrics } from '@/components/templates/fitness-journey/health-metrics'
// Guided Notes imports
import { GoalSetting } from '@/components/guided-notes/fitness-journey/goal-setting'
import { WorkoutPlanning as WorkoutPlanningGuide } from '@/components/guided-notes/fitness-journey/workout-planning'
import { NutritionPlanning } from '@/components/guided-notes/fitness-journey/nutrition-planning'
import { ProgressTracking } from '@/components/guided-notes/fitness-journey/progress-tracking'
import { EquipmentSetup } from '@/components/guided-notes/fitness-journey/equipment-setup'
import { MotivationHabits } from '@/components/guided-notes/fitness-journey/motivation-habits'
import { InjuryPrevention } from '@/components/guided-notes/fitness-journey/injury-prevention'
import { SocialSupport } from '@/components/guided-notes/fitness-journey/social-support'
import { LifestyleIntegration } from '@/components/guided-notes/fitness-journey/lifestyle-integration'
import { LongTermPlanning } from '@/components/guided-notes/fitness-journey/long-term-planning'

// Resources imports
import { ExerciseGuide } from '@/components/resources/fitness-journey/exercise-guide'
import { NutritionGuide } from '@/components/resources/fitness-journey/nutrition-guide'
import { FitnessChecklist } from '@/components/resources/fitness-journey/fitness-checklist'

// My Notes import
import { MyNotes } from '@/components/templates/fitness-journey/my-notes'

export default function FitnessJourneyAppPage() {
  return (
    <FitnessJourneyProvider>
      <FitnessJourneyAppContent />
    </FitnessJourneyProvider>
  )
}

function FitnessJourneyAppContent() {
  const [currentPage, setCurrentPage] = useState('overview')
  
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "")
      if (hash) {
        setCurrentPage(hash)
      }
    }

    handleHashChange()
    window.addEventListener("hashchange", handleHashChange)
    
    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])
  
  const renderPage = () => {
    switch (currentPage) {
      // Core template sections
      case 'overview':
        return <FitnessJourneyOverview />
      case 'goals':
        return <GoalSettingTemplate />
      case 'workout':
        return <WorkoutPlanning />
      case 'nutrition':
        return <NutritionTracking />
      case 'progress':
        return <ProgressMonitoring />
      case 'health-metrics':
        return <HealthMetrics />
      
      // Guided Notes sections
      case 'goal-setting':
        return <GoalSetting />
      case 'workout-planning':
        return <WorkoutPlanningGuide />
      case 'nutrition-planning':
        return <NutritionPlanning />
      case 'progress-tracking':
        return <ProgressTracking />
      case 'equipment-setup':
        return <EquipmentSetup />
      case 'motivation-habits':
        return <MotivationHabits />
      case 'injury-prevention':
        return <InjuryPrevention />
      case 'social-support':
        return <SocialSupport />
      case 'lifestyle-integration':
        return <LifestyleIntegration />
      case 'long-term-planning':
        return <LongTermPlanning />
      
      // Resources sections
      case 'exercise-guide':
        return <ExerciseGuide />
      case 'nutrition-guide':
        return <NutritionGuide />
      case 'fitness-checklist':
        return <FitnessChecklist />
      
      // My Notes section
      case 'create-note':
        return <MyNotes />
      
      default:
        return <FitnessJourneyOverview />
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
    </>
  )
}