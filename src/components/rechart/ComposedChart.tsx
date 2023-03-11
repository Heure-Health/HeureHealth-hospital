import React from "react";
import { Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

const data = [
    {
        name: '1',
        avg: 2.000,
        qs: 1.247,
    },
    {
        name: '2',
        avg: 1.000,
        qs: 2.261,
    },
    {
        name: '3',
        avg: 2.540,
        qs: 5.141,
    },
    {
        name: '4',
        avg: 3.000,
        qs: 1.861,
    },
    {
        name: '5',
        avg: 3.400,
        qs: 2.511,
    },
    {
        name: '6',
        avg: 3.300,
        qs: 4.291,
    },
    {
        name: '7',
        avg: 3.000,
        qs: 2.941,
    },
    {
        name: '8',
        avg: 2.987,
        qs: 5.261,
    },
    {
        name: '9',
        avg: 3.987,
        qs: 4.261,
    },
    {
        name: '10',
        avg: 2.257,
        qs: 4.561,
    },
    {
        name: '11',
        avg: 3.876,
        qs: 4.174,
    },
    {
        name: '12',
        avg: 2.984,
        qs: 5.131
    },
    {
        name: '13',
        avg: 1.984,
        qs: 2.841,
    },
    {
        name: '14',
        avg: 2.324,
        qs: 4.151,
    },
    {
        name: '15',
        avg: 1.326,
        qs: 5.261,
    },
    {
        name: '16',
        avg: 3.514,
        qs: 2.861,
    },
    {
        name: '17',
        avg: 1.944,
        qs: 3.761,
    },
    {
        name: '18',
        avg: 3.984,
        qs: 2.261,
    },
    {
        name: '19',
        avg: 4.984,
        qs: 3.861,
    },
    {
        name: '20',
        avg: 5.484,
        qs: 4.261,
    },
    {
        name: '21',
        avg: 4.374,
        qs: 3.261,
    },
    {
        name: '22',
        avg: 5.543,
        qs: 5.261,
    },
    {
        name: '23',
        avg: 3.261,
        qs: 2.261,
    }
];

export default function ComposedChartWgt() {
        return (
            <div style={{ width: '100%'}}>
                <ResponsiveContainer>
                    <ComposedChart data={data}>
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="name" scale="auto" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="qs" name={"Quarterly Scores"} barSize={20} fill="#45B39D" />
                        <Line dataKey="avg" name={"Average"} type="natural"  stroke="#ff7300" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        );
}