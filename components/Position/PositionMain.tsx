


import React from "react";
import {Box, Center, Grid, GridItem, SimpleGrid, Text, Wrap, WrapItem} from "@chakra-ui/react";
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
import {Footer} from "@/components/Layout";

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
        }
    ]
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
            return (
                <ComposedChartWgt />
            )
        case 'linearchartonemetric':
            return (
                <LinearChartOneMetric />
            )
        case 'linearchartmultimetric':
            return (
                <LinearChartMultiMetric />
            )
    }
};

const PositionMain = () => {
    return (
        <>
            <Grid
                h='200px'
                templateRows='repeat(3, 1fr)'
                templateColumns='repeat(1, 1fr)'
                gap={2} minWidth={"25%"} minHeight={"25%"}>
                <GridItem colSpan={1} rowSpan={1}>
                    <Box bg='blue.600'>
                        <Center display='flex' my='1.2'>  <Text fontSize={{ base: '18px', md: '22px', lg: '26px' }} color={"white"} fontWeight={"bold"}> WMRMC IS CURRENTLY POSITIONED AS A EASTERN REGION MARKET LEADER </Text></Center>
                    </Box>
                </GridItem>
                <GridItem colSpan={1} rowSpan={1}>
                    <Wrap>
                        <WrapItem width={"32%"} minWidth={"340px"}>
                            <Box width="100%"  p={"5"}>
                                <SCPositioncPct
                                    title ="Today"
                                    value={"80"}
                                    region={"Eastern region"}
                                    circleSize={"3.2em"}
                                    circleThickness={"12px"}
                                />
                            </Box>
                        </WrapItem>
                        <WrapItem width={"32%"} minWidth={"340px"}>
                            <Box width="100%"  p={"5"}>
                                <SCSamePosPct value={"42"} region={"Eastern region"}/>
                            </Box>
                        </WrapItem>
                        <WrapItem width={"32%"} minWidth={"340px"}>
                            <Box width="100%"  p={"5"}>
                                <SCMvOutNbr value={"7"} region={"Eastern region"}/>
                            </Box>
                        </WrapItem>
                    </Wrap>
                </GridItem>
                <GridItem colSpan={1} rowSpan={1}>
                    <Wrap spacing='20px'>
                        <WrapItem width={"48%"}>
                            <Box width="100%">
                                {cdata.position.filter(x => x.card == "1").map((data2) => (
                                    <CardTrendQtly key={data2.card}
                                                   headerlabel={"Banner University Market Position : QUARTERLY TRENDLINE"}
                                                   headervalue={data2.headervalue}
                                                   subheaderlabel={data2.subheaderlabel}
                                                   subheadervalue={data2.subheadervalue} tooltip={data2.tooltip}
                                                   trend1={data2.trend1} trendInd1={data2.trendInd1}
                                                   trendScore1={data2.trendScore1}
                                                   trend2={data2.trend2} trendInd2={data2.trendInd2}
                                                   trendScore2={data2.trendScore2}
                                                   trend3={data2.trend3} trendInd3={data2.trendInd3}
                                                   trendScore3={data2.trendScore3}
                                                   summary1={data2.summary1} summaryvalue1={data2.summaryvalue1}
                                                   summary2={data2.summary2} summaryvalue2={data2.summaryvalue2}
                                                   chart={renderChart("linearchartonemetric", data2.chartwidth, data2.gdata)}
                                                   width={""} height={""}                                />
                                ))}
                            </Box>
                        </WrapItem>
                        <WrapItem width={"48%"}>
                            <Box width="100%">
                                {cdata.position.filter(x => x.card == "1").map((data2) => (
                                    <CardTrendDaily key={data2.card}
                                                    headerlabel={"Banner University Market Position : DAILY TRENDLINE"}
                                                    headervalue={data2.headervalue}
                                                    subheaderlabel={data2.subheaderlabel}
                                                    subheadervalue={data2.subheadervalue} tooltip={data2.tooltip}
                                                    trend1={data2.trend1} trendInd1={data2.trendInd1}
                                                    trendScore1={data2.trendScore1}
                                                    trend2={data2.trend2} trendInd2={data2.trendInd2}
                                                    trendScore2={data2.trendScore2}
                                                    trend3={data2.trend3} trendInd3={data2.trendInd3}
                                                    trendScore3={data2.trendScore3}
                                                    summary1={data2.summary1} summaryvalue1={data2.summaryvalue1}
                                                    summary2={data2.summary2} summaryvalue2={data2.summaryvalue2}
                                                    chart={renderChart("composedchart", data2.chartwidth, data2.gdata)}
                                                    width={""} height={""}                                />
                                ))}
                            </Box>
                        </WrapItem>
                    </Wrap>
                </GridItem>
                <GridItem colSpan={1} rowSpan={1}>
                    <Wrap spacing='20px'>
                        <WrapItem  width={"48%"}>
                            <Box width="100%">
                                {cdata.position.filter(x => x.card == "1").map((data2) => (
                                    <Card key={data2.card}
                                          headerlabel={"Banner University Market Position"} headervalue={data2.headervalue}
                                          subheaderlabel={data2.subheaderlabel} subheadervalue={data2.subheadervalue}
                                          tooltip={data2.tooltip}
                                          trend1={data2.trend1} trendInd1={data2.trendInd1} trendScore1={data2.trendScore1}
                                          trend2={data2.trend2} trendInd2={data2.trendInd2} trendScore2={data2.trendScore2}
                                          trend3={data2.trend3} trendInd3={data2.trendInd3} trendScore3={data2.trendScore3}
                                          summary1={data2.summary1} summaryvalue1={data2.summaryvalue1}
                                          summary2={data2.summary2} summaryvalue2={data2.summaryvalue2}
                                          chart={renderChart(data2.cardtype, data2.chartwidth, data2.gdata)} width={""}
                                          height={""}                                />
                                ))}
                            </Box>
                        </WrapItem>
                        <WrapItem width={"48%"}>
                            <Box width="100%">
                                {cdata.position.filter(x => x.card == "1").map((data2) => (
                                    <CardTrendAnnual key={data2.card}
                                                     headerlabel={"Banner University Market Position : ANNUAL TRENDLINE"}
                                                     headervalue={data2.headervalue}
                                                     subheaderlabel={data2.subheaderlabel}
                                                     subheadervalue={data2.subheadervalue} tooltip={data2.tooltip}
                                                     trend1={data2.trend1} trendInd1={data2.trendInd1}
                                                     trendScore1={data2.trendScore1}
                                                     trend2={data2.trend2} trendInd2={data2.trendInd2}
                                                     trendScore2={data2.trendScore2}
                                                     trend3={data2.trend3} trendInd3={data2.trendInd3}
                                                     trendScore3={data2.trendScore3}
                                                     summary1={data2.summary1} summaryvalue1={data2.summaryvalue1}
                                                     summary2={data2.summary2} summaryvalue2={data2.summaryvalue2}
                                                     chart={renderChart("linearchartmultimetric", data2.chartwidth, data2.gdata)}
                                                     width={""} height={""}                                />
                                ))}
                            </Box>
                        </WrapItem>
                    </Wrap>
                </GridItem>
                <GridItem colSpan={1} rowSpan={1}>
                    <Footer/>
                </GridItem>
            </Grid>
        </>
    )
}
export default PositionMain;