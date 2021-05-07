import React, { FunctionComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "Jan",
    "Valor Total Vendas": 12250,
    "Custo da Mercadoria Vendida": 8575
  },
  {
    name: "Fev",
    "Valor Total Vendas": 13550,
    "Custo da Mercadoria Vendida": 9214
  },
  {
    name: "Mar",
    "Valor Total Vendas": 12752,
    "Custo da Mercadoria Vendida": 8288
  },
  {
    name: "Abr",
    "Valor Total Vendas": 14592,
    "Custo da Mercadoria Vendida": 11381
  },
  {
    name: "Mai",
    "Valor Total Vendas": 18935,
    "Custo da Mercadoria Vendida": 13633
  },
  {
    name: "Jun",
    "Valor Total Vendas": 17456,
    "Custo da Mercadoria Vendida": 12219
  },
  {
    name: "Jul",
    "Valor Total Vendas": 12932,
    "Custo da Mercadoria Vendida": 8794
  },
  {
    name: "Ago",
    "Valor Total Vendas": 18965,
    "Custo da Mercadoria Vendida": 12327
  },
  {
    name: "Set",
    "Valor Total Vendas": 16798,
    "Custo da Mercadoria Vendida": 13102
  },
  {
    name: "Out",
    "Valor Total Vendas": 14789,
    "Custo da Mercadoria Vendida": 10648
  },
  {
    name: "Nov",
    "Valor Total Vendas": 15798,
    "Custo da Mercadoria Vendida": 11059
  },{
    name: "Dez",
    "Valor Total Vendas": 13548,
    "Custo da Mercadoria Vendida": 9213
  }
];

const CustomizedLabel= ({ x, y, stroke, value, theme }) => {
  const { type } = theme.palette;

  return (
    <text x={x} y={y} dy={-4} fill={type === 'light' ? stroke : '#e6e5e8'} fontSize={10} textAnchor="middle">
      {value}
    </text>
  );
};

const ChartDoubleLine = ({ theme }) => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <LineChart
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
                horizontal={true}
                vertical={false}
              />
            <XAxis dataKey="name" stroke={theme.palette.text.secondary} />
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
          <Legend />
          <Line type="monotone" dataKey="Valor Total Vendas" stroke="#0068e9" strokeWidth={2}>
            <LabelList content={<CustomizedLabel />} theme={theme} />
          </Line>
          <Line type="monotone" dataKey="Custo da Mercadoria Vendida" stroke="#f54747" strokeWidth={2}>
            <LabelList content={<CustomizedLabel />} theme={theme} />
          </Line>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartDoubleLine;