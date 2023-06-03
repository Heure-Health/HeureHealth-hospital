import React from 'react';
import {Cell, Legend, Pie, PieChart, ResponsiveContainer} from 'recharts';

type Params = {
    pieDataKey: string;
    pieRadius: number;
    chartDataColor: Object[];
    chartData: Object[];
};
const data = [
    { name: 'Pacific', value: 260 },
    { name: 'Mountain', value: 240 },
    { name: 'Mountain2', value: 540 },
    { name: 'Mountain3', value: 10 },
    { name: 'Mountain4', value: 40 },
    { name: 'Pacific', value: 60 },
    { name: 'Mountain', value: 440 },
    { name: 'Mountain2', value: 140 },
    { name: 'Mountain3', value: 240 },
    { name: 'Mountain4', value: 440 }
];

const COLORS = ['#FA897B', '#60B7C0','#FA138B', '#60B1D0','#AA800B', '#639DC1','#FA858D', '#68B1D0', '#23A4A0'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(2)}%`}
        </text>
    );
};
export default function PieChartWidget(params: Params) {
    const {pieDataKey, pieRadius, chartDataColor, chartData} = params;
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label = {renderCustomizedLabel}
                    outerRadius={pieRadius}
                    fill="#8884d8"
                    dataKey={pieDataKey}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    );
}