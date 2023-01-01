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
    name: "Mar 2016",
    score: 4.2,
    score2: 6.2
  },
  {
    name: "Apr 2016",
    score: 3.2,
    score2: 4.2
  },
  {
    name: "May 2016",
    score: 6.2,
    score2: 8.2
  },
  {
    name: "Jun 2016",
    score: 8.2,
    score2: 7.2
  },
  {
    name: "Jul 2016",
    score: 1.2,
    score2: 4.2
  },
  {
    name: "Aug 2016",
    score: 7.2,
    score2: 3.2
  },
  {
    name: "Sep 2016",
    score: 9.2,
    score2: 2.2
  },
  {
    name: "Oct 2016",
    score: 1.2,
    score2: 5.2
  },
  {
    name: "Nov 2016",
    score: 7.2,
    score2: 3.2
  },
  {
    name: "Dec 2016",
    score: 9.2,
    score2: 4.9
  },
  {
    name: "Jan 2017",
    score: 9.2,
    score2: 3.12
  },
  {
    name: "Feb 2017",
    score: 9.2,
    score2: 2.9
  },
  {
    name: "Mar 2017",
    score: 9.2,
    score2: 6.52
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

export default function LinearChartMultiMetric() {
  return (
    <LineChart
    width={340}
    height={240}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: -40,
        bottom: 10
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
      <YAxis dataKey="score"  tick={<CustomizedAxisTick />} />
      {/*  <Tooltip /> */}
      {/*  <Legend /> */}
      <Line type="monotone" dataKey="score" stroke="#8884d8">
        <LabelList content={<CustomizedLabel />} />
      </Line>
      <Line type="monotone" dataKey="score2" stroke="#82ca9d" />
    </LineChart>
  );
}
