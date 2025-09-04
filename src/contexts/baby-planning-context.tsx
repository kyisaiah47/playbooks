"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export interface BabyPlanningData {
  // Basic Info
  babyName: string
  babyGender: 'boy' | 'girl' | 'surprise' | 'unknown'
  dueDate: string
  currentWeek: number
  isFirstBaby: boolean
  
  // Parent Information
  parentOneName: string
  parentTwoName: string
  relationshipStatus: 'married' | 'partnered' | 'single'
  
  // Pregnancy Details
  pregnancyType: 'natural' | 'ivf' | 'adoption' | 'surrogacy'
  multiplePregnancy: boolean
  numberOfBabies: number
  highRiskPregnancy: boolean
  
  // Healthcare
  doctorName: string
  hospitalName: string
  birthPlanType: 'natural' | 'medicated' | 'cesarean' | 'undecided'
  doula: boolean
  midwife: boolean
  
  // Financial Planning
  budgetTotal: number
  currency: string
  budgetCategories: {
    nursery: number
    clothing: number
    gear: number
    healthcare: number
    childcare: number
    education: number
  }
  
  // Nursery & Home
  nurseryTheme: string
  nurseryStyle: 'modern' | 'traditional' | 'minimalist' | 'themed' | 'eclectic'
  homePreparation: string[]
  babyProofingNeeded: boolean
  
  // Support System
  familySupport: string[]
  friendsSupport: string[]
  professionalSupport: string[]
  parentingClasses: boolean
  
  // Work & Career
  parentOneMaternityLeave: number
  parentTwoPaternityLeave: number
  returnToWorkPlan: 'full-time' | 'part-time' | 'work-from-home' | 'career-break'
  childcareArrangements: 'daycare' | 'nanny' | 'family' | 'sahp' | 'undecided'
  
  // Preferences & Goals
  feedingPlan: 'breastfeeding' | 'bottle' | 'combination' | 'undecided'
  sleepPhilosophy: 'co-sleeping' | 'crib' | 'bassinet' | 'flexible'
  parentingStyle: 'attachment' | 'structured' | 'gentle' | 'balanced' | 'exploring'
  
  // Timeline Preferences
  babyShowerPlanned: boolean
  babyShowerDate: string
  nurseryCompletionGoal: string
  hospitalBagPackingDate: string
  
  // Milestones & Memories
  announcementDate: string
  genderRevealDate: string
  firstKickDate: string
  babymoonPlanned: boolean
  babymoonDate: string
}

interface BabyPlanningContextType {
  babyPlanningData: BabyPlanningData
  isWizardOpen: boolean
  setWizardOpen: (open: boolean) => void
  updateBabyPlanningData: (data: BabyPlanningData) => void
}

const defaultBabyPlanningData: BabyPlanningData = {
  babyName: "",
  babyGender: 'unknown',
  dueDate: "",
  currentWeek: 12,
  isFirstBaby: true,
  parentOneName: "",
  parentTwoName: "",
  relationshipStatus: 'partnered',
  pregnancyType: 'natural',
  multiplePregnancy: false,
  numberOfBabies: 1,
  highRiskPregnancy: false,
  doctorName: "",
  hospitalName: "",
  birthPlanType: 'undecided',
  doula: false,
  midwife: false,
  budgetTotal: 15000,
  currency: 'USD',
  budgetCategories: {
    nursery: 3000,
    clothing: 1500,
    gear: 4000,
    healthcare: 2000,
    childcare: 3000,
    education: 1500
  },
  nurseryTheme: "",
  nurseryStyle: 'modern',
  homePreparation: [],
  babyProofingNeeded: true,
  familySupport: [],
  friendsSupport: [],
  professionalSupport: [],
  parentingClasses: false,
  parentOneMaternityLeave: 12,
  parentTwoPaternityLeave: 2,
  returnToWorkPlan: 'full-time',
  childcareArrangements: 'undecided',
  feedingPlan: 'undecided',
  sleepPhilosophy: 'flexible',
  parentingStyle: 'exploring',
  babyShowerPlanned: false,
  babyShowerDate: "",
  nurseryCompletionGoal: "",
  hospitalBagPackingDate: "",
  announcementDate: "",
  genderRevealDate: "",
  firstKickDate: "",
  babymoonPlanned: false,
  babymoonDate: ""
}

const BabyPlanningContext = createContext<BabyPlanningContextType | undefined>(undefined)

export function BabyPlanningProvider({ children }: { children: ReactNode }) {
  const [babyPlanningData, setBabyPlanningData] = useState<BabyPlanningData>(defaultBabyPlanningData)
  const [isWizardOpen, setIsWizardOpen] = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('templata-baby-planning-data')
    if (saved) {
      try {
        setBabyPlanningData(JSON.parse(saved))
      } catch (error) {
        console.error('Failed to parse saved baby planning data:', error)
      }
    } else {
      // Show wizard for new users
      setIsWizardOpen(true)
    }
  }, [])

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('templata-baby-planning-data', JSON.stringify(babyPlanningData))
  }, [babyPlanningData])

  const setWizardOpen = (open: boolean) => {
    setIsWizardOpen(open)
  }

  const updateBabyPlanningData = (data: BabyPlanningData) => {
    setBabyPlanningData(data)
    setIsWizardOpen(false)
  }

  return (
    <BabyPlanningContext.Provider value={{
      babyPlanningData,
      isWizardOpen,
      setWizardOpen,
      updateBabyPlanningData
    }}>
      {children}
    </BabyPlanningContext.Provider>
  )
}

export function useBabyPlanning() {
  const context = useContext(BabyPlanningContext)
  if (context === undefined) {
    throw new Error('useBabyPlanning must be used within a BabyPlanningProvider')
  }
  return context
}

export function getBabyPlanningDisplayData(data: BabyPlanningData) {
  const dueDate = data.dueDate ? new Date(data.dueDate) : new Date()
  const today = new Date()
  const daysUntilDue = Math.ceil((dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
  const weeksRemaining = Math.floor(daysUntilDue / 7)
  
  const totalBudget = data.budgetTotal
  const budgetSpent = Object.values(data.budgetCategories).reduce((sum, amount) => sum + amount, 0)
  const budgetRemaining = totalBudget - budgetSpent
  
  return {
    babyName: data.babyName || "Baby",
    dueDate,
    daysUntilDue: Math.max(0, daysUntilDue),
    weeksRemaining: Math.max(0, weeksRemaining),
    currentWeek: data.currentWeek,
    trimester: data.currentWeek <= 12 ? '1st' : data.currentWeek <= 27 ? '2nd' : '3rd',
    isFirstBaby: data.isFirstBaby,
    parentOneName: data.parentOneName || "Parent 1",
    parentTwoName: data.parentTwoName || "Parent 2",
    budgetTotal: `${data.currency} ${totalBudget.toLocaleString()}`,
    budgetSpent: `${data.currency} ${budgetSpent.toLocaleString()}`,
    budgetRemaining: `${data.currency} ${budgetRemaining.toLocaleString()}`,
    budgetProgress: Math.round((budgetSpent / totalBudget) * 100),
    genderDisplay: data.babyGender === 'surprise' ? 'Surprise!' : 
                   data.babyGender === 'unknown' ? 'Unknown' :
                   data.babyGender.charAt(0).toUpperCase() + data.babyGender.slice(1),
    pregnancyTypeDisplay: data.pregnancyType.charAt(0).toUpperCase() + data.pregnancyType.slice(1),
    supportSystemSize: data.familySupport.length + data.friendsSupport.length + data.professionalSupport.length
  }
}