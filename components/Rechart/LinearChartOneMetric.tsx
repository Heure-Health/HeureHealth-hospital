import React, { FunctionComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList
} from "recharts";

const data = [
  {
    name: "21 Q1",
    score: 4.2
  },
  {
    name: "21 Q2",
    score: 3.2
  },
  {
    name: "21 Q3",
    score: 6.2
  },
  {
    name: "21 Q4",
    score: 8.2
  },
  {
    name: "22 Q1",
    score: 1.2
  },
  {
    name: "22 Q2",
    score: 7.2
  },
  {
    name: "22 Q3",
    score: 9.2
  }
];

const CustomizedLabel: FunctionComponent<any> = (props: any) => {
  const { x, y, stroke, value } = props;

  return (
    <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
      {value}
    </text>
  );
};

const CustomizedAxisTick: FunctionComponent<any> = (props: any) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="#666"
        fontSize="8px"
        transform="rotate(-35)"
      >
        {payload.value}
      </text>
    </g>
  );
};

export default function LinearChartOneMetric() {
  return (
    <LineChart
      width={340}
      height={220}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: -50,
        bottom: 10
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" height={40} tick={<CustomizedAxisTick />} />
      <YAxis dataKey="score" tick={<CustomizedAxisTick />}/>
     {/*  <Tooltip /> */}
     {/*  <Legend /> */}
     {/*  <Line type="monotone" dataKey="pv" stroke="#8884d8">
        <LabelList content={<CustomizedLabel />} />
      </Line> */}
      <Line type="monotone" dataKey="score" stroke="#82ca9d" />
    </LineChart>
  );
}
