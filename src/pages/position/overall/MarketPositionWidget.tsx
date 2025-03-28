import React, { ReactNode } from "react";
import {
    Box,
    Divider,
    Flex, // Make sure Flex is imported
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
    Center,
    VStack,
    Spacer,
} from "@chakra-ui/react";
import { AddIcon, TriangleDownIcon } from "@chakra-ui/icons";
import ToolTipWidget from "../../../components/common/ToolTipWidget"; // Assuming path is correct

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
    scoreValue: number;
    pieChartObject: ReactNode;
};

const MarketPositionWidget = (params: Params) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { width, height, headerLabel, headerValue, headerValueFontSize, headerValueFontColor, tooltipText, pieChartHeight, scoreFontSize, scoreFontColor, scoreValue, pieChartObject } = params;

    // --- Hardcoded values from the image for the "In Perspective" section ---
    const scoreLastClosed = 6.786;
    const scoreDifferentialPercent = -0.43; // Representing -0.43%
    const farthestCompetitorName = "Mountain";
    const farthestCompetitorDiff = "+1.325";
    const closestCompetitorName = "Pacific";
    const closestCompetitorDiff = "-0.007";
    // --- ---

    return (
        <>
            <Box w={width} h={height} shadow="lg" bg="white" borderWidth="2px" borderRadius="10px" minWidth={width} display="flex" flexDirection="column">
                {/* Header Section */}
                <Flex width="100%" bg="white" p={2} borderTopRadius="8px" alignItems="center">
                    <Flex flex="1">
                        <Heading as="h3" textAlign="left" fontSize={headerValueFontSize} display="flex" alignItems="baseline">
                            <Text color="black" mr={2}>{headerLabel}</Text>
                            <Text color={headerValueFontColor} fontWeight="bold">{headerValue}</Text>
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

                {/* Pie Chart Section */}
                <Flex w="100%" justifyContent={"center"} alignItems={"center"} height={`${pieChartHeight}px`} bgColor={"white"}>
                    {pieChartObject}
                </Flex>

                {/* Score Section */}
                <Flex textAlign='center' direction={"column"} mt={2} mb={2}>
                    <Text fontSize={"12px"} color={"#555555"}>Your Heure Score today:</Text>
                    <Text fontSize={scoreFontSize} fontWeight={"bold"} color={scoreFontColor}>{scoreValue.toFixed(3)}</Text>
                </Flex>

                <Spacer /> {/* Pushes the details link to the bottom */}

                {/* Footer/Details Link Section */}
                <Divider orientation='horizontal' />
                <Flex direction={"row-reverse"} align="center" p={2} bg="white" borderBottomRadius="8px">
                    <IconButton aria-label='View Details' icon={<AddIcon />} boxSize={"1.5em"} fontSize={"md"} fontWeight={"bold"} variant='ghost' onClick={onOpen} ml={1}/>
                    <Button variant="link" size="sm" onClick={onOpen} color={"black"} fontWeight="normal" _hover={{ textDecoration: 'underline' }}>
                        View detailed insights
                    </Button>
                </Flex>

                {/* --- Modal Implementation --- */}
                <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
                    <ModalOverlay />
                    <ModalContent maxW="850px" maxH="600px">
                        {/* === MODIFIED ModalHeader === */}
                        {/* Use Flex inside the header for alignment control */}
                        {/* Adjust padding (py) as needed for desired vertical spacing */}
                        <ModalHeader py={3} px={4}> {/* py controls vertical padding, px horizontal */}
                            <Flex alignItems="center" justifyContent="space-between" width="100%">
                                {/* Text part */}
                                <Box> {/* Wrap text content */}
                                    {headerLabel}{' '} {/* Added space for readability */}
                                    <Text as="span" color={headerValueFontColor} fontWeight="bold">
                                        {headerValue}
                                    </Text>
                                </Box>
                                {/* Tooltip part */}
                                <ToolTipWidget
                                    tooltipText={tooltipText}
                                    tooltipTextBGColor={"#000000"}
                                    tooltipTextColor={"gray.100"}
                                    tooltipSize={"1.25em"} // Ensure size is appropriate
                                    tooltipCircleBGColor={"grey"}
                                    tooltipBGColor={"white"}
                                />
                            </Flex>
                        </ModalHeader>
                        {/* === END MODIFIED ModalHeader === */}

                        <Divider />

                        {/* Modal Body split into two columns */}
                        <Flex h="100%"> {/* Use Flex for side-by-side layout */}

                            {/* Left Side of Modal */}
                            <ModalBody overflowY="auto" flex="2" p={4} borderRight="1px solid" borderColor="gray.200"> {/* Takes ~2/3 width */}
                                <Text mb={4} fontSize="sm">
                                    West Mountain RMC is positioned [above] [88%] of its West Region competition.
                                    Your Heure Score puts you in the top [3rd] tier which is in the [Leader] category.
                                    You’re further categorized as a ‘Vulnerable Leader’.
                                </Text>
                                <Tooltip label="The ‘speedometer dial’ visualizes where your organization is positioned on a 9-tier gauge based on a your HeureScore. The 3 main tiers are indicated in intuitive colors and are each further divided into 3 tiers for a more granular perspective." hasArrow placement="top">
                                    <Flex w="100%" height={`${pieChartHeight}px`} justifyContent="center" alignItems="center" bgColor={"white"}>
                                        {pieChartObject}
                                    </Flex>
                                </Tooltip>
                                <Flex textAlign='center' direction={"column"} mt={3}>
                                    <Text fontSize={"md"} color={"#000000"} bg="white">Your Heure Score today: <Text as="span" fontWeight="bold">{scoreValue.toFixed(3)}</Text></Text>
                                </Flex>
                                <Text mt={4} fontSize="sm">
                                    A Vulnerable Leader‘s position is at risk of dropping into the Challenger tier. Positioned [above] [12%] of other [Regional] competitors presents room to move up the Market Position dial.
                                </Text>
                            </ModalBody>

                            {/* Right Side of Modal ("In Perspective") */}
                            <Box bg="#E9EDF5" width="35%" p={4} display="flex" flexDirection="column"> {/* Adjusted background color, takes ~1/3 width */}
                                <Heading as="h4" size="md" mb={5} fontWeight="semibold" color="gray.700">In Perspective</Heading>

                                <VStack spacing={6} align="stretch">

                                    {/* Score Last Closed Section */}
                                    <Box>
                                        <Text fontSize="xs" color="gray.600" mb={1}>Score Last Closed at:</Text>
                                        <Flex justify="space-between" align="center">
                                            <Flex align="center">
                                                {scoreDifferentialPercent < 0 && <TriangleDownIcon color="red.500" mr={1} boxSize="14px"/>}
                                                {/* Add TriangleUpIcon logic if scoreDifferentialPercent > 0 */}
                                                <Text fontSize="2xl" fontWeight="bold" color="gray.800">
                                                    {scoreLastClosed.toFixed(3)}
                                                </Text>
                                            </Flex>
                                            <Box textAlign="right">
                                                <Text fontSize="xl" fontWeight="bold" color={scoreDifferentialPercent < 0 ? "red.500" : "green.500"}>
                                                    {scoreDifferentialPercent.toFixed(2)}%
                                                </Text>
                                                <Text fontSize="xs" color="gray.600" lineHeight="tight">Today's score<br/>differential</Text>
                                            </Box>
                                        </Flex>
                                    </Box>

                                    <Divider/>

                                    {/* Farthest Competitor Section */}
                                     <Box>
                                        <Text fontSize="xs" color="gray.600" mb={1}>Your Farthest [Regional] Competitor:</Text>
                                        <Flex justify="space-between" align="center">
                                            <Box>
                                                <Text fontSize="lg" fontWeight="bold" color="gray.800">{farthestCompetitorName}</Text>
                                                <Text fontSize="xs" color="gray.600">Division</Text>
                                            </Box>
                                            <Box textAlign="right">
                                                <Text fontSize="lg" fontWeight="bold" color={farthestCompetitorDiff.startsWith('+') ? "green.500" : "red.500"}>
                                                     {farthestCompetitorDiff}
                                                </Text>
                                                 <Text fontSize="xs" color="gray.600" lineHeight="tight">Score<br/>differential</Text>
                                            </Box>
                                        </Flex>
                                    </Box>

                                    <Divider/>

                                    {/* Closest Competitor Section */}
                                    <Box>
                                        <Text fontSize="xs" color="gray.600" mb={1}>Your Closest [Regional] Competitor:</Text>
                                        <Flex justify="space-between" align="center">
                                            <Box>
                                                <Text fontSize="lg" fontWeight="bold" color="gray.800">{closestCompetitorName}</Text>
                                                <Text fontSize="xs" color="gray.600">Division</Text>
                                            </Box>
                                            <Box textAlign="right">
                                                <Text fontSize="lg" fontWeight="bold" color={closestCompetitorDiff.startsWith('+') ? "green.500" : "red.500"}>
                                                    {closestCompetitorDiff}
                                                </Text>
                                                 <Text fontSize="xs" color="gray.600" lineHeight="tight">Score<br/>differential</Text>
                                            </Box>
                                        </Flex>
                                    </Box>

                                </VStack>
                            </Box>
                        </Flex>
                    </ModalContent>
                </Modal>
            </Box>
        </>
    );
};

export default MarketPositionWidget;