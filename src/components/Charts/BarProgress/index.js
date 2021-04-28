import React from 'react';
import { LinearProgress, Typography, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const BorderLinearProgress = withStyles(theme => ({
  root: {
    height: 14
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === 'light' ? 200 : 700]
  },
  bar: {
    backgroundColor: '#1a90ff'
  }
}))(LinearProgress);

export default function BarProgress({
  value,
  theme,
  labelAfterValue = '',
  labelBeforeValue = ''
}) {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      width="100%"
    >
      <Typography variant="h3" component="h3" color="textSecondary">
        {`${labelBeforeValue} ${value} ${labelAfterValue}`}
      </Typography>
      <BorderLinearProgress
        variant="determinate"
        value={value}
        style={{ width: '100%' }}
      />
    </Box>
  );
}
