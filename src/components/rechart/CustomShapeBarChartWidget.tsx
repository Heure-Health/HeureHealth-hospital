import React from "react";
import {
    Bar,
    BarChart,
    CartesianGrid, Cell,
    Legend,
    ResponsiveContainer, Tooltip,
    XAxis,
    YAxis
} from "recharts";

type Params = {
    chartWidth: string;
    barLegendName: string;
    barDataKey: string;
    barColor: string;
    barSize: number;
    lineLegandName: string;
    lineDataKey: string;
    lineColor: string;
    xAxisDataKey: string;
    chartData: Object[];
};

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};
const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
export default function CustomShapeBarChartWidget(params: Params) {
        const {chartWidth, barLegendName, barDataKey, barColor, barSize, lineLegandName, lineDataKey, lineColor, xAxisDataKey, chartData} = params;
        return (
            <ResponsiveContainer width={chartWidth}>
                <BarChart
                    width={500}
                    height={300}
                    data={chartData}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 20,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <Legend />
                    <XAxis dataKey={xAxisDataKey} name={barLegendName} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey={lineDataKey} name={lineLegandName} fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }} barSize={barSize}>
                        {chartData.map((_entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        );
}