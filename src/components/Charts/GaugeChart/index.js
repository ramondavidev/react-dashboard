import React, { memo } from 'react';
import GaugeChart from 'react-gauge-chart';
import { Box, fade } from '@material-ui/core';
import { height } from '@material-ui/system';

function GaugeComponent({ value, theme, color, size, ...rest }) {
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

export default memo(GaugeComponent);
