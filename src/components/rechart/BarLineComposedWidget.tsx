import React from "react";
import { Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

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
export default function BarLineComposedWidget(params: Params) {
        const {chartWidth, barLegendName, barDataKey, barColor, barSize, lineLegandName, lineDataKey, lineColor, xAxisDataKey, chartData} = params;
        return (
            <ResponsiveContainer width={chartWidth}>
                <ComposedChart data={chartData}>
                    <CartesianGrid stroke="#F5F5F5" />
                    <XAxis dataKey={xAxisDataKey} scale="auto" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey={barDataKey} name={barLegendName} fill={barColor} barSize={barSize} />
                    <Line dataKey={lineDataKey} name={lineLegandName} stroke={lineColor} type={"natural"} />
                </ComposedChart>
            </ResponsiveContainer>
        );
}