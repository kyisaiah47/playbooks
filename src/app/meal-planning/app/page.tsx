"use client"

import { useState, useEffect } from "react"
import { MealPlanningProvider } from '@/contexts/meal-planning-context'
import { SidebarLeft } from '@/components/templates/meal-planning/meal-planning-sidebar-left'
import { MealPlanningSetupWizard } from '@/components/templates/meal-planning/meal-planning-setup-wizard'
import { MealPlanningOverview } from '@/components/templates/meal-planning/meal-planning-overview'
import { MealPlanning } from '@/components/templates/meal-planning/meal-planning'
import { GroceryLists } from '@/components/templates/meal-planning/grocery-lists'
import { RecipeCollection } from '@/components/templates/meal-planning/recipe-collection'
import { NutritionTracking } from '@/components/templates/meal-planning/nutrition-tracking'
import { BudgetTracking } from '@/components/templates/meal-planning/budget-tracking'
import { useMealPlanning } from '@/contexts/meal-planning-context'
import { SidebarProvider } from '@/components/ui/sidebar'

// Guided Notes imports
import { MealPreferences } from '@/components/guided-notes/meal-planning/meal-preferences'
import { WeeklySchedule } from '@/components/guided-notes/meal-planning/weekly-schedule'
import { RecipeCollection as GuidedRecipeCollection } from '@/components/guided-notes/meal-planning/recipe-collection'
import { GroceryPlanning } from '@/components/guided-notes/meal-planning/grocery-planning'
import { MealPrep } from '@/components/guided-notes/meal-planning/meal-prep'
import { KitchenSetup } from '@/components/guided-notes/meal-planning/kitchen-setup'
import { BudgetPlanning } from '@/components/guided-notes/meal-planning/budget-planning'
import { FamilyCoordination } from '@/components/guided-notes/meal-planning/family-coordination'
import { SeasonalPlanning } from '@/components/guided-notes/meal-planning/seasonal-planning'
import { SpecialOccasions } from '@/components/guided-notes/meal-planning/special-occasions'

// Resource imports
import { NutritionBasics } from '@/components/resources/meal-planning/nutrition-basics'
import { MealPrepGuide } from '@/components/resources/meal-planning/meal-prep-guide'
import { BudgetCooking } from '@/components/resources/meal-planning/budget-cooking'
import { HealthyEatingGuide } from '@/components/resources/meal-planning/healthy-eating-guide'

// My Notes import
import { MyNotes } from '@/components/templates/meal-planning/my-notes'

export default function MealPlanningAppPage() {
  return (
    <MealPlanningProvider>
      <MealPlanningAppContent />
    </MealPlanningProvider>
  )
}

function MealPlanningAppContent() {
  const [currentPage, setCurrentPage] = useState('overview')
  const { isWizardOpen, completeWizardSetup } = useMealPlanning()

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

  const handleSetupComplete = (wizardData: Partial<import("@/contexts/meal-planning-context").MealPlanningData>) => {
    completeWizardSetup(wizardData)
  }

  // Handle sidebar navigation
  const handleSidebarClick = (e: MouseEvent) => {
    e.preventDefault()
    const target = e.target as HTMLElement
    const link = target.closest('a')
    if (link) {
      const href = link.getAttribute('href')
      if (href?.startsWith('#')) {
        const page = href.slice(1)
        setCurrentPage(page)
      }
    }
  }

  const renderPage = () => {
    switch (currentPage) {
      // Main sections
      case 'overview':
        return <MealPlanningOverview />
      case 'meal-planning':
        return <MealPlanning />
      case 'shopping':
        return <GroceryLists />
      case 'recipes':
        return <RecipeCollection />
      case 'nutrition':
        return <NutritionTracking />
      case 'budget':
        return <BudgetTracking />

      // Guided Notes
      case 'guided-notes/meal-preferences':
        return <MealPreferences />
      case 'guided-notes/weekly-schedule':
        return <WeeklySchedule />
      case 'guided-notes/recipe-collection':
        return <GuidedRecipeCollection />
      case 'guided-notes/grocery-planning':
        return <GroceryPlanning />
      case 'guided-notes/meal-prep':
        return <MealPrep />
      case 'guided-notes/kitchen-setup':
        return <KitchenSetup />
      case 'guided-notes/budget-planning':
        return <BudgetPlanning />
      case 'guided-notes/family-coordination':
        return <FamilyCoordination />
      case 'guided-notes/seasonal-planning':
        return <SeasonalPlanning />
      case 'guided-notes/special-occasions':
        return <SpecialOccasions />

      // Resources
      case 'nutrition-basics':
        return <NutritionBasics />
      case 'meal-prep-guide':
        return <MealPrepGuide />
      case 'budget-cooking':
        return <BudgetCooking />
      case 'healthy-eating-guide':
        return <HealthyEatingGuide />

      // My Notes
      case 'my-notes':
        return <MyNotes />

      default:
        return <MealPlanningOverview />
    }
  }

  return (
    <>
      <div className="flex h-screen" onClick={handleSidebarClick as any}>
        <SidebarProvider>
          <SidebarLeft activeSection={currentPage} />
          <main className="flex-1 overflow-y-auto">
            {renderPage()}
          </main>
        </SidebarProvider>
      </div>

      <MealPlanningSetupWizard
        open={isWizardOpen}
        onComplete={handleSetupComplete}
      />
    </>
  )
}