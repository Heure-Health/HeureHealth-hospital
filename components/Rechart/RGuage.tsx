import React from 'react';
import { Sector, Cell, PieChart, Pie, ResponsiveContainer } from 'recharts';

type Props = {
    width: number;
    colorData: Object[];
    chartValue: number;
};

const Gauge = (props: Props) => {

    const { width, colorData, chartValue } = props;
    // const width = 400;
    // const chartValue = 250;
    // const colorData = [
    //     {
    //         name: 'Aspirant',
    //         value: 100,
    //         color: '#ff9800',
    //     },
    //     {
    //         name: 'Challenger',
    //         value: 100,
    //         color: '#f8f522',
    //     },
    //     { name: 'Leader', value: 100, color: '#4caf50' },
    // ];

    const activeSectorIndex = colorData
        .map((cur, index, arr) => {
            const curMax = [...arr]
                .splice(0, index + 1)
                .reduce((a, b) => ({ value: a.value + b.value })).value;
            return chartValue > curMax - cur.value && chartValue <= curMax;
        })
        .findIndex((cur) => cur);

    const sumValues = colorData.map((cur) => cur.value).reduce((a, b) => a + b);

    const arrowData = [
        { value: chartValue },
        { value: 0 },
        { value: sumValues - chartValue },
    ];

    const pieProps = {
        startAngle: 180,
        endAngle: 0,
        cx: width / 2,
        cy: width / 2,
    };

    const pieRadius = {
        // innerRadius: (width / 2) * 0.3, outerRadius: (width / 2) * 0.4
        innerRadius: (width / 2) * 0.4,
        outerRadius: (width / 2) * 0.7,
    };

    const Arrow = ({ cx, cy, midAngle, outerRadius }) => {
        //eslint-disable-line react/no-multi-comp
        const RADIAN = Math.PI / 180;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const mx = cx + (outerRadius + width * 0.03) * cos;
        const my = cy + (outerRadius + width * 0.03) * sin;
        return (
            <g>
                <circle cx={cx} cy={cy} r={width * 0.03} fill="#666" stroke="none" />
                <path
                    d={`M${cx},${cy}L${mx},${my}`}
                    strokeWidth="6"
                    stroke="#666"
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
        //eslint-disable-line react/no-multi-comp
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
    let renderLabel = function (entry) {
        return entry.name;
    }
    const CustomizedLabel = ({
        x, y, name
    }) => {
        return (
            <text x={x+25} y={y+10} fontSize="0.9em" fill="black" textAnchor="end" dominantBaseline="central">
                {name}
            </text>
        );
    };

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx, cy, midAngle, innerRadius, outerRadius, name
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 1.21;
        const x = cx + radius * Math.cos(-midAngle * RADIAN) ;
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fontSize="0.9em" fill="black" textAnchor={name == 'Challenger' ? 'middle' : x > cx ? 'start' : 'end'} dominantBaseline="central">
                {name}
            </text>
        );
    };
    return (
        <ResponsiveContainer width={'99%'} minHeight={240}>
            <PieChart width={width} >//height={width / 2 + 40}
                <Pie
                    activeIndex={activeSectorIndex}
                    activeShape={ActiveSectorMark}
                    data={colorData}
                    fill="#8884d8"
                    {...pieRadius}
                    {...pieProps}
                    dataKey="value" 
                    labelLine={false}
                    //label={(entry) => entry.name}
                    label={renderCustomizedLabel}
                >
                    {colorData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colorData[index].color} />
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

export default Gauge;