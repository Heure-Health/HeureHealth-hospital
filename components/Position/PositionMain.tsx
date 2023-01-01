import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Guage from "../../components/Rechart/RGuage";
import RLineChart from "../Rechart/RLineChart";
import Card from "../Container/CardCategory";
const gdata = {
    width: 340,
    chartValue: 250,
    colorData: [
        {
            name: 'Aspirant',
            value: 100,
            color: '#FA897B',
        },
        {
            name: 'Challenger',
            value: 100,
            color: '#FBC78D',
        },
        {
            name: 'Leader',
            value: 100,
            color: '#D0E6A5'
        },
    ]
}
const GuageC = dynamic(
    () => import('../../components/Rechart/RGuage'),
    { ssr: false }
)

const cdata = {
    "position": [
        {
            "card": "1",
            "cardtype": "guage",
            "headerlabel": "OVERALL MARKET POSITION",
            "headervalue": "LEADER",
            "subheaderlabel": "CURRENTLY AT THE TOP WITH A SCORE OF",
            "subheadervalue": "6.988",
            "tooltip": "Position tooltip",
            "trend1": "Annual Score Change",
            "trendInd1": "down",
            "trendScore1": "1.20%",
            "trend2": "Closest Competitor's Score Diff",
            "trendInd2": "na",
            "trendScore2": "0.016",
            "trend3": "Quarterly Score Change",
            "trendInd3": "up",
            "trendScore3": "0.45%",
            "summary1": "Quaters current market position has been maintained",
            "summaryvalue1": "0",
            "summary2": "Similar competitors who maintained this position",
            "summaryvalue2": "1.5%",
            "chartwidth": 340,
            "gdata": {
                width: 340,
                chartValue: 250,
                data: [
                    {
                        name: 'Aspirant',
                        value: 100,
                        color: '#FA897B',
                    },
                    {
                        name: 'Challenger',
                        value: 100,
                        color: '#FBC78D',
                    },
                    {
                        name: 'Leader',
                        value: 100,
                        color: '#D0E6A5'
                    },
                ]
            }
        },
        {
            "card": "2",
            "cardtype": "line1",
            "headerlabel": "OVERALL MARKET POSITION",
            "headervalue": "LEADER",
            "subheaderlabel": "CURRENTLY AT THE TOP WITH A SCORE OF",
            "subheadervalue": "6.988",
            "tooltip": "Position tooltip",
            "trend1": "Annual Score Change",
            "trendInd1": "down",
            "trendScore1": "1.20%",
            "trend2": "Closest Competitor's Score Diff",
            "trendInd2": "na",
            "trendScore2": "0.016",
            "trend3": "Quarterly Score Change",
            "trendInd3": "up",
            "trendScore3": "0.45%",
            "summary1": "Quaters current market position has been maintained",
            "summaryvalue1": "0",
            "summary2": "Positioned 3rd from top and below 12% of other Easter Region competitors, presents Banner University with room to move up the Market position dial. Your closest Easter Region competitor is Colorado and is 0.007 points below leaving your current Easter Region position fairly vulnerable",
            "summaryvalue2": "1.5%",
            "chartwidth": 340,
            "gdata": {
                width: 340,
                data: [
                    {
                        name: 'Q121',
                        value: 4.3
                    },
                    {
                        name: 'Q221',
                        value: 3.5
                    },
                    {
                        name: 'Q321',
                        value: 5.4
                    },
                    {
                        name: 'Q421',
                        value: 6.4
                    },
                ]
            }
        },
        {
            "card": "3",
            "cardtype": "guage",
            "headerlabel": "OVERALL MARKET POSITION",
            "headervalue": "LEADER",
            "subheaderlabel": "CURRENTLY AT THE TOP WITH A SCORE OF",
            "subheadervalue": "6.988",
            "tooltip": "Position tooltip",
            "trend1": "Annual Score Change",
            "trendInd1": "down",
            "trendScore1": "1.20%",
            "trend2": "Closest Competitor's Score Diff",
            "trendInd2": "na",
            "trendScore2": "0.016",
            "trend3": "Quarterly Score Change",
            "trendInd3": "up",
            "trendScore3": "0.45%",
            "summary1": "Quaters current market position has been maintained",
            "summaryvalue1": "0",
            "summary2": "Similar competitors who maintained this position",
            "summaryvalue2": "1.5%",
            "chartwidth": 340,
            "gdata": {
                "width": 340,
                "chartValue": 250,
                "data": [
                    {
                        name: 'Aspirant',
                        value: 100,
                        color: '#FA897B',
                    },
                    {
                        name: 'Challenger',
                        value: 100,
                        color: '#FBC78D',
                    },
                    {
                        name: 'Leader',
                        value: 100,
                        color: '#D0E6A5'
                    },
                ]
            }
        },
    ]
}

const PositionMain = () => {

    const renderChart1 = ({ name, gdata }) => {
        console.log(name);
        console.log(gdata);
        return (
            <div> hello
                {name}
            </div>
        );
    };

    const renderChart = function (name, chartwidth, gdata) {
        switch (name) {
            case 'guage':
                return (
                    <GuageC width={chartwidth} chartValue={gdata.chartValue}
                        colorData={gdata.data} />
                )
            case 'line1':
                return (
                    <RLineChart width={gdata.chartwidth} data={gdata.data} />
                )
        }
    };
    return (
        <>
            <SimpleGrid w="100%" columns={{ sm: 1, md: 2, xl: 3 }} >
                {cdata.position.map((data2, index) => (
                    <Card key={data2.card} width="380px"
                        headerlabel={data2.headerlabel} headervalue={data2.headervalue}
                        subheaderlabel={data2.subheaderlabel} subheadervalue={data2.subheadervalue} tooltip={data2.tooltip}
                        trend1={data2.trend1} trendInd1={data2.trendInd1} trendScore1={data2.trendScore1}
                        trend2={data2.trend2} trendInd2={data2.trendInd2} trendScore2={data2.trendScore2}
                        trend3={data2.trend3} trendInd3={data2.trendInd3} trendScore3={data2.trendScore3}
                        summary1={data2.summary1} summaryvalue1={data2.summaryvalue1}
                        summary2={data2.summary2} summaryvalue2={data2.summaryvalue2}
                        chart={renderChart(data2.cardtype, data2.chartwidth, data2.gdata)}
                    // chart={

                    //   <GuageC width={data2.chartwidth} chartValue={data2.gdata.chartValue}
                    //   colorData={data2.gdata.data} />
                    // }
                    />
                ))}
            </SimpleGrid>
        </>
    );
};


export default PositionMain;
