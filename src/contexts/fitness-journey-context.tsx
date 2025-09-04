"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export interface FitnessJourneyData {
  // Basic Info
  fitnessGoals: string[]
  fitnessLevel: 'beginner' | 'intermediate' | 'advanced' | 'athlete'
  age: number
  height: number
  weight: number
  gender: 'male' | 'female' | 'other' | 'prefer-not-to-say'
  
  // Goals & Preferences
  primaryGoal: 'weight-loss' | 'muscle-gain' | 'strength' | 'endurance' | 'general-health' | 'athletic-performance'
  targetWeight?: number
  activityLevel: 'sedentary' | 'lightly-active' | 'moderately-active' | 'very-active' | 'extremely-active'
  workoutPreference: string[]
  
  // Schedule & Availability
  workoutDaysPerWeek: number
  preferredWorkoutDuration: number
  availableTimeSlots: string[]
  restDays: string[]
  
  // Nutrition Preferences
  dietaryRestrictions: string[]
  nutritionGoals: string[]
  dailyCalorieTarget?: number
  dailyWaterTarget: number
  supplementsUsed: string[]
  
  // Health & Medical
  medicalConditions: string[]
  injuries: string[]
  allergies: string[]
  medications: string[]
  pregnancyStatus?: 'not-pregnant' | 'pregnant' | 'postpartum'
  
  // Experience & Equipment
  gymMembership: boolean
  homeGymEquipment: string[]
  previousExperience: string[]
  currentProgram?: string
  
  // Tracking Preferences
  trackingMethods: string[]
  measurementUnits: 'metric' | 'imperial'
  progressPhotoFrequency: 'weekly' | 'bi-weekly' | 'monthly' | 'never'
  
  // Professional Support
  personalTrainer?: boolean
  nutritionist?: boolean
  medicalSupervision?: boolean
  buddySystem?: boolean
  
  // Timeline & Motivation
  fitnessTimeline: '3-months' | '6-months' | '1-year' | '2-years' | 'ongoing'
  motivationFactors: string[]
  rewardSystem: string[]
  
  // External Links
  fitnessAppConnections: string[]
  socialMediaTracking?: string
  
  // Personal Notes
  motivationalStatement: string
}

interface FitnessJourneyContextType {
  fitnessJourneyData: FitnessJourneyData
  isWizardOpen: boolean
  setWizardOpen: (open: boolean) => void
  updateFitnessJourneyData: (data: FitnessJourneyData) => void
}

const defaultFitnessJourneyData: FitnessJourneyData = {
  fitnessGoals: [],
  fitnessLevel: 'beginner',
  age: 30,
  height: 170,
  weight: 70,
  gender: 'prefer-not-to-say',
  primaryGoal: 'general-health',
  targetWeight: undefined,
  activityLevel: 'moderately-active',
  workoutPreference: [],
  workoutDaysPerWeek: 3,
  preferredWorkoutDuration: 60,
  availableTimeSlots: [],
  restDays: [],
  dietaryRestrictions: [],
  nutritionGoals: [],
  dailyCalorieTarget: undefined,
  dailyWaterTarget: 2000,
  supplementsUsed: [],
  medicalConditions: [],
  injuries: [],
  allergies: [],
  medications: [],
  pregnancyStatus: 'not-pregnant',
  gymMembership: false,
  homeGymEquipment: [],
  previousExperience: [],
  currentProgram: undefined,
  trackingMethods: [],
  measurementUnits: 'metric',
  progressPhotoFrequency: 'monthly',
  personalTrainer: false,
  nutritionist: false,
  medicalSupervision: false,
  buddySystem: false,
  fitnessTimeline: '6-months',
  motivationFactors: [],
  rewardSystem: [],
  fitnessAppConnections: [],
  socialMediaTracking: undefined,
  motivationalStatement: ""
}

const FitnessJourneyContext = createContext<FitnessJourneyContextType | undefined>(undefined)

export function FitnessJourneyProvider({ children }: { children: ReactNode }) {
  const [fitnessJourneyData, setFitnessJourneyData] = useState<FitnessJourneyData>(defaultFitnessJourneyData)
  const [isWizardOpen, setIsWizardOpen] = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('templata-fitness-journey-data')
    if (saved) {
      try {
        setFitnessJourneyData(JSON.parse(saved))
      } catch (error) {
        console.error('Failed to parse saved fitness journey data:', error)
      }
    } else {
      // Show wizard for new users
      setIsWizardOpen(true)
    }
  }, [])

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('templata-fitness-journey-data', JSON.stringify(fitnessJourneyData))
  }, [fitnessJourneyData])

  const setWizardOpen = (open: boolean) => {
    setIsWizardOpen(open)
  }

  const updateFitnessJourneyData = (data: FitnessJourneyData) => {
    setFitnessJourneyData(data)
    setIsWizardOpen(false)
  }

  return (
    <FitnessJourneyContext.Provider value={{
      fitnessJourneyData,
      isWizardOpen,
      setWizardOpen,
      updateFitnessJourneyData
    }}>
      {children}
    </FitnessJourneyContext.Provider>
  )
}

export function useFitnessJourney() {
  const context = useContext(FitnessJourneyContext)
  if (context === undefined) {
    throw new Error('useFitnessJourney must be used within a FitnessJourneyProvider')
  }
  return context
}

export function getFitnessJourneyDisplayData(data: FitnessJourneyData) {
  const timelineMonths = {
    '3-months': 3,
    '6-months': 6,
    '1-year': 12,
    '2-years': 24,
    'ongoing': 12
  }[data.fitnessTimeline] || 6
  
  const journeyEndDate = new Date()
  journeyEndDate.setMonth(journeyEndDate.getMonth() + timelineMonths)
  
  const daysUntilTarget = Math.ceil((journeyEndDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
  
  const bmi = data.weight / Math.pow(data.height / 100, 2)
  
  const primaryGoalDisplay = {
    'weight-loss': 'Weight Loss',
    'muscle-gain': 'Muscle Gain',
    'strength': 'Strength Building',
    'endurance': 'Endurance Training',
    'general-health': 'General Health',
    'athletic-performance': 'Athletic Performance'
  }[data.primaryGoal] || 'General Health'
  
  return {
    primaryGoal: primaryGoalDisplay,
    fitnessLevel: data.fitnessLevel.charAt(0).toUpperCase() + data.fitnessLevel.slice(1),
    currentWeight: `${data.weight} ${data.measurementUnits === 'metric' ? 'kg' : 'lbs'}`,
    targetWeight: data.targetWeight ? `${data.targetWeight} ${data.measurementUnits === 'metric' ? 'kg' : 'lbs'}` : 'Not set',
    bmi: bmi.toFixed(1),
    workoutsPerWeek: data.workoutDaysPerWeek,
    workoutDuration: `${data.preferredWorkoutDuration} min`,
    journeyEndDate,
    daysUntilTarget,
    waterIntakeTarget: `${data.dailyWaterTarget} ml`,
    activityLevelDisplay: data.activityLevel.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()),
    hasPersonalTrainer: data.personalTrainer,
    hasGymMembership: data.gymMembership
  }
}