import React, { useState } from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import useStyles from './index.styles';
import Button from '~/components/Button';

import { Grid, Box, IconButton, Divider } from '@material-ui/core';
export const drawerWidth = 240;

const Filter = ({ getMenuDrawerIsOpen, drawer }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
    getMenuDrawerIsOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    getMenuDrawerIsOpen(false);
  };

  const [yearSelected, setYearSelected] = useState([]);
  const [monthSelected, setMonthSelected] = useState([]);

  const years = [2021, 2020, 2019];

  const months = [
    'Janeiro',
    'Fervereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ];

  const changeYear = year => {
    if(yearSelected.some( (y) => y == year)) {
      const result = yearSelected.filter( (y) => y != year);
      return setYearSelected([...result]);
    }
    return setYearSelected([...yearSelected, year]);
  };

  const changeMonth = month => {
    if(monthSelected.some( (mon) => mon == month)) {
      const result = monthSelected.filter( (mon) => mon != month);
      return setMonthSelected([...result]);
    }
    return setMonthSelected([...monthSelected, month]);
  };

  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
        anchor="right"
        open={open}
      >
        <div className={classes.toolbar} style={{ marginLeft: open ? 0 : -18 }}>
          <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen}>
            {open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>

        <Divider />
        {open && (
          <div className={classes.yearsContainer}>
            <div
              style={{
                textAlign: 'left',
                marginLeft: '15px',
                textTransform: 'uppercase',
                fontWeight: '600',
                color: '#546e7a'
              }}
            >
              Ano
            </div>
            {years.map((year, i) => (
              <div key={i}>
                <div
                  className={clsx(classes.optionDate, {
                    [classes.checked]: yearSelected.some( (y) => y == year)
                  })}
                  onClick={() => changeYear(year)}
                >
                  {year}
                </div>
              </div>
            ))}

            <div
              style={{
                textAlign: 'left',
                marginLeft: '15px',
                marginTop: '20px',
                textTransform: 'uppercase',
                fontWeight: '600',
                color: '#546e7a'
              }}
            >
              Meses
            </div>
            <Grid container className={classes.monthsContainer}>
              {months.map((month, i) => (
                <Grid key={i} item xs={6} sm={6} md={6}>
                  <div
                    className={clsx(classes.optionDate, {
                      [classes.checked]: monthSelected.some( (mon) => mon == month)
                    })}
                    onClick={() => changeMonth(month)}
                  >
                    {month}
                  </div>
                </Grid>
              ))}
            </Grid>
            <Box mx={0.5} my={0.8}>
              <Button value="Filtrar" />
            </Box>
          </div>
        )}
      </Drawer>
    </div>
  );
};

export default Filter;
