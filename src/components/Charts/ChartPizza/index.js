import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const ChartPizza = ({ width, theme, data, nameKey, dataKey }) => {
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    value,
    index,
    name
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 1.2;
    const x = cx + radius * Math.cos(-midAngle * RADIAN) - 5;
    const y = cy + radius * Math.sin(-midAngle * RADIAN) - 6;

    return (
      <text
        x={x}
        y={y}
        style={{
          fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
          fill: theme.palette.text.secondary
        }}
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        <tspan>{name}</tspan>
        <tspan dx={-39} dy={17}>
          {' '}
          {`${value}%`}
        </tspan>
      </text>
    );
  };

  return data ? (
    <ResponsiveContainer width="99%" height={300}>
      <PieChart width={width} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          stroke="none"
          dataKey={dataKey}
          nameKey={nameKey}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  ) : null;
}

export default ChartPizza;
