import React from "react";
import {Box, Text} from "@chakra-ui/react";

const Scorecard = () => {
    return (
        <>
            <Box bg='chart.secondary' w='100%' px={4} py={1} color='white'>
                <Text fontSize='10px'>In Perspective</Text>
                <hr/>

                <Box>
                    <Box sx={{mt: 1, mb: 1}}>
                        <Text fontSize='7px'>Current Position</Text>
                    </Box>

                    <Box>
                        <Box sx={{display: 'inline-block'}}>
                            <Text fontSize='15px'>6.77</Text>

                            <Text fontSize='7px'> Last Close</Text>

                        </Box>

                        <Box sx={{display: 'inline-block', ml: 3}}>
                            <Text fontSize='15px'>8.77</Text>

                            <Text fontSize='7px'> Open Today</Text>

                        </Box>
                    </Box>
                </Box>


                <Box sx={{mt: 2}}>
                    <Box sx={{mt: 1, mb: 1}}>
                        <Text fontSize='7px'>Farthest Competitor</Text>
                    </Box>

                    <Box>
                        <Box sx={{display: 'inline-block'}}>
                            <Text fontSize='15px'>NM</Text>

                            <Text fontSize='7px'> State</Text>

                        </Box>

                        <Box sx={{display: 'inline-block', ml: 3}}>
                            <Text fontSize='15px'>8.77</Text>

                            <Text fontSize='7px'> Pts above you</Text>

                        </Box>
                    </Box>
                </Box>

                <Box sx={{mt: 2}}>
                    <Box sx={{mt: 1, mb: 1}}>
                        <Text fontSize='7px'>Closest Competitor</Text>
                    </Box>

                    <Box>
                        <Box sx={{display: 'inline-block'}}>
                            <Text fontSize='15px'>CA</Text>

                            <Text fontSize='7px'> State</Text>

                        </Box>

                        <Box sx={{display: 'inline-block', ml: 3}}>
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
