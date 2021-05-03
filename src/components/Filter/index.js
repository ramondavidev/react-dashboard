import React, { useState } from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import useStyles from './index.styles';

import { Grid, Button, Box, IconButton, Divider } from '@material-ui/core';
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

  const [yearSelected, setYearSelected] = useState(0);
  const [monthSelected, setMonthSelected] = useState('');

  const changeYear = year => {
    setYearSelected(year);
  };

  const changeMonth = month => {
    setMonthSelected(month);
  };

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
            {years.map(year => (
              <div>
                <div
                  className={clsx(classes.optionDate, {
                    [classes.checked]: year === yearSelected
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
              {months.map(month => (
                <Grid item xs={6} sm={6} md={6}>
                  <div
                    className={clsx(classes.optionDate, {
                      [classes.checked]: month === monthSelected
                    })}
                    onClick={() => changeMonth(month)}
                  >
                    {month}
                  </div>
                </Grid>
              ))}
            </Grid>
            <Box mx={0.5} my={0.8}>
              <Button variant="contained" color="primary" size="small">
                Filtrar
              </Button>
            </Box>
          </div>
        )}
      </Drawer>
    </div>
  );
};

export default Filter;
