import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "Felipe",
    "Contribuição": 30000,
    "Vendas": 164130,
    amt: 2400
  },
  {
    name: "Alberto",
    "Contribuição": 95700,
    "Vendas": 273553,
    amt: 2210
  },
  {
    name: "Mário",
    "Contribuição": 54700,
    "Vendas": 364738,
    amt: 2290
  },
  {
    name: "Carlos",
    "Contribuição": 91185,
    "Vendas": 455923,
    amt: 2000
  },
  {
    name: "João",
    "Contribuição": 91185,
    "Vendas": 485923,
    amt: 2181
  },
  {
    name: "Pedro",
    "Contribuição": 141400,
    "Vendas": 538292,
    amt: 2500
  },
  {
    name: "Marcos",
    "Contribuição": 191400,
    "Vendas": 638292,
    amt: 2100
  }
];

const StackedBar = ({ theme, alignment }) => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart
        layout={alignment || 'horizontal'}
          width={500}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 15
          }}
        >
          <CartesianGrid
            stroke={theme.palette.divider}
            horizontal={false}
            vertical={true}
          />
          <XAxis
            axisLine={false}
            type={alignment === 'vertical' ? 'number' : 'category'}
            stroke={theme.palette.text.secondary}
            tickLine={false}
          />
          <YAxis
            type={alignment === 'vertical' ? 'category' : 'number'}
            dataKey="name"
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
          <Legend />
          <Bar dataKey= "Vendas" stackId="a" fill="#0068e9" />
          <Bar label={{ position: "right" }} dataKey="Contribuição" stackId="a" fill="#1fe1f2" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default StackedBar;