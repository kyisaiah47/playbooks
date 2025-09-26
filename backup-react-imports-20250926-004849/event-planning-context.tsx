"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

export interface EventPlanningData {
  // Basic Info
  eventName: string
  organizerName: string
  eventDate: Date | undefined
  eventTime: Date | undefined
  eventType: string
  attendeeCount: number
  totalBudget: number
  
  // Venues
  eventVenue: string
  eventAddress: string
  
  // Additional Details
  eventStyle: string
  specialRequirements: string
  cateringNeeds: string
  
  // Extended wizard fields
  venueType?: string
  capacity?: number
  budgetPriority?: string
  notes?: string
}

interface EventPlanningContextType {
  eventPlanningData: EventPlanningData | null
  isSetupComplete: boolean
  isWizardOpen: boolean
  setWizardOpen: (open: boolean) => void
  updateEventPlanningData: (data: EventPlanningData) => void
  resetEventPlanningData: () => void
}

const EventPlanningContext = createContext<EventPlanningContextType | undefined>(undefined)

const defaultEventPlanningData: EventPlanningData = {
  eventName: "",
  organizerName: "",
  eventDate: undefined,
  eventTime: undefined,
  eventType: "",
  attendeeCount: 0,
  totalBudget: 0,
  eventVenue: "",
  eventAddress: "",
  eventStyle: "",
  specialRequirements: "",
  cateringNeeds: "",
  venueType: "",
  capacity: undefined,
  budgetPriority: "",
  notes: ""
}

export function EventPlanningProvider({ children }: { children: React.ReactNode }) {
  const [eventPlanningData, setEventPlanningData] = useState<EventPlanningData | null>(null)
  const [isSetupComplete, setIsSetupComplete] = useState(false)
  const [isWizardOpen, setIsWizardOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // Load data from localStorage on mount
  useEffect(() => {
    try {
      const savedData = localStorage.getItem("event-planning-data")
      const savedSetupComplete = localStorage.getItem("event-planning-setup-complete")
      
      if (savedData) {
        const parsedData = JSON.parse(savedData)
        // Convert date strings back to Date objects
        if (parsedData.eventDate) {
          parsedData.eventDate = new Date(parsedData.eventDate)
        }
        if (parsedData.eventTime) {
          parsedData.eventTime = new Date(parsedData.eventTime)
        }
        setEventPlanningData(parsedData)
      }
      
      if (savedSetupComplete === "true") {
        setIsSetupComplete(true)
      } else {
        // First visit - show wizard
        setIsWizardOpen(true)
      }
    } catch (error) {
      console.error("Error loading event planning data:", error)
      // First visit or error - show wizard
      setIsWizardOpen(true)
    } finally {
      setIsLoaded(true)
    }
  }, [])

  // Save data to localStorage whenever it changes
  useEffect(() => {
    if (eventPlanningData && isLoaded) {
      try {
        localStorage.setItem("event-planning-data", JSON.stringify(eventPlanningData))
      } catch (error) {
        console.error("Error saving event planning data:", error)
      }
    }
  }, [eventPlanningData, isLoaded])

  // Save setup completion status
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("event-planning-setup-complete", isSetupComplete.toString())
    }
  }, [isSetupComplete, isLoaded])

  const updateEventPlanningData = (data: EventPlanningData) => {
    setEventPlanningData(data)
    setIsSetupComplete(true)
    setIsWizardOpen(false)
  }

  const resetEventPlanningData = () => {
    setEventPlanningData(null)
    setIsSetupComplete(false)
    localStorage.removeItem("event-planning-data")
    localStorage.removeItem("event-planning-setup-complete")
    setIsWizardOpen(true)
  }

  const setWizardOpen = (open: boolean) => {
    setIsWizardOpen(open)
  }

  return (
    <EventPlanningContext.Provider
      value={{
        eventPlanningData,
        isSetupComplete,
        isWizardOpen,
        setWizardOpen,
        updateEventPlanningData,
        resetEventPlanningData,
      }}
    >
      {children}
    </EventPlanningContext.Provider>
  )
}

export function useEventPlanning() {
  const context = useContext(EventPlanningContext)
  if (context === undefined) {
    throw new Error("useEventPlanning must be used within a EventPlanningProvider")
  }
  return context
}

// Helper function to get display data (with fallbacks to mock data)
export function getEventPlanningDisplayData(eventPlanningData: EventPlanningData | null) {
  if (!eventPlanningData) {
    // Return mock data as fallback
    return {
      eventName: "Corporate Annual Gala",
      organizerName: "Sarah Johnson",
      eventDate: new Date("2024-09-15"),
      eventTime: "18:00",
      eventVenue: "Grand Conference Center",
      attendeeCount: 250,
      totalBudget: 25000,
      eventType: "Corporate Event",
      eventStyle: "Formal",
      daysUntil: Math.ceil((new Date("2024-09-15").getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
    }
  }

  return {
    eventName: eventPlanningData.eventName,
    organizerName: eventPlanningData.organizerName,
    eventDate: eventPlanningData.eventDate || new Date(),
    eventTime: eventPlanningData.eventTime ? eventPlanningData.eventTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : "18:00",
    eventVenue: eventPlanningData.eventVenue,
    attendeeCount: eventPlanningData.attendeeCount,
    totalBudget: eventPlanningData.totalBudget,
    eventType: eventPlanningData.eventType,
    eventStyle: eventPlanningData.eventStyle,
    daysUntil: eventPlanningData.eventDate ? 
      Math.ceil((eventPlanningData.eventDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)) : 0
  }
}