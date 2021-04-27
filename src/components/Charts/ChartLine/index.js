import React from 'react';
import { fade, makeStyles, useTheme } from '@material-ui/core';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

function renderLineChart({ theme, width, data, nameKey, dataKey }) {
  return (
    <ResponsiveContainer width="99%" height={300}>
      <LineChart
        width={Number(width) - 20}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, bottom: 5, left: 0 }}
        style={{ fontFamily: 'Roboto, Helvetica, Arial, sans-serif' }}
      >
        <Line type="linear" dataKey={dataKey} stroke="#29d" strokeWidth={3} />
        <CartesianGrid
          stroke={theme.palette.divider}
          horizontal={true}
          vertical={false}
        />
        <XAxis dataKey={nameKey} stroke={theme.palette.text.secondary} />
        <YAxis
          axisLine={false}
          stroke={theme.palette.text.secondary}
          tickLine={false}
        />
        <Tooltip
          cursor={{ fill: theme.palette.background.dark }}
          contentStyle={{
            backgroundColor: theme.palette.background.default,
            borderRadius: 3,
            borderWidth: 0,
            color: theme.palette.text.secondary,
            borderWidth: 1,
            borderColor: theme.palette.divider
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
export default renderLineChart;
