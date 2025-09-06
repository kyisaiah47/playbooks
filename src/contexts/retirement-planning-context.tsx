"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

export interface RetirementPlanningData {
  // Basic Info
  fullName: string
  currentAge: number
  targetRetirementAge: number
  spouseName: string
  
  // Financial Details
  currentAnnualIncome: number
  desiredRetirementIncome: number
  currentSavings: number
  monthlyContributions: number
  employerMatch: number
  socialSecurityEstimate: number
  
  // Goals and Risk
  riskTolerance: string
  retirementGoals: string
  healthcarePlanning: string
  estatePlanning: string
  additionalNotes: string
}

interface RetirementPlanningContextType {
  retirementData: RetirementPlanningData | null
  isSetupComplete: boolean
  isWizardOpen: boolean
  setWizardOpen: (open: boolean) => void
  updateRetirementData: (data: RetirementPlanningData) => void
  resetRetirementData: () => void
}

const RetirementPlanningContext = createContext<RetirementPlanningContextType | undefined>(undefined)

const defaultRetirementData: RetirementPlanningData = {
  fullName: "",
  currentAge: 0,
  targetRetirementAge: 0,
  spouseName: "",
  currentAnnualIncome: 0,
  desiredRetirementIncome: 0,
  currentSavings: 0,
  monthlyContributions: 0,
  employerMatch: 0,
  socialSecurityEstimate: 0,
  riskTolerance: "",
  retirementGoals: "",
  healthcarePlanning: "",
  estatePlanning: "",
  additionalNotes: ""
}

export function RetirementPlanningProvider({ children }: { children: React.ReactNode }) {
  const [retirementData, setRetirementData] = useState<RetirementPlanningData | null>(null)
  const [isSetupComplete, setIsSetupComplete] = useState(false)
  const [isWizardOpen, setIsWizardOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // Load data from localStorage on mount
  useEffect(() => {
    try {
      const savedData = localStorage.getItem("retirement-planning-data")
      const savedSetupComplete = localStorage.getItem("retirement-planning-setup-complete")
      
      if (savedData) {
        const parsedData = JSON.parse(savedData)
        setRetirementData(parsedData)
      }
      
      if (savedSetupComplete === "true") {
        setIsSetupComplete(true)
      } else {
        // First visit - show wizard
        setIsWizardOpen(true)
      }
    } catch (error) {
      console.error("Error loading retirement planning data:", error)
      // First visit or error - show wizard
      setIsWizardOpen(true)
    } finally {
      setIsLoaded(true)
    }
  }, [])

  // Save data to localStorage whenever it changes
  useEffect(() => {
    if (retirementData && isLoaded) {
      try {
        localStorage.setItem("retirement-planning-data", JSON.stringify(retirementData))
      } catch (error) {
        console.error("Error saving retirement planning data:", error)
      }
    }
  }, [retirementData, isLoaded])

  // Save setup completion status
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("retirement-planning-setup-complete", isSetupComplete.toString())
    }
  }, [isSetupComplete, isLoaded])

  const updateRetirementData = (data: RetirementPlanningData) => {
    setRetirementData(data)
    setIsSetupComplete(true)
    setIsWizardOpen(false)
  }

  const resetRetirementData = () => {
    setRetirementData(null)
    setIsSetupComplete(false)
    localStorage.removeItem("retirement-planning-data")
    localStorage.removeItem("retirement-planning-setup-complete")
    setIsWizardOpen(true)
  }

  const setWizardOpen = (open: boolean) => {
    setIsWizardOpen(open)
  }

  return (
    <RetirementPlanningContext.Provider
      value={{
        retirementData,
        isSetupComplete,
        isWizardOpen,
        setWizardOpen,
        updateRetirementData,
        resetRetirementData,
      }}
    >
      {children}
    </RetirementPlanningContext.Provider>
  )
}

export function useRetirementPlanning() {
  const context = useContext(RetirementPlanningContext)
  if (context === undefined) {
    throw new Error("useRetirementPlanning must be used within a RetirementPlanningProvider")
  }
  return context
}

// Helper function to get display data (with fallbacks to mock data)
export function getRetirementDisplayData(retirementData: RetirementPlanningData | null) {
  if (!retirementData) {
    // Return mock data as fallback
    return {
      fullName: "John Smith",
      currentAge: 35,
      targetRetirementAge: 65,
      yearsToRetirement: 30,
      currentAnnualIncome: 75000,
      desiredRetirementIncome: 60000,
      currentSavings: 125000,
      monthlyContributions: 1250,
      projectedSavings: 1850000,
      retirementGap: 0,
      onTrack: true
    }
  }

  const yearsToRetirement = retirementData.targetRetirementAge - retirementData.currentAge
  const projectedSavings = retirementData.currentSavings + (retirementData.monthlyContributions * 12 * yearsToRetirement * 1.07) // Simplified calculation
  const annualNeed = retirementData.desiredRetirementIncome * 25 // 4% rule
  const retirementGap = Math.max(0, annualNeed - projectedSavings)

  return {
    fullName: retirementData.fullName,
    currentAge: retirementData.currentAge,
    targetRetirementAge: retirementData.targetRetirementAge,
    yearsToRetirement: yearsToRetirement,
    currentAnnualIncome: retirementData.currentAnnualIncome,
    desiredRetirementIncome: retirementData.desiredRetirementIncome,
    currentSavings: retirementData.currentSavings,
    monthlyContributions: retirementData.monthlyContributions,
    projectedSavings: Math.round(projectedSavings),
    retirementGap: Math.round(retirementGap),
    onTrack: retirementGap <= 0
  }
}