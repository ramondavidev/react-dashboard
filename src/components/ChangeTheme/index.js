import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton, Tooltip } from '@material-ui/core';
import { changeTheme } from '~/store/slices/app/app.actions';
import {
  BrightnessLow as IconBrightnessLow,
  BrightnessHigh as IconBrightnessHigh
} from '@material-ui/icons';


import { THEMES, TIPO_DOCUMENTO } from '~/constants';

const ChangeTheme = () => {
  const { theme } = useSelector(state => state.app);
  const dispatch = useDispatch();
  return (
    <Tooltip title="Alternar tema claro/escuro">
      <IconButton
        onClick={() =>
          dispatch(changeTheme(theme))
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
