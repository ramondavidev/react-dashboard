import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
  SvgIcon
} from '@material-ui/core';
import { Menu as MenuIcon } from 'react-feather';

import { THEMES } from '~/constants';
import Account from '~/components/Account';
import ChangeTheme from '~/components/ChangeTheme';

const useStyles = makeStyles(theme => ({
  root: {
    zIndex: theme.zIndex.drawer + 100,
    // ...(theme.name === THEMES.LIGHT
    //   ? {
    //       boxShadow: 'none',
    //       backgroundColor: theme.palette.primary.main
    //     }
    //   : {}),
    // ...(theme.name === THEMES.ONE_DARK
    //   ? {
    //       backgroundColor: theme.palette.background.default
    //     }
    //   : {})
  },
  toolbar: {
    minHeight: 64
  },
  logo: {
    // color: theme.palette.common.white,
    marginRight: theme.spacing(2),
    fontSize: 24,
    '& > span': {
      fontWeight: 300
      // color: theme.palette.common.white,
    }
  }
}));

const TopBar = ({ className, onMobileNavOpen, ...rest }) => {
  const classes = useStyles();

  return (
    <AppBar className={clsx(classes.root, className)} {...rest}>
      <Toolbar className={classes.toolbar}>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen}>
            <SvgIcon fontSize="small">
              <MenuIcon />
            </SvgIcon>
          </IconButton>
        </Hidden>
        <Hidden mdDown>
          <h1 className={classes.logo}>
            SIAF<span>Plus+</span>
          </h1>
        </Hidden>
        <Box ml={2} flexGrow={1} />
        {/* <Search />
        <Contacts />
        <Notifications />
        <Settings />
         */}
         <ChangeTheme />
        <Box ml={2}>
          <Account />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

TopBar.defaultProps = {
  onMobileNavOpen: () => {}
};

export default TopBar;
