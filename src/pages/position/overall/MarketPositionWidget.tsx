import React, {ReactNode} from "react";
import {
    Box,
    Divider,
    Flex,
    Heading,
    IconButton,
    Text,
    Tooltip,
    useColorModeValue
} from "@chakra-ui/react";
import {HiInformationCircle} from "react-icons/hi";
import {AddIcon} from "@chakra-ui/icons";

type Params = {
    width: string;
    height: string;
    headerlabel: string;
    headervalue: string;
    tooltip: string;
    pieChartHeight: number;
    pieChartObject: ReactNode;
};
const MarketPositionWidget = (params: Params) => {
        const {width, height, headerlabel, headervalue, tooltip, pieChartHeight, pieChartObject} = params;
        useColorModeValue("grey.100", "gray.800");
    return (
        <>
            <Box w={width} h={height} shadow="lg" bg="white" borderWidth="2px" borderRadius="10px" minWidth={width}>
                <Flex width="100%" bg="white" p={2} height={"2em"}>
                    <Flex width={"100%"}>
                        <Heading as="h3" textAlign="center" fontSize="0.85em">
                            <Flex>
                                <Text color="black">{headerlabel}</Text>
                                <Text pl="2" color="black">{headervalue}</Text>
                            </Flex>
                        </Heading>
                    </Flex>
                    <Flex direction="row">
                        <Tooltip hasArrow label={tooltip} placement="bottom" bg={"black"} color="gray.100">
                            <Box>
                                <Box as={HiInformationCircle} size="1.25em" color="grey" bgColor={"white"}/>
                            </Box>
                        </Tooltip>
                    </Flex>
                </Flex>
                <Flex w="100%" height={pieChartHeight} bgColor={"white"}>
                    {pieChartObject}
                </Flex>
                <Flex textAlign='center' direction={"column"}>
                    <Text fontSize={"12px"} verticalAlign={"text-top"} color={"#000000"}>Your Heure Score today</Text>
                    <Text fontSize={"14px"} fontWeight={"bold"} verticalAlign={"text-bottom"} color={"#000000"}>5.398</Text>
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
export default MarketPositionWidget;
