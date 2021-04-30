import 'react-perfect-scrollbar/dist/css/styles.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from 'styled-components/macro';
import { create } from 'jss';
import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
  jssPreset
} from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { LocalizationProvider } from '@material-ui/pickers';
import DateFnsAdapter from '@material-ui/pickers/adapter/date-fns';
import localePtBR from 'date-fns/locale/pt-BR';

import GlobalStyles from '~/styles/global';
import { createTheme } from '~/styles/theme';

import Routes from '~/Routes';
import * as authActions from '~/store/slices/auth/auth-actions';

const jss = create({ plugins: [...jssPreset().plugins] });

const App = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.app);

  useEffect(() => { 
    dispatch(authActions.initialise());
  }, []);

  return (
    <>
      <Helmet
        titleTemplate="%s | SIAF Plus - PDV"
        defaultTitle="SIAF Plus - PDV"
      />
      <StylesProvider jss={jss}>
        <MuiThemeProvider theme={createTheme({ theme })}>
          <ThemeProvider theme={createTheme({ theme })}>
            <LocalizationProvider
              dateAdapter={DateFnsAdapter}
              locale={localePtBR}
            >
              <SnackbarProvider dense maxSnack={3}>
                <CssBaseline />
                <GlobalStyles />
                {/* <ScrollReset /> */}
                
                <Routes />
              </SnackbarProvider>
            </LocalizationProvider>
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </>
  );
};

export default App;
