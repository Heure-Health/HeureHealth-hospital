import React from "react";
import {Box, Center, Flex, Grid, GridItem, Text, Wrap, WrapItem} from "@chakra-ui/react";
import ComposedChartWgt from "../../components/rechart/BarLineComposedWidget";
import DonutWidget from "../../components/common/DonutWidget";
import SnapshotWidget from "./overall/SnapshotWidget";
import {Footer} from "../../layouts";
import MarketPositionWidget from "./overall/MarketPositionWidget";
import QuartelyTrendlineRegionalWidget from "./overall/QuartelyTrendlineRegionalWidget";
import TooltipsData from "../../services/data/TooltipsData";
import SpeedometerWidget from "../../components/rechart/SpeedometerWidget";
import ServerData from "../../services/data/ServerData";
import PieChartWidget from "../../components/rechart/PieChartWidget";
import CustomShapeBarChartWidget from "../../components/rechart/CustomShapeBarChartWidget";
import AnnualTrendlineRegionalWidget from "./overall/AnnualTrendlineRegionalWidget";
import CompetitorPresencePieWidget from "./overall/CompetitorPresencePieWidget";

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

const {
    annualTrendlineClassification,
    annualTrendlineRegionData
} = ServerData.positionPage.annualTrendlineRegional;

const {
    competitorPresenceHeaderLabel,
    competitorPresenceHeaderValue,
    competitorPresenceData
} = ServerData.positionPage.competitorPresence;

const {
    tierDistributionHeaderLabel,
    tierDistributionHeaderValue,
    tierDistributionData
} = ServerData.positionPage.tierDistribution

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

const ATrendwrapItemWidth = [
    "98%",
    "98%",
    "99%",
    "99%",
    "65.4%",
];

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
                            <WrapItem height={"22.7em"}>
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
                            <WrapItem width={marketPositionWidgetWidth} minWidth={marketPositionWidgetWidth} alignContent={"center"} height={"22.7em"} borderWidth={2}>
                                <Center height={"22.5em"} bgColor={"#FFFFFF"}>
                                    <CompetitorPresencePieWidget
                                        pieChartHeight={295}
                                        width={"31em"}
                                        height={"23.5em"}
                                        tooltipText={tooltipMarketPosition}
                                        headerValueFontColor={"black"}
                                        headerValueFontSize={"0.85em"}
                                        headerLabel={competitorPresenceHeaderLabel}
                                        headerValue={competitorPresenceHeaderValue}
                                        pieChartObject={
                                            <PieChartWidget
                                                pieDataKey={"value"}
                                                pieRadius= {110}
                                                chartDataColor={['#FA897B', '#60B7C0','#FA138B', '#60B1D0','#AA800B', '#639DC1','#FA858D', '#68B1D0', '#23A4A0']}
                                                chartData= {competitorPresenceData}
                                            />
                                        }
                                    />
                                </Center>
                            </WrapItem>
                        </Wrap>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1} bgColor={params.pageBgColor} borderWidth={0}>
                        <Wrap>
                            <WrapItem width={QTrendwrapItemWidth} minWidth={QTrendwrapItemWidth} alignContent={"center"}>
                                <Box width="100%">
                                    <QuartelyTrendlineRegionalWidget
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
                    <GridItem colSpan={1} rowSpan={1} bgColor={params.pageBgColor} borderWidth={0}>
                        <Wrap align={"center"} width={"100%"}>
                            <WrapItem width={marketPositionWidgetWidth} minWidth={marketPositionWidgetWidth} alignContent={"center"} borderWidth={2}>
                                <Center height={"27.8em"} bgColor={"#FFFFFF"}>
                                    <CompetitorPresencePieWidget
                                        pieChartHeight={325}
                                        width={"31em"}
                                        height={"23.5em"}
                                        tooltipText={tooltipMarketPosition}
                                        headerValueFontColor={"black"}
                                        headerValueFontSize={"0.85em"}
                                        headerLabel={tierDistributionHeaderLabel}
                                        headerValue={tierDistributionHeaderValue}
                                        pieChartObject={
                                            <PieChartWidget
                                                pieDataKey={"value"}
                                                pieRadius= {100}
                                                chartDataColor={['#B6D19F', '#CDE0BE','#E7F7D5', '#FAD098','#FCB76C', '#FF9B5D','#E88566', '#E57451', '#E05E44']}
                                                chartData= {tierDistributionData}
                                            />
                                        }
                                    />
                                </Center>
                            </WrapItem>
                            <WrapItem width={ATrendwrapItemWidth} minWidth={ATrendwrapItemWidth} alignContent={"center"} borderWidth={2}>
                                <Box width="100%">
                                    <AnnualTrendlineRegionalWidget
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
                                        headerLabel={"West Region Annually Trendline vs. Regional Average"}
                                        footerLabel={"Your Annually Trendline can be classified as :"}
                                        footerValue={annualTrendlineClassification}
                                        barLineComposedWidgetObject={
                                            <CustomShapeBarChartWidget
                                                chartWidth = {"100%"}
                                                barColor = {"#60B7C0"}
                                                barSize = {70}
                                                lineColor = {"#EB8871"}
                                                barLegendName = {"Annually Scores"}
                                                lineLegandName = {"Average"}
                                                xAxisDataKey = {"year"}
                                                barDataKey = {"year"}
                                                lineDataKey = {"avg"}
                                                chartData = {annualTrendlineRegionData} />
                                        }
                                    />
                                </Box>
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