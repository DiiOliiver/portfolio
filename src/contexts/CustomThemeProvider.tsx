import React from "react";
import { Theme, ThemeProvider } from '@mui/material/styles'
import { ReactNode, createContext, useEffect, useReducer } from 'react'

import { ENVIRONMENT } from 'constants/environment'
import {
  onThemeDarkAction,
  onThemeLightAction,
  toggleThemeAction,
} from 'reducers/theme/actions'
import { themeReducer } from 'reducers/theme/reducer'
import { themeDark, themeLight } from 'styles/themes/muiTheme'

const themes = {
  light: themeLight,
  dark: themeDark,
}

interface CustomThemeContextType {
  mode: 'light' | 'dark'
  toggleTheme: () => void
  onThemeLight: () => void
  onThemeDark: () => void
  theme: Theme
}

const CustomThemeContext = createContext<CustomThemeContextType>(
  {} as CustomThemeContextType,
)

interface CustomThemeProviderProps {
  children: ReactNode
}

function CustomThemeProvider({ children }: CustomThemeProviderProps) {
  const [themeState, dispatch] = useReducer(
    themeReducer,
    {
      mode: 'dark',
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        `@${ENVIRONMENT.APP_NAME}:theme-state-1.0.0`,
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return { mode: 'dark' }
    },
  )

  const { mode } = themeState as { mode: 'light' | 'dark' }
  const theme = themes[mode]

  useEffect(() => {
    const stateJSON = JSON.stringify(themeState)

    localStorage.setItem(
      `@${ENVIRONMENT.APP_NAME}:theme-state-1.0.0`,
      stateJSON,
    )
  }, [themeState])

  const toggleTheme = () => {
    dispatch(toggleThemeAction())
  }

  const onThemeLight = () => {
    dispatch(onThemeLightAction())
  }

  const onThemeDark = () => {
    dispatch(onThemeDarkAction())
  }

  const value = {
    mode,
    toggleTheme,
    onThemeLight,
    onThemeDark,
    theme,
  }

  return (
    <CustomThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </CustomThemeContext.Provider>
  )
}

export { CustomThemeContext, CustomThemeProvider }
