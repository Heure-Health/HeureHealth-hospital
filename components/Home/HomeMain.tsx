import React from "react";
import {Box, Grid, GridItem, Wrap, WrapItem} from "@chakra-ui/react";
import HomePosition from "./HomePosition";
import HomePerformance from "./HomePerformance";
import HomePressures from "./HomePressures";
import HomeAdvantages from "./HomeAdvantages";
import {Footer} from "@/components/Layout";

const HomeMain = () => {
    return (
        <>
            <Grid
                templateRows='repeat(3, 1fr)'
                templateColumns='repeat(1, 1fr)'
                gap={2} minWidth={"25%"} minHeight={"25%"}>
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