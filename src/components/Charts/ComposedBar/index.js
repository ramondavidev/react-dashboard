import React from "react";
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ComposedChart,
  Line,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "Jan",
    "Total Despesas": -3000,
    "Total Receita": 5100,
    "Lucro Líquido": 1000
  },
  {
    name: "Fev",
    "Total Despesas": -3269,
    "Total Receita": 4500,
    "Lucro Líquido": 450
  },
  {
    name: "Mar",
    "Total Despesas": -3309,
    "Total Receita": 4721,
    "Lucro Líquido": 883
  },
  {
    name: "Abr",
    "Total Despesas": -2792,
    "Total Receita": 4683,
    "Lucro Líquido": 913
  },
  {
    name: "Mai",
    "Total Despesas": -3643,
    "Total Receita": 4122,
    "Lucro Líquido": -234
  },
  {
    name: "Jun",
    "Total Despesas": -3873,
    "Total Receita": 4862,
    "Lucro Líquido": 263
  },
  {
    name: "Jul",
    "Total Despesas": -3403,
    "Total Receita": 4535,
    "Lucro Líquido": 178
  },
  {
    name: "Ago",
    "Total Despesas": -3620,
    "Total Receita": 4979,
    "Lucro Líquido": 501
  },
  {
    name: "Set",
    "Total Despesas": -3378,
    "Total Receita": 4190,
    "Lucro Líquido": 292
  },
  {
    name: "Out",
    "Total Despesas": -2870,
    "Total Receita": 4860,
    "Lucro Líquido": 1150
  },
  {
    name: "Nov",
    "Total Despesas": -2613,
    "Total Receita": 4064,
    "Lucro Líquido": 690
  },
  {
    name: "Dez",
    "Total Despesas": -3270,
    "Total Receita": 4719,
    "Lucro Líquido": 629
  }
];

const ComposedBar = ({ theme }) => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <ComposedChart
          width={560}
          height={300}
          data={data}
          stackOffset="sign"
          margin={{
            top: 5,
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
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="Total Receita" fill="#32a852" stackId="stack" />
          <Bar dataKey="Total Despesas" fill="#f54747" stackId="stack" />
        <Line type="monotone" dataKey="Lucro Líquido" stroke="#0c0e78" />
      </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ComposedBar;