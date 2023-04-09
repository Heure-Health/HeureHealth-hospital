import React from 'react';
import {Cell, Pie, PieChart, ResponsiveContainer, Sector} from 'recharts';

type Props = {
    width: number;
    colorData: Object[];
    chartValue: number;
};

const SpeedometerWidget = (props: Props) => {

    const {width, colorData, chartValue} = props;

    const activeSectorIndex = colorData
        .map((cur, index, arr) => {
            const curMax = [...arr]
                .splice(0, index + 1)
                .reduce((a, b) => ({value: a["value"] + b["value"]}))["value"];
            return chartValue > curMax - cur["value"] && chartValue <= curMax;
        })
        .findIndex((cur) => cur);

    const sumValues = colorData.map((cur) => cur["value"]).reduce((a, b) => a + b);

    const arrowData = [
        {value: chartValue},
        {value: 0},
        {value: sumValues - chartValue},
    ];

    const pieProps = {
        startAngle: 180,
        endAngle: 0,
        cx: width / 2,
        cy: width / 2,
    };

    const pieRadius = {
        innerRadius: (width / 2) * 0.40,
        outerRadius: (width / 2) * 0.65,
    };

    const Arrow = ({midAngle, outerRadius}) => {
        const circleX = width / 2;
        const circleY = width / 2;
        const RADIAN = Math.PI / 180;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const mx = circleX + (outerRadius + width * 0.03) * cos;
        const my = circleY + (outerRadius + width * 0.03) * sin;
        return (
            <g>
                <circle cx={circleX} cy={circleY} r={width * 0.03} fill="#666666" stroke="none"/>
                <path
                    d={`M${circleX},${circleY}L${mx},${my}`}
                    strokeWidth="6"
                    stroke="#666666"
                    fill="none"
                    strokeLinecap="round"
                />
            </g>
        );
    };
    const ActiveSectorMark = ({
                                  cx,
                                  cy,
                                  innerRadius,
                                  outerRadius,
                                  startAngle,
                                  endAngle,
                                  fill,
                              }) => {
        return (
            <g>
                <Sector
                    cx={cx}
                    cy={cy}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius * 1.07}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    fill={fill}
                />
            </g>
        );
    };

    return (
        <ResponsiveContainer>
            <PieChart>
                <Pie
                    dataKey="value"
                    startAngle={180}
                    endAngle={0}
                    activeIndex={activeSectorIndex}
                    activeShape={ActiveSectorMark}
                    data={colorData}
                    fill="#000000"
                    {...pieRadius}
                    {...pieProps}
                    labelLine={false}
                    label={(entry) => entry.name}
                >
                    {colorData.map( (entry, index) => (
                        <Cell key={`cell-${index}`} fill={ entry["color"]}/>
                    ))}
                </Pie>
                <Pie
                    stroke="none"
                    activeIndex={1}
                    activeShape={Arrow}
                    data={arrowData}
                    outerRadius={pieRadius.innerRadius}
                    fill="none"
                    dataKey="value"
                    {...pieProps}
                />
            </PieChart>
        </ResponsiveContainer>
    );
};
export default SpeedometerWidget;