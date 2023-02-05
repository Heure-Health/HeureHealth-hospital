import React, {useMemo} from "react";
import {Bar} from "@visx/shape";
import {Group} from "@visx/group";
import {AxisBottom, AxisLeft} from "@visx/axis";
import {scaleBand, scaleLinear} from "@visx/scale";
import {GridColumns, GridRows} from "@visx/grid";
import {TooltipWithBounds, useTooltip} from "@visx/tooltip";
import {localPoint} from "@visx/event";
import useResizeObserver from "use-resize-observer";


const data = [
    {country: "United States", value: 12394},
    {country: "Russia", value: 6148},
    {country: "Germany", value: 1653},
    {country: "United Kingdom", value: 2162}
];
// const xSelector = d => d.country;
// const ySelector = d => d.value;

const width = 500;
const height = 300;
//const verticalMargin = 120;
const margin = {top: 40, bottom: 50, left: 40, right: 40};
const xMax = width - margin.left - margin.right;
const yMax = height - margin.top - margin.bottom;

// export type BarsProps = {
//     width: number;
//     height: number;
//     events?: boolean;
// };

const getX = (d) => d.country;
const getY = (d) => d.value;


export default function BarChart() {
    // scales, memoize for performance
    const {
        tooltipData,
        tooltipLeft,
        tooltipTop,
        tooltipOpen,
        showTooltip,
        hideTooltip,
    } = useTooltip();

    const {ref, width = 500, height = 300} = useResizeObserver();
    //let tooltipTimeout;
    const xScale = useMemo(
        () =>
            scaleBand<string>({
                range: [0, xMax],
                round: true,
                domain: data.map(getX), //x => { return x.country }
                padding: 0.4,
            }),
        [xMax],
    );
    const yScale = useMemo(
        () =>
            scaleLinear<number>({
                range: [yMax, 0],
                round: true,
                domain: [0, Math.max(...data.map(getY))], //y => { return y.value }
            }),
        [yMax],
    );

    const handleMouseOver = (event, datum) => {
        // console.log(datum);
        const coords = localPoint(event.target.ownerSVGElement, event);
        showTooltip({
            tooltipLeft: coords.x,
            tooltipTop: coords.y,
            tooltipData: datum
        });
    };

    // const { containerRef, TooltipInPortal } = useTooltipInPortal({
    //     // use TooltipWithBounds
    //     detectBounds: true,
    //     // when tooltip containers are scrolled, this will correctly update the Tooltip position
    //     scroll: true,
    //   })
    // const handleTooltip = ({ event, data, xSelector, xScale, yScale }) => {
    //     const { showTooltip } = this.props;
    //     const { x } = localPoint(event);
    //     const x0 = xScale.invert(x);
    //     const index = bisector(data, x0, 1);

    //     const d0 = data[index - 1];
    //     const d1 = data[index];
    //     let d = d0;
    //     if (d1 && d1.date) {
    //         d = x0 - xSelector(d0) > xSelector(d1) - x0 ? d1 : d0;
    //     }

    //     showTooltip({
    //         tooltipData: d,
    //         tooltipLeft: xScale(xSelector(d)),
    //         tooltipTop: yScale(ySelector(d)),
    //     });
    // };
    // return (
    // <ParentSize>
    //     {({ width, height }) => {
    //         const innerWidth = width - margin;
    //         const innerHeight = height - margin;
    //         const barHeight = Math.max(10, innerHeight / data.length);

    return <div style={{width: "100%", height: "100%", position: 'relative'}} ref={ref}>
        <svg width={width} height={height}>
            {/* <GradientTealBlue id="teal" />   */}
            <Group top={margin.top} left={margin.left}>
                <rect width={width} height={height} fill="url(#teal)" rx={15}
                />
                <AxisLeft
                    scale={yScale} top={0} left={30}
                    hideTicks={true}
                    //numTicks={data.length - 1}
                    label="Value"
                    tickLabelProps={() => ({
                        fontSize: 11,
                        textAnchor: 'end',
                    })}
                />
                <AxisBottom
                    scale={xScale} top={yMax}
                    label="Country"
                    //labelOffset={15}
                    //numTicks={data.length - 1}
                    tickLabelProps={() => ({
                        fontSize: 11,
                        textAnchor: 'middle'
                    })}
                />
                <GridRows
                    lineStyle={{pointerEvents: "none"}}
                    scale={yScale}
                    width={xMax}
                    strokeDasharray="2,2"
                    strokeWidth=".2"
                    stroke="#333"
                />

                <GridColumns
                    lineStyle={{pointerEvents: "none"}}
                    scale={xScale}
                    height={yMax}
                    strokeDasharray="2,2"
                    strokeWidth=".2"
                    stroke="#333"
                />

                {data.map((d) => {
                    const xv = getX(d);
                    const barWidth = xScale.bandwidth();
                    const barHeight = yMax - (yScale(getY(d)) ?? 0);
                    const barX = xScale(xv);
                    const barY = yMax - barHeight;
                    return <Bar
                        key={`bar-${xv}`}
                        x={barX}
                        y={barY}
                        width={barWidth}
                        height={barHeight}
                        fill="#074b667d"
                        onMouseOver={(e) => handleMouseOver(e, d.value)}
                        onMouseOut={hideTooltip}
                    />;
                })}
            </Group>
        </svg>
        {tooltipOpen && <TooltipWithBounds
            // set this to random so it correctly updates with parent bounds
            key={Math.random()}
            top={tooltipTop}
            left={tooltipLeft}
        >
            Data value <strong>{tooltipData}</strong>
        </TooltipWithBounds>}
    </div>;
    //  }}
    // </ParentSize>
    // );
}
