import React, { useEffect } from 'react';
import { useLocation, matchPath } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import SelectInput from '../../../components/Inputs/Select';
import CustomizedButtons from '../../../components/Button';
import {
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  ListSubheader,
  makeStyles
} from '@material-ui/core';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import {
  BarChart as BarChartIcon,
  Users as UsersIcon,
  Activity as ActivityIcon,
  Package as PackageIcon
} from 'react-feather';
// import Logo from 'src/components/Logo';
// import useAuth from 'src/hooks/useAuth';
import NavItem from './NavItem';

const sections = [
  {
    subheader: 'Dashboards',
    items: [
      {
        title: 'Estoque',
        icon: PackageIcon,
        href: '/estoque'
      },
      {
        title: 'Faturamento',
        icon: MonetizationOnOutlinedIcon,
        href: '/faturamento'
      },
      {
        title: 'Ciclo Operacional',
        icon: ActivityIcon,
        href: '/ciclo-operacional'
      }
    ]
  },
  {
    subheader: 'Gerenciamento',
    items: [
      {
        title: 'Clientes',
        icon: UsersIcon,
        href: '/app/management/customers',
        items: [
          {
            title: 'List Customers',
            href: '/app/management/customers'
          },
          {
            title: 'View Customer',
            href: '/app/management/customers/1'
          },
          {
            title: 'Edit Customer',
            href: '/app/management/customers/1/edit'
          }
        ]
      },
    ]
  },
  {
    subheader: 'Extra',
    items: [
      {
        title: 'Configurações',
        href: '/app/extra/charts',
        icon: BarChartIcon,
        items: [
          {
            title: 'Apex Charts',
            href: '/app/extra/charts/apex'
          }
        ]
      }
    ]
  },
  {
    subheader: 'Filtro',
    items: [
      
    ]
  }
];

function renderNavItems({ items, pathname, depth = 0 }) {
  return (
    <List disablePadding>
      {items.reduce(
        (acc, item) => reduceChildRoutes({ acc, item, pathname, depth }),
        []
      )}
    </List>
  );
}

function reduceChildRoutes({ acc, pathname, item, depth }) {
  const key = item.title + depth;

  if (item.items) {
    const open = matchPath(pathname, {
      path: item.href,
      exact: false
    });

    acc.push(
      <NavItem
        depth={depth}
        icon={item.icon}
        info={item.info}
        key={key}
        open={Boolean(open)}
        title={item.title}
      >
        {renderNavItems({
          depth: depth + 1,
          pathname,
          items: item.items
        })}
      </NavItem>
    );
  } else {
    acc.push(
      <NavItem
        depth={depth}
        href={item.href}
        icon={item.icon}
        info={item.info}
        key={key}
        title={item.title}
      />
    );
  }

  return acc;
}

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();
  // const { user } = useAuth();

  const years = [
    { value: "2021" },
    { value: "2020" },
    { value: "2019" },
    { value: "2018" },
    { value: "2017" }
];

  const months = [
    { value: "Janeiro" },
    { value: "Fevereiro" },
    { value: "Março" },
    { value: "Abril" },
    { value: "Maio" },
    { value: "Junho" },
    { value: "Julho" },
    { value: "Agosto" },
    { value: "Setembo" },
    { value: "Outrubro" },
    { value: "Novembro" },
    { value: "Dezembro" }
];

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <PerfectScrollbar options={{ suppressScrollX: true }}>
        <Hidden lgUp>
          <Box p={2} display="flex" justifyContent="center">
            <RouterLink to="/">{/* <Logo /> */}</RouterLink>
          </Box>
        </Hidden>

        <Box p={2}>
          {sections.map(section => (
            <List
              key={section.subheader}
              subheader={
                <ListSubheader disableGutters disableSticky>
                  {section.subheader}
                </ListSubheader>
              }
            >
              {renderNavItems({
                items: section.items,
                pathname: location.pathname
              })}
            </List>
          ))}
          <List> <SelectInput options={years} /> </List>
          <List> <SelectInput options={months} /> </List>
          <List> <CustomizedButtons value='Pesquisar' /> </List>
        </Box>
        <Divider />
      </PerfectScrollbar>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

export default NavBar;
