import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { ButtonBase } from '@material-ui/core';
import { Menu } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import {
  AccountCircle as IconAccountCircle,
  KeyboardArrowDown as IconKeyboardArrowDown,
} from '@material-ui/icons';

import * as authActions from '~/store/modules/auth/auth-actions';

const useStyles = makeStyles(theme => ({
  avatar: {
    height: 32,
    width: 32,
    marginRight: theme.spacing(1)
  },
  popover: {
    width: 300
  }
}));

const Account = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const ref = useRef(null);
  const usuarioLogado = null;
  const usuarioPerfil = null;
  // const { usuario: usuarioLogado, usuarioPerfil } = useSelector(
  //   state => state.auth
  // );
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        padding={'4px 16px'}
        borderRadius={4}
        component={ButtonBase}
        onClick={handleOpen}
        ref={ref}
      >
        <IconAccountCircle className={classes.avatar} />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="start"
          alignItems="start"
        >
          <Typography variant="h6" noWrap color="inherit">
            {usuarioLogado?.nome}
          </Typography>
          <Typography variant="caption" color="inherit">
            {usuarioPerfil?.descricao}
          </Typography>
        </Box>
        <IconKeyboardArrowDown style={{ marginLeft: 8 }} />
      </Box>
      <Menu
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        keepMounted
        PaperProps={{ className: classes.popover }}
        getContentAnchorEl={null}
        anchorEl={ref.current}
        open={isOpen}
      >
        <MenuItem component={RouterLink} to="/app/configuracao">
          Configuração
        </MenuItem>
        <MenuItem component={RouterLink} to="/app/perfil">
          Perfil
        </MenuItem>
        <MenuItem onClick={() => dispatch(authActions.logoutRequest())}>
          Sair
        </MenuItem>
      </Menu>
    </>
  );
};

export default Account;
