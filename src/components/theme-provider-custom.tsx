"use client"

import { createContext, useContext, useEffect, useState } from 'react'
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

export function CustomThemeProvider({ children, defaultTheme = themes[0].colors.dark }: CustomThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<ThemeColors>(defaultTheme)
  const [mounted, setMounted] = useState(false)

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('templata-theme')
    if (savedTheme) {
      try {
        const theme = JSON.parse(savedTheme)
        setCurrentTheme(theme)
        applyTheme(theme) // Apply immediately
      } catch (error) {
        console.error('Failed to parse saved theme:', error)
      }
    } else {
      // Apply default theme immediately if no saved theme
      applyTheme(defaultTheme)
    }
    setMounted(true)
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

  const getThemeById = (themeId: string) => {
    const theme = themes.find(t => t.id === themeId)
    return theme ? theme.colors.dark : null
  }

  // Don't render children until theme is loaded
  if (!mounted) {
    return null
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