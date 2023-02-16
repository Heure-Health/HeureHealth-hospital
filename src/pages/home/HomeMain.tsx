import React from "react";
import {Box, Center, Flex, Grid, GridItem, Text, Wrap, WrapItem} from "@chakra-ui/react";
import {Footer} from "../../layouts";
import HomeWidget from "../../components/home/HomeWidget";

const HomeMain = () => {
    return (
        <>
            <Box width={"100%"} bgColor={"#F2F2F2"} alignItems={"center"}>
                <Flex flexDirection={"column"}>
                    <Center display='flex' my='1.2'> <Text fontSize={{base: '18px', md: '22px', lg: '26px'}}
                                                           color={"black"} fontWeight={"bold"}> Hello,
                        Peter! </Text></Center>
                </Flex>
                <Flex flexDirection={"column"}>
                    <Center display='flex' my='1.2'> <Text fontSize={{base: '12px', md: '14px', lg: '16px'}}
                                                           color={"black"}> What would you like to do today? </Text></Center>
                </Flex>
                <Flex direction="column" color="white">
                    <Center>
                        <Grid templateColumns='repeat(1, 1fr)'>
                            <GridItem colSpan={1} rowSpan={1}>
                                <Wrap>
                                    <WrapItem >
                                        <HomeWidget
                                            marketTypeText = "Market Position"
                                            scoreStatNum = "5.398"
                                            scoreStatText = "Today's Score"
                                            changeScoreType = "increase"
                                            changeScoreStatHelpNum = "+2%"
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
                                            scoreStatNum = "2.749"
                                            scoreStatText = "Today's Score"
                                            changeScoreType = "decrease"
                                            changeScoreStatHelpNum = "-2%"
                                            changeScoreStatText = "since last quarter"
                                            navigationUrl = "/advantage"
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
                                            scoreStatNum = "4.176"
                                            scoreStatText = "Today's Score"
                                            changeScoreType = "increase"
                                            changeScoreStatHelpNum = "+15%"
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
                                            scoreStatNum = "5.739"
                                            scoreStatText = "Today's Score"
                                            changeScoreType = "decrease"
                                            changeScoreStatHelpNum = "-5%"
                                            changeScoreStatText = "since last quarter"
                                            navigationUrl = "/performance"
                                        />
                                    </WrapItem>
                                </Wrap>
                            </GridItem>
                        </Grid>
                    </Center>
                </Flex>
                <Footer/>
            </Box>
        </>
    )
}
export default HomeMain;