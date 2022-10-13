import React from 'react';
import { ResponsiveContainer, RadialBarChart, RadialBar, Radar, RadarChart, PolarAngleAxis, Legend, PolarRadiusAxis, PolarGrid } from 'recharts';

import {PieChart,Pie,Cell} from 'recharts';
const RRadial = () => {

    const data1 = [
        { id: "1", name: "L1", value: 75 },
        { id: "2", name: "L2", value: 25 }
    ];

    const circleSize = 100;

    const data = [
        { pct: 40, fill: '#ff4800' },
        { pct: 30, fill: '#00ff6a' },
        { pct: 10, fill: '#1900ff' },
    ];
    return (
       
        <PieChart width={50} height={50}>
            <text
                x={25}
                y={25}
                textAnchor="middle"
                dominantBaseline="middle"
            >
                25
            </text>
            <Pie
                data={data1}
                dataKey="value"
                innerRadius="80%"
                outerRadius="100%"
                fill="#82ca9d"
                startAngle={90}
                endAngle={-270}
                paddingAngle={0}
                blendStroke
            >
                <Cell
                    key="test"
                    fill="#CCC"
                />
            </Pie>
                </PieChart>
        // <RadialBarChart width={500} height={300} data={data}>
        //    <PolarAngleAxis type="number" domain={[0, 100]} dataKey={'pct'} angleAxisId={0} tick={false} /> 
        //     <RadialBar background dataKey="pct" angleAxisId={0} data={data} />
        // </RadialBarChart>
    );
    // Sample data
    // const data = [
    //     { name: 'A', x: 1, fill: "green" },
    //     { name: 'B', x: 2, fill: "yellow" },
    //     { name: 'C', x: 3, fill: "aqua" }
    // ];


    // return (
    //     <RadialBarChart width={500} height={500} data={data}>
    //         <RadialBar minAngle={20} dataKey="x" />
    //     </RadialBarChart>
    // );
}

export default RRadial;

