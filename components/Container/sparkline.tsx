import React from "react";
import { LinePath } from "@visx/shape";
import { curveLinear } from "@visx/curve";
import { scaleTime, scaleLinear } from "@visx/scale";
import { extent, max, min } from "d3-array";
//import { observer } from "mobx-react-lite";
import styled from '@emotion/styled';

// accessors
const x = (d) => d.date;
const y = (d) => d.value;

export type SparkLineData = { date: Date; value: number };
type SparkLineProps = {
    height: number;
    width: number;
    data: SparkLineData[];
    sentiment?: Sentiment;
    metric?: string;
    paddingTop?: number;
};

const StyledSpark = styled.svg<{ sentiment: Sentiment; metric: string }>`
  stroke: ${({ theme, sentiment }) => theme[sentiment]};
  ${({ theme, metric }) =>
        !!metric &&
        css`
      stroke: ${theme.metrics[metric]};
    `};
`;

const Sparkline: React.FC<SparkLineProps> = ({
    height,
    width,
    data,
    sentiment = "neutral",
    metric,
    paddingTop = 10,
}) => {
    // bounds
    const xMax = width;
    const yMax = height - paddingTop; // account for padding
    if (!data) {
        return null;
    }

    // scales
    const xScale = scaleTime({
        range: [0, xMax],
        domain: extent(data, x),
    });
    const yScale = scaleLinear({
        range: [yMax, 0],
        domain: [min(data, y), max(data, y)],
    });

    return (
        <StyledSpark
            width={width}
            height={height}
            sentiment={sentiment}
            metric={metric}
        >
            <LinePath
                data={data}
                x={(d) => xScale(x(d))}
                y={(d) => yScale(y(d))}
                strokeWidth={2}
                strokeLinecap="round"
                curve={curveLinear}
            />
        </StyledSpark>
    );
};

export default Sparkline;
