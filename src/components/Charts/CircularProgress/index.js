import { Box, CircularProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import useStylesFacebook from './index.styles';

const CircularProgressWithLabel = ({
  value,
  theme,
  size,
  labelBeforeValue,
  labelAfterValue
}) => {
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

function CircularStatic({
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

export default CircularStatic;
