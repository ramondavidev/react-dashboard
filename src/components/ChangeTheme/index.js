import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton, Tooltip } from '@material-ui/core';
import {
  BrightnessLow as IconBrightnessLow,
  BrightnessHigh as IconBrightnessHigh
} from '@material-ui/icons';


import { THEMES, TIPO_DOCUMENTO } from '~/constants';
import * as appActions from '~/store/modules/app/app-actions';

const ChangeTheme = () => {
  const { theme } = useSelector(state => state.app);
  const dispatch = useDispatch();
  return (
    <Tooltip title="Alternar tema claro/escuro">
      <IconButton
        onClick={() =>
          dispatch(
            appActions.setTheme(
              theme === THEMES.DEFAULT ? THEMES.DARK : THEMES.DEFAULT
            )
          )
        }
      >
        {theme === THEMES.DEFAULT ? (
          <IconBrightnessLow />
        ) : (
          <IconBrightnessHigh />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default ChangeTheme;
