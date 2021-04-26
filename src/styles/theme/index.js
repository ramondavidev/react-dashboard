import _ from 'lodash';
import { colors, createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import { THEMES } from '~/constants';
import { softShadows, strongShadows } from './shadows';
import typography from './typography';
import overrides from './overrides';

const baseOptions = {
  direction: 'ltr',
  typography,
  overrides
};

const themesOptions = [
  {
    name: THEMES.DEFAULT,
    overrides: {
      MuiInputBase: {
        input: {
          '&::placeholder': {
            opacity: 1,
            color: colors.blueGrey[600]
          }
        }
      }
    },
    palette: {
      type: 'light',
      action: {
        active: colors.blueGrey[600]
      },
      background: {
        default: colors.common.white,
        dark: '#f4f6f8',
        paper: colors.common.white
      },
      primary: {
        main: '#0068e9'
      },
      secondary: {
        main: '#0068e9'
      },
      success: {
        contrastText: '#ffffff',
        main: '#4caf50'
      },
      error: {
        contrastText: '#ffffff',
        main: '#f44336'
      },
      warning: {
        contrastText: '#ffffff',
        main: '#ff9800'
      },
      text: {
        primary: colors.blueGrey[900],
        secondary: colors.blueGrey[600]
      }
    },
    shadows: softShadows
  },
  {
    name: THEMES.DARK,
    palette: {
      type: 'dark',
      action: {
        active: 'rgba(255, 255, 255, 0.54)',
        hover: 'rgba(255, 255, 255, 0.04)',
        selected: 'rgba(255, 255, 255, 0.08)',
        disabled: 'rgba(255, 255, 255, 0.26)',
        disabledBackground: 'rgba(255, 255, 255, 0.12)',
        focus: 'rgba(255, 255, 255, 0.12)'
      },
      background: {
        default: '#282C34',
        dark: '#1c2025',
        paper: '#282C34'
      },
      primary: {
        main: '#0068e9'
      },
      secondary: {
        main: '#0068e9'
      },
      success: {
        contrastText: '#ffffff',
        main: '#4caf50'
      },
      error: {
        contrastText: '#ffffff',
        main: '#f44336'
      },
      warning: {
        contrastText: '#ffffff',
        main: '#ff9800'
      },
      text: {
        primary: '#e6e5e8',
        secondary: '#adb0bb'
      }
    },
    shadows: strongShadows
  },
  {
    name: THEMES.UNICORN,
    palette: {
      type: 'dark',
      action: {
        active: 'rgba(255, 255, 255, 0.54)',
        hover: 'rgba(255, 255, 255, 0.04)',
        selected: 'rgba(255, 255, 255, 0.08)',
        disabled: 'rgba(255, 255, 255, 0.26)',
        disabledBackground: 'rgba(255, 255, 255, 0.12)',
        focus: 'rgba(255, 255, 255, 0.12)'
      },
      background: {
        default: '#2a2d3d',
        dark: '#222431',
        paper: '#2a2d3d'
      },
      primary: {
        main: '#0068e9'
      },
      secondary: {
        main: '#a67dff'
      },
      text: {
        primary: '#f6f5f8',
        secondary: '#9699a4'
      }
    },
    shadows: strongShadows
  }
];

export const createTheme = (config = {}) => {
  let themeOptions = themesOptions.find(theme => theme.name === config.theme);

  if (!themeOptions) {
    console.warn(new Error(`The theme ${config.theme} is not valid`));
    [themeOptions] = themesOptions;
  }

  let theme = createMuiTheme(
    _.merge({}, baseOptions, themeOptions, { direction: config.direction })
  );

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
