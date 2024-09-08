export enum ThemeActionTypes {
  TOGGLE_THEME = 'TOGGLE_THEME',
  THEME_LIGHT = 'THEME_LIGHT',
  THEME_DARK = 'THEME_DARK',
}

export function toggleThemeAction() {
  return {
    type: ThemeActionTypes.TOGGLE_THEME,
    payload: {
      mode: '',
    },
  }
}

export function onThemeLightAction() {
  return {
    type: ThemeActionTypes.THEME_LIGHT,
    payload: {
      mode: 'light',
    },
  }
}

export function onThemeDarkAction() {
  return {
    type: ThemeActionTypes.THEME_DARK,
    payload: {
      mode: 'dark',
    },
  }
}
