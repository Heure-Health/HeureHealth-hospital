/* import "./styles.css";
 */
import React from "react";
import {Bar, CartesianGrid, ComposedChart, Line} from "recharts";

const data = [
    {
        name: "Page A",
        avg: 590,
        qs: 800,
        amt: 1400,
        cnt: 490
    },
    {
        name: "Page B",
        avg: 868,
        qs: 967,
        amt: 1506,
        cnt: 590
    },
    {
        name: "Page C",
        avg: 1397,
        qs: 1098,
        amt: 989,
        cnt: 350
    },
    {
        name: "Page D",
        avg: 1480,
        qs: 1200,
        amt: 1228,
        cnt: 480
    },
    {
        name: "Page E",
        avg: 1520,
        qs: 1108,
        amt: 1100,
        cnt: 460
    },
    {
        name: "Page F",
        avg: 1400,
        qs: 680,
        amt: 1700,
        cnt: 380
    }
];

export default function ComposedChartWgt() {
    return (
        <ComposedChart
            width={380}
            height={220}
            data={data}
            margin={{
                top: 20,
                right: 80,
                bottom: 20,
                left: 20
            }}
        >
            <CartesianGrid stroke="#f5f5f5"/>
            {/*  <Tooltip /> */}
            <Bar dataKey="cnt" barSize={20} fill="#436ea0"/>
            <Bar dataKey="amt" barSize={20} fill="#413ff0"/>

            <Bar dataKey="pv" barSize={20} fill="#413ea0"/>
            <Line type="monotone" dataKey="uv" stroke="#ff7300"/>
        </ComposedChart>
    );
}