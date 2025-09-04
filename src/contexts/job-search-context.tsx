"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export interface JobSearchData {
  // Basic Info
  targetRole: string
  industry: string
  experienceLevel: 'entry-level' | 'mid-level' | 'senior-level' | 'executive'
  
  // Location & Work Preferences
  locations: string[]
  workType: 'remote' | 'hybrid' | 'on-site' | 'flexible'
  companySizePreference: 'startup' | 'small' | 'medium' | 'large' | 'any'
  
  // Skills & Qualifications
  coreSkills: string[]
  certifications: string[]
  education: string
  
  // Salary & Benefits
  salaryMin: number
  salaryMax: number
  currency: string
  benefitsPriorities: string[]
  
  // Timeline & Goals
  searchTimeline: '1-month' | '3-months' | '6-months' | '12-months' | 'no-rush'
  weeklyApplicationTarget: number
  currentEmploymentStatus: 'employed' | 'unemployed' | 'student' | 'career-change'
  
  // Personal Branding
  linkedinUrl?: string
  portfolioUrl?: string
  githubUrl?: string
  personalStatement: string
}

interface JobSearchContextType {
  jobSearchData: JobSearchData
  isWizardOpen: boolean
  setWizardOpen: (open: boolean) => void
  updateJobSearchData: (data: JobSearchData) => void
}

const defaultJobSearchData: JobSearchData = {
  targetRole: "",
  industry: "",
  experienceLevel: 'mid-level',
  locations: [],
  workType: 'hybrid',
  companySizePreference: 'any',
  coreSkills: [],
  certifications: [],
  education: "",
  salaryMin: 50000,
  salaryMax: 100000,
  currency: 'USD',
  benefitsPriorities: [],
  searchTimeline: '3-months',
  weeklyApplicationTarget: 5,
  currentEmploymentStatus: 'employed',
  personalStatement: ""
}

const JobSearchContext = createContext<JobSearchContextType | undefined>(undefined)

export function JobSearchProvider({ children }: { children: ReactNode }) {
  const [jobSearchData, setJobSearchData] = useState<JobSearchData>(defaultJobSearchData)
  const [isWizardOpen, setIsWizardOpen] = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('templata-job-search-data')
    if (saved) {
      try {
        setJobSearchData(JSON.parse(saved))
      } catch (error) {
        console.error('Failed to parse saved job search data:', error)
      }
    } else {
      // Show wizard for new users
      setIsWizardOpen(true)
    }
  }, [])

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('templata-job-search-data', JSON.stringify(jobSearchData))
  }, [jobSearchData])

  const setWizardOpen = (open: boolean) => {
    setIsWizardOpen(open)
  }

  const updateJobSearchData = (data: JobSearchData) => {
    setJobSearchData(data)
    setIsWizardOpen(false)
  }

  return (
    <JobSearchContext.Provider value={{
      jobSearchData,
      isWizardOpen,
      setWizardOpen,
      updateJobSearchData
    }}>
      {children}
    </JobSearchContext.Provider>
  )
}

export function useJobSearch() {
  const context = useContext(JobSearchContext)
  if (context === undefined) {
    throw new Error('useJobSearch must be used within a JobSearchProvider')
  }
  return context
}

export function getJobSearchDisplayData(data: JobSearchData) {
  const timelineMonths = {
    '1-month': 1,
    '3-months': 3,
    '6-months': 6,
    '12-months': 12,
    'no-rush': 24
  }[data.searchTimeline] || 3
  
  const searchEndDate = new Date()
  searchEndDate.setMonth(searchEndDate.getMonth() + timelineMonths)
  
  const daysUntilTarget = Math.ceil((searchEndDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
  
  const weeksPassed = Math.floor((Date.now() - new Date().getTime()) / (1000 * 60 * 60 * 24 * 7))
  const expectedApplications = weeksPassed * data.weeklyApplicationTarget
  
  return {
    targetRole: data.targetRole || "Your Target Role",
    industry: data.industry || "Your Industry",
    experienceLevel: data.experienceLevel.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()),
    searchEndDate,
    daysUntilTarget,
    weeklyTarget: data.weeklyApplicationTarget,
    salaryRange: `${data.currency} ${data.salaryMin.toLocaleString()} - ${data.salaryMax.toLocaleString()}`,
    workTypeDisplay: data.workType.charAt(0).toUpperCase() + data.workType.slice(1),
    locationsDisplay: data.locations.length > 0 ? data.locations.join(', ') : 'Any location'
  }
}