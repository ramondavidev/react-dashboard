import { Box, CircularProgress, Typography } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

// Inspired by the former Facebook spinners.
const useStylesFacebook = makeStyles(theme => ({
  root: {
    position: 'relative'
  },
  bottom: {
    color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700]
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

function CircularProgressWithLabel({
  value,
  theme,
  size,
  labelBeforeValue,
  labelAfterValue
}) {
  const classes = useStylesFacebook();
  return (
    <Box
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      height={size}
    >
      <CircularProgress
        variant="determinate"
        color="primary"
        size={size}
        value={value}
        thickness={5}
        style={{
          position: 'absolute',
          zIndex: 5,
          color: theme.palette.primary.main
        }}
      />
      <CircularProgress
        variant="determinate"
        className={classes.bottom}
        size={size}
        thickness={5}
        value={100}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="h3"
          component="h3"
          color="textSecondary"
        >{`${labelBeforeValue}${Math.round(
          value
        )}${labelAfterValue}`}</Typography>
      </Box>
    </Box>
  );
}

export default function CircularStatic({
  value,
  theme,
  size = 100,
  labelAfterValue = '',
  labelBeforeValue = ''
}) {
  return (
    <CircularProgressWithLabel
      value={value}
      theme={theme}
      size={size}
      labelAfterValue={labelAfterValue}
      labelBeforeValue={labelBeforeValue}
    />
  );
}
