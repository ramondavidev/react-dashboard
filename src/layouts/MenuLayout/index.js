import React, { useEffect, useState, Suspense } from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import { APP_TOKEN } from '~/constants';

import { useDispatch, useSelector } from '~/store/index';
import { getUserData } from '../../store/modules/user/user.actions';

import { makeStyles } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';

import NavBar from './NavBar';
import TopBar from './TopBar';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    // [theme.breakpoints.up('lg')]: {
    //   paddingLeft: 256
    // }
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    // overflow: 'auto'
  }
}));

const MenuLayout = ({ route, match }) => {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem(APP_TOKEN, match.params[0].substring(1));
    dispatch(getUserData());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <Suspense fallback={<LinearProgress />}>
        <NavBar
          onMobileClose={() => setMobileNavOpen(false)}
          openMobile={isMobileNavOpen}
        />
        <div className={classes.wrapper}>
          <div className={classes.contentContainer}>
            <div className={classes.content}>{renderRoutes(route.routes)}</div>
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default MenuLayout;