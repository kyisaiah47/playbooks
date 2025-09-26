"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

export interface MedicalTreatmentData {
  // Basic Info
  patientName: string
  dateOfBirth: Date | undefined
  condition: string
  treatmentGoal: string
  
  // Healthcare Team
  primaryDoctor: string
  hospitalClinic: string
  insurance: string
  emergencyContact: string
  
  // Treatment Details
  treatmentType: string
  startDate: Date | undefined
  frequency: string
  
  // Preferences & Notes
  communicationPreference: string
  specialNeeds: string
  notes: string
  
  // Setup tracking
  setupCompleted: boolean
}

interface MedicalTreatmentContextType {
  medicalData: MedicalTreatmentData | null
  isSetupComplete: boolean
  isWizardOpen: boolean
  setWizardOpen: (open: boolean) => void
  updateMedicalData: (data: MedicalTreatmentData) => void
  resetMedicalData: () => void
}

const MedicalTreatmentContext = createContext<MedicalTreatmentContextType | undefined>(undefined)

const defaultMedicalData: MedicalTreatmentData = {
  patientName: "",
  dateOfBirth: undefined,
  condition: "",
  treatmentGoal: "",
  primaryDoctor: "",
  hospitalClinic: "",
  insurance: "",
  emergencyContact: "",
  treatmentType: "",
  startDate: undefined,
  frequency: "",
  communicationPreference: "",
  specialNeeds: "",
  notes: "",
  setupCompleted: false
}

export function MedicalTreatmentProvider({ children }: { children: React.ReactNode }) {
  const [medicalData, setMedicalData] = useState<MedicalTreatmentData | null>(null)
  const [isSetupComplete, setIsSetupComplete] = useState(false)
  const [isWizardOpen, setIsWizardOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // Load data from localStorage on mount
  useEffect(() => {
    try {
      const savedData = localStorage.getItem("medical-treatment-data")
      const savedSetupComplete = localStorage.getItem("medical-treatment-setup-complete")
      
      if (savedData) {
        const parsedData = JSON.parse(savedData)
        // Convert date strings back to Date objects
        if (parsedData.dateOfBirth) {
          parsedData.dateOfBirth = new Date(parsedData.dateOfBirth)
        }
        if (parsedData.startDate) {
          parsedData.startDate = new Date(parsedData.startDate)
        }
        setMedicalData(parsedData)
        setIsSetupComplete(parsedData.setupCompleted || false)
      }
      
      if (savedSetupComplete === "true") {
        setIsSetupComplete(true)
      } else {
        // First visit - show wizard
        setIsWizardOpen(true)
      }
    } catch (error) {
      console.error("Error loading medical data:", error)
      // First visit or error - show wizard
      setIsWizardOpen(true)
    } finally {
      setIsLoaded(true)
    }
  }, [])

  // Save data to localStorage whenever it changes
  useEffect(() => {
    if (medicalData && isLoaded) {
      try {
        localStorage.setItem("medical-treatment-data", JSON.stringify(medicalData))
      } catch (error) {
        console.error("Error saving medical data:", error)
      }
    }
  }, [medicalData, isLoaded])

  // Save setup completion status
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("medical-treatment-setup-complete", isSetupComplete.toString())
    }
  }, [isSetupComplete, isLoaded])

  const updateMedicalData = (data: MedicalTreatmentData) => {
    const updatedData = { ...data, setupCompleted: true }
    setMedicalData(updatedData)
    setIsSetupComplete(true)
    setIsWizardOpen(false)
  }

  const resetMedicalData = () => {
    setMedicalData(null)
    setIsSetupComplete(false)
    localStorage.removeItem("medical-treatment-data")
    localStorage.removeItem("medical-treatment-setup-complete")
    setIsWizardOpen(true)
  }

  const setWizardOpen = (open: boolean) => {
    setIsWizardOpen(open)
  }

  return (
    <MedicalTreatmentContext.Provider
      value={{
        medicalData,
        isSetupComplete,
        isWizardOpen,
        setWizardOpen,
        updateMedicalData,
        resetMedicalData,
      }}
    >
      {children}
    </MedicalTreatmentContext.Provider>
  )
}

export function useMedicalTreatment() {
  const context = useContext(MedicalTreatmentContext)
  if (context === undefined) {
    throw new Error("useMedicalTreatment must be used within a MedicalTreatmentProvider")
  }
  return context
}

// Helper function to get display data (with fallbacks to mock data)
export function getMedicalTreatmentDisplayData(medicalData: MedicalTreatmentData | null) {
  if (!medicalData) {
    // Return mock data as fallback
    return {
      patientName: "John Smith",
      condition: "Diabetes Management",
      primaryDoctor: "Dr. Sarah Johnson",
      startDate: new Date("2024-01-15"),
      daysInTreatment: Math.ceil((new Date().getTime() - new Date("2024-01-15").getTime()) / (1000 * 60 * 60 * 24))
    }
  }

  return {
    patientName: medicalData.patientName || "Patient",
    condition: medicalData.condition || "Medical Treatment",
    primaryDoctor: medicalData.primaryDoctor || "Healthcare Provider",
    startDate: medicalData.startDate || new Date(),
    daysInTreatment: medicalData.startDate ? 
      Math.ceil((new Date().getTime() - medicalData.startDate.getTime()) / (1000 * 60 * 60 * 24)) : 0
  }
}