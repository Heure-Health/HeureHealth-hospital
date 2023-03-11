import React, {ReactNode} from "react";
import {Box, Center, Flex, Heading, Text, Tooltip} from "@chakra-ui/react";
import {HiInformationCircle} from "react-icons/hi";

type Props = {
    width: string;
    height: string;
    headerlabel: string;
    summary: string;
    summaryValue: string;
    tooltip: string;
    chart: ReactNode;
};


const TrendlineRegionalWidget = (props: Props) => {
    return (
        <>
            <Box w={props.width} h='{props.height}' margin="1" padding="0" shadow="lg"
                 bg="gray.50" borderWidth="2px" borderRadius="10px" overflow="hidden">
                <Flex width="100%" p="3" bg="white" shadow="lg">
                    <Flex w="95%">
                        <Heading as="h2" textAlign="center" fontSize="0.8em">
                            <Flex>
                                <Text color="#000000">{props.headerlabel}</Text>
                            </Flex>
                        </Heading>
                    </Flex>
                    <Flex direction="row-reverse">
                        <Tooltip hasArrow label={props.tooltip} placement="bottom" bg="gray.100" color="gray.800">
                            <Box>
                                <Box as={HiInformationCircle} size="1em" color="gray.100"/>
                            </Box>
                        </Tooltip>
                    </Flex>
                </Flex>
                <Flex w="100%" h="220px" bg="#FFFFFF" shadow="md" height={"22.7em"}>
                    {props.chart}
                </Flex>
                <Flex width="100%" bg="white" shadow="md">
                    <Center fontSize="1.0em" color="gray.500" width={"100%"} fontWeight={"bold"}>
                        {props.summary} {props.summaryValue}
                    </Center>
                </Flex>
            </Box>
        </>
    );
};

export default TrendlineRegionalWidget;