import React from 'react';
import { LinearProgress, Typography, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { SimpleGauge } from 'react-simple-gauges';

const BorderLinearProgress = withStyles(theme => ({
  root: {
    height: 14,
    border: 'solid 5px #000',
    borderColor: 'black transparent transparent transparent',
    borderRadius: '50%/100% 100% 0 0'
    /*  transform: rotate('180deg') */
    /*  border:solid 5px #000;
  border-color:#000 transparent transparent transparent;
  border-radius: 50%/100px 100px 0 0; */
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === 'light' ? 200 : 700]
  },
  bar: {
    backgroundColor: '#1a90ff'
  }
}))(LinearProgress);

export default function BarProgressCurve({ value, theme }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      width="100%"
    >
      <SimpleGauge
        width="250px"
        percent={86}
        color={theme.palette.primary.main}
      />
    </Box>
  );
}
