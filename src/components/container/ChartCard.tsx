import React, {ReactNode} from "react";
import {Box, Flex, Heading, Text} from "@chakra-ui/react";

type Props = {
    width: number;
    height: number;
    heading: string;
    explanation: string;
    summary: string;
    indicator: string;
    indicatorvalue: number;
    chart: ReactNode;
};
const ChartCard = (props: Props) => {

    return (
        <>
            <Box maxW="lg" m="4" p="1" borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Heading as="h1" bg="red.100" textAlign="center" fontSize="7xl">
                    {props.heading}
                    <Text fontSize="xl" textAlign="center">
                        Heading
                    </Text>
                </Heading>
                <Flex width="100%">
                    <Box w="50%" bg="green.100" borderRight="3px" borderRightStyle="solid" borderColor="gray.200">
                        <Text fontSize="md">
                            SubHead
                        </Text>
                    </Box>
                    <Box w="50%" bg="blue.100" minH="80px">
                        scoring
                    </Box>
                </Flex>
                <Flex w="100%">
                    {props.chart}
                </Flex>
                <Flex w="100%" bg="blue.100">
                    <Text fontSize="md" textAlign="center">
                        Explanation {props.explanation}
                    </Text>
                </Flex>
                <Flex w="100%" bg="yellow.100">
                    <Text fontSize="md" textAlign="center">
                        Summary {props.summary}
                    </Text>
                </Flex>
            </Box>
        </>
    );
};
export default ChartCard;
