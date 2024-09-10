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
            <Box width={"100%"} alignItems={"center"} background={params.pageBgColor}>
                <Flex flexDirection={"column"} paddingBottom={3}>
                    <Center display='flex' my='1.2'> <Text fontSize={{base: '24px', md: '26px', lg: '28px'}}
                                                           color={"#404040"} fontWeight={"bold"}> Hello, {' '}{userName}!</Text></Center>
                </Flex>
                <Flex flexDirection={"column"} paddingBottom={10}>
                    <Center display='flex' my='1.2'> <Text fontSize={{base: '12px', md: '14px', lg: '16px'}}
                                                           color={"#404040"}> Where would you like to start today? </Text></Center>
                </Flex>
                <Flex direction="column" color="white">
                    <Center>
                        <Grid templateColumns='repeat(1, 1fr)'>
                            <GridItem colSpan={1} rowSpan={1}>
                                <Wrap>
                                    <WrapItem >
                                        <HomeWidget
                                            marketTypeText = "Position"
                                            scoreStatNum ={positionScore}
                                            scoreStatText = "Today's Score"
                                            changeScoreType ={positionChangeType}
                                            changeScoreStatHelpNum ={positionChangeValue}
                                            changeScoreStatText = "since last quarter"
                                            navigationUrl = "/position"
                                            backgroundColor='linear(to-r, green.200, pink.500)'
                                        />
                                    </WrapItem>
                                    <WrapItem >
                                        <Box height={"20"}></Box>
                                    </WrapItem>
                                    <WrapItem>
                                        <HomeWidget
                                            marketTypeText = "Advantages"
                                            scoreStatNum ={advantagesScore}
                                            scoreStatText = "Today's Score"
                                            changeScoreType ={advantagesChangeType}
                                            changeScoreStatHelpNum ={advantagesChangeValue}
                                            changeScoreStatText = "since last quarter"
                                            navigationUrl = "/advantages"
                                            backgroundColor='linear(to-r, green.200, pink.500)'
                                        />
                                    </WrapItem>
                                </Wrap>
                            </GridItem>
                            <GridItem colSpan={1} rowSpan={1} paddingTop={8}>
                                <Wrap>
                                    <WrapItem>
                                        <HomeWidget
                                            marketTypeText = "Pressures"
                                            scoreStatNum ={pressuresScore}
                                            scoreStatText = "Today's Score"
                                            changeScoreType ={pressuresChangeType}
                                            changeScoreStatHelpNum ={pressuresChangeValue}
                                            changeScoreStatText = "since last quarter"
                                            navigationUrl = "/pressures"
                                            backgroundColor='linear(to-r, green.200, pink.500)'
                                        />
                                    </WrapItem>
                                    <WrapItem >
                                        <Box height={"14"}></Box>
                                    </WrapItem>
                                    <WrapItem>
                                        <HomeWidget
                                            marketTypeText = "Performance"
                                            scoreStatNum ={performancesScore}
                                            scoreStatText = "Today's Score"
                                            changeScoreType = {performancesChangeType}
                                            changeScoreStatHelpNum ={performancesChangeValue}
                                            changeScoreStatText = "since last quarter"
                                            navigationUrl = "/performance"
                                            backgroundColor='linear(to-r, green.200, pink.500)'
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