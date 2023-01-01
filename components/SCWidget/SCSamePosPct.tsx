import {
    Box, Center, Flex, Text, Heading, Progress,
    CircularProgress, CircularProgressLabel
} from '@chakra-ui/react';



const SCSamePosPct = () => {
    return (
        <>
            <Flex direction="column" bgColor="chart.primary" color="white" shadow="lg"  borderRadius='5px'>
                <Center display='flex' > With</Center>

                <Center display='flex' mt='2'>
                    <Heading as='h4' size='md'>
                        50%
                    </Heading>
                </Center>

                <Center display='flex' mt='2'>
                    <Text fontSize='xs'>of all competitors</Text>
                </Center>
                <Box mx='1' my='2'>
                    <Progress hasStripe value={50} colorScheme="orange" />
                </Box>

                <Center display='flex' my='2.5'>  <Text fontSize='10px'> in your Market Position </Text></Center>
                

            </Flex>

        </>
    );
};

export default SCSamePosPct;
