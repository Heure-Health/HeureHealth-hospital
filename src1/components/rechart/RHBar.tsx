import React from "react";
import {Bar, CartesianGrid, ComposedChart, Legend, Tooltip, XAxis} from "recharts";

const data = [
    {
        name: "Page A",
        uv: 590,
        pv: 800,
        amt: 1400,
        cnt: 490
    },
    {
        name: "Page B",
        uv: 868,
        pv: 967,
        amt: 1506,
        cnt: 590
    },
    {
        name: "Page C",
        uv: 1397,
        pv: 1098,
        amt: 989,
        cnt: 350
    },
    {
        name: "Page D",
        uv: 1480,
        pv: 1200,
        amt: 1228,
        cnt: 480
    },
    {
        name: "Page E",
        uv: 1520,
        pv: 1108,
        amt: 1100,
        cnt: 460
    },
    {
        name: "Page F",
        uv: 1400,
        pv: 680,
        amt: 1700,
        cnt: 380
    },
    {
        name: "Page A",
        uv: 590,
        pv: 800,
        amt: 1400,
        cnt: 490
    },
    {
        name: "Page B",
        uv: 868,
        pv: 967,
        amt: 1506,
        cnt: 590
    },
    {
        name: "Page C",
        uv: 1397,
        pv: 1098,
        amt: 989,
        cnt: 350
    },
    {
        name: "Page D",
        uv: 1480,
        pv: 1200,
        amt: 1228,
        cnt: 480
    },
    {
        name: "Page E",
        uv: 1520,
        pv: 1108,
        amt: 1100,
        cnt: 460
    },
    {
        name: "Page F",
        uv: 1400,
        pv: 680,
        amt: 1700,
        cnt: 380
    }
];
export default function App() {
    return (
        <ComposedChart
            layout="vertical"
            width={300}
            height={1025}
            data={data}
            margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20
            }}
        >
            <CartesianGrid stroke="#f5f5f5"/>
            <XAxis type="number"/>
            <Tooltip/>
            <Legend/>
            <Bar dataKey="pv" barSize={25} fill="#af3a13"/>
        </ComposedChart>
    );
}