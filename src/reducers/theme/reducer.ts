import produce from 'immer'

import { ThemeActionTypes } from './actions'

interface ThemeState {
  mode: string
}

interface ThemeAction {
  type: string
  payload: {
    mode: string
  }
}

export function themeReducer(state: ThemeState, action: ThemeAction) {
  switch (action.type) {
    case ThemeActionTypes.TOGGLE_THEME:
      return produce(state, (draft) => {
        draft.mode = state.mode === 'dark' ? 'light' : 'dark'
      })
    case ThemeActionTypes.THEME_LIGHT:
      return {
        ...state,
        mode: action.payload.mode,
      }
    case ThemeActionTypes.THEME_DARK:
      return {
        ...state,
        mode: action.payload.mode,
      }
    default:
      return state
  }
}
