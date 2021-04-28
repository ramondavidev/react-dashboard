import React from 'react';
import { SimpleGauge } from 'react-simple-gauges';
import { Box } from '@material-ui/core';
export default function BarProgressCurve({ value, theme, color }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      width="100%"
    >
      <SimpleGauge width="250px" percent={value} color={color} />
    </Box>
  );
}
