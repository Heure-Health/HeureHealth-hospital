import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Card from "../Container/CardCategoryLg";
import RLineChart from "../Rechart/RLineChart";
import RHBar from "../Rechart/RHBar";
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
        }]
};

const GuageC = dynamic(
    () => import('../../components/Rechart/RGuage'),
    { ssr: false }
)

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

const PositionMain1 = () => {
    return (
        <div className="m-5">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                <div className=" w-1/4 m-1">1</div>
                <div className=" w-1/4 m-1">2</div>
                <div className=" w-1/4 m-1">3</div>
                <div className=" w-1/4 m-1">4</div>
            </div>
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                <div className="max-w-2xl">
                    {cdata.position.filter(x => x.card == "1").map((data2, index) => (
                        <Card key={data2.card} width="600px"
                            headerlabel={data2.headerlabel} headervalue={data2.headervalue}
                            subheaderlabel={data2.subheaderlabel} subheadervalue={data2.subheadervalue} tooltip={data2.tooltip}
                            trend1={data2.trend1} trendInd1={data2.trendInd1} trendScore1={data2.trendScore1}
                            trend2={data2.trend2} trendInd2={data2.trendInd2} trendScore2={data2.trendScore2}
                            trend3={data2.trend3} trendInd3={data2.trendInd3} trendScore3={data2.trendScore3}
                            summary1={data2.summary1} summaryvalue1={data2.summaryvalue1}
                            summary2={data2.summary2} summaryvalue2={data2.summaryvalue2}
                            chart={renderChart(data2.cardtype, data2.chartwidth, data2.gdata)}
                        />
                    ))}
                </div>
                <div className="max-w-2xl">
                <div className="flex flex-wrap overflow-hidden">
                    <div className="w-full overflow-hidden  h-48"> 1
                    </div>
                     <div className="w-full overflow-hidden  h-48"> 2
                    </div>
                     <div className="w-full overflow-hidden  h-48"> 3
                    </div>
                </div>
                </div>
                <div className="max-w-2xl">
                    <RHBar />
                </div>
            </div>
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                <div className="max-w-2xl">
                    {cdata.position.filter(x => x.card == "1").map((data2, index) => (
                        <Card key={data2.card} width="600px"
                            headerlabel={data2.headerlabel} headervalue={data2.headervalue}
                            subheaderlabel={data2.subheaderlabel} subheadervalue={data2.subheadervalue} tooltip={data2.tooltip}
                            trend1={data2.trend1} trendInd1={data2.trendInd1} trendScore1={data2.trendScore1}
                            trend2={data2.trend2} trendInd2={data2.trendInd2} trendScore2={data2.trendScore2}
                            trend3={data2.trend3} trendInd3={data2.trendInd3} trendScore3={data2.trendScore3}
                            summary1={data2.summary1} summaryvalue1={data2.summaryvalue1}
                            summary2={data2.summary2} summaryvalue2={data2.summaryvalue2}
                            chart={renderChart(data2.cardtype, data2.chartwidth, data2.gdata)}
                        />
                    ))}
                </div>
                <div className="max-w-2xl">
                    {cdata.position.filter(x => x.card == "1").map((data2, index) => (
                        <Card key={data2.card} width="600px"
                            headerlabel={data2.headerlabel} headervalue={data2.headervalue}
                            subheaderlabel={data2.subheaderlabel} subheadervalue={data2.subheadervalue} tooltip={data2.tooltip}
                            trend1={data2.trend1} trendInd1={data2.trendInd1} trendScore1={data2.trendScore1}
                            trend2={data2.trend2} trendInd2={data2.trendInd2} trendScore2={data2.trendScore2}
                            trend3={data2.trend3} trendInd3={data2.trendInd3} trendScore3={data2.trendScore3}
                            summary1={data2.summary1} summaryvalue1={data2.summaryvalue1}
                            summary2={data2.summary2} summaryvalue2={data2.summaryvalue2}
                            chart={renderChart(data2.cardtype, data2.chartwidth, data2.gdata)}
                        />
                    ))}
                </div>
            </div>
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                <div className="max-w-2xl">
                    {cdata.position.filter(x => x.card == "1").map((data2, index) => (
                        <Card key={data2.card} width="600px"
                            headerlabel={data2.headerlabel} headervalue={data2.headervalue}
                            subheaderlabel={data2.subheaderlabel} subheadervalue={data2.subheadervalue} tooltip={data2.tooltip}
                            trend1={data2.trend1} trendInd1={data2.trendInd1} trendScore1={data2.trendScore1}
                            trend2={data2.trend2} trendInd2={data2.trendInd2} trendScore2={data2.trendScore2}
                            trend3={data2.trend3} trendInd3={data2.trendInd3} trendScore3={data2.trendScore3}
                            summary1={data2.summary1} summaryvalue1={data2.summaryvalue1}
                            summary2={data2.summary2} summaryvalue2={data2.summaryvalue2}
                            chart={renderChart(data2.cardtype, data2.chartwidth, data2.gdata)}
                        />
                    ))}
                </div>
                <div className="max-w-2xl">
                    {cdata.position.filter(x => x.card == "1").map((data2, index) => (
                        <Card key={data2.card} width="600px"
                            headerlabel={data2.headerlabel} headervalue={data2.headervalue}
                            subheaderlabel={data2.subheaderlabel} subheadervalue={data2.subheadervalue} tooltip={data2.tooltip}
                            trend1={data2.trend1} trendInd1={data2.trendInd1} trendScore1={data2.trendScore1}
                            trend2={data2.trend2} trendInd2={data2.trendInd2} trendScore2={data2.trendScore2}
                            trend3={data2.trend3} trendInd3={data2.trendInd3} trendScore3={data2.trendScore3}
                            summary1={data2.summary1} summaryvalue1={data2.summaryvalue1}
                            summary2={data2.summary2} summaryvalue2={data2.summaryvalue2}
                            chart={renderChart(data2.cardtype, data2.chartwidth, data2.gdata)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PositionMain1;
