"use client"

import * as React from "react"
import { Check, Palette } from "lucide-react"
import { useTheme } from "next-themes"
import { useCustomTheme } from "@/components/theme-provider-custom"
import { themes } from "@/lib/themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface ThemeSelectorProps {
  iconOnly?: boolean;
}

export function ThemeSelector({ iconOnly = false }: ThemeSelectorProps) {
  const { setTheme } = useTheme()
  const { currentTheme, setTheme: setCustomTheme } = useCustomTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    // Only set default theme on initial mount
    if (!localStorage.getItem('templata-theme')) {
      // Force dark mode and set default theme to black (Default theme)
      setTheme('dark')
      const defaultTheme = themes[0] // Default/Black theme
      setCustomTheme(defaultTheme.colors.dark)
    }
  }, [])

  if (!mounted) {
    return (
      <Button variant="outline" size="sm" className={iconOnly ? "" : "gap-2"} disabled>
        <Palette className="h-4 w-4" />
        {!iconOnly && <span className="hidden sm:inline">Loading...</span>}
      </Button>
    )
  }

  // Find current theme name
  const currentThemeInfo = themes.find(t => 
    JSON.stringify(t.colors.dark) === JSON.stringify(currentTheme)
  ) || themes[0]

  const handleThemeChange = (themeId: string) => {
    const selectedTheme = themes.find(t => t.id === themeId)
    if (selectedTheme) {
      // Always use dark mode colors
      setCustomTheme(selectedTheme.colors.dark)
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className={iconOnly ? "" : "gap-2"}>
          <Palette className="h-4 w-4" />
          {!iconOnly && <span className="hidden sm:inline">{currentThemeInfo.name}</span>}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel>Choose Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        {themes.map((themeOption) => (
          <DropdownMenuItem
            key={themeOption.id}
            onClick={() => handleThemeChange(themeOption.id)}
            className="flex items-center justify-between"
          >
            <span>{themeOption.name}</span>
            {currentThemeInfo.id === themeOption.id && (
              <Check className="h-3 w-3" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}