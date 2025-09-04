"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export interface CarBuyingData {
  // Vehicle Preferences
  vehicleType: 'sedan' | 'suv' | 'truck' | 'coupe' | 'convertible' | 'hatchback' | 'wagon' | 'minivan'
  fuelType: 'gasoline' | 'hybrid' | 'electric' | 'diesel' | 'plug-in-hybrid'
  transmission: 'manual' | 'automatic' | 'cvt' | 'any'
  driveType: 'fwd' | 'rwd' | 'awd' | '4wd' | 'any'
  
  // Budget & Financing
  budgetMin: number
  budgetMax: number
  currency: string
  financingType: 'cash' | 'loan' | 'lease' | 'undecided'
  downPayment: number
  monthlyPaymentMax: number
  loanTermMonths: number
  creditScore: number
  
  // Vehicle Specifications
  yearMin: number
  yearMax: number
  mileageMax: number
  engineSizeMin: number
  engineSizeMax: number
  mpgMin: number
  seatingCapacity: number
  
  // Features & Requirements
  requiredFeatures: string[]
  preferredFeatures: string[]
  safetyRating: number
  warrantyImportance: 'low' | 'medium' | 'high'
  
  // Location & Search
  searchRadius: number
  preferredDealerships: string[]
  avoidDealerships: string[]
  locationZipCode: string
  willingToTravel: boolean
  maxTravelDistance: number
  
  // Timeline & Goals
  purchaseTimeline: '1-week' | '1-month' | '3-months' | '6-months' | 'no-rush'
  currentVehicleStatus: 'none' | 'trade-in' | 'selling-private' | 'keeping'
  tradeInValue: number
  urgencyLevel: 'low' | 'medium' | 'high' | 'emergency'
  
  // Brand & Model Preferences
  preferredBrands: string[]
  avoidBrands: string[]
  specificModels: string[]
  newVsUsed: 'new-only' | 'used-only' | 'both' | 'certified-pre-owned'
  
  // Personal Info
  firstName: string
  lastName: string
  email: string
  phone: string
  licenseNumber: string
  insuranceCompany: string
}

interface CarBuyingContextType {
  carBuyingData: CarBuyingData
  isWizardOpen: boolean
  setWizardOpen: (open: boolean) => void
  updateCarBuyingData: (data: CarBuyingData) => void
}

const defaultCarBuyingData: CarBuyingData = {
  vehicleType: 'sedan',
  fuelType: 'gasoline',
  transmission: 'automatic',
  driveType: 'any',
  budgetMin: 15000,
  budgetMax: 35000,
  currency: 'USD',
  financingType: 'undecided',
  downPayment: 5000,
  monthlyPaymentMax: 500,
  loanTermMonths: 60,
  creditScore: 700,
  yearMin: 2018,
  yearMax: 2024,
  mileageMax: 50000,
  engineSizeMin: 1.5,
  engineSizeMax: 4.0,
  mpgMin: 25,
  seatingCapacity: 5,
  requiredFeatures: [],
  preferredFeatures: [],
  safetyRating: 4,
  warrantyImportance: 'medium',
  searchRadius: 50,
  preferredDealerships: [],
  avoidDealerships: [],
  locationZipCode: '',
  willingToTravel: true,
  maxTravelDistance: 100,
  purchaseTimeline: '3-months',
  currentVehicleStatus: 'none',
  tradeInValue: 0,
  urgencyLevel: 'medium',
  preferredBrands: [],
  avoidBrands: [],
  specificModels: [],
  newVsUsed: 'both',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  licenseNumber: '',
  insuranceCompany: ''
}

const CarBuyingContext = createContext<CarBuyingContextType | undefined>(undefined)

export function CarBuyingProvider({ children }: { children: ReactNode }) {
  const [carBuyingData, setCarBuyingData] = useState<CarBuyingData>(defaultCarBuyingData)
  const [isWizardOpen, setIsWizardOpen] = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('templata-car-buying-data')
    if (saved) {
      try {
        setCarBuyingData(JSON.parse(saved))
      } catch (error) {
        console.error('Failed to parse saved car buying data:', error)
      }
    } else {
      // Show wizard for new users
      setIsWizardOpen(true)
    }
  }, [])

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('templata-car-buying-data', JSON.stringify(carBuyingData))
  }, [carBuyingData])

  const setWizardOpen = (open: boolean) => {
    setIsWizardOpen(open)
  }

  const updateCarBuyingData = (data: CarBuyingData) => {
    setCarBuyingData(data)
    setIsWizardOpen(false)
  }

  return (
    <CarBuyingContext.Provider value={{
      carBuyingData,
      isWizardOpen,
      setWizardOpen,
      updateCarBuyingData
    }}>
      {children}
    </CarBuyingContext.Provider>
  )
}

export function useCarBuying() {
  const context = useContext(CarBuyingContext)
  if (context === undefined) {
    throw new Error('useCarBuying must be used within a CarBuyingProvider')
  }
  return context
}

export function getCarBuyingDisplayData(data: CarBuyingData) {
  const timelineMonths = {
    '1-week': 0.25,
    '1-month': 1,
    '3-months': 3,
    '6-months': 6,
    'no-rush': 12
  }[data.purchaseTimeline] || 3
  
  const purchaseEndDate = new Date()
  purchaseEndDate.setMonth(purchaseEndDate.getMonth() + timelineMonths)
  
  const daysUntilTarget = Math.ceil((purchaseEndDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
  
  return {
    vehicleType: data.vehicleType.charAt(0).toUpperCase() + data.vehicleType.slice(1),
    budgetRange: `${data.currency} ${data.budgetMin.toLocaleString()} - ${data.budgetMax.toLocaleString()}`,
    fuelTypeDisplay: data.fuelType.charAt(0).toUpperCase() + data.fuelType.slice(1).replace('-', '-'),
    purchaseEndDate,
    daysUntilTarget,
    maxMonthlyPayment: `${data.currency} ${data.monthlyPaymentMax}`,
    yearRange: `${data.yearMin} - ${data.yearMax}`,
    location: data.locationZipCode || 'Any location',
    urgencyDisplay: data.urgencyLevel.charAt(0).toUpperCase() + data.urgencyLevel.slice(1),
    newVsUsedDisplay: data.newVsUsed.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  }
}