import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { DARK_THEME, LIGHT_THEME } from '../constants/theme'

type Theme = typeof LIGHT_THEME | typeof DARK_THEME

type ThemeContextValue = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(LIGHT_THEME)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) => currentTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
