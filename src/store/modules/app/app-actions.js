import { SET_THEME } from './app-constants';

export function setTheme(theme) {
  return {
    type: SET_THEME,
    theme
  };
}
