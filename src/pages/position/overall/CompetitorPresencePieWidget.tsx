import React, {ReactNode} from "react";
import {
    Box,
    Divider,
    Flex,
    Heading,
    IconButton,
    Text
} from "@chakra-ui/react";
import {AddIcon} from "@chakra-ui/icons";
import ToolTipWidget from "../../../components/common/ToolTipWidget";

type Params = {
    width: string;
    height: string;
    headerLabel: string;
    headerValue: string;
    headerValueFontSize: string;
    headerValueFontColor: string;
    tooltipText: string;
    pieChartHeight: number;
    pieChartObject: ReactNode;
};
const CompetitorPresencePieWidget = (params: Params) => {
        const {width, height, headerLabel, headerValue, headerValueFontSize, headerValueFontColor, tooltipText, pieChartHeight, pieChartObject} = params;
    return (
        <>
            <Box w={width} h={height} shadow="lg" bg="white" borderWidth="2px" borderRadius="10px" minWidth={width}>
                <Flex width="100%" bg="white" p={2} height={"2em"}>
                    <Flex width={"100%"}>
                        <Heading as="h3" textAlign="center" fontSize={headerValueFontSize}>
                            <Flex>
                                <Text color="black">{headerLabel}</Text>
                                <Text pl="2" color={headerValueFontColor}>{headerValue}</Text>
                            </Flex>
                        </Heading>
                    </Flex>
                    <ToolTipWidget
                        tooltipText={tooltipText}
                        tooltipTextBGColor={"#000000"}
                        tooltipTextColor={"gray.100"}
                        tooltipSize={"1.25em"}
                        tooltipCircleBGColor={"grey"}
                        tooltipBGColor={"white"}
                    />
                </Flex>
                <Flex w="100%" height={pieChartHeight} bgColor={"white"} width={"100%"}>
                    {pieChartObject}
                </Flex>
                <Divider orientation='horizontal' h={"1em"}/>
                <Flex direction={"row-reverse"}>
                    <IconButton aria-label='View Details' icon={<AddIcon/>} boxSize={"1.5em"} fontSize={"md"} fontWeight={"bold"} variant='ghost'/>
                    <Box fontSize={"12px"} color={"#000000"}>
                        View detailed insights
                    </Box>
                </Flex>
            </Box>
        </>
    );
};
export default CompetitorPresencePieWidget;
