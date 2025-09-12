"use client"

import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { ThemeColors, templataThemeLight, applyTheme, getThemeForTemplate, themes } from '@/lib/themes'

interface ThemeContextType {
  currentTheme: ThemeColors
  setTheme: (theme: ThemeColors) => void
  applyTemplateTheme: (templateId: string) => void
  resetToDefault: () => void
  getThemeById: (themeId: string) => ThemeColors | null
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function useCustomTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useCustomTheme must be used within a CustomThemeProvider')
  }
  return context
}

interface CustomThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: ThemeColors
}

export function CustomThemeProvider({ children, defaultTheme = templataThemeLight }: CustomThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<ThemeColors>(defaultTheme)

  const getThemeById = useCallback((themeId: string) => {
    const theme = themes.find(t => t.id === themeId)
    return theme ? theme.colors.light : null // Default to light mode
  }, [])

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('templata-theme')
    if (savedTheme) {
      try {
        const theme = JSON.parse(savedTheme)
        setCurrentTheme(theme)
      } catch (error) {
        // Handle case where savedTheme is just a theme ID (string)
        const themeById = getThemeById(savedTheme)
        if (themeById) {
          setCurrentTheme(themeById)
        } else {
          console.error('Failed to parse saved theme and theme ID not found:', error)
          localStorage.removeItem('templata-theme') // Clear invalid theme
        }
      }
    }
  }, [])

  useEffect(() => {
    applyTheme(currentTheme)
    // Save theme to localStorage
    localStorage.setItem('templata-theme', JSON.stringify(currentTheme))
  }, [currentTheme])

  const setTheme = (theme: ThemeColors) => {
    setCurrentTheme(theme)
  }

  const applyTemplateTheme = (templateId: string) => {
    const theme = getThemeForTemplate(templateId)
    setCurrentTheme(theme)
  }

  const resetToDefault = () => {
    setCurrentTheme(defaultTheme)
  }


  return (
    <ThemeContext.Provider value={{
      currentTheme,
      setTheme,
      applyTemplateTheme,
      resetToDefault,
      getThemeById
    }}>
      {children}
    </ThemeContext.Provider>
  )
}