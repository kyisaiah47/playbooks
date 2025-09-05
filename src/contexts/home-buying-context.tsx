"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

export interface HomeBuyingData {
  // Basic Info
  buyerName: string
  cobuyerName: string
  targetMoveDate: Date | undefined
  budgetMin: number
  budgetMax: number
  preApprovalAmount: number
  
  // Location Preferences
  preferredArea: string
  homeType: string
  bedrooms: number
  bathrooms: number
  
  // Financing
  downPayment: number
  lenderName: string
  loanType: string
  
  // Additional Details
  mustHaveFeatures: string[]
  dealBreakers: string[]
  specialRequirements: string
}

interface HomeBuyingContextType {
  homeBuyingData: HomeBuyingData | null
  isSetupComplete: boolean
  isWizardOpen: boolean
  setWizardOpen: (open: boolean) => void
  updateHomeBuyingData: (data: HomeBuyingData) => void
  resetHomeBuyingData: () => void
}

const HomeBuyingContext = createContext<HomeBuyingContextType | undefined>(undefined)

const defaultHomeBuyingData: HomeBuyingData = {
  buyerName: "",
  cobuyerName: "",
  targetMoveDate: undefined,
  budgetMin: 0,
  budgetMax: 0,
  preApprovalAmount: 0,
  preferredArea: "",
  homeType: "",
  bedrooms: 0,
  bathrooms: 0,
  downPayment: 0,
  lenderName: "",
  loanType: "",
  mustHaveFeatures: [],
  dealBreakers: [],
  specialRequirements: ""
}

export function HomeBuyingProvider({ children }: { children: React.ReactNode }) {
  const [homeBuyingData, setHomeBuyingData] = useState<HomeBuyingData | null>(null)
  const [isSetupComplete, setIsSetupComplete] = useState(false)
  const [isWizardOpen, setIsWizardOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // Load data from localStorage on mount
  useEffect(() => {
    try {
      const savedData = localStorage.getItem("home-buying-data")
      const savedSetupComplete = localStorage.getItem("home-buying-setup-complete")
      
      if (savedData) {
        const parsedData = JSON.parse(savedData)
        // Convert date strings back to Date objects
        if (parsedData.targetMoveDate) {
          parsedData.targetMoveDate = new Date(parsedData.targetMoveDate)
        }
        setHomeBuyingData(parsedData)
      }
      
      if (savedSetupComplete === "true") {
        setIsSetupComplete(true)
      } else {
        // First visit - show wizard
        setIsWizardOpen(true)
      }
    } catch (error) {
      console.error("Error loading home buying data:", error)
      // First visit or error - show wizard
      setIsWizardOpen(true)
    } finally {
      setIsLoaded(true)
    }
  }, [])

  // Save data to localStorage whenever it changes
  useEffect(() => {
    if (homeBuyingData && isLoaded) {
      try {
        localStorage.setItem("home-buying-data", JSON.stringify(homeBuyingData))
      } catch (error) {
        console.error("Error saving home buying data:", error)
      }
    }
  }, [homeBuyingData, isLoaded])

  // Save setup completion status
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("home-buying-setup-complete", isSetupComplete.toString())
    }
  }, [isSetupComplete, isLoaded])

  const updateHomeBuyingData = (data: HomeBuyingData) => {
    setHomeBuyingData(data)
    setIsSetupComplete(true)
    setIsWizardOpen(false)
  }

  const resetHomeBuyingData = () => {
    setHomeBuyingData(null)
    setIsSetupComplete(false)
    localStorage.removeItem("home-buying-data")
    localStorage.removeItem("home-buying-setup-complete")
    setIsWizardOpen(true)
  }

  const setWizardOpen = (open: boolean) => {
    setIsWizardOpen(open)
  }

  return (
    <HomeBuyingContext.Provider
      value={{
        homeBuyingData,
        isSetupComplete,
        isWizardOpen,
        setWizardOpen,
        updateHomeBuyingData,
        resetHomeBuyingData,
      }}
    >
      {children}
    </HomeBuyingContext.Provider>
  )
}

export function useHomeBuying() {
  const context = useContext(HomeBuyingContext)
  if (context === undefined) {
    throw new Error("useHomeBuying must be used within a HomeBuyingProvider")
  }
  return context
}

// Helper function to get display data (with fallbacks to mock data)
export function getHomeBuyingDisplayData(homeBuyingData: HomeBuyingData | null) {
  if (!homeBuyingData) {
    // Return mock data as fallback
    return {
      buyerNames: "Sarah & John Davis",
      buyerName: "Sarah Davis",
      cobuyerName: "John Davis",
      targetMoveDate: new Date("2024-08-15"),
      budgetRange: "$450,000 - $550,000",
      budgetMin: 450000,
      budgetMax: 550000,
      preApprovalAmount: 500000,
      preferredArea: "Downtown Springfield",
      homeType: "Single Family Home",
      bedrooms: 3,
      bathrooms: 2,
      daysUntilMove: Math.ceil((new Date("2024-08-15").getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
    }
  }

  return {
    buyerNames: homeBuyingData.cobuyerName ? `${homeBuyingData.buyerName} & ${homeBuyingData.cobuyerName}` : homeBuyingData.buyerName,
    buyerName: homeBuyingData.buyerName,
    cobuyerName: homeBuyingData.cobuyerName,
    targetMoveDate: homeBuyingData.targetMoveDate || new Date(),
    budgetRange: `$${homeBuyingData.budgetMin.toLocaleString()} - $${homeBuyingData.budgetMax.toLocaleString()}`,
    budgetMin: homeBuyingData.budgetMin,
    budgetMax: homeBuyingData.budgetMax,
    preApprovalAmount: homeBuyingData.preApprovalAmount,
    preferredArea: homeBuyingData.preferredArea,
    homeType: homeBuyingData.homeType,
    bedrooms: homeBuyingData.bedrooms,
    bathrooms: homeBuyingData.bathrooms,
    daysUntilMove: homeBuyingData.targetMoveDate ? 
      Math.ceil((homeBuyingData.targetMoveDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)) : 0
  }
}