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
        
        {themes.map((themeOption) => {
          // Create visual swatch based on theme name
          const getThemeSwatch = (name: string) => {
            switch (name.toLowerCase()) {
              case 'default': return 'bg-gradient-to-r from-white to-gray-200';
              case 'rose': return 'bg-gradient-to-r from-purple-300 to-purple-400';
              case 'neutral': return 'bg-gradient-to-r from-orange-300 to-orange-400';
              case 'emerald': return 'bg-gradient-to-r from-emerald-400 to-emerald-500';
              case 'violet': return 'bg-gradient-to-r from-violet-400 to-purple-500';
              default: return 'bg-gradient-to-r from-gray-400 to-gray-600';
            }
          };

          return (
            <DropdownMenuItem
              key={themeOption.id}
              onClick={() => handleThemeChange(themeOption.id)}
              className="flex items-center gap-3"
            >
              <div className={`w-4 h-4 rounded-full ${getThemeSwatch(themeOption.name)} ring-1 ring-border flex-shrink-0`} />
              <span className="flex-1">{themeOption.name}</span>
              {currentThemeInfo.id === themeOption.id && (
                <Check className="h-3 w-3 text-primary" />
              )}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}