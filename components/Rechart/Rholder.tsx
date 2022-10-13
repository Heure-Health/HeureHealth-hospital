import React from "react";
import { Flex, Box, Text, Spacer, SimpleGrid } from "@chakra-ui/react";
//import Guage from "./Guage";
import RBar from "./RBar";
import RLine from "./RLineChart";
import RPieChart from "./RPieChart";
import RRadial from "./RRadial";
import ChartCard from "../Container/ChartCard";

export default function RHolder() {
    return (
        <>
            <SimpleGrid w="100%" columns={{ sm: 1, lg:2, xl:3 }} spacing="20px">
                {/* <Box m={4} w="100%" > <RBar /></Box>
                <Box m={4} w="100%" > <RLine /></Box>
                <Box m={4} w="100%" > <RPieChart /></Box> */}
                <ChartCard chart={ <RBar /> } />
                <ChartCard chart={<RLine />} />
                <ChartCard chart={<RRadial />} />
                <ChartCard chart={<RPieChart/>} />
            </SimpleGrid>
        </>
    );
}
