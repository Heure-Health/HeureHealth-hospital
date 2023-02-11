import React from "react";
import {Box, Center, Grid, GridItem, Text, Wrap, WrapItem} from "@chakra-ui/react";
import HomePosition from "./HomePosition";
import HomePerformance from "./HomePerformance";
import HomePressures from "./HomePressures";
import HomeAdvantages from "./HomeAdvantages";
import {Footer} from "../../Layouts";

const HomeMain = () => {
    return (
        <>
            <Grid textAlign={"right"}
                  templateColumns='repeat(1, 1fr)'
                  gap={"1"} minWidth={"25%"} minHeight={"25%"}>
                <GridItem colSpan={1} rowSpan={1}>
                    <Box bg='white'>
                        <Center display='flex' my='1.2'> <Text fontSize={{base: '18px', md: '22px', lg: '26px'}}
                                                               color={"black"} fontWeight={"bold"}> Hello,
                            Peter! </Text></Center>
                    </Box>
                    <Box bg='white'>
                        <Center display='flex' my='1.2'> <Text fontSize={{base: '12px', md: '14px', lg: '16px'}}
                                                               color={"black"}> What would you like to do today? </Text></Center>
                    </Box>
                </GridItem>
                <GridItem colSpan={1} rowSpan={1}>
                    <Wrap>
                        <WrapItem width={"40%"} minWidth={"275px"}>
                            <Box width="100%" p={"5"}>
                                <HomePosition
                                    title="Today"
                                    value={"80"}
                                    region={"Eastern region"}
                                    circleSize={"3.2em"}
                                    circleThickness={"12px"}
                                />
                            </Box>
                        </WrapItem>
                        <WrapItem width={"40%"} minWidth={"275px"}>
                            <Box width="100%" p={"5"}>
                                <HomeAdvantages value={"42"} region={"Eastern region"}/>
                            </Box>
                        </WrapItem>
                        <WrapItem width={"40%"} minWidth={"275px"}>
                            <Box width="100%" p={"5"}>
                                <HomePressures value={"7"} region={"Eastern region"}/>
                            </Box>
                        </WrapItem>
                        <WrapItem width={"40%"} minWidth={"275px"}>
                            <Box width="100%" p={"5"}>
                                <HomePerformance value={"7"} region={"Eastern region"}/>
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
export default HomeMain;