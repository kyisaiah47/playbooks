"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

export interface SmallBusinessData {
  // Basic Info
  businessName: string
  ownerName: string
  industry: string
  businessType: string
  launchDate: Date | undefined
  targetMarket: string
  totalBudget: number
  
  // Location & Legal
  businessAddress: string
  businessCity: string
  businessState: string
  legalStructure: string
  
  // Additional Details
  missionStatement: string
  products: string[]
  specialRequirements: string
  marketingChannels: string[]
  
  // Setup tracking
  setupCompleted: boolean
}

interface SmallBusinessContextType {
  businessData: SmallBusinessData | null
  isSetupComplete: boolean
  isWizardOpen: boolean
  setWizardOpen: (open: boolean) => void
  updateBusinessData: (data: Partial<SmallBusinessData>) => void
  resetBusinessData: () => void
}

const SmallBusinessContext = createContext<SmallBusinessContextType | undefined>(undefined)

const defaultBusinessData: SmallBusinessData = {
  businessName: "",
  ownerName: "",
  industry: "",
  businessType: "",
  launchDate: undefined,
  targetMarket: "",
  totalBudget: 0,
  businessAddress: "",
  businessCity: "",
  businessState: "",
  legalStructure: "",
  missionStatement: "",
  products: [],
  specialRequirements: "",
  marketingChannels: [],
  setupCompleted: false
}

export function SmallBusinessProvider({ children }: { children: React.ReactNode }) {
  const [businessData, setBusinessData] = useState<SmallBusinessData | null>(null)
  const [isSetupComplete, setIsSetupComplete] = useState(false)
  const [isWizardOpen, setIsWizardOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // Load data from localStorage on mount
  useEffect(() => {
    try {
      const savedData = localStorage.getItem("small-business-data")
      const savedSetupComplete = localStorage.getItem("small-business-setup-complete")
      
      if (savedData) {
        const parsedData = JSON.parse(savedData)
        // Convert date strings back to Date objects
        if (parsedData.launchDate) {
          parsedData.launchDate = new Date(parsedData.launchDate)
        }
        setBusinessData(parsedData)
      }
      
      if (savedSetupComplete === "true") {
        setIsSetupComplete(true)
      } else {
        // First visit - show wizard
        setIsWizardOpen(true)
      }
    } catch (error) {
      console.error("Error loading business data:", error)
      // First visit or error - show wizard
      setIsWizardOpen(true)
    } finally {
      setIsLoaded(true)
    }
  }, [])

  // Save data to localStorage whenever it changes
  useEffect(() => {
    if (businessData && isLoaded) {
      try {
        localStorage.setItem("small-business-data", JSON.stringify(businessData))
      } catch (error) {
        console.error("Error saving business data:", error)
      }
    }
  }, [businessData, isLoaded])

  // Save setup completion status
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("small-business-setup-complete", isSetupComplete.toString())
    }
  }, [isSetupComplete, isLoaded])

  const updateBusinessData = (data: Partial<SmallBusinessData>) => {
    const updatedData = businessData ? { ...businessData, ...data } : { ...defaultBusinessData, ...data }
    setBusinessData(updatedData)
    
    // Mark setup as complete if this is from the wizard
    if (data.setupCompleted !== undefined) {
      setIsSetupComplete(data.setupCompleted)
      setIsWizardOpen(false)
    }
  }

  const resetBusinessData = () => {
    setBusinessData(null)
    setIsSetupComplete(false)
    localStorage.removeItem("small-business-data")
    localStorage.removeItem("small-business-setup-complete")
    setIsWizardOpen(true)
  }

  const setWizardOpen = (open: boolean) => {
    setIsWizardOpen(open)
  }

  return (
    <SmallBusinessContext.Provider
      value={{
        businessData,
        isSetupComplete,
        isWizardOpen,
        setWizardOpen,
        updateBusinessData,
        resetBusinessData,
      }}
    >
      {children}
    </SmallBusinessContext.Provider>
  )
}

export function useSmallBusiness() {
  const context = useContext(SmallBusinessContext)
  if (context === undefined) {
    throw new Error("useSmallBusiness must be used within a SmallBusinessProvider")
  }
  return context
}

// Helper function to get display data (with fallbacks to mock data)
export function getBusinessDisplayData(businessData: SmallBusinessData | null) {
  if (!businessData) {
    // Return mock data as fallback
    return {
      businessName: "Tech Solutions LLC",
      ownerName: "Alex Johnson",
      industry: "Technology Consulting",
      launchDate: new Date("2024-07-01"),
      targetMarket: "Small to medium businesses",
      totalBudget: 25000,
      businessType: "Service-based",
      daysUntilLaunch: Math.ceil((new Date("2024-07-01").getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
    }
  }

  return {
    businessName: businessData.businessName,
    ownerName: businessData.ownerName,
    industry: businessData.industry,
    launchDate: businessData.launchDate || new Date(),
    targetMarket: businessData.targetMarket,
    totalBudget: businessData.totalBudget,
    businessType: businessData.businessType,
    daysUntilLaunch: businessData.launchDate ? 
      Math.ceil((businessData.launchDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)) : 0
  }
}