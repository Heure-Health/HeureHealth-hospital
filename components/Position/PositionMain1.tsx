import React from "react";
import { SimpleGrid, Box, Flex, Center, Square, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Card from "../Container/CardCategoryLg";
import RLineChart from "../Rechart/RLineChart";
import RHBar from "../Rechart/RHBar";
import ComposedChartWgt from "../Rechart/ComposedChart";
import LinearChartMultiMetric from "../Rechart/LinearChartMultiMetric";
import LinearChartOneMetric from "../Rechart/LinearChartOneMetric";
import SCPositioncPct from "../SCWidget/SCPositioncPct";
import SCSamePosPct from "../SCWidget/SCSamePosPct";
import SCMvOutNbr from "../SCWidget/SCMvOutNbr";
import CardTrendDaily from "../Container/TrendCard/CardTrendDaily";
import CardTrendAnnual from "../Container/TrendCard/CardTrendAnnual";
import CardTrendQtly from "../Container/TrendCard/CardTrendQtly";

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
            "summary1": "Today Banner University is positioned above 88% of its Wester Region Competitors with a HeureScore of 6.72 which puts you in the top 2 slice in the category",
            "summaryvalue1": "0",
            "summary2": "Positioned 3rd from top and below 12% of other Easter Region competitors, presents Banner University with room to move up the Market position dial. Your closest Easter Region competitor is Colorado and is 0.007 points below leaving your current Easter Region position fairly vulnerable",
            "summaryvalue2": "1.5%",
            "chartwidth": 280,
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
        case 'composedchart':
            //ComposedChartWgt
            return (
                <ComposedChartWgt />
            )
        case 'linearchartonemetric':
            //ComposedChartWgt
            return (
                <LinearChartOneMetric />
            )

        case 'linearchartmultimetric':
            //ComposedChartWgt
            return (
                <LinearChartMultiMetric />
            )

    }
};

const PositionMain1 = () => {
    return (

        <>

            <Flex direction='row'>
                <Flex direction='column'>
                    <Box>
                        <div className="max-w-2xl">
                            {cdata.position.filter(x => x.card == "1").map((data2, index) => (
                                <Card key={data2.card} width="460px"
                                    headerlabel={"Banner University Market Position"} headervalue={data2.headervalue}
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


                    </Box>

                    <Box>

                        <div className="max-w-2xl">
                            {cdata.position.filter(x => x.card == "1").map((data2, index) => (
                                <CardTrendAnnual key={data2.card} width="460px"
                                    headerlabel={"Banner University Market Position : ANNUAL TRENDLINE"} headervalue={data2.headervalue}
                                    subheaderlabel={data2.subheaderlabel} subheadervalue={data2.subheadervalue} tooltip={data2.tooltip}
                                    trend1={data2.trend1} trendInd1={data2.trendInd1} trendScore1={data2.trendScore1}
                                    trend2={data2.trend2} trendInd2={data2.trendInd2} trendScore2={data2.trendScore2}
                                    trend3={data2.trend3} trendInd3={data2.trendInd3} trendScore3={data2.trendScore3}
                                    summary1={data2.summary1} summaryvalue1={data2.summaryvalue1}
                                    summary2={data2.summary2} summaryvalue2={data2.summaryvalue2}
                                    chart={renderChart("linearchartmultimetric", data2.chartwidth, data2.gdata)}
                                />
                            ))}
                        </div>
                    </Box>
                </Flex>

                <Flex direction='column'>
                    <Box>
                        <Flex direction='row'>
                            <Box width="150px" height='150px'>
                                <SCPositioncPct />
                            </Box>
                            <Box width="150px" pl="2" height='150px'>
                                <SCSamePosPct />
                            </Box>
                            <Box width="150px" pl="2" height='150px'>
                                <SCMvOutNbr />
                            </Box>
                        </Flex>
                    </Box>
                    <Box>

                        <div className="max-w-2xl">
                            {cdata.position.filter(x => x.card == "1").map((data2, index) => (
                                <CardTrendQtly key={data2.card} width="460px"
                                    headerlabel={"Banner University Market Position : QUARTERLY TRENDLINE"} headervalue={data2.headervalue}
                                    subheaderlabel={data2.subheaderlabel} subheadervalue={data2.subheadervalue} tooltip={data2.tooltip}
                                    trend1={data2.trend1} trendInd1={data2.trendInd1} trendScore1={data2.trendScore1}
                                    trend2={data2.trend2} trendInd2={data2.trendInd2} trendScore2={data2.trendScore2}
                                    trend3={data2.trend3} trendInd3={data2.trendInd3} trendScore3={data2.trendScore3}
                                    summary1={data2.summary1} summaryvalue1={data2.summaryvalue1}
                                    summary2={data2.summary2} summaryvalue2={data2.summaryvalue2}
                                    chart={renderChart("linearchartonemetric", data2.chartwidth, data2.gdata)}
                                />
                            ))}
                        </div>

                    </Box>


                    <Box>
                        <div className="max-w-2xl">
                            {cdata.position.filter(x => x.card == "1").map((data2, index) => (
                                <CardTrendDaily key={data2.card} width="460px"
                                    headerlabel={"Banner University Market Position : DAILY TRENDLINE"} headervalue={data2.headervalue}
                                    subheaderlabel={data2.subheaderlabel} subheadervalue={data2.subheadervalue} tooltip={data2.tooltip}
                                    trend1={data2.trend1} trendInd1={data2.trendInd1} trendScore1={data2.trendScore1}
                                    trend2={data2.trend2} trendInd2={data2.trendInd2} trendScore2={data2.trendScore2}
                                    trend3={data2.trend3} trendInd3={data2.trendInd3} trendScore3={data2.trendScore3}
                                    summary1={data2.summary1} summaryvalue1={data2.summaryvalue1}
                                    summary2={data2.summary2} summaryvalue2={data2.summaryvalue2}
                                    chart={renderChart("composedchart", data2.chartwidth, data2.gdata)}
                                />
                            ))}
                        </div>
                    </Box>
                </Flex>
            </Flex>

            <div className="max-w-2xl">
                    <RHBar />
                </div>

        </>
    )
}

export default PositionMain1;
