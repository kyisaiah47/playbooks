"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

export interface WeddingData {
  // Basic Info
  partner1FirstName: string
  partner1LastName: string
  partner2FirstName: string
  partner2LastName: string
  weddingDate: Date | undefined
  weddingTime: string
  weddingStyle: string
  guestCount: number
  totalBudget: number
  
  // Venues
  ceremonyVenue: string
  ceremonyAddress: string
  receptionVenue: string
  receptionAddress: string
  
  // Additional Details
  themeColors: string[]
  specialRequirements: string
  culturalTraditions: string
}

interface WeddingContextType {
  weddingData: WeddingData | null
  isSetupComplete: boolean
  isWizardOpen: boolean
  setWizardOpen: (open: boolean) => void
  updateWeddingData: (data: WeddingData) => void
  resetWeddingData: () => void
}

const WeddingContext = createContext<WeddingContextType | undefined>(undefined)

const defaultWeddingData: WeddingData = {
  partner1FirstName: "",
  partner1LastName: "",
  partner2FirstName: "",
  partner2LastName: "",
  weddingDate: undefined,
  weddingTime: "",
  weddingStyle: "",
  guestCount: 0,
  totalBudget: 0,
  ceremonyVenue: "",
  ceremonyAddress: "",
  receptionVenue: "",
  receptionAddress: "",
  themeColors: [],
  specialRequirements: "",
  culturalTraditions: ""
}

export function WeddingProvider({ children }: { children: React.ReactNode }) {
  const [weddingData, setWeddingData] = useState<WeddingData | null>(null)
  const [isSetupComplete, setIsSetupComplete] = useState(false)
  const [isWizardOpen, setIsWizardOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // Load data from localStorage on mount
  useEffect(() => {
    try {
      const savedData = localStorage.getItem("wedding-data")
      const savedSetupComplete = localStorage.getItem("wedding-setup-complete")
      
      if (savedData) {
        const parsedData = JSON.parse(savedData)
        // Convert date string back to Date object
        if (parsedData.weddingDate) {
          parsedData.weddingDate = new Date(parsedData.weddingDate)
        }
        setWeddingData(parsedData)
      }
      
      if (savedSetupComplete === "true") {
        setIsSetupComplete(true)
      } else {
        // First visit - show wizard
        setIsWizardOpen(true)
      }
    } catch (error) {
      console.error("Error loading wedding data:", error)
      // First visit or error - show wizard
      setIsWizardOpen(true)
    } finally {
      setIsLoaded(true)
    }
  }, [])

  // Save data to localStorage whenever it changes
  useEffect(() => {
    if (weddingData && isLoaded) {
      try {
        localStorage.setItem("wedding-data", JSON.stringify(weddingData))
      } catch (error) {
        console.error("Error saving wedding data:", error)
      }
    }
  }, [weddingData, isLoaded])

  // Save setup completion status
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("wedding-setup-complete", isSetupComplete.toString())
    }
  }, [isSetupComplete, isLoaded])

  const updateWeddingData = (data: WeddingData) => {
    setWeddingData(data)
    setIsSetupComplete(true)
    setIsWizardOpen(false)
  }

  const resetWeddingData = () => {
    setWeddingData(null)
    setIsSetupComplete(false)
    localStorage.removeItem("wedding-data")
    localStorage.removeItem("wedding-setup-complete")
    setIsWizardOpen(true)
  }

  const setWizardOpen = (open: boolean) => {
    setIsWizardOpen(open)
  }

  return (
    <WeddingContext.Provider
      value={{
        weddingData,
        isSetupComplete,
        isWizardOpen,
        setWizardOpen,
        updateWeddingData,
        resetWeddingData,
      }}
    >
      {children}
    </WeddingContext.Provider>
  )
}

export function useWedding() {
  const context = useContext(WeddingContext)
  if (context === undefined) {
    throw new Error("useWedding must be used within a WeddingProvider")
  }
  return context
}

// Helper function to get display data (with fallbacks to mock data)
export function getWeddingDisplayData(weddingData: WeddingData | null) {
  if (!weddingData) {
    // Return mock data as fallback
    return {
      coupleNames: "Sarah & Michael Thompson",
      partner1Name: "Sarah Thompson",
      partner2Name: "Michael Thompson", 
      weddingDate: new Date("2024-06-15"),
      weddingTime: "16:00",
      ceremonyVenue: "St. Mary's Cathedral",
      receptionVenue: "Grand Ballroom Hotel",
      guestCount: 180,
      totalBudget: 45000,
      weddingStyle: "Traditional Elegant",
      daysUntil: Math.ceil((new Date("2024-06-15").getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
    }
  }

  return {
    coupleNames: `${weddingData.partner1FirstName} & ${weddingData.partner2FirstName} ${weddingData.partner1LastName}`,
    partner1Name: `${weddingData.partner1FirstName} ${weddingData.partner1LastName}`,
    partner2Name: `${weddingData.partner2FirstName} ${weddingData.partner2LastName}`,
    weddingDate: weddingData.weddingDate || new Date(),
    weddingTime: weddingData.weddingTime,
    ceremonyVenue: weddingData.ceremonyVenue,
    receptionVenue: weddingData.receptionVenue,
    guestCount: weddingData.guestCount,
    totalBudget: weddingData.totalBudget,
    weddingStyle: weddingData.weddingStyle,
    daysUntil: weddingData.weddingDate ? 
      Math.ceil((weddingData.weddingDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)) : 0
  }
}