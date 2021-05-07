import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { fade } from '@material-ui/core';

const CharBars = ({ width, theme, data, nameKey, dataKey, alignment }) => {
  return (
    <ResponsiveContainer width="99%" height={300}>
      <BarChart
        width={width}
        height={300}
        data={data}
        layout={alignment || 'vertical'}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
        style={{ fontFamily: 'Roboto, Helvetica, Arial, sans-serif' }}
      >
        <CartesianGrid
          stroke={theme.palette.divider}
          horizontal={false}
          vertical={true}
        />
        <XAxis
          type={alignment === 'horizontal' ? 'category' : 'number'}
          dataKey={alignment === 'horizontal' ? nameKey : null}
          stroke={theme.palette.text.secondary}
          tickLine={false}
        />
        <YAxis
          axisLine={false}
          type={alignment === 'horizontal' ? 'number' : 'category'}
          dataKey={alignment === 'horizontal' ? null : nameKey}
          stroke={theme.palette.text.secondary}
          tickLine={false}
        />
        <Tooltip
          style={{ backgroundColor: 'black' }}
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
        <Bar dataKey={dataKey[0]} fill={fade('#00e2ff', 0.4)} />
        <Bar dataKey={dataKey[1]} fill={fade('#00e2ff', 0.99)} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default CharBars;
