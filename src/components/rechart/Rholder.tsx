import React from "react";
import {SimpleGrid} from "@chakra-ui/react";
import RBar from "./RBar";
import RLine from "./RLineChart";
import RPieChart from "./RPieChart";
import RRadial from "./RRadial";
import ChartCard from "../container/ChartCard";

export default function RHolder() {
    return (
        <>
            <SimpleGrid w="100%" columns={{sm: 1, lg: 2, xl: 3}} spacing="20px">
                <ChartCard chart={<RBar/>} width={0} height={0} heading={""} explanation={""} summary={""}
                           indicator={""} indicatorvalue={0}/>
                <ChartCard chart={<RLine width={0} data={[]}/>} width={0} height={0} heading={""} explanation={""}
                           summary={""}
                           indicator={""} indicatorvalue={0}/>
                <ChartCard chart={<RRadial/>} width={0} height={0} heading={""} explanation={""} summary={""}
                           indicator={""} indicatorvalue={0}/>
                <ChartCard chart={<RPieChart/>} width={0} height={0} heading={""} explanation={""} summary={""}
                           indicator={""} indicatorvalue={0}/>
            </SimpleGrid>
        </>
    );
}
