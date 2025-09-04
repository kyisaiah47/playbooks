"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export interface CollegePlanningData {
  // Student Information
  studentName: string
  graduationYear: number
  currentGPA: number
  targetGPA: number
  
  // Academic Interests
  intendedMajor: string
  alternativeMajors: string[]
  academicInterests: string[]
  careerGoals: string
  
  // School Preferences  
  preferredSchoolTypes: ('public' | 'private' | 'liberal-arts' | 'research' | 'community' | 'technical')[]
  preferredSchoolSizes: ('small' | 'medium' | 'large')[]
  preferredLocations: string[]
  maxDistanceFromHome: number
  
  // Financial Information
  familyIncomeRange: 'under-30k' | '30k-50k' | '50k-75k' | '75k-100k' | '100k-150k' | 'over-150k'
  expectedFamilyContribution: number
  savings529Amount: number
  needFinancialAid: boolean
  meritScholarshipGoals: boolean
  
  // Academic Profile
  standardizedTests: {
    sat: {
      totalScore: number
      math: number
      readingWriting: number
      taken: boolean
    }
    act: {
      compositeScore: number
      taken: boolean
    }
    ap: {
      coursesTaken: string[]
      coursesPlanned: string[]
    }
  }
  
  // Extracurricular Activities
  sports: string[]
  clubs: string[]
  volunteering: string[]
  workExperience: string[]
  leadership: string[]
  awards: string[]
  
  // College Search Criteria
  maxApplications: number
  reachSchools: number
  matchSchools: number
  safetySchools: number
  
  // Timeline Preferences
  applicationDeadlines: {
    earlyDecision: boolean
    earlyAction: boolean
    regularDecision: boolean
  }
  campusVisitPlan: 'virtual-only' | 'in-person-only' | 'hybrid' | 'none'
  
  // Support System
  hasCollegeCounselor: boolean
  parentInvolvement: 'high' | 'medium' | 'low'
  peerSupport: boolean
  
  // Personal Statements & Essays
  personalStatement: string
  essayTopics: string[]
  
  // Special Circumstances
  firstGeneration: boolean
  underrepresentedMinority: boolean
  internationalStudent: boolean
  legacyStatus: string[]
  specialTalents: string[]
}

interface CollegePlanningContextType {
  collegePlanningData: CollegePlanningData
  isWizardOpen: boolean
  setWizardOpen: (open: boolean) => void
  updateCollegePlanningData: (data: CollegePlanningData) => void
}

const defaultCollegePlanningData: CollegePlanningData = {
  studentName: "",
  graduationYear: new Date().getFullYear() + 1,
  currentGPA: 3.5,
  targetGPA: 3.8,
  intendedMajor: "",
  alternativeMajors: [],
  academicInterests: [],
  careerGoals: "",
  preferredSchoolTypes: [],
  preferredSchoolSizes: [],
  preferredLocations: [],
  maxDistanceFromHome: 500,
  familyIncomeRange: '50k-75k',
  expectedFamilyContribution: 10000,
  savings529Amount: 0,
  needFinancialAid: true,
  meritScholarshipGoals: true,
  standardizedTests: {
    sat: {
      totalScore: 0,
      math: 0,
      readingWriting: 0,
      taken: false
    },
    act: {
      compositeScore: 0,
      taken: false
    },
    ap: {
      coursesTaken: [],
      coursesPlanned: []
    }
  },
  sports: [],
  clubs: [],
  volunteering: [],
  workExperience: [],
  leadership: [],
  awards: [],
  maxApplications: 12,
  reachSchools: 4,
  matchSchools: 6,
  safetySchools: 2,
  applicationDeadlines: {
    earlyDecision: false,
    earlyAction: true,
    regularDecision: true
  },
  campusVisitPlan: 'hybrid',
  hasCollegeCounselor: false,
  parentInvolvement: 'medium',
  peerSupport: true,
  personalStatement: "",
  essayTopics: [],
  firstGeneration: false,
  underrepresentedMinority: false,
  internationalStudent: false,
  legacyStatus: [],
  specialTalents: []
}

const CollegePlanningContext = createContext<CollegePlanningContextType | undefined>(undefined)

