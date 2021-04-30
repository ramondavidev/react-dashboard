import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export default makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: 'none'
  },
  drawer: {
    position: 'relative',
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: 15,
    [theme.breakpoints.up('sm')]: {
      width: 15
    }
  },
  toolbar: {
    marginTop: 60,

    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
    // necessary for content to be below app bar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  yearsContainer: {
    marginTop: '10%',
    fontWeight: 400,
    textTransform: 'none',
    width: '90%',
    margin: '20px auto'
  },
  checked: {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    border: '1px solid transparent'
  },
  optionDate: {
    border: '1px solid grey',
    width: '95%',
    margin: ' 6px auto',
    borderRadius: 4,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: '#fff',
      transitionDuration: '0.3s'
    }
  },
  monthsContainer: {
    fontWeight: 400,
    textTransform: 'none'
  }
}));
