import React from "react";
import {Box, Center, Flex, Grid, GridItem, Text, Wrap, WrapItem} from "@chakra-ui/react";
import ComposedChartWgt from "../../components/rechart/BarLineComposedWidget";
import LinearChartMultiMetric from "../../components/rechart/LinearChartMultiMetric";
import LinearChartOneMetric from "../../components/rechart/LinearChartOneMetric";
import DonutWidget from "../../components/common/DonutWidget";
import SnapshotWidget from "./overall/SnapshotWidget";
import CardTrendAnnual from "../../components/container/trendcard/CardTrendAnnual";
import CardTrendQtly from "../../components/container/trendcard/CardTrendQtly";
import {Footer} from "../../layouts";
import MarketPositionWidget from "./overall/MarketPositionWidget";
import TrendlineRegionalWidget from "./overall/TrendlineRegionalWidget";
import TooltipsData from "../../services/data/TooltipsData";
import SpeedometerWidget from "../../components/rechart/SpeedometerWidget";
import ServerData from "../../services/data/ServerData";
import PieChartWidget from "../../components/rechart/PieChartWidget";

const { tooltipMarketPosition,
    //tooltipSpeedometer,
    tooltipSnapshotWidget1,
    tooltipSnapshotWidget2,
    tooltipTrendlineRegional} = TooltipsData.positionPage.overAllPage;

const {
    trendlineClassification,
    trendlineRegionData
    } = ServerData.positionPage.trendlineRegional;

const {
        marketScoreHeaderLabel,
        marketScoreHeaderValue,
        marketScoreHeureScore
    } = ServerData.positionPage.marketScore;

const marketScoreWidget = {
"details": [
    {
        name: 'Aspirant',
        value: 2,
        color: '#FA897B',
    },
    {
        name: 'Challenger',
        value: 2,
        color: '#FBC78D',
    },
    {
        name: 'Leader',
        value: 2,
        color: '#D0E6A5'
    }
    ]
}
const cdata = {
    "position": [
        {
            "card": "1",
            "cardtype": "guage",
            "headerlabel": "OVERALL MARKET POSITION",
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
            "headervalue": "LEADER"
        }
    ]
};

const snapShotWidgetWidth = [
    "49%",
    "95%",
    "48.5%",
    "43.5%",
    "32%",
];

const marketPositionWidgetWidth = [
    "49%",
    "95%",
    "48.5%",
    "43.5%",
    "33%",
];

const QTrendwrapItemWidth = [
    "98%",
    "98%",
    "99%",
    "99%",
    "99.4%",
];

