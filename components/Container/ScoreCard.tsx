import React from "react";
import { Box, Text, Image, Heading, Flex, Center, Tooltip, useColorModeValue } from "@chakra-ui/react";

type Props = {
    Title: string;
    hasImg: boolean;
    children: ReactNode;
};
const Scorecard = (props: Props) => {
    return (
        <>{/* <Flex w="50%" borderRight="1px" borderColor="gray.300" m="1">
                       raaj</Flex>
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                {props.hasImg && <Image src="props.imgsrc" alt="props.imgalt" />}
                <Box p="6">
                    <Box d="flex" alignItems="baseline">
                        <Box
                            mt="1"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            isTruncated
                        >
                            <Text>{props.Title}</Text>
                        </Box>
                    </Box>
                </Box>
            </Box> */}

            <Box bg='chart.secondary' w='100%' px={4} py={1} color='white'>
                <Text fontSize='10px'>In Perspective</Text>
                <hr />

                <Box>
                    <Box sx={{ mt: 1, mb: 1 }}>
                        <Text fontSize='7px'>Current Position</Text>
                    </Box>

                    <Box>
                        <Box sx={{ display: 'inline-block' }}>
                            <Text fontSize='15px'>6.77</Text>

                            <Text fontSize='7px'> Last Close</Text>

                        </Box>

                        <Box sx={{ display: 'inline-block', ml: 3 }}>
                            <Text fontSize='15px'>8.77</Text>

                            <Text fontSize='7px'> Open Today</Text>

                        </Box>
                    </Box>
                </Box>


                <Box sx={{mt:2}}>
                    <Box sx={{ mt: 1, mb: 1 }}>
                        <Text fontSize='7px'>Farthest Competitor</Text>
                    </Box>

                    <Box>
                        <Box sx={{ display: 'inline-block' }}>
                            <Text fontSize='15px'>NM</Text>

                            <Text fontSize='7px'> State</Text>

                        </Box>

                        <Box sx={{ display: 'inline-block', ml: 3 }}>
                            <Text fontSize='15px'>8.77</Text>

                            <Text fontSize='7px'> Pts above you</Text>

                        </Box>
                    </Box>
                </Box>

                <Box sx={{mt:2}}>
                    <Box sx={{ mt: 1, mb: 1 }}>
                        <Text fontSize='7px'>Closest Competitor</Text>
                    </Box>

                    <Box>
                        <Box sx={{ display: 'inline-block' }}>
                            <Text fontSize='15px'>CA</Text>

                            <Text fontSize='7px'> State</Text>

                        </Box>

                        <Box sx={{ display: 'inline-block', ml: 3 }}>
                            <Text fontSize='15px'>8.77</Text>

                            <Text fontSize='7px'> Pts below you</Text>

                        </Box>
                    </Box>
                </Box>

            </Box>
        </>
    );
};

export default Scorecard;
