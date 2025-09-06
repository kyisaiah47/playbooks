"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react"

export interface MealPlanningData {
  // Basic Info
  name: string
  email: string
  primaryGoal: string
  timeline: string
  
  // Household Details
  householdSize: string
  dietaryRestrictions: string
  budgetRange: string
  
  // Meal Preferences
  mealTypes: string
  cookingSkillLevel: string
  prepTimePreference: string
  
  // Planning Goals
  planningFrequency: string
  shoppingPreference: string
  notes: string
  
  // Setup tracking
  setupCompleted: boolean
}

interface MealPlanningContextType {
  mealPlanningData: MealPlanningData | null
  isSetupComplete: boolean
  isWizardOpen: boolean
  setWizardOpen: (open: boolean) => void
  updateMealPlanningData: (data: MealPlanningData) => void
  completeWizardSetup: (data: Partial<MealPlanningData>) => void
  resetMealPlanningData: () => void
}

const MealPlanningContext = createContext<MealPlanningContextType | undefined>(undefined)

const defaultMealPlanningData: MealPlanningData = {
  name: "",
  email: "",
  primaryGoal: "",
  timeline: "",
  householdSize: "",
  dietaryRestrictions: "",
  budgetRange: "",
  mealTypes: "",
  cookingSkillLevel: "",
  prepTimePreference: "",
  planningFrequency: "",
  shoppingPreference: "",
  notes: "",
  setupCompleted: false
}

export function MealPlanningProvider({ children }: { children: ReactNode }) {
  const [mealPlanningData, setMealPlanningData] = useState<MealPlanningData | null>(null)
  const [isSetupComplete, setIsSetupComplete] = useState(false)
  const [isWizardOpen, setIsWizardOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // Load data from localStorage on mount
  useEffect(() => {
    try {
      const savedData = localStorage.getItem("meal-planning-data")
      const savedSetupComplete = localStorage.getItem("meal-planning-setup-complete")
      
      if (savedData) {
        const parsedData = JSON.parse(savedData)
        setMealPlanningData(parsedData)
      }
      
      if (savedSetupComplete === "true" || (savedData && JSON.parse(savedData)?.setupCompleted)) {
        setIsSetupComplete(true)
      } else {
        // First visit - show wizard
        setIsWizardOpen(true)
      }
    } catch (error) {
      console.error("Error loading meal planning data:", error)
      // First visit or error - show wizard
      setIsWizardOpen(true)
    } finally {
      setIsLoaded(true)
    }
  }, [])

  // Save data to localStorage whenever it changes
  useEffect(() => {
    if (mealPlanningData && isLoaded) {
      try {
        localStorage.setItem("meal-planning-data", JSON.stringify(mealPlanningData))
      } catch (error) {
        console.error("Error saving meal planning data:", error)
      }
    }
  }, [mealPlanningData, isLoaded])

  // Save setup completion status
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("meal-planning-setup-complete", isSetupComplete.toString())
    }
  }, [isSetupComplete, isLoaded])

  const updateMealPlanningData = (data: MealPlanningData) => {
    setMealPlanningData(data)
    setIsSetupComplete(true)
    setIsWizardOpen(false)
  }

  const completeWizardSetup = (data: Partial<MealPlanningData>) => {
    const newData: MealPlanningData = {
      ...defaultMealPlanningData,
      ...data,
      setupCompleted: true
    }
    setMealPlanningData(newData)
    setIsSetupComplete(true)
    setIsWizardOpen(false)
  }

  const resetMealPlanningData = () => {
    setMealPlanningData(null)
    setIsSetupComplete(false)
    localStorage.removeItem("meal-planning-data")
    localStorage.removeItem("meal-planning-setup-complete")
    setIsWizardOpen(true)
  }

  const setWizardOpen = (open: boolean) => {
    setIsWizardOpen(open)
  }

  return (
    <MealPlanningContext.Provider
      value={{
        mealPlanningData,
        isSetupComplete,
        isWizardOpen,
        setWizardOpen,
        updateMealPlanningData,
        completeWizardSetup,
        resetMealPlanningData,
      }}
    >
      {children}
    </MealPlanningContext.Provider>
  )
}

export function useMealPlanning() {
  const context = useContext(MealPlanningContext)
  if (context === undefined) {
    throw new Error("useMealPlanning must be used within a MealPlanningProvider")
  }
  return context
}

// Helper function to get display data (with fallbacks to mock data)
export function getMealPlanningDisplayData(mealPlanningData: MealPlanningData | null) {
  if (!mealPlanningData) {
    // Return mock data as fallback
    return {
      name: "Sarah Johnson",
      householdSize: "3-4 people",
      budgetRange: "$100 - $150",
      primaryGoal: "Save time on meal prep",
      mealTypes: "All meals (breakfast, lunch, dinner)",
      cookingSkillLevel: "Intermediate",
      planningFrequency: "Weekly planning",
      shoppingPreference: "Mix of in-store and online",
      currentWeekBudget: 127.50,
      mealsPlanned: 18,
      totalMeals: 21
    }
  }

  return {
    name: mealPlanningData.name || "User",
    householdSize: mealPlanningData.householdSize || "Not specified",
    budgetRange: mealPlanningData.budgetRange || "Not specified",
    primaryGoal: mealPlanningData.primaryGoal || "Not specified",
    mealTypes: mealPlanningData.mealTypes || "Not specified",
    cookingSkillLevel: mealPlanningData.cookingSkillLevel || "Not specified",
    planningFrequency: mealPlanningData.planningFrequency || "Not specified",
    shoppingPreference: mealPlanningData.shoppingPreference || "Not specified",
    currentWeekBudget: 127.50,
    mealsPlanned: 18,
    totalMeals: 21
  }
}