import React, { memo } from 'react';
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

function ChartBarSimple({ width, theme, data, alignment, dataKey, nameKey }) {
  return (
    <>
      <ResponsiveContainer width="99%" height={300}>
        <BarChart
          data={data}
          layout={alignment || 'horizontal'}
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
            axisLine={false}
            type={alignment === 'vertical' ? 'number' : 'category'}
            dataKey={alignment === 'vertical' ? dataKey : nameKey}
            stroke={theme.palette.text.secondary}
            tickLine={false}
          />
          <YAxis
            type={alignment === 'vertical' ? 'category' : 'number'}
            dataKey={alignment === 'vertical' ? nameKey : dataKey}
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
          <Bar dataKey={dataKey} fill={fade('#00e2ff', 0.9)} />
        </BarChart>
      </ResponsiveContainer>
      {console.log('bar simple atualizou')}
    </>
  );
}

export default memo(ChartBarSimple);
