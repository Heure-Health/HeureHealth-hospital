import React from "react";
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    }
];

export default function RBar() {
    //static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

    return (
        <ResponsiveContainer width={'95%'} height={400}>
            <BarChart
                width={600}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey="pv" fill="#8884d8"/>
                <Bar dataKey="uv" fill="#82ca9d"/>
            </BarChart>
        </ResponsiveContainer>
    );
}
