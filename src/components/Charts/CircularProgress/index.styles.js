import { makeStyles } from '@material-ui/core/styles';
const useStylesFacebook = makeStyles(theme => ({
  root: {
    position: 'relative'
  },
  bottom: {
    color: theme.palette.divider
  },
  top: {
    color: '#1a90ff',
    animationDuration: '550ms',
    position: 'absolute',
    left: 0
  },
  circle: {
    strokeLinecap: 'round'
  }
}));

export default useStylesFacebook;