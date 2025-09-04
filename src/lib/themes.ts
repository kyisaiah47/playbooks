export interface ThemeColors {
  primary: string
  primaryForeground: string
  secondary: string
  secondaryForeground: string
  accent: string
  accentForeground: string
  muted: string
  mutedForeground: string
  card: string
  cardForeground: string
  border: string
  input: string
  ring: string
}

// Main Templata brand theme - Vercel theme (clean black/white/gray with OKLCH)
export const templataTheme: ThemeColors = {
  primary: 'oklch(0 0 0)', // Pure black
  primaryForeground: 'oklch(1 0 0)', // Pure white
  secondary: 'oklch(0.9400 0 0)', // Light gray
  secondaryForeground: 'oklch(0 0 0)', // Black
  accent: 'oklch(0.9400 0 0)', // Light gray
  accentForeground: 'oklch(0 0 0)', // Black
  muted: 'oklch(0.9700 0 0)', // Very light gray
  mutedForeground: 'oklch(0.4400 0 0)', // Medium gray
  card: 'oklch(1 0 0)', // Pure white
  cardForeground: 'oklch(0 0 0)', // Black
  border: 'oklch(0.9200 0 0)', // Border gray
  input: 'oklch(0.9400 0 0)', // Input background
  ring: 'oklch(0 0 0)' // Black ring
}

// Wedding template theme - romantic rose/pink
export const weddingTheme: ThemeColors = {
  primary: 'oklch(0.6800 0.1900 350)', // Rose
  primaryForeground: 'oklch(0.9800 0 0)', // White
  secondary: 'oklch(0.9600 0.0300 350)', // Very light rose
  secondaryForeground: 'oklch(0.1000 0.0100 350)', // Dark rose
  accent: 'oklch(0.9200 0.0200 350)', // Light rose
  accentForeground: 'oklch(0.1500 0.0100 350)', // Dark rose
  muted: 'oklch(0.9500 0.0150 350)', // Very light rose
  mutedForeground: 'oklch(0.4500 0.0080 350)', // Medium rose
  card: 'oklch(1 0 0)', // Pure white
  cardForeground: 'oklch(0.1000 0.0100 350)', // Dark rose
  border: 'oklch(0.8800 0.0200 350)', // Light rose border
  input: 'oklch(0.8800 0.0200 350)', // Light rose input
  ring: 'oklch(0.6800 0.1900 350)' // Rose ring
}



export const applyTheme = (theme: ThemeColors) => {
  const root = document.documentElement
  
  // Map our theme properties to the correct CSS variable names
  const cssVarMap = {
    primary: '--primary',
    primaryForeground: '--primary-foreground',
    secondary: '--secondary',
    secondaryForeground: '--secondary-foreground',
    accent: '--accent',
    accentForeground: '--accent-foreground',
    muted: '--muted',
    mutedForeground: '--muted-foreground',
    card: '--card',
    cardForeground: '--card-foreground',
    border: '--border',
    input: '--input',
    ring: '--ring'
  }
  
  Object.entries(theme).forEach(([key, value]) => {
    const cssVar = cssVarMap[key as keyof ThemeColors]
    if (cssVar) {
      root.style.setProperty(cssVar, value)
    }
  })
}

export const getThemeForTemplate = (templateId: string): ThemeColors => {
  // Always return the default theme - users can change it manually if they want
  return templataTheme
}