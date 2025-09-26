"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

export interface DivorceCoordinationData {
  // Basic Info
  clientName: string
  spouseName: string
  filingDate: Date | undefined
  finalHearingDate: Date | undefined
  divorceType: string
  hasChildren: boolean
  childrenCount: number
  estimatedBudget: number
  
  // Legal Details
  attorneyName: string
  attorneyPhone: string
  attorneyEmail: string
  courtName: string
  courtAddress: string
  caseNumber: string
  
  // Additional Details
  primaryConcerns: string[]
  childCustodyArrangement: string
  assetDivisionNotes: string
  specialCircumstances: string
}

interface DivorceCoordinationContextType {
  divorceData: DivorceCoordinationData | null
  isSetupComplete: boolean
  isWizardOpen: boolean
  setWizardOpen: (open: boolean) => void
  updateDivorceData: (data: DivorceCoordinationData) => void
  resetDivorceData: () => void
}

const DivorceCoordinationContext = createContext<DivorceCoordinationContextType | undefined>(undefined)

const defaultDivorceData: DivorceCoordinationData = {
  clientName: "",
  spouseName: "",
  filingDate: undefined,
  finalHearingDate: undefined,
  divorceType: "",
  hasChildren: false,
  childrenCount: 0,
  estimatedBudget: 0,
  attorneyName: "",
  attorneyPhone: "",
  attorneyEmail: "",
  courtName: "",
  courtAddress: "",
  caseNumber: "",
  primaryConcerns: [],
  childCustodyArrangement: "",
  assetDivisionNotes: "",
  specialCircumstances: ""
}

export function DivorceCoordinationProvider({ children }: { children: React.ReactNode }) {
  const [divorceData, setDivorceData] = useState<DivorceCoordinationData | null>(null)
  const [isSetupComplete, setIsSetupComplete] = useState(false)
  const [isWizardOpen, setIsWizardOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // Load data from localStorage on mount
  useEffect(() => {
    try {
      const savedData = localStorage.getItem("divorce-coordination-data")
      const savedSetupComplete = localStorage.getItem("divorce-coordination-setup-complete")
      
      if (savedData) {
        const parsedData = JSON.parse(savedData)
        // Convert date strings back to Date objects
        if (parsedData.filingDate) {
          parsedData.filingDate = new Date(parsedData.filingDate)
        }
        if (parsedData.finalHearingDate) {
          parsedData.finalHearingDate = new Date(parsedData.finalHearingDate)
        }
        setDivorceData(parsedData)
      }
      
      if (savedSetupComplete === "true") {
        setIsSetupComplete(true)
      } else {
        // First visit - show wizard
        setIsWizardOpen(true)
      }
    } catch (error) {
      console.error("Error loading divorce coordination data:", error)
      // First visit or error - show wizard
      setIsWizardOpen(true)
    } finally {
      setIsLoaded(true)
    }
  }, [])

  // Save data to localStorage whenever it changes
  useEffect(() => {
    if (divorceData && isLoaded) {
      try {
        localStorage.setItem("divorce-coordination-data", JSON.stringify(divorceData))
      } catch (error) {
        console.error("Error saving divorce coordination data:", error)
      }
    }
  }, [divorceData, isLoaded])

  // Save setup completion status
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("divorce-coordination-setup-complete", isSetupComplete.toString())
    }
  }, [isSetupComplete, isLoaded])

  const updateDivorceData = (data: DivorceCoordinationData) => {
    setDivorceData(data)
    setIsSetupComplete(true)
    setIsWizardOpen(false)
  }

  const resetDivorceData = () => {
    setDivorceData(null)
    setIsSetupComplete(false)
    localStorage.removeItem("divorce-coordination-data")
    localStorage.removeItem("divorce-coordination-setup-complete")
    setIsWizardOpen(true)
  }

  const setWizardOpen = (open: boolean) => {
    setIsWizardOpen(open)
  }

  return (
    <DivorceCoordinationContext.Provider
      value={{
        divorceData,
        isSetupComplete,
        isWizardOpen,
        setWizardOpen,
        updateDivorceData,
        resetDivorceData,
      }}
    >
      {children}
    </DivorceCoordinationContext.Provider>
  )
}

export function useDivorceCoordination() {
  const context = useContext(DivorceCoordinationContext)
  if (context === undefined) {
    throw new Error("useDivorceCoordination must be used within a DivorceCoordinationProvider")
  }
  return context
}

// Helper function to get display data (with fallbacks to mock data)
export function getDivorceCoordinationDisplayData(divorceData: DivorceCoordinationData | null) {
  if (!divorceData) {
    // Return mock data as fallback
    return {
      clientName: "Sarah Johnson",
      spouseName: "Michael Johnson", 
      filingDate: new Date("2024-03-15"),
      finalHearingDate: new Date("2024-09-15"),
      attorneyName: "Jennifer Smith, Esq.",
      courtName: "Superior Court of California",
      caseNumber: "FL-2024-001234",
      daysUntilFinalHearing: Math.ceil((new Date("2024-09-15").getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)),
      divorceType: "No-Fault Divorce"
    }
  }

  return {
    clientName: divorceData.clientName,
    spouseName: divorceData.spouseName,
    filingDate: divorceData.filingDate || new Date(),
    finalHearingDate: divorceData.finalHearingDate || new Date(),
    attorneyName: divorceData.attorneyName,
    courtName: divorceData.courtName,
    caseNumber: divorceData.caseNumber,
    daysUntilFinalHearing: divorceData.finalHearingDate ? 
      Math.ceil((divorceData.finalHearingDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)) : 0,
    divorceType: divorceData.divorceType
  }
}