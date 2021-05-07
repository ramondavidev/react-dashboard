import React from 'react';
import GaugeChart from 'react-gauge-chart';
import { Box } from '@material-ui/core';

const GaugeComponent = ({ value, theme, color, size, ...rest }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      width="100%"
    >
      <GaugeChart
        {...rest}
        cornerRadius={0}
        percent={value}
        textColor={theme.palette.text.secondary}
        colors={color}
        style={{
          height: size,
          width: size
        }}
      />
    </Box>
  );
}

export default GaugeComponent;
