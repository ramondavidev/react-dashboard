import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  root: {
    width: 520
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column'
  },

  logo: {
    color: theme.palette.primary.main,
    fontSize: '62px',
    '& > span': {
      fontWeight: 300,
      color: theme.palette.text.primary
    }
  }
}));