const renderChart = function (name) {
    switch (name) {
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
                    gap={3} minWidth={"25%"} minHeight={"25%"}>
                    <GridItem colSpan={1} rowSpan={1}>
                        <Box bg='#F2F2F2'>
                            <Center display='flex' my='3'> <Text fontSize={{base: '18px', md: '22px', lg: '26px'}}
                                                                   color={"blue.600"} fontWeight={"bold"}> WMRMC IS CURRENTLY
                                POSITIONED AS A WESTERN REGION MARKET LEADER </Text></Center>
                        </Box>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1} bgColor={params.pageBgColor} borderWidth={0}>
                        <Wrap align={"center"} width={"100%"}>
                            <WrapItem width={marketPositionWidgetWidth} minWidth={marketPositionWidgetWidth} alignContent={"center"}>
                                <Center>
                                        <MarketPositionWidget
                                                              pieChartHeight={250}
                                                              width={"31em"}
                                                              height={"23.5em"}
                                                              scoreFontSize={"20px"}
                                                              scoreFontColor={"#000000"}
                                                              tooltipText={tooltipMarketPosition}
                                                              headerValueFontColor={"black"}
                                                              headerValueFontSize={"0.85em"}
                                                              headerLabel={marketScoreHeaderLabel}
                                                              headerValue={marketScoreHeaderValue}
                                                              scoreValue={marketScoreHeureScore}
                                                              pieChartObject={
                                                                <SpeedometerWidget
                                                                    width={465}
                                                                    colorData={marketScoreWidget.details}
                                                                    chartValue={marketScoreHeureScore}/>
                                                              }
                                        />
                                </Center>
                            </WrapItem>
                            <WrapItem width={snapShotWidgetWidth} minWidth={snapShotWidgetWidth} height={"22.7em"}>
                                <Flex direction={"column"} paddingRight={3}>
                                    <Box width="100%">
                                        <DonutWidget
                                            value={"80"}
                                            circleSize={"3.0em"}
                                            circleThickness={"0.2em"}
                                            circleTextFontSize ={{ base: '24px', md: '30px', lg: '36px'}}
                                            circleTextFontColor={"white"}
                                            widgetHeight={"22.3em"}
                                            widgetWidth={"9.5em"}
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
                                                widgetHeight={"10.65em"}
                                                widgetWidth={"9.5em"}
                                                widgetBgColor={"#EB8871"}
                                                widgetTextFontColor={"white"}
                                                widgetTextFontSize={{base: '10px', md: '10px', lg: '12px'}}
                                                widgetToolTip={""}
                                            />
                                        </Box>
                                        <Box width="100%" paddingLeft={"3.5"} paddingBottom={"3.5"}>
                                            <SnapshotWidget
                                                value={"0.256%"}
                                                valueFontSize={{base: '26px', md: '30px', lg: '36px'}}
                                                valueFontColor={"white"}
                                                widgetText = "of your Regional competitors that left your current tier to move up tier(s)."
                                                widgetHeight={"10.65em"}
                                                widgetWidth={"9.5em"}
                                                widgetBgColor={"#EB8871"}
                                                widgetTextFontColor={"white"}
                                                widgetTextFontSize={{base: '10px', md: '10px', lg: '12px'}}
                                                widgetToolTip={tooltipSnapshotWidget1}
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
                                                widgetHeight={"10.65em"}
                                                widgetWidth={"9.5em"}
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
                                                widgetHeight={"10.65em"}
                                                widgetWidth={"9.5em"}
                                                widgetBgColor={"#F1D0BF"}
                                                widgetTextFontColor={"#AC7C70"}
                                                widgetTextFontSize={{base: '10px', md: '10px', lg: '12px'}}
                                                widgetToolTip={tooltipSnapshotWidget2}
                                            />
                                        </Box>
                                    </Flex>
                                </Flex>
                            </WrapItem>
                            <WrapItem width={marketPositionWidgetWidth} minWidth={marketPositionWidgetWidth} alignContent={"center"} height={"22.7em"}>
                                <Center height={"22.5em"}  width={"25em"} bgColor={"#FFFFFF"}>
                                    <PieChartWidget/>
                                </Center>
                            </WrapItem>
                        </Wrap>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1} bgColor={params.pageBgColor} borderWidth={0}>
                        <Wrap>
                            <WrapItem width={QTrendwrapItemWidth} minWidth={QTrendwrapItemWidth} alignContent={"center"}>
                                <Box width="100%">
                                    <TrendlineRegionalWidget
                                         widgetBbColor={"#FFFFFF"}
                                         widgetWidth={"99.7%"}
                                         widgetHeight={""}
                                         childComponentWidth={"99.7%"}
                                         headerTextColor={"#000000"}
                                         headerTextSize={"0.85em"}
                                         footerTextColor={"gray.500"}
                                         footerTextSize={"1.0em"}
                                         footerHeight={"2.5em"}
                                         barLineComposedWidgetHeight={"22.7em"}
                                         tooltipText={tooltipTrendlineRegional}
                                         headerLabel={"West Region Quarterly Trendline vs. Regional Average"}
                                         footerLabel={"Your Quarterly Trendline can be classified as :"}
                                         footerValue={trendlineClassification}
                                         barLineComposedWidgetObject={
                                            <ComposedChartWgt
                                                chartWidth = {"100%"}
                                                barColor = {"#60B7C0"}
                                                barSize = {20}
                                                lineColor = {"#EB8871"}
                                                barLegendName = {"Quarterly Scores"}
                                                lineLegandName = {"Average"}
                                                xAxisDataKey = {"quarter"}
                                                barDataKey = {"score"}
                                                lineDataKey = {"avg"}
                                                chartData = {trendlineRegionData} />
                                        }
                                    />
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
                                                         chart={renderChart("linearchartmultimetric")}
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
                                                           chart={renderChart("linearchartonemetric")}
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