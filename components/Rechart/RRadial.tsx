import React from 'react';

import {Cell, Pie, PieChart} from 'recharts';

const RRadial = () => {

    const data1 = [
        {id: "1", name: "L1", value: 75},
        {id: "2", name: "L2", value: 25}
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
    );
}

export default RRadial;

