import React, {ReactNode} from "react";
import { Box, Text, Heading, Flex, Center, Tooltip, useColorModeValue } from "@chakra-ui/react";
import { HiInformationCircle } from "react-icons/hi";
import Scorecard from "./ScoreCard";


type Props = {
    width: string;
    height: string;
    headerlabel: string;
    headervalue: string;
    subheaderlabel: string;
    subheadervalue: string;
    trend1: string;
    trendInd1: string;
    trendScore1: string;
    trend2: string;
    trendInd2: string;
    trendScore2: string;
    trend3: string;
    trendInd3: string;
    trendScore3: string;
    summary1: string;
    summaryvalue1: string;
    summary2: string;
    summaryvalue2: string;
    tooltip: string;
    chart: ReactNode;
};


const CardCategoryLg = (props: Props) => {
    useColorModeValue("grey.100", "gray.800");
    return (
        <>
            <Box w={props.width} h='{props.height}' m="2" p="2" shadow="lg"
                bg="gray.50" borderWidth="2px" borderRadius="md" overflow="hidden">
                <Flex width="100%" p="3"
                    bg="blue.800"
                    shadow="lg"  >
                    <Flex w="95%">
                        <Heading as="h3" textAlign="center" fontSize="0.8em">
                            <Flex>
                                <Text color="gray.50">{props.headerlabel}</Text>
                                <Text pl="2" color="green.500">{props.headervalue}</Text>
                            </Flex>
                        </Heading>
                    </Flex>
                    <Flex direction="row-reverse">
                        <Tooltip hasArrow label={props.tooltip} placement="bottom" bg="gray.100" color="gray.800">
                            <Box>
                                <Box as={HiInformationCircle} size="1em" color="gray.100" />
                            </Box>
                        </Tooltip>
                    </Flex>

                </Flex>

                {/*  <Flex width="100%" p="3"
                    bg="blue.100"
                    shadow="lg" >
                    <Heading as="h3" textAlign="center" fontSize="0.8em">
                        <Flex>
                            <Text color="white">{props.subheaderlabel}</Text>
                            <Text pl="2" color="green.500">{props.subheadervalue}</Text>
                        </Flex>
                    </Heading>
                </Flex> */}

                <Flex w="100%" mt="2" bg="blue.100" shadow="md">
                    <Flex w="100%" bg="blue.100">

                        <Center fontSize="10px" color="blue.800">
                            {props.summary1}
                        </Center>

                    </Flex>
                </Flex>

                {/* <Flex w="100%" my="2" px="1" py="2" bgGradient="linear(to-r, white, gray.100)" shadow="md">
                    <Flex w="33%" borderRight="1px" borderColor="gray.300" px="1">
                        <Flex>
                            <Text fontSize="0.6em" color="gray.800">{props.trend1}</Text>
                            <Center>
                                <Box>
                                    <Box as={IoCaretDownOutline} size="1.5em" color="red.500" />
                                </Box>
                                <Text color="green.500" size="1.5em">{props.trendScore1}</Text></Center>
                        </Flex>
                    </Flex>
                    <Flex w="33%" borderRight="1px" borderColor="gray.300" px="1">
                        <Flex>
                            <Text fontSize="0.6em" color="gray.800">{props.trend2}</Text>
                            <Center>
                                <Text color="green.500" size="1.5em">{props.trendScore2}</Text></Center>
                        </Flex>
                    </Flex>
                    <Flex w="33%" px="1">
                        <Flex>
                            <Text fontSize="0.6em" color="gray.800">{props.trend3}</Text>
                            <Center>
                                <Box>
                                    <Box as={IoCaretUpOutline} size="1.5em" color="green.700" />
                                </Box>
                                <Text color="green.500" size="1.5em">{props.trendScore3}</Text>
                            </Center>
                        </Flex>
                    </Flex>
                </Flex> */}
                <Flex w="100%" h="220px" bgGradient="linear(to-r, white, gray.100)" shadow="md">
                    <Flex w="70%" borderRight="1px" borderColor="gray.300" m="1">
                        {props.chart} </Flex>
                    <Flex w="30%" borderRight="1px" borderColor="gray.300" m="1">
                        <Scorecard Title={""} hasImg={false} children={undefined}></Scorecard>
                    </Flex>
                </Flex>

                <Flex w="100%" mt="2" bg="blue.100" shadow="md">
                    <Flex w="100%" bg="blue.100">

                        <Center fontSize="10px" color="blue.800">
                            {props.summary2}
                        </Center>

                    </Flex>
                </Flex>
                {/* <Flex w="100%" mt="2" bgGradient="linear(to-r, white, gray.100)" shadow="md">
                    <Flex w="50%" bgGradient="linear(to-r, white, blue.100)">
                        <Flex w="28%" borderRight="1px" borderColor="gray.300" m="1">
                            <Center fontSize="1.5em" color="blue.800">
                                {props.summaryvalue1}
                            </Center>
                        </Flex>
                        <Flex w="70%" m="1">
                            <Center fontSize="0.7em" color="blue.800">
                                {props.summary1}
                            </Center>
                        </Flex>
                    </Flex>
                    <Flex w="50%" bgGradient="linear(to-r, white, blue.100)">
                        <Flex w="30%" borderRight="1px" borderColor="gray.300" m="1">
                            <Center fontSize="1.5em" color="blue.800">
                                {props.summaryvalue2}
                            </Center>
                        </Flex>
                        <Flex w="56%" m="1">
                            <Center fontSize="0.7em" color="blue.800">
                                {props.summary2}
                            </Center>
                        </Flex>
                    </Flex>
                </Flex> */}
            </Box>
        </>
    );
};

export default CardCategoryLg;
