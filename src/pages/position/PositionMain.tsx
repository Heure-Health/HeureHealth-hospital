import React from "react";
import {Box, Center, Flex, Grid, GridItem, Text, Wrap, WrapItem} from "@chakra-ui/react";
import RLineChart from "../../components/rechart/RLineChart";
import ComposedChartWgt from "../../components/rechart/ComposedChart";
import LinearChartMultiMetric from "../../components/rechart/LinearChartMultiMetric";
import LinearChartOneMetric from "../../components/rechart/LinearChartOneMetric";
import DonutWidget from "../../components/common/DonutWidget";
import SnapshotWidget from "./overall/SnapshotWidget";
import CardTrendAnnual from "../../components/container/trendcard/CardTrendAnnual";
import CardTrendQtly from "../../components/container/trendcard/CardTrendQtly";
import {Footer} from "../../layouts";
import MarketPositionWidget from "./overall/MarketPositionWidget";
import RGuage from "../../components/rechart/RGuage";
import TrendlineRegionalWidget from "./overall/TrendlineRegionalWidget";

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
            "chartwidth": 400,
            "gdata": {
                width: 325,
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

const wrapItemWidth = [
    "49%",
    "95%",
    "100%",
    "51%",
    "37%",
];

const QTrendwrapItemWidth = [
    "98%",
    "98%",
    "99%",
    "97%",
    "99.4%",
];

const renderChart = function (name, gdata) {
    switch (name) {
        case 'line1':
            return (
                <RLineChart width={gdata.chartwidth} data={gdata.data}/>
            )
        case 'linearchartonemetric':
            return (
                <LinearChartOneMetric/>
            )
        case 'linearchartmultimetric':
            return (
                <LinearChartMultiMetric/>
            )
    }
};

const PositionMain = (params) => {
    return (
        <>
            <Box width={"100%"} bgColor={params.pageBgColor} alignItems={"center"}>
                <Grid
                    h='200px'
                    templateRows='repeat(3, 1fr)'
                    templateColumns='repeat(1, 1fr)'
                    gap={2} minWidth={"25%"} minHeight={"25%"}>
                    <GridItem colSpan={1} rowSpan={1}>
                        <Box bg='#F2F2F2'>
                            <Center display='flex' my='3'> <Text fontSize={{base: '18px', md: '22px', lg: '26px'}}
                                                                   color={"blue.600"} fontWeight={"bold"}> WMRMC IS CURRENTLY
                                POSITIONED AS A WESTERN REGION MARKET LEADER </Text></Center>
                        </Box>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1} bgColor={params.pageBgColor} borderWidth={0}>
                        <Wrap align={"center"} width={"100%"}>
                            <WrapItem width={wrapItemWidth} minWidth={wrapItemWidth} alignContent={"center"}>
                                <Center>
                                    {cdata.position.filter(x => x.card == "1").map((data2) => (
                                        <MarketPositionWidget
                                                              headerlabel={"West Region Market Position:"}
                                                              headervalue={data2.headervalue}
                                                              subheaderlabel={data2.subheaderlabel} subheadervalue={data2.subheadervalue}
                                                              tooltip={data2.tooltip}
                                                              pieChartHeight={250}
                                                              width={"32em"}
                                                              height={"23em"}
                                                              pieChartObject={<RGuage width={data2.chartwidth} chartValue={data2.gdata.chartValue} colorData={data2.gdata.data}/>}
                                        />
                                    ))}
                                </Center>
                            </WrapItem>
                            <WrapItem width={wrapItemWidth} minWidth={wrapItemWidth} height={"22.7em"} paddingLeft={1}>
                                <Flex direction={"column"}>
                                    <Box width="100%" paddingRight={3}>
                                        <DonutWidget
                                            value={"80"}
                                            circleSize={"3.0em"}
                                            circleThickness={"0.2em"}
                                            circleTextFontSize ={{ base: '24px', md: '30px', lg: '36px'}}
                                            circleTextFontColor={"white"}
                                            widgetHeight={"22.7em"}
                                            widgetWidth={"10em"}
                                            widgetBgColor={"#AC7C70"}
                                            widgetCircleBgColor={"#F1D0BF"}
                                            widgetCircleTextFontColor={"#FFFFFF"}
                                            widgetText = "West Region competitors are ahead of your current Market Position giving you potential to capitalize your markets."
                                            widgetTextFontSize={{base: '10px', md: '12px', lg: '13px'}}
                                        />
                                    </Box>
                                </Flex>
                                <Flex direction={"column"}>
                                    <Flex direction={"row"}>
                                        <Box width="100%">
                                            <SnapshotWidget
                                                value={"1.2%"}
                                                valueFontSize={{base: '26px', md: '30px', lg: '36px'}}
                                                valueFontColor={"white"}
                                                widgetText = "of Regional competitors that entered your current tier within the last rolling quarter."
                                                widgetHeight={"10.8em"}
                                                widgetWidth={"10.0em"}
                                                widgetBgColor={"#EB8871"}
                                                widgetTextFontColor={"white"}
                                                widgetTextFontSize={{base: '10px', md: '10px', lg: '12px'}}
                                                widgetToolTip={"There are 9 Position tiers in all. Three main tiers of Leader, Challenger, Aspirant are each further separated into 3."}
                                            />
                                        </Box>
                                        <Box width="100%" paddingLeft={"3.5"} paddingBottom={"3.5"}>
                                            <SnapshotWidget
                                                value={"0.256%"}
                                                valueFontSize={{base: '26px', md: '30px', lg: '36px'}}
                                                valueFontColor={"white"}
                                                widgetText = "of your Regional competitors that left your current tier to move up tier(s)."
                                                widgetHeight={"10.8em"}
                                                widgetWidth={"10.0em"}
                                                widgetBgColor={"#EB8871"}
                                                widgetTextFontColor={"white"}
                                                widgetTextFontSize={{base: '10px', md: '10px', lg: '12px'}}
                                                widgetToolTip={"There are 9 Position tiers in all. Three main tiers of Leader, Challenger, Aspirant are each further separated into 3."}
                                            />
                                        </Box>
                                    </Flex>
                                    <Flex direction={"row"}>
                                        <Box width="100%">
                                            <SnapshotWidget
                                                value={"Pacific"}
                                                valueFontSize={{base: '26px', md: '30px', lg: '36px'}}
                                                valueFontColor={"#AC7C70"}
                                                widgetText = "Division with your closet Regional competitor, based on score differential."
                                                widgetHeight={"10.8em"}
                                                widgetWidth={"10.0em"}
                                                widgetBgColor={"#F1D0BF"}
                                                widgetTextFontColor={"#AC7C70"}
                                                widgetTextFontSize={{base: '10px', md: '10px', lg: '12px'}}
                                                widgetToolTip={""}
                                            />
                                        </Box>
                                        <Box width="100%" paddingLeft={"3.5"} paddingBottom={"3.5"}>
                                            <SnapshotWidget
                                                value={"-0.007"}
                                                valueFontSize={{base: '26px', md: '30px', lg: '36px'}}
                                                valueFontColor={"#AC7C70"}
                                                widgetText = "Score differential of your closest competitor."
                                                widgetHeight={"10.8em"}
                                                widgetWidth={"10.0em"}
                                                widgetBgColor={"#F1D0BF"}
                                                widgetTextFontColor={"#AC7C70"}
                                                widgetTextFontSize={{base: '10px', md: '10px', lg: '12px'}}
                                                widgetToolTip={""}
                                            />
                                        </Box>
                                    </Flex>
                                </Flex>
                            </WrapItem>
                        </Wrap>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1} bgColor={params.pageBgColor} borderWidth={0}>
                        <Wrap>
                            <WrapItem width={QTrendwrapItemWidth} minWidth={QTrendwrapItemWidth} alignContent={"center"}>
                                <Box width="100%">
                                    {cdata.position.filter(x => x.card == "1").map((data2) => (
                                        <TrendlineRegionalWidget key={data2.card}
                                                                 headerlabel={"West Region Quarterly Trendline vs. Regional Average"}
                                                                 tooltip={"tooltips Trendline vs. Regional"}
                                                                 summary={"Your Quarterly Trendline can be classified as :"}
                                                                 summaryValue={"Erratic"}
                                                                 chart={<ComposedChartWgt/>}
                                                                 width={""}
                                                                 height={""}
                                        />
                                    ))}
                                </Box>
                            </WrapItem>
                        </Wrap>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                        <Wrap spacing='20px'>
                            <WrapItem width={"48%"}  minWidth={"410px"}>
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
                                                         chart={renderChart("linearchartmultimetric", data2.gdata)}
                                                         width={""} height={""}/>
                                    ))}
                                </Box>
                            </WrapItem>
                        </Wrap>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                        <Wrap spacing='20px'>
                            <WrapItem width={"48%"} minWidth={"410px"}>
                                <Flex direction={"column"}>
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
                                                           chart={renderChart("linearchartonemetric", data2.gdata)}
                                                           width={""} height={""}/>
                                        ))}
                                    </Box>
                                </Flex>
                            </WrapItem>
                        </Wrap>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                        <Footer
                            pageBgColor={params.pageBgColor}
                        />
                    </GridItem>
                </Grid>
            </Box>
        </>
    )
}
export default PositionMain;