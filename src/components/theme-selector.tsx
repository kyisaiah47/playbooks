"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

interface ThemeSelectorProps {
  iconOnly?: boolean;
}

export function ThemeSelector({ iconOnly = false }: ThemeSelectorProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="outline" size="sm" className={iconOnly ? "w-9 h-9 p-0" : "gap-2"} disabled>
        <Moon className="h-4 w-4" />
      </Button>
    )
  }

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  return (
    <Button
      variant="outline"
      size="sm"
      className={iconOnly ? "w-9 h-9 p-0" : "gap-2"}
      onClick={toggleTheme}
    >
      {theme === 'dark' ? (
        <>
          <Moon className="h-4 w-4" />
          {!iconOnly && <span className="hidden sm:inline">Dark</span>}
        </>
      ) : (
        <>
          <Sun className="h-4 w-4" />
          {!iconOnly && <span className="hidden sm:inline">Light</span>}
        </>
      )}
    </Button>
  )
}