import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "Jan",
    "Saldo no final do mês": 4054
  },
  {
    name: "Fev",
    "Saldo no final do mês": 3402
  },
  {
    name: "Mar",
    "Saldo no final do mês": 2116
  },
  {
    name: "Abr",
    "Saldo no final do mês": 3719
  },
  {
    name: "Mai",
    "Saldo no final do mês": 3702
  },
  {
    name: "Jun",
    "Saldo no final do mês": 4375
  },
  {
    name: "Jul",
    "Saldo no final do mês": 5453
  },
  {
    name: "Ago",
    "Saldo no final do mês": 5999
  },
  {
    name: "Set",
    "Saldo no final do mês": 5712
  },
  {
    name: "Out",
    "Saldo no final do mês": 7235
  },
  {
    name: "Nov",
    "Saldo no final do mês": 7323
  },{
    name: "Dez",
    "Saldo no final do mês": 7684
  }
];

const SingleChartLine = ({ theme }) => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <LineChart
          width={550}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 20,
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
          <Line
            type="monotone"
            dataKey="Saldo no final do mês"
            stroke="#f7dc45"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SingleChartLine;