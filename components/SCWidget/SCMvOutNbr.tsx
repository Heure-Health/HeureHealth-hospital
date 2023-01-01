import {
    Box, Center, Flex, Text,
    CircularProgress, CircularProgressLabel, Heading
} from '@chakra-ui/react';



const SCMvOutNbr = () => {
    return (
        <>
            <Flex direction="column" bgColor="chart.primary" color="white" shadow="md"  borderRadius='5px'>
                <Center display='flex' > And</Center>

                <Center display='flex' mt='2'>
                    <Heading as='h4' size='md'>
                        7
                    </Heading>
                </Center>

                <Center display='flex' mt='2'>
                    <Text fontSize='xs'>competitors</Text>
                </Center>

                <Box display='flex' mt='4' textAlign='center'>

                    <Text fontSize='10px'>moving out of your market position in the last rolling quarter</Text> </Box>

            </Flex>

        </>
    );
};

export default SCMvOutNbr;
