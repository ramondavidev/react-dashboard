import React from 'react';
import { SimpleGauge } from 'react-simple-gauges';

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
        percent={value}
        color={theme.palette.primary.main}
      />
    </Box>
  );
}
