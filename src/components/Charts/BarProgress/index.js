import React, { memo } from 'react';
import { LinearProgress, Typography, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const BorderLinearProgress = withStyles(theme => ({
  root: {
    height: 14
  },
  colorPrimary: {
    backgroundColor: theme.palette.divider
  },
  bar: {
    backgroundColor: '#1a90ff'
  }
}))(LinearProgress);

function BarProgress({
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
      justifyContent="flex-start"
      width="100%"
      height={100}
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

export default memo(BarProgress);
