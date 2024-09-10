import React, {ReactNode} from "react";
import {
    Box,
    Divider,
    Flex,
    Heading,
    IconButton,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    useDisclosure,
    Tooltip,
    Grid, 
    GridItem,
    Center
    } from "@chakra-ui/react";import {AddIcon} from "@chakra-ui/icons";
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
    scoreFontSize: string;
    scoreFontColor: string;
    scoreValue:number;
    pieChartObject: ReactNode;
};
const MarketPositionWidget = (params: Params) => {
        const { isOpen, onOpen, onClose } = useDisclosure();
        const {width, height, headerLabel, headerValue, headerValueFontSize, headerValueFontColor, tooltipText, pieChartHeight, scoreFontSize, scoreFontColor, scoreValue, pieChartObject} = params;
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
                </Flex >
                    <Flex w="100%"  justifyContent={"center"} alignItems={"center"} height={pieChartHeight} bgColor={"white"} width={"100%"}>
                        {pieChartObject}
                    </Flex>
                <Flex textAlign='center' direction={"column"}>
                    <Text fontSize={"12px"} verticalAlign={"text-top"} color={"#000000"}>Your Heure Score today</Text>
                    <Text fontSize={scoreFontSize} fontWeight={"bold"} verticalAlign={"text-bottom"} color={scoreFontColor}>{scoreValue}</Text>
                </Flex>
                <Divider orientation='horizontal' h={"1em"}/>
                <Flex direction={"row-reverse"}>
                    <IconButton aria-label='View Details' icon={<AddIcon/>} boxSize={"1.5em"} fontSize={"md"} fontWeight={"bold"} variant='ghost' onClick={onOpen}/>
                    <Box fontSize={"12px"} color={"#000000"}>
                        View detailed insights
                    </Box>
                </Flex>
                <Modal isOpen={isOpen} onClose={onClose} size="xl" mr="3" isCentered >
                    <ModalOverlay/>
                    <ModalContent maxW="800px" maxH="500px">
                        <ModalHeader>{headerLabel} 
                            <ToolTipWidget
                        tooltipText={tooltipText}
                        tooltipTextBGColor={"#000000"}
                        tooltipTextColor={"gray.100"}
                        tooltipSize={"1.25em"}
                        tooltipCircleBGColor={"grey"}
                        tooltipBGColor={"white"}
                    /></ModalHeader>
                        <Flex>
                            <ModalBody overflowY="auto" flex="1">
                            <Flex width="100%" p={2} height={"2em"}>
                    <Flex width={"100%"}>
                        <Heading as="h3" textAlign="center" fontSize={headerValueFontSize}>
                            <Flex>
                                <Text color="black"></Text>
                                
                            </Flex>
                        </Heading>
                    </Flex>
                </Flex>
                <Text>West Mountain RMC is positioned [above] [88%] of its West Region competition. Your Heure Score puts you in the top [3rd] tier which is in the [Leader] category. You’re further categorized as a ‘Vulnerable Leader’.</Text>
                <Tooltip label="The ‘speedometer dial’ visualizes where your organization is positioned on a 9-tier gauge based on a your HeureScore. The 3 main tiers are indicated in intuitive colors and are each further divided into 3 tiers for a more granular perspective." hasArrow>
                <Flex w="100%" height={pieChartHeight} justifyContent="center" bgColor={"white"} width={"100%"}>
                    {pieChartObject}
                </Flex>
                </Tooltip>
                <Flex textAlign='center' direction={"column"}>
                    <Text fontSize={"15px"} verticalAlign={"text-top"} color={"#000000"} bg="white">Your Heure Score today: <b>{scoreValue}</b></Text>
                </Flex>
                <Flex>
                    <Text fontSize={"15px"} verticalAlign={"text-top"} color={"#000000"}>A Vulnerable Leader‘s position is at risk of dropping into the Challenger tier. Positioned 9th  in the [West] region and [below] [12%] of other [Regional] competitors presents room to move up the Market Position dial. </Text>
                </Flex>
                </ModalBody>
                            <Box bg="#B7BBC6" width="33%" p={4}>
                            <Text fontSize={"10px"}>Score Last Closed at:</Text>
                            <Grid
                                h='30%'
                                templateRows='repeat(1, 1fr)'
                                templateColumns='repeat(2, 1fr)'
                                gap={5}>   
                                <GridItem colSpan={1}>
                                    <Text>
                                        6.786
                                    </Text>
                                </GridItem>
                                <GridItem colSpan={1}>
                                    <Text>
                                        6.786
                                    </Text>
                                </GridItem>
                            </Grid>
                            <Text fontSize={"10px"} >Your Farthest [Regional] Competitor</Text>
                            <Grid
                                h='30%'
                                templateRows='repeat(1, 1fr)'
                                templateColumns='repeat(2, 1fr)'
                                gap={5}>   
                                <GridItem colSpan={1}>
                                    <Text>
                                        6.786
                                    </Text>
                                </GridItem>
                                <GridItem colSpan={1}>
                                    <Text verticalAlign={"center"} >
                                        6.786
                                    </Text>
                                </GridItem>
                            </Grid>
                            <Text fontSize={"10px"}>Your Farthest [Regional] Competitor</Text>
                            <Grid
                                h='30%'
                                templateRows='repeat(1, 1fr)'
                                templateColumns='repeat(2, 1fr)'
                                gap={5}>   
                                <GridItem colSpan={1}>
                                    <Center>
                                    <Text>
                                        6.786
                                    </Text>
                                    </Center>
                                </GridItem>
                                <GridItem colSpan={1}>
                                    <Text>
                                        6.786
                                    </Text>
                                </GridItem>
                            </Grid>
                            </Box>
                        </Flex>
                    </ModalContent>
                </Modal>
            </Box>
        </>
    );
};
export default MarketPositionWidget;
