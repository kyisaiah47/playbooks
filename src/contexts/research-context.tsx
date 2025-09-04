"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export interface ResearchData {
  projectTitle: string
  researchField: string
  projectType: 'dissertation' | 'thesis' | 'journal-article' | 'grant-proposal' | 'conference-paper' | 'book'
  timeline: string
  teamSize: number
  institution: string
  supervisor?: string
  budget?: number
  methodology: string[]
  objectives: string[]
  expectedOutcomes: string[]
}

interface ResearchContextType {
  researchData: ResearchData
  isWizardOpen: boolean
  setWizardOpen: (open: boolean) => void
  updateResearchData: (data: ResearchData) => void
}

const defaultResearchData: ResearchData = {
  projectTitle: "My Research Project",
  researchField: "General Studies",
  projectType: "journal-article",
  timeline: "12 months",
  teamSize: 1,
  institution: "",
  methodology: [],
  objectives: [],
  expectedOutcomes: []
}

const ResearchContext = createContext<ResearchContextType | undefined>(undefined)

export function ResearchProvider({ children }: { children: ReactNode }) {
  const [researchData, setResearchData] = useState<ResearchData>(defaultResearchData)
  const [isWizardOpen, setIsWizardOpen] = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('templata-research-data')
    if (saved) {
      try {
        setResearchData(JSON.parse(saved))
      } catch (error) {
        console.error('Failed to parse saved research data:', error)
      }
    } else {
      // Show wizard for new users
      setIsWizardOpen(true)
    }
  }, [])

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('templata-research-data', JSON.stringify(researchData))
  }, [researchData])

  const setWizardOpen = (open: boolean) => {
    setIsWizardOpen(open)
  }

  const updateResearchData = (data: ResearchData) => {
    setResearchData(data)
    setIsWizardOpen(false)
  }

  return (
    <ResearchContext.Provider value={{
      researchData,
      isWizardOpen,
      setWizardOpen,
      updateResearchData
    }}>
      {children}
    </ResearchContext.Provider>
  )
}

export function useResearch() {
  const context = useContext(ResearchContext)
  if (context === undefined) {
    throw new Error('useResearch must be used within a ResearchProvider')
  }
  return context
}

export function getResearchDisplayData(data: ResearchData) {
  const startDate = new Date()
  const timelineMonths = parseInt(data.timeline.split(' ')[0]) || 12
  const endDate = new Date()
  endDate.setMonth(endDate.getMonth() + timelineMonths)
  
  const daysUntilDeadline = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
  
  return {
    projectTitle: data.projectTitle,
    researchField: data.researchField,
    projectType: data.projectType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()),
    endDate,
    daysUntilDeadline,
    progressPercentage: Math.max(0, Math.min(100, ((timelineMonths * 30 - daysUntilDeadline) / (timelineMonths * 30)) * 100))
  }
}