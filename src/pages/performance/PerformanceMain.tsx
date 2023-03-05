import React from "react";
import {Box, Card, CardBody, Center, Grid, GridItem, Text,} from "@chakra-ui/react";

import {Footer} from "../../layouts";

const PerformanceMain = () => {return (
    <>
        <Grid gap={"16"}>
            <GridItem colSpan={1} rowSpan={1}>
                <Box bg='blue.600'>
                    <Center display='flex' my='1.2'> <Text fontSize={{base: '18px', md: '22px', lg: '26px'}} color={"white"} fontWeight={"bold"}>MARKET PERFORMANCE MAIN PAGE</Text></Center>
                </Box>
            </GridItem>
            <GridItem colSpan={1} rowSpan={1}>
                <Card>
                    <CardBody width={"100%"}  bgColor={"beige"}>
                        <Text fontSize={"4xl"}>Coming soon...</Text>
                    </CardBody>
                </Card>
            </GridItem>
            <GridItem colSpan={1} rowSpan={1}>
                <Footer/>
            </GridItem>
        </Grid>
    </>
)
}
export default PerformanceMain;