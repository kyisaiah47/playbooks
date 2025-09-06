"use client"

import * as React from "react"
import { Check, Palette, Sun, Moon, MoreHorizontal, Crown, Gem } from "lucide-react"
import { useTheme } from "next-themes"
import { useCustomTheme } from "@/components/theme-provider-custom"
import { themes } from "@/lib/themes"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export function ThemeSelector() {
  const { theme, setTheme } = useTheme()
  const { currentTheme, setTheme: setCustomTheme } = useCustomTheme()
  const [mounted, setMounted] = React.useState(false)
  const [showAllThemes, setShowAllThemes] = React.useState(false)
  const [alertDialog, setAlertDialog] = React.useState<{ title: string; message: string } | null>(null)
  const [previousTheme, setPreviousTheme] = React.useState<typeof currentTheme | null>(null)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  React.useEffect(() => {
    setMounted(true)
  }, [])


  if (!mounted) {
    return (
      <Button variant="outline" size="sm" className="gap-2" disabled>
        <Palette className="h-4 w-4" />
        <span className="hidden sm:inline">Loading...</span>
      </Button>
    )
  }

  // Find current theme name
  const currentThemeInfo = themes.find(t => 
    JSON.stringify(t.colors.light) === JSON.stringify(currentTheme) ||
    JSON.stringify(t.colors.dark) === JSON.stringify(currentTheme)
  ) || themes[0]

  const handleThemeChange = (themeId: string) => {
    const selectedTheme = themes.find(t => t.id === themeId)
    if (selectedTheme) {
      const themeColors = theme === 'dark' ? selectedTheme.colors.dark : selectedTheme.colors.light
      
      // Check if theme requires purchase and user doesn't have access
      if (selectedTheme.isPremium || selectedTheme.isExclusive) {
        // Store current theme before preview
        setPreviousTheme(currentTheme)
        
        // Apply the theme for preview
        setCustomTheme(themeColors)
        
        // Show alert dialog
        if (selectedTheme.isPremium) {
          // TODO: Check if user has premium subscription
          setAlertDialog({
            title: 'Premium Theme',
            message: 'This is a Premium theme! Upgrade to Pro to unlock all premium themes.'
          })
        } else if (selectedTheme.isExclusive) {
          // TODO: Check if user has purchased this specific theme
          setAlertDialog({
            title: 'Exclusive Theme',
            message: 'This is an Exclusive theme! Purchase it once to unlock forever.'
          })
        }
        return
      }
      
      // Free theme - apply directly
      setCustomTheme(themeColors)
    }
  }

  const handleAlertClose = () => {
    // Revert to previous theme when dismissing alert
    if (previousTheme) {
      setCustomTheme(previousTheme)
      setPreviousTheme(null)
    }
    setAlertDialog(null)
  }

  const handleModeChange = (mode: 'light' | 'dark') => {
    setTheme(mode)
    // Apply the current theme in the new mode
    const themeColors = mode === 'dark' ? currentThemeInfo.colors.dark : currentThemeInfo.colors.light
    setCustomTheme(themeColors)
  }

  const getCurrentThemeMode = () => {
    return theme === 'dark' ? 'dark' : 'light'
  }

  // Show popular themes in dropdown
  const popularThemes = themes.slice(0, 4) // Default, Rose, Neutral, Ocean

  const ThemeContent = ({ className, isMobile = false }: { className?: string; isMobile?: boolean }) => (
    <div className={className}>
      {/* Theme Grid */}
      <div className={`grid gap-4 ${isMobile ? 'grid-cols-3 max-h-[50vh] overflow-y-auto' : 'grid-cols-5'}`}>
        {themes.map((themeOption) => {
          const currentModeColors = theme === 'dark' ? themeOption.colors.dark : themeOption.colors.light
          const isSelected = currentThemeInfo.id === themeOption.id
          
          return (
            <div
              key={themeOption.id}
              className={`
                relative p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md
                ${isSelected 
                  ? 'border-primary bg-primary/5 shadow-sm' 
                  : 'border-border bg-card hover:border-primary/30'
                }
                ${themeOption.isPremium ? 'ring-2 ring-yellow-400/30' : ''}
                ${themeOption.isExclusive ? 'ring-2 ring-blue-400/30' : ''}
              `}
              onClick={() => {
                const selectedTheme = themes.find(t => t.id === themeOption.id)
                if (selectedTheme && !selectedTheme.isPremium && !selectedTheme.isExclusive) {
                  handleThemeChange(themeOption.id)
                  setShowAllThemes(false)
                } else {
                  handleThemeChange(themeOption.id)
                }
              }}
            >
              {themeOption.isPremium && (
                <div className="absolute top-2 left-2">
                  <Crown className="h-4 w-4 text-yellow-500" />
                </div>
              )}
              {themeOption.isExclusive && (
                <div className="absolute top-2 left-2">
                  <Gem className="h-4 w-4 text-blue-500" />
                </div>
              )}
              {isSelected && (
                <div className="absolute top-2 right-2">
                  <Check className="h-4 w-4 text-primary" />
                </div>
              )}
              
              <div className="space-y-3 text-center">
                {/* Color pills - side by side */}
                <div className="flex items-center justify-center gap-2">
                  <div 
                    className="h-8 w-4 rounded-full border"
                    style={{ 
                      backgroundColor: currentModeColors.primary,
                      borderColor: currentModeColors.border
                    }}
                  />
                  <div 
                    className="h-8 w-4 rounded-full border"
                    style={{ 
                      backgroundColor: currentModeColors.secondary,
                      borderColor: currentModeColors.border
                    }}
                  />
                  <div 
                    className="h-8 w-4 rounded-full border"
                    style={{ 
                      backgroundColor: currentModeColors.accent,
                      borderColor: currentModeColors.border
                    }}
                  />
                </div>
                
                {/* Theme info */}
                <div>
                  <div className="font-semibold text-sm mb-1">{themeOption.name}</div>
                  <div className="text-xs text-muted-foreground leading-tight">
                    {themeOption.description}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )

  if (isDesktop) {
    return (
      <>
        <Dialog open={showAllThemes} onOpenChange={setShowAllThemes}>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <Palette className="h-4 w-4" />
                <span className="hidden sm:inline">
                  {currentThemeInfo.name} ({getCurrentThemeMode()})
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel>Choose Theme</DropdownMenuLabel>
              <DropdownMenuSeparator />
              
              {popularThemes.map((themeOption) => (
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
              
              <DropdownMenuSeparator />
              
              <DialogTrigger asChild>
                <DropdownMenuItem className="flex items-center gap-2">
                  <MoreHorizontal className="h-3 w-3" />
                  <span>See all themes</span>
                </DropdownMenuItem>
              </DialogTrigger>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DialogContent className="max-w-7xl w-[90vw] sm:max-w-7xl">
            <DialogHeader>
              <div className="flex items-center justify-between pr-8">
                <div>
                  <DialogTitle>Choose Theme</DialogTitle>
                  <DialogDescription>
                    Select a color theme and appearance mode
                  </DialogDescription>
                </div>
                {/* Light/Dark Mode Toggle */}
                <div className="flex items-center gap-1 p-1 border rounded-lg">
                  <Button
                    variant={theme === 'light' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => handleModeChange('light')}
                    className="flex items-center gap-1 h-8 px-3"
                  >
                    <Sun className="h-3 w-3" />
                    Light
                  </Button>
                  <Button
                    variant={theme === 'dark' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => handleModeChange('dark')}
                    className="flex items-center gap-1 h-8 px-3"
                  >
                    <Moon className="h-3 w-3" />
                    Dark
                  </Button>
                </div>
              </div>
            </DialogHeader>
            <ThemeContent />
          </DialogContent>
        </Dialog>

        {/* Alert Dialog */}
        <Dialog open={!!alertDialog} onOpenChange={handleAlertClose}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                {alertDialog?.title === 'Premium Theme' ? (
                  <Crown className="h-5 w-5 text-yellow-500" />
                ) : (
                  <Gem className="h-5 w-5 text-blue-500" />
                )}
                {alertDialog?.title}
              </DialogTitle>
              <DialogDescription>
                {alertDialog?.message}
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={handleAlertClose}>
                Cancel
              </Button>
              <Button>
                {alertDialog?.title === 'Premium Theme' ? 'Upgrade to Pro' : 'Purchase Theme'}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </>
    )
  }

  return (
    <Drawer open={showAllThemes} onOpenChange={setShowAllThemes}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="gap-2">
            <Palette className="h-4 w-4" />
            <span className="hidden sm:inline">
              {currentThemeInfo.name} ({getCurrentThemeMode()})
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuLabel>Choose Theme</DropdownMenuLabel>
          <DropdownMenuSeparator />
          
          {popularThemes.map((themeOption) => (
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
          
          <DropdownMenuSeparator />
          
          <DrawerTrigger asChild>
            <DropdownMenuItem className="flex items-center gap-2">
              <MoreHorizontal className="h-3 w-3" />
              <span>See all themes</span>
            </DropdownMenuItem>
          </DrawerTrigger>
        </DropdownMenuContent>
      </DropdownMenu>
      
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Choose Theme</DrawerTitle>
          <DrawerDescription>
            Select a color theme and appearance mode
          </DrawerDescription>
        </DrawerHeader>
        <ThemeContent className="px-4" isMobile={true} />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>

      {/* Alert Dialog */}
      <Dialog open={!!alertDialog} onOpenChange={handleAlertClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {alertDialog?.title === 'Premium Theme' ? (
                <Crown className="h-5 w-5 text-yellow-500" />
              ) : (
                <Gem className="h-5 w-5 text-blue-500" />
              )}
              {alertDialog?.title}
            </DialogTitle>
            <DialogDescription>
              {alertDialog?.message}
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={handleAlertClose}>
              Cancel
            </Button>
            <Button>
              {alertDialog?.title === 'Premium Theme' ? 'Upgrade to Pro' : 'Purchase Theme'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </Drawer>
  )
}