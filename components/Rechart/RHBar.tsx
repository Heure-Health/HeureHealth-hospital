import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend, ResponsiveContainer
} from "recharts";

const data = [
    {
        name: 'Page A',
        uv: 4000 
    },
    {
        name: 'Page B',
        uv: 3000
    },
    {
        name: 'Page C',
        uv: 2000
    },
    {
        name: 'Page D',
        uv: 2780
    },
    {
        name: 'Page A',
        uv: 4000
    },
    {
        name: 'Page B',
        uv: 3000
    },
    {
        name: 'Page C',
        uv: 2000
    },
    {
        name: 'Page D',
        uv: 2780
    },
    {
        name: 'Page A',
        uv: 4000
    },
    {
        name: 'Page B',
        uv: 3000
    },
    {
        name: 'Page C',
        uv: 2000
    },
    {
        name: 'Page D',
        uv: 2780
    },
    {
        name: 'Page B',
        uv: 3000
    },
    {
        name: 'Page C',
        uv: 2000
    },
    {
        name: 'Page D',
        uv: 2780
    },
    {
        name: 'Page A',
        uv: 4000
    },
    {
        name: 'Page B',
        uv: 3000
    },
    {
        name: 'Page C',
        uv: 2000
    },
    {
        name: 'Page D',
        uv: 2780
    }
];

export default function RBar() {
    //static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

    return (
         
            <BarChart
                layout="vertical"
                width={300}
                height={500}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            > 
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" />
                <Tooltip />
                <Legend />
                <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart> 
    );
}
