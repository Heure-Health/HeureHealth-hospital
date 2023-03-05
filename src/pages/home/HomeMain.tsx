import React from "react";
import {Box, Center, Flex, Grid, GridItem, Text, Wrap, WrapItem} from "@chakra-ui/react";
import {Footer} from "../../layouts";
import HomeWidget from "../../components/home/HomeWidget";
import ServerData from "../../services/data/ServerData";

const {userName} = ServerData.loginDetails;
const { positionScore,
        positionChangeType,
        positionChangeValue,
        advantagesScore,
        advantagesChangeType,
        advantagesChangeValue,
        pressuresScore,
        pressuresChangeType,
        pressuresChangeValue,
        performancesScore,
        performancesChangeType,
        performancesChangeValue} = ServerData.home;

const HomeMain = (params) => {
    return (
        <>
            <Box width={"100%"} bgColor={params.pageBgColor} alignItems={"center"}>
                <Flex flexDirection={"column"}>
                    <Center display='flex' my='1.2'> <Text fontSize={{base: '18px', md: '22px', lg: '26px'}}
                                                           color={"black"} fontWeight={"bold"}> Hello,
                        {userName}! </Text></Center>
                </Flex>
                <Flex flexDirection={"column"}>
                    <Center display='flex' my='1.2'> <Text fontSize={{base: '12px', md: '14px', lg: '16px'}}
                                                           color={"black"}> Where would you like to start today? </Text></Center>
                </Flex>
                <Flex direction="column" color="white">
                    <Center>
                        <Grid templateColumns='repeat(1, 1fr)'>
                            <GridItem colSpan={1} rowSpan={1}>
                                <Wrap>
                                    <WrapItem >
                                        <HomeWidget
                                            marketTypeText = "Market Position"
                                            scoreStatNum ={positionScore}
                                            scoreStatText = "Today's Score"
                                            changeScoreType ={positionChangeType}
                                            changeScoreStatHelpNum ={positionChangeValue}
                                            changeScoreStatText = "since last quarter"
                                            navigationUrl = "/position"
                                        />
                                    </WrapItem>
                                    <WrapItem >
                                        <Box height={"14"}></Box>
                                    </WrapItem>
                                    <WrapItem>
                                        <HomeWidget
                                            marketTypeText = "Market Advantages"
                                            scoreStatNum ={advantagesScore}
                                            scoreStatText = "Today's Score"
                                            changeScoreType ={advantagesChangeType}
                                            changeScoreStatHelpNum ={advantagesChangeValue}
                                            changeScoreStatText = "since last quarter"
                                            navigationUrl = "/advantages"
                                        />
                                    </WrapItem>
                                </Wrap>
                            </GridItem>
                            <GridItem colSpan={1} rowSpan={1}>
                                <Box height={"8"}></Box>
                            </GridItem>
                            <GridItem colSpan={1} rowSpan={1}>
                                <Wrap>
                                    <WrapItem>
                                        <HomeWidget
                                            marketTypeText = "Market Pressures"
                                            scoreStatNum ={pressuresScore}
                                            scoreStatText = "Today's Score"
                                            changeScoreType ={pressuresChangeType}
                                            changeScoreStatHelpNum ={pressuresChangeValue}
                                            changeScoreStatText = "since last quarter"
                                            navigationUrl = "/pressures"
                                        />
                                    </WrapItem>
                                    <WrapItem >
                                        <Box height={"14"}></Box>
                                    </WrapItem>
                                    <WrapItem>
                                        <HomeWidget
                                            marketTypeText = "Market Performance"
                                            scoreStatNum ={performancesScore}
                                            scoreStatText = "Today's Score"
                                            changeScoreType = {performancesChangeType}
                                            changeScoreStatHelpNum ={performancesChangeValue}
                                            changeScoreStatText = "since last quarter"
                                            navigationUrl = "/performance"
                                        />
                                    </WrapItem>
                                </Wrap>
                            </GridItem>
                        </Grid>
                    </Center>
                </Flex>
                <Footer pageBgColor = {params.pageBgColor} />
            </Box>
        </>
    )
}
export default HomeMain;