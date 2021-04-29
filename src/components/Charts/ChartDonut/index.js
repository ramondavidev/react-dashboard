import React from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';

function ChartPie({ width, theme, data, nameKey, dataKey,startAngle, endAngle }) {
  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    value,
    name
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 1.8;
    const x = cx + radius * Math.cos(-midAngle * RADIAN) - 5;
    const y = cy + radius * Math.sin(-midAngle * RADIAN) - 10;

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        style={{
          fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
          fill: theme.palette.text.secondary
        }}
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
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx={width / 2 - 15}
          cy={120}
          labelLine={false}
          label={renderCustomizedLabel}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={60}
          outerRadius={80}
          paddingAngle={0}
          nameKey={nameKey}
          dataKey={dataKey}
          stroke="none"
        >
          {data.map((entry, index) => {
            return <Cell key={`cell-${index}`} fill={entry.fill} />;
          })}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  ) : null;
}

export default ChartPie;
