import {
    Box, Center, Flex, Text, Heading, Progress
} from '@chakra-ui/react';
const SCSamePosPct = (params) => {
    return (
        <>
            <Flex direction="column" bgColor="chart.primary" color="white" shadow="lg"  borderRadius='10px'>
                <Center display='flex' fontSize={{base: '24px', md: '26px', lg: '28px'}} mt='1'> With</Center>
                <Center display='flex' mt='7'>
                    <Heading fontSize={{base: '26px', md: '30px', lg: '36px'}}>
                        {params.value + "%"}
                    </Heading>
                </Center>
                <Center display='flex' mt='7'>
                    <Text fontSize={{ base: '14px', md: '16px', lg: '18px' }}>of all competitors</Text>
                </Center>
                <Box mx='25' my='25'>
                    <Progress hasStripe value={params.value} colorScheme="orange" max={100}/>
                </Box>
                <Center display='flex' my='2.5'>  <Text fontSize={{ base: '14px', md: '16px', lg: '18px' }}> in your Market Position </Text></Center>
            </Flex>
        </>
    );
};
export default SCSamePosPct;