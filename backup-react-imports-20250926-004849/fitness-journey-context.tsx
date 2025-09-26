"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

export interface FitnessJourneyData {
  // Basic Information
  name: string
  email: string
  primaryGoal: string
  timeline: string
  
  // Health Status  
  currentFitnessLevel: string
  healthConditions: string
  previousInjuries: string
  targetDate: Date | undefined
  
  // Preferences
  preferredWorkoutTypes: string
  scheduleAvailability: string
  equipmentAccess: string
  
  // Support System
  trainerInterest: string
  accountabilityNeeds: string
  trackingPreferences: string
  notes: string
  
  // Setup tracking
  setupCompleted: boolean
}

interface FitnessJourneyContextType {
  data: FitnessJourneyData
  updateData: (newData: Partial<FitnessJourneyData>) => void
  resetData: () => void
  showSetupWizard: boolean
  setShowSetupWizard: (show: boolean) => void
}

const FitnessJourneyContext = createContext<FitnessJourneyContextType | undefined>(undefined)

const defaultFitnessData: FitnessJourneyData = {
  name: "",
  email: "",
  primaryGoal: "",
  timeline: "",
  currentFitnessLevel: "",
  healthConditions: "",
  previousInjuries: "",
  targetDate: undefined,
  preferredWorkoutTypes: "",
  scheduleAvailability: "",
  equipmentAccess: "",
  trainerInterest: "",
  accountabilityNeeds: "",
  trackingPreferences: "",
  notes: "",
  setupCompleted: false,
}

const STORAGE_KEY = 'fitness-journey-data'

export function FitnessJourneyProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<FitnessJourneyData>(defaultFitnessData)
  const [showSetupWizard, setShowSetupWizard] = useState(false)

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY)
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData)
        setData({ ...defaultFitnessData, ...parsed })
        setShowSetupWizard(!parsed.setupCompleted)
      } catch (error) {
        console.error('Failed to parse saved data:', error)
        setShowSetupWizard(true)
      }
    } else {
      setShowSetupWizard(true)
    }
  }, [])

  const updateData = (newData: Partial<FitnessJourneyData>) => {
    setData(prev => {
      const updated = { ...prev, ...newData }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
      return updated
    })
  }

  const resetData = () => {
    setData(defaultFitnessData)
    localStorage.removeItem(STORAGE_KEY)
    setShowSetupWizard(true)
  }

  return (
    <FitnessJourneyContext.Provider value={{ 
      data, 
      updateData, 
      resetData,
      showSetupWizard,
      setShowSetupWizard 
    }}>
      {children}
    </FitnessJourneyContext.Provider>
  )
}

export function useFitnessJourney() {
  const context = useContext(FitnessJourneyContext)
  if (!context) {
    throw new Error('useFitnessJourney must be used within FitnessJourneyProvider')
  }
  return context
}

// Helper function to get display data (with fallbacks to mock data)
export function getFitnessDisplayData(fitnessData: FitnessJourneyData | null) {
  if (!fitnessData || !fitnessData.setupCompleted) {
    // Return mock data as fallback
    return {
      name: "Alex Johnson",
      primaryGoal: "Lose weight and build muscle",
      timeline: "6 months",
      currentFitnessLevel: "Intermediate",
      preferredWorkoutTypes: "Strength training",
      scheduleAvailability: "3-4 days per week",
      equipmentAccess: "Commercial gym membership",
      daysInJourney: Math.ceil((new Date().getTime() - new Date("2024-01-01").getTime()) / (1000 * 60 * 60 * 24))
    }
  }

  return {
    name: fitnessData.name,
    primaryGoal: fitnessData.primaryGoal,
    timeline: fitnessData.timeline,
    currentFitnessLevel: fitnessData.currentFitnessLevel,
    preferredWorkoutTypes: fitnessData.preferredWorkoutTypes,
    scheduleAvailability: fitnessData.scheduleAvailability,
    equipmentAccess: fitnessData.equipmentAccess,
    daysInJourney: fitnessData.targetDate ? 
      Math.ceil((fitnessData.targetDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)) : 
      1
  }
}