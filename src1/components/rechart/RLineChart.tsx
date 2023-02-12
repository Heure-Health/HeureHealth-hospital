import React from 'react';
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';

type Props = {
    width: number;
    data: Object[];
};

// const data = [
//     {
//         name: 'Page A',
//         uv: 4000,
//         pv: 2400,
//         amt: 2400,
//     },
//     {
//         name: 'Page B',
//         uv: 3000,
//         pv: 1398,
//         amt: 2210,
//     }
// ];
const wrapperStyle = {
    display: 'block',
    marginBottom: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '95%'
}
//export default function RLineChart() {
const RLineChart = (props: Props) => {
    // static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';
    const {width, data} = props;

    return (

        <ResponsiveContainer width={'95%'} minHeight={240}>
            <LineChart
                width={width}
                height={200}
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
                <YAxis type="number" domain={[0, 7]}/>
                <Tooltip/>
                <Legend verticalAlign="bottom" height={36}/>
                <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{r: 8}}/>
            </LineChart>
        </ResponsiveContainer>
    );

}
export default RLineChart;
