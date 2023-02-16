import React from "react";
import {Box, Center, Grid, GridItem, Text, Wrap, WrapItem} from "@chakra-ui/react";
import {Footer} from "../../layouts";
import HomeWidget from "../../components/home/HomeWidget";

const HomeMain = () => {
    return (
        <>
            <Grid templateColumns='repeat(1, 1fr)' gap={"1"} minWidth={"25%"} minHeight={"25%"}  bg='#F2F2F2'>
                <GridItem colSpan={1} rowSpan={1}>
                    <Box bg='#F2F2F2'>
                        <Center display='flex' my='1.2'> <Text fontSize={{base: '18px', md: '22px', lg: '26px'}}
                                                               color={"black"} fontWeight={"bold"}> Hello,
                            Peter! </Text></Center>
                    </Box>
                    <Box bg='#F2F2F2'>
                        <Center display='flex' my='1.2'> <Text fontSize={{base: '12px', md: '14px', lg: '16px'}}
                                                               color={"black"}> What would you like to do today? </Text></Center>
                    </Box>
                </GridItem>
                <GridItem colSpan={1} rowSpan={1}>
                    <Wrap>
                        <WrapItem width={"40%"} minWidth={"275px"} height={"15em"} paddingLeft={"32"}>
                            <HomeWidget
                                marketTypeText = "Market Position"
                                scoreStatNum = "5.398"
                                scoreStatText = "Today's Score"
                                changeScoreType = "increase"
                                changeScoreStatHelpNum = "+2%"
                                changeScoreStatText = "since last quarter"
                            />
                        </WrapItem>
                        <WrapItem width={"40%"} minWidth={"275px"} height={"15em"} paddingLeft={"32"}>
                            <HomeWidget
                                marketTypeText = "Market Advantages"
                                scoreStatNum = "2.749"
                                scoreStatText = "Today's Score"
                                changeScoreType = "decrease"
                                changeScoreStatHelpNum = "-2%"
                                changeScoreStatText = "since last quarter"
                            />
                        </WrapItem>
                        <WrapItem width={"40%"} minWidth={"275px"} height={"15em"} paddingLeft={"32"}>
                            <HomeWidget
                                marketTypeText = "Market Pressures"
                                scoreStatNum = "4.176"
                                scoreStatText = "Today's Score"
                                changeScoreType = "increase"
                                changeScoreStatHelpNum = "+15%"
                                changeScoreStatText = "since last quarter"
                            />
                        </WrapItem>
                        <WrapItem width={"40%"} minWidth={"275px"} height={"15em"} paddingLeft={"32"}>
                            <HomeWidget
                                marketTypeText = "Market Performance"
                                scoreStatNum = "5.739"
                                scoreStatText = "Today's Score"
                                changeScoreType = "decrease"
                                changeScoreStatHelpNum = "-5%"
                                changeScoreStatText = "since last quarter"
                            />
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
export default HomeMain;