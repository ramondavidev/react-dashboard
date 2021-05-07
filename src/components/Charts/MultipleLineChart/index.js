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

const LineCharts = ({ theme }) => {

    const data = [
        {
            name: "Jan",
            entrada: 11200,
            saida: 8900,
            adimpl: 11040,
            saldo: 3100,
            amt: 2400
        },
        {
            name: "Fer",
            entrada: 12300,
            saida: 9700,
            adimpl: 11316,
            saldo: 5700,
            amt: 2210
        },
        {
            name: "Mar",
            entrada: 15000,
            saida: 10200,
            adimpl: 13800,
            saldo: 10200,
            amt: 2290
        },
        {
            name: "Abr",
            entrada: 8900,
            saida: 11500,
            adimpl: 8188,
            saldo: 7600,
            amt: 2000
        },
        {
            name: "Mai",
            entrada: 13500,
            saida: 12420,
            adimpl: 12420,
            saldo: 8850,
            amt: 2181
        },
        {
            name: "Jun",
            entrada: 12700,
            saida: 13500,
            adimpl: 11684,
            saldo: 8050,
            amt: 2500
        },
        {
            name: "Jul",
            entrada: 13100,
            saida: 13900,
            adimpl: 12052,
            saldo: 7250,
            amt: 2100
        },
        {
            name: "Ago",
            entrada: 14800,
            saida: 15000,
            adimpl: 13524,
            saldo: 6950,
            amt: 2100
        },
        {
            name: "Set",
            entrada: 14700,
            saida: 12600,
            adimpl: 13800,
            saldo: 9350,
            amt: 2100
        },
        {
            name: "Out",
            entrada: 15000,
            saida: 14000,
            adimpl: 13524,
            saldo: 10050,
            amt: 2100
        },
        {
            name: "Nov",
            entrada: 13200,
            saida: 14100,
            adimpl: 12144,
            saldo: 9150,
            amt: 2100
        },
        {
            name: "Dez",
            entrada: 14500,
            saida: 14700,
            adimpl: 13156,
            saldo: 8750,
            amt: 2100
        },
      ];

    return (
        <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
                <LineChart
                    width={550}
                    height={300}
                    data={data}
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
                        vertical={true}
                    />
                    <XAxis dataKey="name" stroke={theme.palette.text.secondary} />
                    <YAxis stroke={theme.palette.text.secondary} />
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
                    <Line type="monotone" dataKey="entrada" stroke="#0068e9" />
                    <Line type="monotone" dataKey="saida" stroke="#f54747" />
                    <Line type="monotone" dataKey="adimpl" stroke="#32a852" />
                    <Line type="monotone" dataKey="saldo" stroke="#1fe1f2" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default LineCharts;