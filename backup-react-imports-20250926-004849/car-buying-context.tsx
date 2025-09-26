"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

export interface CarBuyingData {
  // Basic Info from setup wizard
  name: string
  email: string
  primaryGoal: string
  timeline: string
  
  // Budget & Financing from setup wizard
  budgetRange: string
  financing: string
  downPayment: string
  tradeInVehicle: string
  
  // Vehicle Preferences from setup wizard
  vehicleType: string
  fuelType: string
  features: string
  brandPreference: string
  
  // Additional Context from setup wizard
  currentSituation: string
  mustHaves: string
  notes: string
  
  // Setup tracking
  setupCompleted: boolean
}

interface CarBuyingContextType {
  carBuyingData: CarBuyingData | null
  isSetupComplete: boolean
  isWizardOpen: boolean
  setWizardOpen: (open: boolean) => void
  updateCarBuyingData: (data: Partial<CarBuyingData>) => void
  resetCarBuyingData: () => void
}

const CarBuyingContext = createContext<CarBuyingContextType | undefined>(undefined)

const defaultCarBuyingData: CarBuyingData = {
  // Basic Info
  name: "",
  email: "",
  primaryGoal: "",
  timeline: "",
  
  // Budget & Financing
  budgetRange: "",
  financing: "",
  downPayment: "",
  tradeInVehicle: "",
  
  // Vehicle Preferences
  vehicleType: "",
  fuelType: "",
  features: "",
  brandPreference: "",
  
  // Additional Context
  currentSituation: "",
  mustHaves: "",
  notes: "",
  
  // Setup tracking
  setupCompleted: false
}

export function CarBuyingProvider({ children }: { children: React.ReactNode }) {
  const [carBuyingData, setCarBuyingData] = useState<CarBuyingData | null>(null)
  const [isSetupComplete, setIsSetupComplete] = useState(false)
  const [isWizardOpen, setIsWizardOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // Load data from localStorage on mount
  useEffect(() => {
    try {
      const savedData = localStorage.getItem("car-buying-data")
      const savedSetupComplete = localStorage.getItem("car-buying-setup-complete")
      let parsedData = null
      
      if (savedData) {
        parsedData = JSON.parse(savedData)
        setCarBuyingData(parsedData)
      }
      
      if (savedSetupComplete === "true" || (parsedData && parsedData.setupCompleted)) {
        setIsSetupComplete(true)
      } else {
        // First visit - show wizard
        setIsWizardOpen(true)
      }
    } catch (error) {
      console.error("Error loading car buying data:", error)
      // First visit or error - show wizard
      setIsWizardOpen(true)
    } finally {
      setIsLoaded(true)
    }
  }, [])

  // Save data to localStorage whenever it changes
  useEffect(() => {
    if (carBuyingData && isLoaded) {
      try {
        localStorage.setItem("car-buying-data", JSON.stringify(carBuyingData))
      } catch (error) {
        console.error("Error saving car buying data:", error)
      }
    }
  }, [carBuyingData, isLoaded])

  // Save setup completion status
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("car-buying-setup-complete", isSetupComplete.toString())
    }
  }, [isSetupComplete, isLoaded])

  const updateCarBuyingData = (data: Partial<CarBuyingData>) => {
    setCarBuyingData(prev => {
      const updated = { ...defaultCarBuyingData, ...prev, ...data }
      return updated
    })
    setIsSetupComplete(true)
    setIsWizardOpen(false)
  }

  const resetCarBuyingData = () => {
    setCarBuyingData(null)
    setIsSetupComplete(false)
    localStorage.removeItem("car-buying-data")
    localStorage.removeItem("car-buying-setup-complete")
    setIsWizardOpen(true)
  }

  const setWizardOpen = (open: boolean) => {
    setIsWizardOpen(open)
  }

  return (
    <CarBuyingContext.Provider
      value={{
        carBuyingData,
        isSetupComplete,
        isWizardOpen,
        setWizardOpen,
        updateCarBuyingData,
        resetCarBuyingData,
      }}
    >
      {children}
    </CarBuyingContext.Provider>
  )
}

export function useCarBuying() {
  const context = useContext(CarBuyingContext)
  if (context === undefined) {
    throw new Error("useCarBuying must be used within a CarBuyingProvider")
  }
  return context
}

// Helper function to get display data (with fallbacks to mock data)
export function getCarBuyingDisplayData(carBuyingData: CarBuyingData | null) {
  if (!carBuyingData) {
    // Return mock data as fallback
    return {
      name: "Sarah Johnson",
      budgetRange: "$25,000 - $35,000",
      vehicleType: "Sedan",
      timeline: "Within 3 months",
      financing: "Bank loan",
      fuelType: "Gasoline",
      brandPreference: "Honda",
      tradeInVehicle: "2018 Toyota Camry"
    }
  }

  return {
    name: carBuyingData.name || "Car Buyer",
    budgetRange: carBuyingData.budgetRange,
    vehicleType: carBuyingData.vehicleType,
    timeline: carBuyingData.timeline,
    financing: carBuyingData.financing,
    fuelType: carBuyingData.fuelType,
    brandPreference: carBuyingData.brandPreference,
    tradeInVehicle: carBuyingData.tradeInVehicle
  }
}