export function CollegePlanningProvider({ children }: { children: ReactNode }) {
  const [collegePlanningData, setCollegePlanningData] = useState<CollegePlanningData>(defaultCollegePlanningData)
  const [isWizardOpen, setIsWizardOpen] = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('templata-college-planning-data')
    if (saved) {
      try {
        setCollegePlanningData(JSON.parse(saved))
      } catch (error) {
        console.error('Failed to parse saved college planning data:', error)
      }
    } else {
      // Show wizard for new users
      setIsWizardOpen(true)
    }
  }, [])

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('templata-college-planning-data', JSON.stringify(collegePlanningData))
  }, [collegePlanningData])

  const setWizardOpen = (open: boolean) => {
    setIsWizardOpen(open)
  }

  const updateCollegePlanningData = (data: CollegePlanningData) => {
    setCollegePlanningData(data)
    setIsWizardOpen(false)
  }

  return (
    <CollegePlanningContext.Provider value={{
      collegePlanningData,
      isWizardOpen,
      setWizardOpen,
      updateCollegePlanningData
    }}>
      {children}
    </CollegePlanningContext.Provider>
  )
}

export function useCollegePlanning() {
  const context = useContext(CollegePlanningContext)
  if (context === undefined) {
    throw new Error('useCollegePlanning must be used within a CollegePlanningProvider')
  }
  return context
}

export function getCollegePlanningDisplayData(data: CollegePlanningData) {
  const currentYear = new Date().getFullYear()
  const monthsUntilGraduation = (data.graduationYear - currentYear) * 12 + (12 - new Date().getMonth())
  const daysUntilGraduation = Math.ceil(monthsUntilGraduation * 30.44)
  
  // Calculate application timeline milestones
  const seniorYear = data.graduationYear - 1
  const juniorYear = data.graduationYear - 2
  const isJuniorYear = currentYear === juniorYear
  const isSeniorYear = currentYear === seniorYear
  
  // Early application deadlines (typically November 1 & 15)
  const earlyDeadlines = new Date(seniorYear, 10, 15) // November 15
  const regularDeadlines = new Date(seniorYear + 1, 0, 1) // January 1
  const daysUntilEarlyDeadlines = Math.ceil((earlyDeadlines.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
  const daysUntilRegularDeadlines = Math.ceil((regularDeadlines.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
  
  const totalApplicationsPlanned = data.reachSchools + data.matchSchools + data.safetySchools
  const gpaProgress = data.targetGPA > 0 ? (data.currentGPA / data.targetGPA) * 100 : 0
  
  return {
    studentName: data.studentName || "Student",
    intendedMajor: data.intendedMajor || "Undecided",
    graduationYear: data.graduationYear,
    daysUntilGraduation: Math.max(0, daysUntilGraduation),
    monthsUntilGraduation: Math.max(0, monthsUntilGraduation),
    currentGPA: data.currentGPA,
    targetGPA: data.targetGPA,
    gpaProgress: Math.min(100, Math.max(0, gpaProgress)),
    totalApplicationsPlanned,
    maxApplications: data.maxApplications,
    applicationProgress: `${totalApplicationsPlanned}/${data.maxApplications}`,
    daysUntilEarlyDeadlines: Math.max(0, daysUntilEarlyDeadlines),
    daysUntilRegularDeadlines: Math.max(0, daysUntilRegularDeadlines),
    isJuniorYear,
    isSeniorYear,
    hasStandardizedTests: data.standardizedTests.sat.taken || data.standardizedTests.act.taken,
    satScore: data.standardizedTests.sat.taken ? data.standardizedTests.sat.totalScore : null,
    actScore: data.standardizedTests.act.taken ? data.standardizedTests.act.compositeScore : null,
    financialAidNeeded: data.needFinancialAid,
    expectedContribution: `$${data.expectedFamilyContribution.toLocaleString()}`,
    preferredLocationsDisplay: data.preferredLocations.length > 0 ? data.preferredLocations.join(', ') : 'Any location',
    academicInterestsCount: data.academicInterests.length,
    extracurricularsCount: data.sports.length + data.clubs.length + data.volunteering.length + data.workExperience.length
  }
}