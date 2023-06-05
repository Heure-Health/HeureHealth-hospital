import React from 'react';
import {Cell, Legend, Pie, PieChart, ResponsiveContainer} from 'recharts';

type Params = {
    pieDataKey: string;
    pieRadius: number;
    chartDataColor: string[];
    chartData: Object[];
};

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
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
                    {chartData.map((_entry, index) => (
                        <Cell key={`cell-${index}`} fill={chartDataColor[index % chartDataColor.length]} />
                    ))}
                </Pie>
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    );
}