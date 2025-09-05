"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

export interface BabyPlanningData {
  // Basic Info
  parentName1: string
  parentName2: string
  babyName: string
  dueDate: Date | undefined
  babyGender: string
  babyShowerDate: Date | undefined
  
  // Budget & Registry
  totalBudget: number
  nurseryBudget: number
  registryBudget: number
  
  // Nursery & Home
  nurseryTheme: string
  nurseryColors: string[]
  homePreparations: string
  
  // Healthcare & Preparations
  hospital: string
  doctor: string
  birthPlan: string
  specialNeeds: string
}

interface BabyPlanningContextType {
  babyPlanningData: BabyPlanningData | null
  isSetupComplete: boolean
  isWizardOpen: boolean
  setWizardOpen: (open: boolean) => void
  updateBabyPlanningData: (data: BabyPlanningData) => void
  resetBabyPlanningData: () => void
}

const BabyPlanningContext = createContext<BabyPlanningContextType | undefined>(undefined)

const defaultBabyPlanningData: BabyPlanningData = {
  parentName1: "",
  parentName2: "",
  babyName: "",
  dueDate: undefined,
  babyGender: "",
  babyShowerDate: undefined,
  totalBudget: 0,
  nurseryBudget: 0,
  registryBudget: 0,
  nurseryTheme: "",
  nurseryColors: [],
  homePreparations: "",
  hospital: "",
  doctor: "",
  birthPlan: "",
  specialNeeds: ""
}

export function BabyPlanningProvider({ children }: { children: React.ReactNode }) {
  const [babyPlanningData, setBabyPlanningData] = useState<BabyPlanningData | null>(null)
  const [isSetupComplete, setIsSetupComplete] = useState(false)
  const [isWizardOpen, setIsWizardOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // Load data from localStorage on mount
  useEffect(() => {
    try {
      const savedData = localStorage.getItem("baby-planning-data")
      const savedSetupComplete = localStorage.getItem("baby-planning-setup-complete")
      
      if (savedData) {
        const parsedData = JSON.parse(savedData)
        // Convert date strings back to Date objects
        if (parsedData.dueDate) {
          parsedData.dueDate = new Date(parsedData.dueDate)
        }
        if (parsedData.babyShowerDate) {
          parsedData.babyShowerDate = new Date(parsedData.babyShowerDate)
        }
        setBabyPlanningData(parsedData)
      }
      
      if (savedSetupComplete === "true") {
        setIsSetupComplete(true)
      } else {
        // First visit - show wizard
        setIsWizardOpen(true)
      }
    } catch (error) {
      console.error("Error loading baby planning data:", error)
      // First visit or error - show wizard
      setIsWizardOpen(true)
    } finally {
      setIsLoaded(true)
    }
  }, [])

  // Save data to localStorage whenever it changes
  useEffect(() => {
    if (babyPlanningData && isLoaded) {
      try {
        localStorage.setItem("baby-planning-data", JSON.stringify(babyPlanningData))
      } catch (error) {
        console.error("Error saving baby planning data:", error)
      }
    }
  }, [babyPlanningData, isLoaded])

  // Save setup completion status
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("baby-planning-setup-complete", isSetupComplete.toString())
    }
  }, [isSetupComplete, isLoaded])

  const updateBabyPlanningData = (data: BabyPlanningData) => {
    setBabyPlanningData(data)
    setIsSetupComplete(true)
    setIsWizardOpen(false)
  }

  const resetBabyPlanningData = () => {
    setBabyPlanningData(null)
    setIsSetupComplete(false)
    localStorage.removeItem("baby-planning-data")
    localStorage.removeItem("baby-planning-setup-complete")
    setIsWizardOpen(true)
  }

  const setWizardOpen = (open: boolean) => {
    setIsWizardOpen(open)
  }

  return (
    <BabyPlanningContext.Provider
      value={{
        babyPlanningData,
        isSetupComplete,
        isWizardOpen,
        setWizardOpen,
        updateBabyPlanningData,
        resetBabyPlanningData,
      }}
    >
      {children}
    </BabyPlanningContext.Provider>
  )
}

export function useBabyPlanning() {
  const context = useContext(BabyPlanningContext)
  if (context === undefined) {
    throw new Error("useBabyPlanning must be used within a BabyPlanningProvider")
  }
  return context
}

// Helper function to get display data (with fallbacks to mock data)
export function getBabyPlanningDisplayData(babyPlanningData: BabyPlanningData | null) {
  if (!babyPlanningData) {
    // Return mock data as fallback
    return {
      parentNames: "Emma & James Rodriguez",
      parentName1: "Emma Rodriguez",
      parentName2: "James Rodriguez", 
      babyName: "Baby Rodriguez",
      dueDate: new Date("2024-08-15"),
      babyGender: "Girl",
      babyShowerDate: new Date("2024-07-01"),
      hospital: "St. Mary's Hospital",
      doctor: "Dr. Sarah Johnson",
      nurseryTheme: "Safari Adventure",
      totalBudget: 15000,
      nurseryBudget: 5000,
      registryBudget: 3000,
      weeksUntilDue: Math.ceil((new Date("2024-08-15").getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24 * 7)),
      daysUntilDue: Math.ceil((new Date("2024-08-15").getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
    }
  }

  return {
    parentNames: `${babyPlanningData.parentName1} & ${babyPlanningData.parentName2}`,
    parentName1: babyPlanningData.parentName1,
    parentName2: babyPlanningData.parentName2,
    babyName: babyPlanningData.babyName || "Baby",
    dueDate: babyPlanningData.dueDate || new Date(),
    babyGender: babyPlanningData.babyGender,
    babyShowerDate: babyPlanningData.babyShowerDate,
    hospital: babyPlanningData.hospital,
    doctor: babyPlanningData.doctor,
    nurseryTheme: babyPlanningData.nurseryTheme,
    totalBudget: babyPlanningData.totalBudget,
    nurseryBudget: babyPlanningData.nurseryBudget,
    registryBudget: babyPlanningData.registryBudget,
    weeksUntilDue: babyPlanningData.dueDate ? 
      Math.ceil((babyPlanningData.dueDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24 * 7)) : 0,
    daysUntilDue: babyPlanningData.dueDate ? 
      Math.ceil((babyPlanningData.dueDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)) : 0
  }
}